### rsync同步数据
1. 介绍
rsync – remote synchronize是类unix系统下的数据镜像备份工具，它的特性如下：
- 可以镜像保存整个目录树和文件系统。
- 可以很容易做到保持原来文件的权限、时间、软硬链接等等。
- 无须特殊权限即可安装。
- 快速：第一次同步时rsync会复制全部内容，但在下一次只传输修改过的文件
- rsync在传输数据的过程中可以实行压缩及解压缩操作，因此可以使用更少的带宽。
- 安全：可以使用rcp、ssh等方式来传输文件，当然也可以通过直接的socket连接。
- 支持匿名rsync 同步文件，是理想的镜像工具。
2. 安装
检测是否安装rsync服务
`rpm -qa|grep rsync`
服务端和客户端安装rsync
`yum -y install rsync`
也可以源码安装
rsync下载地址：http://rsync.samba.org/
`./configure
make && make install`
我们将SLB下面两台服务器分为服务器A与服务器B，服务器A为主服务器，但是需要注意的是必须在服务器A(100.xxx.xxx.1)和 B(100.xxx.xxx.2)上都安装rsync，其中A服务器上是以服务器模式运行rsync，而B上则以客户端方式运行rsync。这样在web 服务器A上运行rsync守护进程，在B上定时运行客户程序来备份web服务器A上需要备份的内容。
3. 服务器A配置
   ```sh
    vi /etc/rsyncd.conf #根据你自己的rsyncd.conf文件所以目录而定

    strict modes = yes
    port = 873
    uid = root
    gid = root
    user chroot = no
    max connections = 5                 #同时的最大连接数
    timeout = 600
    pid file = /var/run/rsyncd.pid      #进程的pid存放文件位置
    lock file = /var/run/rsyncd.lock    #lock文件位置
    log file = /var/log/rsyncd.log      #日志文件位置

    [backup]                          #建立一个备份名，服务器B通过该名称指定具体的备份位置，可自定义
    path=/www/wwwroot/web                 #备份文件存放的目录位置
    ignore errors
    read only = no
    list = no
    hosts allow = 100.xxx.xxx.2,100.xxx.xxx.3       #允许服务器B地址，如果是内网可以使用内网IP，多个ip用逗号隔开
    auth users = root                   #允许那些用户，这里的用户test的信息存放在/etc/rsyncd.password
    secrets file = /etc/rsyncd.password #指定允许的用户和用户密码
   ```
    注意：
    `chmod 600 /etc/rsyncd.password`

    建立用户密码文件：
    `vi /etc/rsyncd.password
    root:123456 #允许的用户和密码`
    修改防火墙策略，允许873端口（tcp/udp）
    `vi /etc/sysconfig/iptables #加入下面的规则
    -A INPUT -s 100.xxx.xxx.2 -p tcp -m state --state NEW -m tcp --dport 873 -j ACCEPT #授权B服务器访问A服务器873端口`
    启动服务器端
    `/usr/bin/rsync --daemon --config=/etc/rsyncd.conf
    添加rsyncd开机自启动
    echo '/usr/bin/rsync --daemon --config=/etc/rsyncd.conf' >> /etc/rc.local`
4. 服务器B配置
   ```sh
    vi /etc/rsyncd.password
    123456  #服务器A设置的密码
    chmod 600 /etc/rsyncd.password  #需要将密码文件权限设置为600，否者会出现password file must not be other-accessible错误

    /usr/bin/rsync -avzP --delete  --progress --password-file=/etc/rsyncd.password root@100.xxx.xxx.1::backup /www/wwwroot/web
   ```
   设置每天自动同步任务
   ```sh
    crontab -e #(可以定时每三分钟同步一次文件)加入下方内容
    */3 * * * * /usr/bin/rsync -avzP --delete --progress --exclude=排除的不需同步目录 --password-file=/etc/rsyncd.password root@100.xxx.xxx.1::backup /www/wwwroot/web > /dev/null 2>&1
   ```
   从命令行排除文件
   ```sh
   rsync -aAXhv --exclude={"/var/cache","/var/tmp"} /var /home/adrian/var
   ```

   例如
   ```sh
   /usr/bin/rsync -avzP --delete  --progress --exclude 'data/runtime/*' --exclude 'public/api/upload/*' --exclude 'public/upload/*' --password-file=/etc/rsyncd.password root@116.62.127.36::backup /www/wwwroot/control.gugesport.com
   ```
   排除文件和目录列表（创建一个名为“excluded.list”的文件）
   ```sh
   rsync -aAXhv --exclude-from=excluded.list / /mnt/backup
   ```
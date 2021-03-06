### Git 工作流程
---
三种常用的工作流：
- Git flow
- Github flow
- Gitlab flow

#### Git flow
---
1. 特点
   1. 存在两个长期分支。
      - 主分支`master`
      - 开发分支`develop`
   2. 三种短期分支。
      - 功能分支（feature branch）
      - 补丁分支（hotfix branch）
      - 预发分支（release branch）
    一旦完成开发，就会被合并进`develop`或`master`，然后被删除。
2. 评价
   Git flow的优点是清晰可控，缺点是相对复杂，需要同时维护两个长期分支。大多数工具都将`master`当作默认分支，可是开发是在`develop`分支进行的，这导致经常要切换分支，非常烦人。

   更大问题在于，这个模式是基于"版本发布"的，目标是一段时间以后产出一个新版本。但是，很多网站项目是"持续发布"，代码一有变动，就部署一次。这时，`master`分支和`develop`分支的差别不大，没必要维护两个长期分支。
---
#### Github flow
---
1. 流程
   它只有一个长期分支`master`。
   官方推荐流程如下：
   ![github flow](./image/githubflow.png "github flow")
   - 根据需求，从`master`拉出新分支，不区分功能分支或补丁分支。
   - 新分支开发完成后，或者需要讨论的时候，就向`master`发起一个`pull request`（简称PR）
   - `Pull Request`既是一个通知，让别人注意到你的请求，又是一种对话机制，大家一起评审和讨论你的代码。对话过程中，你还可以不断提交代码。
   - 你的`Pull Request`被接受，合并进`master`，重新部署后，原来你拉出来的那个分支就被删除。（先部署再合并也可。）
2. 评价
   `Github flow` 的最大优点就是简单，对于"持续发布"的产品，可以说是最合适的流程。

   问题在于它的假设：`master`分支的更新与产品的发布是一致的。也就是说，`master`分支的最新代码，默认就是当前的线上代码。

   可是，有些时候并非如此，代码合并进入`master`分支，并不代表它就能立刻发布。比如，苹果商店的APP提交审核以后，等一段时间才能上架。这时，如果还有新的代码提交，master分支就会与刚发布的版本不一致。另一个例子是，有些公司有发布窗口，只有指定时间才能发布，这也会导致线上版本落后于`master`分支。

   上面这种情况，只有`master`一个主分支就不够用了。通常，你不得不在`master`分支以外，另外新建一个`production`分支跟踪线上版本。
---
#### Gitlab flow
Gitlab flow 是 Git flow 与 Github flow 的综合。它吸取了两者的优点，既有适应不同开发环境的弹性，又有单一主分支的简单和便利。它是 Gitlab.com 推荐的做法。

1. 上游优先
   Gitlab flow的最大原则叫做“上游优先”，即只存在一个主分支`master`，它是所有其他分支的“上游”。
   - Linus Torvalds的分支
   - 子系统（比如netdev）的分支
   - 设备厂商（比如三星）的分支
2. 持续发布
   ![gitlab flow](./image/gitlabflow.png "gitlab flow")
   对于“持续发布”的项目，它建议在`master`分支以外，再建立不同的环境分支。比如，“开发环境”的分支是`master`，“预发环境”的分支是`per-production`，“生产环境”的分支是`production`。
   开发分支是预发分支的"上游"，预发分支又是生产分支的"上游"。代码的变化，必须由"上游"向"下游"发展。比如，生产环境出现了bug，这时就要新建一个功能分支，先把它合并到`master`，确认没有问题，再`cherry-pick`到`pre-production`，这一步也没有问题，才进入`production`。
   只有紧急情况，才允许跳过上游，直接合并到下游分支。
3. 版本发布
![stable](./image/stable.png "版本发布")

对于"版本发布"的项目，建议的做法是每一个稳定版本，都要从master分支拉出一个分支，比如2-3-stable、2-4-stable等等。

以后，只有修补bug，才允许将代码合并到这些分支，并且此时要更新小版本号。
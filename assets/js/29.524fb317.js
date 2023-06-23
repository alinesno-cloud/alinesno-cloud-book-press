(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{310:function(v,_,a){"use strict";a.r(_);var t=a(7),s=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"政务项目微服务和中台架构落地实战"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#政务项目微服务和中台架构落地实战"}},[v._v("#")]),v._v(" 政务项目微服务和中台架构落地实战")]),v._v(" "),_("h2",{attrs:{id:"基本背景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基本背景"}},[v._v("#")]),v._v(" 基本背景")]),v._v(" "),_("p",[v._v("前期主要进行需求调研，进入研究阶段，两个一线的城市信息化项目，整体项目的规模在亿级左右（硬件是使用厂家云平台和阿里云），整体项目采用分布式，组件化开发，从设计到初步验收（只是初验）大概3年时间。整体项目包含有两个外包团队和多区域团队，还有很多第三方的采购件，如工作流，APM等，相对来说，团队组织结构是比较复杂的，内部的组织结构还是部门型，即按开发组，测试组等，软件开发较为传统，还是老的单体结构，原项目架构非常老，还是Servlet、Strtus2、JDBC、EJB等，研发思维思维都以保守为主。")]),v._v(" "),_("p",[v._v("项目中我的角色是平台架构设计和平台组负责人，属于新血类型。整个记录过程，大多是以自己心得体会为主线。整体过程按《前期 — 中上期 — 中下期 — 后期》几个过程进行描述，着重写这几个过程中出现的心得。")]),v._v(" "),_("h2",{attrs:{id:"前期阶段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前期阶段"}},[v._v("#")]),v._v(" 前期阶段")]),v._v(" "),_("blockquote",[_("p",[v._v("沟通是落实最实在也是最重要的一步")])]),v._v(" "),_("h3",{attrs:{id:"保守的研发观念-与新的平台架构观念融合过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#保守的研发观念-与新的平台架构观念融合过程"}},[v._v("#")]),v._v(" 保守的研发观念，与新的平台架构观念融合过程")]),v._v(" "),_("p",[v._v("开始的时候，我这边是负责技术的吸取和学习，这个过程中，出现的激烈讨论是相对比较多的，互相埋怨也是较多，互相沟通也是最多的。")]),v._v(" "),_("p",[v._v("打破传统，让团队接受并快速成长，接受平台的观念，是项目前期的比较重要的工作。 是于项目开始的时候，邀请了一个做过类似大型项目架构设计，有经验的架构师在公司搭建了一套平台，同时做了一段时间的内部培训，造成内部不少的讨论，平台可行性，是否可以这么做，事务怎么办，所谓的可靠消息，是否真的可靠等。引入分布式思维，统一研发平台思维。我这边的责任，便是与他学习，快速积累经验和了解平台结构。")]),v._v(" "),_("p",[v._v("很快，在为期1个月的熟悉之后，了解整体分布式结构（其实就是微服务架构），同时熟悉整体开发平台（其实就是PaaS平台），很快投入了前期试点项目，我这边协助开发平台的搭建和运维，保障前期项目的顺利进行。在这个过程中，也不断地邀请总公司的负责架构人员，或者技术负责人一起到广州进行讨论。方式也很简单粗暴，一帮人坐下来，针对设计的平台进行讨论，坐而论道。难免，一坐下来，就是意见不同，然后激烈的讨论（无可否认，讨论也是一项比较有技巧的技能）。")]),v._v(" "),_("p",[v._v("很快，试点项目就发现问题，工期有延期，无法达到平台预期的效果，整体开始针对试点项目进行讨论，多区域一起讨论。平台组无法给开发组提升相应的开发支持（规范、规划、要求等），再加上前期对平台是否可落地的不明确，结论很显然，吵架又是再所难免，同时也预示着：平台落地出现了问题。整个会议几乎从开始到结束，都是针对平台的批评，技术的抨击，几乎让我无法抬头，甚至几乎无法面对开发，包括下一步的实施，甚至几乎到产生自我怀疑的态度。")]),v._v(" "),_("p",[v._v("平台初步落实的问题，这样的情况下，推广新平台，包括后期的内部实施，无非是又加一层难度 。几乎进行了为期一个多月的反思，找问题：为什么照着现成的平台，而且有成功实施经验的平台架构，在内部一实施就出现问题，问题点在哪里。之前平台架构整体规划及演示都很完善，为什么在内部实施一走就出问题。在不断的吸收前人平台设计经验的同时，也是不断的网上找各种资料（资料都说好，真的好么？），更是考虑内部实际的情况，光这几步，也差不多够折磨人，心态也开始有些浮躁，焦虑，不安等，更别说要休息，闭着眼就想着怎么落实的问题。")]),v._v(" "),_("p",[v._v("虽然过程中问题很多，待处理的问题也很多，但最终项目还是能落地下面，同时顺利上线。正是因为有了前面的各种讨论，意见的磨合，为下一步大项为了一个准备。")]),v._v(" "),_("h3",{attrs:{id:"针对于跨团队-跨部门-跨地域-进行沟通过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#针对于跨团队-跨部门-跨地域-进行沟通过程"}},[v._v("#")]),v._v(" 针对于跨团队，跨部门，跨地域，进行沟通过程")]),v._v(" "),_("p",[v._v("在后面的时候，由于各种各样的原因（可这么理解，家家有本经，即根据实际情况），内部做了一些组织调整，平台的设计和管理工作，转到我这里，从技术负责转变成平台管理，也就是平台组的负责人。")]),v._v(" "),_("p",[v._v("前面阶段的试点，讨论，还有各种或者说N多的技术问题积累之后，对平台做了重新规划，对之前的那套研发平台进行整体规划，然后服务器资源，还有管理方式都做了进一步调整，以符合实际场景。在进一步内部评审之后，新的平台架构通过大家的意见，这一步无非给自己增大了很大信心。并升级的平台架构，对前面试点过程中的问题处理，比如包括规范更加明显，沟通更加明确，还有组织结构也更加清晰等，在进行讨论确认新平台架构和方向之后，便是团队怎么消化和落实平台，怎么结合实际大项目，投入实施。")]),v._v(" "),_("p",[v._v("开始的项目组织结构就已经让我头疼不已，外包都有相对应的负责人，而且经验和资历都不浅，还有南宁这边的团队。内部除了开发以外，还有测试，运维这些部门，开始的第一步落实，怎么沟通，就让我倍有压力。")]),v._v(" "),_("p",[v._v("项目组按业务进行分组开发，平台为他们做好服务设计和组件设计 。不出所料，项目组一开始就有出现小组意见不合的情况，同时各个负责人都有自己的想法，各有各意见，负责人之前，很难说服对方。而平台组按目前的情况，还属于前期，是无法去统一的所有意见的，更别说去跟这些负责人碰，要么头破血流，要么自讨没趣。这样的情况，协调领导，把情况表明反馈领导，组织，开始进一步讨论， 又是一个个非常激烈的讨论，但最终的，还是统一意见下来。")]),v._v(" "),_("p",[v._v("在这样的情况下，平台组在各个负责人之间，作为基础服务，难免会有委屈，如受到一些非议，还有一些不认可。但总的来说，这个过程好，至少来说，都是往更好的方向发展的。前期开始工程规划，到小组成员沟通，这几个过程还是比较顺利，沟通习惯和制度也慢慢地有形式。也正是因为前期，还没有过多的外部压力，同时也是内部的一种讨论，相对来说，还是比较可接受。")]),v._v(" "),_("h3",{attrs:{id:"平台与业务的碰撞-落实过程怎么走好第一步"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#平台与业务的碰撞-落实过程怎么走好第一步"}},[v._v("#")]),v._v(" 平台与业务的碰撞，落实过程怎么走好第一步")]),v._v(" "),_("p",[v._v("怎么驱动开发接受新的技术，让他们成长，同时利于平台的进一步实施，这几乎是前期最难的。驱动一个人学习，让他学会思考，还在照着你的方向去思考，这几乎就是矛盾的开始点，但也是需要去做的点，而且是必须要做的点。")]),v._v(" "),_("p",[v._v("前期规划得最好的方式，也是要求得很严格的操作，就是文档。在每一个问题，还有每个操作过程都产生文档，让开发可查询，可操作。整体前期在研究过程中，便积累了大量的文档，这些开始培养，然后介绍，过程都很完善，并显示了怎么编写上传等，原以为准备那么充分，以为可以为开发提供更好的便利。")]),v._v(" "),_("p",[v._v("但是在真正落实的时候，才发现，文档与实际的项目过程问题有区别，而且很不完善（开始已经对文档了很严格的要求），文档可实施性真正结合到项目里的时候，各个N多的场景根本无法融合。更有一点致命的是，原习惯使用Office文档的，而规划的时候，操作使用线上文档，内部根本不习惯这样的操作。同时还有一个更有意思的问题，文档太多，过程中不知道怎么查找符合自己的场景的，可能有很多关键字类似的，但是查询几次之后，发现与开发编码过程中实际想要不一样，等等这些问题。然后开发过程中发现，还不如百度出来得更快。")]),v._v(" "),_("p",[v._v("在文档规划及实施这块上，各种问题的出现，无非给平台组一个打击：给了一个好像很好，但是可用性不高的东西，多少有些鸡肋。还有类似的就是平台任务管理平台（类似于Jira），前期的时候，可能还能接受，但是后面实施也一样的鸡肋，根本不符合团队实际的习惯。开始尝试压着使用，但是这样的情况往往更糟糕，反弹的效果，很可能直接引起冲突，甚至相关负责人的否定，引起团队对平台的进一步怀疑。")]),v._v(" "),_("p",[v._v("不得不做内部反思，调整平台落地的方案，不得已，把平台规划再做一次调整，并做组内讨论（大的方向是正确的，只是调整部分），把一些“美好”的规划去掉，避免开发过程中的冲突，然后在遇到问题的时候，进行平台方向的引导，慢慢的过渡这个过程。要团队接受这个过程，非常长，近乎1年，很大一部分促进的功能，是开发过程及相关条件（比如压力，团队的文化的积累），而且有一些还是不能很好落地，比如原规划的自动化运维。")]),v._v(" "),_("h3",{attrs:{id:"怎么让研发接受新的开发技术和管理过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#怎么让研发接受新的开发技术和管理过程"}},[v._v("#")]),v._v(" 怎么让研发接受新的开发技术和管理过程")]),v._v(" "),_("p",[v._v("从开始到慢慢接受这个过程，几乎是一个一言难尽的过程。这几乎要改变的不是一个人的开发习惯，而是一群人的开发习惯，不仅仅如此，还要面对未知新技术带来的各种未知问题，如接口开发前后的问题，开发版本管理的问题，还有各个各样环境（如网络）导致的各个异常引发等等。")]),v._v(" "),_("p",[v._v("当时有两个办公室，还有一个开发群，几乎有一段时间，都是两边都跑，然后一坐下来，可能群上或者就有各个QQ信息，包下载不了，怎么调用不了服务，这个异常那个异常等，还有包打错的，再加上maven一连串的依赖（这个证实前期设计的疏忽，是一个很小的细节引发），导致各种莫名其秒的问题，每天的工作就是沟通，处理，然后再沟通，再处理。当时很是担心，就怕这块异常引发开发的对平台组的信心减少，开发来上班，自己就比他们提前一点检查环境，开发加班，也跟着加班，如果开发走不下去，可能就是各种电话沟通，信息发过来是各个平台的问题，甚至的，有一段时间，通讯信息都不想打开，一听到电话，就猜到哪里哪里可能出问题了。这样的情况前期持续了差不多2个多月，几乎让我喘不过气。")]),v._v(" "),_("p",[v._v("后来才发现，前期这样的情况还好一些，中后期的时候，可能更为严重，异常处理都是半夜的，而且持续好长时间")]),v._v(" "),_("p",[v._v("经过这段时间的不断融合，可能产生各种问题，比如沟通，或者不理解，还有一些压力，甚至包括一些冲突等，但最终还是把这个过程落地下来。持续了一段时间的 “问题” 热度之后，技术和整个新的研发流程，研发管理流程也已经慢慢理下来，后期遇到的，更多的就是业务性的问题，这个便是由业务组沟通处理，平台组做技术协助。")]),v._v(" "),_("h2",{attrs:{id:"中上期阶段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#中上期阶段"}},[v._v("#")]),v._v(" 中上期阶段")]),v._v(" "),_("p",[v._v("做事过程，就必然有问题，不要指望完美")]),v._v(" "),_("h3",{attrs:{id:"平台组成员压力太大-怎么克服"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#平台组成员压力太大-怎么克服"}},[v._v("#")]),v._v(" 平台组成员压力太大，怎么克服")]),v._v(" "),_("p",[v._v("这个问题的出现，有必然，也有偶然。并不是说什么样的条件，也不是说什么样的环境，最终由实际的团队情况，环境，约束等方方面面来决定的。投入开发过程中，开发组对平台组提了要求，需要完成的任务有没有达到的情况比较多，还有各个方面的经验还有实际情况，无法满足开发组，这个时候，便意味着，冲突的开始。")]),v._v(" "),_("p",[v._v("从上往下过程中就发现问题点，平台组并不是直接面向项目组，所以有一些隐藏性的问题，并不是一时的出现，这个过程可能会包含有遗忘、异常、侥幸、研发等，不过最终还是会暴露，这也不得不明确一点，遇到问题要及时提出，以避免进入深一层次的问题出现。而面对这样的情况，业务组在项目中期的时候，就全面爆发。异常多的问题冲向平台组，计划不断地被打断，一些原来基础简单的工作，几乎无法完成。常常一有问题就得马上响应和处理，而原计划的工作却又落下，不断重复和积累 ….")]),v._v(" "),_("p",[v._v("很快，以上的表现很快到人能力，小组能力的质疑，进行对平台能力的怀疑，是否能撑起业务组的开发过程。同时各种不满的意见，声音，反馈开始慢慢在项目组低下传播，业务组开始出现脱离平台组进而用自己解决技术处理问题的情况 …. 等等以上的异动开始出现。")]),v._v(" "),_("p",[v._v("明显，我在当局中，不得不思考和处理方案，这也是让我最头疼的方式。压力大与小的情况如何分配和调整，确实比较难办。在这样的情况和内部不满的情况下，还有对各种质疑不断，把一些业务针对比较锋利的压力转到我这里，然后小组进行工作考核和评估。原本考虑人心安定的问题，但是最后发现，不能满足的考核根本无法抵挡得住业务组的压力。沟通上的冲突与不理解很快就出现，这样更加激起业务组的情绪。")]),v._v(" "),_("p",[v._v("很显然，沟通能力和抗压能力的要求很快体现，而且体现得很明显。")]),v._v(" "),_("p",[v._v("最后的表现是不管是上层还是业务组，都慢慢有排斥平台的情绪，质疑和不合作，不接受的情况慢慢表现。这也是我最害怕的，最担心的，这样下去，可能的结果就是，平台组在项目组中的位置降低，同时更可怕的是，整个平台组可能为此而受莫大的打击，更别说其它的后期想落实什么什么方案或者意见。")]),v._v(" "),_("p",[v._v("最无奈的办法，考虑左右，把研发出的组件效果体验最差的人员移出平台组，调入业务组，一方面是减压和挡住业务组的压力，另一方面是为平台组保留住核心人员，即表现能力比较好的，然后一步步的慢慢啃之前留下的各种技术债和业务债。但是之前的一些原本脱离平台管理，包括规范，要求等，只能在后期中慢慢的一点点的与业务组进行沟通和调整，只能在后期慢慢积累经验和找机会调整，有些可能无法调整的也只能默认（这步却为后期运维和后期各个工程上的不统一，研发意识和项目结束后的不统一埋下了隐患）。")]),v._v(" "),_("p",[v._v("其中这个过程早就应该这么做，而且不应该犹豫，这是前期最优柔寡断的错误，同时也是自己实际管理能力不足的最直接体现。")]),v._v(" "),_("p",[v._v("这样，在调整结构和人员的工作之后，平台组在协助业务组方面的效果有提升，认可度也很快有了改观，直到第一部分项目的上线。这个过程几乎经历了几乎慢慢转变了整体平台组的观念的改变和认可。")]),v._v(" "),_("h3",{attrs:{id:"项目开始落地-内部抱团"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#项目开始落地-内部抱团"}},[v._v("#")]),v._v(" 项目开始落地，内部抱团")]),v._v(" "),_("blockquote",[_("p",[v._v("相关工作安排沟通困难怎么办")])]),v._v(" "),_("p",[v._v("第一个部分项目上线，落地部署的过程也是极困难的。平台基础环境搭建过程较为困难，迁移搭建的前一个星期，就几乎是每天到晚上2左右，然后早上8点半又得去验证。难并不是安装部署一些软件（如jenkins、redis之类）有多难，而是工程依赖，版本库，数据，第三方厂家的沟通等。工程就有近乎200个，而且开发过程中有可能发布新的代码，而之前工程发布有先后，还有一些工程（如基础组件）已经很长一段时间没有动，新的接口可能还没有做好验证（或者说没细考虑到）等等。")]),v._v(" "),_("p",[v._v("原自信满满的认为可能最多3天部署完成的，但是整整拖了近乎5天 ….. 这不得不让我心里崩溃，也明显体现出原平台架构的不合理，规划的失误。以前参考和培训的平台架构规模相对较小，整体完全不是一个级别的，这让我不得不为自己的背锅，所谓的坑，可能自己在挖着，而这些坑只能自己跳然后自己填。")]),v._v(" "),_("p",[v._v("项目上线，原考虑分人员运维已经上线的项目，做前期的过渡支持，然后我这边负责广州核心业务开发支持。这个安排，直接导致了平台组内部问题的出现，意见开始出现不统一，这也意味着，沟通上出现了问题。深入沟通过程发现，平台组原能力较好的人员保留，直接对接业务组（以前都是我直接对开发组，做第一步沟通），两边能力的差异，很快产生对业务组的不理解，比如注册中心，可能业务组开发人员也不怎么清楚原理（这其中也很正常，毕竟很多平台技术对业务组是透明的，他们可能都没有感觉到自己做的是分布式项目）。")]),v._v(" "),_("p",[v._v("这样的问题出现，很快导致业务组的一些工作落实不顺利，不能满足要求，不久，很快就出现互相抱怨的情况，最常见的，你说他技术不行，他说你组件问题多。开始我并没有注意到这些，原认为是让接触一些也比较好，可以磨练，但是后来问题突出的时候，已经开始有些进入激化（比如互相抱怨）的程度，这个时候不得不介入首期项目的运维管理。")]),v._v(" "),_("p",[v._v("抱团就开始出现。开始自己也是比较难接受这个，毕竟小组内开始出现的，然后与其它业务组抱成内部小团体（确实开发太年轻，有可能出现稳定性不足的情况）。最开始的操作是内部办公室分隔，这步的效果不是特别好，可能是前期项目组工作压力，导致一些满情况有压抑，抱团成一个比较突出的反抗方式。考虑到矛盾的进一步激化风险，接下来就是沟通，即慢慢沟通，了解情况，然后就是安静，观察。")]),v._v(" "),_("p",[v._v("公司明显也体会得出来这样的风险，进行了一些物质奖励，以安定人心。前期确实有一些效果，但是这样的抱团往往形成的隐患是有后遗的，一旦开始，各种消极的思维（比如逃避困难、互相指责）就可能变得固化，为后面的风暴期埋下了隐患。（比较建议的抱团应该是团队一起面对目前的困难，积极表达，针对问题进行沟通，解决困难，每个项目都有困难期，事事都顺利可能比较难）")]),v._v(" "),_("h3",{attrs:{id:"组件近乎无法使用-开发崩溃怎么办"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#组件近乎无法使用-开发崩溃怎么办"}},[v._v("#")]),v._v(" 组件近乎无法使用，开发崩溃怎么办")]),v._v(" "),_("p",[v._v("平台组经过了前面一段时间的躁动，这段时间大概为1个月左右，内部开始变得稳定一些。同时第一个项目运维支持的工作也差不多结束，在结束完第一阶段，很快就要面对第二阶段的挑战：有些基础组件在测试期间出了问题，而解决不顺利。")]),v._v(" "),_("p",[v._v("基础组件涉有几个是第三方的，在业务测试过程中，积累了几十个问题，一直在沟通调整中。有一些第三方公司本身就出现了问题，对接人员不断换，两年的时间里面，差不多换了4个开发。每调整一个版本大概是2~3周，还不包含测试。有些第三方组件，在实际的生产环境中（如接入银行，银行网络内部多了多层的NAT转换），一直出现异常，如客户端电脑不兼容，网络莫名的提示异常，还有各种硬件出现冲突等等。")]),v._v(" "),_("p",[v._v("以上的表现实际上在开发和内部测试阶段是比较不明显，但是实际到用户测试，安排的测试人员有近乎500人，用户在实际业务中，已经很娴熟，在测试过程一用就发现卡，要么就是这个接口不行，那个提示浏览器崩溃，这样对业务人员几乎无法忍受。开始业务人员第一施压对象便是业务组，业务组一汇总，压力进一步转移到平台组，然后平台组再转到第三方。第三方根据问题调整的周期长，每次验证都是正常的，平台组这边也验证，但是一上用户测试就是一大堆的问题，这样所有压力都开始针对于平台组，与第三方沟通也是存在各种不确定，可能人家忙，不接电话，问题延期，第三方发布的版本不稳定等等，这些沟通过程，都差不多消耗了2个月，效果还是不怎么理解。")]),v._v(" "),_("p",[v._v("每次开会，都是提到这几个问题，平台的开发人员几乎很无语，也很无奈。过程大概都是，每个阶段都说自己的是正常的，第三方说调整版本没问题，是业务集成的问题，业务组说集成是平台组问题，平台组说第三方集成的问题，两头夹，或者谁都说谁有理等情况，接下来再走一次内部查找，排查，沟通等等。")]),v._v(" "),_("p",[v._v("这样不是办法，效率太慢，我也实在是无法忍受，一个问题可能拖很长时间。后面，调整策略，与商务和用户沟通，直接要求第三方人员现场驻场一到两周，集中把问题处理，由业务人员直接对接第三方，项目例会涉及到第三方，第三方各种问题先处理完，再回去。")]),v._v(" "),_("p",[v._v("这些组件的问题，从用户测试到有比较稳定的第一稿，差不多经过了半年的时间，用户才稍稍接受，这个过程也几乎把平台组折磨得差不多。")]),v._v(" "),_("h2",{attrs:{id:"中下期阶段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#中下期阶段"}},[v._v("#")]),v._v(" 中下期阶段")]),v._v(" "),_("p",[v._v("不上不下的，要的不仅仅是会做事，也要学会做人")]),v._v(" "),_("h3",{attrs:{id:"前期架构某点技术问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前期架构某点技术问题"}},[v._v("#")]),v._v(" 前期架构某点技术问题")]),v._v(" "),_("blockquote",[_("p",[v._v("实际线上场景无法使用，怎么面对客户和内部双重压力\n开发和测试都经多很多次验证，在用户测试和试运行阶段还是出现了很多猜想不到的问题。")])]),v._v(" "),_("p",[v._v("最明显的，网络层面的开通和阻力远远超过原预期的设计和考虑，原中间件的选型也是不能完全满足要求，还有分布式事务的设计与实际场景差异等等。那么多人前期在讨论着，看着方案，也有很多的验证过程，而且别人也是这么用的，为什么别人就可以正常，我们一用的时候，就出现异常。之前甚至找了原厂的人（比如Weblogic），也一样说是某些技术场景也没见过。这个几乎是一把虚汗，因为在开发，测试中都验证过的，可能来说，都已经正常的，到实际试运行就不行，这让内部测试、用户测试人员很难接受。")]),v._v(" "),_("h3",{attrs:{id:"能用得起来的人都说正常"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#能用得起来的人都说正常"}},[v._v("#")]),v._v(" 能用得起来的人都说正常")]),v._v(" "),_("blockquote",[_("p",[v._v("你能确定你用起来就一定正常的么？")])]),v._v(" "),_("p",[v._v("首先发现的是网络，最典型的，也就是上面说的第三方组件也一样出现类似的问题。接入各个使用机构（如银行、管理部）的时候，他们自己本身内部就有一套网络结构，在使用过程就发现，有些第三方路径回调不回来，网络出去了，找不回原来的地址，系统一进入就是空白，这无话可说，加班调整和修改。")]),v._v(" "),_("p",[v._v("再有的就是事务这块，交易过程也一样发现各种各样的重复交易，记账数据不正确，或者说消息发送找不到记录等等。这也无话可说，直接加班调整。比较无奈的一点是，原找使用说是在生产做正常业务的人过来处理，他们也只是看了一下，大多也是回复“不清楚”，“没遇到过这样的情况”，那只能自己内部开会调整找方案。")]),v._v(" "),_("p",[v._v("这个过程加班，熬夜也是最深的，因为技术架构的问题，有可能直接导致整个业务和项目跑不起来，或者无法应用实际的生活环境场景。这个时候你没办法，只能临时调整，大调整也得调整，小调整也得调整，实际环境就是如此。有的时候，还需要跑去实际现场查看问题，最典型，就是银行小妹窗口那里查看，看着人家办业务，然后有问题，及时处理。或者在用户电脑上调整，跑去那个银行网点，这个银行网点，Debug调试，实际验证等等。因为一旦试运行上线，业务一般就不能停太久，这个不管是在各个方面来说都是一个挑战。")]),v._v(" "),_("p",[v._v("这个过程差不多有2个月的时间，前一个月调整，后一个月运行验证，整个也差不多到17年低，也差不多告一段落。这个阶段都是直接技术处理，但是更多的是平台的压力，几乎也差不多折腾人，所幸的是，只是技术上问题，沟通及矛盾上不会那么多。")]),v._v(" "),_("h3",{attrs:{id:"用户测试出来的问题上万个bug"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#用户测试出来的问题上万个bug"}},[v._v("#")]),v._v(" 用户测试出来的问题上万个Bug")]),v._v(" "),_("blockquote",[_("p",[v._v("平台组怎么更好支持业务组")])]),v._v(" "),_("p",[v._v("项目往往是越到后期，压力就会越大，加班也是越多，接触过几个公司，项目开发貌似不管大小，都存在类似的现象。而面对大型项目，多项目组，多部门的情况，这个方面就更加突出。")]),v._v(" "),_("p",[v._v("项目至少我是这边接触的，从一开始就一直在大量的加班情况，也近乎两年，再加上各种压力，确实一开始适应起来并不是那么顺利。前面也提到，每个阶段都有问题，而且是异常多的问题。几乎每次开会，都是拿问题进行投影讨论，定位到人，平台组的问题，几乎就没有断过。")]),v._v(" "),_("p",[v._v("分布式项目，都存在关联，A组会提到是B组的原因导致，B组会提到C组的原因导致，最终又转到平台组，组件不完善，技术支持不到位，环境各种异常等等。这个过程是比较折腾人的，前面抱团的原因让我也是让我更担心人心的问题，有些工作安排已经开始不到位的情况。")]),v._v(" "),_("p",[v._v("用户测试阶段几乎是一个灾难（并不是说不好），测试规模也比较大，安排了两个大间，类似于两个教室一样，安排的测试人员大概也近乎500人。用户的这个安排，也着实让我们出了一把汗，结果是果不其然，这把汗真的是流了不少。")]),v._v(" "),_("p",[v._v("几个业务系统一投入用户测试，就积累了大量的问题，差不多有4千多个，而且每天还不断有新的问题产生。加班、熬夜、外卖几乎是常态了，周末的时候，也许再安排点水果。这个时候，体重也慢慢提升，头发也在掉，也是比较意外的（所以程序员需要注意好身体是关键）。")]),v._v(" "),_("p",[v._v("问题修改，不断往上，改了近乎2个多月，几乎把人搞得人困马乏，再加上各种情绪的产生，人很容易，也很快就产生了消极情况，这种情况在项目组内部开始产生苗头。工作的消极情况，意味着上层就很难再给开发组压力，几乎只能找组长沟通，交流，这个过程人心和业务已经慢慢变消极，离职，招聘也就这个时间段也在同时进行，这也是我压力，情绪比较消极的阶段，甚至有一些提项目无法上线的说法，整个项目组信心不是特别大，抱怨也成了常事，这个过程更多的是志气上的提升，需要更多的互相沟通，依赖等。很显然，这个过程我并没有做好，也是自己需要认知的地方，平台核心成员也开始提离职，那个时候我压力最大的时候，特别是团队成员的离开，虽然有预知，但是那个时候的离去，确实一开始有些难接受。不过这也意味着自己的成熟，平台的成熟。")]),v._v(" "),_("p",[v._v("业务组在前期测试，对平台组的压力，几乎把平台组主要的问题都已经消化得差不多，不能说很好，但是不影响业务的进行（这不得不说，前期的问题暴露和施压了正确的），所以业务组在消化系统Bug的同时，平台组当中担当的角色几乎都是技术支持，加速问题排查和调整。同时也慢慢的支持开发过程的问题，这个过程是很容易积累平台威信的，同时也很容易获取到业务组的信任。在前期的积累和各种经验上，其实很快解决技术问题，同时认可度也慢慢提高，这也意味着，平台组开始变得稳定，也开始变得成熟。")]),v._v(" "),_("p",[v._v("在处理研发问题的时候，就开始慢慢把前期的坑补上，比如一些规范，一些工具的使用，一些技术的统一等。这样的过程差不多变得统一，如在消息的使用上，在业务上的整合极度容易出现重复消费的情况，前期讨论的时候，平台的意见有被排斥情况，这样业务组自己整合的前期貌似情况比较理想，但是业务组用完即走（即不管理后期的维护，维护方是平台，这也是前期说的遗留问题），也开始按平台的规范，要求来编写，这样的排查的时候，就更加容易，也提高了排查效率，认可度也慢慢提升。")]),v._v(" "),_("p",[v._v("这个过程也是持续了很久，直到上线试运行到较稳定，大概有1年多的时间，都还是持续，只是紧与慢的区别。但是坚持到这个过程，已经留下人员不多，原平台组一开始的核心人员已经都走完了，没有坚持到最后，也是在中下期的时候。")]),v._v(" "),_("h2",{attrs:{id:"后期阶段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#后期阶段"}},[v._v("#")]),v._v(" 后期阶段")]),v._v(" "),_("blockquote",[_("p",[v._v("这只是一个过程")])]),v._v(" "),_("h3",{attrs:{id:"后续的问题怎么调整和总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#后续的问题怎么调整和总结"}},[v._v("#")]),v._v(" 后续的问题怎么调整和总结")]),v._v(" "),_("p",[v._v("平台前期架构设计和管理，当与实际整合中出现的问题，怎么样可以更好的落地。这个过程不断的在总结，同时在架构上做了进一步的调整，技术调研，还有自我工作反思总结。及时进行一些工作内容的合理梳理安排，以达到跟实际场景，实际团队更好的切合。")]),v._v(" "),_("p",[v._v("平台经过了差不多3年时间的磨练，出来的东西并不是相当的完善，反而让我发现，需要调整和需要走的路还很远，并不是说技术，而是怎么样更好的为业务服务，更好的在多种场景下进行落地。技术只是说一种手段，但是这个手段又不能没有，但是使用过度使用，怎么样能适中，两者怎么权衡，这些都是平台需要考虑的。")]),v._v(" "),_("p",[v._v("在大项目场景下是这样，但是在迁移到小项目场景下，是否可以实行得通，可能完全不是一回事。在项目过程中可以使用，但是项目结束后是否也符合后期团队的实际情况，也不敢一定。这个时候，需要的不是断的升级，不断的听取业务组，项目组的意见，切合实际的去协助他们的工作，帮助他们的工作，这才使得平台的意义有提升，更好的在实际中落地。不断的进行某个节点的改造，更好的结合内部场景来实现这个过程。")]),v._v(" "),_("h2",{attrs:{id:"最后"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[v._v("#")]),v._v(" 最后")]),v._v(" "),_("p",[v._v("整个过程下来差不多3年，直到现在，自己也是撤场不久（原在客户现场开发），整个过程有些唏嘘。回头看，整个过程真的到处碰，说得头破血流，有点悲壮也不为过，路要自己走，要自己体会。这相对于团队来说，几乎相当于一次改革，从上到下的新的思维引进，有非常非常多的阻力，也有非常非常多的困难，也会有人离开，也会有人失望，但是整个下来发现，需要的更多是学会团队的合作，更多的是学会引导，宽容，同时也更多的学会成长，个人整体素质的提高，人格的提高等，同时也感谢自己前期的不放弃。")]),v._v(" "),_("p",[v._v("整体感悟。")])])}),[],!1,null,null,null);_.default=s.exports}}]);
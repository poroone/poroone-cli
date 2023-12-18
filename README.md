
 依赖分别是  commander download-git-repo inquirer ora

 commander  脚手架工具

 download-git-repo 负责拉取结构

 inquirer  进行命令行交互工具的

 ora  负责动画

 package中定义
 ``
    "bin": {
        "poOne-cli":"src/index.js"
    }
  ``
  
  通过npm link进行软连接

#!/usr/bin/env node

// 告诉操作系统我执行自定义命令的时候让操作系统用node帮我们执行这个文件
// 在package中定义 bin :{"指令":"执行文件"} 通过软连接 npm link  加自定义注释 #!/usr/bin/env node 来进行执行

import { program } from "commander"
// program是用来帮我们解析process.argv argv就是后面跟着的参数
import fs from "node:fs"
import inquirer from "inquirer"  //进行命令行交互工具的
import { checkDir, downloadTemp } from "./utils.js"


let json = fs.readFileSync("./package.json")
json = JSON.parse(json)

program.version(json.version, "-v --version")

program.command("create <name>").alias("c").description("create a new").action((projectName) => {
    if (checkDir(projectName)) {
        return console.log("目录已存在")
    }
    inquirer.prompt([
        {
            name: "projectName",//返回的key
            type: "input", //输入框  list 下拉框 confirm 确认框 checkbox 复选框
            message: "请输入项目名",
            default: projectName,
        },
        {
            name: "isTs",//返回的key
            type: "confirm", //输入框  list 下拉框 confirm 确认框 checkbox 复选框
            message: "是否创建ts模板"
        }
    ]).then(answers => {
        if (answers.isTs) {
            downloadTemp("ts", answers.projectName)
        } else {
            downloadTemp("js", answers.projectName)
        }
    
    })
})

program.parse(process.argv)  
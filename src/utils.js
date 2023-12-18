import fs from "node:fs"
import download from "download-git-repo"
import ora from "ora"

const spinner = ora("下载中...")
// 验证目录
export const checkDir = (dir) => {
    // 如果中国目录存在返回true
    if (fs.existsSync(dir)) {
        return true
    }
    return false
}


export const downloadTemp = (branch, name) => {
    // 下载动画
    spinner.start()
    // 进行下载
    download(`direct:https://github.com/poroone/vue-Template.git#${branch}`, name, { clone: true }, function (err) {
        if (err) {
            console.log(err)
        }
        spinner.succeed("下载成功")
    })

}
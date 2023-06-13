const fs = require("fs");
const path = require("path");

const projectRoot = "./";

// 遞歸遍歷目錄，找到所有 HTML 文件
function walk(dir) {
  let files = fs.readdirSync(dir);
  files.forEach((file) => {
    let filePath = path.join(dir, file);
    let stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walk(filePath);
    } else if (path.extname(file) === ".html") {
      processHtmlFile(filePath);
    }
  });
}

// 處理每個 HTML 檔案，提取 script 標籤和 link 標籤中的路徑
function processHtmlFile(filePath) {
  const html = fs.readFileSync(filePath, 'utf8')

  const scriptRegex = /<script[^>]*src=["']([^"']+)["'][^>]*>\s*<\/script>/g
  let match
  while ((match = scriptRegex.exec(html)) !== null) {
    const url = match[1]
    if (url && url.includes('node_modules')) {
      const importPath = path.join(projectRoot, url)
      const absolutePath = path.resolve(url)
      const match = /node_modules[\\/](.*)/.exec(absolutePath)
      if (match) {
        const nodeModulesPath = match[0]
        console.log(nodeModulesPath)
        paths.push(nodeModulesPath)
      } else {
        console.log('路徑中不包含 node_modules')
      }
      console.log(importPath)
    }
  }

  const linkRegex = /<link[^>]*href=["']([^"']+)["'][^>]*>/g
  while ((match = linkRegex.exec(html)) !== null) {
    const url = match[1]
    if (url && url.includes('node_modules')) {
      const importPath = path.join(projectRoot, url)
      const absolutePath = path.resolve(url)
      const match = /node_modules[\\/](.*)/.exec(absolutePath)
      if (match) {
        const nodeModulesPath = match[0]
        console.log(nodeModulesPath)
        paths.push(nodeModulesPath)
      } else {
        console.log('路徑中不包含 node_modules')
      }
      console.log(importPath)
    }
  }
}


// 遍歷專案根目錄，找到所有 HTML 文件並處理
let paths = [];
walk(projectRoot);


// 遍歷 node_modules 目錄下的所有文件，刪除未被依賴的文件
const nodeModulesDir = 'node_modules'
const excludedPath = 'icons-webfont'

function deleteNM(dir) {
  let files = fs.readdirSync(dir)
  files.forEach((file) => {
    let filePath = path.join(dir, file)
    let stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      // 檢查當前目錄路徑是否包含被排除的字串
      if (filePath.includes(excludedPath)) {
        return
      }
      deleteNM(filePath)
    } else {
      // 判斷檔案路徑是否包含被排除的字串
      if (!filePath.includes(excludedPath) && !usedPaths.includes(filePath)) {
        // 如果未被依賴，刪除檔案
        fs.unlinkSync(filePath)
        console.log(`已刪除檔案：${filePath}`)
      }
    }
  })
}

// 遞歸遍歷 node_modules 目錄下的所有文件並刪除未被依賴的文件
const usedPaths = paths;
deleteNM(nodeModulesDir);

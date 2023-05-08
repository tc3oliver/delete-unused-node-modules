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
  let html = fs.readFileSync(filePath, "utf8");
  let scriptUrls = html.matchAll(/<script.+src=["']([^"']*)["']/gi);
  let linkUrls = html.matchAll(/<link.+href=["']([^"']*)["']/gi);

  for (let match of scriptUrls) {
    let url = match[1];
    if (url && url.includes("node_modules")) {
      let importPath = path.join(projectRoot, url);

      // 將路徑轉換為絕對路徑，方便後面進行比對
      const absolutePath = path.resolve(url);

      // 使用正則表達式匹配路徑中 node_modules 的位置
      const match = /node_modules[\\/](.*)/.exec(absolutePath);

      if (match) {
        // 如果匹配成功，截斷前面的路徑部分，只保留 node_modules 及其後面的路徑
        const nodeModulesPath = match[0];
        console.log(nodeModulesPath);

        // 將符合條件的路徑存儲到 paths 陣列中
        paths.push(nodeModulesPath);
      } else {
        // 如果匹配失敗，表示路徑中不包含 node_modules
        console.log("路徑中不包含 node_modules");
      }
      console.log(importPath);
    }
  }

  for (let match of linkUrls) {
    let url = match[1];
    if (url && url.includes("node_modules")) {
      let importPath = path.join(projectRoot, url);

      // 將路徑轉換為絕對路徑，方便後面進行比對
      const absolutePath = path.resolve(url);

      // 使用正則表達式匹配路徑中 node_modules 的位置
      const match = /node_modules[\\/](.*)/.exec(absolutePath);

      if (match) {
        // 如果匹配成功，截斷前面的路徑部分，只保留 node_modules 及其後面的路徑
        const nodeModulesPath = match[0];
        console.log(nodeModulesPath);

        // 將符合條件的路徑存儲到 paths 陣列中
        paths.push(nodeModulesPath);
      } else {
        // 如果匹配失敗，表示路徑中不包含 node_modules
        console.log("路徑中不包含 node_modules");
      }
      console.log(importPath);
    }
  }
}

// 遍歷專案根目錄，找到所有 HTML 文件並處理
let paths = [];
walk(projectRoot);

console.log(paths);

// 遍歷 node_modules 目錄下的所有文件，刪除未被依賴的文件
const nodeModulesDir = "node_modules";

function deleteNM(dir) {
  let files = fs.readdirSync(dir);
  files.forEach((file) => {
    let filePath = path.join(dir, file);
    let stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      deleteNM(filePath);
    } else {
      // 判斷文件是否被依賴
      if (!usedPaths.includes(filePath)) {
        // 如果未被依賴，刪除文件
        fs.unlinkSync(filePath);
        console.log(`已刪除文件：${filePath}`);
      }
    }
  });
}

// 遞歸遍歷 node_modules 目錄下的所有文件並刪除未被依賴的文件
const usedPaths = paths;
deleteNM(nodeModulesDir);

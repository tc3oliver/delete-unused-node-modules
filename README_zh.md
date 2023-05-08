# 刪除未使用的 Node Modules 文件

- [中文版文檔](README_zh.md)
- [English README](README.md)

這個腳本用於刪除未使用的 `node_modules` 文件，避免開發過程中因為添加和刪除庫導致 `node_modules` 目錄變得越來越大，佔用越來越多的磁盤空間。這個腳本可以幫助您釋放磁盤空間，只保留在您的代碼中實際使用的文件。

## 使用方法

如果您的目錄結構如下，可以按照以下步驟執行：

```
.
├── README.md
├── delete-unused-node-modules.min.js
├── index.html
├── node_modules
├── package-lock.json
├── package.json
└── src
    ├── component
    ├── font
    ├── img
    ├── js
    ├── page
    └── css
```

### 直接運行腳本

1. 在 [GitHub Release 頁面](https://github.com/tc3oliver/delete-unused-node-modules/releases) 頁面下載 `delete-unused-node-modules.min.js`。

2. 將 `delete-unused-node-modules.min.js` 移動到與 `node_modules` 目錄同一層級的目錄中。

3. 執行以下命令：

   ```
   node delete-unused-node-modules.min.js
   ```

這樣，腳本就會刪除未使用的 `node_modules` 文件，幫助您釋放磁盤空間。請注意，在運行腳本之前，請務必備份您的專案。

### 安裝

你可以在 [GitHub Release 頁面](https://github.com/tc3oliver/delete-unused-node-modules/releases) 下載適合你系統的二進制檔。

1. 下載適合你系統的二進制檔案。
2. 解壓縮二進制檔案。
3. 將解壓後的二進制文件移動到與 `node_modules` 目錄同一層級的目錄中。

## 運行腳本

### Windows

1. 解壓縮下載的 `delete-unused-node-modules-win.zip` 文件。
2. 在解壓縮後的文件夾中找到 `delete-unused-node-modules-win.exe`，按住 `Shift` 鍵並點擊滑鼠右鍵，在選單中選擇「以系統管理員身份運行」。
3. 運行命令提示字元，切換到解壓縮後的文件夾中，執行以下命令：

```
delete-unused-node-modules-win.exe
```

### macOS

1. 解壓縮下載的 `delete-unused-node-modules-macos.zip` 文件。
2. 打開「終端機」應用程序。
3. 切換到解壓縮後的文件夾中，執行以下命令：

```
sudo ./delete-unused-node-modules-macos
```

### Linux

1. 解壓縮下載的 `delete-unused-node-modules-linux.zip` 文件。
2. 打開終端機。
3. 切換到解壓縮後的文件夾中，執行以下命令：

```
sudo ./delete-unused-node-modules-linux
```

以上是三個平台的運行方式。請注意，在 macOS 和 Linux 中，需要使用 `sudo` 命令以管理員身份運行腳本。此外，如果您在執行過程中遇到了任何問題，請確保已經安裝了所有依賴項，並嘗試以管理員身份重新運行腳本。

### 注意事項

- 在使用這個腳本之前，請務必備份您的專案。
- 請使用管理員權限運行腳本。
- 這個腳本並沒有處理依賴關係嵌套的情況，如果您的專案中存在這樣的情況，那麼您需要對代碼進行進一步的修改。

## 授權

這個腳本基於 [MIT 授權](LICENSE) 開源，您可以自由地使用、複製、修改、合併、出版發行、散佈、再許可和/或販售本軟體的副本。

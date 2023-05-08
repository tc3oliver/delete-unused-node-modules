# Delete Unused Node Modules

This script is used to delete unused `node_modules` files to free up disk space, avoiding the `node_modules` directory from becoming larger and larger during development due to adding and deleting libraries. This script helps you keep only the files that are actually used in your code.

- [中文版文檔](README_zh.md)
- [English README](README.md)

## Usage

### Directly run the script

```
node delete-unused-node-modules.min.js
```

### Installation

You can download the appropriate binary file for your system on the [GitHub Release page](https://github.com/tc3oliver/delete-unused-node-modules/releases).

1. Download the appropriate binary file for your system.
2. Extract the binary file.
3. Move the extracted binary file to the same level directory as the `node_modules` directory.

## Run the script

### Windows

1. Extract the downloaded `delete-unused-node-modules-win.zip` file.
2. In the extracted folder, find `delete-unused-node-modules-win.exe`, hold down `Shift` and right-click the mouse, and choose "Run as administrator" in the menu.
3. Run the command prompt, switch to the extracted folder, and execute the following command:

```
delete-unused-node-modules-win.exe
```

### macOS

1. Extract the downloaded `delete-unused-node-modules-macos.zip` file.
2. Open the "Terminal" application.
3. Switch to the extracted folder and execute the following command:

```
sudo ./delete-unused-node-modules-macos
```

### Linux

1. Extract the downloaded `delete-unused-node-modules-linux.zip` file.
2. Open the terminal.
3. Switch to the extracted folder and execute the following command:

```
sudo ./delete-unused-node-modules-linux
```

The above are the running methods for the three platforms. Please note that in macOS and Linux, you need to use the `sudo` command to run the script as an administrator. In addition, if you encounter any problems during the process, make sure that all dependencies are installed and try running the script as an administrator.

### Notes

- Before using this script, please make sure to back up your project.
- Please run the script with administrator privileges.
- This script does not handle the nested dependency relationship. If your project has this situation, you need to make further modifications to the code.

## License

This script is open-sourced under the [MIT License](LICENSE). You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software.
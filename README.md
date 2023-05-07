# Delete Unused Files in `node_modules` directory

- [中文版文檔](README_zh.md)
- [English README](README.md)

This script is used to delete unused files in the `node_modules` directory to prevent the directory from becoming too large and taking up too much disk space due to the continuous addition and deletion of libraries during development. It helps you free up disk space and keep only the files that are actually used in your code.

## Usage

### Installation

You can download the appropriate binary file for your system on the [GitHub Release page](https://github.com/tc3oliver/delete-unused-node-modules/releases).

## Running the script

### Windows

1. Extract the downloaded `delete-unused-node-modules-win.zip` file.
2. In the extracted folder, locate `delete-unused-node-modules-win.exe`, press and hold the `Shift` key and right-click the mouse. Select "Run as administrator" from the menu.
3. Open Command Prompt, navigate to the extracted folder, and run the following command:

```
delete-unused-node-modules-win.exe
```

### macOS

1. Extract the downloaded `delete-unused-node-modules-macos.zip` file.
2. Open the Terminal application.
3. Navigate to the extracted folder, and run the following command:

```
sudo ./delete-unused-node-modules-macos
```

### Linux

1. Extract the downloaded `delete-unused-node-modules-linux.zip` file.
2. Open Terminal.
3. Navigate to the extracted folder, and run the following command:

```
sudo ./delete-unused-node-modules-linux
```

The above are the running methods for the three platforms. Note that in macOS and Linux, you need to run the script with administrative privileges using the `sudo` command. Also, if you encounter any problems during the execution process, make sure you have installed all dependencies and try running the script again with administrative privileges.

### Notes

- Before using this script, please make sure to back up your project.
- Please run the script with administrative privileges.
- This script does not handle nested dependency relationships. If your project has such a situation, you need to modify the code accordingly.

## License

This script is open-sourced under the [MIT License](LICENSE), which permits you to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software.
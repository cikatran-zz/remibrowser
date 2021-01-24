# remibrowser
## Instalation
- Simply run `yarn` after clone the project.

## How to run
- Using VSCode: Please copy below settings to .vscode/launch.json (inside `configurations` tag)
```
    {
      "name": "Debug iOS",
      "cwd": "${workspaceFolder}",
      "type": "reactnative",
      "request": "launch",
      "platform": "ios"
    },
    {
      "name": "Debug Android",
      "cwd": "${workspaceFolder}",
      "type": "reactnative",
      "request": "launch",
      "platform": "android"
    }
```
- Others, start packager server first by this command on terminal `yarn start` then run `yarn ios` or `yarn android`

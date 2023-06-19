# TypeScript CLI App

This project can be used as a base for developing CLI applications using TypeScript.

## Setup

Make sure you are in the correct folder (as this repository contains several projects)

```bash
npm install
```

## Building

```bash
npm run build
```

## Development

```bash
npm run dev
```

## Linting

```bash
npm run lint
```

## Debugging with VS Code

Use following launch configuration:

```json
{
    "version": "0.2.0",
        "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": ["<node_internals>/**"],
            "args": ["${workspaceFolder}/src/index.ts"],
            "runtimeArgs": ["--nolazy", "-r", "ts-node/register"],
            "sourceMaps": true,
            "cwd": "${workspaceFolder}"
        }
        ]
}
```

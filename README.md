# AdvPL Language Server (currently unstable)

AdvPL implementation for [Microsoft Language Server Protocol (LSP)](https://microsoft.github.io/language-server-protocol/).

Report problems or suggestions in [issues](https://gitlab.com/vlopes11/advpls_vscode/issues) area.

Discuss the implementation in our [Gitter](https://gitter.im/advpls/Lobby).

This project is an individual initiative and holds no relation or support provided by [TOTVS S/A](https://www.totvs.com/) (owner of AdvPL language).

This implementation doesn't intend to replace the currently consolidate AdvPL support via [KillerAll.advpl-vscode](https://marketplace.visualstudio.com/items?itemName=KillerAll.advpl-vscode) extension. All functionalities from this implementation must be kept, as well as the language definition.

The AdvPLS is bringing new functionalities currently not supported by vscode frontend client-only implementations.

## Description

The backend implementation is designed to be frontend-independent. This client provides support for [Visual Studio Code](https://code.visualstudio.com/), but there is no restriction to use it with other frontend editors that support the protocol.

The code for the backend implementation is currently closed, but the discussion regarding the linting rules is open and community participation is encouraged for these definitions.

For thread safety, zero-cost abstractions, guaranteed memory safety, threads without data races and state-of-the-art performance, the backend was implemented using [Rust-Lang](https://www.rust-lang.org/en-US/).

The compilation for Windows subsystems is done via mingw-w64-gcc based on [Arch Linux](https://www.archlinux.org/).

## Features

* Hover documentation

Will show function signature and short description upon mouse hover. To be improved...

* AdvPL Linter

 Will parse the currently open AdvPL source and report any detected programming errors, bugs, stylistic errors, and suspicious constructs. They will be reported in 'Problems' tab. Executed via commands interface (F1 shortcut).

 Some rules offer the "auto-fix" option. Put the cursor above the lint diagnostic, and execute > Quick-fix. If the lint rule implements an auto-fix, a selection menu will be shown to execute the fix.

### To be included

In the near future we want to make available the following functionalities:

* Formatting

## Platforms

No legacy support for i686 (x86) platforms will be provided.

| Platform / Architecture        | Planned | x86 | x86_64 |
|--------------------------------|---------|-----|--------|
| Windows (7, 8, Server 2008 R2) | ✓       | x   | ✓      |
| Linux (2.6.18 or later)        | ✓       | x   | ✓      |
| OSX (10.7 Lion or later)       | ✓       | x   |        |

### Requirements

* [KillerAll.advpl-vscode](https://marketplace.visualstudio.com/items?itemName=KillerAll.advpl-vscode)

## Known Issues

* xCommand not supported (and maybe will never be)


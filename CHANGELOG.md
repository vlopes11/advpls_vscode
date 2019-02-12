# Change Log

## [TODO]

* Formatting
* Parsing of webservice classes
* Implement native send request for language server
* Lint auto-fix for current document (make stable with native workspace applyEdit)

## [0.7.0] 2019-02-12

* Abstract Syntax Tree parsing
* Lint - function-args-decl-type-mandatory
* Lint - function-type-mandatory
* Lint - var-decl-type-mandatory
* Lint - var-decl-private-scope-warning
* Lint - var-decl-static-scope-warning
* Lint - var-decl-public-scope
* Lint - var-decl-hungarian
* Lint - var-decl-lower-camel-case-warning
* Lint - var-decl-single-char
* Issue #6 - Grammar - Spaced block if
* Issue #7 - Grammar - Alias and memory spaced pointing

## [0.6.13] 2019-01-27

* Issue #5 - Grammar - #xtranslate
* Issue #3 - Grammar - Spaced identifier for arg decl
* Lint - Forbid of xTranslate
* Issue #4 - Grammar - Spaced while
* Issue #2 - Grammar - Strong typed class atttribute

## [0.6.12] 2019-01-14

* Parser refactoring to optimize source formatting

## [0.6.11] 2019-01-14

* Open AdvPL Codex

## [0.6.10] 2019-01-13

* Move repo to open

## [0.6.9] 2018-12-07

* Issue #21 - Client - Crash on problems tab
* Issue #22 - Grammar - Spaced endif for if block
* Issue #23 - Grammar - Array indexed object attribution for codeblock
* Issue #24 - Grammar - Self ref w/ spaced args call

## [0.6.8] 2018-12-03

* Ping command for ls server
* Issue #18 - Grammar - Assign on memory pointed values
* Anti-crash for wrong params spec (ls protocol) sent by client (Eclipse bug 541869)

## [0.6.7] 2018-11-28

* event-stream security vulnerability. Check details @ https://code.visualstudio.com/blogs/2018/11/26/event-stream

## [0.6.6] 2018-11-24

* Issue #17 - Grammar - Array indexed operation set
* Grammar refactor
* Issue #16 - Grammar - ElseIf expression with suppressed line break

## [0.6.5] 2018-11-21

* Grammar - Fix on begin sequence block support
* Issue #13 - Grammar - Parsing of inherited class declaration
* Issue #15 - Grammar - xCommand - Menu Rotina

## [0.6.4] 2018-11-20

* Parsing of classes declarations
* Grammar support for BEGIN SEQUENCE and TRANSACTION blocks
* Lint rule to deprecate Do While (while loop)

## [0.6.3] 2018-11-18

* Issue #10 - Grammar - Do While loop

## [0.6.2] 2018-11-17

* Fix on lint-autofix for multiple diagnostics @ same text range

## [0.6.1] 2018-11-17

* Lint rule to deprecate .NOT. operator
* Lint auto-fix for current document (unstable)
* Lint rule to deprecate inline if declared as "IF"
* Issue #13 - Grammar - Equal operator w/ single char

## [0.6.0] 2018-11-14

* Major service refactoring
* Lint on document save
* Lint rule to deprecate single quote literal string
* Lint quick fix command
* Settings to enable auto-lint on load / save of file

## [0.5.0] 2018-11-05

* Issue #11 - Grammar - Array index for object method
* Major refactoring of lint process
* Lint format for function call identifier

## [0.4.0] 2018-11-04

* Hover documentation
* Language snippets

## [0.3.4] 2018-10-31

* Issue #9 - Grammar - Inner array literal

## [0.3.3] 2018-10-30

* Issue #7 - Grammar - Macro execution for alias point rendering
* Issue #6 - Grammar - Implicit array return from function call
* Refactoring of server messages

## [0.3.2] 2018-10-29

* Virtual File Server

## [0.3.1] 2018-10-28

* Issue #4 - Grammar - Pointed alias for inner expressions

## [0.3.0] 2018-10-27

* Grammar major refactoring
* Issue #5 - Grammar - Chained method calls
* Grammar - Op assign must render expression, not term
* Grammar - Alias point for value, not expression

## [0.2.2] 2018-10-24

* Issue #2 - Grammar - Parse of concat string w/ alias

## [0.2.1] 2018-10-24

* Issue #3 - Grammar - Parsing of implicit nil value from func args

## [0.2.0] 2018-10-24

* Grammar - Fix on array literal with multiline declaraion
* Server - Major refactoring

## [0.1.2] 2018-10-20

* Grammar - Reserved words for flow control, operator belongs to, inline if, Comment block w/ ws before block of expr fix and oject identifier as function call

## [0.1.1] 2018-10-20

* Lint - Diff operator was considering equal operator as base rule
* Grammar - Fix on parsing of return, variable/function declaration and macro execution

## [0.1.0] 2018-10-19

* AdvPL Linter

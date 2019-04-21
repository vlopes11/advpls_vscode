'use strict';

import * as path from 'path';
import * as vscode from 'vscode';
import {
	Trace,
} from 'vscode-languageserver-protocol';
import {
	LanguageClient,
	LanguageClientOptions,
	Executable,
	ExecutableOptions,
	TextDocumentIdentifier,
} from 'vscode-languageclient';

let client: LanguageClient;

export function activate(context: vscode.ExtensionContext) {

	let advplsWorkspaceConfiguration = vscode.workspace.getConfiguration('advpls');

	let platform = process.platform;
	let binLocation: string = advplsWorkspaceConfiguration.get('bin') || '';
	let currentPath: string = advplsWorkspaceConfiguration.get('bin_dir') || '';

	if(platform==='linux') {
		if(binLocation === '') {
			binLocation = context.asAbsolutePath(path.join('bin', 'linux', 'advpls_server'));
		}
	} else if(platform === 'win32') {
			binLocation = context.asAbsolutePath(path.join('bin', 'win32', 'advpls_server.exe'));
	} else if(platform === 'darwin') {
			binLocation = context.asAbsolutePath(path.join('bin', 'darwin', 'advpls_server'));
	} else {
		throw new Error('Operating system not currently supported!');
	}

	if(currentPath==='') {
		currentPath = path.dirname(binLocation);
	}

	let serverOptionsArgs = [];
	let serverOptionsArgsLogLevel = advplsWorkspaceConfiguration.get('log_level');
	if (serverOptionsArgsLogLevel) {
		serverOptionsArgs.push('--log-level=' + serverOptionsArgsLogLevel);
	}
	let serverOptionsArgsAutoLint = advplsWorkspaceConfiguration.get('auto_lint');
	if (serverOptionsArgsAutoLint) {
		serverOptionsArgs.push('--auto-lint=' + serverOptionsArgsAutoLint);
	}

	let serverExecOptions: ExecutableOptions = {
		cwd: currentPath
	};

	let serverOptions: Executable = {
		command: binLocation,
		args: serverOptionsArgs,
		options: serverExecOptions
	};

	let clientOptions: LanguageClientOptions = {
		documentSelector: [{
			scheme: 'untitled',
			language: 'advpl'
		}, {
			scheme: 'file',
			language: 'advpl'
		}],
	};

	const advplsCommandLintDisposable = vscode.commands.registerTextEditorCommand(
		'advpls.lint',
		async (textEditor: vscode.TextEditor,
			edit: vscode.TextEditorEdit) => {
			if (!client) {
				return;
			}

			let textDocumentIdentifier: TextDocumentIdentifier = {
				uri: textEditor.document.uri.toString()
			};

			await client.onReady();

			try {
				await client.sendRequest('advpls/lint', textDocumentIdentifier);
			} catch (reason) {
				vscode.window.showWarningMessage('AdvPLS lint failed: ' + reason);
				return;
			}
		});
	context.subscriptions.push(advplsCommandLintDisposable);

	const advplsCommandLintFixDisposable = vscode.commands.registerTextEditorCommand(
		'advpls.lintFix',
		async (textEditor: vscode.TextEditor,
			edit: vscode.TextEditorEdit) => {
			if (!client) {
				return;
			}

			let textDocumentIdentifier: TextDocumentIdentifier = {
				uri: textEditor.document.uri.toString()
			};

			await client.onReady();

			try {
				await client.sendRequest('advpls/lintFix', textDocumentIdentifier);
			} catch (reason) {
				vscode.window.showWarningMessage('AdvPLS lint fix failed: ' + reason);
				return;
			}
		});
	context.subscriptions.push(advplsCommandLintFixDisposable);

	client = new LanguageClient(
		'advplsClient',
		'AdvPL Language Server Client',
		serverOptions,
		clientOptions
	);

	if (serverOptionsArgsLogLevel === 'trace') {
		client.trace = Trace.Verbose;
	}

	let disposable = client.start();
	client.onReady().then(() => {
		client.onNotification('advpls/applyEdit', async (workspaceEdit) => {
			for (let changes of workspaceEdit.edit.documentChanges) {
				let edit = new vscode.WorkspaceEdit();
				let uri = changes.textDocument.uri;
				edit.set(uri, changes.edits);
				await vscode.workspace.applyEdit(edit);
				await vscode.commands.executeCommand('advpls.lint', uri);
			}
		});
		client.registerProposedFeatures();
	});
	context.subscriptions.push(disposable);
}

export function deactivate() {
	if (!client) {
		return undefined;
	}

	client.sendNotification('exit', null);

	return client.stop();
}

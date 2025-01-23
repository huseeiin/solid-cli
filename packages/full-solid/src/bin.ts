#! /usr/bin/env node

import { defineCommand, runMain } from "citty";
import { createSolid } from "@solid-cli/create";
import packageJson from "../package.json" with { type: "json" };
import { intro } from "@clack/prompts";
import * as color from "picocolors";
import { debuginfo } from "./debug";
import { startCommands } from "./start";
import { openInBrowser } from "@solid-cli/utils";
intro(`\n${color.bgCyan(color.black(` Solid CLI v${packageJson.version}`))}`);

const main = defineCommand({
	subCommands: {
		create: createSolid(packageJson.version),
		debug: debuginfo,
		start: startCommands,
		docs: defineCommand({
			meta: { description: "Open the Solid Docs in your browser" },
			async run() {
				openInBrowser("https://docs.solidjs.com");
			},
		}),
	},
});

runMain(main);

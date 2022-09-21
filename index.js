#!/usr/bin/env node

"use strict";
import { Command } from "commander";
import cliSpinners from "cli-spinners";
import ora from "ora";
import degit from "degit";
import { request } from "undici";
import updateNotifier from "update-notifier";
const program = new Command();

let version = "1.0.1"

updateNotifier({ pkg: { version: version, name: "boilers-cli" } }).notify();

async function clone_boilerplate(
    boilerplate,
    boiler_type,
    language,
    name,
    time
) {
    const emitter = degit(
        `gaurishhs/boilers/${boilerplate}/${boiler_type}/${language}`,
        {
            cache: false,
        }
    );
    emitter
        .clone(name)
        .catch((err) => {
            if (err.code == "ENOENT") {
                console.log("No such boilerplate exists");
            }
            if (err.code == "DEST_NOT_EMPTY") {
                console.log(
                    "The directory is not empty. Please try again with a different name."
                );
            }
        })
        .then(() => {
            console.log(
                `Successfully cloned boilerplate in ` + (Date.now() - time) + `ms`
            );
        });
}

async function list_boilerplates() {
    const { body } = await request(
        `https://api.github.com/repos/gaurishhs/boilers/contents`,
        {
            method: "GET",
            headers: {
                "User-Agent": "boiler-cli",
            },
        }
    );
    return body.json();
}


program.version(version).description("A CLI for the boilers project");

program
    .command("list")
    .alias("ls")
    .description("List all the boilerplates")
    .action(async () => {
        let available = await list_boilerplates();
        console.log("Available boilerplates: ");
        available.forEach((boilerplate) => {
            if (boilerplate.type !== "dir" || boilerplate.name === ".github") return;
            console.log(boilerplate.name);
        });
    });

program
    .command("clone")
    .alias("c")
    .argument("<boilerplate>", "The boilerplate to clone")
    .argument("<name>", "The name of the project")
    .argument("<language>", "The language of the project")
    .option("-t, --type <type>", "The type of the project", "basic")
    .description("Clone a boilerplate")
    .action(async (boilerplate, name, lang, options) => {
        const time = Date.now();
        const spinner = ora({
            text: "Cloning boilerplate",
            spinner: cliSpinners.aesthetic,
        });
        spinner.start();
        clone_boilerplate(boilerplate, options.type, lang, name, time);
        spinner.stop();
    });

program.parse();

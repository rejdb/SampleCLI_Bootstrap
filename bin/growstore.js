#!/usr/bin/env node
const ConfigManager = require('configstore');
const program = require('commander');
const { app_init } = require('./commands')

const pkg = require('../package.json');
const config = new ConfigManager(pkg.name);

let desc = '    A bootraps CLI to instantiate the GrowSTORE Application!';
desc += '\n\n\t     Your config file has been saved in \n\t' + config.path;

// console.log(config.has('database').local, desc)

program
    .version(pkg.version).description(desc.blue.bold)
    

program
    .command('init').alias("i")
    .description('Initialize company level configuration!')
    .action(app_init)


program.parse(process.argv)
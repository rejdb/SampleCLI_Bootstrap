const ConfigManager = require('configstore');
const colors = require('colors')
const {prompt} = require('inquirer');
const {database, company, user, main_store, general_config} = require('./questionaire')

const pkg = require('../package.json');
const config = new ConfigManager(pkg.name);

const default_branch = '5b63f922093b7a43b8475c49';

const app_init = async input => {
    console.log('---------------------- SETUP DATABASE LOCATION ----------------------\n'.green.bold)
    const db = await prompt(database);
    config.set({database: db})
    console.log('\nDatabase has been set!'.yellow.bold)

    console.log('\n\n---------------------- SETUP COMPANY ----------------------\n'.green.bold)
    const coy = await prompt(company)
    config.set({company: coy})
    console.log('\nCompany has been set!'.yellow.bold)

    console.log('\n\n---------------------- SETUP ADMINISTRATOR ACCOUNT ----------------------\n'.green.bold)
    const usr = await prompt(user)
    config.set({admin: {
        username: usr.username,
        email: usr.email,
        fullname: { first: usr.first, last: usr.last },
        contact: usr.contact,
        superuser: true,
        password: usr.password
    }})
    console.log('\nAdministrator account has been set!'.yellow.bold)
    console.log('\n>>>>>>>>>> Now we are ready to setup our first store!\n>>>>>>>>>> but before that we need to setup the pre-requisite.\n>>>>>>>>>> (Type, Category, Group and Channel'.cyan.bold)

    console.log('\n\n---------------------- SETUP THE MAIN STORE ----------------------\n'.green.bold)
    const brn = await prompt(main_store);
    config.set({branch:{
        brn_code: brn.brn_code,
        brn_name: brn.brn_name,
        type: {name: brn.type, group: 'b'},
        category: {name: brn.category, group:'b'},
        group: {name: brn.group},
        channel: {name: brn.channel},
        city: brn.city,
        area_manager: brn.area_manager,
        address: brn.address,
        size: parseFloat(brn.size)
    }})
    console.log('\nThe first STORE has been set!'.yellow.bold)

    console.log('\n\n---------------------- SETUP GENERAL CONFIGURATION ----------------------\n'.green.bold)
    const gen_config = await prompt(general_config);
    config.set({
        isPriceIncludeTax: (gen_config.isPriceIncludeTax=='true') ? true:false,
        isPurchaseIncludeTax: (gen_config.isPurchaseIncludeTax=='true') ? true:false
    });
    console.log('\nGeneral CONFIG has been set!'.yellow.bold)

}

module.exports = { app_init }
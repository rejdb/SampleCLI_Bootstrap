const pkg = require('../package.json');
const colors = require('colors')
const { isRequired, isBoolean } = require('./validators');

const ConfigManager = require('configstore');
const config = new ConfigManager(pkg.name);

const database = [
    {
        type: 'input',
        name: 'local',
        message: 'Local Database: '.blue,
        default: (config.has('database')) ? config.all['database']['local'] : 'mongodb://localhost:27017/' + pkg.name
    },
    {
        type: 'input',
        name: 'remote',
        message: 'Remote Database: '.blue,
        default: (config.has('database')) ? config.all['database']['remote'] : ''
    },
    {
        type: 'list',
        name: 'use',
        message: 'What location to use?'.blue,
        choices: ['local','remote'],
        default: (config.has('database')) ? config.all['database']['use'] : 'local',
    },
]

const company = [
    {
        type: 'input',
        name: 'name',
        message: 'Company Name: '.green,
        default: (config.has('company')) ? config.all['company']['name'] : pkg.description
    },
    {
        type: 'input',
        name: 'address',
        message: 'Company Address: '.green,
        default: (config.has('company')) ? config.all['company']['address'] : '',
        validate: isRequired
    },
    {
        type: 'input',
        name: 'contact',
        message: 'Company Contact Nos.: '.green,
        default: (config.has('company')) ? config.all['company']['contact'] : '09176368736',
        validate: isRequired
    },
    {
        type: 'input',
        name: 'website',
        message: 'Company website: '.green,
        default: (config.has('company')) ? config.all['company']['website'] : 'https://www.growapps.ph'
    },
]

const user = [
    {
        type: 'input',
        name: 'username',
        message: 'Username: '.green,
        default: (config.has('admin')) ? config.all['admin']['username'] : 'superadmin'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email Address: '.green,
        default: (config.has('admin')) ? config.all['admin']['email']:'',
        validate: isRequired
    },
    {
        type: 'input',
        name: 'first',
        message: 'Given Name: '.green,
        default: (config.has('admin')) ? config.all['admin']['fullname']['first']:'',
        validate: isRequired
    },
    {
        type: 'input',
        name: 'last',
        message: 'Family Name: '.green,
        default: (config.has('admin')) ? config.all['admin']['fullname']['last']:'',
        validate: isRequired
    },
    {
        type: 'input',
        name: 'contact',
        message: 'Contact No.: '.green,
        default: (config.has('admin')) ? config.all['admin']['contact'] :'',
        validate: isRequired
    },
    {
        type: 'input',
        name: 'password',
        message: 'Password: '.green,
        default: (config.has('admin')) ? config.all['admin']['password'] : 'P@ssw0rd12345'
    },
]

const main_store = [
    {
        type: 'input',
        name: 'brn_code',
        message: 'Store Code: '.green,
        default: (config.has('branch')) ? config.all['branch']['brn_code'] : '',
        validate: isRequired
    },
    {
        type: 'input',
        name: 'brn_name',
        message: 'Store Name: '.green,
        default: (config.has('branch')) ? config.all['branch']['brn_name'] : '',
        validate: isRequired
    },
    {
        type: 'input',
        name: 'type',
        message: 'Set the TYPE of your first store?: '.green,
        default: (config.has('branch')) ? config.all['branch']['type']['name'] : 'UNDEFINED'
    },
    {
        type: 'input',
        name: 'category',
        message: 'Set the CATEGORY of your first store?: '.green,
        default: (config.has('branch')) ? config.all['branch']['category']['name'] : 'UNDEFINED'
    },
    {
        type: 'input',
        name: 'group',
        message: 'Set the GROUP of your first store?: '.green,
        default: (config.has('branch')) ? config.all['branch']['group']['name'] : 'UNDEFINED'
    },
    {
        type: 'input',
        name: 'channel',
        message: 'Set the CHANNEL of your first store?: '.green,
        default: (config.has('branch')) ? config.all['branch']['channel']['name'] : 'UNDEFINED'
    },
    {
        type: 'input',
        name: 'city',
        message: 'What CITY does it resides?: '.green,
        default: (config.has('branch')) ? config.all['branch']['city'] : 'MAKATI',
        validate: isRequired
    },
    {
        type: 'input',
        name: 'address',
        message: 'Complete Address: '.green,
        default: (config.has('branch')) ? config.all['branch']['address'] : '',
        validate: isRequired
    },
    {
        type: 'number',
        name: 'size',
        message: 'How big is your first store (in SQM)? '.green,
        default: (config.has('branch')) ? config.all['branch']['size'] : 20,
        validate: isRequired
    },
    {
        type: 'input',
        name: 'area_manager',
        message: 'Area Manager: '.green,
        default: (config.has('branch')) ? config.all['branch']['area_manager'] : '',
        validate: isRequired
    }
]

const general_config = [
    {
        type: 'list',
        name: 'isPriceIncludeTax',
        message: 'Is SALES PRICE include TAX?: '.green,
        default: (config.has('isPriceIncludeTax')) ? config.all['isPriceIncludeTax'] : true,
        choices: ['true','false']
    },
    {
        type: 'list',
        name: 'isPurchaseIncludeTax',
        message: 'Is PURCHASE PRICE include TAX?: '.green,
        default: (config.has('isPurchaseIncludeTax')) ? config.all['isPurchaseIncludeTax'] : true,
        choices: ['true','false']
    }
]

module.exports = {database,company, user, main_store, general_config}
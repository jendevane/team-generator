const fs = require('fs')
const inquirer = require('inquirer')
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const generateHTML = require('./generate-html')

function userInfo() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Please enter employee name',
            name: 'name',
        },
          {
            type: 'input',
            message:'Please enter employee email',
            name:'email',
        },
    {
        type: 'input',
        message: 'Please enter employee ID',
        name:'id'
            
        },
        {
            type: 'list',
            message: 'Please select role',
            name: 'Please enter role',
            choices: ["Manager", "Engineer", "Intern"]
        
          
    }

            
        
    ])
        .then(answers => {
        
    })
}
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
            message: 'Please enter employee email',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Please enter employee ID',
            name: 'id'
            
        },
        {
            type: 'list',
            message: 'Please select role',
            name: 'Please enter role',
            choices: ["Manager", "Engineer", "Intern"]
        
          
        }

            
        
    ])
        .then(answers => {
            if (answers.role === 'Manager') {
                inquirer.prompt([
                    {
                        type: 'input',
                        message: 'Please enter office number',
                        name: 'office number',
                
                    }
                ])
            }
        })
        .then(response => { //add response
        
        })

else if (answers.role === 'Engineer')
        inquirer.prompt([
            {
                type: 'input',
                message: 'Please enter GitHub name',
                name: 'gitHub',
            }
        ])
            .then(response => { // add respnse 
            })
    else if (answers.role === 'Intern') {
        inquirer.prompt([
            {
                type: 'input',
                name: "school",
                message: "Please enter school name"

            
            }

        ])
            .then(response => { //add response
        
            })
    }
else {
    //add employeeteam information
}
}
    // add if they want to add an extra team member to revert back 
    //generate team members with html
            
    
userInfo() 
const fs = require('fs')
const inquirer = require('inquirer')
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const writeFile = require('./src/generate-site')
const appendFile= require('./src/append-site')

users = []


function addUser() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Please select role',
            name: 'role',
            choices: ["Manager", "Engineer", "Intern", "Quit"]
        }
    ]).then(roleAnswer => {
        if (roleAnswer.role === 'Quit') {
            generateEndHTML();
        }
        else {
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
            ]).then(answers => {
                if (roleAnswer.role === 'Manager') {
                    inquirer.prompt([
                        {
                            type: 'input',
                            message: 'Please enter office number',
                            name: 'officenumber',

                        }
                    ]).then(managerAnswers => {
                        addUserHTML(new Manager(answers.name, answers.id, answers.email, managerAnswers.officenumber))
                            .then(() => {
                                // Did not select Quit, so we want to add another
                                addUser();
                            });
                    });
                }

                else if (roleAnswer.role === 'Engineer') {
                    inquirer.prompt([
                        {
                            type: 'input',
                            message: 'Please enter GitHub name',
                            name: 'gitHub',
                        }
                    ]).then(engineerAnswers => {
                        addUserHTML(new Engineer(answers.name, answers.id, answers.email, engineerAnswers.github))
                            .then(() => {
                                // Did not select Quit, so we want to add another
                                addUser();
                            });
                    });
                }

                else if (roleAnswer.role === 'Intern') {
                    inquirer.prompt([

                        {
                            type: 'input',
                            name: "school",
                            message: "Please enter school name",
                        }
                    ]).then(internAnswers => {
                        addUserHTML(new Intern(answers.name, answers.id, answers.email, internAnswers.school))
                            .then(() => {
                                // Did not select Quit, so we want to add another
                                addUser();
                            });
                    });
                }
            });
        }
    })

}
    //add employeeteam information

    // add if they want to add an extra team member to revert back
    //generate team members with html


generateStartHTML().then(function () {
    addUser();
})


function generateStartHTML() {
    return writeFile(`<!DOCTYPE html>
            
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Member Profile</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <nav class="navbar navbar-light bg-primary" >

        <span class="navbar-brand mb-0 h1">Team Members</span>
    </nav>
        <main class =container>

            <div class="row mt-2">
            `);
}

function generateEndHTML() {
    return appendFile(`        
     
             
</main>`);
}

function addUserHTML(user) {
    console.log(user.name);
    let filledHTML = ''

    if (user.getRole() === 'Manager') {
        filledHTML = `
            <div class="card mt-2" style="width: 18rem;">
            
            <div class="card-body">
              <div class="title">
              <h5 class="card-title">${user.name}</h5>
              <p class="fw-light">${user.getRole()}</p>
              </div>
              <ul class="list-unstyled">
                <li class=list-group-item>ID: ${user.id}</li>
                <li class=list-group-item>Email: <a href=mailto:${user.email}>${user.email}  </a></li>
                <li class=list-group-item>Office: ${user.getOfficeNumber()}</li>
                </ul>
              
            </div>
          </div>`

    }
    else if (user.getRole() === 'Engineer') {
        filledHTML= `
        <div class="card mt-2" style="width: 18rem;">
            
            <div class="card-body">
              <div class="title">
              <h5 class="card-title">${user.name}</h5>
              <p class="fw-light">${user.getRole()}</p>
              </div>
              <ul class="list-unstyled">
                <li class=list-group-item>ID: ${user.id}</li>
                <li class=list-group-item>Email: <a href=mailto:${user.email}>${user.email}  </a></li>
                <li class=list-group-item> GitHub : <a href = 'https://www.github.com/${user.getGithub()}'> ${user.getGithub()}</a></li>
                </ul>
              
            </div>
          </div>`

    }
    else if (user.getRole() === 'Intern') {
        filledHTML = `
            <div class="card mt-2" style="width: 18rem;">
            
          <div class="card-body">
            <div class="title">
            <h5 class="card-title">${user.name}</h5>
            <p class="fw-light">${user.getRole()}</p>
            </div>
            <ul class="list-unstyled">
              <li class=list-group-item>ID: ${user.id}</li>
              <li class=list-group-item>Email: <a href=mailto:${user.email}>${user.email}  </a></li>
              <li class=list-group-item> School: ${user.school}</li>
              </ul>
            
          </div>
        </div>`

    }
    return appendFile(filledHTML);
}
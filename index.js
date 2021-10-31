const fs = require('fs')
const inquirer = require('inquirer')
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const writeFile = require('./src/generate-site')
let allanswers = {}

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
            name: 'role',
            choices: ["Manager", "Engineer", "Intern"]
        
          
        }

            
        
    ])
        .then(answers => {
            allanswers.name = answers.name
            allanswers.email = answers.email
            allanswers.id = answers.id
            allanswers.role=answers.role
            
            if (answers.role === 'Manager') {
                return inquirer.prompt([
                    {
                        type: 'input',
                        message: 'Please enter office number',
                        name: 'officenumber',
                
                    }
                ])
            }
            
            else if (answers.role === 'Engineer') {
                inquirer.prompt([
                    {
                        type: 'input',
                        message: 'Please enter GitHub name',
                        name: 'gitHub',
                    }
                ])
            }
                
            else if (answers.role === 'Intern') {
                inquirer.prompt([

                    {
                        type: 'input',
                        name: "school",
                        message: "Please enter school name",
                        
            
                    }
                ])
            }
        })
        
        .then(response => {
            allanswers.officenumber = response.officenumber
            allanswers.school = response.school
            allanswers.github=response.github
            console.log(response)
            
             
              
            const generateHTML = `<!DOCTYPE html>
            
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
        
            <div class="card mt-2" style="width: 18rem;">
                
                <div class="card-body">
                  <div class="title">
                  <h5 class="card-title">${allanswers.name}</h5>
                  <p class="fw-light">${allanswers.role}</p>
                  </div>
                  <ul class="list-unstyled">
                    <li class=list-group-item>ID: ${allanswers.id}</li>
                    <li class=list-group-item>Email: <a href=mailto:${allanswers.email}>${allanswers.email}  </a></li>
                    <li class=list-group-item>Office: ${response.officenumber}</li>
                    </ul>
                  
                </div>
              </div>
              
              <div class="card mt-2" style="width: 18rem;">
                
              <div class="card-body">
                <div class="title">
                <h5 class="card-title">${allanswers.name}</h5>
                <p class="fw-light">${allanswers.role}</p>
                </div>
                <ul class="list-unstyled">
                  <li class=list-group-item>ID: ${allanswers.id}</li>
                  <li class=list-group-item>Email: <a href=mailto:${allanswers.email}>${allanswers.email}  </a></li>
                  <li class=list-group-item> GitHub : <a href = 'https://www.github.com/${response.github}'> ${response.github}</a></li>
                  </ul>
                
              </div>
            </div>
            <div class="card mt-2" style="width: 18rem;">
                
              <div class="card-body">
                <div class="title">
                <h5 class="card-title">${allanswers.name}</h5>
                <p class="fw-light">${allanswers.role}</p>
                </div>
                <ul class="list-unstyled">
                  <li class=list-group-item>ID: ${allanswers.id}</li>
                  <li class=list-group-item>Email: <a href=mailto:${allanswers.email}>${allanswers.email}  </a></li>
                  <li class=list-group-item> School: ${response.school}</li>
                  </ul>
                
              </div>
            </div>
           
     
             
</main>`
        
           writeFile(generateHTML)
        
        
        })
}
    //add employeeteam information

    // add if they want to add an extra team member to revert back 
    //generate team members with html
            
    
userInfo()

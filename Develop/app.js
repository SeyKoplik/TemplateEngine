const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,

const questionsManager = [{
    type: "input",
    name: "name",
    message: "What is your manager's name?"
}, {
    type: "input",
    name: "id",
    message: "What is your manager's ID number?",
}, {
    type: "input",
    name: "email",
    message: "What is your manager's email address?"
}, {
    type: "input",
    name: "officeNumber",
    message: "What is your manager's office number?",
}];

const questionsEngineer = [{
    type: "input",
    name: "name",
    message: "What is your engineer's name?"
}, {
    type: "input",
    name: "id",
    message: "What is your engineers's ID number?",
}, {
    type: "input",
    name: "email",
    message: "What is your engineer's email address?"
}, {
    type: "input",
    name: "github",
    message: "What is your engineer's Github user?",
}];

const questionsIntern = [{
    type: "input",
    name: "name",
    message: "What is your intern's name?"
}, {
    type: "input",
    name: "id",
    message: "What is your intern's ID number?",
}, {
    type: "input",
    name: "email",
    message: "What is your intern's email address?"
}, {
    type: "input",
    name: "school",
    message: "What is your intern's school name?",
}];

const questionsPickOne = [{
    type: "list",
    name: "whichOne",
    message: "What type of employee would you like to add?",
    choices: [
        "Engineer",
        "Intern",
        "All done! No more to add."
        ]
}];

const employees = [];
// and to create objects for each team member (using the correct classes as blueprints!)

console.log("\n=============================================\n Please enter information to build your team!\n=============================================\n");

//Inquirer Prompt #1
inquirer.prompt(questionsManager).then(function(managerAnswers) {
        const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
        // console.log(manager);
        employees.push(manager);
        // console.log(employees);
        askToPickRole();
    });

function askToPickRole() {
        //Inquirer Prompt #2
        inquirer.prompt(questionsPickOne)
        .then(function(typeAnswer) {
            // console.log(typeAnswer.whichOne);
            if (typeAnswer.whichOne === "Engineer") {
                //Inquirer Prompt #3.v1 (engineer)
                inquirer.prompt(questionsEngineer).then(function(engineerAnswers) {
                    const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github);
                    // console.log(engineer);
                    employees.push(engineer);
                    askToPickRole();
                 }); 

            } else if (typeAnswer.whichOne === "Intern") {
                // Inquirer Prompt #3.v2 (intern)
                inquirer.prompt(questionsIntern).then(function (internAnswers) {
                    const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
                    // console.log(intern);
                    employee.push(intern);
                    askToPickRole();
                })
            } else {
                // exit inquirer
                // render html
                // write info to html
                // const html = render(employees);

                // fs.writeFile(outputPath, html, function(err) {
                //     if(err)
                //     throw err;

                console.log("\n=================================================\n You have successfully built your team's profiles!\n=================================================\n");
                // });
                }; 
            }) 
        }  




// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

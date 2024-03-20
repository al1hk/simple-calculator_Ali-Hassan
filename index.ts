import inquirer from "inquirer"

const calculator = await inquirer.prompt
([

{ name : "first", type : "number", message : "Please Enter Your First Number! " },
{ name : "second", type: "number", message : "Please Enter Your Second Number! " },
{ name : "operator", type : "list", message: "Select one of the operators to perform your operation! " ,choices: ['Addition','Subtraction',"Multiplication","Division"] }

])

if(calculator.operator === "Addition")
{
    console.log(calculator.first + calculator.second)
}
else if(calculator.operator === "Subtraction")
{
    console.log(calculator.first - calculator.second)
}
else if(calculator.operator === "Multiplication")
{
    console.log(calculator.first * calculator.second)
}
else if(calculator.operator === "Division")
{
    console.log(calculator.first / calculator.second)
}
else{
    console.log("Please enter a valid operator to perform your arithmetic operation! ")
}



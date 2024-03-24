// input
document.getElementById("clearstatement").onclick = function (){
    document.getElementById("state").innerHTML = ""
}
//  Result
document.getElementById("clearoutput").onclick = function (){
    document.getElementById("result").innerHTML = ""
}

                  // concatenation 
document.getElementById("cotatenate").onclick = function () {

    let message = "Any Type of Text in this String"
    let userName = "Abdan"
    let banger = "!"
    let sum = (message + " " + userName + banger)
    document.getElementById("state").innerHTML = '<p>"Any Type of Text in this String" + " " + "Sabeeh" + "!"</p>'
    document.getElementById("result").innerHTML = sum;
}
// ask name from user 
document.getElementById("name").onclick = function(){
    let firstName = prompt("please enter your first name")
    let lastName = prompt("please enter your last name")
    let fullName = `${firstName} ${lastName}`
    document.getElementById("state").innerHTML = `first name = ${firstName} <br> last name = ${lastName} <br> full name = first name + last name`
    document.getElementById("result").innerHTML = `full name = ${fullName}`
}

// comparison operator 
document.getElementById("comparision").onclick = function (){

    let num1 = +prompt("please enter first number")
    let num2 = +prompt("please enter second number")
    if (num1 === num2){
        document.getElementById("state").innerHTML = "num1 == num2"
        document.getElementById("result").innerHTML = "<span class='text-success'>Condition is true &#128522;<span/>"
    }
    else {
        document.getElementById("state").innerHTML = "num1 !== num2"
        document.getElementById("result").innerHTML = "<span class='text-danger'>Condition is false &#128554;</span."
    }
}

// if else if
document.getElementById("ifElseIf").onclick = function (){
    document.getElementById("state").innerHTML = " ";
    let marks = +prompt("please enter your marks")
    if (marks >= 90){
        document.getElementById("result").innerHTML = "<span class='text-success'>Congratulations! you got A+ Grade</span> "
    }
    else if (marks >=80){
        document.getElementById("result").innerHTML = "<span class='text-success'>Congratulations! you got A Grade</span>"
    }
    else if (marks >=70){
        document.getElementById("result").innerHTML = "<span class='text-warning'>you got B Grade</span>"
    }
    else {
        document.getElementById("result").innerHTML = "<span class='text-danger'>You Are Fail. &#128554;</span>"
    }
}


// sets of conditions 
document.getElementById("setsOfConditions").onclick = function (){
    document.getElementById("state").innerHTML = " ";
    let age = prompt("please enter your age")
    let weight = prompt("please enter your weight")
    if (age <= 10 && weight <= 25) {
        document.getElementById("result").innerHTML = "you are a baby"
    }
    else if (age <= 18 && weight <= 50) {
        document.getElementById("result").innerHTML = "you are teenager and healthy"
    }
    else if (age <= 25 && weight <= 60) {
        document.getElementById("result").innerHTML = "you are a youngman and fatty"
    }
    else if (age <= 30 && weight <= 59) {
        document.getElementById("result").innerHTML = "you are a youngman and healthy"
    }
    else {
        document.getElementById("result").innerHTML = "you are a Senior Citizen and fatty"
    }

}

// if statement nested 
document.getElementById("ifStatementNested").onclick = function(){
    let userName = prompt("please enter user name")
    if(userName === "Sabeeh"){
        let password = prompt("please enter password")
        if(password == 468){
            document.getElementById("result").innerHTML = "<span style='color:green; text-transform:capitalize;'>you are successfully logged in</span>"
        }
        else{
            document.getElementById("result").innerHTML = `<span class='text-danger'>${password}</span> is incorrect password. <br> correct password is <span class='text-success'>468</span>`
        }
    }
    else{
        document.getElementById("result").innerHTML = `<span class='text-danger'>${userName} </span> is incorrect user name. <br> correct user name is <span class='text-success'> "Sabeeh"</span>`
    }
}


// login 
document.getElementById("log").onclick = function (){
    document.getElementById("state").innerHTML = " ";
    let userName = prompt("please enter username")
    let passWord = +prompt("please enter password")
    if (userName === "Sabeeh" && passWord === 468 ){
        document.getElementById("form").innerHTML = `<span style='color:green; font-weight:bold;'>${userName}</span>`
        document.getElementById("result").innerHTML = `<span style='color:green; text-transform:capitalize;'>you are successfully logged in</span>`
    }
    else {
        document.getElementById("result").innerHTML = "Try using Sabeeh as username and 468 as a password"
    }

}
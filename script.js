// create an HTML form which consist of the following Details
// 1.firstname
// 2.middlename
// 3.lastname
// 4.email
// whenever user click the button all the details must be in console

function details(){
    var fn=document.getElementById("fname").value;
    console.log(fn);
    var mn=document.getElementById("mname").value;
    console.log(mn);
    var ln=document.getElementById("lname").value;
    console.log(ln);
    var em=document.getElementById("email").value;
    console.log(em);
// to get output in a single line, use templete literals
    console.log(`${fn} ${mn} ${ln} ${em}`);
}
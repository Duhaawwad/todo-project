console.log("Task 4");
var userName = prompt("Enter userName");
console.log(userName);
var gender =prompt("Enter your gender (male or female)");
console.log(gender);
var age =prompt("Enter your Age");
if(age <= 0){
    alert("The age of user less than zero");
}else{
    console.log(age);
}

 confirm("are you want to skip the welcoming message?");
 if(gender == 'male'){
     alert("welcome Mr " + userName);
 } else if (gender =='female') {
     alert('welcome Ms '+ userName );
 } else{
     alert( "Welcome ");
 }







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
 function checkcolor() {
    var task1 = document.getElementById("task1");
    var task2 = document.getElementById("task2");
    var task3 = document.getElementById("task3");
    var task4 = document.getElementById("task4");
  
    var backColor1 = document.getElementById("backColor1");
    var backColor2= document.getElementById("backColor2");
    var backColor3= document.getElementById("backColor3");
    var backColor4= document.getElementById("backColor4");
  
    if (task1.checked == true ){
      backColor1.style.backgroundColor = "green";
    } else {
      backColor1.style.backgroundColor= "red";
    }
  
    if (task2.checked == true ){
      backColor2.style.backgroundColor = "green";
    } else {
      backColor2.style.backgroundColor= "red";
    }
  
    if (task3.checked == true){
      backColor3.style.backgroundColor = "green";
    } else {
      backColor3.style.backgroundColor= "red";
    }
  
    if (task4.checked == true){
      backColor4.style.backgroundColor = "green";
    } else {
      backColor4.style.backgroundColor= "red";
    }
  }






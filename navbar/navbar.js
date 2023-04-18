var div=document.getElementById("user");

console.log(localStorage.getItem("logedin"));

if(localStorage.getItem("logedin")=="false"){
    var user=localStorage.getItem("userName");
    div.innerHTML="Welcome "+user;
}
 

else{
    div.innerHTML="<a class=nav href=register.html style=color:#0a58ca;>Register</a>&emsp;<a class=nav href=login.html style=color:#0a58ca;>Login</a>";
}
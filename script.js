var a = document.querySelector("h1");
var Flag = 0;

a.addEventListener("click", function () {
    if(Flag == 0){
  a.innerHTML = "Hey! how are you?";
  a.style.color = "yellow";
  a.style.backgroundColor = "red";
  console.log("clicked");
  Flag = 1;
 
} else{
    a.innerHTML = "Now you are offline";
  a.style.color = "yellow";
  a.style.backgroundColor = "red";
  console.log("clicked");
  Flag = 0;
}
});


var a = document.querySelector("h5");
var b = document.querySelector("#btn");
var flag = 0;

b.addEventListener("click", function(){
  if(flag == 0){
    a.innerHTML = "Friend";
    a.style.color = "green";
    document.querySelector("button").textContent = "Remove";
    document.querySelector("button").style.backgroundColor = "red";
    flag = 1;
  } else{
    a.innerHTML = "Removed From Friends";
    setTimeout(function(){
      a.innerHTML = "Not Added As A Friend!";
    },3000)
    a.style.color = "blueviolet";
    document.querySelector("button").textContent = "Add Friend";
    document.querySelector("button").style.backgroundColor = "green";
    flag = 0;
  }
});



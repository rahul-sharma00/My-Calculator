let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if(e.target.innerHTML=="+/-"){
        string=string*-1;
        document.getElementById("input").value = string;
    }
    else if(e.target.innerHTML=="backspace"){
        string=string.substring(0,string.length-1);
        document.getElementById("input").value = string;
    }
    else if (e.target.innerHTML == "AC") {
      string = "";
      document.getElementById("input").value = string;
    }
    else if (e.target.innerHTML == "=") {
      string = eval(string);
      document.getElementById("input").value = string;
    } else {
      string = string + e.target.innerHTML;
      document.getElementById("input").value = string;
    }
  });
});

let popUp=document.getElementById("pop-up");
let subMenu=document.getElementById("settings")
subMenu.addEventListener("click",function(){
    var x = document.getElementById("pop-up");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
})


let mode= document.getElementById("mode")

mode.addEventListener("click",function(){
  if(mode.innerHTML==="Dark Mode"){
    mode.innerHTML="Light Mode"
    document.body.classList.toggle("dark-on");
  }
  else{
    mode.innerHTML="Dark Mode";
    document.body.classList.remove("dark-on");
  }
})

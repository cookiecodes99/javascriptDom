// var text = document.getElementById("welcome-text").innerHTML;
// var story =document.getElementById("story").style.backgroudColor="green";
// story = document.getElementById("story").style.color ="white";

// var name =document.getElementById("enter_name").value ="mike";
// var email =document.getElementById("enter_email").value ="mikeniji01@gmail.com";
// var password = document.getElementById("enter_password").value ="122345667";


function turnBlue(){
  var yellow= document.getElementById("square");
  yellow.style.backgroudColor="blue";
};
function to yellow(){
  var yellow= document.getElementById("square");
  yellow.style.backgroudColor="yellow";
};
var inputTags = document.getElementByTagName("input");


// function validatefields(){
// 	if(inputTags[0].value ==){
// 		alert("please Enter a Name");
// 	}if else(inputTag[1]. value ==""){

// }

//    var inputTags = document.getElementByTagName(input);
// var timer = 0;
//  function countdown(){
//  	document.write(timer + "<br>")
//  	timer--;
//  }



var currentime =document.getElementById("display_current_time");
function showdate(){
	var date = new Date();
	currentime.innerHTML = date
}
setinterval(showdate,1000)









window.onscroll = function() {
    myFunction();
    
};
window.onload= function(){
//    value();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
var first= document.querySelector('.first');


var f= document.getElementsByClassName('fo23');


function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
    first.style.marginTop='3em';
  }
  else {
    header.classList.remove("sticky");
    first.style.marginTop='0em';
 }
}
function value(e){
    e.preventDefault();
    var t= document.createElement('div');
        t.createTextNode('Insert Email');
    
}
////!document.getElementById('input').contains(e.target)
//window.addEventListener('click', function(e){  
//var noValue= document.getElementById('input').value;
//  if (noValue==""){
//      document.querySelector('.fo26').style.display='block';
//  }
//    else{
//        document.querySelector('.fo26').style.display='none';
//    }
//});
//
//window.addEventListener('click', function(e){ 
//   var a= (!document.getElementById('input').contains(e.target));
//    var noValue1= document.getElementById('input').contains(e.target);
//    var noValue= document.getElementById('input').value;
//    if (noValue1 && value==''){
//        if(a){
//            console.log('Novalue clicked after outside click div should display');
//        }
//    }
//});
   window.addEventListener('click', function(e){   
var p=document.getElementById('input').contains(e.target);
var value= document.getElementById('input').value;
     
console.log(p + value);});
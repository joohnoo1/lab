const https = new XMLHttpRequest();

var methodSelected = false;
var isGet = false;

function OnChange(elem, value){
  if(elem.value == value){
    $("#form").attr("method", value)
    methodSelected = true;
    isGet == value == "get";
  }
}

function OnSubmit(){
  if(!methodSelected){
    alert ("Method requered")
  }
}
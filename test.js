
// Here You can type your custom JavaScript...
function test(){
if (!document.getElementById("actionLink")) {
console.log('Oh no, Angular is not loaded');
window.requestAnimationFrame(test);
} else {
   var header = document.getElementsByClassName("app-navbar");
       while(header.length > 0){
           header[0].parentNode.removeChild(header[0]);
       }
       var footer = document.getElementsByClassName("app-footer-container");
       while(footer.length > 0){
           footer[0].parentNode.removeChild(footer[0]);
       }
       var button = document.getElementById("actionLink");
   button.click();
console.log('hello, Angular Is Loaded');
return false;
}
}
test();

// document.addEventListener('cookieyes_consent_update',function(eventData){
//  console.log(eventData);
    
// })

// document.addEventListener("DOMContentLoaded", function() {
//     var queryString = location.search.substring(1);
//     var revisitStatus= queryString.split("=")[1];
//     if(revisitStatus==="yes"){
//         revisitCkyConsent();

//         console.log("hello")
//     }
 
// })


var checktimeout = 0;
window.addEventListener("load", function () {
  waitForElement(".cky-consent-container", function () {
    var queryString = location.search.substring(1);
        var revisitStatus= queryString.split("=")[1];
       if(revisitStatus==="yes"){
            revisitCkyConsent();
    
         console.log("hello")
       }
  });
});
function waitForElement(selector, callback) {
  const element = document.querySelector(selector);
  if (element) return callback();
  checktimeout++;
  if (checktimeout < 120) {
    setTimeout(function () {
      waitForElement(selector, callback);
    }, 500);
  }
}
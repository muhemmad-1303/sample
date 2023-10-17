// document.addEventListener('cookieyes_consent_update',function(eventData){
//  console.log(eventData);
    
// })

document.addEventListener("DOMContentLoaded", function() {
    var queryString = location.search.substring(1);
    var revisitStatus= queryString.split("=")[1];
    if(revisitStatus==="yes"){
        revisitCkyConsent();
        console.log("hello")
    }
 
})
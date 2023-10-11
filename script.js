document.addEventListener('cookieyes_consent_update',function(eventData){
    if(eventData.details.hasOwnPropert('accepted')){
        console.log("i am accepted");
    }
    
})
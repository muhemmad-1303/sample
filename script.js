document.addEventListener('cookieyes_consent_update',function(eventData){
    if(eventData.details.include('accepted')){
        console.log("i am accepted");
    }
    
})
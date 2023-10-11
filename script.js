document.addEventListener('cookieyes_consent_update',function(eventData){
    if('accept' in eventData.details ){
        console.log("i am accepted");
    }
    
})
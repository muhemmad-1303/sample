

    
    fetch("https://directory.cookieyes.com/api/v1/ip")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
 


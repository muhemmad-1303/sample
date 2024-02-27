// var checktimeout = 0;
// window.addEventListener("load", function () {
//   waitForElement(".cky-consent-container", function () {
//     const queryString = location.search.substring(1).split('&');
//     if (queryString.includes('optoutAction=optout')) {
//       const ccpaOptout=document.getElementById("ckyCCPAOptOut");
//       ccpaOptout.checked=true;
//       ccpaOptout.style.backgroundColor='#1863dc';
//       performBannerAction();
//     }
//   });
// });
// function waitForElement(selector, callback) {
//   const element = document.querySelector(selector);
//   if (element) return callback();
//   checktimeout++;
//   if (checktimeout < 120) {
//     setTimeout(function () {
//       waitForElement(selector, callback);
//     }, 500);
//   }
// }

// var checktimeout = 0;
// window.addEventListener("load", function () {
//   waitForElement(".cky-consent-container", function () {
//     const rejectButtons = document.getElementsByClassName(
//       "cky-btn cky-btn-reject"
//     );
//     if (rejectButtons) {
//       for (const button of rejectButtons) {
//         button.replaceWith(button.cloneNode(true));
//       }
//       for (const button of rejectButtons) {
//         button.onclick = function () {
//           document
//             .querySelectorAll(".cky-legitimate-switch-wrapper input")
//             .forEach((btn) => {
//               if (btn.checked === true) {
//                 btn.checked = true;
//               }
//               document.querySelectorAll(".cky-switch input").forEach((btn)=>{
//                      if(btn.checked === true){
//                          btn.checked=false;
//                      }
//                 })
//               document
//                 .querySelectorAll(".cky-consent-switch-wrapper input")
//                 .forEach((btn) => {
//                   if (btn.checked === true) {
//                     btn.checked = false;
//                   }
//                 });
//             });
//           performBannerAction("accept_partial");
//         };
//       }
//     }
//   });
// });
// function waitForElement(selector, callback) {
//   const element = document.querySelector(selector);
//   if (element) return callback();
//   checktimeout++;
//   if (checktimeout < 120) {
//     setTimeout(function () {
//       waitForElement(selector, callback);
//     }, 500);
//   }
// }

// var checktimeout = 0;
// window.addEventListener("load", function () {
//   waitForElement(".cky-consent-container", function () {
//   if(!getCkyConsent().isUserActionCompleted){
//   document.querySelectorAll(".cky-switch input").forEach((btn)=>{
//         btn.checked = true
//         btn.style.backgroundColor='rgb(255, 167, 0)';
//       })
//     }
//   });

// });
// function waitForElement(selector, callback) {
//   const element = document.querySelector(selector);
//   if (element) return callback();
//   checktimeout++;
//   if (checktimeout < 120) {
//     setTimeout(function () {
//       waitForElement(selector, callback);
//     }, 500);
//   }
// }


// var checktimeout = 0;
// window.addEventListener("load", function () {
//   waitForElement(".cky-consent-container", function () {
//     if(window.cookieyes._ckyStore._ruleData._regionCode!=='CA'){
         
//     }
//   });

// });
// function waitForElement(selector, callback) {
//   const element = document.querySelector(selector);
//   if (element) return callback();
//   checktimeout++;
//   if (checktimeout < 120) {
//     setTimeout(function () {
//       waitForElement(selector, callback);
//     }, 500);
//   }
// }

// const scanResult=require("./result.json");
// // for(i=0;i<Object.keys(scanResult.cookieData).length;i++){
// //     const url=Object.keys(scanResult.cookieData)[i];
// //     if(!scanResult.cookieData[url].scanStatus){
// //         console.log(url);
// //     }
// // }
// Object.keys(scanResult.cookieData).forEach(url => {
 
//         console.log(scanResult.cookieData[url].scanStatus);
// });

var checktimeout = 0;

window.addEventListener("DOMContentLoaded", function () {
  waitForElement(".cky-consent-container", function () {
    custumFunction();
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

document.addEventListener("cookieyes_consent_update", function (eventData) {
   if (eventData.detail.accepted.includes("analytics")) {
      removePlaceholder();
    }
    else if (!checkPlaceholder()){
       addPlaceholder();
    }
});


function custumFunction() {
  const consent = getCkyConsent();
  if (!consent.categories.functional && !checkPlaceholder()) {
    addPlaceholder();
  } else if (consent.categories.functional) {
    removePlaceholder();
  }


  function addPlaceholder() {
    const divElement = document.createElement("div");
    divElement.setAttribute("class", "video-placeholder-youtube");
    divElement.setAttribute("data-cky-tag", "video-placeholder");
    divElement.setAttribute(
      "style",
      "height: 100%; width: 100%; background-image: url(https://cdn-cookieyes.com/assets/images/cky-placeholder.svg); background-size: 80px; background-position: center; background-repeat: no-repeat; background-color: #b2b0b059; display: flex; align-items: flex-end;"
    );
    const paragraph = document.createElement("p");
    paragraph.setAttribute("class", "video-placeholder-text-youtube");
    paragraph.setAttribute("data-cky-tag", "placeholder-title");
    paragraph.setAttribute(
      "style",
      "display: block; border-color: rgb(0, 0, 0); background-color: rgb(0, 0, 0); color: rgb(255, 255, 255);"
    );
    paragraph.textContent = "Please accept cookies to access this content";
    divElement.appendChild(paragraph);
    const embedResponsiveElement = document.querySelector(
      ".helloMuhammed"
    );
    if (embedResponsiveElement) {
      embedResponsiveElement.appendChild(divElement);
    }
  }

  function removePlaceholder() {
    const embedResponsiveElement = document.querySelector(
      ".helloMuhammed"
    );
    if (embedResponsiveElement) {
      const divElementToRemove = embedResponsiveElement.querySelector(
        ".video-placeholder-youtube"
      );
      if (divElementToRemove) {
        embedResponsiveElement.removeChild(divElementToRemove);
      }
    }
  }
  function checkPlaceholder() {
    return document.querySelector(".video-placeholder-youtube");
  }
}
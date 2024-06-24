

// console.log(a)
// var a=5;
// function greeting() {
//   var b = "hello";
//   console.log(b);
// }
// greeting();
// console.log(a)




document.cookie = "username=john_doe; expires=Thu, 01 Jan 2025 00:00:00 UTC";
document.cookie = "username=john_doe; expires=Thu, 01 Jan 2025 00:00:00 UTC";




































// window.addEventListener("load", function () {
//   waitForElement(".cky-consent-container", function () {
//     document.querySelector('.cky-btn-close img').alt="muhammed";
   
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



// var checktimeout = 0;

// window.addEventListener("DOMContentLoaded", function () {
//   waitForElement(".cky-consent-container", function () {
//     custumFunction();
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

// document.addEventListener("cookieyes_consent_update", function (eventData) {
//    if (eventData.detail.accepted.includes("functional")) {
//       removePlaceholder();
//     }
//     else if (!checkPlaceholder()){
//        addPlaceholder();
//     }
// });


// function custumFunction() {
//   const consent = getCkyConsent();
//   if (!consent.categories.functional && !checkPlaceholder()) {
//     addPlaceholder();
//   } else if (consent.categories.functional) {
//     removePlaceholder();
//   }
//  }

//   function addPlaceholder() {
//     const divElement = document.createElement("div");
//     divElement.setAttribute("class", "video-placeholder-youtube");
//     divElement.setAttribute("data-cky-tag", "video-placeholder");
//     divElement.setAttribute(
//       "style",
//       "height: 100%; width: 100%; background-image: url(https://cdn-cookieyes.com/assets/images/cky-placeholder.svg); background-size: 80px; background-position: center; background-repeat: no-repeat; background-color: #b2b0b059; display: flex; align-items: flex-end;"
//     );
//     const paragraph = document.createElement("p");
//     paragraph.setAttribute("class", "video-placeholder-text-youtube");
//     paragraph.setAttribute("data-cky-tag", "placeholder-title");
//     paragraph.setAttribute(
//       "style",
//       "display: block; border-color: rgb(0, 0, 0); background-color: rgb(0, 0, 0); color: rgb(255, 255, 255);"
//     );
//     paragraph.textContent = "Please accept cookies to access this content";
//     divElement.appendChild(paragraph);
//     //pointing to your vedio container
//     const embedResponsiveElement = document.querySelector(
//       "body > div.h-full.relative.grainy > main > div.flex.flex-col.lg\\:flex-row-reverse.bg-\\[\\#f9fafb\\].text-black.justify-center > div:nth-child(2) > div > div.flex.flex-col.lg\\:flex-col.items-center.shadow-lg.rounded-md.p-8.border-custom > div.flex-\\[2\\].mt-16.lg\\:mt-0.lg\\:mr-8 > div.mt-4.video-frame.framed.h-full.w-full > div:nth-child(1)"
//     );
//     if (embedResponsiveElement) {
//       embedResponsiveElement.appendChild(divElement);
//     }
//   }

//   function removePlaceholder() {
//     //pointing to your vedio container
//     const embedResponsiveElement = document.querySelector(
//       "body > div.h-full.relative.grainy > main > div.flex.flex-col.lg\\:flex-row-reverse.bg-\\[\\#f9fafb\\].text-black.justify-center > div:nth-child(2) > div > div.flex.flex-col.lg\\:flex-col.items-center.shadow-lg.rounded-md.p-8.border-custom > div.flex-\\[2\\].mt-16.lg\\:mt-0.lg\\:mr-8 > div.mt-4.video-frame.framed.h-full.w-full > div:nth-child(1)"
//     );
//     if (embedResponsiveElement) {
//       const divElementToRemove = embedResponsiveElement.querySelector(
//         ".video-placeholder-youtube"
//       );
//       if (divElementToRemove) {
//         embedResponsiveElement.removeChild(divElementToRemove);
//       }
//     }
//   }
//   function checkPlaceholder() {
//     return document.querySelector(".video-placeholder-youtube");
//   }




// remove text in accept  button in first layer and second layer banner 
// also edit in us state law

// var checktimeout = 0;
// window.addEventListener("load", function () {
//   waitForElement(".cky-consent-container", function () {
//     let detailAcceptButton=document.querySelector('[data-cky-tag="detail-accept-button"]');
//     if(detailAcceptButton){
//       detailAcceptButton.textContent="Accept all cookies"
//     }
//     let acceptButton=document.querySelector('[data-cky-tag="accept-button"]');
//     if(acceptButton){
//       acceptButton.textContent="Accept"
//     }
//     let doNotSell=document.querySelector('[data-cky-tag="donotsell-button"]');
//     if(doNotSell){
//       doNotSell.textContent="Opt-out preferences"
//     }
//     let optOutOption=document.querySelector('[data-cky-tag="optout-option-title"]');
//     if(optOutOption){
//       optOutOption.textContent="Opt-out"
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


// 


// var checktimeout = 0;
// window.addEventListener("load", function () {
//   waitForElement(".cky-consent-container", function () {
//       document.querySelector('.cky-modal').classList.remove("cky-modal-open");
//       document.querySelector('.cky-overlay').classList.add("cky-hide");

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

// document.addEventListener("DOMContentLoaded", function () {
//   // Check if the user has previously accepted cookies
//   const cookiesAccepted = localStorage.getItem('cookiesAccepted');
//   if (!cookiesAccepted) {
//   // Show the dark overlay if cookies haven't been accepted
//   // document.getElementById('darkBackground').style.display = 'block';
//   } else {
//   // Cookies have been accepted, hide the overlay
//   // document.getElementById('darkBackground').style.display = 'none';
//   }
//   });
  
//   document.addEventListener("cookieyes_consent_update", function (eventData) {
//   console.log(eventData);

//   const data = eventData.detail;
//   if (data.accepted.includes('analytics') || data.accepted.includes('functional') || data.accepted.includes('performance') || data.accepted.includes('advertisement')) {
//   // User has accepted cookies, hide the dark overlay and set flag
//   console.log("hello");
//   document.getElementById('darkBackground').style.display = 'none';
//   localStorage.setItem('cookiesAccepted', 'true');
//   }
//   });

// var checktimeout = 0;
// window.addEventListener("load", function () {
//   waitForElement(".cky-consent-container", function () {
//     const doNotSellButton = document.querySelector(
//       ".cky-btn-do-not-sell"
//     );
//     if (doNotSellButton) {
//       var newButton=doNotSellButton.cloneNode(true)
//       doNotSellButton.replaceWith(newButton);
//       newButton.style.padding = "8px 27px";
//       newButton.style.border = "2px solid #1863dc";
//       newButton.textContent="Reject All"
//       newButton.style.flex="0 0 auto";
//       newButton.onclick = function () {
//             performBannerAction("reject");
//       };
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



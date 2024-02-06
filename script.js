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

var checktimeout = 0;
window.addEventListener("load", function () {
  waitForElement(".cky-consent-container", function () {
    var customButton = document.querySelector(".cky-btn.cky-btn-customize");
    // if(customButton){
    // var newButton=customButton.cloneNode(true)
    // Button.replaceWith(newButton);
    // newButton.onclick = function () {
    //   document.querySelectorAll(".cky-switch input").forEach((btn)=>{
    //     btn.checked === true
    //   })
    //   revisitCkyConsent();
    // };
  // }
  document.querySelectorAll(".cky-switch input").forEach((btn)=>{
        btn.checked === true
      })
  
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
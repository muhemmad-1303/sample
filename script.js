var checktimeout = 0;
window.addEventListener("load", function () {
  waitForElement(".cky-consent-container", function () {
    var rejectButtons = document.querySelector(".cky-btn cky-btn-reject");
    var newButton=rejectButtons.cloneNode(true)
    rejectButtons.replaceWith(newButton);
    newButton.onclick = function () {
      document.querySelectorAll(".cky-legitimate-switch-wrapper").forEach((btn)=>{
         if(btn.checked===true){
            btn.checked=true;
         }
      })
      performBannerAction("accept_partial");
    };
    
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
// ckyIABVendorSection1Item8ToggleLegitimate
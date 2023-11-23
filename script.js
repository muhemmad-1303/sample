var checktimeout = 0;
window.addEventListener("load", function () {
  waitForElement(".cky-consent-container", function () {
    const rejectButtons = document.getElementsByClassName(
      "cky-btn cky-btn-reject"
    );

    for (const button of rejectButtons) {
      button.replaceWith(button.cloneNode(true));
    }
    for (const button of rejectButtons) {
      button.onclick = function () {
        console.log("hello");
        document.querySelectorAll(".cky-legitimate-switch-wrapper input").forEach((btn)=>{
          if(btn.checked===true){
          btn.checked=true;
          }
        })
        performBannerAction("accept_partial");
      };
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
// ckyIABVendorSection1Item8ToggleLegitimate



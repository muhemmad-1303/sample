var checktimeout = 0;
window.addEventListener("load", function () {
  waitForElement(".cky-consent-container", function () {
    var rejectButtonsOuterLayer=document.getElementsByClassName("cky-notice-btn-wrapper");
    var rejectButtons = rejectButtonsOuterLayer.querySelector(
      ".cky-btn .cky-btn-reject"
    );

    for (const button of rejectButtons) {
      button.replaceWith(button.cloneNode(true));
    }
    for (const button of rejectButtons) {
      button.onclick = function () {
        console.log("hello")
        revisitCkyConsent()
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
   
 


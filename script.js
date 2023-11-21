var checktimeout = 0;
window.addEventListener("load", function () {
  waitForElement(".cky-consent-container", function () {
    const rejectButtonsOuterLayer=document.getElementByClassName("cky-notice-btn-wrapper")
    const rejectButtons = rejectButtonsOuterLayer.document.getElementsByClassName(
      "cky-btn cky-btn-reject"
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
   
 


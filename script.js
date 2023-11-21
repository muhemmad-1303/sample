var checktimeout = 0;
window.addEventListener("load", function () {
  waitForElement(".cky-consent-container", function () {

    var rejectButtons = document.querySelector(".cky-notice-btn-wrapper .cky-btn.cky-btn-reject");
    rejectButtons.replaceWith(rejectButtons.cloneNode(true));
    rejectButtons.onclick = function () {
      console.log("hello");
      revisitCkyConsent();
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

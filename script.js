var checktimeout = 0;
window.addEventListener("load", function () {
  waitForElement(".cky-consent-container", function () {
    var rejectButtons = document.querySelector(".cky-notice-btn-wrapper .cky-btn.cky-btn-reject");
    rejectButtons.onclick = function () {
      if (document.getElementById("ckySwitchfunctional").checked === false) {
        document.getElementById("ckySwitchfunctional").click();
      }
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

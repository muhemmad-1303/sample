var checktimeout = 0;
window.addEventListener("load", function () {
  waitForElement(".cky-consent-container", function () {
    var rejectButtons = document.querySelector(".cky-notice-btn-wrapper .cky-btn.cky-btn-reject");
    var newButton=rejectButtons.cloneNode(true)
    rejectButtons.replaceWith(newButton);
    if(rejectButtons){
    newButton.onclick = function () {
      const outerLayer=document.querySelector(".cky-consent-container");
      outerLayer.classList.add('cky-hide')
      revisitCkyConsent();
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

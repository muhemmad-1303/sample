var checktimeout = 0;
window.addEventListener("load", function () {
  waitForElement(".cky-consent-container", function () {
    const rejectButtons = document.getElementsByClassName(
      "cky-btn cky-btn-reject"
    );

    for (const button of rejectButtons) {
      button.replaceWith(button.cloneNode(true));
    }
    const count=0;
    for (const button of rejectButtons) {
      if(count===0){
      button.onclick = function () {
        revisitCkyConsent()
      };
    }
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
   
 


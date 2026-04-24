/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!************************************************************************************!*\
  !*** ./src/wp-content/themes/ai-zippy-child/src/blocks/calla-connect-form/view.js ***!
  \************************************************************************************/
__webpack_require__.r(__webpack_exports__);
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".calla-connect-form__form").forEach(form => {
    const block = form.closest(".calla-connect-form");
    const success = block?.querySelector(".calla-connect-form__success");
    form.addEventListener("submit", event => {
      event.preventDefault();
      let valid = true;
      form.querySelectorAll("[required]").forEach(field => {
        field.style.borderColor = "";
        if (!field.value.trim()) {
          field.style.borderColor = "#c8786a";
          valid = false;
        }
      });
      if (!valid) {
        return;
      }
      form.style.display = "none";
      if (success) {
        success.style.display = "flex";
      }
    });
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map
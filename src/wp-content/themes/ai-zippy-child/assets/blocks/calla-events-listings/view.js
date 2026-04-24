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
/*!***************************************************************************************!*\
  !*** ./src/wp-content/themes/ai-zippy-child/src/blocks/calla-events-listings/view.js ***!
  \***************************************************************************************/
__webpack_require__.r(__webpack_exports__);
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".calla-events-listings").forEach(block => {
    const tabs = block.querySelectorAll(".calla-events-listings__tab");
    const cards = block.querySelectorAll(".calla-events-listings__card");
    const empty = block.querySelector(".calla-events-listings__empty");
    const filterCards = filter => {
      let visibleCount = 0;
      cards.forEach(card => {
        const show = filter === "all" || card.dataset.status === filter;
        card.style.display = show ? "flex" : "none";
        if (show) {
          visibleCount += 1;
        }
      });
      if (empty) {
        empty.hidden = visibleCount !== 0;
      }
    };
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(item => item.classList.remove("is-active"));
        tab.classList.add("is-active");
        filterCards(tab.dataset.filter || "all");
      });
    });
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map
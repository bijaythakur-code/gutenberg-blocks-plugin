/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************************!*\
  !*** ./src/blocks/auth-model/frontend.js ***!
  \*******************************************/
document.addEventListener('DOMContentLoaded', () => {
  const openModalBtn = document.querySelectorAll('.open-modal');
  const modalEl = document.querySelector('.wp-block-udemy-plus-auth-modal');
  const modalCloseEl = document.querySelectorAll('.modal-overlay, .modal-btn-close');
  openModalBtn.forEach(el => {
    el.addEventListener('click', event => {
      event.preventDefault();
      modalEl.classList.add('modal-show');
    });
  });
  modalCloseEl.forEach(el => {
    el.addEventListener('click', event => {
      event.preventDefault();
      modalEl.classList.remove('modal-show');
    });
  });
});
/******/ })()
;
//# sourceMappingURL=frontend.js.map
(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-open-about]'),
        closeModalBtn: document.querySelector('[data-modal-close-about]'),
        modal: document.querySelector('[data-modal-about]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal(e) {
            refs.modal.style.transition = 'opacity 1s';
            refs.modal.classList.toggle('is-open');

    }
})();
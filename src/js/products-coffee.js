(() => {
    const refs = {
        openModalBtn: document.querySelector('[coffee-modal-open]'),
        closeModalBtn: document.querySelector('[coffee-modal-close]'),
        modal: document.querySelector('[coffee-modal]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal(e) {
        if (e.target === e.currentTarget){
            refs.modal.style.transition = '1s';
            refs.modal.classList.toggle('hidden');
        }
    }
})();

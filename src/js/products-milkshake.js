(() => {
    const refs = {
        openModalBtn: document.querySelector('[milkshake-modal-open]'),
        closeModalBtn: document.querySelector('[milkshake-modal-close]'),
        modal: document.querySelector('[milkshake-modal]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal(e) {
        if (e.target === e.currentTarget){
            refs.modal.classList.toggle('hidden');
        }
    }
})();

const tutorialBtn = document.getElementById("tutorial-button");


tutorialBtn.addEventListener("click", startTutorial);


function startTutorial(){
    let tutorialBackground = document.createElement('div');
    tutorialBackground.classList.add('tutorial-background')
    document.body.insertBefore(tutorialBackground, balanceSection)

    let modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
            <div class="modal-head">
            <i class="fa-solid fa-xmark" id="close-modal"></i>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum id qui ipsa repudiandae est quod dolores aliquid eos dignissimos. Dignissimos?</p>
        </div>
        <div class="modal-body">
            <button id="btn-prev"><p>Prev</p><i class="fa-solid fa-circle-chevron-left"></i></button>
            <button id="btn-next"><p>Next</p><i class="fa-solid fa-circle-chevron-right"></i></button>
        </div>`

    document.body.insertBefore(modal, balanceSection)
}


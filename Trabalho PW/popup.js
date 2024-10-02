function openPopup(infoType) {
    const popup = document.getElementById("popup");
    const title = document.getElementById("popup-title");
    const message = document.getElementById("popup-message");

    if (infoType === 'info1') {
        title.textContent = "Hidrogenio";
        message.textContent = "Hidrogenio!";
    }
    //=========================================//
    else if (infoType === 'info2') {
        title.textContent = "Informação 2";
        message.textContent = "Aqui está a informação número 2.";
    }
    
    else if (infoType === 'info3') {
        title.textContent = "Informação 3";
        message.textContent = "Esta é a informação número 3.";
    }
    
    else if (infoType === 'info4') {
        title.textContent = "Seila";
        message.textContent = "Esta é a informação número 3.";
    }

    popup.style.display = "block";
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}
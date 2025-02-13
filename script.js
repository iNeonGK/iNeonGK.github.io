const messages = [
    "Estas segura?",
    "Muy segura??",
    "Muy Muy segura???",
    "Karo por favor...",
    "Solo piensalo bien!",
    "Si dices que no, estare triste...",
    "Muy triste...",
    "Muy Muy triste...",
    "Esta bien, dejare de preguntar...",
    "Era mentira XD, di si por favor ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

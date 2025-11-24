import { capitalizeText } from "../../utils/capitalizeText";

const dateElement = document.getElementById('date');

function getDate() {
    const formatted = new Intl.DateTimeFormat('pt-BR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(new Date());

    return formatted
}

export function renderDate() {
    return dateElement.textContent = capitalizeText(getDate());
}
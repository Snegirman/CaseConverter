const upperBtn = document.getElementById('upper-case');
const lowerBtn = document.getElementById('lower-case');
const properBtn = document.getElementById('proper-case');
const sentenceBtn = document.getElementById('sentence-case');
const downloadBtn = document.getElementById('save-text-file');
let text = document.getElementById('text');

function download() {
    text = text.value;
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', 'text');

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

upperBtn.addEventListener('click', () => {
    text.value = text.value.toUpperCase();
})

lowerBtn.addEventListener('click', () => {
    text.value = text.value.toLowerCase();
})

properBtn.addEventListener('click', () => {
    let words = text.value.split(' ');
    words = words.map((words) => words[0].toUpperCase() + words.slice(1).toLowerCase());
    text.value = words.join(" ");
})

sentenceBtn.addEventListener('click', () => {
    let words = text.value.split('. ');
    words = words.map((words) => words[0].toUpperCase() + words.slice(1).toLowerCase());
    text.value = words.join(". ");
})

downloadBtn.addEventListener('click',download);
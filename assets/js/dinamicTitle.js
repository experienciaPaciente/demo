includeHTML(() => {

const additionalWords = ['laborales', 'sanitarias', 'educativas', 'de acceso', 'de crecimiento', 'de pertenencia', 'de igualdad'];

function addDynamicWord() {
  const titleElement = document.getElementById('dynamicTitle');
  
  titleElement.classList.add('fade-out');

    setTimeout(() => {
        const randomWord = additionalWords[Math.floor(Math.random() * additionalWords.length)];
        titleElement.textContent = `oportunidades ${randomWord}`;


            titleElement.classList.remove('fade-out');
        }, 2000);
    }

    addDynamicWord();

    setInterval(addDynamicWord, 4000);
})
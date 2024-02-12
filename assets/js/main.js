var typed = new Typed(".text", {
    strings:["Frontend Developer. ", "Web Design. "],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


const flagsElement = document.getElementById("flags");

const textsToChange = document.querySelectorAll("[data-section]");


const changeLanguage = async language => {
    const requestJson = await fetch(`/languages/${language}.json`)
    const texts = await requestJson.json()

  for ( const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
  }
}

flagsElement.addEventListener('click', (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
})
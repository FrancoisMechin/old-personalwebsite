// Flip CARDS ///////

const buttonId = document.querySelector('#presentation');
const cardId = document.querySelector('#cardperso');
const backcardId = document.querySelector('#backcard1');
const backcardXp = document.querySelector('#backcard2');
const backcardSkills = document.querySelector('#backcard3');
const backcardStudies = document.querySelector('#backcard4');

buttonId.addEventListener("click", () => {
    cardId.classList.toggle("flipCard");
    backcardId.classList.toggle("flipCard");

})


//////////////////////////

const buttonXp = document.querySelector('#experiences');
const cardXp = document.querySelector('#cardxp');

buttonXp.addEventListener("click", () => {
    cardXp.classList.toggle("flipCard");
    backcardXp.classList.toggle("flipCard");

})


//////////////////////////

const buttonSkills = document.querySelector('#compétences');
const cardSkills = document.querySelector('#cardskills');

buttonSkills.addEventListener("click", () => {
    cardSkills.classList.toggle("flipCard");
    backcardSkills.classList.toggle("flipCard");

})


//////////////////////////

const buttonStudies = document.querySelector('#formations');
const cardStudies = document.querySelector('#cardstudent');

buttonStudies.addEventListener("click", () => {
    cardStudies.classList.toggle("flipCard");
    backcardStudies.classList.toggle("flipCard");

})
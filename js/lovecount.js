var guess = document.getElementById("guess");
var add = document.getElementById("higher");
var sub = document.getElementById("lower")
const btn = document.getElementById("right")
var answer = document.getElementById("answer");
var heart = document.getElementById("heart");
var count = 0
var pyro = document.getElementById("pyro");

add.addEventListener("click", (e) => {
    e.preventDefault();
    if (count < 20) {
        pyro.style.display = "none";
        heart.style.display = "none"
        count++;
        guess.textContent = `Your guess: ${count} `;
    } else {
        pyro.style.display = "none";
        heart.style.display = "none"
        count = 20;
        guess.textContent = "Your guess: Ꝏ ";
    }

})

sub.addEventListener('click', (e) => {
    e.preventDefault();
    pyro.style.display = "none";
    heart.style.display = "none"
    count--;
    guess.textContent = `Your guess: ${count} `
})

btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (count < 0) {
        pyro.style.display = "none";
        heart.style.display = "none"
        answer.textContent = `sheeshh i am hated by you? its okay i will do the loving!`
    }
    else if (count === 0) {
        pyro.style.display = "none";
        heart.style.display = "none"
        answer.textContent = `atleast its not negative!`
    }
    else if (count > 0 && count <= 5) {
        pyro.style.display = "none";
        heart.style.display = "none"
        answer.textContent = `damn thats low! but its okay! slowly but surely!`
    }
    else if (count > 5 && count < 10) {
        pyro.style.display = "none";
        heart.style.display = "none"
        answer.textContent = `hmm thats decent`
    }
    else if (count === 10) {
        pyro.style.display = "none";
        heart.style.display = "none"
        answer.textContent = `you love me this much even if me treat you bad?`
    }
    else if (guess.textContent === `Your guess: Ꝏ `) {
        pyro.style.display = "block";
        heart.style.display = "block"
        answer.textContent = `That is correct!!! yipeeeee`
    }
    else if (count > 10 && count < 20) {
        pyro.style.display = "none";
        heart.style.display = "none"
        answer.textContent = `thats more than i expected! maybe more?`
    }
    else {
        pyro.style.display = "none";
        heart.style.display = "none"
        answer.textContent = "i probably forgot some condition lol"
    }
})
const sports = ["golf", "football", "cricket"];

const games = [
    {
        name: "Starcraft 2",
        released: "2010",        
    },
    {
        name: "Age of Empires II",       
    },
    {
        name: "Cyberpunk 2077",
        released: 2020
    }
];


// Oppgave 1
function printSeason(season) {
    console.log(season);
};

printSeason("summer");

// Oppgave 2
function printNumber(firstNumber, secondNumber) {
    console.log(firstNumber, secondNumber);
};

printNumber(1, 22);

// Oppgave 3
function addNumber(en, to, tre) {
    const tot = en + to + tre;
    return tot;
};
const totalhtml = document.querySelector(".total")
const totalt = addNumber(4, 4, 1);
totalhtml.innerHTML = totalt;

// Oppgave 4
function createGreeting(navn) {
    const result = `Hello, my name is ${navn}`;
    return result;
}
const namehtml = document.querySelector("#name");
const navnet = createGreeting("Lasse");
namehtml.innerHTML = navnet;

// Oppgave 5
function printListItems(sport) {
    for (let i = 0; i < sport.length; i++) {
        console.log(sport[i]);
    }
};
printListItems(sports);

// Oppgave 6
function createGames(list) {
    let tom = "";
    for (let index = 0; index < list.length; index++) {
        let year = "Uvisst";
        if (list[index].released) {
            year = list[index].released;
        }
        tom += `<div class ="game"><h3>${list[index].name}</h3>
        <p>(${year})</p></div>`;
    }
    return tom;
;}
const html = createGames(games);
const container = document.querySelector(".game-container");
container.innerHTML = html;
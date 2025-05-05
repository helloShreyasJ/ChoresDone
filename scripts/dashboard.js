let logo = document.getElementById('logo');
let choresDone = document.getElementById('numberOfChoresDone');
let name = document.getElementById('name');
let message = document.getElementById('message');
let success = localStorage.getItem("loginSuccess");
let button_addPeople = document.getElementById('button_addPeople');
let button_addChores = document.getElementById('button_addChores');
let people = [];
let chores = [];
let choresDoneCounter = 0;

if (success === 'true') {
    name.textContent = localStorage.getItem("username");
    getQuote().then(quote => {
        message.textContent = quote;
    });
}

async function getQuote () {
    try {
        let response = await fetch('https://dummyjson.com/quotes/random');
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        let quote = await response.json();
        return quote.quote + " - " + quote.author;
    } catch (error) {
        console.log(error);
    }
}

let taskTable = document.getElementById('taskTable');

function buildTable() {
    taskTable.textContent = "";
    //Building table head. It will contain the choreTitles
    let thead = document.createElement('thead');
    let headerRow = document.createElement('tr');
    let emptyCell = document.createElement('th'); //Left corner needs to be empty because the names go there
    emptyCell.className = "emptyCell";
    headerRow.appendChild(emptyCell);
    
    //Adding choreTitle for rowHeader using a for loop
    chores.forEach(chore => {
        let choreTitle = document.createElement('th');
        choreTitle.textContent = chore;
        headerRow.appendChild(choreTitle);
        headerRow.className = 'choreHeadings';
    })
    thead.appendChild(headerRow);
    taskTable.appendChild(thead);

    //Building the table body. It will contain name of the People
    let tbody = document.createElement('tbody');
    tbody.className = 'tbody';
        people.forEach(person => { 
            let personRow = document.createElement('tr'); // New row for tasks for each person
            let nameCell = document.createElement('td'); // Name cell that will contain name of person
            nameCell.className = 'nameCell';
            nameCell.textContent = person;

            personRow.appendChild(nameCell); // Append name cell to personRow

            chores.forEach(chore => { // To make checkboxes for each chore
            let checkboxCell = document.createElement('td'); // To store the checkbox container
            let checkboxContainer = document.createElement('div'); // Container that will store 7 checkboxes
            checkboxCell.className = 'checkboxCell';
            checkboxContainer.className = 'checkbox-container';

            for(let i = 0; i < 7; i++) { //Creating 7 checkboxes
                let checkbox = document.createElement('input');
                checkbox.className = 'checkbox';
                checkbox.type = 'checkbox';
                checkbox.addEventListener('change', () => {
                    //Incrementing and decrementing the Chores done counter
                    if(checkbox.checked) {
                        choresDoneCounter++;
                    } else {
                        choresDoneCounter --;
                    }
                    choresDone.innerText = choresDoneCounter;
                    if(choresDone.innerText == 7) {
                        alert("Wahoo! You're done with a Chore for the week. Great work.")
                    }
                })
                checkboxContainer.appendChild(checkbox);
            }
            checkboxCell.appendChild(checkboxContainer);
            personRow.appendChild(checkboxCell);
        })
        let trashCell = document.createElement('td');
        trashCell.style.backgroundColor = '#FFF9F5';
        let trashContainer = document.createElement('div');
        trashCell.className = 'trashCell';
        trashContainer.className = 'trashContainer';
        let trashBox = document.createElement('img');
        trashBox.src = '../images/trash.svg';

        trashCell.addEventListener('click', () => {
            let storedPeople = JSON.parse(localStorage.getItem("people"));
            let index = storedPeople.indexOf(person);
            if (index !== -1) {
                storedPeople.splice(index, 1);
                people.splice(index, 1);
                localStorage.setItem("people", JSON.stringify(storedPeople));
            }
            if (people.length === 0) {
                localStorage.removeItem('chores');
                location.reload();
            }

            personRow.remove();
        });

        trashContainer.appendChild(trashBox);
        trashCell.appendChild(trashContainer);

        personRow.appendChild(trashCell);
        tbody.appendChild(personRow);
    })


    taskTable.appendChild(tbody);
    taskTable.className = "taskTable";
}

let addPeople = () => {
    let personName = prompt("Enter the person's name:");
    if (personName) {
        people.push(personName);
        buildTable();
    }
    localStorage.setItem("people", JSON.stringify(people));
}

let addChores = () => {
    let choreName = prompt("Enter the task name:");
    if (choreName) {
        chores.push(choreName);
        buildTable();
    }

    localStorage.setItem("chores", JSON.stringify(chores));
}

button_addPeople.addEventListener('click', addPeople);
button_addChores.addEventListener('click', addChores);

logo.addEventListener('click', () => {
    location.replace('../index.html');
});

let retrievedChores = localStorage.getItem("chores");
let retrievedPeople = localStorage.getItem("people");

if(retrievedChores) {
    chores = JSON.parse(retrievedChores);
}

if(retrievedPeople) {
    people = JSON.parse(retrievedPeople);
}

buildTable();
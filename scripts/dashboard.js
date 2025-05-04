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
    message.textContent = "Today, you are you.";
}

let taskTable = document.getElementById('taskTable');

function buildTable() {
    taskTable.textContent = "";
    //Building table head. It will contain the choreTitles.
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

    //Building the table body. It will contain name of the People.
    let tbody = document.createElement('tbody');
    tbody.className = 'tbody';
        people.forEach(person => { 
            let personRow = document.createElement('tr');
            let nameCell = document.createElement('td');
            nameCell.className = 'nameCell';
            nameCell.textContent = person;
            personRow.appendChild(nameCell);

            chores.forEach(chore => {
            let checkboxCell = document.createElement('td');
            let checkboxContainer = document.createElement('div');
            checkboxCell.className = 'checkboxCell';
            checkboxContainer.className = 'checkbox-container';

            for(let i = 0; i < 7; i++) {
                let checkbox = document.createElement('input');
                checkbox.className = 'checkbox';
                checkbox.type = 'checkbox';
                checkbox.addEventListener('change', () => {
                    //Chores done counter
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
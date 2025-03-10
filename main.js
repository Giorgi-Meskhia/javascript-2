function youngestuser(users) {
    let youngest = users[0];

    for (let i = 1; i < users.length; i++) { 
        if (users[i].age < youngest.age) { 
            youngest = users[i];
        }
    }

    return youngest.name;
}

const users = [
    { name: 'Temo', age: 25 },
    { name: 'Lasha', age: 21 },
    { name: 'Ana', age: 28 }
];

console.log(youngestuser(users)); 



function createNewObject(user) {
    
    let newUser = { 
        name: user.name, 
        age: user.age
    };
    
    return newUser;
}

const user = { name: 'Giorgi', age: 30 };

const newUser = createNewObject(user);

console.log(newUser);

function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function playGame() {
    var attemptsA = 0;
    var attemptsB = 0;

    var rollA;
    while (true) {
        rollA = rollDie();
        attemptsA++;
        console.log("Player A rolled: " + rollA);
        if (rollA === 3) {
            break;
        }
    }

    var rollB;
    while (true) {
        rollB = rollDie();
        attemptsB++;
        console.log("Player B rolled: " + rollB);
        if (rollB === 3) {
            break;
        }
    }

    if (attemptsA < attemptsB) {
        console.log("Player A wins with " + attemptsA + " rolls!");
    } else if (attemptsB < attemptsA) {
        console.log("Player B wins with " + attemptsB + " rolls!");
    } else {
        console.log("It's a tie!");
    }
}

playGame();
function FirstForLoop() {
    for (let i = 0; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(`${i} is even`);
        }
        else {
            console.log(`${i} is odd`);
        }
    }
}

function MultiplicationTables() {
    for (let i = 0; i <= 10; i++) {
        console.log(i * 9);
    }
}

function AssignGrade() {
    for (let i = 60; i <= 100; i++) 
    {
        _grade = "";
        if (i >= 90) {
            _grade = "A"
        }
        else if (i >= 80 && i < 90) {
            _grade = "B";
        }
        else if (i >= 70 && i < 80) {
            _grade = "C"
        }
        else if (i >= 60 && i < 70) {
            _grade = "D";
        }
        else if (i >= 50 && i < 60) {
            _grade = "E";
        }
        else {
            _grade = "F";
        }

        console.log(_grade);
    }
}

AssignGrade();
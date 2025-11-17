function averageScore (name, score1, score2) {
    let averageScore = (score1 + score2) / 2;
    let message = `The average score of ${name} is ${averageScore}.`;
    return message;
}

let student1 = averageScore('John Doe', 85, 90);
console.log(student1);
let student2 = averageScore('Jane Smith', 70, 80);
console.log(student2);
let student3 = averageScore('Bob Johnson', 95, 100);
console.log(student3);

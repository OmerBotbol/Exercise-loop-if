const students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
let averageGrade = 0;
let sum = 0;
for (let i = 0; i < students.length; i++) {
    sum += students[i][1]
}
averageGrade = sum / students.length;
console.log("the average grade of the class is " + averageGrade)
if (averageGrade < 60){
    console.log("Grade : F");      
} 
else if (averageGrade < 70) {
    console.log("Grade : D"); 
} 
else if (averageGrade < 80) {
    console.log("Grade : C"); 
}
else if (averageGrade < 90) {
    console.log("Grade : B"); 
} 
else if (averageGrade < 100) {
    console.log("Grade : A"); 
}
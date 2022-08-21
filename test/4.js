function exam(numberOfStudents, grades) {
    let students = numberOfStudents;
    let sumOfStudentGrade = 0;
   

    let fail = 0;
    let between3 = 0;
    let between4 = 0;
    let topStudents = 0;

    for (let i = 0; i < grades.length; i++) {
        let currentGrade = grades[i];
        console.log(currentGrade);
        sumOfStudentGrade += currentGrade;
    }
 let average = (sumOfStudentGrade / students).toFixed(2);
    for (let i = 0; i < grades.length; i++) {
        let currentGrade = grades[i];

        if (currentGrade >= 5.00) {
            topStudents += 1;
        } else if (currentGrade < 5.00 && currentGrade >= 4) {
            between4 += 1;
        } else if (currentGrade < 4.00 && currentGrade >= 3) {
            between3 += 1;
        } else {
            fail += 1;
        }
    }

    console.log(`Top students: ${(topStudents / students * 100).toFixed(2)}%`)
    console.log(`Between 4.00 and 4.99: ${(between4 / students * 100).toFixed(2)}%`)
    console.log(`Between 3.00 and 3.99: ${(between3 / students * 100).toFixed(2)}%`)
    console.log(`Fail: ${(fail / students * 100).toFixed(2)}%`)
    console.log(`Average: ${average}`)


}




exam(10, [3.00, 2.99, 5.68, 3.01, 4, 4, 6.00, 4.50, 2.44, 5])
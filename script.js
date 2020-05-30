// Exercise 1 - Students

class Student{
    constructor(name, age, studyingDays){
        this.name = name;
        this.age = age;
        this.studyingDays = studyingDays;
        this.courses = [];
    }
    showCourses(){
        return this.courses;
    }
    addCourse(courseName){
        if (this.courses.length == this.studyingDays){
            console.log('No free days!');
        }
        else {
            this.courses.push(courseName);
            console.log('You joined the course successfully');
        }
    }
}

function agesAvg(students){
    var avg = 0;
    for (i = 0; i < students.length; i++) {
        avg += students[i].age;
    }
    avg /= students.length;
    console.log(`The average age of all the students is ${avg}.`);
}

students = [];
students.push(new Student('lital', 25, 5));
students.push(new Student('asaf', 28, 3));
students.push(new Student('maor', 20, 2));
students.push(new Student('limor', 28, 6));
students.push(new Student('maya', 23, 4));

agesAvg(students);

////////////

// Exercise 2 - Library

class Book{
    constructor(name, bookId, bookPages){
        this.name = name;
        this.bookId = bookId;
        this.bookPages = bookPages;
    }
}

books = [];

function addBook(name, bookId, bookPages){
    books.push(new Book(name, bookId, bookPages));
}

function printBooks(){
    console.log(`All books in the library:`);
    for (i = 0; i < books.length; i++) {
        console.log(`${books[i].name}, ${books[i].bookId}, ${books[i].bookPages}`);
    }
}

////////////

// Exercise 3 - College Students

var student1 = {
    name: 'Lital',
    tel: 12345678,
    avgGrade: 90,
}

var student2 = {
    name: 'Asaf',
    tel: 23456789,
    avgGrade: 100,
}

var student3 = {
    name: 'Maor',
    tel: 34567890,
    avgGrade: 60,
}

collegeStu = [student1, student2, student3];

console.log(`The students name with average of more than 80 are:`)
for (let i = 0; i < collegeStu.length; i++) {
    if (collegeStu[i].avgGrade >= 80){
        console.log(collegeStu[i].name);
    }
}

////////////

// Exercise 4 - Real Estate Investors

class Apartment{
    constructor(address, houseNum, buyPrice, rentPrice){
        this.address = address;
        this.houseNum = houseNum;
        this.buyPrice = buyPrice;
        this.rentPrice = rentPrice;
    }
}

function calcYield(apartment){
    var yield = ((apartment.rentPrice * 12) / apartment.buyPrice) * 100;
    if (yield >= 5) {
        console.log(`The yield is ${yield}%. This apartment is worth investing in!`);
    }
    else {
        console.log(`The yield is ${yield}%.`);
    }
}

calcYield(new Apartment('Lilach st.', 1, 1000000, 5000));
calcYield(new Apartment('David st.', 1, 2000000, 4000));

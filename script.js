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
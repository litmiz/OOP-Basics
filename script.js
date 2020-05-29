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
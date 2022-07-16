function Student(name, gender, age) {

  this.name = name;
  this.gender = gender;
  this.age = age;


}


let student1 = new Student("Alex", "male", "19");
    
let student2 = new Student("Jess", "male", "18");

let student3 = new Student("Lesly", "female", "19");



Student.prototype.setSubject = function (subjectName) {
  this.subject  = subjectName;
}


Student.prototype.addMark = function (mark) {

if(this.marks === undefined){ 
   this.marks = [];
   this.marks.push(mark);

  // добавить первую оценку 
  } else {
  this.marks.push(mark);

    // добавить вторую и последующие оценки в массив
  }
}

Student.prototype.addMarks = function (...marks) {

  if(this.marks === undefined){ 
    this.marks = [];
    this.marks.push(...marks);
 
    } else {
    this.marks.push(...marks);
  
    }

}


Student.prototype.getAverage = function () {
     return this.marks.reduce ((a, b) => (a + b)) / this.marks.length;
}

Student.prototype.exclude = function(reason) {

  delete this.subject;
  delete this.marks;
  this.excluded = reason;

}



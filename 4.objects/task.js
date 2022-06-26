function Student(name, gender, age) {

  this.name = name;
  this.gender = gender;
  this.age = age;


}


Student.prototype.setSubject = function (subjectName) {
  this.setSubject = subjectName;
}


Student.prototype.addMark = function (mark) {

if(this.mark === undefined){ 
  this.mark = [];
  this.mark.push(mark);

  // добавить первую оценку 
  } else {
  this.mark.push(mark);

    // добавить вторую и последующие оценки в массив
  }
}

Student.prototype.addMarks(mark1,mark2,mark3) = function (...marks) {

  if(this.marks === undefined){ 
    this.marks = [];
    this.marks.push(marks);
 
    } else {
    this.marks.push(marks);
  
    }

}


Student.prototype.getAverage() = function () {
     return this.marks.map (item => item += item) / this.marks.lenght
}









let student1 = new Student("Alex", "male", "19");
    
let student2 = new Student("Jess", "male", "18");

let student3 = new Student("Lesly", "female", "19");
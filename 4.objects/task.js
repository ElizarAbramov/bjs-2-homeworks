function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let first = new Student("Kirill", "male", 22);
let second = new Student("Polina", "female", 21);
let third = new Student("Ivan", "male", 22);


Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...mark) {
  if (this.marks === undefined) {
    this.marks = [...mark];
  } else {
    this.marks.push(...mark);
  }
}

Student.prototype.getAverage = function () {
  let sum = 0;
  for (e of this.marks) {
    sum += e;
  }
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {

  if (this.excluded === undefined) {
    this.excluded = reason;
    delete this.marks;
    delete this.subject;
  }
}
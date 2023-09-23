class Batch {
  students = [];
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  addStudent(student) {
    this.students.push(student);
  }
  getStudent(index) {
    return this.students[index];
  }
  get newStudent() {
    return this.students[this.students.length - 1];
  }
}

const batch = new Batch("batch 1", 1);
batch.addStudent("student 1");
batch.addStudent("student 2");
batch.addStudent("student 3");
console.log(batch.newStudent);





// set
const student2 = {
  firstName: 'Monica',
  
  //accessor property(setter)
  set changeName(newName) {
    this.firstName = newName;
  }
};

console.log(student2.firstName); // Monica

// change(set) object property using a setter
student2.changeName = 'Sarah';

console.log(student2.firstName); // Sarah



// get
const student = {
  // data property
  firstName: 'Monica',
  
  // accessor property(getter)
  get getName() {
    return this.firstName;
  }
};

// accessing data property
console.log(student.firstName); // Monica

// accessing getter methods
console.log(student.getName); // Monica

// trying to access as a method
console.log(student.getName()); // error

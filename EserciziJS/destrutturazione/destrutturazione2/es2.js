const student = {
    info: { name: "Bob", age: 25 },
    grades: { math: 95, science: 89 }
  };
const {info:info}=student;
const {grades:grades}=student;
const {name:nome , age:eta}=info;
const {math:vMath , science:vScience}=grades;

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Starting the server
app.listen(2000, () => {
  console.log("Server running on port 2000");
});

let students = [
  {
    "id": 1,
    "firstname": "mohamed",
    "lastname": "rashidh",
    "dateofbirth": "1998-05-07",
    "semester": 1,
    "center": "Colombo",
    "cgpa": 4.0,
    "email": "rashidh@gmail.com"
  },
  {
    "id": 2,
    "firstname": "akila",
    "lastname": "fernando",
    "dateofbirth": "1998-02-01",
    "semester": 2,
    "center": "kandy",
    "cgpa": 3.8,
    "email": "akila@gmail.com"
  }
];

app.get("/students", (req, res) => {
  res.json(students);
});

app.get("/students/id=:id", (req, res) => {
  const sid = parseInt(req.params.id);
  const tempStu = students.filter((x) => x.id === sid)[0];
  if (tempStu) {
    res.json(tempStu);
  } else {
    res.sendStatus(404);
  }
});

app.get("/students/firstname=:firstname", (req, res) => {
  const sfirstname = req.params.firstname;
  const tempStu = students.filter((x) => x.firstname === sfirstname.toLowerCase())[0];
  if (tempStu) {
    res.json(tempStu);
  } else {
    res.sendStatus(404);
  }
});

app.get("/students/lastname=:lastname", (req, res) => {
  const slastname = req.params.lastname;
  const tempStu = students.filter((x) => x.lastname === slastname.toLowerCase())[0];
  if (tempStu) {
    res.json(tempStu);
  } else {
    res.sendStatus(404);
  }
});

app.get("/students/dateofbirth=:dateofbirth", (req, res) => {
  const sdateofbirth = req.params.dateofbirth;
  const tempStu = students.filter((x) => x.dateofbirth === sdateofbirth)[0];
  if (tempStu) {
    res.json(tempStu);
  } else {
    res.sendStatus(404);
  }
});

app.get("/students/center=:center", (req, res) => {
  const scenter = req.params.center;
  const tempStu = students.filter((x) => x.center === scenter)[0];
  if (tempStu) {
    res.json(tempStu);
  } else {
    res.sendStatus(404);
  }
});

app.get("/students/semester=:semester", (req, res) => {
  const ssemester = parseInt(req.params.semester);
  const tempStu = students.filter((x) => x.semester === ssemester)[0];
  if (tempStu) {
    res.json(tempStu);
  } else {
    res.sendStatus(404);
  }
});

app.get("/students/cgpa=:cgpa", (req, res) => {
  const scgpa = parseFloat(req.params.cgpa);
  const tempStu = students.filter((x) => x.cgpa === scgpa)[0];
  if (tempStu) {
    res.json(tempStu);
  } else {
    res.sendStatus(404);
  }
});

app.get("/students/email=:email", (req, res) => {
  const semail = req.params.email;
  const tempStu = students.filter((x) => x.email === semail)[0];
  if (tempStu) {
    res.json(tempStu);
  } else {
    res.sendStatus(404);
  }
});

app.post("/student", (req, res) => {
  const student = req.body;
  students.push(student);
  res.send('Student is added to the list');
});

app.put("/students/:id", (req, res) => {
  const sid = parseInt(req.params.id);
  const stu = req.body;
  const tempStu = students.filter((x) => x.id === sid)[0];
  if (tempStu) {
    tempStu.id = stu.id;
    tempStu.firstname = stu.firstname;
    tempStu.lastname = stu.lastname;
    tempStu.dateofbirth = stu.dateofbirth;
    tempStu.semester = stu.semester;
    tempStu.center = stu.center;
    tempStu.cgpa = stu.cgpa;
    tempStu.email = stu.email;
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

app.delete("/students/:id", (req, res) => {
  const studentId = parseInt(req.params.id);
  const currentStudent = students.filter((x) => x.id === studentId)[0];
  if (currentStudent) {
    students = students.filter((x) => x.id !== studentId);
    res.statusMessage = "Student deleted successfully.";
    res.sendStatus(200);
  } else {
    res.statusMessage = "Student does not exist";
    res.sendStatus(404);
  }
});

app.delete("/students/:email", (req, res) => {
  const studentemail = req.params.email;
  const currentStudent = students.filter((x) => x.email === studentemail)[0];
  if (currentStudent) {
    students = students.filter((x) => x.email !== studentemail);
    res.statusMessage = "Student deleted successfully.";
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

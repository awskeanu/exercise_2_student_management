import { getStudentsAPI, addStudentsAPI } from "./api.js";

let localStudents = [];

const studentForm = document.querySelector("#studentForm");
const studentTableBody = document.querySelector("#studentTableBody");

const renderTable = (dataArray) => {
  studentTableBody.replaceChildren();

  if (dataArray.length === 0) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 4;
    cell.textContent = "No student records found.";
    row.append(cell);
    studentTableBody.append(row);
    return;
  }

  dataArray.forEach((student, index) => {
    const row = document.createElement("tr");
    [index + 1, student.firstName, student.lastName, student.email].forEach(
      (value) => {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.append(cell);
      },
    );
    studentTableBody.append(row);
  });
};

studentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const studentData = {
    firstName: document.querySelector("#firstName").value.trim(),
    lastName: document.querySelector("#lastName").value.trim(),
    email: document.querySelector("#email").value.trim(),
  };

  if (!studentData.firstName || !studentData.lastName || !studentData.email) {
    alert("All input fields must be filled out.");
    return;
  }

  addStudentsAPI(studentData);
  localStudents = getStudentsAPI();
  renderTable(localStudents);
  studentForm.reset();
});

const initApp = () => {
  localStudents = getStudentsAPI();
  renderTable(localStudents);
};

initApp();
const firstStudentId = Date.now();

const mockStudentDb = [
  {
    id: firstStudentId,
    firstName: "Joshua",
    lastName: "Garcia",
    email: "joshua.garcia@gmail.com",
  },
  {
    id: firstStudentId + 1,
    firstName: "Daniel",
    lastName: "Padilla",
    email: "joshua.garcia@gmail.com",
  },
];

export function getStudentsAPI() {
  return mockStudentDb;
}

export function addStudentsAPI(newStudentData) {
  const savedStudent = {
    id: Math.max(Date.now(), ...mockStudentDb.map((student) => student.id + 1)),
    ...newStudentData,
  };

  mockStudentDb.push(savedStudent);
  return savedStudent;
}
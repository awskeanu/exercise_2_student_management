// Added for easier running and testing of the code.

import { getStudentsAPI, addStudentsAPI } from "./api.js";

console.log("Initial DB State:", getStudentsAPI());

const saved = addStudentsAPI({
  firstName: "Gerald",
  lastName: "Anderson",
  email: "gerald.anderson@gmail.com",
});

console.log("Returned Saved Object:", saved);
console.log("Updated DB State:", getStudentsAPI());
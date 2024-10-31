export default function createIteratorObject(report) {
  const employees = report.allEmployees; // Get the allEmployees object
  const departments = Object.keys(employees); // Get the department names

  function* employeeGenerator() {
    for (const department of departments) {
      for (const employee of employees[department]) {
        yield employee; // Yield each employee
      }
    }
  }

  return employeeGenerator(); // Return the generator function
}

const obj = [
  {
  id: 1,
  name: "shubh",
  role: "engg"
  },
  {
  id: 2,
  name: "mary",
  role: "accountant"
  },
  {
  id: 3,
  name: "riya",
  role: "hr"
  },
]

function findEmp(idx) {
  return obj.reduce((acc,emp) => {
    let value;
    if (idx === emp.id) {
      acc = emp;
    }
    return acc;
  }, {})
}

console.log(findEmp(3));

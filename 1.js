const data = [
  {
    name: "Guntur",
    age: 24,
    address: "Indonesia",
    hobbies: [
      {
        name: "programming"
      },
      {
        name: "Futsal"
      }
    ],
    isMarried: true,
    list_schools: [
      { name: "Guntur School" },
      { year_in: 2013 },
      { year_out: 2013 },
      { major: "Management" }
    ],
    skills: [
      {
        name: "Problem maker"
      },
      {
        name: "Create"
      }
    ],
    interest_in_boolean: true
  }
];
obj = JSON.stringify(data);

console.log(obj);

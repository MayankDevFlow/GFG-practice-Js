const data = prompt()

const users = [
    { id: 1, name: "Rahul", age: 22 },
    { id: 2, name: "Aman", age: 25 },
    { id: 3, name: "Mayank", age: 20 },
    { id: 4, name: "Rohit", age: 24 }
];

const searchUser = () => {
   return users.filter((val) => {
        return val.name.toLowerCase().includes(data.toLowerCase())
    })
}
console.log(searchUser())
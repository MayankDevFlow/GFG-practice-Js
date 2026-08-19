const users = [
  { id: 1, email: "a@gmail.com" },
  { id: 2, email: "b@gmail.com" },
  { id: 3, email: "a@gmail.com" },
  { id: 4, email: "c@gmail.com" }
];

const seenUser  =[];
const duplicate =[];

const findDuplicateUser= (users)=>{
     users.forEach((val)=>{
    if(seenUser.includes(val.email)){
        duplicate.push(val.email)
    }else{
        seenUser.push(val.email)
    }
    })
    return duplicate
}

console.log(findDuplicateUser(users))
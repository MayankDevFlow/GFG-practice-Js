////////// 1 method

// let obj = {
//     name:"Mayank gohiya",
//     age:20,
//     job:"Developer",
// }

////////// 2 method
// delete obj.name 


////////// 3 method
// obj.gogo = obj.age
// delete obj.age
// console.log(obj);

////////// 4 method

// let obj = new Object()

// obj.name = "mayank"
// obj.age = "20"
// obj.Nicknaam = "man"

// console.log(obj);

// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.Nicknaam);

// obj.name = "Mayank gohiya"
// console.log(obj.name);

// obj.caste ="SC"
// console.log(obj.caste);


/////// 5. Checking if a Property Exists
// let obj = { model: "Tesla" };

// console.log("model" in obj );
// console.log(obj.hasOwnProperty("age"));





// 6. Iterating Through Object Properties
//  let obj = { name: "Sourav", age: 23 };
//  for(let key in obj){
//     console.log(key ,":",obj[key]);
//     //  obj["name"] = Sourav     obj[key]  iska matlab key ki value dedo iss me 2nd way hai obj.name likhne ka    mtlb name ki value
//     // obj["age"]  = 23          obj[key]  iska matlab key ki value dedo   mtlb age ki value
//  }


//  7. Merging Objects

// let obj1 = { name: "Sourav" };
// let obj2 = { age: 23};

// let obj3 ={...obj1 ,...obj2}
// console.log(obj3);


// 8. Object Length

let obj = { name: "Sourav", age: 23 };

console.log(Object.keys(obj));  

// let nam = "     mayank gohiya   "


// console.log(nam.replace("may", "Man"))
// console.log(nam);


// console.log(nam);
// console.log(nam.trim().toUpperCase());


let arr = [ "maruti","audi","bmw","madindra","toyoto"]
// let arr1 =[10,20,30,40,50,]
// console.log(arr.includes("toyoto"));
// console.log(arr.indexOf("toyoto"));

// let newArr = arr.concat(arr1)

// console.log(newArr);

// let rev = arr.reverse()
// console.log(rev);
// console.log(arr);
// let again = rev.reverse()
// console.log(again);


console.log(arr.slice());                //   1>   return the same array
console.log(arr.slice(1));               //   2>   return the all value from index 1 to last index
console.log(arr.slice(1,4));             //   3>   return the new array which have the of index 1 to 3  ( 4-1)   because exclusive order
console.log(arr.slice(arr.length -1));   //   4>   return the last value of array
console.log(arr.slice(10));              //   5>   return the new empty array which does not have value 
console.log(arr.slice(arr.length));      //   6>   return the new empty array which does not have value 
console.log(arr.slice(-3))               //   5>   return the new array which have the value start from last to -3 means teen value dega last se 

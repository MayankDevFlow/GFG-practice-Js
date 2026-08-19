// const data1 = prompt()

const products = [
    { id: 1, name: "iPhone 15", price: 70000, category: "mobile" },
    { id: 2, name: "Samsung S24", price: 65000, category: "mobile" },
    { id: 3, name: "HP Laptop", price: 55000, category: "laptop" },
    { id: 4, name: "Dell Laptop", price: 60000, category: "laptop" }
];

const searchProduct = () => {
    return products.filter((val) => {
        return ( val.price >= 60000 , val.category== "laptop" )
        //  val.category.toLowerCase().includes(data1.toLowerCase())
    })
}

console.log(searchProduct()) 
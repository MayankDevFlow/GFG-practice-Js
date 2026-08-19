function outer() {
    let a = 20;

    return function inner() {
        console.log(a)
    }
    inner()
}

outer()
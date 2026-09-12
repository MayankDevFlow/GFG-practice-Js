function Maths() {
    function add() {
        function addTwoNum() {
            return 2 + 6
        }
        return addTwoNum
    }

    function sub() {
        return 2 - 2
    }

    return add
}


console.log(Maths()()())
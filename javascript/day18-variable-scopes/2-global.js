let n1 = 10, n2 = 20
//debugger
function add(){
    n1 = 100, n2 = 200
    return n1 + n2
}
console.log(n1,n2) // 10 20
console.log(add()) // 300
console.log(n1, n2) // 100 200
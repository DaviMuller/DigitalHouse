//Exercício 1

let x = !true
console.log("1 - " + x)

x = !false
console.log("2 - " + x)

x = !!false
console.log("3 - " + x)

x = !!true
console.log("4 - " + x)

x = !1
console.log("5 - " + x)

x = !!1
console.log("6 - " + x)

x = !0
console.log("7 - " + x)

x = !!0
console.log("8 - " + x)

x = !!""
console.log("9 - " + x)

x = 5
y = 9

console.log("a - " + (x<10&&x!=5))
console.log("b - " + (x>9||x===5))
console.log("c - " + !(x===y))


//Exercício 2

x=10
y="a"

console.log(y==="b"||x>=10)

x=3
y=8
console.log(!(x == "3" || x === y) && !(y !== 8 && x <= y))

let str = ""
let msg = "haha!"
let eBonito = "false"
console.log(!((str || msg) && eBonito))

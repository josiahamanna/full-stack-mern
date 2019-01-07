let person = {
    name: 'rahul', 
    skills: ['batting', 'keeping'], 
    details: function(){
        // console.log(this)
        // function fullDetails(){
        //     console.log(this.name)
        // }
        // fullDetails() 
        return this.name
    }, 
    showSkills: function(){
        // let refObj = this
        // this.skills.forEach(function(skill){
        //     // console.log(refObj.name + ' knows ' + skill)
        //     console.log(this.name + ' knows ' + skill)
        // }.bind(this))
        this.skills.forEach((skill) => {
            console.log(this.name + ' knows ' + skill)
        })
    }
}


console.log(person)
console.log(person.details())
console.log(person.showSkills())


// let emp = {
//     name: 'arjun', 
//     details: function(){
//         return this.name
//     }
// }

// console.log(emp.details())

// let detailsFun = emp.details

// // console.log(detailsFun.bind({name: 'gokul'})())
// detailsFun = detailsFun.bind(person)

// console.log(detailsFun())

let numbers = [ 10, 15, 20, 25 ]

const result = numbers.filter(function(n){
    return n % 2 == 0
})

const result1 = numbers.filter(n => n % 2 == 0)

console.log(result1)
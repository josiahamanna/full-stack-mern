const person = {
    name: 'suni',
    greet: function(){
        return 'Hello ' + this.name 
    }//.bind({name: 'virat'})
}

console.log(person.greet())

const greetPlayer = person.greet 

console.log(greetPlayer())
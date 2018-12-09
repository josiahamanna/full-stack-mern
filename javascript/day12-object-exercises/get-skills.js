let person = {
    name: 'rakesh',
    skills: ['js', 'py', 'rb'],
    getSkill: function(){
        // for(let i = 0; i < this.skills.length; i++) {
        //     console.log(`${this.name} knows ${this.skills[i]}`)
        // }  
        //let name = this.name
        this.skills.forEach(function(programmingLang) {
            console.log(`${this.name} knows ${programmingLang}`)
        }.bind(this))
    }
}

console.log(person.getSkill())
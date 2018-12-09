const walkMan = {

    // Properties
    songCollection: ['Fur Elise - Beethoven', 'Toccata and Fugue - Bach', 'Nocturne In C Sharp Minor - Chopin', 'Air - Bach', 'Fix You - Coldplay'],
    currentlyPlaying: 'Fix You - Coldplay',

    // Methods
    start: function() {
        return `Playing '${this.currentlyPlaying}'`
    },
    pause: function() {
        return `Paused '${this.currentlyPlaying}'`
    },
    stop: function() {
        return `Stopped '${this.currentlyPlaying}'`
    },
    shuffle: function() {
        this.currentlyPlaying = this.songCollection[Math.floor((Math.random()*10)%this.songCollection.length)]
        return `Shuffled: Now playing '${this.currentlyPlaying}'`
    }
}

console.log(walkMan.start())
console.log(walkMan.pause())
console.log(walkMan.shuffle())
console.log(walkMan.stop())
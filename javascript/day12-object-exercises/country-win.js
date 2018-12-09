const winnerList = [
    { "season": "1999-00", "team": "real madrid", "country": "Spain" },
    { "season": "2000-01", "team": "bayern munich", "country": "Germany" },
    { "season": "2001-02", "team": "real madrid", "country": "Spain" },
    { "season": "2002-03", "team": "milan", "country": "Italy" },
    { "season": "2003-04", "team": "porto", "country": "Portugal" }
]

// function declaration 
function countryWins(winnerList, countryNames) {

    /* C-style */

    // let count = 0
    // winnerList.forEach(function(winnerDetail) {
    //     if(winnerDetail.country == countryName) {
    //         count++
    //     }
    // })
    // return count

    /* JavaScript-style */
    let myObject = {}
        countryNames.forEach(function(countryName) {
        let times = winnerList.filter(function(winnerDetail) {
            return winnerDetail.country == countryName
        }).length
        myObject[countryName] = times
    })
    return myobject
}

// function invocation 
console.log(countryWins(winnerList, ['Spain', 'Germany','Sportland', 'Spain']))
// console.log(countryWins(winnerList, ))
// console.log(countryWins(winnerList, ))

// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, members) {
    return drivers.filter(function (drivers){
        return drivers.toLowerCase() ===members.toLowerCase()
    })
}

function fuzzyMatch(drivers, members) {
    return drivers.filter(function (drivers){
        return drivers.toLowerCase().substring(0, members.length)===members.toLowerCase()
    })
}

function matchName(drivers, hometown){
    return drivers.filter(function (drivers) {
        return drivers.name===hometown
    })
}
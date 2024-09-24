// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}
mondayWork()

function wrapAdjective(wrapper = "*"){
    return function(adjective = "special"){
        return `You are ${wrapper}${adjective}${wrapper}!`
    }
}
let wrapstar= wrapAdjective('*')
console.log(wrapstar("a hard worker"))

let wraps= wrapAdjective('||')
console.log(wraps("a dedicated programmer"))
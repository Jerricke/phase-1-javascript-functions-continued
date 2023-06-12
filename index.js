// code your solution here

const saturdayFun = (activity = "roller-skate") => {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity = "go to the office") => {
    return `This Monday, I will ${activity}.`
}

// const wrapAdjective = (initializer="*") => {
//     let adj;
//     if (initializer === "*") {  
//         adj = "a hard worker";
//     }   else if (initializer === "||") {
//         adj = "a dedicated programmer";
//     }
//     return `You are ${initializer}${adj}${initializer}!`
// }

const wrapAdjective = (initializer = "*") => {
    return (function(message){
        return `You are ${initializer}${message}${initializer}!`
    })
}

console.log(wrapAdjective('*'));
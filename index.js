// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

//function mondayWork(activity = "go to the office"){
    //return `This Monday, I will ${activity}.`;
//}

const mondayWork = function (activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = "*"){
    const inner = function (wish = "special"){
        return `You are ${flair}${wish}${flair}!`
    }
    return inner;
}

let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];


function getRandomPosition(arr) {
    return Math.floor(Math.random() * arr.length)
}

function createExcuse(who, action, what, when) {
    return `${who[getRandomPosition(who)]} ${action[getRandomPosition(action)]} ${what[getRandomPosition(what)]} ${when[getRandomPosition(when)]}`
}

console.log(createExcuse(who, action, what, when))
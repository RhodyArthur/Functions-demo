// greets user by name
const greetUser = (name)=>{
    return `hello ${name}`
}

// adds two numbers
const addNumbers = (a, b)=>{
    return a + b
}

// reverses a string
const reverseString = (text)=>{
    return text.split('').reverse().join('')
}
module.exports = {
    greetUser,
    addNumbers,
    reverseString
}
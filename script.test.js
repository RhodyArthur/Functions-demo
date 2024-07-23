const {
    greetUser,
    addNumbers,
    reverseString
} = require('./script')


test('greets user by name', ()=>{
    expect(greetUser('Rhoda')).toBe('hello Rhoda')
})

test('adds two numbers', ()=>{
    expect(addNumbers(5,4)).toBe(9)
})

test('reverses a string', ()=>{
    expect(reverseString('hello')).toBe('olleh')
})
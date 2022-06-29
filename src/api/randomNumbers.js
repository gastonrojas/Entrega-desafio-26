const random = () =>{
    return Math.floor(Math.random() * 1000000) + 1
}
const randomNumbers = (cant) => {
    const numbers = []

    for (let i = 0; i < cant; i++ ){
        numbers.push(random())
    }
    return numbers
}


process.on('message', msg => {
    const arrayOfRandomNumbers = randomNumbers(msg)
    process.send(arrayOfRandomNumbers)
    process.exit()
})

process.send('ready')
function printDigits(input: number) {
    if (input < 0) {
        printChar('-')
        input = - input
    }
    const int = intPart(input)
    const decimal = decimalPart(input)
    printInt(int)
    printChar('.')
    printDecimal(decimal, 4)
}

function intPart(input: number) {
    return Math.floor(input)
}

function decimalPart(input: number) {
    const int = intPart(input)
    return input - int
}

function roundUpDecimal(input: number, decimalPlace: number) {
    let amountToAdd = 0.5
    for (let i = 0; i < decimalPlace; i++) {
        amountToAdd /= 10
    }
    return input + amountToAdd
}

function printInt(input: number) {
    if (input >= 10) {
        printInt(input / 10)
    }
    printChar(parseInt(`${input % 10}`) + '')
}

function printDecimal(input: number, decimalPlace: number) {
    input = roundUpDecimal(input, decimalPlace)
    for (let index = 0; index < decimalPlace; index++) {
        input *= 10
        let int = intPart(input)
        printInt(int)
        input = input - int
    }
}

function printChar(char: string) {
    console.log(char)
}

export const main = () => {
    const input = 3456789.1415
    printDigits(input)
}

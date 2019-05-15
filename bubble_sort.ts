import { random } from "lodash";

function bubbleSort(array: number[]) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                array[j] ^= array[j + 1]
                array[j + 1] ^= array[j]
                array[j] ^= array[j + 1]
            }
        }
    }
}

export const main = () => {
    const max = 10000
    const bigArray = []
    for (let index = 0; index < max; index++) {
        bigArray.push(random(max))
    }
    const begin = Date.now()
    bubbleSort(bigArray)
    const cost = Date.now() - begin
    console.log(`It cost ${cost}ms to sort ${bigArray.length} item`)
}


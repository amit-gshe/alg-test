
function wordPuzzleGameProblem(array: string[][]) {
    for (let x = 0; x < array.length; x++) {
        for (let y = 0; y < array[x].length; y++) {
            let start = array[y][x]
            for (let xDir = -1; xDir <= 1; xDir++) {
                for (let yDir = -1; yDir <= 1; yDir++) {
                    if (xDir == 0 && yDir == 0) {
                        continue
                    }
                    let word = start
                    for (let length = 1; ; length++) {
                        let newY = y + length * yDir
                        let newX = x + length * xDir
                        if (array[newY] && array[newY][newX]) {
                            word += array[y + length * yDir][x + length * xDir]
                            console.log(`(${x},${y}), (${xDir},${yDir}), ${length}, (${newX}, ${newY}), ${word}`)
                        } else {
                            break
                        }
                    }
                }
            }

        }

    }
}

export const main = () => {
    const array = [
        ['t', 'w', 'o', 'f'],
        ['h', 'a', 'a', 'g'],
        ['i', 't', 'h', 'd'],
        ['s', 's', 'g', 't']
    ]
    wordPuzzleGameProblem(array)
}

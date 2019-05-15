
const dir = [[-1, 0, 1], [-1, 0, 1]]
function wordPuzzleGameProblem(array: string[][]) {
    for (let x = 0; x < array.length; x++) {
        for (let y = 0; y < array[x].length; y++) {
            let start = array[y][x]
            for (let xdir = -1; xdir <= 1; xdir++) {
                for (let ydir = -1; ydir <= 1; ydir++) {
                    if(xdir==0 && ydir==0) {
                        continue
                    }
                    let word = start
                    for (let length = 1; ; length++) {
                        let newY = y + length * ydir
                        let newX = x + length * xdir
                        console.log(`(${y},${x}), ${length},(${ydir},${xdir}),(${newY},${newX}),`)
                        if (array[newY] && array[newY][newX]) {
                            if (newX !== x && newY != y) {
                                word += array[y + length * ydir][x + length * xdir]
                                console.log(word)
                            }
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
import fs from "fs";

const INCLUDE_PATH = './resource/'
function parseInclude(filename: string): string {
    let parsedContent = ""
    const content = fs.readFileSync(INCLUDE_PATH + filename).toString()
    const lines = content.split("\n").map((line) => line.trim())
    for (const line of lines) {
        if (line.trim().length > 0) {
            const parsedLine = parseLine(line)
            parsedContent += (parsedLine + "\n")
        }

    }
    return parsedContent
}

function parseLine(line: string): string {
    if (line.startsWith("#include")) {
        return parseInclude(line.replace("#include", "").replace(/\"/g, "").trim()).trim()
    } else {
        return line.trim()
    }
}

export const main = () => {
    console.log(parseInclude("a.h"))
}

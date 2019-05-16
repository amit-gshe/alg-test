import fs from "fs";

const INCLUDE_PATH = './resource/'
function parseInclude(filename: string): string {
    let parsedContent = ""
    const content = fs.readFileSync(INCLUDE_PATH + filename).toString()
    const lines = content.split("\n").map((line) => line.trim())
    console.log(lines)
    for (const line of lines) {
        const parsedLine = parseLine(line)
        if (parsedLine.length > 0) {
            parsedContent += (parsedLine + "\n")
        }
    }
    return parsedContent
}

function parseLine(line: string): string {
    if (line.startsWith("#include")) {
        return parseInclude(line.replace("#include", "").replace(/\"/g, "").trim())
    } else {
        return line
    }
}

export const main = () => {
    console.log(parseInclude("a.h"))
}

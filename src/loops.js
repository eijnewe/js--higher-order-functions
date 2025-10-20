import { personArray, emojiArray } from './data.js'

export function forLoopCountToFive() {
    const result = []
    for (let index = 1; index <= 5; index++) {
        result.push(index)
    }
    return result
}

export function whileEvenNumbersUpToTen() {
    // arrayen ska bara innehålla jämna tal
    const result = []
    let evenCandidate = 0
    while (evenCandidate <= 10) {
        result.push(evenCandidate)
        evenCandidate += 2
    }
    return result
}

export function doWhileAtLeastOnce() {
    const result = []
    let doIdx = 0
    do {
        result.push(doIdx)
    } while (result.length < 1)
    return result
}

export function getNamesFromPersonArrayUsingForOf() {
    const result = []

    for (const person of personArray) {
        result.push(person.name)
    }
    return result
}

//for in... ger tillbaka keys
// en aray har inte keys, men index
//for of... ger tillbaka värden

export function getFirstPersonKeysUsingForIn() {
    const result = []

    for (const key in personArray[0]) {
        result.push(key)
    }

    return result
}

export function nameEmojiPairsNestedLoop() {
    const result = []
    for (const person of personArray) {
        emojiArray.forEach((emoji) => {
            result.push(person.name + '-' + emoji)
        })
    }
    return result
}

export function sumOfAgesForLoop() {
    let total = 0
    for (const person of personArray) {
        total += person.age
    }
    return total
}

export function productUntilFiveWithBreak() {
    let product = 1
    for (let index = 2; index <= 5; index++) {
        if (product == 120) {
            break
        }

        product = product * index
    }
    return product
}

export function agesExceptThirteenWithContinue() {
    const result = []
    for (const person of personArray) {
        if (person.age === 13) {
            continue
        }
        result.push(person.age)
    }
    return result
}

export function namesReversedOrderWithFor() {
    const result = []
    for (const person of personArray) {
        result.push(person.name)
    }
    return result.reverse()
}

export function indexOfMaybeCityManualLoop() {
    let index = -1

    for (index = 0; index < personArray.length; index++) {
        if (personArray[index].city === 'Maybe') {
            return index
        }
    }

    return index
}

export function firstPersonOver12ManualFind() {
    let found = null
    for (let index = 0; index < personArray.length; index++) {
        const person = personArray[index]
        if (person.age > 12) {
            found = person
            break
        }
    }
    return found
}

export function emojiStringUsingForOf() {
    let text = ''
    for (const emoji of emojiArray) {
        text += emoji
    }

    return text
}

export function multiplicationTableThreeByThree() {
    const table = []
    for (let row = 1; row <= 3; row++) {
        let currentRow = []
        for (let col = 1; col <= 3; col++) {
            currentRow.push(row * col)
        }

        table.push(currentRow)
    }
    return table
}

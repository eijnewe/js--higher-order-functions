import { personArray, emojiArray } from './data.js'

// här ska allt vara variabler vars värde är returnen från någon av de olika higher order functions
// med undantag för "getObjectFromArray" nederst som redan är en funktion

//personArray
export const namesOnly = personArray.map((person) => person.name)
export const agesOnly = personArray.map((person) => person.age)
export const withoutJim = personArray.filter((person) => person.name != 'Jim')
export const combinedAge = personArray.reduce(
    (total, person) => total + person.age,
    0
)
export const findJane = personArray.find((person) => person.name == 'Jane')

//
export const sortedByAgeFromYoungestToOldest = [...personArray].sort(
    (older, younger) => older.age - younger.age
)
//
export const namesByAgeFromOldestToYoungest = [...personArray]
    .sort((older, younger) => younger.age - older.age)
    .map((person) => person.name)
//
export const everyoneOver12 = personArray.every((person) => person.age > 12)
//
export const isAnyoneOver13 = personArray.some((person) => person.age > 13)
//
//
export const indexOfMaybe = personArray.findIndex(
    (person) => person.city == 'Maybe'
)
//
export const namesByLastLetter = personArray.map((person) => person.name.at(-1))

/* ---------------------------------- */

// emojiArray
//
export const arrayIncludesSquirel = emojiArray.includes('🐿️')
//
export const indexOfRocket = emojiArray.indexOf('🚀')

/* ---------------------------------- */

// ska skapa ett objekt innehållande objekten i personArray
const getObjectFromArray = () => {
    const newObject = {}
    for (const person of personArray) {
        newObject[person.name.toLowerCase()] = person
    }

    return newObject
}

// lämnas orörda. dessa två testar funktionaliteten
export const objectFromArray = getObjectFromArray()
export const janeFromPersonObject = objectFromArray.jane

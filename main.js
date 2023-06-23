const tributeChest = []

const payTribute = (tributeId, tributeDescription, queenId) => {
    const tributeObject = {
        id: tributeId,
        description: tributeDescription,
        queenId: queenId
    }

    tributeChest.push(tributeObject)
}

payTribute(1, "Barrel of wine", 1)
payTribute(2, "silk", 2)
payTribute(3, "oranges", 3)
payTribute(4, "gold coins", 1)

const queens = []

const createQueen = (queenId, queenName) => {
    const queenObject = {
        id: queenId,
        name: queenName
    }

    queens.push(queenObject)
}

const trinity = createQueen(1, "Trinity Terry")
const annie = createQueen(2, "Taylor Wadsworth")
const taylor = createQueen(3, "Annie Storey")
const ramona = createQueen(4, "Ramona Singer")


const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
}

for (const queen of queens) {
    const hailMessage = hailTheQueen(queen.name)
    console.log(hailMessage)
}

for (const queen of queens) {

    for (const tribute of tributeChest) {
        if (tribute.queenId === queen.id) {
        console.log(`${queen.name} has tribute ${tribute.description}`)
        }
    }
} 
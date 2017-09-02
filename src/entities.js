import {generateRandomKey} from "./helpers";

const poniesModels = [
    {
        name: "Твайлайт",
        color: "Фиолетовый",
        kind: "Единорог",
        price: 19.99,
        is_new: false
    },
    {
        name: "Мойлайт",
        color: "Бордовый",
        kind: "Единорог",
        price: 14.69,
        is_new: true
    },
    {
        name: "Дракоша",
        color: "Серый",
        kind: "Дракон",
        price: 16.99,
        is_new: false
    },
    {
        name: "Гиганто",
        color: "Черный",
        kind: "Дракон",
        price: 49.99,
        is_new: true
    }
]

export const PONIES = generateToys(poniesModels, 50)
export const PONIES_TYPES = ["Единорог", "Дракон"]
export const PONIES_COLORS = ["Фиолетовый","Бордовый", "Серый", "Черный"]

function generateToys(models, length) {
    let toys = []

    while(toys.length < length) {
        const randomIndex = Math.floor(Math.random() * models.length)
        toys.push({
            ...models[randomIndex],
            id: generateRandomKey()
        })
    }

    return toys
}

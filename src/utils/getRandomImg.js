import { getRandomNumber } from "./getRandomNumber";

export const getRandomImg = (cat) => {
    return `https://source.unsplash.com/random/?${cat}"&${getRandomNumber(1,100)}`
}
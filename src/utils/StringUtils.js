/**
 * Set capitalize the first letter of a String
 * Used for months
 * @param {String} word  
 * @returns {String}
 */
export function capitalizeFirstLetter(word) {
    if (!word) return ''; // Maneja cadenas vacías
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}


export function styleOradorString(fullname) {
    let names

    try {
        names = fullname.split(" ")
    } catch (e) {
        return undefined

    }

    // Two values
    if (names.length === 2) {
        const name = names[0]
        const surname = names[1]
        return name + '\n' + surname
    }

    //Three values
    if (names.length === 3) {
        const name = names[0]
        const secondName = names[1]
        const surname = names[2]

        const firstCombination = name.length + secondName.length > surname.length
        const secondCombination = name.length > secondName.length + surname.length

        if (firstCombination) { return name + ' ' + secondName + '\n' + surname }
        if (secondCombination) { return name + '\n' + secondName + ' ' + surname }

    }
    return fullname
}

export function styleTemaString(tema) {
    try {

        if (tema.length > 33) {
            let words = tema.split(' ')

            const half = Math.ceil(words.length / 2)

            words.splice(half, 0, '\n')

            const fullPhrase = words.join(' ')

            return fullPhrase

        }
        return tema

    } catch (e) {
        return undefined
    }

}
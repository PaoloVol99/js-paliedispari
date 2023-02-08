// FUNZIONI //

function lowercaseWord(word) {
    let lowercased = word.toLowerCase()
    return lowercased
}

function invert(word) {
    let splittedWord = word.split('')
    let inverted = splittedWord.reverse()
    return inverted
}

function isPalindrome(word) {
    let message
    let lowercased = lowercaseWord(word)
    for (let i = 0; i < invert(word).length; i++) {
        if ((invert(lowercased)[i]) === (lowercased.split('')[i])) {
            console.log('la lettera è uguale')
            message = true
        } else {
            console.log('la lettera è diversa')
            message = false
        }
    }
    console.log(message)
    if (message === true) {
        console.log('la parola', word,'è palindroma')
    } else {
        console.log('la parola', word,'non è palindroma')

    }
}
    


// CODICE

let userWord = prompt ('scrivi una parola')
isPalindrome(userWord)
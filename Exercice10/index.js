//votre code ici
function printNumbers(number) {
    let result = ''

    if (typeof number !== 'number') {
        return 'Error : parameter attempted must be a number'
    } else {
        for (let i = 1; i <= Math.floor(number); i++) {
            result += i
            if (i < Math.floor(number)) {
                result += ' '
            }
        }
        return result
    }
}

export default printNumbers

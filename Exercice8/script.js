//Votre code ici
function add(a, b) {
    if (typeof a === 'string' && typeof parseInt(a) === 'number') {
        if (typeof b === 'string' && typeof parseInt(b) === 'number') {
            return parseFloat(a) + parseFloat(b)
        } else if (typeof b === 'number') {
            return parseInt(a) + b
        }
    } else if (typeof a === 'number' && typeof b === 'number') {
        return a + b
    } else {
        return 'Error : parameters attempted must be numbers to be added'
    }
}
 export default add;

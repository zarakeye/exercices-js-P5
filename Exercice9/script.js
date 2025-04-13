// votre code ici
function checkAge(age) {
    if (typeof age !== "number") {
        return "Error : The age must be entered as a number."
    } else if (Math.floor(age) < 18) {
        return "Vous êtes mineur."
    } else if (Math.floor(age) >= 18 && Math.floor(age) < 65) {
        return "Vous êtes majeur."
    } else if (Math.floor(age) >= 65) {
        return "Vous êtes senior."
    }
}
export default checkAge;

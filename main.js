//TODO add imports if needed
//TODO doc
/**
 * The main function which calls the application. 
 * Please, add specific description here for the application purpose.
 * @param {object} dtoIn contains count of employees, age limit of employees {min, max}
 * @returns {Array} of employees
 */

// List of possible male names
const maleNames = [
    "Jan", "Petr", "Lukáš", "Tomáš", "Jiří", "Martin", "David", "Jakub", "Michal", "Filip",
    "Adam", "Vojtěch", "Matěj", "Ondřej", "Marek", "Daniel", "Josef", "Roman", "Václav", "Karel",
    "Radek", "Richard", "Dominik", "Aleš", "Jaroslav", "Miroslav", "Patrik", "Štěpán", "Tobiáš", "Erik",
    "Ladislav", "Stanislav", "František", "Libor", "Vladimír", "Bohumil", "Rostislav", "Jindřich", "Alan", "Boris",
    "Kryštof", "Kristián", "Samuel", "Hugo", "Otakar", "Eduard", "Emil", "Hynek", "Robert", "Zdeněk"
];

// List of possible female names
const femaleNames = [
    "Eva", "Anna", "Lucie", "Petra", "Jana", "Tereza", "Veronika", "Eliška", "Adéla", "Marie",
    "Kristýna", "Karolína", "Barbora", "Monika", "Markéta", "Kateřina", "Hana", "Gabriela", "Klára", "Natálie",
    "Nikola", "Alžběta", "Alice", "Lenka", "Michaela", "Zuzana", "Denisa", "Pavla", "Simona", "Šárka",
    "Viktorie", "Vendula", "Sabina", "Magdaléna", "Andrea", "Iveta", "Renata", "Ilona", "Blanka", "Božena",
    "Olga", "Sofie", "Stela", "Diana", "Laura", "Ema", "Stánislava", "Irena", "Růžena", "Dagmar"
];

// List of possible male surnames
const maleSurnames = [
    "Novák", "Svoboda", "Dvořák", "Černý", "Procházka", "Krejčí", "Král", "Beneš", "Fiala", "Sedláček",
    "Doležal", "Zeman", "Kolář", "Kučera", "Konečný", "Malý", "Holý", "Navrátil", "Pokorný", "Jelínek",
    "Růžička", "Hájek", "Němec", "Urban", "Bláha", "Kraus", "Mach", "Lukeš", "Pavlík", "Vacek",
    "Vlček", "Kočí", "Šimek", "Beran", "Marek", "Černík", "Slavík", "Říha", "Sýkora", "Šrámek",
    "Bartoš", "Pešek", "Langer", "Hrubý", "Tichý", "Kovář", "Moravec", "Kříž", "Horník", "Straka"
];

// List of possible female surnames
const femaleSurnames = [
    "Nováková", "Svobodová", "Dvořáková", "Černá", "Procházková", "Krejčíová", "Králová", "Benešová", "Fialová", "Sedláčková",
    "Doležalová", "Zemanová", "Kolářová", "Kučerová", "Konečná", "Malá", "Holá", "Navrátilová", "Pokorná", "Jelínková",
    "Růžičková", "Hájeková", "Němcová", "Urbanová", "Bláhová", "Krausová", "Machová", "Lukešová", "Pavlíková", "Vacková",
    "Vlčková", "Kočíová", "Šimková", "Beranová", "Marková", "Černíková", "Slavíková", "Říhová", "Sýkorová", "Šrámková",
    "Bartošová", "Pešková", "Langerová", "Hrubá", "Tichá", "Kovářová", "Moravcová", "Křížová", "Horníková", "Straková"
];

// Random integer for min, max age
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Random birthdate (ISO format)
function randomBirthdate(minAge, maxAge) {
    const now = new Date();
    const currentYear = now.getFullYear();
    const birthYear = randomInt(currentYear - maxAge, currentYear - minAge);
    const birthMonth = randomInt(0, 11);
    const birthDay = randomInt(1, 28);
    const birthdate = new Date(birthYear, birthMonth, birthDay);
    return birthdate.toISOString();
}

// Generate single employee object with properties:
// gender: random male/female
// name/surname: randomly chosen depending on gender
// birthdate:generate in Iso format
// workload: randomly selected
function generateEmployee(minAge, maxAge) {
    const gender = Math.random() < 0.5 ? "male" : "female";

    const name = gender === "male"
        ? maleNames[randomInt(0, maleNames.length - 1)]
        : femaleNames[randomInt(0, femaleNames.length - 1)];

    const surname = gender === "male"
        ? maleSurnames[randomInt(0, maleSurnames.length - 1)]
        : femaleSurnames[randomInt(0, femaleSurnames.length - 1)];

    const birthdate = randomBirthdate(minAge, maxAge);

    const workloads = [10, 20, 30, 40];
    const workload = workloads[randomInt(0, workloads.length - 1)];

    return { gender, birthdate, name, surname,  workload };
}

// Generate list (array) of employees based on input
// count: number of employees
// minAge/maxAge: age ranges for birthdates
// Return in a loop an array of employee objects
function generateEmployees(count, minAge, maxAge) {
    const employees = [];
    for (let i = 0; i < count; i++) {
        employees.push(generateEmployee(minAge, maxAge));
    }
    return employees;
}

// Example usage
const numberOfEmployees = 10;
const minAge = 25;
const maxAge = 60;

const result = generateEmployees(numberOfEmployees, minAge, maxAge);
console.log(result);

// export main function
function main(dtoIn) {
    // dtoIn = { count, minAge, maxAge }
    return generateEmployees(dtoIn.count, dtoIn.minAge, dtoIn.maxAge);
}


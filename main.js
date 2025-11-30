//TODO add imports if needed
//TODO doc
/**
 * The main function which calls the application. 
 * Please, add specific description here for the application purpose.
 * @param {object} dtoIn contains count of employees, age limit of employees {min, max}
 * @returns {Array} of employees
 */
export function main(dtoIn) {

    // pole 50 náhodných českých jmen mužů
    const maleNames = [
        "Jan", "Petr", "Josef", "Tomáš", "Martin", "Jiří", "Ondřej", "David", "Lukáš",
        "Jakub", "Michal", "Marek", "Filip", "Václav", "Daniel", "Matěj", "Radek",
        "Roman", "Karel", "Jaroslav", "Aleš", "Adam", "Štěpán", "Dominik",
        "Vojtěch", "Patrik", "Miloslav", "Rudolf", "Lubomír", "Bohumil",
        "Stanislav", "Libor", "Richard", "Zdeněk", "Oldřich", "Antonín",
        "Břetislav", "Eduard", "Emil", "Prokop", "Hynek", "Otakar",
        "Vlastimil", "Igor", "Dalibor", "Erik", "Samuel", "Pavel", "Robin"
    ];

    // pole 50 náhodných českých příjmení mužů
    const maleSurnames = [
        "Novák", "Svoboda", "Novotný", "Dvořák", "Černý", "Procházka", "Kučera", "Veselý",
        "Horák", "Němec", "Pokorný", "Fiala", "Sedláček", "Jelínek", "Růžička", "Malý",
        "Král", "Beneš", "Holub", "Krejčí", "Šimek", "Urban", "Bartoš", "Kolář", "Vacek",
        "Konečný", "Marek", "Hruška", "Štěpánek", "Kadlec", "Zeman", "Sýkora", "Blažek",
        "Doležal", "Pavelka", "Tichý", "Čech", "Kříž", "Matoušek", "Vondráček", "Švec",
        "Kovář", "Janda", "Holeček", "Vrána", "Bílý", "Štěrba", "Kudla", "Lukáš", "Duda"
    ];

    // pole 50 náhodných českých jmen žen
    const femaleNames = [
        "Jana", "Marie", "Eva", "Anna", "Lucie", "Tereza", "Adéla", "Veronika", "Barbora",
        "Monika", "Zuzana", "Petra", "Kristýna", "Nikola", "Markéta", "Kamila", "Blanka",
        "Michaela", "Ludmila", "Alžběta", "Viktorie", "Nela", "Sára", "Eliška",
        "Karolína", "Denisa", "Radka", "Gabriela", "Renata", "Šárka", "Kateřina", "Martina",
        "Hana", "Lenka", "Simona", "Jitka", "Ivana", "Helena", "Dana", "Věra",
        "Aneta", "Beata", "Magdaléna", "Sabina", "Stela", "Valerie", "Patricie", "Kristina",
        "Lea", "Emilie"
    ];

    // pole 50 náhodných českých příjmení žen
    const femaleSurnames = [
        "Nováková", "Svobodová", "Dvořáková", "Černá", "Procházková",
        "Kučerová", "Veselá", "Horáková", "Němcová", "Pokorná",
        "Pospíšilová", "Hájeková", "Králová", "Jelínková", "Růžičková",
        "Benešová", "Fialová", "Sedláčková", "Kolářová", "Urbanová",
        "Šimečková", "Malá", "Kadlecová", "Machová", "Bláhová",
        "Marková", "Havlíčková", "Adamová", "Šťastná", "Ševčíková",
        "Zimová", "Kovářová", "Tichá", "Bartošová", "Sýkorová",
        "Vondráčková", "Holubová", "Pavlová", "Křížová", "Vlková",
        "Hrušková", "Říhová", "Straková", "Vinklerová", "Gregorová",
        "Doležalová", "Nejedlá", "Slavíková", "Pařízková"
    ];

    // deklarace výstupní proměnné
    let employees = [];
    let dtoOut = employees

    // cyklus pro vytvoření počtu zaměstnanců dle count v dtoIn
    for (let x = 0; x < dtoIn.count; x++) {

        // deklarace náhodného pohlaví
        let gender
        let random = Math.random()
        if (random < 0.5) {
            gender = "male";
        } 
        else {
            gender = "female"; 
        }

        // výpočet náhodného věku dle rozmezí ze vstupních dat
        let minAge = dtoIn.age.min;
        let maxAge = dtoIn.age.max;
        let age_rand = Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;

        // deklarace a výpočet roku narození
        let currentYear = new Date().getFullYear();
        let birthYear = currentYear - age_rand;

        // deklarace náhodného měsíce a dne v měsíci
        let day_rand = Math.floor(Math.random() * 28) + 1;
        let month_rand = Math.floor(Math.random() * 12);

        // vytvoření data narození ve formátu ISO Date-Time - YYYY-MM-DDTHH:mm:ss.sssZ
        let birthdate = new Date(birthYear, month_rand, day_rand).toISOString();

        // deklarace proměnných pro jméno a příjmení
        let firstName;
        let lastName;

        // výběr jména a příjmení podle pohlaví
        if (gender === "male") {

            // výběr náhodného jména a příjmení z příslušných polí pro muže
            firstName = maleNames[Math.floor(Math.random() * maleNames.length)];
            lastName = maleSurnames[Math.floor(Math.random() * maleSurnames.length)];
        }   
        else if (gender === "female") {

            // výběr náhodného jména a příjmení z příslušných polí pro ženy
            firstName = femaleNames[Math.floor(Math.random() * femaleNames.length)];
            lastName = femaleSurnames[Math.floor(Math.random() * femaleSurnames.length)];
        }

        // výběr náhodné pracovní zátěže z pole workloads
        const workloads = [10, 20, 30, 40];
        let workload = workloads[Math.floor(Math.random() * workloads.length)];

        // přidání zaměstnance do pole employees
        employees.push({ gender: gender,
                        birthdate: birthdate,
                        name: firstName,
                        surname: lastName,
                        workload: workload
         });
    }

  return dtoOut;
}


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
        "Roman", "Karel"
    ];

    // pole 50 náhodných českých příjmení mužů
    const maleSurnames = [
        "Novák", "Svoboda", "Novotný", "Dvořák", "Černý", "Procházka", "Kučera", "Veselý",
        "Horák", "Němec", "Pokorný", "Fiala", "Sedláček", "Jelínek", "Růžička", "Malý",
        "Král", "Beneš", "Holub"
    ];

    // pole 50 náhodných českých jmen žen
    const femaleNames = [
        "Jana", "Marie", "Eva", "Anna", "Lucie", "Tereza", "Adéla", "Veronika", "Barbora",
        "Monika", "Zuzana", "Petra", "Kristýna", "Nikola", "Markéta", "Kamila", "Blanka",
        "Michaela", "Ludmila", "Alžběta", "Viktorie", "Nela", "Sára"
    ];

    // pole 50 náhodných českých příjmení žen
    const femaleSurnames = [
        "Nováková", "Svobodová", "Dvořáková", "Černá", "Procházková",
        "Kučerová", "Veselá", "Horáková", "Němcová", "Pokorná",
        "Pospíšilová", "Hájeková", "Králová", "Jelínková", "Růžičková"

    ];

    // deklarace výstupní proměnné
    const employees = [];
    const dtoOut = employees

    const minAge = dtoIn.age.min;
    const maxAge = dtoIn.age.max;
    const YEAR_MS = 365.25 * 24 * 60 * 60 * 1000;

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
        let birthdate;
        do {
          const age = minAge + Math.random() * (maxAge - minAge); // min <= age < max
          const nowMs = Date.now();
          const birthMs = nowMs - age * YEAR_MS;
          birthdate = new Date(birthMs).toISOString();
        } while (usedBirthdates.has(birthdate));

        usedBirthdates.add(birthdate);

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

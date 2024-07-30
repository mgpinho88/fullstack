import { franc } from 'franc';
import langs from 'langs';

// test languages - this can stay commented
// const portuguese = franc("Vários cliques aleatórios na imagem de controle no surf são proibidos.");
// const dutch = franc("Hoofdstad ingenieur ik op toeneming aanraking bevolking schaarsch ze.");
// const greek = franc("Θα τρομάρας κινήματα ας καλύτερο σωτηρίας πολιτικά.");

// Test with the above
// console.log(`portuguese test\n expected: "Portuguese" \nactual: ${ langs.where("3", portuguese).name }`);
// console.log(`language02 test\n expected: "Dutch" \nactual: ${ langs.where("3", dutch).name }`);
// console.log(`language03 test\n expected: "Greek" \nactual: ${ langs.where("3", greek).name }`);

// Below code take arguments in from CLI
const input = process.argv[2];
// Now pass the argument into the franc imported object
const inLang = franc(input);

// Check if the language is undefined
if (inLang === "und") {
    console.log("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT!");
} else {
    const language = langs.where("3", inLang);
    // Check that a language was detected
    if (language) {
        console.log(`I guess the language you typed in is ${ language.name }`);
    } else {
        console.log(`Could not find a language for ${ inLang }`);
    }
}
#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';
import figlet from 'figlet';
import gradient from 'gradient-string';
import Table from 'cli-table3';


const program = new Command();


console.log(
    gradient.pastel.multiline(
        figlet.textSync('Disney CLI', { font: 'Big' })
    )
);

console.log(chalk.yellow("✨ Welcome to the Magical World of Disney! ✨"));
console.log(chalk.bold.cyan("Use the commands below to explore movies, characters, parks, and more!"));
console.log("---------------------------------------------------------------\n");

console.log(chalk.green("🎬 Movies:"));
console.log(chalk.cyan("  node index.js movies   ") + chalk.gray("- List all Disney movies"));

console.log(chalk.green("\n🎭 Characters:"));
console.log(chalk.cyan("  node index.js characters   ") + chalk.gray("- List famous Disney characters"));

console.log(chalk.green("\n💫 Quotes:"));
console.log(chalk.cyan("  node index.js quote        ") + chalk.gray("- Get a magical Disney quote"));

console.log(chalk.green("\n💡 Fun Facts:"));
console.log(chalk.cyan("  node index.js funfact      ") + chalk.gray("- Learn an interesting Disney fact"));

console.log("\n" + chalk.magenta("Enjoy the Disney magic! 🏰✨"));
console.log("---------------------------------------------------------------\n");



const DISNEY_MOVIES = [
    { title: "Snow White and the Seven Dwarfs", year: 1937, type: "Animated" },
    { title: "The Lion King", year: 1994, type: "Animated" },
    { title: "Toy Story", year: 1995, type: "Pixar" },
    { title: "Finding Nemo", year: 2003, type: "Pixar" },
    { title: "Frozen", year: 2013, type: "Animated" },
    { title: "Moana", year: 2016, type: "Animated" },
    { title: "Black Panther", year: 2018, type: "Marvel" },
    { title: "Encanto", year: 2021, type: "Animated" }
];

const DISNEY_CHARACTERS = [
    { name: "Mickey Mouse", first_appearance: 1928, creator: "Walt Disney" },
    { name: "Simba", first_appearance: 1994, creator: "Roger Allers" },
    { name: "Buzz Lightyear", first_appearance: 1995, creator: "John Lasseter" },
    { name: "Elsa", first_appearance: 2013, creator: "Chris Buck" }
];

// Movies Command
program
    .command('movies')
    .description('🎬 List Disney movies or search for one!')
    .action(() => {
        console.log(chalk.magenta("\n🎥 Disney Movie Collection 🎥\n"));
        const table = new Table({
            head: [chalk.yellow('Title'), chalk.green('Year'), chalk.cyan('Type')],
            colWidths: [40, 10, 15]
        });
        DISNEY_MOVIES.forEach(movie => {
            table.push([chalk.white(movie.title), chalk.blue(movie.year.toString()), chalk.red(movie.type)]);
        });
        console.log(table.toString());


    });

    

program
    .command('characters')
    .description('🎭 List Disney characters!')
    .action(() => {
        console.log(chalk.magenta("\n🐭 Beloved Disney Characters 🐭\n"));
        const table = new Table({
            head: [chalk.yellow('Name'), chalk.green('First Appearance'), chalk.cyan('Creator')],
            colWidths: [20, 20, 25]
        });
        DISNEY_CHARACTERS.forEach(character => {
            table.push([chalk.white(character.name), chalk.blue(character.first_appearance.toString()), chalk.red(character.creator)]);
        });
        console.log(table.toString());
    });


program
    .command('quote')
    .description('✨ Get a magical Disney quote!')
    .action(() => {
        const quotes = [
            { text: "Ohana means family. Family means nobody gets left behind or forgotten.", movie: "Lilo & Stitch" },
            { text: "To infinity and beyond!", movie: "Toy Story" },
            { text: "Just keep swimming.", movie: "Finding Nemo" },
            { text: "Hakuna Matata!", movie: "The Lion King" }
        ];
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        console.log(chalk.bold.yellow(`\n💫 "${randomQuote.text}" 💫`));
        console.log(chalk.cyan(`— ${randomQuote.movie}\n`));
    });


program
    .command('funfact')
    .description('💡 Get a fun Disney fact!')
    .action(() => {
        const funFacts = [
            "Mickey Mouse's original name was Mortimer Mouse.",
            "Walt Disney has the most Academy Award nominations (59) and wins (22).",
            "Toy Story was the first fully computer-animated feature film.",
            "The Lion King was inspired by Shakespeare's Hamlet.",
            "Sleeping Beauty Castle was inspired by Neuschwanstein Castle in Germany."
        ];
        const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
        console.log(chalk.yellow(`\n📜 Did you know? ${randomFact}\n`));
    });





if (!process.argv.slice(2).length) {
    program.outputHelp();
}
program.parse(process.argv);

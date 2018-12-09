let program = require('commander')

program
    .version('0.1.0')
    .option('-q, --helper', 'add helper')
    .option('-d, --iAmConfused', 'add iAmConfused')
    .option('-n, --no-help', 'dont help him')
    .option('-o, --optional', 'add optional', 'lol im there anyways')
    .command('ls <dir>')
    .option('-r, --recursive', 'listing recurisvely')
    .action(function(dir,cmd) {
        console.log(`listing ${dir} ${cmd.recursive? 'recursively': ''}`)
    })
    .parse(process.argv);

if(program.helper) console.log(' -help meeeeee!!')
if(program.iAmConfused) {
    console.log(' -You are so dumb')
    console.log(' -really really dumb')
}
if(!program.help) {
    console.log('I am there for you')
} else {
    console.log('I am not helping you')
}
console.log( '-"%s" this is the working of optional', program.optional)

// program 
//     .command('ls <dir>')
//     .option('-r, --recursive', 'listing recurisvely')
//     .action(function(dir,cmd) {
//         console.log(`listing ${dir} ${cmd.recursive? 'recursively': ''}`)
//     })
//     .parse(process.argv)

let yourArg = process.argv.splice(2)

yourArg.forEach(function(arg) {
    console.log(`\nyour argument is ${arg}`)
})


// var program = require('commander');
// program
//   .version('0.1.0')
//   .option('-p, --peppers', 'Add peppers')
//   .option('-P, --pineapple', 'Add pineapple')
//   .option('-b, --bbq-sauce', 'Add bbq sauce')
//   .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
//   .parse(process.argv);
 
// console.log('you ordered a pizza with:');
// if (program.peppers) console.log('  - peppers');
// if (program.pineapple) console.log('  - pineapple');
// if (program.bbqSauce) console.log('  - bbq');
// console.log('  - %s cheese', program.cheese);

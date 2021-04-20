
// Without currying
let dragonWoCurry = (name, size, element) => 
	name + 'is a ' +
	size + 'dragon that breaths ' +
	element + '!'
console.log(dragonWoCurry('flup','tiny','light'));

// With currying
let dragonWCurry = 
	name => 
		size => 
			element =>
				name + 'is a ' +
				size + 'dragon that breaths ' +
				element + '!'
console.log(dragonWCurry('flup')('tiny')('light'))

const flupDragon = dragonWCurry('flup');
const tinyDragon = flupDragon('tiny');
console.log(tinyDragon('light'));

// Test own example
const car = 
	name => 
		model => 
			year =>
				'The car ' + 
				name + ' of model ' + 
				model + ' mfg in year ' + 
				year

const name = car('maruti');
const year = name('800');
console.log(year('2001'));

// Some Example

let showData_A = name => sname => 'My name is ' + name+' '+sname;
let showData_B = (name, sname) => (mobile) => 'My name is ' + name+' '+sname +' and mobile is '+mobile;
let showData_C = sname => (mobile,city) => 'I am '+sname +' , I am from '+city+' & my mobile is '+mobile;

console.log(showData_A('sahil')('majethia'));
console.log(showData_B('sahil','majethia')('88888 88888'));
console.log(showData_C('sahil')('88888 88888','Mumbai'));

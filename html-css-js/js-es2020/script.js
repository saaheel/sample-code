// Bigint

// nullish coalleing ??
// Optional chaining ?.



let user_details = {
    basic: {
        name: 'Rahul',
        email: 'rahul@gmail.com',
        number: '8080808080',
        fax:''
    }
}

// const number = user_details.basic.number
// const number = user_details && user_details.basic && user_details.basic.number
const number = user_details?.basic?.number;
const fax = user_details?.basic?.fax ?? 'NA';
console.log(number);
console.log('fax',fax);
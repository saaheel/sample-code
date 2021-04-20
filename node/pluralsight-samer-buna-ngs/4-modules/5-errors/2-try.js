const path = require('path');
const fs = require('fs');

// const files = ['.bash_profile', '.npmrc'];      // need to check
const files = ['test-data.txt', 'new-data.txt'];      

files.forEach(file => {
    try{
        // const filePath = path.resolve(process.env.HOME, file);   // need to check
        const filePath = path.resolve(file);
        const data = fs.readFileSync(filePath);
        console.log('File data is', data);
    } catch(err){
        console.log('File not found');
    }
})
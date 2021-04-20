const path = require('path');
const fs = require('fs');

// const files = ['.bash_profile', '.npmrc'];      // need to check
const files = ['test-data.txt', 'new-data.txt'];      

files.forEach(file => {
    try{
        // const filePath = path.resolve(process.env.HOME, file);   // need to check
        const filePath = path.resolve(file);
        // const data = fs.readFileSync(filePath);
        const data = fs.readFileSync(filePath, 'utf-8');     // To test throw - working code
        // const data = fs.readFileSync(filePath, 'utf-81');     // To test throw - not working code
        console.log('File data is', data);
    } catch(err){
        if(err.code === 'ENOENT'){
            console.log('File not found');
        }else{
            throw err;
        }        
    }
})
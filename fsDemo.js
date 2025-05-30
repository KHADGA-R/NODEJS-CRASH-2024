 import { readFile } from 'fs/promises';

//readFile() - callback
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });


// // readFileSync() - synchronous version

// const data = fs.readFileSync('./test.txt', 'utf8');
// console.log(data);

//readFile()  - promise version
// readFile('./test.txt', 'utf8')
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// readFile() - async/await version

const readFileContent = async () => {
    try{
    const data = await readFile('./test.txt', 'utf8');
    console.log(data);
    } catch (err) {
        console.log(err);
    }
};

readFileContent();
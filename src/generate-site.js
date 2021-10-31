const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            console.log(fileContent)
            if (err) {
                reject(err);

                return;
            }

            resolve({
                ok: true,
                message:'File created!'
            })
        })
    })
}

module.exports = writeFile
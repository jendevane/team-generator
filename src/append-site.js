const fs = require('fs');

const appendFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.appendFile('./dist/index.html', fileContent, err => {
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

module.exports = appendFile
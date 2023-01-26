/*
const callback = (resolve, reject) => {
    //...  código assíncrono

    const error = false;
    const result = "msg result";

    if (error) {
        reject(error);
    } else {
        resolve(result);
    }
};

const p = new Promise(callback);

p.then((result) => {
    console.log(result)
}).then(() => {
    console.log('segundo then.');
}).catch((error) => {
    console.error(error);
}).finally(() => {
    console.log('Done');
});
*/

// =================================================================

const bands = [
    {name: 'Iron Maiden'},
    {name: 'Megadeth'},
];

const bandList = document.getElementById('bandList');

const getBands = () => {

    setTimeout(() => { 
        let output = '';
        bands.forEach((item, idx) => {
            output += `<li>${item.name}</li>`;
        });

        bandList.innerHTML = output;

    }, 1000);

};

const addBand = (name) => {
    const callback = (resolve, rejects) => {
        setTimeout(() => {
            bands.push({name});
    
            resolve();
        }, 2000);   
    }

    return new Promise(callback);
}

getBands();

addBand('Queen')
    .then(() => {
        return addBand('AC/DC');
    })
    .then(getBands)
    .finally(console.log('All bands add!'));
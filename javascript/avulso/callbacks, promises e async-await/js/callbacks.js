// setTimeout(callback, delay, parametros pra callbacl)
// Uma função nativa do JavaScript

/*  setTimeout(() => {
        console.log('emerson');
        console.log('broga2');
    }, 2000); 
    console.log('Broga')
*/


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

const addBand = (name, callback) => {
    setTimeout(() => {
        bands.push({name});

        callback();
    }, 2000);
}

getBands();

addBand('Queen', getBands);
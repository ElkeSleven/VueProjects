const countries = [
    {name: 'Belgium', population: 11.46, km: 30689},
    {name: 'France', population: 67.06, km: 643801},
    {name: 'USA', population: 238.2, km: 9834000},
    {name: 'Russia', population: 144.4, km: 17130000},
    {name: 'China', population: 1398, km: 9597000},
];

let result = document.getElementById('result');
let combobox = document.getElementById('countries');
let showlargestBtn = document.getElementsByClassName('btn')[0];
showlargestBtn.addEventListener('click',showLargest)

window.loaded
{
    fillComboBox()
}

function fillComboBox()
{
    for (let i = 0; i < countries.length; i++)
    {
        let option = document.createElement('option')
        option.innerHTML = countries[i].name
        combobox.appendChild(option)
    }

    combobox.addEventListener('change',function(){showInfo()});
}

function showInfo()
{
    let selectedvalue = combobox.options[combobox.selectedIndex].text;

    let country = countries
        .find(country => {return country.name === selectedvalue})

    result.innerText = `${country.name} has a population of ${country.population} million people and is ${country.km} km large.`
}

function showLargest()
{
    let countriesSorted = countries.sort(function(klein,groot){return groot.km - klein.km});

    let result = document.getElementsByTagName('p')[1];
    result.innerHTML = `The largest country in this list is ${countriesSorted[0].name}`;


}


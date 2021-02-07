fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    // for (let i = 0; i < countries.length; i++) {
    //     const element = countries[i];
    countries.forEach(element => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';
        const countryInfo = `
        <h3>${element.name}</h3>
        <p>${element.capital}</p>
        <button onClick='displayCountryDetails("${element.name}")'>Details</button>
        `;
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });


    // const h3 = document.createElement('h3');
    // h3.innerText = element.name;
    // const p = document.createElement('p');
    // p.innerText = element.capital;
    // countryDiv.appendChild(h3);
    // countryDiv.appendChild(p);
    // countriesDiv.appendChild(countryDiv);



    // }
}

const displayCountryDetails = name => {
    const url = `
    https://restcountries.eu/rest/v2/name/{name}${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => CountryDetails(data[0]))

}
const CountryDetails = country => {
    console.log(country);
    const countDiv = document.getElementById('country-div');

    countryDiv.innerHTML = `
    
    `

}
const axios = require("axios");

const appid= "8bde201ac4fa026967e23929bcf21767"
const q="Sao Caetano do Sul";
const lang="pt_BR";
const units="metric";
const cnt="10";
const cord =`http://api.openweathermap.org/geo/1.0/direct?q=${q}&limit=5&appid=${appid}`
const url = `http://api.openweathermap.org/data/2.5/forecast?q=${q}&units=${units}&appid=${appid}&lang=${lang}&cnt=${cnt}`;

axios
    .get(url)
    .then(res => {
        
        return res.data
    })
    .then(a => {
        
        return a.list;
    })

    .then(res => {
        
        return res
    })

    .then(res => {
        for (let prev of res){
            console.log(`
            ${new Date (prev.dt * 1000).toLocaleString()},
            ${'sensação térmica: ' +prev.main.feels_like}\u00B0C,
            ${prev.weather[0].description}
        `)
        }
    });
    axios
    .get(cord)
    .then(res => {
        console.log(res)
        return res.data
    })
const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=4a832224cd2b2ef642cff24f6bd904f8`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}
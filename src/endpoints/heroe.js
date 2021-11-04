const axios = require('axios');
let token = '4547650331984729';

function endpoint (req, res) {
    let uri = 'https://www.superheroapi.com/api.php/' + token + '/' + req.params.id;
    
    const config = {
        method: 'get',
        url: uri
    }

    axios(config).then((axios_response) => {

        if (axios_response.data.response == 'error') {
            res
                .status(404)
                .send();
            return;
        }

        let data = {};

        data.nombre = axios_response.data.name;
        data.inteligencia = parseInt(axios_response.data.powerstats.intelligence | "0");
        data.fuerza = parseInt(axios_response.data.powerstats.strength | "0");
        data.velocidad = parseInt(axios_response.data.powerstats.speed | "0");
        data.durabilidad = parseInt(axios_response.data.powerstats.durability | "0");
        data.poder = parseInt(axios_response.data.powerstats.power | "0");
        data.combate = parseInt(axios_response.data.powerstats.combat | "0");
        
        data.peso = parseInt(axios_response.data.appearance.weight[1].split(' ')[0]);
        data.altura = parseInt(axios_response.data.appearance.height[1].split(' ')[0]);
        data.color_de_ojos = axios_response.data.appearance['eye-color'];
        data.color_de_pelo = axios_response.data.appearance['hair-color'];
        data.alias = axios_response.data.biography.aliases;
        data.lugar_de_trabajo = axios_response.data.work.base;
        data.imagen = axios_response.data.image.url;

        res
            .status(200)
            .json(data);
    }).catch((axios_response) => {
        res
            .status(500)
            .send();
    });
}

exports.endpoint = endpoint;

const axios = require('axios');
let token = '4547650331984729';

function endpoint (req, res) {
    let uri = 'https://www.superheroapi.com/api.php/' + token + '/' + req.params.id;
    
    const config = {
        method: 'get',
        url: uri
    }

    axios(config).then((resp) => {
        let data = {};
        data.nombre = resp.data.name;
        data.inteligencia = parseInt(resp.data.powerstats.intelligence | "0");
        data.fuerza = parseInt(resp.data.powerstats.strength | "0");
        data.velocidad = parseInt(resp.data.powerstats.speed | "0");
        data.durabilidad = parseInt(resp.data.powerstats.durability | "0");
        data.poder = parseInt(resp.data.powerstats.power | "0");
        data.combate = parseInt(resp.data.powerstats.combat | "0");
        
        data.peso = parseInt(resp.data.appearance.weight[1].split(' ')[0]);
        data.altura = parseInt(resp.data.appearance.height[1].split(' ')[0]);
        data.color_de_ojos = resp.data.appearance['eye-color'];
        data.color_de_pelo = resp.data.appearance['hair-color'];
        data.alias = resp.data.biography.aliases;
        data.lugar_de_trabajo = resp.data.work.base;
        data.imagen = resp.data.image.url;

        res.send(data);
    });
}

exports.endpoint = endpoint;

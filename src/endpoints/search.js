const axios = require('axios');
let token = '4547650331984729';

function endpoint (req, res) {
    let uri = 'https://www.superheroapi.com/api.php/' + token + '/search/' + req.params.search_term;
    
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

        let matches = [];

        axios_response.data.results.forEach((match) => {
            let heroe = {};
            heroe.nombre = match.name;
            heroe.inteligencia = parseInt(match.powerstats.intelligence | "0");
            heroe.fuerza = parseInt(match.powerstats.strength | "0");
            heroe.velocidad = parseInt(match.powerstats.speed | "0");
            heroe.durabilidad = parseInt(match.powerstats.durability | "0");
            heroe.poder = parseInt(match.powerstats.power | "0");
            heroe.combate = parseInt(match.powerstats.combat | "0");
            heroe.peso = parseInt(match.appearance.weight[1].split(' ')[0]);
            heroe.altura = parseInt(match.appearance.height[1].split(' ')[0]);
            heroe.color_de_ojos = match.appearance['eye-color'];
            heroe.color_de_pelo = match.appearance['hair-color'];
            heroe.alias = match.biography.aliases;
            heroe.lugar_de_trabajo = match.work.base;
            heroe.imagen = match.image.url;
            
            matches.push(heroe);
        });

        res
            .status(200)
            .json(matches);
    }).catch((axios_response) => {
        res
            .status(500)
            .send();
    });
}

exports.endpoint = endpoint;

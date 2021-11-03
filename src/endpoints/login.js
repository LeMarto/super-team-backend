const axios = require('axios');

function endpoint (req, res) {
    let uri = 'http://challenge-react.alkemy.org/';
    let email = req.body.email;
    let password = req.body.password;

    const config = {
        method: 'post',
        url: uri,
        data: { 'email': '',  'password': ''},
        headers: {
            'Content-Type': 'application/json'
        }
    }

    axios(config)
        .then((resp) => {
            res.send({'token': resp.token});
        })
        .catch((error)=> { console.log(Error)});
}

exports.endpoint = endpoint;

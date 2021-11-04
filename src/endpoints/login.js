const axios = require('axios');

function endpoint (req, res) {
    let uri = 'http://challenge-react.alkemy.org/';
    let email = req.body.email;
    let password = req.body.password;

    const config = {
        method: 'post',
        url: uri,
        data: { 'email': email,  'password': password},
        headers: {
            'Content-Type': 'application/json'
        }
    }

    axios(config)
        .then((axios_response) => {
            let token = axios_response.data.token;
            res
                .status(202)
                .json({'token': token});
        })
        .catch((axios_response) => {
            if (axios_response.response.status == 401 ) {
                res
                    .status(401)
                    .send();
            }
            else {
                res
                    .status(500)
                    .send();
            }
        });
}

exports.endpoint = endpoint;

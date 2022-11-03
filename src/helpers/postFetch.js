const { dataFormater } = require("./dataFormater");


const postFetch = async (url, data) => {

    const body = dataFormater(data);

    var content = JSON.stringify(body);

    const resp = await fetch(url, { method: 'POST', headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: content,
    });
    const { response } = await resp.json();
    
    return response;

}

module.exports = { postFetch };
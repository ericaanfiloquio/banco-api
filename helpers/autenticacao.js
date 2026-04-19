const request = require('supertest');
const postLogin = require('../fixtures/postLogin.json')

const obterToken = async (usuario, senha) => {
    const bodyLogin = {...postLogin}
    
    const respostaLogin = await request(process.env.BASE_URL)
        .post('/login')
        .set('Content-Type', 'application/json') //set é para colocar o header
        .send(bodyLogin)

    return respostaLogin.body.token
}

module.exports = {
    obterToken // essa funcao vai poder ser utilizada por outros arquivos
}

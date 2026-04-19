const request = require('supertest');

const obterToken = async (usuario, senha) => {
    const respostaLogin = await request(process.env.BASE_URL)
        .post('/login')
        .set('Content-Type', 'application/json') //set é para colocar o header
        .send({
            'username': usuario,
            'senha': senha
            })

    return respostaLogin.body.token
}

module.exports = {
    obterToken // essa funcao vai poder ser utilizada por outros arquivos
}

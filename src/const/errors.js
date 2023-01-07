const setError = (code, message) => ({code, message});

const errors = {
    401: setError(401, "Usuário não autorizado a publicar!"),
    404: setError(404, "Rota não encontrada na API do servidor!"),
    405: setError(405, "Método não permitido!"),
    415: setError(415, "Content-type inválido!"),
    422: setError(422, "Todos os campos na requisição são obrigatórios"),
};

export default errors;
const setError = (code, message) => ({code, message});

const errors = {
    404: setError(404, "Rota não encontrada na API do servidor!"),
    405: setError(405, "Método não permitido!"),
    415: setError(415, "Content-Type Inválido!"),
    422: setError(422, "Todos os campos são obrigatórios"),
};

export default errors;
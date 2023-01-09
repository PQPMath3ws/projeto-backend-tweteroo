/*
const setError = (code, message) => ({code, message});

const errors = {
    400: setError(400, "Usuário ja cadastrado!"),
    400.1: setError(400, "Somente imagens JPG/JPEG, PNG e GIF são aceitas."),
    400.2: setError(400, "Informe uma página válida!"),
    400.3: setError(400, "Formato do tweet inválido!"),
    401: setError(401, "Usuário não autorizado a publicar!"),
    404: setError(404, "Rota não encontrada na API do servidor!"),
    405: setError(405, "Método não permitido!"),
    415: setError(415, "Content-type inválido!"),
    422: setError(422, "Todos os campos na requisição são obrigatórios!"),
};
*/

const errors = {
    400: "Usuário já cadastrado!",
    400.1: "Somente imagens JPG/JPEG, PNG e GIF são aceitas.",
    400.2: "Informe uma página válida!",
    400.3: "Todos os campos na requisição são obrigatórios!",
    400.4: "Formato do tweet inválido!",
    401: "Usuário não autorizado a publicar!",
    404: "Rota não encontrada na API do servidor!",
    405: "Método não permitido!",
    415: "Content-type inválido!",
};

export default errors;
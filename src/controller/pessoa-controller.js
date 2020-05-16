const repository = require('../data/pessoa-repository');

exports.get = async (req, res, next) => {
    try {
        var data = await repository.getPesorns();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}
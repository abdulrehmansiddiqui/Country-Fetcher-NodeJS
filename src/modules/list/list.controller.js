const ListService = require('../../modules/list/list.service')

module.exports = {
    get(req, res, next) {
        ListService
            .get(req.query)
            .then(data => res.json(data))
            .catch(next)
    },
    // add(req, res, next) {
    //     ListService
    //         .add(
    //             req.payload.user,
    //             req.body.message,
    //         )
    //         .then(data => res.json(data))
    //         .catch(next)
    // },s
}
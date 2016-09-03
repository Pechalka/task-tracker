var Waterline = require('waterline');

module.exports = Waterline.Collection.extend({
    identity: 'version',
    tableName : 'version',
    connection: 'mysql',

    attributes: {
        id: {
            type: 'integer',
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: 'string',
            required: true
        }
    }
});
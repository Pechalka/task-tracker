var Waterline = require('waterline');

module.exports = Waterline.Collection.extend({
    identity: 'comments',
    tableName : 'comments',
    connection: 'mysql',

    attributes: {
        id: {
            type: 'integer',
            primaryKey: true,
            autoIncrement: true
        },
        text: {
            type: 'text',
            required: true
        },
        taskId: {
            model: 'tasks',
            required: true
        },
    }
});
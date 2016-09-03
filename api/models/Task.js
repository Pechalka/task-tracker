var Waterline = require('waterline');

module.exports = Waterline.Collection.extend({
    identity: 'tasks',
    tableName : 'tasks',
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
        },
        status: {
            type: 'string',
            required: true
        },

        description: {
            type: 'string',
            required: true            
        },

        comments: {
          collection: 'comments',
          via: 'task'
        },


        assignee: {
          model: 'users'
        },

        assigneeName: {
            type: 'string',            
        },

        version: {
            type: 'string',            
        }
    }
});
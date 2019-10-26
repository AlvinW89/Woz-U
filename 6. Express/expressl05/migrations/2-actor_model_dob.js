'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "dob" to table "actor"
 *
 **/

var info = {
    "revision": 2,
    "name": "actor_model_dob",
    "created": "2019-09-05T02:02:26.916Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "addColumn",
    params: [
        "actor",
        "dob",
        {
            "type": Sequelize.DATEONLY,
            "field": "dob",
            "allowNull": true
        }
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};

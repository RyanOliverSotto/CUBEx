var path = require("path");

module.exports = function(app) {

    app.get("/addbook", function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/addabook.html'));
    });

};
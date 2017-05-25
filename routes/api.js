const router = require('express').Router();
const struct = require('./struct');
const o2x = require('object-to-xml');
const helper = require('./helper');

router.post('/', (req, res) => {
    res.format({
        xml: function(){
            const xmlData = o2x(struct(req.body.results));
            res.send(xmlData);
        },

        json: function(){
            const jsonData = struct(req.body.results).responseData;
            res.json(jsonData);
        },

        text: function(){
            const jsonArray = struct(req.body.results).responseData.results;
            res.send(helper.toPlainText(jsonArray));
        }
    });
});

module.exports = router;
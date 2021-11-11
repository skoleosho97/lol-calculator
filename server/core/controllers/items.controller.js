let Items = require('../models/items.model');

exports.create = (req, res, next) => {
    const url = `${req.protocol}://${req.get('host')}`;
    const item = new Items({
        name: req.body.name,
        icon: `${url}/public/items/${req.file.filename}`,
        type: req.body.type,
        stat: req.body.stat,
        passive: req.body.passive ? req.body.passive : null,
    });

    item.save().then(result => {
        res.status(201).json({
            message: 'Item added successfully.',
            itemCreated: {
                id: result.id,
                name: result.name,
                icon: result.icon,
            }
        })
    }).catch(err => {
        console.log(err),
        res.status(500).json({
            err: err,
        });
    });
};

exports.retrieve = (req, res, next) => {
    Items.find().then(data => {
        res.status(200).json({
            message: "Item list retrieved successfully!",
            items: data
        });
    });
};

exports.delete = (req, res, next) => {
    const id = req.params.id;

    Items.findByIdAndRemove(id).then(data => {
        if (!data) {
            res.status(404).json({
                message: 'Requested id does not exists.'
            });
        } else {
            res.json({
                message: 'Successfully deleted.'
            });
        }
    }).catch(err => {
        console.log(err),
        res.status(500).json({
            err: err,
        });        
    });
};
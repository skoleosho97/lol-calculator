const multer = require('multer');
const path = require('path');
const dir = '../public/items/';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, dir));
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, `${Date.now()}-${fileName}`);
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Invalid file type.'));
        }
    }
});

module.exports = app => {
    const items = require('../controllers/items.controller');

    let router = require('express').Router();

    router.get('/', items.retrieve);
    router.post('/', upload.single('icon'), items.create);
    router.delete('/:id', items.delete);

    app.use('/api/items', router);
};
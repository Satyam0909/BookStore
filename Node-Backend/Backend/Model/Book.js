const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Book = new Schema(
    {
        name: {
            type: string
        },
        price: {
            type: string
        },
        description: {
            type: string
        }

    },
    {
        collection: 'books'
    }
)
module.exports = mongoose.model('Book', Book)
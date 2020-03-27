const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const DevSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    tech: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});

DevSchema.pre('save', async function(next){
    const hash = await bcryptjs.hash(this.password, 10);
    this.password = hash;

    next();
});

module.exports = mongoose.model('dev', DevSchema);
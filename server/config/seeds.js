const db = require('./connection');
const {Badge, Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Farm'},
        { name: 'Medical'},
        { name: 'Defense'},
        { name: 'Home'},
        { name: 'Explosives'}
    ]);

    console.log('categories seeded!');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            
        }
    ]);

    console.log('Products seeded!');

    await Badge.deleteMany();

    const badge = await Badge.insertMany([
        {
            name: 'No one out',
            description: 'You have purchased the tent!',
            image: 'camp.png'
        },
        {
            name: 'Timber!!',
            description: 'You are ready to cut down trees! Or zombies...',
            image: 'axe.png'
        },
        {
            name: 'Extrovert',
            description: 'You have joined the Co-op',
            image: 'chat.png'
        },
        {
            name: 'FIRE!!!',
            description: 'Purchased fire starter',
            image: 'fire.png'
        },
        {
            name: 'Like a rock',
            description: 'You can now protect yourself',
            image: 'shield.png'
        },
        {
            name: 'There might be hope...?',
            description: 'Purchased seeds',
            image: 'sprout.png'
        },
        {
            name: 'Bomber!!!',
            description: 'You purchased explosive, go blow stuff!',
            image: 'bomb.png'
        },
        {
            name: 'Medic!',
            description: 'You purchased medicines.',
            image: 'redcross.png'
        },
    ])
})
const db = require('./connection');
const {Badge, Product, Category, User, CoOp } = require('../models');

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
            name: 'Folding Shovel',
            description: 'Foldable shovel with pouch to carry around without hassle.',
            stock: 40,
            price: 18.99,
            image: 'folding-shovel.jpg',
            category: categories[0]._id
        },
        {
            name: 'Watering Can',
            description: 'You can water you plants.',
            stock: 30,
            price: 11.99,
            image: 'watering-can.jpg',
            category: categories[0]._id
        },
        {
            name: 'Axe',
            description: 'Durable axe that you can cut trees or maybe some zombies?',
            stock: 35,
            price: 29.99,
            image: 'axe.jpg',
            category: categories[0]._id
        },
        {
            name: 'Bandage',
            description: 'Did you get hurt or maybe bitten by zombies? Get this!',
            stock: 60,
            price: 9.99,
            image: 'bandage.jpg',
            category: categories[1]._id
        },
        {
            name: '298 Piece First Aid Kit',
            description: 'Essential first aid supplies for common cuts, aches, and pain. Also, it\' lightweight and easy to carry',
            stock: 50,
            price: 20.99,
            image: 'small-first-aid.jpg',
            category: categories[1]._id
        },
        {
            name: '326 Piece First Aid Kit',
            description: 'First Aid kit that can be stored at home with essential first aid supplies.',
            stock: 30,
            price: 38.99,
            image: 'big-first-aid.jpg',
            category: categories[1]._id
        },
        {
            name: 'Crossbow',
            description: 'Defend yourself against zombie without loud noise like guns.',
            stock: 25,
            price: 299.99,
            image: 'crossbow.jpg',
            category: categories[2]._id
        },
        {
            name: 'Machete',
            description: 'Need a durable and sharp knife against zombies? This machete is for you!',
            stock: 20,
            price: 29.99,
            image: 'machete.jpg',
            category: categories[2]._id
        },
        {
            name: 'Pocket Knife',
            description: 'Small portable pocket knife that you can carry anywhere.',
            stock: 45,
            price: 13.99,
            image: 'pocket-knife.jpg',
            category: categories[2]._id
        },
        {
            name: 'Survival Set',
            description: 'Everything you might need to go against zombies!',
            stock: 35,
            price: 99.99,
            image: 'survival-set.jpg',
            category: categories[2]._id
        },
        {
            name: 'Tent',
            description: 'Going outdoor? Grab this tent and you can stay cozy.',
            stock: 25,
            price: 159.99,
            image: 'tent.jpg',
            category: categories[3]._id
        },
        {
            name: 'Toilet Paper',
            description: 'Stay clean with this toilet paper.',
            stock: 50,
            price: 1.99,
            image: 'toilet-paper.jpg',
            category: categories[3]._id
        },
        {
            name: 'Grenade',
            description: 'Too many zombies around you? This might help.',
            stock: 20,
            price: 39.99,
            image: 'grenade.jpg',
            category: categories[4]._id
        },
        {
            name: 'Land Mine',
            description: 'Protect your home with land mine.',
            stock: 15,
            price: 79.99,
            image: 'land-mine.jpg',
            category: categories[4]._id
        },
    ]);

    console.log('Products seeded!');

    await Badge.deleteMany();

    const badge = await Badge.insertMany([
        {
            name: 'Stay cozy',
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
    ]);

    console.log('Badge seeded');

    process.exit();

});

db.once('open', async () => {

    await User.deleteMany();

    await User.create({
        username: 'admin',
        email: 'admin@email.com',
        password: 'adminpassword',
        Badges: [{ name: 'Stay cozy' }, { name: 'Medic!' }],
    });

    await User.create({
        username: 'user1',
        email: 'user1@email.com',
        password: 'user1password'
    });

    await User.create({
        username: 'user2',
        email: 'user2@email.com',
        password: 'user2password'
    });

    console.log('User seeded');

    process.exit();

})
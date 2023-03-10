const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomReaction } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  const users = [];
  
  for (let i = 0; i < 10; i++) {
    const fullName = getRandomName();
    const possibleReaction = getRandomReaction(10);
    const first = fullName.split(' ')[0];
    const last = fullName.split(' ')[1];

    users.push({
      first,
      last,
      possibleReaction,
    });
  }



  // loop through the saved videos, for each video we need to generate a video response and insert the video responses
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});

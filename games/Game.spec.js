const mongoose = require('mongoose');

const Game = require('./Game');

describe('The Game Model', () => {
  beforeAll(() => {
    return mongoose
      .connect('mongodb://localhost/test')
      .then(() => console.log('\n=== connected to TEST DB ==='))
      .catch(err => {
        console.log('error connecting to TEST database, is MongoDB running?');
      });
  });

  afterAll(() => {
    return mongoose
      .disconnect()
      .then(() => console.log('\n=== disconnected from TEST DB ==='));
  });

  it('runs the tests', () => {});
  it('Error: requires genre field', async () => {
    const game = Game({
      title: 'God of War'
    });

    const response = await Game
      .create(game)
      .then(game => {
        expect(response).toEqual(200)
      })
      .catch(err => {
        expect(err.errors.genre.message).toEqual('Path `genre` is required.')
      })

  });
  // test away!
});
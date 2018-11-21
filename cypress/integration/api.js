// @ts-check
/* eslint-env mocha */
describe('API', () => {

  describe('/website', () => {
    // healthcheck
    describe('/website/healthcheck', () => {

      it('should be 200 the healthcheck HTTP status code', async() => {
        const res = await cy.request('/api/healthcheck');
        expect(res.status).to.equal(200);
      });
    });
  });

  describe('/api', () => {
    // healthcheck
    describe('/api/healthcheck', () => {

      it('should be 200 the healthcheck HTTP status code', async() => {
        const res = await cy.request('/api/healthcheck');
        expect(res.status).to.equal(200);
      });
    });

    // game
    describe('/api/game', () => {

      it('get all games', async () => {
        const res = await cy.request('/api/game')
        expect(res.body.length > 0).to.be.true;
      });

      it('get by name', async () => {
        const name = 'Dota 2';
        const res = await cy.request(`/api/game/searchBy?name=${name}`);
        expect(res.body.length > 0).to.be.true;
      });

    });

    // stream
    describe('/api/stream', () => {
      it('get streams by game', async () => {
        const game = 'Battlefield';
        const res = await cy.request(`/api/stream/game/${game}`);
        expect(res.body.data.length > 0).to.be.true;
      });

      it('get streams by game with limit 50', async () => {
        const game = 'Battlefield';
        const res = await cy.request(`/api/stream/game/${game}?limit=50`);
        expect(res.body.data.length > 0).to.be.true;
      });

      it('get streams by channel', async () => {
        const channel = 'rifftrax';
        const res = await cy.request(`/api/stream/channel/${channel}`);
        expect(res.body.channel).to.have.property('name', channel) // true
      });

    });

  });

});

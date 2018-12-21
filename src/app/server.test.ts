import { ApolloServer } from 'apollo-server';

import { Server } from './server';

describe('Server', () => {
  describe('#get mocks', () => {
    test('contains mock values', () => {
      expect(JSON.stringify(Server.mocks)).toEqual(JSON.stringify({
        String: () => 'Test message. '
      }));
    });
  });

  describe('#createApolloServer', () => {
    test('creates ApolloServer instance', () => {
      expect(Server.createApolloServer()).toBeInstanceOf(ApolloServer);
    });
  });
});

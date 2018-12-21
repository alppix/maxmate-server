import { ApolloServer, gql } from 'apollo-server';
import { createTestClient } from 'apollo-server-testing';

import typeDefs from './schemas';
import { Server } from './server';

describe('Schemas', () => {
  const mocks = Server.mocks;
  const server = new ApolloServer({ mocks, typeDefs });
  const { query } = createTestClient(server);

  describe('query', () => {
    describe('testMessage', () => {
      test('returns `Test message. `', async () => {
        const queryTestMessage = gql`
          query TestMessage {
            testMessage
          }
        `;
        const res = await query({ query: queryTestMessage });

        expect(res.data).toEqual({ testMessage: 'Test message. ' });
      });
    });
  });
});

import { ApolloServer } from 'apollo-server';

import typeDefs from './schemas';

export class Server {
  static get mocks(): object {
    return {
      String: () => 'Test message. '
    };
  }

  /**
   * Create Apollo server.
   * @returns {ApolloServer} - Apollo server instance.
   */
  static createApolloServer(): ApolloServer {
    return new ApolloServer({
      typeDefs,
      mocks: true,  // TODO: Remove mocks.
    });
  }
}

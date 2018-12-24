import { ApolloServer } from 'apollo-server';

import typeDefs from './schemas';
import { environment } from '../environment';

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
      engine: {
        apiKey: environment.apollo.engine.apiKey
      },
      introspection: environment.apollo.introspection,
      mocks: true,  // TODO: Remove mocks.
      playground: environment.apollo.playground,
    });
  }
}

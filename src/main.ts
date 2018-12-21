import { ServerInfo } from 'apollo-server';

import { environment } from './environment';
import { Server } from './app/server';

/**
 * Bootstrap application server.
 */
async function bootstrapAsync() {
  const apolloServer = Server.createApolloServer();

  try {
    const serverInfo: ServerInfo = await apolloServer.listen(environment.port);

    console.log(`GraphQL server listening on port ${serverInfo.port}. `);

    // Hot module replacement.
    if (module.hot) {
      module.hot.accept();
      module.hot.dispose(async () => {
        await apolloServer.stop();
      });
    }
  } catch (error) {
    console.error(error);
  }
}

bootstrapAsync();

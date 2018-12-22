const defaultPort = 4000;

export class Environment {
  port: number|string;
}

export const environment: Environment = {
  port: process.env.PORT || defaultPort
};

import * as express from 'express';
import * as cors from 'cors';
import routes from './routes';

const corsOptions = {
  origin: "*"
};

class App {
  public server;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors(corsOptions));
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
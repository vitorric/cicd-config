import { server } from './app';

server.listen(process.env.PORT, () => {
  console.log(`\x1b[33mServer listening on port ${process.env.PORT}\x1b[0m`);
});

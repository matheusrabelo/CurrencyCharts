import application from './application';
import { APPLICATION_PORT } from './configuration';

application.listen(APPLICATION_PORT, () =>
    console.log(`Listening on ${APPLICATION_PORT}`));

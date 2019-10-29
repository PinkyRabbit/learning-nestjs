import { resolve } from "path";

const SOURCE_PATH = resolve(__dirname, '..', 'src');

export default {
    database: {
        // url: 'postgres://pgapp:asdqwe@localhost/locationapp',
        user: 'pgapp',
        password: 'asdqwe',
        host: 'localhost',
        port: '5432',
        database: 'locationapp',
    },
    orm: {
        entities: [`${SOURCE_PATH}/**/*.entity.ts`],
        synchronize: false,
    },
    templates: {
        path: resolve(__dirname, '..', 'views'),
    },
    public: {
        path: resolve(__dirname, '..', 'public'),
    },
}
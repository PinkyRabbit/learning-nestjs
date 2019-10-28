import { resolve } from "path";

const SOURCE_PATH = resolve(__dirname, '..', 'src');

export default {
    database: {
        url: 'postgres://pgapp:asdqwe@localhost/locationapp',
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
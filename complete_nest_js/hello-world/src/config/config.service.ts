import { Injectable } from '@nestjs/common';

import * as config from 'config';


@Injectable()
export class ConfigService {
    public get<T>(key: string) {
        return config.get<T>(key);
    }
}

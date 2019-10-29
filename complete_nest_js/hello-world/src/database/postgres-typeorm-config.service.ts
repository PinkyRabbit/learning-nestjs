import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Location } from '../location/location.entity';
import { ConfigService } from '../config/config.service';

@Injectable()
export class PostgresTypeOrmConfigService implements TypeOrmOptionsFactory {
    constructor(private readonly configService: ConfigService) {}

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'postgres',

            host: this.configService.get<string>('database.host'),
            port: parseInt(this.configService.get<string>('database.port'), 10),
            username: this.configService.get<string>('database.user'),
            password: this.configService.get<string>('database.password'),
            database: this.configService.get<string>('database.database'),
            // url: this.configService.get<string>('database.url'),

            // entities: this.configService.get<string[]>('orm.entities'),
            entities: [Location],
            synchronize: this.configService.get<boolean>('orm.synchronize'),
        };
    }

}
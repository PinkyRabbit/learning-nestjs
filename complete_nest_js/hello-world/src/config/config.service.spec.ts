import { Test, TestingModule } from '@nestjs/testing';
import { resolve } from 'path';

import { ConfigService } from './config.service';

describe('ConfigService', () => {
  let service: ConfigService;

  beforeEach(async () => {
    // const module: TestingModule = await Test.createTestingModule({
    //   providers: [ConfigService],
    // }).compile();

    // service = module.get<ConfigService>(ConfigService);
    service = new ConfigService();
  });

  it('should indicate views location', () => {
    const templatePath = resolve(__dirname, '../..', 'views');
    expect(service.get<string>('templates.path')).toEqual(templatePath);
  });
});

import addJestHbsExtension from 'jest-hbs-extension';

import { ConfigService } from '../src/config/config.service';

const configServise = new ConfigService();
const viewsPath = configServise.get<string>('templates.path');

addJestHbsExtension(viewsPath);

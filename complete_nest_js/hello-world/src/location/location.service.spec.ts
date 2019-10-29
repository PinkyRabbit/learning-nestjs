import { Test, TestingModule } from '@nestjs/testing';
import { LocationService } from './location.service';
import { Repository } from 'typeorm';
import { Location } from './location.entity';
// import * as sinon from 'sinon';
import { GenericFactory } from '../common/generic.factory';
import { MockHelper } from '../common/mock.helper';

describe('LocationService', () => {
  let service: LocationService;
  let mockRepository: Repository<Location>;
  // let mock: sinon.SinonMock;

  const locations = [{
    id: 'c59fba56-dc25-4614-b23b-c4adb1387de0',
    name: 'Location 1',
  },
  {
    id: '73ea492b-c825-4173-97da-dee4d3e8f09c',
    name: 'Location 2',
  }];

  beforeEach(async () => {
    mockRepository = MockHelper.mock<Repository<Location>>({
      find: {
        resolves: [
          GenericFactory.create<Location>(Location, locations[0]),
          GenericFactory.create<Location>(Location, locations[1]),
        ],
      },
    });

    // mockRepository = {} as Repository<Location>;
    // mockRepository = Object.assign(mockRepository, {
    //   find: new Function(),
    // });
    // mock = sinon.mock(mockRepository);
    // mock.expects('find').resolves([
    //   GenericFactory.create<Location>(Location, locations[0]),
    //   GenericFactory.create<Location>(Location, locations[1]),
    // ]);

    service = new LocationService(mockRepository);
    // const module: TestingModule = await Test.createTestingModule({
      // providers: [LocationService],
    // }).compile();

    // service = module.get<LocationService>(LocationService);
  });

  it('should return locations', () => {
    expect(service.list()).resolves.toMatchObject(locations);
  });
});

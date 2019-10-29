import { Test, TestingModule } from '@nestjs/testing';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';
import { MappingRegistryService } from '../common/mapping-registry.service';
import { MockHelper } from '../common/mock.helper';
import { LocationMappingService } from './location-mapping.service';

describe('LocationController', () => {
  let locationController: LocationController;
  let mockLocationService: LocationService;
  let mappingRegistryService: MappingRegistryService;

  const locations = [{
    id: 'c59fba56-dc25-4614-b23b-c4adb1387de0',
    name: 'Location 1',
  },
  {
    id: '73ea492b-c825-4173-97da-dee4d3e8f09c',
    name: 'Location 2',
  }];

  beforeEach(async () => {
    mockLocationService = MockHelper.mock<LocationService>({
      list: {
        resolves: locations,
      },
    });

    mappingRegistryService = new MappingRegistryService();
    const locationMappingService = new LocationMappingService(mappingRegistryService);
    locationController = new LocationController(mockLocationService, mappingRegistryService);
  });

  describe('root', () => {
    it('should return an array with two locations', () => {
      expect(locationController.listLocations()).resolves.toMatchObject({
        locations,
      });
    });
  });
});


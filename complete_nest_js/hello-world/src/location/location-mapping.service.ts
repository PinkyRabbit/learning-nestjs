import { Injectable } from "@nestjs/common";
import { Location } from "./location.entity";
import { LocationDto } from "./location.dto";
import { MappingService } from "../common/mapping.service";

@Injectable()
export class LocationMappingService extends MappingService {
    public addMapping(): void {
        automapper.createMap(Location.name, LocationDto.name);
    }
}
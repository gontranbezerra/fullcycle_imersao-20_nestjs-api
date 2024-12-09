import {
  Client as GoogleMapsClient,
  PlaceInputType,
} from '@googlemaps/google-maps-services-js';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PlacesService {
  constructor(
    private readonly googleMapsClient: GoogleMapsClient,
    private readonly configService: ConfigService,
  ) {}
  async findPlaces(text: string): Promise<any> {
    const response = await this.googleMapsClient.findPlaceFromText({
      params: {
        input: text,
        inputtype: PlaceInputType.textQuery,
        fields: ['place_id', 'name', 'formatted_address', 'geometry'],
        // key: process.env.GOOGLE_MAPS_API_KEY,
        key: this.configService.get('GOOGLE_MAPS_API_KEY'),
      },
    });
    return response.data;
  }
}

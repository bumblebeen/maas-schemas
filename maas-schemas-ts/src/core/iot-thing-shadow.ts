/*

undefined
Schema for MaaS thing shadow

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as UnitsGeo_ from './components/units-geo';
import * as Units_ from './components/units';
import * as State_ from './components/state';

export const schemaId = 'http://maasglobal.com/core/iot-thing-shadow.json';

// IotThingShadow
// The default export. More information at the top.
export type IotThingShadow = t.Branded<
  {
    desired?: {};
    reported?: {
      location?: {
        lat?: UnitsGeo_.Latitude;
        lon?: UnitsGeo_.Longitude;
        timestamp?: Units_.Time;
        legId?: Units_.Uuid;
      };
      leg?: {
        id?: Units_.Uuid;
        timestamp?: Units_.Time;
        state?: State_.LegState;
      };
    };
  },
  IotThingShadowBrand
>;
export type IotThingShadowC = t.BrandC<
  t.PartialC<{
    desired: t.PartialC<{}>;
    reported: t.PartialC<{
      location: t.PartialC<{
        lat: typeof UnitsGeo_.Latitude;
        lon: typeof UnitsGeo_.Longitude;
        timestamp: typeof Units_.Time;
        legId: typeof Units_.Uuid;
      }>;
      leg: t.PartialC<{
        id: typeof Units_.Uuid;
        timestamp: typeof Units_.Time;
        state: typeof State_.LegState;
      }>;
    }>;
  }>,
  IotThingShadowBrand
>;
export const IotThingShadow: IotThingShadowC = t.brand(
  t.partial({
    desired: t.partial({}),
    reported: t.partial({
      location: t.partial({
        lat: UnitsGeo_.Latitude,
        lon: UnitsGeo_.Longitude,
        timestamp: Units_.Time,
        legId: Units_.Uuid,
      }),
      leg: t.partial({
        id: Units_.Uuid,
        timestamp: Units_.Time,
        state: State_.LegState,
      }),
    }),
  }),
  (
    x,
  ): x is t.Branded<
    {
      desired?: {};
      reported?: {
        location?: {
          lat?: UnitsGeo_.Latitude;
          lon?: UnitsGeo_.Longitude;
          timestamp?: Units_.Time;
          legId?: Units_.Uuid;
        };
        leg?: {
          id?: Units_.Uuid;
          timestamp?: Units_.Time;
          state?: State_.LegState;
        };
      };
    },
    IotThingShadowBrand
  > => true,
  'IotThingShadow',
);
export interface IotThingShadowBrand {
  readonly IotThingShadow: unique symbol;
}

export default IotThingShadow;

// Success

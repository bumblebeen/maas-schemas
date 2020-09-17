/*

undefined
Response schema for bookings-agency-options

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Booking_ from '../../../core/booking';
import * as BookingMeta_ from '../../../core/booking-meta';
import * as BikeStation_ from '../../../core/components/bike-station';

export type Defined = {} | null;
export class DefinedType extends t.Type<Defined> {
  readonly _tag: 'DefinedType' = 'DefinedType';
  constructor() {
    super(
      'defined',
      (u): u is Defined => typeof u !== 'undefined',
      (u, c) => (this.is(u) ? t.success(u) : t.failure(u, c)),
      t.identity,
    );
  }
}
export interface DefinedC extends DefinedType {}
export const Defined: DefinedC = new DefinedType();

export const schemaId =
  'http://maasglobal.com/maas-backend/bookings/bookings-agency-options/response.json';

// Option
// The purpose of this remains a mystery
export type Option = t.Branded<
  {
    fares?: Booking_.Fares;
    cost?: Booking_.Cost;
    leg?: Booking_.Leg;
    meta?: BookingMeta_.BookingMeta;
    terms?: Booking_.Terms;
    tspProduct?: {
      id?: string;
    };
    configurator?: Booking_.Configurator;
  } & (
    | {
        leg: Defined;
        terms: Defined;
        product: Defined;
        fares: Defined;
      }
    | {
        leg: Defined;
        terms: Defined;
        product: Defined;
        configurator: Defined;
      }
  ),
  OptionBrand
>;
export type OptionC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        fares: typeof Booking_.Fares;
        cost: typeof Booking_.Cost;
        leg: typeof Booking_.Leg;
        meta: typeof BookingMeta_.BookingMeta;
        terms: typeof Booking_.Terms;
        tspProduct: t.PartialC<{
          id: t.StringC;
        }>;
        configurator: typeof Booking_.Configurator;
      }>,
      t.UnionC<
        [
          t.TypeC<{
            leg: typeof Defined;
            terms: typeof Defined;
            product: typeof Defined;
            fares: typeof Defined;
          }>,
          t.TypeC<{
            leg: typeof Defined;
            terms: typeof Defined;
            product: typeof Defined;
            configurator: typeof Defined;
          }>,
        ]
      >,
    ]
  >,
  OptionBrand
>;
export const Option: OptionC = t.brand(
  t.intersection([
    t.partial({
      fares: Booking_.Fares,
      cost: Booking_.Cost,
      leg: Booking_.Leg,
      meta: BookingMeta_.BookingMeta,
      terms: Booking_.Terms,
      tspProduct: t.partial({
        id: t.string,
      }),
      configurator: Booking_.Configurator,
    }),
    t.union([
      t.type({
        leg: Defined,
        terms: Defined,
        product: Defined,
        fares: Defined,
      }),
      t.type({
        leg: Defined,
        terms: Defined,
        product: Defined,
        configurator: Defined,
      }),
    ]),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      fares?: Booking_.Fares;
      cost?: Booking_.Cost;
      leg?: Booking_.Leg;
      meta?: BookingMeta_.BookingMeta;
      terms?: Booking_.Terms;
      tspProduct?: {
        id?: string;
      };
      configurator?: Booking_.Configurator;
    } & (
      | {
          leg: Defined;
          terms: Defined;
          product: Defined;
          fares: Defined;
        }
      | {
          leg: Defined;
          terms: Defined;
          product: Defined;
          configurator: Defined;
        }
    ),
    OptionBrand
  > => true,
  'Option',
);
export interface OptionBrand {
  readonly Option: unique symbol;
}

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    options?: Array<Option>;
    additional?: {
      bikeStations?: Array<BikeStation_.BikeStation>;
    };
    debug?: {};
  } & {
    options: Defined;
  },
  ResponseBrand
>;
export type ResponseC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        options: t.ArrayC<typeof Option>;
        additional: t.PartialC<{
          bikeStations: t.ArrayC<typeof BikeStation_.BikeStation>;
        }>;
        debug: t.TypeC<{}>;
      }>,
      t.TypeC<{
        options: typeof Defined;
      }>,
    ]
  >,
  ResponseBrand
>;
export const Response: ResponseC = t.brand(
  t.intersection([
    t.partial({
      options: t.array(Option),
      additional: t.partial({
        bikeStations: t.array(BikeStation_.BikeStation),
      }),
      debug: t.type({}),
    }),
    t.type({
      options: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      options?: Array<Option>;
      additional?: {
        bikeStations?: Array<BikeStation_.BikeStation>;
      };
      debug?: {};
    } & {
      options: Defined;
    },
    ResponseBrand
  > => true,
  'Response',
);
export interface ResponseBrand {
  readonly Response: unique symbol;
}

export default Response;

// Success

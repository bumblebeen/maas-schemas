/*

undefined
OpenTripPlanner compatible format for plans, extended with id for legs and itineraries

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Place_ from './components/place';
import * as Units_ from './components/units';
import * as Itinerary_ from './itinerary';

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

export const schemaId = 'http://maasglobal.com/core/plan.json';

// Itineraries
// The purpose of this remains a mystery
export type Itineraries = t.Branded<Array<Itinerary_.Itinerary>, ItinerariesBrand>;
export type ItinerariesC = t.BrandC<
  t.ArrayC<typeof Itinerary_.Itinerary>,
  ItinerariesBrand
>;
export const Itineraries: ItinerariesC = t.brand(
  t.array(Itinerary_.Itinerary),
  (x): x is t.Branded<Array<Itinerary_.Itinerary>, ItinerariesBrand> => true,
  'Itineraries',
);
export interface ItinerariesBrand {
  readonly Itineraries: unique symbol;
}

// Plan1
// The purpose of this remains a mystery
export type Plan1 = t.Branded<
  {
    from?: Place_.Place;
    planId?: Units_.Uuid;
    outwards?: Itineraries;
    returns?: Itineraries;
  } & {
    from: Defined;
    planId: Defined;
    outwards: Defined;
    returns: Defined;
  },
  Plan1Brand
>;
export type Plan1C = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        from: typeof Place_.Place;
        planId: typeof Units_.Uuid;
        outwards: typeof Itineraries;
        returns: typeof Itineraries;
      }>,
      t.TypeC<{
        from: typeof Defined;
        planId: typeof Defined;
        outwards: typeof Defined;
        returns: typeof Defined;
      }>,
    ]
  >,
  Plan1Brand
>;
export const Plan1: Plan1C = t.brand(
  t.intersection([
    t.partial({
      from: Place_.Place,
      planId: Units_.Uuid,
      outwards: Itineraries,
      returns: Itineraries,
    }),
    t.type({
      from: Defined,
      planId: Defined,
      outwards: Defined,
      returns: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      from?: Place_.Place;
      planId?: Units_.Uuid;
      outwards?: Itineraries;
      returns?: Itineraries;
    } & {
      from: Defined;
      planId: Defined;
      outwards: Defined;
      returns: Defined;
    },
    Plan1Brand
  > => true,
  'Plan1',
);
export interface Plan1Brand {
  readonly Plan1: unique symbol;
}

// Plan2
// The purpose of this remains a mystery
export type Plan2 = t.Branded<
  {
    from?: Place_.Place;
    planId?: Units_.Uuid;
    itineraries?: Itineraries;
  } & {
    from: Defined;
    planId: Defined;
    itineraries: Defined;
  },
  Plan2Brand
>;
export type Plan2C = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        from: typeof Place_.Place;
        planId: typeof Units_.Uuid;
        itineraries: typeof Itineraries;
      }>,
      t.TypeC<{
        from: typeof Defined;
        planId: typeof Defined;
        itineraries: typeof Defined;
      }>,
    ]
  >,
  Plan2Brand
>;
export const Plan2: Plan2C = t.brand(
  t.intersection([
    t.partial({
      from: Place_.Place,
      planId: Units_.Uuid,
      itineraries: Itineraries,
    }),
    t.type({
      from: Defined,
      planId: Defined,
      itineraries: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      from?: Place_.Place;
      planId?: Units_.Uuid;
      itineraries?: Itineraries;
    } & {
      from: Defined;
      planId: Defined;
      itineraries: Defined;
    },
    Plan2Brand
  > => true,
  'Plan2',
);
export interface Plan2Brand {
  readonly Plan2: unique symbol;
}

// Plan
// The default export. More information at the top.
export type Plan = t.Branded<Plan1 | Plan2, PlanBrand>;
export type PlanC = t.BrandC<t.UnionC<[typeof Plan1, typeof Plan2]>, PlanBrand>;
export const Plan: PlanC = t.brand(
  t.union([Plan1, Plan2]),
  (x): x is t.Branded<Plan1 | Plan2, PlanBrand> => true,
  'Plan',
);
export interface PlanBrand {
  readonly Plan: unique symbol;
}

export default Plan;

// Success

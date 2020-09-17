/*

undefined
MaaS common units that are used consistently within our own objects

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Units_ from './units';

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

export const schemaId = 'http://maasglobal.com/core/components/cost.json';

// Cost
// The default export. More information at the top.
export type Cost = t.Branded<
  {
    amount?: number | null;
    originalAmount?: number | null;
    discount?: number;
    taxes?: number;
    isFixedPrice?: boolean;
    currency?: Units_.Currency | null;
  } & {
    amount: Defined;
    currency: Defined;
  },
  CostBrand
>;
export type CostC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        amount: t.UnionC<[t.NumberC, t.NullC]>;
        originalAmount: t.UnionC<[t.NumberC, t.NullC]>;
        discount: t.NumberC;
        taxes: t.NumberC;
        isFixedPrice: t.BooleanC;
        currency: t.UnionC<[typeof Units_.Currency, t.NullC]>;
      }>,
      t.TypeC<{
        amount: typeof Defined;
        currency: typeof Defined;
      }>,
    ]
  >,
  CostBrand
>;
export const Cost: CostC = t.brand(
  t.intersection([
    t.partial({
      amount: t.union([t.number, t.null]),
      originalAmount: t.union([t.number, t.null]),
      discount: t.number,
      taxes: t.number,
      isFixedPrice: t.boolean,
      currency: t.union([Units_.Currency, t.null]),
    }),
    t.type({
      amount: Defined,
      currency: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      amount?: number | null;
      originalAmount?: number | null;
      discount?: number;
      taxes?: number;
      isFixedPrice?: boolean;
      currency?: Units_.Currency | null;
    } & {
      amount: Defined;
      currency: Defined;
    },
    CostBrand
  > => true,
  'Cost',
);
export interface CostBrand {
  readonly Cost: unique symbol;
}

export default Cost;

// Success

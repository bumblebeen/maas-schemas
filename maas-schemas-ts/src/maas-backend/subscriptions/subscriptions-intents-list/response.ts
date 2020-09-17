/*

undefined
Response schema for subscriptions-intents-list

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as SubscriptionIntent_ from '../subscription-intent';

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
  'http://maasglobal.com/maas-backend/subscriptions/subscriptions-intents-list/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    subscriptionIntents?: Array<SubscriptionIntent_.SubscriptionIntentBase>;
  } & {
    subscriptionIntents: Defined;
  },
  ResponseBrand
>;
export type ResponseC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        subscriptionIntents: t.ArrayC<typeof SubscriptionIntent_.SubscriptionIntentBase>;
      }>,
      t.TypeC<{
        subscriptionIntents: typeof Defined;
      }>,
    ]
  >,
  ResponseBrand
>;
export const Response: ResponseC = t.brand(
  t.intersection([
    t.partial({
      subscriptionIntents: t.array(SubscriptionIntent_.SubscriptionIntentBase),
    }),
    t.type({
      subscriptionIntents: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      subscriptionIntents?: Array<SubscriptionIntent_.SubscriptionIntentBase>;
    } & {
      subscriptionIntents: Defined;
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

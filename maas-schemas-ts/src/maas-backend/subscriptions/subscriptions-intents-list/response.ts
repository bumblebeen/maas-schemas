/*

undefined
Response schema for subscriptions-intents-list

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as SubscriptionIntent_ from '../subscription-intent';

type Defined =
  | Record<string, unknown>
  | Array<unknown>
  | string
  | boolean
  | number
  | null;
const Defined = t.union([
  t.UnknownRecord,
  t.UnknownArray,
  t.string,
  t.boolean,
  t.number,
  t.null,
]);

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
export const Response = t.brand(
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

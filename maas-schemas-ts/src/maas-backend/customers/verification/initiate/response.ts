/*

undefined
MaaS customer verification initiate

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as VerificationObject_ from 'maas-schemas-ts/maas-backend/customers/verification/verification-object';

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
  'http://maasglobal.com/maas-backend/customers/verification/initiate/response.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    customer?: {
      verification?: Array<VerificationObject_.Verification>;
    } & {
      verification: Defined;
    };
  } & {
    customer: Defined;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      customer: t.intersection([
        t.partial({
          verification: t.array(VerificationObject_.Verification),
        }),
        t.type({
          verification: Defined,
        }),
      ]),
    }),
    t.type({
      customer: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      customer?: {
        verification?: Array<VerificationObject_.Verification>;
      } & {
        verification: Defined;
      };
    } & {
      customer: Defined;
    },
    DefaultBrand
  > => true,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}

export default Default;

// Success

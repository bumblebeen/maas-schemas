/*

undefined
Remove customer personal document by id

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Units_ from '../../../../core/components/units';
import * as PersonalDocument_ from '../../../../core/personal-document';
import * as ApiCommon_ from '../../../../core/components/api-common';

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
  'http://maasglobal.com/maas-backend/customers/personal-documents/remove/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    identityId?: Units_.IdentityId;
    customerId?: Units_.IdentityId;
    payload?: {
      id?: Units_.Uuid | PersonalDocument_.DocumentType;
    } & {
      id: Defined;
    };
    headers?: ApiCommon_.Headers;
  } & {
    identityId: Defined;
    payload: Defined;
    headers: Defined;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        identityId: typeof Units_.IdentityId;
        customerId: typeof Units_.IdentityId;
        payload: t.IntersectionC<
          [
            t.PartialC<{
              id: t.UnionC<[typeof Units_.Uuid, typeof PersonalDocument_.DocumentType]>;
            }>,
            t.TypeC<{
              id: typeof Defined;
            }>,
          ]
        >;
        headers: typeof ApiCommon_.Headers;
      }>,
      t.TypeC<{
        identityId: typeof Defined;
        payload: typeof Defined;
        headers: typeof Defined;
      }>,
    ]
  >,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_.IdentityId,
      customerId: Units_.IdentityId,
      payload: t.intersection([
        t.partial({
          id: t.union([Units_.Uuid, PersonalDocument_.DocumentType]),
        }),
        t.type({
          id: Defined,
        }),
      ]),
      headers: ApiCommon_.Headers,
    }),
    t.type({
      identityId: Defined,
      payload: Defined,
      headers: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      customerId?: Units_.IdentityId;
      payload?: {
        id?: Units_.Uuid | PersonalDocument_.DocumentType;
      } & {
        id: Defined;
      };
      headers?: ApiCommon_.Headers;
    } & {
      identityId: Defined;
      payload: Defined;
      headers: Defined;
    },
    RequestBrand
  > => true,
  'Request',
);
export interface RequestBrand {
  readonly Request: unique symbol;
}

export default Request;

// Success

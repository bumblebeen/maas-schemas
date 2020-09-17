/*

undefined
MaaS virtual card schema

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Common_ from '../../../core/components/common';
import * as Units_ from '../../../core/components/units';

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
  'http://maasglobal.com/maas-backend/customers/virtual-cards/virtualCardTokenReference.json';

// VirtualCardTokenReference
// The default export. More information at the top.
export type VirtualCardTokenReference = t.Branded<
  {
    id?: number;
    tokenReferenceId?: string;
    userDevicesId?: number;
    appInstanceId?: Common_.AppInstanceId;
    walletPlatform?: string & ('APPLE' | 'GOOGLE');
    added?: Units_.Time;
    deviceType?: string & ('SMARTPHONE' | 'WEARABLE');
    hasExtendedData?: boolean;
    extendedData?: string;
  } & (
    | {
        id: Defined;
        userDevicesId: Defined;
        appInstanceId: Defined;
        walletPlatform: Defined;
        added: Defined;
        deviceType: Defined;
        hasExtendedData: Defined;
        tokenReferenceId: Defined;
      }
    | {
        id: Defined;
        userDevicesId: Defined;
        appInstanceId: Defined;
        walletPlatform: Defined;
        added: Defined;
        deviceType: Defined;
        hasExtendedData: Defined;
        extendedData: Defined;
      }
  ),
  VirtualCardTokenReferenceBrand
>;
export type VirtualCardTokenReferenceC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        id: t.NumberC;
        tokenReferenceId: t.StringC;
        userDevicesId: t.NumberC;
        appInstanceId: typeof Common_.AppInstanceId;
        walletPlatform: t.IntersectionC<
          [t.StringC, t.UnionC<[t.LiteralC<'APPLE'>, t.LiteralC<'GOOGLE'>]>]
        >;
        added: typeof Units_.Time;
        deviceType: t.IntersectionC<
          [t.StringC, t.UnionC<[t.LiteralC<'SMARTPHONE'>, t.LiteralC<'WEARABLE'>]>]
        >;
        hasExtendedData: t.BooleanC;
        extendedData: t.StringC;
      }>,
      t.UnionC<
        [
          t.TypeC<{
            id: typeof Defined;
            userDevicesId: typeof Defined;
            appInstanceId: typeof Defined;
            walletPlatform: typeof Defined;
            added: typeof Defined;
            deviceType: typeof Defined;
            hasExtendedData: typeof Defined;
            tokenReferenceId: typeof Defined;
          }>,
          t.TypeC<{
            id: typeof Defined;
            userDevicesId: typeof Defined;
            appInstanceId: typeof Defined;
            walletPlatform: typeof Defined;
            added: typeof Defined;
            deviceType: typeof Defined;
            hasExtendedData: typeof Defined;
            extendedData: typeof Defined;
          }>,
        ]
      >,
    ]
  >,
  VirtualCardTokenReferenceBrand
>;
export const VirtualCardTokenReference: VirtualCardTokenReferenceC = t.brand(
  t.intersection([
    t.partial({
      id: t.number,
      tokenReferenceId: t.string,
      userDevicesId: t.number,
      appInstanceId: Common_.AppInstanceId,
      walletPlatform: t.intersection([
        t.string,
        t.union([t.literal('APPLE'), t.literal('GOOGLE')]),
      ]),
      added: Units_.Time,
      deviceType: t.intersection([
        t.string,
        t.union([t.literal('SMARTPHONE'), t.literal('WEARABLE')]),
      ]),
      hasExtendedData: t.boolean,
      extendedData: t.string,
    }),
    t.union([
      t.type({
        id: Defined,
        userDevicesId: Defined,
        appInstanceId: Defined,
        walletPlatform: Defined,
        added: Defined,
        deviceType: Defined,
        hasExtendedData: Defined,
        tokenReferenceId: Defined,
      }),
      t.type({
        id: Defined,
        userDevicesId: Defined,
        appInstanceId: Defined,
        walletPlatform: Defined,
        added: Defined,
        deviceType: Defined,
        hasExtendedData: Defined,
        extendedData: Defined,
      }),
    ]),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: number;
      tokenReferenceId?: string;
      userDevicesId?: number;
      appInstanceId?: Common_.AppInstanceId;
      walletPlatform?: string & ('APPLE' | 'GOOGLE');
      added?: Units_.Time;
      deviceType?: string & ('SMARTPHONE' | 'WEARABLE');
      hasExtendedData?: boolean;
      extendedData?: string;
    } & (
      | {
          id: Defined;
          userDevicesId: Defined;
          appInstanceId: Defined;
          walletPlatform: Defined;
          added: Defined;
          deviceType: Defined;
          hasExtendedData: Defined;
          tokenReferenceId: Defined;
        }
      | {
          id: Defined;
          userDevicesId: Defined;
          appInstanceId: Defined;
          walletPlatform: Defined;
          added: Defined;
          deviceType: Defined;
          hasExtendedData: Defined;
          extendedData: Defined;
        }
    ),
    VirtualCardTokenReferenceBrand
  > => true,
  'VirtualCardTokenReference',
);
export interface VirtualCardTokenReferenceBrand {
  readonly VirtualCardTokenReference: unique symbol;
}

export default VirtualCardTokenReference;

// Success

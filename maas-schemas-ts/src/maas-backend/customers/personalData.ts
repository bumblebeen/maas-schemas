/*

undefined
MaaS customer personal data schema

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Common_ from '../../core/components/common';
import * as Address_ from '../../core/components/address';
import * as Units_ from '../../core/components/units';

export const schemaId = 'http://maasglobal.com/maas-backend/customers/personalData.json';

// PersonalData
// The default export. More information at the top.
export type PersonalData = t.Branded<
  {
    honorifics?: string;
    firstName?: Common_.PersonalName;
    lastName?: Common_.PersonalName;
    firstNameLocalized?: Common_.PersonalName;
    lastNameLocalized?: Common_.PersonalName;
    sex?: string;
    phone?: Common_.Phone;
    email?: Common_.Email;
    address?: Address_.Address;
    cugHome?: string;
    city?: Address_.City;
    state?: Address_.State;
    country?: Address_.Country;
    zipCode?: Address_.ZipCode;
    dob?: boolean | Units_.IsoDate;
    ssid?: boolean | Common_.Ssid;
    subscriberType?: string;
    profileImageUrl?: string;
    nationality?: string;
  } & {},
  PersonalDataBrand
>;
export type PersonalDataC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        honorifics: t.StringC;
        firstName: typeof Common_.PersonalName;
        lastName: typeof Common_.PersonalName;
        firstNameLocalized: typeof Common_.PersonalName;
        lastNameLocalized: typeof Common_.PersonalName;
        sex: t.StringC;
        phone: typeof Common_.Phone;
        email: typeof Common_.Email;
        address: typeof Address_.Address;
        cugHome: t.StringC;
        city: typeof Address_.City;
        state: typeof Address_.State;
        country: typeof Address_.Country;
        zipCode: typeof Address_.ZipCode;
        dob: t.UnionC<[t.BooleanC, typeof Units_.IsoDate]>;
        ssid: t.UnionC<[t.BooleanC, typeof Common_.Ssid]>;
        subscriberType: t.StringC;
        profileImageUrl: t.StringC;
        nationality: t.StringC;
      }>,
      t.TypeC<{}>,
    ]
  >,
  PersonalDataBrand
>;
export const PersonalData: PersonalDataC = t.brand(
  t.intersection([
    t.partial({
      honorifics: t.string,
      firstName: Common_.PersonalName,
      lastName: Common_.PersonalName,
      firstNameLocalized: Common_.PersonalName,
      lastNameLocalized: Common_.PersonalName,
      sex: t.string,
      phone: Common_.Phone,
      email: Common_.Email,
      address: Address_.Address,
      cugHome: t.string,
      city: Address_.City,
      state: Address_.State,
      country: Address_.Country,
      zipCode: Address_.ZipCode,
      dob: t.union([t.boolean, Units_.IsoDate]),
      ssid: t.union([t.boolean, Common_.Ssid]),
      subscriberType: t.string,
      profileImageUrl: t.string,
      nationality: t.string,
    }),
    t.type({}),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      honorifics?: string;
      firstName?: Common_.PersonalName;
      lastName?: Common_.PersonalName;
      firstNameLocalized?: Common_.PersonalName;
      lastNameLocalized?: Common_.PersonalName;
      sex?: string;
      phone?: Common_.Phone;
      email?: Common_.Email;
      address?: Address_.Address;
      cugHome?: string;
      city?: Address_.City;
      state?: Address_.State;
      country?: Address_.Country;
      zipCode?: Address_.ZipCode;
      dob?: boolean | Units_.IsoDate;
      ssid?: boolean | Common_.Ssid;
      subscriberType?: string;
      profileImageUrl?: string;
      nationality?: string;
    } & {},
    PersonalDataBrand
  > => true,
  'PersonalData',
);
export interface PersonalDataBrand {
  readonly PersonalData: unique symbol;
}

export default PersonalData;

// Success

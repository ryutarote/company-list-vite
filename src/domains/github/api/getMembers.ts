import ky, { Options as KyOptions } from 'ky';
import { DEFAULT_KY_OPTIONS } from '../constants';
import { isMembers, Member } from '../types/member';

export const getMembers = async (
  companyCode: string,
  options?: KyOptions
): Promise<Member[]> => {
  const mergedOptions = {
    ...DEFAULT_KY_OPTIONS,
    ...options,
  };
  const response = await ky.get(`orgs/${companyCode}/members`, mergedOptions);
  const members: unknown[] = await response.json();

  if (!isMembers(members)) {
    throw Error('API type error');
  }

  return members;
};

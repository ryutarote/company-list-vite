import ky, { Options as KyOptions } from 'ky';
import { DEFAULT_KY_OPTIONS } from '../constants';
import { isCompany, Company } from '../types/company';

export const getCompany = async (
  companyCode: string,
  options?: KyOptions
): Promise<Company> => {
  const mergedOptions = {
    ...DEFAULT_KY_OPTIONS,
    ...options,
  };
  const response = await ky.get(`orgs/${companyCode}`, mergedOptions);
  const company = await response.json();
  console.log('*** request GitHub organization API:', companyCode);

  if (!isCompany(company)) {
    throw Error('API type error');
  }

  return company;
};

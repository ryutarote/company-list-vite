import type { FC } from 'react';
import useSWR from 'swr';
import { getCompany } from 'domains/github';
import { skimArgs } from 'utils/fn';
import CompanyInfoBox from 'components/organisms/CompanyInfoBox';

type Props = { companyCode: string };

const CompanyInfo: FC<Props> = ({ companyCode }) => {
  const { data: company = null } = useSWR([companyCode, 'company'], skimArgs(getCompany));

  return <CompanyInfoBox company={company} />;
};

export default CompanyInfo;

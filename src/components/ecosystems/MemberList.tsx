import type { FC } from 'react';
import useSWR from 'swr';
import { getMembers } from 'domains/github';
import { skimArgs } from 'utils/fn';
import DeveloperList from 'components/organisms/DeveloperList';

type Props = { companyCode: string };

const MemberList: FC<Props> = ({ companyCode }) => {
  const { data: developers = [] } = useSWR(
    [companyCode, 'members'],
    skimArgs(getMembers)
  );

  return <DeveloperList developers={developers} />;
};

export default MemberList;

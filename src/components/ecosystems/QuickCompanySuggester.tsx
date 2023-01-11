import type { FC } from 'react';
import { preload } from 'swr';
import { getMembers, getCompany } from 'domains/github';
import { skimArgs } from 'utils/fn';
import CompanySuggester from 'components/organisms/CompanySuggester';
import type { CompanySuggesterProps } from 'components/organisms/CompanySuggester';

type Props = { enablePrefetch?: boolean } & Omit<
  CompanySuggesterProps,
  'prefetch'
>;

const QuickCompanySuggester: FC<Props> = ({
  suggestList = [],
  currentCode = '',
  onSelect = () => undefined,
  enablePrefetch = false,
}) => {
  const prefetch = async (code: string) => {
    await Promise.all([
      preload([code, 'company'], skimArgs(getCompany)),
      preload([code, 'member'], skimArgs(getMembers)),
    ]);
  };

  return (
    <CompanySuggester
      prefetch={enablePrefetch ? prefetch : undefined}
      {...{ suggestList, currentCode, onSelect }}
    />
  );
};

export default QuickCompanySuggester;

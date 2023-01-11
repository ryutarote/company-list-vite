import { useMemo, useState, useTransition, Suspense } from 'react';
import type { FC } from 'react';
import { Box, Center, Divider, Heading, VStack } from '@chakra-ui/react';
import companyCodes from 'data/companyCodes';
import { randomPick } from 'utils/array';
import Loading from 'components/atoms/Loading';
import DeveloperList from 'components/ecosystems/MemberList';
import CompanyInfo from 'components/ecosystems/CompanyInfo';
import ErrorRecovery from 'components/organisms/ErrorRecovery';
import CompanySearchForm from 'components/organisms/CompanySearchForm';
import styles from './Home.module.css';

type Props = { pageTitle: string };

const Home: FC<Props> = ({ pageTitle }) => {
  const [companyCode, setCompanyCode] = useState('');
  const [isPending, startTransition] = useTransition();
  const suggestList = useMemo(() => randomPick(companyCodes, 8), []);

  return (
    <>
      <Box as="header" my="1rem">
        <Heading as="h1">{pageTitle}</Heading>
      </Box>
      <Center m="4rem 0 1rem">
        <CompanySearchForm
          {...{
            suggestList,
            setCompanyCode: setCompanyCode,
            startTransition,
            isPending,
          }}
        />
      </Center>
      <Divider />
      <Center>
        <VStack
          mt="2rem"
          w="2xl"
          spacing="1rem"
          className={isPending ? styles.loading : ''}
        >
          {companyCode && (
            <ErrorRecovery onReset={() => setCompanyCode('')}>
              <Suspense fallback={<Loading />}>
                <CompanyInfo companyCode={companyCode} />
                <DeveloperList companyCode={companyCode} />
              </Suspense>
            </ErrorRecovery>
          )}
        </VStack>
      </Center>
    </>
  );
};

export default Home;

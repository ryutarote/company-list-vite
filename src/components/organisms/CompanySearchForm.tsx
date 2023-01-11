import { useState } from 'react';
import type {
  FC,
  ChangeEvent,
  SyntheticEvent,
  TransitionStartFunction,
} from 'react';
import { Button, Input, Stack } from '@chakra-ui/react';
// import OrgSuggester from 'components/organisms/OrgSuggester';
import CompanySuggester from 'components/ecosystems/QuickCompanySuggester';

type Props = {
  suggestList?: string[];
  setCompanyCode?: (companyCode: string) => void;
  startTransition?: TransitionStartFunction;
  isPending?: boolean;
};

const CompanySearchForm: FC<Props> = ({
  setCompanyCode = () => undefined,
  startTransition = () => undefined,
  suggestList = [],
  isPending = false,
}) => {
  const [input, setInput] = useState('');
  const onSelect = (code: string) => {
    setInput(code);
    startTransition(() => setCompanyCode(code));
  };
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    startTransition(() => setCompanyCode(input.toLowerCase().trim()));
  };

  return (
    <Stack direction="column" spacing="1rem" mb="0.5rem">
      <Stack direction="row" as="form" spacing="0.5rem" onSubmit={handleSubmit}>
        <Input
          value={input}
          placeholder="Type company's name..."
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
        />
        <Button
          w="5rem"
          colorScheme="blue"
          variant="solid"
          type="submit"
          isLoading={isPending}
        >
          Search
        </Button>
      </Stack>
      <CompanySuggester
        suggestList={suggestList}
        currentCode={input}
        onSelect={onSelect}
        // enablePrefetch={true}
      />
    </Stack>
  );
};

export default CompanySearchForm;

import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { Box, Divider, List, ListItem, ListIcon, Text } from '@chakra-ui/react';
import { VscOrganization } from 'react-icons/vsc';
import { capitalize } from 'utils/string';

type Props = { companyCodes: string[] };

const Home: FC<Props> = ({ companyCodes = [] }) => (
  <Box>
    <List mt={14} spacing={3}>
      {companyCodes.map((companyCode) => (
        <ListItem key={companyCode}>
          <Link to={`/${companyCode}/members`}>
            <ListIcon as={VscOrganization} color="teal" fontSize="1.75rem" />
            <Text as="span" fontSize="1.25rem" ml={1}>
              Member of {capitalize(companyCode)}
            </Text>
          </Link>
          <Divider mt={2} />
        </ListItem>
      ))}
    </List>
  </Box>
);

export default Home;

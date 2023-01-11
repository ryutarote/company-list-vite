import type { FC } from 'react';
import { Avatar, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react';
import { Member } from 'domains/github';
import styles from './MemberList.module.css';

type Props = { developers: Member[] };

const DeveloperList: FC<Props> = ({ developers = [] }) => (
  <Wrap mt={10} w="5xl" className={styles.link}>
    {developers.map((developer) => (
      <WrapItem key={developer.id}>
        <a
          href={`https://github.com/${developer.login}`}
          target="_blank"
          rel="noreferrer"
        >
          <Stack
            p={4}
            w="15rem"
            borderWidth={1}
            margin={1}
            direction="row"
            rounded="md"
            boxShadow="sm"
            className={styles.card}
          >
            <Avatar size="md" src={developer.avatarUrl} />
            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
              <Text fontWeight={600}>{developer.login}</Text>
              <Text color={'gray.500'}>GitHub ID: {developer.id}</Text>
            </Stack>
          </Stack>
        </a>
      </WrapItem>
    ))}
  </Wrap>
);

export default DeveloperList;

/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import type { FC } from 'react';
import {
  Badge,
  Flex,
  Icon,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';
import type { Company } from 'domains/github';

type Props = { company?: Company | null };

const CompanyInfoBox: FC<Props> = ({ company = null }) => (
  <Stack w="xl" height="12rem" direction="row" p={4} spacing="1rem">
    <Image
      boxSize="140px"
      objectFit="cover"
      src={company?.avatarUrl}
      alt={`${String(company?.name)}'s logo`}
    />
    <Stack direction="column">
      <Flex>
        <Heading as="h3" textAlign="left" size="lg">
          {company?.name}
        </Heading>
        {company?.isVerified && (
          <div>
            <Badge colorScheme="green" size="sm" ml="0.8rem">
              verified
            </Badge>
          </div>
        )}
      </Flex>
      <Text color="gray.500">{company?.description}</Text>
      <div>
        {company?.location && (
          <Text fontSize="0.9rem">
            <Icon as={FaMapMarkerAlt} mb="-0.1rem" mr="0.4rem" />
            {company.location}
          </Text>
        )}
        {company?.blog && (
          <Text fontSize="0.9rem">
            <Icon as={FaGlobe} mb="-0.1rem" mr="0.4rem" />
            <a href={company.blog} target="_blank" rel="noreferrer">
              {company.blog}
            </a>
          </Text>
        )}
      </div>
    </Stack>
  </Stack>
);

export default CompanyInfoBox;

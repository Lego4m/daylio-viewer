import { useMemo } from 'react';
import {
  Grid,
  GridItem,
  Heading,
  Text,
  Flex,
  Box,
  Image,
} from '@chakra-ui/react';

import { format } from 'date-fns';

import { dayEntriesBySections } from '../utils/dayEntriesBySections';

import { isLastItemOfArray } from '../utils/isLastItemOfArray';
import { isArrayEmpty } from '../utils/isArrayEmpty';

import { getMoodInformations } from '../utils/dayEntrieInterpreters';

import { DaylioDB } from '../types/daylio';

interface DayEntriesListProps {
  database: DaylioDB;
}

export function DayEntriesList({ database }: DayEntriesListProps) {
  const dayEntriesSections = useMemo(
    () => dayEntriesBySections(database.dayEntries),
    [database]
  );

  const moods = useMemo(
    () => getMoodInformations(database.customMoods),
    [database]
  );

  return (
    <Grid
      mt={4}
      gap={4}
      templateColumns={[
        'repeat(1, 1fr)',
        'repeat(1, 1fr)',
        'repeat(2, 1fr)',
        'repeat(3, 1fr)',
      ]}
    >
      {dayEntriesSections.map((section) => (
        <GridItem rounded="md" bgColor="white" shadow="base" key={section.date}>
          <Flex
            roundedTopLeft="md"
            roundedTopRight="md"
            backgroundColor="purple.600"
            py={2}
            px={4}
          >
            <Heading color="white" fontSize="md">
              {format(new Date(section.date), 'EEEE, dd MMMM yyyy')}
            </Heading>
          </Flex>

          <Flex as="ul" direction="column" gap={2} p={4}>
            {section.data.map((entrie, entrieIndex) => (
              <Flex as="li" key={entrie.id}>
                <Flex mr={4} direction="column" alignItems="center">
                  <Text
                    w={5}
                    whiteSpace="nowrap"
                    textAlign="center"
                    fontSize="xl"
                    fontWeight="bold"
                  >
                    {moods.find((mood) => mood.id === entrie.mood)?.icon}
                  </Text>

                  {!isLastItemOfArray(entrieIndex, section.data) && (
                    <Flex
                      mt={2}
                      w="1px"
                      flex={1}
                      rounded="md"
                      border="1px"
                      borderColor="gray.300"
                    />
                  )}
                </Flex>

                <Flex direction="column" gap={1}>
                  <Flex as="header" alignItems="center" gap={2}>
                    <Heading
                      as="h3"
                      fontSize="xl"
                      textTransform="capitalize"
                      color="purple.500"
                    >
                      {moods.find((mood) => mood.id === entrie.mood)?.name}
                    </Heading>

                    <Text as="span" fontSize="sm" color="gray.500">
                      {format(new Date(entrie.datetime), 'HH:mm')}
                    </Text>
                  </Flex>

                  {!isArrayEmpty(entrie.tags) && (
                    <Flex as="ul" flexWrap="wrap" gap={1.5}>
                      {entrie.tags.map((tagId, tagIndex) => (
                        <Flex as="li" alignItems="center" gap={1.5} key={tagId}>
                          <Text as="span" color="gray.500">
                            {
                              database.tags.find((tag) => tag.id === tagId)
                                ?.name
                            }
                          </Text>

                          {!isLastItemOfArray(tagIndex, entrie.tags) && (
                            <Box
                              h={1.5}
                              w={1.5}
                              rounded="full"
                              bgColor="gray.500"
                            />
                          )}
                        </Flex>
                      ))}
                    </Flex>
                  )}

                  {entrie.note_title && (
                    <Heading as="h4" fontSize="xl" fontWeight="normal">
                      {entrie.note_title}
                    </Heading>
                  )}

                  {entrie.note && (
                    <Text whiteSpace="pre-line">
                      {entrie.note.replace(/<br>/g, '\n')}
                    </Text>
                  )}

                  {/* <Image src="#" alt="" rounded="md" /> */}
                </Flex>
              </Flex>
            ))}
          </Flex>
        </GridItem>
      ))}
    </Grid>
  );
}

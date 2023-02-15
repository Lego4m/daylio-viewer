import { useState } from 'react';

import {
  Box,
  Flex,
  Text,
  Stack,
  VStack,
  Grid,
  GridItem,
  Heading,
} from '@chakra-ui/react';

import { format } from 'date-fns';

import { Logo } from './components/Logo';
import { ImportBackupButton } from './components/ImportBackupButton';
import { DayEntriesList } from './components/DayEntriesList';

import { InfoSection } from './components/InfoSection';
import { InfoTitle } from './components/InfoTitle';
import { InfoParagraph } from './components/InfoParagraph';

import { isObjectEmpty } from './utils/isObjectEmpty';

import { DaylioDB } from './types/daylio';

export function App() {
  const [database, setDatabase] = useState<DaylioDB>({} as DaylioDB);

  return (
    <Box mx="auto" maxW="7xl" p={4}>
      <Flex as="header" alignItems="center" justifyContent="space-between">
        <Logo />

        <ImportBackupButton onDatabase={setDatabase} />
      </Flex>

      {isObjectEmpty(database) ? (
        <Box mt={4}>
          <Text textAlign="center">Please import a daylio database.</Text>
        </Box>
      ) : (
        <>
          <Flex mt={4} gap={4} flexDir={['column', 'column', 'row']}>
            <InfoSection>
              <InfoTitle>Diary</InfoTitle>

              <InfoParagraph
                title="Longest days in a row:"
                info={database.daysInRowLongestChain}
              />

              <InfoParagraph
                title="Entries"
                info={database.metadata.number_of_entries}
              />

              <InfoParagraph title="Moods" info={database.customMoods.length} />

              <InfoParagraph title="Tags" info={database.tags.length} />

              <InfoParagraph
                title="Tag Groups"
                info={database.tag_groups.length}
              />
            </InfoSection>

            <InfoSection>
              <InfoTitle>Assets</InfoTitle>

              <InfoParagraph
                title="Photos"
                info={database.metadata.number_of_photos}
              />
            </InfoSection>

            <InfoSection>
              <InfoTitle>Miscs</InfoTitle>

              <InfoParagraph title="Version" info={database.version} />

              <InfoParagraph
                title="Reminder"
                info={database.isReminderOn ? 'Enabled' : 'Disabled'}
              />

              <InfoParagraph title="Pin:" info={database.pin} />

              <InfoParagraph
                title="Platform"
                info={database.metadata.platform}
              />

              <InfoParagraph
                title="Created At"
                info={format(
                  new Date(database.metadata.created_at),
                  'MM/dd/yyyy'
                )}
              />
            </InfoSection>
          </Flex>

          <Flex mt={4} gap={4} flexDir={['column', 'column', 'row']}>
            <InfoSection>
              <InfoTitle>Moods</InfoTitle>

              <Stack
                direction={['column', 'row', 'column', 'row']}
                justify="space-between"
                spacing={2}
                textAlign="center"
              >
                <VStack color="yellow.500">
                  <Text fontWeight="bold">Rad</Text>
                  <Text>In love</Text>
                </VStack>

                <VStack color="green.500">
                  <Text fontWeight="bold">Good</Text>
                  <Text>Laughing</Text>
                </VStack>

                <VStack color="blue.500">
                  <Text fontWeight="bold">Meh</Text>
                  <Text>Tired</Text>
                </VStack>

                <VStack color="purple.500">
                  <Text fontWeight="bold">Bad</Text>
                  <Text>Anxious</Text>
                </VStack>

                <VStack color="red.500">
                  <Text fontWeight="bold">Awful</Text>
                  <Text>Desperate</Text>
                </VStack>
              </Stack>
            </InfoSection>

            <InfoSection>
              <InfoTitle>Tags</InfoTitle>

              <Grid
                templateColumns={[
                  'repeat(2, 1fr)',
                  'repeat(3, 1fr)',
                  'repeat(3, 1fr)',
                  'repeat(4, 1fr)',
                ]}
                gap={2}
                textAlign="center"
              >
                <GridItem>
                  <Heading as="h3" color="purple.500" fontSize="md">
                    Social
                  </Heading>

                  <Text>Friends</Text>
                  <Text>Sports</Text>
                  <Text>Party</Text>
                  <Text>Camping</Text>
                  <Text>Beach</Text>
                </GridItem>

                <GridItem>
                  <Heading as="h3" color="purple.500" fontSize="md">
                    Recreation
                  </Heading>

                  <Text>Mangá</Text>
                  <Text>Playing</Text>
                  <Text>Drawing</Text>
                  <Text>Anime</Text>
                  <Text>Reading</Text>
                </GridItem>

                <GridItem>
                  <Heading as="h3" color="purple.500" fontSize="md">
                    Learning
                  </Heading>

                  <Text>Exam</Text>
                  <Text>Searching</Text>
                  <Text>School</Text>
                  <Text>Programming</Text>
                </GridItem>

                <GridItem>
                  <Heading as="h3" color="purple.500" fontSize="md">
                    Health
                  </Heading>

                  <Text>Dentist</Text>
                  <Text>Hospital</Text>
                  <Text>Psychologist</Text>
                </GridItem>

                <GridItem>
                  <Heading as="h3" color="purple.500" fontSize="md">
                    Others
                  </Heading>

                  <Text>Music</Text>
                  <Text>Dream</Text>
                  <Text>Purchases</Text>
                  <Text>Cleaning</Text>
                </GridItem>
              </Grid>
            </InfoSection>
          </Flex>

          <DayEntriesList database={database} />
        </>
      )}
    </Box>
  );
}

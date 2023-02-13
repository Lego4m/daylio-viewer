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

              <InfoParagraph title="Longest days in a row:" info="1776" />

              <InfoParagraph title="Entries" info="4143" />

              <InfoParagraph title="Moods" info="19" />

              <InfoParagraph title="Tags" info="40" />

              <InfoParagraph title="Tag Groups" info="6" />
            </InfoSection>

            <InfoSection>
              <InfoTitle>Assets</InfoTitle>

              <InfoParagraph title="Photos" info="29" />
            </InfoSection>

            <InfoSection>
              <InfoTitle>Miscs</InfoTitle>

              <InfoParagraph title="Version" info="20" />

              <InfoParagraph title="Reminder" info="Activated" />

              <InfoParagraph title="Pin:" info="1234" />

              <InfoParagraph title="Platform" info="Android" />

              <InfoParagraph title="Created At" info="02/02/2023" />
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

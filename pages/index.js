import NextLink from 'next/link'
import {
  Button,
  Box,
  Container,
  Heading,
  Image,
  useColorModeValue,
  Link
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from './../components/paragraph'
import { BioYear, BioSection } from '../components/bio'
const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m a Full-Stack Developer based in Bangladesh!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jawad Rahim
          </Heading>
          <p>Software Developer (Frontend / Backend / DevOps)</p>
        </Box>
      </Box>
      <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
        <Image
          borderColor="whiteAlpha.800"
          borderWidth={2}
          borderStyle="solid"
          maxWidth="100px"
          display="inline-block"
          borderRadius="full"
          src="./images/jawad.jpg"
          alt="profile-image"
        />
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Jawad is a FullStack Developer based in Dhaka, Bangladesh with a
          passion for building resilient & scalable SaaS. When not online, he
          loves hanging out with his family, watching Anime, gardening, playing
          Cricket. He publishes content on AWS Serverless & Web Dev in general.
          He has a keen interest in Microservice, system design & recently
          started to learn DevOps. Currently, He’s working as a Backend
          Developer at a European FinTech Startup called{' '}
          <Link href="https://www.eucaps.com/" target="_blank">
            Eucaps.com
          </Link>
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section deplay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2020</BioYear>
          Graduated B.Sc in Computer Science & Engineering from North South
          University
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Worked as a Frontend Developer for a Local RealEstate Startup{' '}
          <Link href="https://www.greeho.com/" target="_blank">
            Greeho.com
          </Link>
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Working as a Backend Developer for a European FinTech Startup{' '}
          <Link href="https://www.eucaps.com/" target="_blank">
            Eucaps.com
          </Link>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Movies, Anime, Gardening, Sports, Kayaking, Microservice Architecture,
          System Design, DevOps
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Page

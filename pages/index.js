import NextLink from 'next/link'
import {
  Button,
  Box,
  Container,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from './../components/paragraph'
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
          <NextLink href="https://www.eucaps.com/" passHref>
            <a target="_blank" rel="noopener noreferrer">
              Eucaps.com
            </a>
          </NextLink>
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/work">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  )
}

export default Page

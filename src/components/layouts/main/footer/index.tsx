import React from 'react'
import {useRouter} from 'next/router'
import {
  Button,
  Text,
  HStack
} from '@chakra-ui/react'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai'

import Logo from 'components/atoms/Logo'
import styles from 'styles/Home.module.css'  // TODO: replace this style w/ footer module style


type Props = {
  yearFrom?: number
}


const Section: React.FC<Props> = ({yearFrom=new Date().getFullYear()}) => {
  const router = useRouter()
  const currentYear = new Date().getFullYear()
  const isCorrect: boolean = currentYear > yearFrom
  return (
    <footer className={styles.footer}>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <HStack
          w='50px'
        >
          <Logo />
          <Text>
            &copy;{isCorrect ?  `${yearFrom} - ` : null}{currentYear},&nbsp; "Hack a second" powered by Takao Mizuno(@mzntaka0)
          </Text>
          <Button
            variant='ghost'
            onClick={() => router.push('https://github.com/mzntaka0')}
          >
            <AiFillGithub />
          </Button>
          <Button
            variant='ghost'
            onClick={() => router.push('https://www.linkedin.com/in/mzntaka0/')}
          >
            <AiFillLinkedin />
          </Button>
          <Button
            variant='ghost'
            onClick={() => router.push('https://twitter.com/mzntaka0')}
          >
            <AiOutlineTwitter />
          </Button>
          <Button
            variant='ghost'
            onClick={() => router.push('https://www.instagram.com/mzntaka0/')}
          >
            <AiFillInstagram />
          </Button>
        </HStack>
      </div>
    </footer>
  )
}


export default Section

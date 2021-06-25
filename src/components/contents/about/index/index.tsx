import React from 'react'
import Link from 'next/link'
import {
  Box,
  HStack,
  Button
} from '@chakra-ui/react'
import { BsFileEarmarkArrowDown } from 'react-icons/bs'

import Layout from 'components/layouts/main'
import styles from 'styles/Home.module.css'
import ProfileImage from './ProfileImage'
import Profiles from './Profiles'


const Content: React.FC = () => {
  return (
    <Layout title='about page'>
      <div className={styles.container}>
        <main className={styles.main}>
          This page is gonna host an about page. <br />
          Plase coming soon..
          <HStack spacing='24px'>
            <Box>
              <ProfileImage />
              <br />
              <img
                src="/bookshelf.jpg"
                width='300px'
                alt=""
              />
              <br />
              <img
                src="/mypcparts.jpg"
                width='300px'
                alt=""
              />
              <br />
              <img
                src="/mypc.jpg"
                width='300px'
                alt=""
              />
              <br />
              <img
                src="/desk.jpg"
                width='300px'
                alt=""
              />
            </Box>
            <Box>
              <Profiles />
            </Box>
          </HStack>
          <br />
          <HStack>
            <Button
              leftIcon={<BsFileEarmarkArrowDown />}
            >
              <Link href='/ja_takao_mizuno_resume.xlsx'>
                Resume(ja)
              </Link>
            </Button>
            <Button
              leftIcon={<BsFileEarmarkArrowDown />}
            >
              <Link href='/en_takao_mizuno_resume.pdf'>
                Resume(en)
              </Link>
            </Button>
          </HStack>
        </main>
      </div>
    </Layout>
  )
}


export default Content

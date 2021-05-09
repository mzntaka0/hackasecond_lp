import React from 'react'
import {
  Box,
  HStack
} from '@chakra-ui/react'

import Layout from 'components/layouts/main'
import styles from 'styles/Home.module.css'
import ProfileImage from './ProfileImage'
import Profiles from './Profiles'


const Content: React.FC = () => {
  return (
    <Layout title='about page'>
      <div className={styles.container}>
        <main className={styles.main}>
          This page is gonna host a about page. <br />
          Plase coming soon..
          <HStack>
            <Box>
              <ProfileImage />
            </Box>
            <Box>
              <Profiles />
            </Box>
          </HStack>
        </main>
      </div>
    </Layout>
  )
}


export default Content

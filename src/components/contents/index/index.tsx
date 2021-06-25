import React from 'react'
import {VStack} from '@chakra-ui/react'

import Layout from 'components/layouts/main'
import styles from 'styles/Home.module.css'
import Heros from './Heros'
import Features from './Features'
import Cases from './Cases'


const Content: React.FC = () => {
  return (
    <Layout title='main page'>
      <div className={styles.container}>
        <main className={styles.main}>
          <VStack>
            <Heros />
            <Features />
            <Cases />
          </VStack>
        </main>
      </div>
    </Layout>
  )
}


export default Content

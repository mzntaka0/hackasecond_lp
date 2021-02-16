import React from 'react'

import Layout from 'components/layouts/main'
import styles from 'styles/Home.module.css'
import Heros from './Heros'


const Content: React.FC = () => {
  return (
    <Layout title='main page'>
      <div className={styles.container}>
        <main className={styles.main}>
          <Heros />
        </main>
      </div>
    </Layout>
  )
}


export default Content

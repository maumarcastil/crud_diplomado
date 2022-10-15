import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import FormRegister from '../components/Form/Form'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.main} ${styles.custom_main}`}
      >
        <FormRegister />
      </div>

      <div
        className={styles.main}
        style={{
          backgroundColor: '#edf1f3',
        }}
      ></div>

    </div>
  )
}

export default Home

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import FormRegister from '../components/Form/Form'
import TableList from '../components/Table/Table'
import { get } from '../Firebase/service'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    (async () => {
      const data: any = await get()
      setUsers(data)
    })()
  }, [])

  return (
    <div className={styles.container}>
      <div className={`${styles.main} ${styles.custom_main}`}>
        <FormRegister setUsers={setUsers} />
      </div>

      <div
        className={styles.main}
        style={{
          backgroundColor: '#edf1f3',
        }}
      >
        <TableList users={users}  />
      </div>
    </div>
  )
}

export default Home

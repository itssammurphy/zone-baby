import Head from 'next/head'
import Image from 'next/image'
import ZoneBabyHeader from '../components/ZoneBabyHeader/ZoneBabyHeader'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <ZoneBabyHeader />
    </div>
  )
}

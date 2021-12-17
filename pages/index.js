import VirtualHellShooter from '../components/VirtualHellShooter'
import styles from '../styles/Home.module.scss'

const Home = () => {
  return (
    <div>
      <VirtualHellShooter className={styles.game} />
    </div>
  )
}

export default Home

import styles from '../styles/VirtualHellShooter.module.scss'

const VirtualHellShooter = props => {
  const inheritProps = { ...props }
  delete inheritProps.className
  return (
    <div
      className={styles.game + (typeof props.className == 'string' ? ' ' + props.className : '')}
      {...inheritProps}></div>
  )
}

export default VirtualHellShooter

import styles from './styles.module.css'

interface Props { 
    hasBorder: boolean;
    src: string | undefined;
}

export default function Avatar({hasBorder = false, src}: Props) {
  return (
    <div className={hasBorder ? styles.avatarWithBorder : styles.avatarContainer}>
       <img src={src} alt="profile" />
    </div>
  )
}

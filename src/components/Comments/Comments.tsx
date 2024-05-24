import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './styles.module.css'

export default function Comments() {
    return (
        <div className={styles.commentContainer}>
            <div className={styles.commentContent}>
                <img src="https://www.github.com/DEVLevid.png" alt="profile" className={styles.profilePicture} />

                <div className={styles.content}>
                    <header>
                        <div className={styles.profileName}>
                            <strong>Levid Lima</strong>
                            <p>(voce)</p>
                        </div>

                        <button title='apagar o comentário' className={styles.btnTrash}><Trash size={20}/></button>
                    </header>
                    <p title='Publicado em 23 de maio de 2024' className={styles.time}>cerca de 3 horas</p>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
            </div>
            <div className={styles.likeContainer}>
            <button type='submit' title='Aplaudir' className={styles.btn}><ThumbsUp size={20} /></button> 
                <p>Aplaudir • <span>03</span></p>
            </div>
        </div>
    )
}

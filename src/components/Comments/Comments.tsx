import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './styles.module.css'
import Avatar from '../Avatar/Avatar'
import { useState } from 'react'

interface Props {
    content: string,
    deleteComments: (comment: string)=> void;
}

export default function Comments({content, deleteComments}: Props) {
    const [likeCount, setLikeCount] = useState(0)
    function handleDeleteComment(){
        deleteComments(content)
    }
    function handleLikeComment() {
        setLikeCount((state)=> {
            return state + 1
        })
    }
    return (
        <div className={styles.commentContainer}>
            <div className={styles.commentContent}>
                <Avatar hasBorder={false} src="https://www.github.com/DEVLevid.png" />

                <div className={styles.content}>
                    <header>
                        <div className={styles.profileName}>
                            <strong>Levid Lima</strong>
                            <p>(voce)</p>
                        </div>
                        <button title='apagar o comentário' onClick={handleDeleteComment} className={styles.btnTrash}><Trash size={20}/></button>
                    </header>
                    <p title='Publicado em 23 de maio de 2024' className={styles.time}>cerca de 3 horas</p>
                    <p>{content}</p>
                </div>
            </div>
            <div className={styles.likeContainer}>
            <button onClick={handleLikeComment} type='submit' title='Aplaudir' className={styles.btn}><ThumbsUp size={20} /></button> 
                <p>Aplaudir • <span>{likeCount}</span></p>
            </div>
        </div>
    )
}

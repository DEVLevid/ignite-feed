import { useState } from "react";
import Avatar from "../Avatar/Avatar";
import Comments from "../Comments/Comments";
import styles from "./styles.module.css";
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

interface Author {
    name: string;
    role: string;
    pictureUrl: string;
}

interface Content {
    type: string;
    content: string;
}

interface Props {
    author: Author;
    content: Content[];
    publishedAt: Date;
}

export default function Post({ author, content, publishedAt }: Props) {
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h' ", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    const [comments, setComments] = useState(['topzera'])
    const [newCommentText, setNewCommentText] = useState('')

    const HandleCreateNewComment = () => {
        event?.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    const handleNewCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewCommentText(event.target.value)
    }

    function deleteComments(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete;
        })

        setComments(commentsWithoutDeletedOne)
    } 

    return (
        <div className={styles.postContainer}>
            <header className={styles.header}>
                <div className={styles.author}>
                    <div className={styles.authorImg}>
                        <Avatar hasBorder={true} src={author.pictureUrl} />
                    </div>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <p>{author.role}</p>
                    </div>
                </div>

                <div title={publishedDateFormatted} className={styles.time}>
                    <p>{publishedDateRelativeToNow}</p>
                </div>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else {
                        return <a key={line.content}>{line.content}</a>
                    }
                })}
            </div>

            <footer>
                <div className={styles.comment}>
                    <strong>Deixe seu Feedback</strong>
                    <form action="" onSubmit={HandleCreateNewComment}>
                        <textarea name="comment" onChange={handleNewCommentChange} value={newCommentText} placeholder="Esreva um Comentário..."></textarea>
                        <div className={styles.btnContainer}>
                            <button type="submit" className={styles.submitBtn}>Publicar</button>
                        </div>
                    </form>
                </div>
            </footer>

            {comments.map(com => {
                return (
                    <Comments
                        key={com}
                        content={com}
                        deleteComments={deleteComments}
                    />)
            })}
        </div>
    );
}

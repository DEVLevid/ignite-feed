import Avatar from "../Avatar/Avatar";
import Comments from "../Comments/Comments";
import styles from "./styles.module.css";
import { format, formatDistance, formatDistanceToNow } from 'date-fns'
import {ptBR} from 'date-fns/locale/pt-BR'

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

export default function Post({author, content, publishedAt}: Props) {
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h' ", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    return (
        <div className={styles.postContainer}>
            <header className={styles.header}>
                <div className={styles.author}>
                    <div className={styles.authorImg}>
                        <Avatar hasBorder={true} src={author.pictureUrl}/>
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
                {content.map(c => {
                    if(c.type === 'paragraph') {
                        return <p>{c.content}</p>
                    } else {
                        return <a>{c.content}</a>
                    }
                })}
            </div>

            <footer>
                <div className={styles.comment}>
                    <strong>Deixe seu Feedback</strong>
                    <form action="">
                        <textarea placeholder="Esreva um Comentário..."></textarea>
                        <div className={styles.btnContainer}>
                            <button type="submit" className={styles.submitBtn}>Publicar</button>
                        </div>
                    </form>
                </div>
            </footer>

            <Comments />
        </div>
    );
}

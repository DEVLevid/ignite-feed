import styles from "./styles.module.css";

export default function Post() {
    return (
        <div className={styles.postContainer}>
            <header className={styles.header}>
                <div className={styles.author}>
                    <div className={styles.authorImg}>
                        <img src="https://www.github.com/DEVLevid.png" alt="levid" />
                    </div>
                    <div className={styles.authorInfo}>
                        <strong>Levid Lima</strong>
                        <p>Web Developer</p>
                    </div>
                </div>

                <div title="23 de maio de 2024" className={styles.time}>
                    <p>Publicado há 1h</p>
                </div>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>
                    Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
                    no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
                </p>
                <a href="">👉 jane.design/doctorcare</a>
                <a href="">#novoprojeto #nlw #rocketseat</a>
            </div>

            <footer>
                <div className={styles.coment}>
                    <strong>Deixe seu Feedback</strong>
                    <form action="">
                        <textarea placeholder="Esreva um Comentário..."></textarea>
                        <div className={styles.btnContainer}>
                            <button type="submit" className={styles.submitBtn}>Publicar</button>
                        </div>
                    </form>
                </div>
            </footer>
        </div>
    );
}
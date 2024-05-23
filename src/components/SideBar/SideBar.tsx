import styles from './styles.module.css'
import { PencilSimpleLine } from "@phosphor-icons/react";

export default function SideBar() {
    return (
        <aside className={styles.sideBarContainer}>
            <header className={styles.header}>
                <div className={styles.profile}>
                    <img src='http://www.github.com/DEVLevid.png' alt="profile" />
                </div>
            </header>
            <div className={styles.info}>
                <strong>Levid Lima</strong>
                <p>Web Developer</p>
            </div>
            <footer className={styles.footer}>
                <button className={styles.editBtn}> <PencilSimpleLine size={17} /> Editar seu Perfil</button>
            </footer>
        </aside>
    )
}

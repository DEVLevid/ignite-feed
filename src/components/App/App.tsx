
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import styles from "./app.module.css";


export default function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          numquam velit qui, odit facilis laboriosam est labore consequuntur
          mollitia totam culpa aliquam iste distinctio magnam voluptatibus eos
          omnis, nulla doloremque!
        </main>
      </div>
    </div>
  );
}

import Header from "./components/Header/Header";
import styles from "./app.module.css";
import SideBar from "./components/SideBar/SideBar";

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

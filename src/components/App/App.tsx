
import Header from "../Header/Header";
import Post from "../Post/Post";
import SideBar from "../SideBar/SideBar";
import styles from "./app.module.css";


export default function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  );
}

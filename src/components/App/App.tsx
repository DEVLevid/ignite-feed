
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import styles from "./app.module.css";
import { posts } from '../../data/Posts'
import Post from "../Post/Post";


export default function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map(post => {
            return (
              <Post 
              key={post.id}
              author={post.Author}
              content={post.content}
              publishedAt={post.publishedAt}
              />
            ) 
          })}
        </main>
      </div>
    </div>
  );
}

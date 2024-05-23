import styles from "./styles.module.css";
import igniteLogo from "../../assets/ignite-logo.svg";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <header>
        <img src={igniteLogo} alt="" />
        <strong>Ignite Feed</strong>
      </header>
    </div>
  );
}

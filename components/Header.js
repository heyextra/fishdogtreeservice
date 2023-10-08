import styles from './Header.module.css'

export default function Header({ title }) {
  return (
    <>
    <header className={styles.flex}>
      <h1 className="title">FISHDOG<br></br>TREE SERVICE</h1>
        <nav className="navlinks">
          <ul className={styles.flexnav}>
            <li>HOME</li>
            <li>SERVICES</li>
            <li>CONTACT</li>
          </ul>
        </nav>
        <h2>
          (202) 867-5309
        </h2>
      </header>
    </>
  );
}

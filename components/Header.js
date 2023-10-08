import styles from './Header.module.css'
import Link from 'next/link'

export default function Header({ title }) {
  return (
    <>
    <header className={styles.flex}>
      <h4 className="title">FISHDOG<br></br>TREE SERVICE</h4>
        <nav className="navlinks">
          <ul className={styles.flexnav}>
          <li><Link href='/'>Home</Link></li>
            <li><Link href='/services'>Services</Link></li>
            <li><Link href='/contact'>Contact</Link></li>
          </ul>
        </nav>
        <h4>
          (202) 867-5309
        </h4>
      </header>
    </>
  );
}

import styles from './Header.module.css'
import Link from 'next/link'

export default function Header({ title }) {
  return (
    <>
        <nav className="navlinks">
          <ul className={styles.flexnav}>
          <li><Link href='/'>FISHDOG<br></br>TREE SERVICE</Link></li>
            <li><Link href='/services'>Services</Link></li>
            <li><Link href='/contact'>Contact</Link></li>
            <li>(202) 867-5309</li>
          </ul>
        </nav>
    </>
  );
}

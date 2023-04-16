import Link from "next/link";
import styles from "./NavBar.module.css"

export default function NavBar(){
    return (
            <nav className={styles.nav}>
                <Link href="/">
                    Home
                </Link>
                <Link href="about">
                    About
                </Link>
            </nav>
            ) 

}
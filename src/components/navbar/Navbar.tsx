import styles from '../../styles/Navbar.module.css'
import Link from 'next/link'

export const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link href='/'>
                Home
            </Link>
            <Link href='/products'>
                Products
            </Link>
        </div>
    )
}
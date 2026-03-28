import Link from "next/link";
import LogoIcon from "@/src/components/ui/icons/LogoIcon";
import styles from "./Header.module.css";
import { cookies } from 'next/headers';

export default async function Header() {
    const cookieStore = await cookies();
    const isAuth = cookieStore.has('auth_token');

    return (
        <div className={styles.headerBackGround}>
            <div className={`container ${styles.header}`}>
                <div className={styles.headerTopBar}>
                    <div className={styles.logo}>
                        <LogoIcon/>
                        <Link href="/" className={styles.logoTitle}>
                            Travel
                        </Link>
                    </div>
                    {
                        isAuth ? (
                            <Link href="/profile" >Профиль</Link>
                        ) : (
                        <Link href="/login" className={styles.headerLoginLink}>
                            Войти
                        </Link>
                        )
                    }
                </div>

                <div className={styles.hero}>
                    <h1 className={styles.heroTitle}>
                        ТАМ, ГДЕ МИР НАЧИНАЕТСЯ С ПУТЕШЕСТВИЙ
                    </h1>
                </div>
            </div>
        </div>
    );
}


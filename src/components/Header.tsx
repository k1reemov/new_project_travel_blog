import Link from "next/link";
import LogoIcon from "@/src/components/icons/LogoIcon"; // Твой путь до иконки
import styles from "./Header.module.css"; // Обязательный импорт стилей

export default function Header() {
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
                    <Link href="/login" className={styles.headerLoginLink}>
                        Войти
                    </Link>
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


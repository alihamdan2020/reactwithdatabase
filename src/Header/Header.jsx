import style from './Header.module.css'
export default function Header(){
    return(
    <header>
        <img src="src/assets/images/logo.png" alt="logo" />

        <nav>
            <a href="http://">about us</a>
            <a href="http://">contact us</a>
        </nav>
    </header>
    )
}
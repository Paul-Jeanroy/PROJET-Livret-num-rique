/* COMPOSANT HEADER

    FAIT PAR PJ LE 24/05

*/

// Import css
import "@/app/Css/Header-E-MA/header.css"
import Link from "next/link"


export default function Header_E_MA() {
    return (
        <header>
            <div className="div_container_header">
                <h1 className="h1_titre_site">Livret d'Apprentissage Numérique</h1>
                <div className="div_nav_header">
                    <nav className="nav_header">
                        <div className="div_nav_acceuil">
                            <img src="Image/icon-accueil.png"></img>
                            <Link href={"/Accueil"}>Accueil</Link>
                        </div>
                        <div className="div_nav_livret">
                            <img src="Image/icon-livret.png"></img>
                            <Link href={"/Livret"}>Livret</Link>
                        </div>
                        <div className="div_nav_profil">
                            <div className="div_contour_avatar">
                                <img src="Image/icon-avatar.png"></img>
                            </div>
                            <Link href={"/Profil"}>Profil</Link>
                        </div>
                    </nav>
                    <button className="btn_notif">
                        <img src="Image/icon-notif.png"></img>
                    </button>
                    <button className="btn_deco">
                        <Link href={"/Connexion"}>Se déconnecter</Link>
                    </button>
                </div>
            </div>
        </header>
    )

}
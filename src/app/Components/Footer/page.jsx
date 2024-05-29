/* COMPOSANT FOOTER

    FAIT PAR PJ LE 29/05

*/

// Import css
import "@/app/Css/Footer/footer.css"
import Link from "next/link"

export default function Footer() {

    return (
        <footer>
            <div className="div_container_footer">
                <h3 className="h3_titre_site">Livret d'apprentissage numérique</h3>
                <div className="div_nav_footer">
                    <nav className="nav_footer">
                        <div className="div_nav_acceuil_footer">
                            <Link href={"/Accueil"}>Accueil</Link>
                        </div>
                        <div className="div_nav_livret">
                            <Link href={"/Livret"}>Livret</Link>
                        </div>
                        <div className="div_nav_profil">
                            <Link href={"/Profil"}>Profil</Link>
                        </div>
                    </nav>
                </div>
                <div className="div_pub_footer">
                    <div className="div_realisation">@2024 Laib - Jeanroy</div>
                    <div className="div_pub">
                        <img src="Image/region-sud.png"></img>
                        <img src="Image/ecole-pratique.png"></img>
                        <img src="Image/cci-aix-mars.png"></img>
                        <img src="Image/logo-esiee.png"></img>
                    </div>
                </div>
            </div>
        </footer>
    )
}
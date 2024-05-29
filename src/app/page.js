import Image from "next/image";
import "./page.css";

import Header_E_MA from "@/app/Components/Header-E-MA/page"
import Footer from "@/app/Components/Footer/page";

export default function Home() {
    return (
        <>
            <Header_E_MA />
            <section className="section_landing">
                
            </section>
            <Footer />
        </>
    );
}

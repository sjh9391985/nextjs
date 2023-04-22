import Link from "next/link";

export default function NavBar(){
    return (
            <nav>
                <Link href="/">
                    Home
                </Link>
                <Link href="about">
                    About
                </Link>
                <style jsx>{`
                    nav {
                        backgruond-color: tomato;
                    }

                    a {
                        text-decoration: none;
                    }
                `}</style>
            </nav>
            ) 

}
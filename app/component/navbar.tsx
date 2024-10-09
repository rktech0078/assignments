import Link from "next/link"

export default function Navbar(){
    return(
        <div className="container">
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/service-page">Service</Link></li>
                <li><Link href="/animation">Animations</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}
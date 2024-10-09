import css from "./service.module.css"
import Link from "next/link"
export default function () {
    return (
        <div>
            <div className={css.container}>
                <ul>
                    <li><Link href="/service-page/product">PAYMENTS</Link></li>
                </ul>
            </div>

            <br /><br />

        </div>
    )
}


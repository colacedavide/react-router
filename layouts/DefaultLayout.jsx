import { Outlet } from "react-router-dom";
import Nav from "../src/Nav";

export default function DefaultLayout() {
    return (
        <div>
            <header>
                <Nav></Nav>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    )
}
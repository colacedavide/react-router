import { Outlet } from "react-router-dom";
import AppNav from "../src/AppNav";

export default function DefaultLayout() {
    return (
        <div>
            <header>

                <AppNav />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
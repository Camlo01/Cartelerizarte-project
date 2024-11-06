import NavBar from "./NavBar/NavBar"
import { Suspense } from 'react'
import { Outlet } from "react-router-dom";

import Loading from './Loading'

export default function Layout() {

    return (
        <div>
            <NavBar />
            <Suspense fallback={<Loading />}>
                <Outlet />
            </Suspense>
        </div>
    )

}
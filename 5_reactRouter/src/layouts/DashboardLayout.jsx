import { Outlet } from 'react-router-dom'
import '../assets/style/pages-dashboard.css'

export default function DashboardLayout() {
    return (
        <div>
            <h3>
                Banner em comum da Dashboard
            </h3>

            <aside>
                <h2>Aside em comum da Dashboard</h2>
            </aside>

            {/* as rotas filhas vão ser  colocadas dinamicamente aqui*/}
            <Outlet />

            <section>
                <h3>Seção em comum da Dashboard</h3>
            </section>
            <br />
            
        </div>
    )
}

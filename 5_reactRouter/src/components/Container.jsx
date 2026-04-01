import '../assets/style/container.css'

export default function Container({ children }) {
    return (
        <div className='page-layout'>
            <main>
                {children}
            </main>

            <footer>Footer</footer>
        </div>
    )
}

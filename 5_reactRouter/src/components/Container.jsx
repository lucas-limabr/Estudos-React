import '../assets/style/container.css'

export default function Container({ children }) {
    return (
        <div>
            <main>
                {children}
            </main>

            <footer>Footer</footer>
        </div>
    )
}

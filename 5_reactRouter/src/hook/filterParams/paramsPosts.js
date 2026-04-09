import { useSearchParams } from "react-router-dom"

export function postParams() {
    const [searchParams] = useSearchParams()

    const userId = searchParams.get('userId') || ""
    const title = searchParams.get('title') || ""
    const size = searchParams.get('size') || ""

    return {userId, title, size}
}
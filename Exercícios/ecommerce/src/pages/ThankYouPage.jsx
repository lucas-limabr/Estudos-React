import { useLocation, useNavigate } from 'react-router-dom'
import Sale from '../components/Sale'
import { useEffect, useState } from 'react'

export default function ThankYouPage() {

  const navigate = useNavigate()
  const location = useLocation()
  const [sale, setSale] = useState(null)

  useEffect(() => {

    setSale(location.state)
    // limpa o state da rota
    navigate(location.pathname, { replace: true })
  }, [])


  return (
    <div>
      <Sale items={sale} />
    </div>
  )
}

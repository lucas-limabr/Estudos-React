import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { postParams } from '../hook/filterParams/paramsPosts'
import '../assets/style/postFilters.css'

export default function PostFilters() {

    //o useSearchParams é um hook do React Router que controla estado, como o useState, porém, ele tem algumas funcionalidades a mais. Ele mantém o estado atual da URL da aplicação, e não de uma constante qualquer, e o estado que ele controla, persiste mesmo após um render de página, ou seja, um refresh completo. Além disso, seu estado é global, podendo ser declarado novamente em um outro componente, mas sempre terá o mesmo valor sendo compartilhado
    const [searchParams, setSearchParams] = useSearchParams()

    const { userId, title, size } = postParams()

    function handleChange(e) {
        const { name, value } = e.target

        setSearchParams((prev) => {
            const params = new URLSearchParams(prev)

            if (value.trim()) {
                params.set(name, value)
            }
            else {
                params.delete(name)
            }

            return params
        })
    }

    function clearFilters() {
        setSearchParams({})
    }

    return (
        <div className='box-filter'>
            <p>Filtrar posts</p>

            <div className='box-filter-items'>
                <div>
                    <label htmlFor="userId">ID do usuário que publicou o post:</label>
                    <input type="number" name="userId" id="userId" value={userId} onChange={handleChange} placeholder='ID do usuário' />
                </div>
                <div>
                    <label htmlFor="title">Título completo do post:</label>
                    <input type="text" name="title" id="title" value={title} onChange={handleChange} placeholder='Título' />
                </div>

                <div>
                    <label htmlFor="size">Quantidade máxima de posts:</label>
                    <input type="number" name="size" id="size" value={size} onChange={handleChange} placeholder='Size' />
                </div>
                <div>
                    <button onClick={clearFilters}>Limpar filtros</button>
                </div>
            </div>
        </div>
    )
}



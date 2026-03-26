import React from 'react'

export default function NumberList({ numbers }) {

    if (!numbers) {
        return null;
    }

    return (
        <ul>
            {
                numbers.map((number, index) =>
                    // em aplicações reais a key não é o index de uma lista, e sim algum atributo que a identifique exclusivamente como o id            
                    <li key={index}>
                        {number}
                    </li>)
            }
        </ul>
    )
}

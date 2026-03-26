export default function RenderConditional({user})
{
    return(
        <div>
            {/* if (user != null) {} */}
            {user && <p>Seja bem vindo, {user.name}</p>}
        </div>
    )
}
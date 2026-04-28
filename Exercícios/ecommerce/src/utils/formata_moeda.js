const formatterBRL = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
})

export function formatCurrencyBRL(value) {
    const number = Number(value)
    return isNaN(number) ? 'R$ 0,00' : formatterBRL.format(number)
}
document.addEventListener('DOMContentLoaded', () => {
    const addTransaction = document.getElementById('add-transaction-button')
    const name = document.getElementById('transaction-name')
    const stock = document.getElementById('transaction-stock')
    const price = document.getElementById('transaction-price')
    const table = document.getElementById('transactions-table')
    const dateAndTime = document.getElementById('transaction-datetime')
    addTransaction.addEventListener('click', (e) => {
        e.preventDefault()

        if (name.value === '' || stock.value === '' || price.value === '' || dateAndTime.value === '') {
            alert('Fill all fields')
        } else {
            const tr = document.createElement('tr')
            tr.innerHTML = `<td>${name.value}</td>
                        <td>${stock.value}</td>
                        <td>$${price.value}</td>
                        <td>${dateAndTime.value}</td>`
            table.appendChild(tr)
        }
    })
})
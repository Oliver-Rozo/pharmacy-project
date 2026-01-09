document.addEventListener('DOMContentLoaded', () => {
    const addProduct = document.getElementById('add-product-button')
    const name = document.getElementById('product-name')
    const stock = document.getElementById('product-stock')
    const price = document.getElementById('product-price')
    const table = document.getElementById('product-table')
    addProduct.addEventListener('click', (e) => {
        e.preventDefault()

        if (name.value === '' || stock.value === '' || price.value === '') {
            alert('Fill all fields')
        } else {
            const tr = document.createElement('tr')
            tr.innerHTML = `<td>${name.value}</td>
                        <td><input type="number" class="product-quant" name="quantity" min="0" value="${stock.value}"></td>
                        <td>$${price.value}</td>`
            table.appendChild(tr)
        }
    })
})
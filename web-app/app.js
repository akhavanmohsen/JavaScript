const products = []

const filters = {
    searchItem : ''
}

const renderProducts = function (products, filters) {
    const filteredProducts = products.filter(function(item){
        return item.title.toLowerCase().includes(filters.searchItem.toLowerCase())
    }) 
    document.querySelector('#products').innerHTML = ''
    filteredProducts.forEach(function(item){
        const productEl = document.createElement('p')
        productEl.textContent = item.title
        document.querySelector('#products').appendChild(productEl)
    })
}

renderProducts (products, filters)

document.querySelector('#search-products').addEventListener('input', function(event){
    filters.searchItem = event.target.value
    renderProducts(products, filters)
})

document.querySelector('#add-prodcut-form').addEventListener('submit', function(event){
    event.preventDefault()
    products.push({
        title : event.target.elements.productTitle.value,
        exist : true
    })
    renderProducts(products, filters)
    event.target.elements.productTitle.value = ''
})
const products = []

const filters = {
    searchItem: ''
}


const availableProducts = function(products) {
    const existProduct = products.filter(function(item){
        return item.exist === 'true'
    })
    //console.log(existProduct)
    document.querySelector('#products').innerHTML = ''
    existProduct.forEach(function(item){
        const productEl2 = document.createElement('p')
        productEl2.textContent = item.title
        document.querySelector('#products').appendChild(productEl2)
    })
}

// Search item 
const renderProducts = function(products, filters) {
    const filteredProducts = products.filter(function(item) {
        return item.title.toLowerCase().includes(filters.searchItem.toLowerCase())
    })
    document.querySelector('#products').innerHTML = ''
    filteredProducts.forEach(function(item) {
        const productEl = document.createElement('p')
        productEl.textContent = item.title
        document.querySelector('#products').appendChild(productEl)
    })
}


renderProducts(products, filters)

// Read search item
document.querySelector('#search-products').addEventListener('input', function(e) {
    filters.searchItem = e.target.value
    renderProducts(products, filters)
})

//available Products
document.querySelector('#availabe-products').addEventListener('change', function(event){
    if (event.target.checkbox = true) {
        availableProducts(products)
    } else {
        document.querySelector('#products').innerHTML = ''
    } 
})

// Add item to array
document.querySelector('#add-product-form').addEventListener('submit', function(e) {
    e.preventDefault()
    products.push({
        title: e.target.elements.productTitle.value,
        exist: e.target.elements.productExist.value
    })
    renderProducts(products, filters)
    e.target.elements.productTitle.value = ''
    e.target.elements.productExist.value = ''
})

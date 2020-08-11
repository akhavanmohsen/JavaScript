const getSavedProducts = function (){
    const productsJSON = localStorage.getItem('products')
    if (productsJSON !== null) {
        return JSON.parse(productsJSON)
    } else {
        return []
    }
}

const saveProducts = function(products) {
    localStorage.setItem('products', JSON.stringify(products))
}

const renderProducts = function(products, filters) {
    let filteredProducts = products.filter(function(item) {
        return item.title.toLowerCase().includes(filters.searchItem.toLowerCase())
    })
    filteredProducts = filteredProducts.filter(function(item) {
        if(filters.availableProducts) {
            return item.exist
        } else {
            return true
        }
    })
    document.querySelector('#products').innerHTML = ''
    filteredProducts.forEach(function(item) {

        document.querySelector('#products').appendChild(createProductDOM(item))
    })
}

const createProductDOM = function (product) {
    const productEl = document.createElement('p')
    productEl.textContent = product.title
    return productEl
}




// Search Product when user type in textbox
const products = [{
    title : 'Node.js Design Pattern'
}, {
    title : 'You dont know JS : This is object'
}, {
    title: 'The JS is a best language'
}]

const filters = {
    searchItems : ''
}

const renderProducts = function(products, filters) {
    const searchedProducts = products.filter(function(item) {
        return item.title.toLowerCase().includes(filters.searchItems.toLowerCase())
    })
    document.querySelector('#productSearchResult').innerHTML = ''
    searchedProducts.forEach(function(item){
        const searchEL = document.createElement('p')
        searchEL.textContent = item.title
        document.querySelector('#productSearchResult').appendChild(searchEL)

    })
}

renderProducts(products, filters)

document.querySelector('#product_search').addEventListener('input' , function(event){
    filters.searchItems = event.target.value
    renderProducts(products,filters)
}) 

// Add and Remove Product
document.querySelector('#product_name').addEventListener('change', function(e){
    document.querySelector('#add_product').addEventListener('click',function(event){
    const textBoxValue = document.createElement('p')
    textBoxValue.textContent = e.target.value
    document.querySelector('#product').appendChild(textBoxValue)
})
})
 
//})
document.querySelector('#remove_all_products').addEventListener('click', function(event){
    document.querySelectorAll('.product').forEach(function(item){
        item.remove()
    })
})


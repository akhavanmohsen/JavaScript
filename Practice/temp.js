 const products = [ {
    name : 'book1'
} , {
    name : 'book2'
} , {
    name : 'book3'
}]

deletProduct = function(productArry, productTitle) {
    const indexValue = products.findIndex(function(item, index){
        return item.name.toLowerCase() === productTitle.toLowerCase()
    })
    // Delete selected product
    if (indexValue > -1) {
        products.splice(indexValue,1)
        console.log(`The ${productTitle} deleted`)
    } else {
        // If could not find selected product
        console.log(`The ${productTitle} is not found!`)
    }
}
const value = deletProduct(products, 'Book2')

console.log(products) 
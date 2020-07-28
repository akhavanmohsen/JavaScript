/* const products = {
    title : 'book1',
    price : 70
}

const productJson = JSON.stringify(products)
//console.log(productJson)
localStorage.setItem('product' , productJson) */

const productJson = localStorage.getItem('product')
const product = JSON.parse(productJson)
console.log(`Title ${product.title} and price is : ${product.price}`)
const productList = [{
    name : 'book1',
    exist : true,
},
{
    name : 'book2',
    exist : false ,  
},
{
    name : 'book3',
    exist : true,
},
{
    name : 'book4',
    exist: false,
}]
let existCount = 0
let counter = 0

const availableProducts = productList.filter(function(item){
    return item.exist === true
})
console.log(existCount)

const existProducts = document.createElement('H2')
existProducts.textContent = `The total of exist products is : ${availableProducts.length}`
document.querySelector('body').appendChild(existProducts)

const listOfProducts = document.createElement('P')
listOfProducts.textContent = 'The below are list of product :'
document.querySelector('body').appendChild(listOfProducts)
productList.forEach(function(item){
    counter = counter + 1
    const eachProducts = document.createElement('p')
    eachProducts.textContent = `${counter} - ${item.name}`
    document.querySelector('body').appendChild(eachProducts)
})
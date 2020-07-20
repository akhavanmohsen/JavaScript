const basketItems = [{
    product : 'book1',
    exist : true
} , {
    product : 'book2',
    exist : false
} , {
    product : 'book3',
    exist : true
} , {
    product : 'book4',
    exist : false
}]

const productSort = function(basket) {
    basket.sort(function(a , b) {
        if (a.exist === true && b.exist === false) {
            return -1
        } else if (a.exist === false && b.exist === true ) {
              return 1                
            } else {
                return 0
            }
        })
    }



productSort(basketItems)

console.log(basketItems)


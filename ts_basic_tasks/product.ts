
//defining interfaces
interface Product {
    name: string,
    price : number,
    description : string,
}

let total_prods:number = 0


//objects 
let shoe: Product = {
    name : "Nike",
    price : 10000,
    description : "Overpriced product, still i will buy it!"
}

let pant: Product = {
    name : "pike",
    price : 10004,
    description : "Overpriced product, still i will buy it!"
}
let shirt: Product = {
    name : "sike",
    price : 1004,
    description : "Overpriced product, still i will buy it!"
}
let watch: Product = {
    name : "mike",
    price : 1050,
    description : "Overpriced product, still i will buy it!"
}

const bought_products: Product[] = [shoe,shirt,watch,pant]

function print_details(product:Product):void{
    console.debug(product.name)
    console.debug(product.price)
    console.debug(product.description)
}

function bill(all_products:Product[]): number{
    var sum_val:number = 0
    for (const key in all_products){
        sum_val+=all_products[key].price
    }

    return sum_val
}

function first_word(all_products:Product[]):void{
    for (const key in all_products){
        const word = all_products[key].description.split(" ")[0]
        console.log(word)
    }
}
//print price deatils of 1 shoe
print_details(shoe)
console.log(`the total bill for the products bought is ${bill(bought_products)}`)
first_word(bought_products)






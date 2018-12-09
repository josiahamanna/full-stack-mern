const items = [
    {itemName: 'idly', isVeg:true, cuisine: 'si'},
    {itemName: 'samosa', isVeg:true, cuisine:'ni'}, 
    {itemName: 'chicken biryani', isVeg:false, cuisine: 'si'},
    {itemName: 'roti curry', isVeg:true, cuisine:'ni'},
    {itemName: 'butter chicken', isVeg:false, cuisine:'ni'}
]

let vegItems = items.filter(function(item){
    return item.isVeg
})

console.log(vegItems) // output will be
// [ { itemName: 'idli', isVeg: true, cuisine: 'si' },
//   { itemName: 'samosa', isVeg: true, cuisine: 'ni' },
//   { itemName: 'roti curry', isVeg: true, cuisine: 'ni' } ]

let vegItemsCuisine = items.filter(function(item) {
    return item.isVeg && item.cuisine == 'ni'
})

console.log(vegItemsCuisine) // output will be:
// [ { itemName: 'samosa', isVeg: true, cuisine: 'ni' },
//   { itemName: 'roti curry', isVeg: true, cuisine: 'ni' } ]
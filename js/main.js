var info = {
    "items": {
        "c001": {
            "parent": "c000",
            "title": "Phones"
        },
        "c002": {
            "parent": "c000",
            "title": "Laptops"
        },
        "c003": {
            "parent": "c000",
            "title": "Accessories"
        },
        "p001": {
            "parent": "c001",
            "manufacturer": "Apple",
            "title": "iPhone 10",
            "price": 499,
            "releaseDate": "2018-04-23T18:25:43.511Z"
        },
        "p002": {
            "parent": "c002",
            "manufacturer": "Apple",
            "title": "Macbook Pro 2017",
            "price": 1999,
            "releaseDate": "2017-04-23T18:25:43.511Z"
        },
        "p003": {
            "parent": "c002",
            "manufacturer": "Dell",
            "title": "XPS 13",
            "price": 1399,
            "releaseDate": "2017-04-23T18:25:43.511Z"
        },
        "p004": {
            "parent": "c001",
            "manufacturer": "Samsung",
            "title": "Samsung Galaxy S10",
            "price": 399,
            "releaseDate": "2017-04-23T18:25:43.511Z"
        },
        "p005": {
            "parent": "c003",
            "manufacturer": "Apple",
            "title": "Apple Charger 12W",
            "price": 99,
            "releaseDate": "2016-12-23T18:25:43.511Z"
        },
        "p006": {
            "parent": "c003",
            "manufacturer": "Samsung",
            "title": "Samsung Charger 12W",
            "price": 89,
            "releaseDate": "2017-04-23T18:25:43.511Z"
        }
    }
};
// initialise
let objCategoryList = {};
let arProductList = [];      
Object.keys(info.items).forEach(function(key) {        
    // get first character
    var strFirstChar = key.charAt(0)
    // if character c, assign as category
    if (strFirstChar === 'c') {
        // assign  list
        objCategoryList[key] = {...info.items[key], products: []}
    } else if (strFirstChar === 'p') {
        // push to products array
        arProductList.push(info.items[key])
    }
});
// loop throuh products
arProductList.forEach(function(item) {
    // if category exist
    if (objCategoryList.hasOwnProperty(item.parent)) {
        // add to category
        objCategoryList[item.parent].products.push({
            title: item.title,
            manufacturer: item.manufacturer,
            price: item.price,
            releaseDate: new Date(item.releaseDate).getFullYear()
        })
    } else {
        // uncategorized
        // TODO: 
    }
})
// initialise final content
let strHtmlContent = "";
// loop through
Object.keys(objCategoryList).forEach(function(key) {
    // get html content
    strHtmlContent += buildCategoryListDisplay(objCategoryList[key])
})
/**
 * Function to build HTML content
 * @param Object {*} categoryList 
 */
function buildCategoryListDisplay(categoryList) {
    // initiliase
    let productsListHtml = ""
    // loop through products
    categoryList.products.forEach(function(item){
        // build single product html
        productsListHtml += `<div class="item">            
            <div class="item-name">
                <h3>${item.title}</h3>
            </div>
            <div class="item-body">                
                <div class="row">
                    <div class="col-sm-8">
                        <div class="item-picture">
                            <img src="75x75.png" />
                        </div>
                        <div class="item-details">                                                  
                            <p>${item.manufacturer + " to be released in " + item.releaseDate} </p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <button class="price">$${item.price}</button>
                    </div>
                </div>
            </div>
        </div>`;
    })
    // simply return combined content
    return `<div class="item-category">
        <h4>${categoryList.title}</h4>
        <div class="item-list">
        ${productsListHtml}
        </div>
    </div>`;
}
// finally, output to content div
document.getElementById("content").innerHTML += strHtmlContent;
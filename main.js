const API = "https://api.escuelajs.co/api/v1/products/";

const main = async () => {
   const response = await fetch(API);
   const products = await response.json();

   const output = products?.map((product) => {
    return `
            <div class="product-card">
                <img src="${product.images[0]}">
                <div class="product-info">
                    <div>
                        <p class="productPrice">
                        <span>$ ${product.price}</span> 
                        </p>
                        <p class="productName">
                        ${product.title}
                        </p>
                    </div>
                    <figure>
                    <img src="./icons/bt_add_to_cart.svg">
                    </figure>
                </div>
            </div>
    `;
   }).join('');
   let newItem = document.createElement("section");
   newItem.classList.add("items");
   newItem.innerHTML= output;
   cardsContainer.appendChild(newItem);
}
main();

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

// const productList = [];
// productList.push({
//     name: 'Bike',
//     price: 120,
//     image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" ,
// });
// productList.push({
//     name: 'Screen',
//     price: 1200,
//     image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" ,
// });
// productList.push({
//     name: 'Computer',
//     price: 1220,
//     image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" ,
// });

// function renderProducts(arr) {
//     for(product of arr) {
//         const productCard = document.createElement('div');
//         productCard.classList.add('product-card');
//         //img
//         const productImg = document.createElement('img');
//         productImg.setAttribute('src', product.image);
//         productImg.addEventListener('click', openProductDetailAside);

//         //info
//         const productInfo = document.createElement('div');
//         productInfo.classList.add('product-info');
    
//         const productInfoDiv = document.createElement('div');
//         //Price
//         const productPrice = document.createElement('p');
//         productPrice.innerText = '$' + product.price;
//         //Name
//         const productName = document.createElement('p');
//         productName.innerText = product.name;
    
//         productInfoDiv.appendChild(productPrice);
//         productInfoDiv.appendChild(productName);
    
//         //Figure
//         const productInfoFigure = document.createElement('figure');
//         const productImgCart = document.createElement('img');
//         productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
//         productInfoFigure.appendChild(productImgCart);
        
//         productInfo.appendChild(productInfoDiv);
//         productInfo.appendChild(productInfoFigure);
    
//         productCard.appendChild(productImg);
//         productCard.appendChild(productInfo);
    
//         cardsContainer.appendChild(productCard);
//     }
// }

// renderProducts(productList);

//class 11, 7, 13, 6, 12
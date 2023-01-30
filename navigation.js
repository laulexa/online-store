iconMenuBtn.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleShoppingCartAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCartAside() {
const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

if(!isMobileMenuClosed){
    mobileMenu.classList.add('inactive')
}
const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

if(!isProductDetailClosed){
    productDetailContainer.classList.add('inactive')
}

shoppingCartContainer.classList.toggle('inactive');
} //menu desktop esta cerrado?


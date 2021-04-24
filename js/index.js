const subscribe_block = document.querySelector('.subscribe-block')
const subscribe_block_close = document.querySelector('.subscribe-block__close-btn')
const cart_value = document.querySelector('#cart-value')
const cart_count = document.querySelector('#cart-count')
const wrapper = document.querySelector('.wrapper__container')
const nav = document.querySelector('.navigation')
const nav_btn = document.querySelector('.navigation__container__btn__button')
const cart = document.querySelector('.cart-block')
const cart_btn = document.querySelector('.cart-block__btn')
const main_container = document.querySelector('.main-container')
const logo_to_main = document.querySelector('.header__logo-icon')
//
const nav_menu = document.querySelector('.navigation__container__menu__navigation')
const catalog_page = document.querySelector('.catalog-template')
const catalog_container = document.querySelector('.catalog-template__container')
const breadcrumbs_link = document.querySelector('.breadcrumbs__link')
const cart_container = document.querySelector('.cart-block__cart-info__cart-container__cart')
//
//item-page
const item_page_container = document.querySelector('.item-page')
const btn_add_item_page = document.querySelector('.filter-panel__nav-btns__addbtn')
const btn_close_item_page = document.querySelector('.filter-panel__nav-btns__closebtn')

//breadcrumbs
let item_page_section_bread = document.querySelector('.description-block__breadcrumbs__section')
let item_page_product_bread = document.querySelector('.description-block__breadcrumbs__nameofitem')

//photos
let item_page_gallery_post_1 = document.querySelector('#post-1')
let item_page_gallery_post_2 = document.querySelector('#post-2')
let item_page_gallery_post_3 = document.querySelector('#post-3')
let item_page_gallery_post_4 = document.querySelector('#post-4')

//main describe
let item_page_descr_text = document.querySelector('.description-block__product-details-text')


//colors
let item_page_color_container_firstcolor = document.querySelector('.choose-color__color_1')
let item_page_color_container_secondcolor = document.querySelector('.choose-color__color_2')
let item_page_color_container_thirdcolor = document.querySelector('.choose-color__color_3')

//title
let item_page_title_of_item = document.querySelector('.filter-panel__product-title__name')
let item_page_id_of_item = document.querySelector('.filter-panel__product-title__id')

//structure
let item_page_structure_of_item = document.querySelector('.filter-panel__structure-description__list')

//sizes
let item_page_size_list = document.querySelector('.filter-panel__size-btns__list')

//clean
let item_page_clean_recom = document.querySelector('.filter-panel__washing-description__describes')

//cost
let item_page_cost = document.querySelector('.filter-panel__product-price__value')

// desktop
let count = 0
let cartSum = 0
cart_value.innerText = 0
cart_count.innerText = cartSum
//navigation
nav_btn.addEventListener('click', () => {   // меню
    if(nav.classList.contains('hide_nav')) {
        nav_btn.classList.add('active_nav_btn')
        nav.classList.add('active_nav')
        nav.classList.remove('hide_nav')
        main_container.style.filter = 'blur(100px)'
    } else {
        nav_btn.classList.remove('active_nav_btn')
        nav.classList.remove('active_nav')
        nav.classList.add('hide_nav')
        main_container.style.filter = 'blur(0)'
    }
})
//cart block
if(document.documentElement.clientWidth <= 800) {}
cart_btn.addEventListener('click', () => {  // блок с корзиной
    if(cart.classList.contains('cart_hide')) {
        cart.classList.add('cart_active')
        cart.classList.remove('cart_hide')
        main_container.style.filter = 'blur(100px)'
    } else {
        cart.classList.remove('cart_active')
        cart.classList.add('cart_hide')
        main_container.style.filter = 'blur(0)'
    }
})
//onload block
subscribe_block.style.display = 'flex'
main_container.style.filter = 'blur(100px)'
subscribe_block_close.addEventListener('click', () => {
    subscribe_block.style.display = 'none'
    main_container.style.filter = 'blur(0px)'
})


//catalog fnc

let arr_items = [ //example items
    {
        name_of_section: 'Водолазка',
        number_of_products: '6',
        products: [
            {
                main_img: './assets/img/item-imgs/8939560-1.svg',
                imgs:[
                    './assets/img/item-page-temp-photo/8939560-1.svg',
                    './assets/img/item-page-temp-photo/8939560-2.svg',
                    './assets/img/item-page-temp-photo/8939560-3.svg',
                    './assets/img/item-page-temp-photo/8939560-4.svg'
                
                ],
                name: 'Водолазка',
                name_of_product: 'гольф',
                id: 1,
                cost: 1200,
                color: 'белый',
                colors: ['#fff','#000','red'],
                sizes: ['S','M','L'],
                title: '',
                product_id: 2749127,
                structure: ['50% шерсть','50% акрил'],
                clean: '30’; 400',
                text: `Стильная и удобная водолазка (гольф) отличный выбор для создания 
                спортивного и классического образа. Прилегающий силуэт, приятное качество. 
                Водолазка - гольф отлично подойдет для базовой вещи, которая сочетается с брюками, 
                джинсами, лосинами, юбками, пиджаками, подходит для сочетания с любой обувью. 
                Безупречно смотрится под меховую жилетку и пальто.`,
            },
            {
                main_img: './assets/img/item-imgs/9794796-2.svg',
                name: 'Водолазка',
                id: 2,
                cost: 1200,
                color: 'белый'
            },
            {
                main_img: './assets/img/item-imgs/10799296-1.svg',
                name: 'Водолазка',
                id: 3,
                cost: 1200,
                color: 'белый'
            },
            {
                main_img: './assets/img/item-imgs/8939560-1.svg',
                name: 'Водолазка',
                id: 4,
                cost: 1200,
                color: 'белый'
            },
            {
                main_img: './assets/img/item-imgs/9794796-2.svg',
                name: 'Водолазка',
                id: 5,
                cost: 1200,
                color: 'белый'
            },
            {
                main_img: './assets/img/item-imgs/10799296-1.svg',
                name: 'Водолазка',
                id: 6,
                cost: 1200,
                color: 'белый'
            },
        ]
    }
]

function create_catalog() {// функция для создания каталога после нажатия на пункт в меню
    nav_menu.addEventListener('click', evt => {
        console.log(evt.target)
        let name_section = evt.target.dataset.name
        arr_items.forEach((item)=>{
            if(item.name_of_section.indexOf(name_section) != -1){
                catalog_page.style.display = 'flex'
                wrapper.style.background = '#fff'
                item.products.forEach(i => {
                    create_item(i)
                    breadcrumbs_link.innerText = name_section
                    catalog_container.insertAdjacentHTML('beforeend',create_item(i))
                })
                catalogBtns ()
                logo_to_main.addEventListener('click',() => {
                    catalog_page.style.display = 'none'
                    item_page_container.style.display = 'none'
                    wrapper.style.background = '#E6E6E4'
                })
            }
        
        })
        sizeTab()
        nav_btn.classList.remove('active_nav_btn')
        nav.classList.remove('active_nav')
        nav.classList.add('hide_nav')
        main_container.style.filter = 'blur(0)' 
    })
}
function create_item(item) {
    return `
        <div class="catalog-item-block">
            <img class="catalog-item-block__item-img" src="${item.main_img}" data-id="${item.id}">
            <div class="catalog-item">
                <div class="catalog-item__name"><p>${item.name}</p></div>
                <div class="catalog-item__btns">
                    <button class="catalog-item__btns__addtofavorite"><img src="../assets/img/icons/addtofavorite.svg" ></button>
                    <button class="catalog-item__btns__addtocart" data-id="${item.id}">+</button>
                </div>
            </div>
            <p>${item.color}</p>
            <p>${item.cost}</p>
        </div>
    `
}
create_catalog ()
function catalogBtns () { // функция перебрасывающая объект в item-page
    let btn_to_item_page = document.querySelector('.catalog-template__container')
    btn_to_item_page.addEventListener('click', evt => {
        if(evt.target.classList.contains('catalog-item-block__item-img') != -1 && (evt.target.dataset.id != undefined)){
            console.log(evt.target.dataset.id)
            arr_items[0].products.forEach(item => {
                if(evt.target.dataset.id == item.id){
                    item_page_container.style.display = 'flex'
                    item_page_section_bread.innerText = item.name
                    item_page_product_bread.innerText = item.name_of_product
                    item_page_gallery_post_1.src = item.imgs[0]
                    item_page_gallery_post_2.src = item.imgs[1]
                    item_page_gallery_post_3.src = item.imgs[2]
                    item_page_gallery_post_4.src = item.imgs[3]
                    item_page_descr_text.innerText = item.text
                    item_page_color_container_firstcolor.style.background =  item.colors[0]
                    item_page_color_container_secondcolor.style.background = item.colors[1]
                    item_page_color_container_thirdcolor.style.background = item.colors[2]
                    item_page_title_of_item.innerText = item.name
                    item_page_id_of_item.innerText = item.product_id
                    item.structure.forEach(i=>{
                        let n = document.createElement('li')
                        n.innerText = i
                        item_page_structure_of_item.appendChild(n)
                    })
                    item.sizes.forEach(i=>{
                        let n = document.createElement('button')
                        n.classList.add('size_btn')
                        n.innerText = i
                        item_page_size_list.appendChild(n)
                    })
                    item_page_clean_recom.innerText = item.clean
                    item_page_cost.innerText = item.cost
                }
            })
            btn_close_item_page.addEventListener('click', () => {
                item_page_container.style.display = 'none'
            })
        }
    })
}


// Authorization 
const authorization_user_btn = document.querySelector('.header__subnav-block__user-btn')
const authorization_block = document.querySelector('.authorization_block')
const sign_in_btn = document.querySelector('.container__title-btn__sign-btn')
const regestration_btn = document.querySelector('.container__title-btn__registration-btn')
const authorization_block_close_btn = document.querySelector('.authorization_block__close-btn')
const registration_block = document.querySelector('.container__content__registration-block')
const sign_in_block = document.querySelector('.container__content__sign-in-block')

authorization_user_btn.addEventListener('click', () => {
    authorization_block.style.display = 'flex'
    main_container.style.filter = 'blur(100px)'
    authorizationLogic()
})

function authorizationLogic () { //для переключения между вкладками в блоке юзера
    sign_in_btn.addEventListener('click', () => {
        sign_in_btn.classList.add('isActivAuthorization')
        regestration_btn.classList.remove('isActivAuthorization')
        sign_in_block.style.display = 'flex'
        registration_block.style.display = 'none'
    })
    regestration_btn.addEventListener('click', () => {
        regestration_btn.classList.add('isActivAuthorization')
        sign_in_btn.classList.remove('isActivAuthorization')
        sign_in_block.style.display = 'none'
        registration_block.style.display = 'flex'
    })
    authorization_block_close_btn.addEventListener('click', () => {
        authorization_block.style.display = 'none'
        main_container.style.filter = 'blur(0px)'
        if(sign_in_btn.classList.contains('isActivAuthorization') == false) {
            sign_in_btn.classList.add('isActivAuthorization')
            regestration_btn.classList.remove('isActivAuthorization')
        }
    })
}

//size-tab
let size_btns = document.querySelector('.size-btn-tab')
const size_tab_close_btn = document.querySelector('.size-tab__close-btn')
const size_tab_container = document.querySelector('.size-tab')
function sizeTab () {
    main_container.addEventListener('click', evt => {
        if(evt.target.classList.contains('size-btn-tab') != 0){
            size_tab_container.style.display = 'flex'
            main_container.style.filter = 'blur(100px)'
            closeSizeTab()
        }
    })
    function closeSizeTab () {
        size_tab_close_btn.addEventListener('click', () => {
            size_tab_container.style.display = 'none'
            main_container.style.filter = 'blur(0px)'
        })
    }
}

function cartProductAdd () {// добавление продукта в блок корзины
    catalog_container.addEventListener('click', evt => {
        console.log(evt.target)
        if(evt.target.classList.contains('catalog-item__btns__addtocart') != -1) {
            let item_id = evt.target.dataset.id
            arr_items[0].products.forEach(item => {
                if(item_id == item.id){
                    count += 1
                    cart_value.innerText = count
                    cartSum += item.cost
                    cart_count.innerHTML = cartSum
                    cart_container.insertAdjacentHTML('beforeend',cartItemTemp(item))
                }
            })
        }
    })
}
function cartItemTemp (item) {
    return `
        <div class="cartItemIn">
            <div class="cartItemIn__photo">
                <img src="${item.main_img}" alt="item-photot">
            </div>
            <div class="cartItemIn__descr">
                <div class="cartItemIn__descr__title">
                    ${item.name}
                </div>
                <div class="cartItemIn__descr__color">${item.color}</div>
                <div class="cartItemIn__descr__size">${item.sizes}</div>
                <div class="cartItemIn__descr__btns">
                    <button class="cartItemIn__descr__btns__remove">-</button>
                    <span class="cartItemIn__descr__btns__count">1</span>
                    <button class="cartItemIn__descr__btns__add">+</button>
                </div>
                <div class="cartItemIn__descr__cost">
                    ${item.cost}
                </div>
            </div>
        </div>
    `
}
cartProductAdd()




//Mobile

//header
let cart_count_mobile = document.querySelector('#mobile-header__cart-btn__count')
cart_count_mobile.innerText = count
const mobLogoBtn = document.querySelector('.mobile-header__logo')
const exArr = [ // пример для ссылок в нач экране
    {
        image: '../assets/img/item-imgs/10799296-1.svg',
        title: 'Рубашки'
    },
    {
        image: '../assets/img/item-imgs/10799296-1.svg',
        title: 'Водолазки'
    },
    {
        image: '../assets/img/item-imgs/10799296-1.svg',
        title: 'Костюмы'
    },
    {
        image: '../assets/img/item-imgs/10799296-1.svg',
        title: 'Боди'
    }
]
const mobileMainPageLinks = document.querySelector('.mobile-circle-catalog')
const banner_mob = document.querySelector('.mobile__banner')
const banner_mob_close_btn = document.querySelector('.mobile__banner__close-btn')
function mobCatalog () { // каталог кружками
    exArr.forEach(item => {
        mobileMainPageLinks.insertAdjacentHTML('beforeend',itemCreate(item))
    }) 
}
let itemCreate = (item) => {
    return `
        <div class="mobile-catalog-item">
            <img src=${item.image} alt="">
            <p>${item.title}</p> 
        </div>
    `
}
window.onload = () => {
    banner_mob.style.display = 'flex'
    main_container.style.filter = 'blur(100px)'
    banner_mob_close_btn.addEventListener('click', () => {
        banner_mob.style.display = 'none'
        main_container.style.filter = 'blur(0px)'
    })
    mobCatalog()
}
const mob_head_logo = document.querySelector('.mobile-header__logo')
const mobile_head_author_btn = document.querySelector('.mobile-header__authorisation-block')
const mobile_nav_btn = document.querySelector('.mobile-header__navigation-btn')
const mobile_nav_block = document.querySelector('.mobile-navigation')

mobile_nav_btn.addEventListener('click',() => {
    if(mobile_nav_block.classList.contains('hide_nav')) {
        mobNavigationActive()
        main_container.style.filter = 'blur(100px)'
    } else {
        mobNavigationClose()
        main_container.style.filter = 'blur(0)'
    }
})
// mobile cart block
// const mobCartBlock = document.querySelector('.mobile-header__cart-btn')
// mobCartBlock.addEventListener('click', () => {
//     if(cart.classList.contains('cart_hide')) {
//         cart.classList.add('cart_active')
//         cart.classList.remove('cart_hide')
//         main_container.style.filter = 'blur(100px)'
//     } else {
//         cart.classList.remove('cart_active')
//         cart.classList.add('cart_hide')
//         main_container.style.filter = 'blur(0)'
//     }
// })

//блок авторизации
const mob_auth_container = document.querySelector('.mobile-authorization')
const mob_authorization_user = document.querySelector('.mobile-header__authorisation-user')
const mob_sign_in_btn = mob_auth_container.querySelector('.container__title-btn__sign-btn')
const mob_regestration_btn = mob_auth_container.querySelector('.container__title-btn__registration-btn')
const mob_authorization_block_close_btn = mob_auth_container.querySelector('.mobile-authorization__close-btn')
const mob_registration_block = mob_auth_container.querySelector('.container__content__registration-block')
const mob_sign_in_block = mob_auth_container.querySelector('.container__content__sign-in-block')

mob_authorization_user.addEventListener('click', () => {
    mob_auth_container.style.display = 'flex'
    main_container.style.filter = 'blur(100px)'
    mobNavigationClose()
    mobAuthorizationLogic()
})

function mobAuthorizationLogic () {
    mob_sign_in_btn.addEventListener('click', () => {
        mob_sign_in_btn.classList.add('isActivAuthorization')
        mob_regestration_btn.classList.remove('isActivAuthorization')
        mob_sign_in_block.style.display = 'flex'
        mob_registration_block.style.display = 'none'
    })
    mob_regestration_btn.addEventListener('click', () => {
        mob_regestration_btn.classList.add('isActivAuthorization')
        mob_sign_in_btn.classList.remove('isActivAuthorization')
        mob_sign_in_block.style.display = 'none'
        mob_registration_block.style.display = 'flex'
    })
    mob_authorization_block_close_btn.addEventListener('click', () => {
        mob_auth_container.style.display = 'none'
        main_container.style.filter = 'blur(0px)'
        if(mob_sign_in_btn.classList.contains('isActivAuthorization') == false) {
            mob_sign_in_btn.classList.add('isActivAuthorization')
            mob_regestration_btn.classList.remove('isActivAuthorization')
        }
    })
}


function mobNavigationActive () {
    mobile_nav_btn.classList.add('active_nav_btn')
    mobile_nav_block.classList.add('active_nav')
    mobile_nav_block.classList.remove('hide_nav')
    mob_head_logo.style.left = '15%'
    mobile_head_author_btn.style.display = 'flex'
}

function mobNavigationClose () {
    mobile_nav_btn.classList.remove('active_nav_btn')
    mobile_nav_block.classList.remove('active_nav')
    mobile_nav_block.classList.add('hide_nav')
    mob_head_logo.style.left = '33.81643%'
    mobile_head_author_btn.style.display = 'none'
}

//mobile size tab
let mobSizeBtns = document.querySelector('.size-btn-tab')
const mobSizeTabCloseBtn = document.querySelector('.mobile-size-tab__close-btn')
const mobSizeTabContainer = document.querySelector('.mobile-size-tab')

function mobSizeTab () {
    main_container.addEventListener('click', evt => {
        if(evt.target.classList.contains('size-btn-tab') != 0){
            mobSizeTabContainer.style.display = 'flex'
            main_container.style.filter = 'blur(100px)'
            mobCloseSizeTab()
        }
    })
    function mobCloseSizeTab () {
        mobSizeTabCloseBtn.addEventListener('click', () => {
            mobSizeTabContainer.style.display = 'none'
            main_container.style.filter = 'blur(0px)'
        })
    }
}

//mobile Catalog function
const mobileNav = document.querySelector('.mob-navigation__container__menu')
function mobCreateCatalog() {
    mobileNav.addEventListener('click', evt => {
        console.log(evt.target)
        let name_section = evt.target.dataset.name
        arr_items.forEach((item)=>{
            if(item.name_of_section.indexOf(name_section) != -1){
                catalog_page.style.display = 'flex'
                wrapper.style.background = '#fff'
                item.products.forEach(i => {
                    breadcrumbs_link.innerText = name_section
                    catalog_container.insertAdjacentHTML('beforeend',create_item(i))
                })
                mobileCatalogBtns ()
                mobLogoBtn.addEventListener('click',() => {
                    catalog_page.style.display = 'none'
                    mobItemPageContainer.style.display = 'none'
                    wrapper.style.background = '#E6E6E4'
                    
                })
            }
        
        })
        mobileMainPageLinks.style.display = 'none'
        mobSizeTab()
        mobNavigationClose()
        main_container.style.filter = 'blur(0)' 
    })
}
mobCreateCatalog()

//mobile-item-page
const mob_item_page_container = document.querySelector('.mobile-item-page')
const mob_btn_close_item_page = mob_item_page_container.querySelector('.closebtn')
//breadcrumbs
let mob_item_page_section_bread = mob_item_page_container.querySelector('.breadcrumbs__section')
let mob_item_page_product_bread = mob_item_page_container.querySelector('.breadcrumbs__nameofitem')
//photos
let mob_item_page_gallery_main_img = mob_item_page_container.querySelector('#main-img')
//main describe
let mob_item_page_descr_text = mob_item_page_container.querySelector('.mobile-item-page__product-details-text')
//colors
let mob_item_page_color_container_firstcolor = mob_item_page_container.querySelector('.choose-color__color_1')
let mob_item_page_color_container_secondcolor = mob_item_page_container.querySelector('.choose-color__color_2')
let mob_item_page_color_container_thirdcolor = mob_item_page_container.querySelector('.choose-color__color_3')
//title
let mob_item_page_title_of_item = mob_item_page_container.querySelector('.product-title__name')
let mob_item_page_id_of_item = mob_item_page_container.querySelector('.product-title__id')
//structure
let mob_item_page_structure_of_item = mob_item_page_container.querySelector('.structure-description__list')
//sizes
let mob_item_page_size_list = mob_item_page_container.querySelector('.size-btns__list')
//clean
let mob_item_page_clean_recom = mob_item_page_container.querySelector('.washing-description__describes')
//price
let mob_item_page_price = mob_item_page_container.querySelector('.product-price__value')
let mob_item_page_add_to_cart_container = document.querySelector('.mobile-item-page__add-to-cart')
let mob_item_page_add_to_cart_btn = mob_item_page_add_to_cart_container.querySelector('.add-to-cart-btn')

let mob_cart_catalog = document.querySelector('.mobile-cart-page__item-catalog')

function mobileCatalogBtns () {
    let btn_to_item_page = document.querySelector('.catalog-template__container')
    btn_to_item_page.addEventListener('click', evt => {
        if(evt.target.classList.contains('catalog-item-block__item-img') != -1 && (evt.target.dataset.id != undefined)){
            console.log(evt.target.dataset.id)
            arr_items[0].products.forEach(item => {
                if(evt.target.dataset.id == item.id){
                    mob_item_page_container.style.display = 'flex'
                    mob_item_page_section_bread.innerText = item.name
                    mob_item_page_product_bread.innerText = item.name_of_product
                    mob_item_page_gallery_main_img.src = item.imgs[0]
                    itemSlider(item)
                    mob_item_page_descr_text.innerText = item.text
                    mob_item_page_color_container_firstcolor.style.background =  item.colors[0]
                    mob_item_page_color_container_secondcolor.style.background = item.colors[1]
                    mob_item_page_color_container_thirdcolor.style.background = item.colors[2]
                    mob_item_page_title_of_item.innerText = item.name
                    mob_item_page_id_of_item.innerText = item.product_id
                    item.structure.forEach(i=>{
                        let n = document.createElement('li')
                        n.innerText = i
                        mob_item_page_structure_of_item.appendChild(n)
                    })
                    item.sizes.forEach(i=>{
                        let n = document.createElement('button')
                        n.classList.add('size_btn')
                        n.innerText = i
                        mob_item_page_size_list.appendChild(n)
                    })
                    mob_item_page_add_to_cart_btn.addEventListener('click', () => {
                        cart_count_mobile.innerText = count++
                        // mob_cart_catalog.insertAdjacentHTML('beforeend',mobileCartItem(item,cart_count_mobile))
                        // console.log(cart_count_mobile)
                    })
                    mob_item_page_clean_recom.innerText = item.clean
                    mob_item_page_price.innerText = item.cost
                }
            })
            mob_btn_close_item_page.addEventListener('click', () => {
                mob_item_page_container.style.display = 'none'
            })
        }
    })
}
// function mobileCartItem (item,count) {
//     return `
//         <div class="mobile-cart-item-block">
//             <div class="mobile-cart-item-block__img"></div>
//             <div class="mobile-cart-item-block__describe">
//                 <div class="describe__title>Водолазка</div>
//                 <div class="describe__color">Белый</div>
//                 <div class="describe__size">M</div>
//                 <div class="describe__btns">
//                     <button>-</button>1
//                     <button>+</button>
//                 </div>
//                 <div class="describe__price">1200р</div>
//             </div>
//             <div class="mobile-cart-item-block__delete-btn"><span></span></div>
//         </div>
    
//     `
// }
// if(document.documentElement.clientWidth <= 800) {}
function itemSlider(item) {
    let mob_slider_main_img = mob_item_page_gallery_main_img
    let mob_slider_lengt = item.imgs.length
    let mob_slider_btns = document.querySelector('.point-btns')
    let btn_arr = []
    if(mob_slider_lengt > 0) {
        for(let i = 0 ; i < mob_slider_lengt ; i++) {
            let n = document.createElement('button')
            n.classList.add('slider-btn')
            n.dataset.id = i
            btn_arr.push(n)
        }
        btn_arr[0].classList.add('active_slider_btn')
        btn_arr.forEach(item => {
            console.log(item)
            mob_slider_btns.appendChild(item)
        })
        mob_slider_btns.addEventListener('click', evt => {
            let active_btn = mob_slider_btns.getElementsByClassName('active_slider_btn')
            console.log(active_btn)
            console.log(evt)
            if(evt.target.dataset.id != active_btn[0].dataset.id) {
                active_btn[0].classList.remove('active_slider_btn')
                mob_slider_main_img.src = item.imgs[evt.target.dataset.id]
                evt.target.classList.add('active_slider_btn')
            }
            
        })
    }
}

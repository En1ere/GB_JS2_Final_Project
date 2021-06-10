Vue.component('main-header', {

    template: `
            <header class="header center">

                <div class="header__left">
                    <a class="logo" href="index.html"><img class="logo__img" src="./img/logo.png" alt="logo">BRAN <span
                            class="letter__d">D</span></a>

                    <filter-goods ref='filter'></filter-goods>
                </div>

                <div class="header__right">
                    <cart ref='cart'></cart>

                    <a href="#" class="button">My Account <i class="fas fa-caret-down"></i></a>
                </div>

            </header>`
})
Vue.component('main-navigation', {

    template: `
            <nav class="center">
                <ul class="menu">
                    <li class="menu__list"><a href="index.html" class="menu__link menu__link-active">Home</a></li>
                    <li class="menu__list menu__list-drop"><a href="catalog_men.html" class="menu__link">Man</a>
                        <div class="drop">
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__ul">
                                    <li><a href="#" class="drop__a">Dresses</a></li>
                                    <li><a href="#" class="drop__a">Tops</a></li>
                                    <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                                    <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                                    <li><a href="#" class="drop__a">Blazers</a></li>
                                    <li><a href="#" class="drop__a">Denim</a></li>
                                    <li><a href="#" class="drop__a">Leggings/Pants</a></li>
                                    <li><a href="#" class="drop__a">Skirts/Shorts</a></li>
                                    <li><a href="#" class="drop__a">Accessories </a></li>
                                </ul>
                            </div>
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__ul">
                                    <li><a href="#" class="drop__a">Dresses</a></li>
                                    <li><a href="#" class="drop__a">Tops</a></li>
                                    <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                                    <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                                </ul>
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__ul">
                                    <li><a href="#" class="drop__a">Dresses</a></li>
                                    <li><a href="#" class="drop__a">Tops</a></li>
                                    <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                                    <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                                </ul>
                            </div>
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__ul">
                                    <li><a href="#" class="drop__a">Dresses</a></li>
                                    <li><a href="#" class="drop__a">Tops</a></li>
                                    <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                                    <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                                </ul>
                                <div class="drop__super-sale">
                                    <a href="#" class="drop__super-sale-link"><span class="drop__super-sale-text">Super
                                            <br>
                                            sale!</span><img src="img/drop_super_sale.jpg" alt=""
                                            class="drop__super-sale-img"></a>
                                </div>
                            </div>
                        </div>
                    </li>


                    <li class="menu__list"><a href="#" class="menu__link">Women</a></li>
                    <li class="menu__list"><a href="#" class="menu__link">Kids</a></li>
                    <li class="menu__list"><a href="#" class="menu__link">Accoseriese</a></li>
                    <li class="menu__list"><a href="#" class="menu__link">Featured</a></li>
                    <li class="menu__list"><a href="#" class="menu__link">Hot Deals </a></li>
                </ul>
            </nav>`
})
Vue.component('main-promo', {

    template: `
            <div class="promo">
                <div class="promo__content center">
                    <img class="promo__line" src="img/line.png" alt="line">
                    <p class="promo__text"><span class="promo__text1">THE BRAND</span><br>
                        OF LUXERIOUS <span class="promo__text2">FASHION</span></p>
                </div>
            </div>`
})
Vue.component('main-trends', {

    template: `
            <div class="trends center">

                <div class="trends__left">

                    <div class="men"><a class="trends__text" href="#">hOT dEAL<br><span class="trends__text2">FOR
                                MEN</span></a></div>

                    <div class="purse"><a class="trends__text" href="#">LUXIROUS &amp; trendy<br><span
                                class="trends__text2">ACCESORIES</span></a>
                    </div>

                </div>

                <div class="trends__right">
                    <div class="women"><a class="trends__text" href="#">30% offer<br><span
                                class="trends__text2">women</span></a></div>
                    <div class="kid"><a class="trends__text" href="#">new arrivals<br><span class="trends__text2">FOR
                                kids</span></a></div>
                </div>


            </div>`
})
Vue.component('main-bonus', {

    template: `
            <div class="bonus center">

                <div class="bonus__left">
                    <p class="bonus__text">30&#37; <span class="bonus__text1">OFFER</span><br><span
                            class="bonus__text2">FOR WOMEN</span></p>
                </div>

                <div class="bonus__right">

                    <div class="bonus__content bonus__content1">
                        <img src="img/car.svg" alt="car">
                        <p class="bonus__description"><span class="bonus__header">Free Delivery</span><br>Worldwide
                            delivery on all. Authorit <br> tively morph next-generation innov <br> tion with extensive
                            models.</p>
                    </div>

                    <div class="bonus__content bonus__content2">
                        <img src="img/percent.svg" alt="per">
                        <p class="bonus__description"><span class="bonus__header">Sales &amp;
                                discounts</span><br>Worldwide delivery on all. Authorit <br> tively morph
                            next-generation innov <br> tion with extensive models.</p>
                    </div>

                    <div class="bonus__content bonus__content3">
                        <img src="img/crown.svg" alt="crown">
                        <p class="bonus__description"><span class="bonus__header">Quality assurance</span><br>Worldwide
                            delivery on all. Authorit <br> tively morph next-generation innov <br> tion with extensive
                            models.</p>
                    </div>

                </div>

            </div>`
})
Vue.component('main-feedback', {

    template: `
            <div class="feedback center">

                <article>
                    <div class="article1">
                        <div><a href="#"><img class="foto" src="img/foto.png" alt="foto"></a></div>
                        <div class="quote">
                            <p class="quote__text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi,<br> a
                                pulvinar purus condimentum a. Aliquam condimentum <br> mattis neque sed pretium”</p><br>
                            <span class="quote__autor">Bin Burhan</span><br>
                            <span class="quote__bottom">Dhaka, Bd</span>
                        </div>
                    </div>
                    <div class="feedback__pages">

                        <a class="page__feedback" href="#"><i class="far fa-window-minimize"></i></a>
                        <a class="page__feedback" href="#"><i
                                class="far fa-window-minimize fa-window-minimize-active"></i></a>
                        <a class="page__feedback" href="#"><i class="far fa-window-minimize"></i></a>

                    </div>

                </article>

                <div class="feedback__right">
                    <p class="feedback__sub-text">Subscribe<br>
                        <span class="feedback__sub-text-under">FOR OUR NEWLETTER AND PROMOTION</span>
                    </p>

                    <form action="#">

                        <input class="subscribe__text" type="email" placeholder="Enter your Email"><button
                            class="subscribe__button" type="submit">Subscribe</button>

                    </form>

                </div>

            </div>`
})
Vue.component('main-info', {

    template: `
            <div class="bottom center">

                <div class="bottom__left">
                    <a class="logo logo__bottom" href="index.html"><img class="logo__img" src="img/logo.png"
                            alt="logo">BRAN <span class="letter__d">D</span></a>
                    <p class="bottom__text-left">
                        Objectively transition extensive data rather than cross functional <br> solutions.
                        Monotonectally syndicate multidisciplinary materials <br> before go forward benefits.
                        Intrinsicly syndicate an expanded array <br> of processes and cross-unit partnerships. <br><br>

                        Efficiently plagiarize 24/365 action items and focused infomediaries. <br>
                        Distinctively seize superior initiatives for wireless technologies. <br> Dynamically optimize.
                    </p>
                </div>

                <div class="bottom__company">

                    <h2 class="bottom__header">Company</h2>
                    <ul>
                        <a href="#" class="bottom__link">
                            <li class="bottom__text">Home</li>
                        </a>
                        <a href="#" class="bottom__link">
                            <li class="bottom__text">Shop</li>
                        </a>
                        <a href="#" class="bottom__link">
                            <li class="bottom__text">About</li>
                        </a>
                        <a href="#" class="bottom__link">
                            <li class="bottom__text">How It Works</li>
                        </a>
                        <a href="#" class="bottom__link">
                            <li class="bottom__text">Contact</li>
                        </a>
                    </ul>

                </div>

                <div class="bottom__information">

                    <h2 class="bottom__header">Information</h2>
                    <ul>
                        <a href="#" class="bottom__link">
                            <li class="bottom__text">Tearms &amp; Condition</li>
                        </a>
                        <a href="#" class="bottom__link">
                            <li class="bottom__text">Privacy Policy</li>
                        </a>
                        <a href="#" class="bottom__link">
                            <li class="bottom__text">How to Buy</li>
                        </a>
                        <a href="#" class="bottom__link">
                            <li class="bottom__text">How to Sell</li>
                        </a>
                        <a href="#" class="bottom__link">
                            <li class="bottom__text">Promotion</li>
                        </a>
                    </ul>

                </div>

                <div class="bottom__category">

                    <h2 class="bottom__header">Shop Category</h2>
                    <ul>
                        <a href="#" class="bottom__link">
                            <li class="bottom__text">Men</li>
                        </a>
                        <a href="#" class="bottom__link">
                            <li class="bottom__text">Women</li>
                        </a>
                        <a href="#" class="bottom__link">
                            <li class="bottom__text">Child</li>
                        </a>
                        <a href="#" class="bottom__link">
                            <li class="bottom__text">Apparel</li>
                        </a>
                        <a href="#" class="bottom__link">
                            <li class="bottom__text">Brows All</li>
                        </a>
                    </ul>

                </div>


            </div>`
})
Vue.component('main-footer', {

    template: `
        <footer class="footer center">

            <p class="copyright">&copy; 2020 Brand All Rights Reserved.</p>

            <p class="social__links">
                <a href="#"><i class="fab fa-facebook-square social__link"></i></a>
                <a href="#"><i class="fab fa-twitter-square social__link"></i></a>
                <a href="#"><i class="fab fa-linkedin social__link"></i></a>
                <a href="#"><i class="fab fa-pinterest-square social__link"></i></a>
                <a href="#"><i class="fab fa-google-plus-square social__link"></i></a>
            </p>

        </footer>`
})

Vue.component('catalog-navigation', {

    template: `
            <nav class="center">
                <ul class="menu">
                    <li class="menu__list"><a href="index.html" class="menu__link">Home</a></li>
                    <li class="menu__list menu__list-drop"><a href="catalog_men.html" class="menu__link menu__link-active">Man</a>
                        <div class="drop">
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__ul">
                                    <li><a href="#" class="drop__a">Dresses</a></li>
                                    <li><a href="#" class="drop__a">Tops</a></li>
                                    <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                                    <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                                    <li><a href="#" class="drop__a">Blazers</a></li>
                                    <li><a href="#" class="drop__a">Denim</a></li>
                                    <li><a href="#" class="drop__a">Leggings/Pants</a></li>
                                    <li><a href="#" class="drop__a">Skirts/Shorts</a></li>
                                    <li><a href="#" class="drop__a">Accessories </a></li>
                                </ul>
                            </div>
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__ul">
                                    <li><a href="#" class="drop__a">Dresses</a></li>
                                    <li><a href="#" class="drop__a">Tops</a></li>
                                    <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                                    <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                                </ul>
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__ul">
                                    <li><a href="#" class="drop__a">Dresses</a></li>
                                    <li><a href="#" class="drop__a">Tops</a></li>
                                    <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                                    <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                                </ul>
                            </div>
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__ul">
                                    <li><a href="#" class="drop__a">Dresses</a></li>
                                    <li><a href="#" class="drop__a">Tops</a></li>
                                    <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                                    <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                                </ul>
                                <div class="drop__super-sale">
                                    <a href="#" class="drop__super-sale-link"><span class="drop__super-sale-text">Super
                                            <br>
                                            sale!</span><img src="img/drop_super_sale.jpg" alt=""
                                            class="drop__super-sale-img"></a>
                                </div>
                            </div>
                        </div>
                    </li>


                    <li class="menu__list"><a href="#" class="menu__link">Women</a></li>
                    <li class="menu__list"><a href="#" class="menu__link">Kids</a></li>
                    <li class="menu__list"><a href="#" class="menu__link">Accoseriese</a></li>
                    <li class="menu__list"><a href="#" class="menu__link">Featured</a></li>
                    <li class="menu__list"><a href="#" class="menu__link">Hot Deals </a></li>
                </ul>
            </nav>`
})
Vue.component('catalog-breadcrumbs', {

    template: `
            <div class="breadcrumbs center">
                <div>
                    <h2 class="new__arrivals">New Arrivals</h2>
                </div>
                <div class="breadcrumbs__links">
                    <a href="#" class="breadcrumbs__link">Home</a> /
                    <a href="#" class="breadcrumbs__link">Men</a> /
                    <a href="#" class="breadcrumbs__link breadcrumbs__link-active">New Arrivals </a>
                </div>
            </div>`
})
Vue.component('catalog-content', {

    template: `
            <div class="content__men center">

                <div class="content__men-left">

                    <div class="categories">
                        <div class="categories__space">
                            <img class="categories__img" src="img/line_category.svg" alt="line">
                            <a href="#"
                                class="categories__catalog categories__catalog-active categories__catalog-text">Category<i
                                    class="fas fa-caret-up categories__catalog categories__arrow categories__catalog-active"></i></a>
                        </div>
                    </div>

                    <div class="categories__target">
                        <ul>
                            <li class="categories__list"><a href="#" class="categories__link">Accessories</a></li>
                            <li class="categories__list"><a href="#" class="categories__link">Bags</a></li>
                            <li class="categories__list"><a href="#" class="categories__link">Denim</a></li>
                            <li class="categories__list"><a href="#" class="categories__link">Hoodies &amp;
                                    Sweatshirts</a></li>
                            <li class="categories__list"><a href="#" class="categories__link">Jackets &amp; Coats</a>
                            </li>
                            <li class="categories__list"><a href="#" class="categories__link">Pants</a></li>
                            <li class="categories__list"><a href="#" class="categories__link">Polos</a></li>
                            <li class="categories__list"><a href="#" class="categories__link">Shirts</a></li>
                            <li class="categories__list"><a href="#" class="categories__link">Shoes</a></li>
                            <li class="categories__list"><a href="#" class="categories__link">Shorts</a></li>
                            <li class="categories__list"><a href="#" class="categories__link">Sweaters &amp; Knits</a>
                            </li>
                            <li class="categories__list"><a href="#" class="categories__link">T-Shirts</a></li>
                            <li class="categories__list"><a href="#" class="categories__link">Tanks</a></li>
                        </ul>
                    </div>

                    <div class="categories">
                        <div class="categories__space">
                            <img class="categories__img" src="img/line_category.svg" alt="line">
                            <a href="#" class="categories__catalog categories__catalog-text">Category<i
                                    class="fas fa-caret-down categories__catalog categories__arrow"></i></a>
                        </div>
                    </div>

                    <div class="categories">
                        <div class="categories__space">
                            <img class="categories__img" src="img/line_category.svg" alt="line">
                            <a href="#" class="categories__catalog categories__catalog-text">Category<i
                                    class="fas fa-caret-down  categories__catalog categories__arrow"></i></a>
                        </div>
                    </div>

                </div>

                <div class="content__men-right">

                    <div class="filter">

                        <div class="trending__now">

                            <h3 class="filter__header">Trending Now</h3>

                            <div>
                                <a href="#" class="trending__now-link">Bohemian</a> <span
                                    class="sep">&nbsp;|&nbsp;</span>
                                <a href="#" class="trending__now-link">Floral</a> <span class="sep">&nbsp;|&nbsp;</span>
                                <a href="#" class="trending__now-link">Lace</a> <span class="sep">&nbsp;|&nbsp;</span>
                                <br>
                                <a href="#" class="trending__now-link">Floral</a> <span class="sep">&nbsp;|&nbsp;</span>
                                <a href="#" class="trending__now-link">Lace</a> <span class="sep">&nbsp;|&nbsp;</span>
                                <a href="#" class="trending__now-link">Bohemian</a>
                            </div>
                        </div>

                        <div class="filter__size">

                            <h3 class="filter__header">Size</h3>

                            <div>
                                <input class="filter__checkbox" type="checkbox" name="XXS" value="XXS" id="xxs">
                                <label for="xxs" class="filter__checkbox-text">XXS</label>

                                <input class="filter__checkbox" type="checkbox" name="XS" value="XS" id="xs">
                                <label for="xs" class="filter__checkbox-text">XS</label>

                                <input class="filter__checkbox" type="checkbox" name="S" value="S" id="s">
                                <label for="s" class="filter__checkbox-text">S</label>

                                <input class="filter__checkbox" type="checkbox" name="M" value="M" id="M">
                                <label for="M" class="filter__checkbox-text">M</label><br>

                                <input class="filter__checkbox" type="checkbox" name="L" value="L" id="L">
                                <label for="L" class="filter__checkbox-text">l</label>

                                <input class="filter__checkbox" type="checkbox" name="XL" value="XL" id="XL">
                                <label for="XL" class="filter__checkbox-text">XL</label>

                                <input class="filter__checkbox" type="checkbox" name="XXL" value="XXL" id="XXL">
                                <label for="XXL" class="filter__checkbox-text">XXL</label>
                            </div>

                        </div>

                        <div class="filter__price">

                            <h3 class="filter__header">Price</h3>

                            <div class="filter__price-slider">

                                <div class="multi__range-slider">
                                    <input type="range" id="input-left" min="0" max="1000" value="52">
                                    <input type="range" id="input-right" min="0" max="1000" value="400">

                                    <div class="price__slider">
                                        <div class="track"></div>
                                        <div class="range"></div>
                                        <div class="thumb left"></div>
                                        <div class="thumb right"></div>
                                    </div>
                                </div>


                                <div class="filter__price-text-block">
                                    <div><span class="filter__price-text">&#36;</span><input
                                            class="value-left filter__price-text" value="0"></div>
                                    <div><span class="filter__price-text">&#36;</span><input
                                            class="value-right filter__price-text" value="0"></div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div class="sort">
                        <p class="sort__text">Sort By</p>
                        <select class="sort__text2">
                            <option value="Name">Name</option>
                        </select>

                        <p class="sort__text">Show</p>
                        <select class="sort__text2">
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                            <option value="4">04</option>
                            <option value="5">05</option>
                            <option value="6">06</option>
                            <option value="7">07</option>
                            <option value="8">08</option>
                            <option value="9">09</option>
                        </select>

                    </div>

                    <products ref="products"></products>

                    <div class="pagination__catalog-pages">

                        <div class="pagination__catalog">

                            <a href="#" class="pagination__catalog-link"><i class="fas fa-angle-left"></i></a><a
                                href="#" class="pagination__catalog-link pagination__catalog-link-active">1</a><a
                                href="#" class="pagination__catalog-link">2</a><a href="#"
                                class="pagination__catalog-link">3</a><a href="#"
                                class="pagination__catalog-link">4</a><a href="#"
                                class="pagination__catalog-link">5</a><a href="#"
                                class="pagination__catalog-link">6</a><a href="#" class="pagination__catalog-link">. .
                                .</a><a href="#" class="pagination__catalog-link">20</a><a href="#"
                                class="pagination__catalog-link pagination__catalog-link-active"><i
                                    class="fas fa-angle-right"></i></a>

                        </div>

                        <div class="view__catalog-button">

                            <a href="#" class="view__catalog-button-link">View All</a>

                        </div>

                    </div>

                </div>

            </div>`
})
Vue.component('catalog-bonus', {

    template: `
            <div class="bonus__catalog center">

                <div class="bonus__catalog-content">
                    <img class="bonus__catalog-img" src="img/car.svg" alt="car">
                    <h3 class="bonus__catalog-header">Free Delivery</h3>
                    <p class="bonus__catalog-text">Worldwide delivery on all. Authorit tively morph<br>next-generation
                        innov tion with extensive models.</p>
                </div>

                <div class="bonus__catalog-content">
                    <img class="bonus__catalog-img" src="img/percent.svg" alt="car">
                    <h3 class="bonus__catalog-header">Sales &amp; discounts</h3>
                    <p class="bonus__catalog-text">Worldwide delivery on all. Authorit tively morph<br>next-generation
                        innov tion with extensive models.</p>
                </div>

                <div class="bonus__catalog-content">
                    <img class="bonus__catalog-img" src="img/crown.svg" alt="car">
                    <h3 class="bonus__catalog-header">Quality assurance</h3>
                    <p class="bonus__catalog-text">Worldwide delivery on all. Authorit tively morph<br>next-generation
                        innov tion with extensive models.</p>
                </div>

            </div>`
})

Vue.component('checkout-navigation', {

    template: `
            <nav class="center">
                <ul class="menu">
                    <li class="menu__list"><a href="index.html" class="menu__link">Home</a></li>
                    <li class="menu__list menu__list-drop"><a href="catalog_men.html" class="menu__link">Man</a>
                        <div class="drop">
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__ul">
                                    <li><a href="#" class="drop__a">Dresses</a></li>
                                    <li><a href="#" class="drop__a">Tops</a></li>
                                    <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                                    <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                                    <li><a href="#" class="drop__a">Blazers</a></li>
                                    <li><a href="#" class="drop__a">Denim</a></li>
                                    <li><a href="#" class="drop__a">Leggings/Pants</a></li>
                                    <li><a href="#" class="drop__a">Skirts/Shorts</a></li>
                                    <li><a href="#" class="drop__a">Accessories </a></li>
                                </ul>
                            </div>
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__ul">
                                    <li><a href="#" class="drop__a">Dresses</a></li>
                                    <li><a href="#" class="drop__a">Tops</a></li>
                                    <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                                    <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                                </ul>
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__ul">
                                    <li><a href="#" class="drop__a">Dresses</a></li>
                                    <li><a href="#" class="drop__a">Tops</a></li>
                                    <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                                    <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                                </ul>
                            </div>
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__ul">
                                    <li><a href="#" class="drop__a">Dresses</a></li>
                                    <li><a href="#" class="drop__a">Tops</a></li>
                                    <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                                    <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                                </ul>
                                <div class="drop__super-sale">
                                    <a href="#" class="drop__super-sale-link"><span class="drop__super-sale-text">Super
                                            <br>
                                            sale!</span><img src="img/drop_super_sale.jpg" alt=""
                                            class="drop__super-sale-img"></a>
                                </div>
                            </div>
                        </div>
                    </li>


                    <li class="menu__list"><a href="#" class="menu__link">Women</a></li>
                    <li class="menu__list"><a href="#" class="menu__link">Kids</a></li>
                    <li class="menu__list"><a href="#" class="menu__link">Accoseriese</a></li>
                    <li class="menu__list"><a href="#" class="menu__link">Featured</a></li>
                    <li class="menu__list"><a href="#" class="menu__link">Hot Deals </a></li>
                </ul>
            </nav>`
})
Vue.component('checkout-content', {
    
    template: `
            <section class="checkout__section center">

                <ul>
                    <li class="checkout__section-list checkout__section-list-active"><a href="#"
                            class="checkout__section-link">01.&nbsp;&nbsp;Shipping Adress</a></li>

                    <div class="shipping__address">

                        <div class="shipping__address-left">

                            <h3 class="shipping__address-head">Check as a guest or register</h3>

                            <p class="shipping__address-text-small">Register with us for future convenience</p>

                            <form action="#">

                                <div class="shipping__address-radios">
                                    <div><input name="register" type="radio" value="guest"
                                            class="shipping__address-radio"><span
                                            class="shipping__address-radio-text">checkout as guest</span></div>
                                    <div><input name="register" checked type="radio" value="register"
                                            class="shipping__address-radio"><span
                                            class="shipping__address-radio-text">register</span></div>
                                </div>

                                <h3 class="shipping__address-head">register and save time</h3>
                                <p class="shipping__address-text-small">Register with us for future convenience</p>

                                <div class="shipping__address-text-small-list">
                                    <p class="shipping__address-text-small2">&raquo; Fast and easy checkout</p>
                                    <p class="shipping__address-text-small2">&raquo; Easy access to your order history
                                        and status</p>
                                </div>

                                <input type="submit" value="Continue" class="checkout__button">

                            </form>

                        </div>

                        <div class="shipping__address-right">

                            <div class="register__below">
                                <h3 class="shipping__address-head">Already registed?</h3>

                                <a href="#" class="login__below">Please log in below</a>
                            </div>

                            <form action="#">

                                <p class="shipping__address-head2">EMAIL ADDRESS</p>
                                <input type="email" name="login" class="checkout__input">

                                <p class="shipping__address-head2">PASSWORD <span
                                        class="required__fields-star">&#42;</span></p>
                                <input type="password" name="password" class="checkout__input">

                                <p class="required__fields-star">* Required Fileds</p>

                                <input type="submit" value="LOG IN" class="checkout__button">

                                <a href="#" class="forgot__password">Forgot Password ?</a>

                            </form>

                        </div>

                    </div>

                    <li class="checkout__section-list"><a href="#" class="checkout__section-link">02.&nbsp;&nbsp;BILLING
                            INFORMATION</a></li>
                    <li class="checkout__section-list"><a href="#"
                            class="checkout__section-link">03.&nbsp;&nbsp;SHIPPING
                            INFORMATION</a></li>
                    <li class="checkout__section-list"><a href="#"
                            class="checkout__section-link">04.&nbsp;&nbsp;SHIPPING
                            METHOD</a></li>
                    <li class="checkout__section-list"><a href="#" class="checkout__section-link">05.&nbsp;&nbsp;PAYMENT
                            METHOD</a></li>
                    <li class="checkout__section-list"><a href="#" class="checkout__section-link">06.&nbsp;&nbsp;ORDER
                            REVIEW</a></li>
                </ul>

            </section>`
})

Vue.component('product-content', {

    template: `
            <section>
                <h2 class="product__page-also-like">you may like also</h2>
                <div class="product__page-also-like-products center">

                    <div class="product">
                        <a href="#"><img class="product__img" src="img/product_page_like_also1.jpg" alt="photo"></a>
                        <div class="product__content">
                            <a href="#" class="product__name">Mango People T-shirt</a>
                            <p class="product__price">$52.00</p>
                        </div>
                        <a href="#" class="product__add">Add to Cart</a>
                    </div>
                    <div class="product">
                        <a href="#"><img class="product__img" src="img/product_page_like_also1.jpg" alt="photo"></a>
                        <div class="product__content">
                            <a href="#" class="product__name">Mango People T-shirt</a>
                            <p class="product__price">$52.00</p>
                        </div>
                        <a href="#" class="product__add">Add to Cart</a>
                    </div>
                    <div class="product">
                        <a href="#"><img class="product__img" src="img/product_page_like_also1.jpg" alt="photo"></a>
                        <div class="product__content">
                            <a href="#" class="product__name">Mango People T-shirt</a>
                            <p class="product__price">$52.00</p>
                        </div>
                        <a href="#" class="product__add">Add to Cart</a>
                    </div>
                    <div class="product">
                        <a href="#"><img class="product__img" src="img/product_page_like_also1.jpg" alt="photo"></a>
                        <div class="product__content">
                            <a href="#" class="product__name">Mango People T-shirt</a>
                            <p class="product__price">$52.00</p>
                        </div>
                        <a href="#" class="product__add">Add to Cart</a>
                    </div>

                </div>
            </section>`
})

Vue.component('cart-content', {

    template: `
            <section class="shopping__cart-content center">

                <div class="shopping__cart-content-head">
                    <p class="shopping__cart-content-head-text">Product Details</p>
                    <p class="shopping__cart-content-head-text">unite Price</p>
                    <p class="shopping__cart-content-head-text">Quantity</p>
                    <p class="shopping__cart-content-head-text">shipping</p>
                    <p class="shopping__cart-content-head-text">Subtotal</p>
                    <p class="shopping__cart-content-head-text">ACTION</p>
                </div>
                <div class="shopping__cart-products">
                    <cart-page></cart-page>

                </div>
                <div class="shopping__cart-buttons">

                    <a href="#" class="shopping__cart-button">cLEAR SHOPPING CART</a>
                    <a href="catalog_men.html" class="shopping__cart-button">cONTINUE sHOPPING</a>

                </div>
                <div class="shopping__cart-bottom">

                    <div class="shopping__cart-bottom-address">

                        <h3 class="shopping__cart-bottom-head">Shipping Adress</h3>

                        <select class="shopping__cart-bottom-input">
                            <option selected value="1">Bangladesh</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                            <option value="4">04</option>
                            <option value="5">05</option>
                            <option value="6">06</option>
                            <option value="7">07</option>
                            <option value="8">08</option>
                            <option value="9">09</option>
                        </select>

                        <input placeholder="State" class="shopping__cart-bottom-input" type="text">

                        <input placeholder="Postcode / Zip" class="shopping__cart-bottom-input" type="text"><br>

                        <a href="#" class="shopping__cart-bottom-button">get a quote</a>

                    </div>

                    <div class="shopping__cart-bottom-coupon">

                        <h3 class="shopping__cart-bottom-head">coupon discount</h3>
                        <p class="shopping__cart-bottom-coupon-text">Enter your coupon code if you have one</p>
                        <input placeholder="State" class="shopping__cart-bottom-input" type="text"><br>
                        <a href="#" class="shopping__cart-bottom-button">Apply coupon</a>

                    </div>
                    <cart-price-page></cart-price-page>

                </div>

            </section>`
})
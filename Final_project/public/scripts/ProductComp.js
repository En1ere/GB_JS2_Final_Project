Vue.component('products', {
    data() {
        return {
            products: [],
            filtered: [],
        }
    },
    methods: {
        filter(search) {
            let regexp = new RegExp(search, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        },
    },
    mounted() {
        this.$parent.getJson('/api/products')
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    template: `<section class="product__box-catalog">
                    <product v-for="product of filtered" :key="product.id_product" :product="product"></product>
                </section>`,
});

Vue.component('product', {
    props: ['product'],
    template: `<div class="product">
                    <a href="../product_page.html" @click='this.$root.$refs.handler.goToProductPage(product)'><img class="product__img" :src="product.img" alt="Some_img"></a>
                    <div class="product__content">
                        <a href="#" class="product__name">{{ product.product_name }}</a>
                        <p class="product__price">&#36;{{ product.price }}</p>
                    </div>
                    <button class="product__add" @click='$root.$refs.cart.addProduct(product)'>Add to Cart</button>
                    <div class="product__catalog-hover">
                        <a href="#" class="product__add-reload"><i class="fas fa-retweet"></i></a>
                        <a href="#" class="product__add-like"><i class="far fa-heart"></i></a>
                    </div>
                </div>`
});

// Vue.component('product-page', {
//     props: ['product'],
//     template: `<section class="product__page">

//                     <section class="product__page-img-slider">
//                         <a href="#" class="product__page-img-slider-link"><i class="fas fa-angle-left"></i></a>
//                         <img :src="this.$root.$refs.handler.productPage.img" alt="product_img">
//                         <a href="#" class="product__page-img-slider-link"><i class="fas fa-angle-right"></i></a>
//                     </section>

//                     <div class="product__page-description">
//                         <div class="product__page-description-charachteristic">
//                             <h3 class="product__page-description-head">WOMEN COLLECTION</h3>
//                             <div class="product__page-description-pagination">
//                                 <a href="#" class="product__page-description-pagination-link"><i
//                                         class="far fa-window-minimize"></i></a><a href="#"
//                                     class="product__page-description-link product__page-description-pagination-link-active"><i
//                                         class="far fa-window-minimize"></i></a><a href="#"
//                                     class="product__page-description-pagination-link"><i
//                                         class="far fa-window-minimize"></i></a>
//                             </div>

//                             <h2 class="product__page-description-head2">{{ this.$root.$refs.handler.productPage.product_name }}</h2>
//                             <p class="product__page-description-text">Compellingly actualize fully researched processes
//                                 before proactive outsourcing. Progressively syndicate collaborative architectures before
//                                 cutting-edge services. Completely visualize parallel core competencies rather than
//                                 exceptional portals.</p>
//                             <div class="product__page-description-specifications">
//                                 <p class="product__page-description-specification">MATERIAL: <span
//                                         class="product__page-description-specification2">COTTON</span></p>
//                                 <p class="product__page-description-specification">DESIGNER: <span
//                                         class="product__page-description-specification2">BINBURHAN</span></p>
//                             </div>
//                             <p class="product__page-description-price">&#36;{{ this.$root.$refs.handler.productPage.price }}</p>
//                         </div>

//                         <div class="product__page-description-feature">
//                             <div class="product__page-description-feature-input">
//                                 <div class="product__page-description-feature-color">
//                                     <h2 class="product__page-description-feature-head">CHOOSE COLOR</h2>
//                                     <select class="product__page-description-feature-select">
//                                         <option value="red">Red</option>
//                                     </select>
//                                 </div>

//                                 <div class="product__page-description-feature-size">
//                                     <h2 class="product__page-description-feature-head">CHOOSE SIZE</h2>
//                                     <select class="product__page-description-feature-select">
//                                         <option value="XXL">XXL</option>
//                                     </select>
//                                 </div>
//                                 <div class="product__page-description-feature-quantity">
//                                     <h2 class="product__page-description-feature-head">QUANTITY</h2>
//                                     <input type="number" class="product__page-description-feature-select" placeholder="2">
//                                 </div>

//                             </div>
//                             <button class="product__page-description-feature-add-to-cart-link" @click='$root.$refs.cart.addProduct(product)
//                             ><i class="fas fa-shopping-cart"></i> Add to Cart</button>
//                         </div>
//                     </div>
//                 </section>`
// })
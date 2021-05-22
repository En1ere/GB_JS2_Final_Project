Vue.component('handler', {
    data() {
        return {
            productPage: {},
        }
    },
    methods: {
        goToProductPage(product) {
            const { product_name, price, img } = product;
            productPage.product_name = product_name;
            productPage.price = price;
            productPage.img = img;
            console.log('handler')
        }
    },
    template: `<section class="product__page">

                    <section class="product__page-img-slider">
                        <a href="#" class="product__page-img-slider-link"><i class="fas fa-angle-left"></i></a>
                        <img :src="this.productPage.img" alt="product_img">
                        <a href="#" class="product__page-img-slider-link"><i class="fas fa-angle-right"></i></a>
                    </section>

                    <div class="product__page-description">
                        <div class="product__page-description-charachteristic">
                            <h3 class="product__page-description-head">WOMEN COLLECTION</h3>
                            <div class="product__page-description-pagination">
                                <a href="#" class="product__page-description-pagination-link"><i
                                        class="far fa-window-minimize"></i></a><a href="#"
                                    class="product__page-description-link product__page-description-pagination-link-active"><i
                                        class="far fa-window-minimize"></i></a><a href="#"
                                    class="product__page-description-pagination-link"><i
                                        class="far fa-window-minimize"></i></a>
                            </div>

                            <h2 class="product__page-description-head2">{{ this.productPage.product_name }}</h2>
                            <p class="product__page-description-text">Compellingly actualize fully researched processes
                                before proactive outsourcing. Progressively syndicate collaborative architectures before
                                cutting-edge services. Completely visualize parallel core competencies rather than
                                exceptional portals.</p>
                            <div class="product__page-description-specifications">
                                <p class="product__page-description-specification">MATERIAL: <span
                                        class="product__page-description-specification2">COTTON</span></p>
                                <p class="product__page-description-specification">DESIGNER: <span
                                        class="product__page-description-specification2">BINBURHAN</span></p>
                            </div>
                            <p class="product__page-description-price">&#36;{{ this.productPage.price }}</p>
                        </div>

                        <div class="product__page-description-feature">
                            <div class="product__page-description-feature-input">
                                <div class="product__page-description-feature-color">
                                    <h2 class="product__page-description-feature-head">CHOOSE COLOR</h2>
                                    <select class="product__page-description-feature-select">
                                        <option value="red">Red</option>
                                    </select>
                                </div>

                                <div class="product__page-description-feature-size">
                                    <h2 class="product__page-description-feature-head">CHOOSE SIZE</h2>
                                    <select class="product__page-description-feature-select">
                                        <option value="XXL">XXL</option>
                                    </select>
                                </div>
                                <div class="product__page-description-feature-quantity">
                                    <h2 class="product__page-description-feature-head">QUANTITY</h2>
                                    <input type="number" class="product__page-description-feature-select" placeholder="2">
                                </div>

                            </div>
                            <button class="product__page-description-feature-add-to-cart-link" @click='$root.$refs.cart.addProduct(product)'
                            ><i class="fas fa-shopping-cart"></i> Add to Cart</button>
                        </div>
                    </div>
                </section>`
})
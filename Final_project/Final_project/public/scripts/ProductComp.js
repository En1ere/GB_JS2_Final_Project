Vue.component('products', {
    data() {
        return {
            products: [],
            filtered: [],
            product: {
                id_product: 0,
                product_name: '',
                price: 0,
                img: '',
            },
        }
    },
    methods: {
        filter(search) {
            let regexp = new RegExp(search, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        },

        goToProductPage(product) {
            this.$parent.postJson(`/api/product/`, product)
                .then(data => {
                    if (data.result === 1) {
                        this.product.id_product = data.id_product,
                        this.product.product_name = data.product_name,
                        this.product.price = data.price,
                        this.product.img = data.img
                    }
                });
                console.log(this.product)
        }
    },
    mounted() {
        this.$parent.getJson('/api/products')
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
        console.log(this)
    },
    template: `<section class="product__box-catalog">
                    <product v-for="product of filtered" :key="product.id_product" :product="product"></product>
                </section>`,
});

Vue.component('product', {
    props: ['product'],
    template: `<div class="product">
                    <a href="../product_page.html" @click='this.goToProductPage(product)'><img class="product__img" :src="product.img" alt="Some_img"></a>
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
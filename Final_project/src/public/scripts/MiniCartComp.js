Vue.component('cart', {
    data() {
        return {
            cartUrl: '',
            isVisibleCart: false,
            cartItems: [],
        }
    },
    methods: {
        addProduct(product) {
            let find = this.cartItems.find(el => el.id_product === product.id_product);
            if (find) {
                this.$parent.putJson(`/api/cart/${find.id_product}`, { quantity: 1 });
                find.quantity++;
            } else {
                let prod = Object.assign({ quantity: 1 }, product);
                this.$parent.postJson('/api/cart', prod)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.push(prod);
                        }
                    });
            }
        },
        remove(product) {
            if (product.quantity > 1) {
                this.$parent.putJson(`/api/cart/${product.id_product}`, { quantity: -1 })
                    .then(data => {
                        if (data.result === 1) {
                            product.quantity--;
                        }
                    });
            } else {
                this.$parent.deleteJson(`/api/cart/${product.id_product}`)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.splice(this.cartItems.indexOf(product), 1);
                        }
                    });
            }
        },
    },
    computed: {
        calcTotalSum() {
            let totalSum = 0;
            for (let el of this.cartItems) {
                totalSum += el.price * el.quantity;
            }
            return totalSum;
        },
    },
    mounted() {
        this.$parent.getJson('/api/cart')
            .then(data => {
                for (let el of data.contents) {
                    this.cartItems.push(el);
                };
                this.calcTotalSum;
            });

    },
    template: `<div class="header__cart-div">
                    <button class="header__cart-btn" type='button' @click='isVisibleCart = !isVisibleCart'><i class="fas fa-shopping-cart"></i></button>

                    <div class="cart__content" v-show='isVisibleCart'>                            
                        <p v-if="!cartItems.length">Корзина пуста</p>
                        
                        <cart-item ref='cartItem' class="added__product" v-for='item of cartItems' :key='item.id_product' :cart-item="item" @remove="remove"></cart-item>

                        <div class="cart__total-price">
                            <p>TOTAL</p>
                            <p>&#36; {{ this.calcTotalSum }} </p>
                        </div>

                        <div class="cart__buttons">
                            <a href="checkout.html" class="cart__button-checkout">Checkout</a>
                            <a href="shopping_cart.html" class="cart__button-cart">Go to cart</a>
                        </div>
                    </div>
                </div>`
});

Vue.component('cart-item', {
    props: ['cartItem'],
    template: `<div class="added__product">
                    <div class="added__img-text">
                        <img class="added__img" :src="cartItem.img" alt="product1">
                        <div class="added__text">
                            <a class="added__link" href="product_page.html">{{cartItem.product_name}}</a>
                            <div class="rating__mini">
                                <span class="active"></span>
                                <span class="active"></span>
                                <span class="active"></span>
                                <span></span>
                                <span></span>
                            </div>
                            <p class="added__price">{{cartItem.quantity}} &#215; &#36;{{cartItem.price}}</p>
                        </div>
                    </div>
                    <button class='added__delete' @click="$emit('remove', cartItem)"><i class="fas fa-times-circle"></i></button>

                </div>`
});
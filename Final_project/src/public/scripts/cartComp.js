Vue.component('cart-page', {
    data() {
        return {
            cartRef: this.$parent.$refs.cart,
        }
    },
    mounted() {
        console.log(this)
    },
    props: ['cartItems'],
    template: `<div class="shopping__cart-products">
                    <p v-if="! cartRef.cartItems.length">Корзина пуста</p>

                    <cart-item-page ref='cartItemPage' v-for='item of cartRef.cartItems' :key='item.id_product' :cart-item="item" @remove="cartRef.remove"></cart-item-page>
    
                </div>`
});

Vue.component('cart-item-page', {
    props: ['cartItem'],
    template: `
                <div class="shopping__cart-product">

                <div class="shopping__cart-product-description">
                    <img class="shopping__cart-product-img" :src="cartItem.img" alt="product">
                    <div>
                        <a href="#" class="shopping__cart-product-head">{{cartItem.product_name}}</a>
                        <p class="shopping__cart-product-text">
                            Color: <span class="shopping__cart-product-text2">Red</span><br>Size: <span
                                class="shopping__cart-product-text2">Xll</span></p>
                    </div>
                </div>

                <div class="shopping__cart-product-conditions-block">
                    <p class="shopping__cart-product-conditions">&#36;{{cartItem.price}}</p>

                    <div class="shopping__cart-product-conditions">
                        <input class="shopping__cart-product-quantity" v-model="cartItem.quantity" type="number" value="1" min="1"></div>

                        <p class="shopping__cart-product-conditions">Free</p>

                        <p class="shopping__cart-product-conditions">&#36;{{cartItem.price * cartItem.quantity}}</p>

                    <div class="shopping__cart-product-conditions">

                    <button @click="$emit('remove', cartItem)"><i class="fas fa-times-circle shopping__cart-product-delete"></i></button></div>
                </div>
            </div>`
});

Vue.component('cart-price-page', {
    template: `<div class="shopping__cart-bottom-total">
                    <p class="total__sub-text">Sub total<span class="total__sub-text2">&#36;{{this.$parent.$refs.cart.calcTotalSum}}</span></p>
                    <p class="total__grand-text">GRAND TOTAL<span class="total__grand-text2">&#36;{{this.$parent.$refs.cart.calcTotalSum}}</span></p>
                    <a href="#" class="total__button-checkout">proceed to checkout</a>
                </div>`
})
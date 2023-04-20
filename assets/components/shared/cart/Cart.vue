<template>
    <div class="relative py-2">
        <div class="b-0 absolute left-0">
            <p
                v-if="carts.length"
                class="flex h-2 w-2 items-center justify-center rounded-full bg-green-500 p-3 text-xs text-white"
            >
                {{ carts.length }}
            </p>
        </div>
        <button
            class="flex items-center justify-center p-2 text-gray-500 hover:text-gray-900"
            @mouseenter="showDropdown = true"
            @click.prevent="checkout"
        >
            <font-awesome-icon
                class="text-lg"
                :icon="['fas', 'cart-arrow-down']"
            />
            <span class="ml-1">Panier</span>
        </button>

        <div
            v-if="showDropdown"
            class="absolute t-0 right-0 w-80 z-10 p-2 bg-white border rounded-lg shadow-lg"
            @mouseenter="showDropdown = true"
            @mouseleave="showDropdown = false"
        >
            <div v-if="carts.length === 0">
                Votre panier est vide.
            </div>
            <ul v-else>
                <li
                    v-for="(item, index) in carts"
                    :key="index"
                    class="flex justify-between items-center mb-2"
                >
                    <div class="flex items-center">
                        <div class="text-sm">
                            {{ item.dish.name }}
                        </div>
                    </div>
                    <div class="text-sm font-semibold">
                        {{ formatPrice(item.dish.price) }} €
                    </div>
                    <Button
                        :bg-color="bgButton"
                        :hover-color="hoverButton"
                        :color="color"
                        :disabled="disabled"
                        :on-click="() => removeDisheFromCart(item)"
                    >
                        <template #button>
                            <font-awesome-icon
                                class="text-sm"
                                :icon="['fas', 'minus']"
                            />
                        </template>
                    </Button>
                </li>
                <hr class="w-48 h-1 mx-auto my-2 bg-gray border-0 rounded" />
                <li class="flex justify-between items-center font-medium">
                    <div>Total</div>
                    <div class="font-bold">
                        {{ totalPrice }} €
                    </div>
                </li>
                <li class="mt-4">
                    <button
                        class="w-full bg-green-500 text-white rounded-lg py-2"
                        @click.prevent="checkout"
                    >
                        Payer
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import formatPrice from '../../../mixins/formatPrice';
import Button from '../ui/Button';

export default {
    name: 'Cart',
    components: {
        Button,
    },
    mixins: [formatPrice],
    data() {
        return {
            bgButton: 'bg-red-500',
            hoverButton: 'bg-red-600',
            color: 'text-white',
            disabled: false,
            showDropdown: false,
            cart: [],
        };
    },
    computed: {
        carts() {
            return this.$store.state.cart;
        },
        totalPrice() {
            const price = this.carts.reduce((total, item) => total + item.dish.price, 0);
            return this.formatPrice(price);
        },
    },
    methods: {
        checkout() {
            this.$store.commit('ADD_CART_TO_ORDER', this.carts);
            this.$router.push('/cart');
        },
        removeDisheFromCart(item) {
            this.$store.dispatch('removeDishFromCart', item.dish);
        },
    },
};
</script>

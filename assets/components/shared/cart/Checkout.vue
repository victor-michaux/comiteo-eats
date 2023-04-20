<template>
    <div class="container mx-auto mt-10">
        <div class="flex shadow-md my-10">
            <div class="w-3/4 bg-white px-10 py-10">
                <div class="flex justify-between border-b pb-8">
                    <h1 class="font-semibold text-2xl">
                        Votre panier
                    </h1>
                    <h2 class="font-semibold text-2xl">
                        {{ carts.length === 0 ? 'Aucun Article' : carts.length + ' Articles' }}
                    </h2>
                </div>
                <div v-if="carts.length === 0">
                    <h3 class="font-semibold text-gray-600 text-xl uppercase mt-10">
                        Votre panier est vide
                    </h3>
                </div>
                <div v-else>
                    <div class="flex mt-10 mb-5">
                        <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">
                            Article
                        </h3>
                        <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5 text-center">
                            Prix
                        </h3>
                        <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5 text-center">
                            Quantité
                        </h3>
                        <h3 class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                            MAJ
                        </h3>
                    </div>
                    <div
                        v-for="(item, index) in carts"
                        :key="index"
                        class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                    >
                        <div class="flex w-2/5">
                            <div class="flex flex-col justify-between ml-4 flex-grow">
                                <span class="font-bold text-sm text-left">{{ item.dish.name }}</span>
                            </div>
                        </div>
                        <span class="text-center w-2/5 font-semibold text-sm">{{ formatPrice(item.dish.price) }} €</span>
                        <span class="text-center w-2/5 font-semibold text-sm">1</span>
                        <span class="text-center w-1/5 font-semibold text-sm">
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
                        </span>
                    </div>
                </div>
            </div>

            <div
                id="summary"
                class="w-1/4 px-8 py-10"
            >
                <h1 class="font-semibold text-2xl border-b pb-8">
                    Récapitulatif
                </h1>
                <div class="flex justify-between  mt-10 mb-5">
                    <span class="font-semibold text-sm uppercase">Total Article </span>
                    <span class="font-semibold text-sm"> {{ formatPrice(totalPrice) }}€</span>
                </div>

                <div class="border-t mt-4">
                    <label class="font-medium inline-block mb-4 mt-4 text-sm uppercase">Methode de Livraison</label>
                    <Delivery
                        v-model="deliveryOption"
                        @option-selected="onDeliveryOptionSelected"
                    />
                </div>

                <div class="border-t mt-4">
                    <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                        <span>Frais de livraison</span>
                        <span>{{ formatPrice(deliveryOption ? deliveryOption.fee : '0') }}</span>
                    </div>
                </div>

                <div class="border-t mt-1">
                    <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                        <span>Total</span>
                        <span>{{ formatPrice(totalPrice + (deliveryOption.fee ? deliveryOption.fee : '')) }}</span>
                    </div>
                </div>

                <Forms
                    v-if="carts.length > 0"
                />
                <span>Pour valider votre commande votre panier doit être remplis</span>
            </div>
        </div>
    </div>
</template>

<script>
import formatPrice from '../../../mixins/formatPrice';
import Button from '../ui/Button.vue';
import Forms from '../ui/Forms.vue';
import Delivery from '../delivery/Delivery.vue';

export default {
    name: 'Checkout',
    components: {
        Button,
        Delivery,
        Forms,
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
            deliveryOption: '',
        };
    },
    computed: {
        carts() {
            return this.$store.state.cart;
        },
        totalPrice() {
            let total = 0;
            // eslint-disable-next-line no-restricted-syntax
            for (const item of this.carts) {
                total += item.dish.price;
            }
            return total;
        },
    },
    methods: {
        removeDisheFromCart(item) {
            this.$store.dispatch('removeDishFromCart', item.dish);
        },
        onDeliveryOptionSelected(option) {
            this.deliveryOption = option;
        },
    },

};
</script>

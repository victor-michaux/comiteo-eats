<template>
    <div class="container mx-auto px-4 my-5">
        <Checkout />
    </div>
</template>
<script>
import Checkout from '../components/shared/cart/Checkout.vue';

export default {
    name: 'Cart',
    components: {
        Checkout,
    },
};
</script>

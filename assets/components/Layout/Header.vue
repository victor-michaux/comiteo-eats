<template>
    <header class="header sticky z-50 top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
        <Logo :logo-src="image" />
        <Search />
        <Cart />
    </header>
</template>

<script>
import Logo from '../shared/ui/Logo.vue';
import Search from '../shared/Search.vue';
import Cart from '../shared/cart/Cart.vue';

export default {
    name: 'Header',
    components: {
        Cart,
        Logo,
        Search,
    },
    data() {
        return {
            image: '//upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Logo_Comit%C3%A9o.jpg/800px-Logo_Comit%C3%A9o.jpg',
        };
    },
};
</script>

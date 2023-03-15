<template>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
        
        <!-- Column -->
        <div
            v-if="restaurant !== null"
            class="my-1 px-1 w-full lg:my-4 lg:px-4"
        >
            <article class="overflow-hidden rounded-lg shadow-lg">
                <img alt="Placeholder" class="block h-auto w-full" :src="restaurant.cover_picture" />
        
                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline hover:underline text-black font-bold" href="#">
                            {{ restaurant.name }}
                        </a>
                    </h1>
                </header>
        
                <h2 class="text-lg leading-tight md:py-2 md:p-4">
                    {{ restaurant.street_address }}
                </h2>
                
                <div class="md:py-2 md:p-4">
                    <span class="text-xl font-bold">Menu</span>
                    
                    <div class="my-4 px-4 shadow rounded">
                        <span class="font-semibold font-bold">Entrées</span>
                        <dish
                            v-for="(starter, index) in starters"
                            :key="index"
                            :dish="starter"
                        >
                        </dish>
                    </div>
                    
                    <div class="my-4 px-4 shadow rounded">
                        <span class="font-semibold font-bold">Plats</span>
                        <dish
                            v-for="(main, index) in mains"
                            :key="index"
                            :dish="main"
                        >
                        </dish>
                    </div>
                    
                    <div class="my-4 px-4 shadow rounded">
                        <span class="font-semibold font-bold">Desserts</span>
                        <dish
                            v-for="(dessert, index) in desserts"
                            :key="index"
                            :dish="dessert"
                        >
                        </dish>
                    </div>
                    
                    <div class="my-4 px-4 shadow rounded">
                        <span class="font-semibold font-bold">Boissons</span>
                        <dish
                            v-for="(drink, index) in drinks"
                            :key="index"
                            :dish="drink"
                        >
                        </dish>
                    </div>
                </div>
            </article>
        </div>
        <!-- END Column -->
    </div>
</template>

<script>
import DefaultLayout from '../../layout/default-layout.vue';
import Dish from './dish.vue';
import { getRestaurant } from '../../services/restaurants-service';

export default {
    name: 'RestaurantShow',
    components: {
        Dish,
    },
    data() {
        return {
            restaurant: null,
        };
    },
    computed: {
        starters() {
            return this.restaurant.dishes.data.filter((dish) => dish.type === 'starter');
        },
        mains() {
            return this.restaurant.dishes.data.filter((dish) => dish.type === 'main');
        },
        desserts() {
            return this.restaurant.dishes.data.filter((dish) => dish.type === 'dessert');
        },
        drinks() {
            return this.restaurant.dishes.data.filter((dish) => dish.type === 'drink');
        },
    },
    async created() {
        this.$emit('update:layout', DefaultLayout);
        
        // eslint-disable-next-line radix
        const response = await getRestaurant(parseInt(this.$route.params.id));
        
        this.restaurant = response.data.data;
    },
};
</script>

<style scoped>

</style>

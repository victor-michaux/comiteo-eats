<template>
    <div class="container mx-auto pt-5">
        <div class="bg-gray-100">
            <nav class="bg-gray-800">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div class="flex h-16 items-center justify-between">
                        <div class="flex items-center">
                            <div class="flex-shrink-4">
                                <img
                                    class="h-8 w-8"
                                    src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-08a68b9418adeb6c8599892284a22ef1_screen.jpg?ts=1599559226"
                                    alt="Logo restaurant"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
    
            <header class="bg-white shadow">
                <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-bold tracking-tight text-gray-900">Restaurants</h1>
                </div>
            </header>
    
            <main>
                <div class="mx-auto max-w-4xl py-6 sm:px-6 lg:px-8">
                    <div class="flex flex-wrap -mx-1 lg:-mx-4">
        
                        <!-- Column -->
                        <div
                            v-for="(restaurant, index) in restaurants"
                            :key="index"
                            class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2"
                        >
                            <restaurant-card :restaurant="restaurant" />
                        </div>
                        <!-- END Column -->
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import RestaurantCard from './components/restaurant-card.vue';
import { getRestaurants } from './services/restaurants-service';

export default {
    name: 'App',
    components: {
        RestaurantCard,
    },
    data() {
        return {
            restaurants: [],
        };
    },
    async created() {
        const response = await getRestaurants();
        
        this.restaurants = response.data.data;
    },
};
</script>

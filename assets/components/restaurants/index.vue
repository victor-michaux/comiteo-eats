<template>
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
</template>

<script>
import DefaultLayout from '../../layout/default-layout.vue';
import RestaurantCard from './restaurant-card.vue';
import { getRestaurants } from '../../services/restaurants-service';

export default {
    name: 'Home',
    components: {
        RestaurantCard,
    },
    data() {
        return {
            restaurants: [],
        };
    },
    async created() {
        this.$emit('update:layout', DefaultLayout);
    
        const response = await getRestaurants();
    
        this.restaurants = response.data.data;
    },
};
</script>

<style scoped>

</style>

<template>
    <div class="px-10 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10">
        <restaurant-card
            v-for="restaurant in restaurants"
            :key="restaurant.id"
            :city="restaurant.city"
            :name="restaurant.name"
            :category="restaurant.category_label"
            :profile="restaurant.profile_picture"
            :restaurant-id="restaurant.id"
            :rating="restaurant.ratings_average"
        />
    </div>
</template>
<script>
import RestaurantCard from './RestaurantCard.vue';

export default {
    name: 'RestaurantList',
    components: {
        RestaurantCard,
    },
    computed: {
        restaurants() {
            return this.$store.state.restaurants;
        },
    },
    created() {
    },
    mounted() {
        this.$store.dispatch('getRestaurants');
    },
};
</script>

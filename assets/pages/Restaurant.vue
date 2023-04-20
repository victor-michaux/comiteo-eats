<template>
    <div class="container mx-auto px-4 my-5">
        <div class="max-w-screen-lg mx-auto pb-10">
            <restaurant-banner
                v-if="restaurant"
                :adress="restaurant.street_address"
                :city="restaurant.city"
                :name="restaurant.name"
                :picture="restaurant.cover_picture"
                :zip="parseInt(restaurant.zip_code)"
            />
        </div>
        <div class="max-w-screen-lg mx-auto pb-10">
            <restaurant-menu
                v-if="restaurant && restaurant.dishes"
                :dishes="restaurant.dishes"
            />
        </div>
    </div>
</template>
<script>
import RestaurantBanner from '../components/shared/restaurant/RestaurantBanner';
import RestaurantMenu from '../components/shared/restaurant/RestaurantMenu';

export default {
    name: 'Restaurant',
    components: {
        RestaurantBanner,
        RestaurantMenu,
    },

    props: {
        id: {
            type: [String, Number],
            required: true,
        },
    },
    computed: {
        restaurant() {
            return this.$store.state.restaurant;
        }
    },
    mounted() {
        this.$store.dispatch("getRestaurant", this.id);
    },
};
</script>

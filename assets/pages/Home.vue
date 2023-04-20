<template>
    <div>
        <div class="container mx-auto px-5">
            <food-category />
            <hr class="h-px bg-gray border-0" />
            <restaurant-list />
        </div>
    </div>
</template>

<script>
import FoodCategory from '../components/shared/foodCategory/FoodCategory';
import RestaurantList from '../components/shared/restaurant/RestaurantList';

export default {
    name: 'Home',
    components: {
        RestaurantList,
        FoodCategory,
    },
};
</script>

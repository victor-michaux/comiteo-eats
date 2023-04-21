<template>
    <div class="food-type-icons">
        <slot
            name="food-icons"
            :types="foodTypes"
        ></slot>
    </div>
</template>

<script>
export default {
    name: 'FoodTypeIcons',
    data() {
        return {
            foodTypes: [
                {
                    id: '1',
                    name: 'Asia',
                    icons: '../../assets/asia.gif',
                },
                {
                    id: '2',
                    name: 'Italia',
                    icons: '@/assets/asia.gif',
                },
                {
                    id: '3',
                    name: 'FastFood',
                    icons: '/assets/asia.gif',
                },
                {
                    id: '4',
                    name: 'Vegan',
                    icons: '/assets/asia.gif',
                },
            ],
        };
    },
};
</script>

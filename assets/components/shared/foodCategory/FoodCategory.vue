<template>
    <div class="w-full border-gray-400 flex p-3 last:border-b-0 items-center">
        <ul class="food-icon mx-auto flex items-center">
            <li
                v-for="(type, index) in foodTypes"
                :key="index"
                class="mr-20 text-center rounded-full inline-block"
                :class="{ latestActive : hover}"
            >
                <img
                    :src="iconsHover(index)"
                    class="mx-auto object-contain h-11 w-11"
                    @mouseover="hover = index"
                    @mouseleave="hover = null"
                />
                <p class="my-2 font-semibold subpixel-antialiased">
                    {{ type.name }}
                </p>
            </li>
        </ul>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
</template>

<script>
import foodTypes from '../../../utils/constants/food';

export default {
    name: 'FoodCategory',
    data() {
        return {
            hover: null,
        };
    },
    computed: {
        iconsHover() {
            return (index) => {
                const type = this.foodTypes[index];
                if (this.hover === null || this.hover !== index) {
                    return type.icon;
                }
                return type.gif;
            };
        },
        foodTypes() {
            return foodTypes;
        },
    },
};
</script>

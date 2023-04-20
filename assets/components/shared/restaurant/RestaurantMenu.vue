<!-- eslint-disable vue/no-template-shadow -->
<template>
    <div class="container px-4 mx-auto">
        <h2 class="mt-8 mb-5 text-4xl text-left lg:text-4xl font-bold text-black">
            Menu
        </h2>
        <hr class="h-px bg-gray border-0" />
        <div class="w-full lg:max-w-full">
            <div
                v-for="(dishes, category) in dishesByCategory"
                :key="category"
                class="bg-white shadow-lg hover:shadow-xl rounded-lg px-4 mt-2"
            >
                <h3 class="text-3xl text-left lg:text-4xl font-bold text-black py-2">
                    {{ getCategoryName(category) }}
                </h3>
                <div class="mb-8 p-5">
                    <ul class="text-gray-900 font-bold text-xl mb-2">
                        <li
                            v-for="dish in dishes"
                            :key="dish.name"
                            class="p-2 flex justify-between"
                        >
                            <span class="mr-auto font-light text-base">{{ dish.name }}</span>
                            <span class="font-light text-base">{{ formatPrice(dish.price) }} €</span>
                            <span class="ml-3">
                                <Button
                                    :bg-color="bgButton"
                                    :hover-color="hoverButton"
                                    :color="color"
                                    :disabled="disabled"
                                    :on-click="() => addDishesToCart(dish)"
                                >
                                    <template #button>
                                        <font-awesome-icon
                                            class="text-sm"
                                            :icon="['fas', 'plus']"
                                        />
                                    </template>
                                </Button>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import formatPrice from '../../../mixins/formatPrice';
import Button from '../ui/Button';

export default {
    name: 'RestaurantMenu',
    components: {
        Button,
    },
    mixins: [formatPrice],
    props: {
        dishes: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            bgButton: 'bg-green-500',
            hoverButton: 'hover:bg-green-600',
            disabled: false,
            color: 'text-white',
        };
    },
    computed: {
        categories() {
            return Array.from(new Set(this.dishes.data.map((dish) => dish.type)));
        },
        dishesByCategory() {
            const dishesByCategory = {};
            this.categories.forEach((category) => {
                dishesByCategory[category] = this.dishes.data
                    .filter((dish) => dish.type === category)
                    .sort((a, b) => {
                        const typeOrder = ['starter', 'main', 'dessert', 'drink'];
                        return typeOrder.indexOf(a.type) - typeOrder.indexOf(b.type);
                    });
            });
            return dishesByCategory;
        },
    },
    methods: {
        addDishesToCart(dish) {
            this.$store.dispatch('setDishesToCart', { dish });
        },
        getDishesByCategory(category) {
            return this.dishes.data
                .filter((dish) => dish.type === category)
                .sort((a, b) => {
                    const typeOrder = ['starter', 'main', 'dessert', 'drink'];
                    return typeOrder.indexOf(a.type) - typeOrder.indexOf(b.type);
                });
        },
        getCategoryName(category) {
            switch (category) {
            case 'starter':
                return 'Entrées';
            case 'main':
                return 'Plats';
            case 'dessert':
                return 'Desserts';
            case 'drink':
                return 'Boissons';
            default:
                return '';
            }
        },
    },
};
</script>

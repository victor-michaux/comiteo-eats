<template>
    <div>
        <!-- Article -->
        <article class="overflow-hidden rounded-lg shadow-lg">
        
            <router-link :to="{ name: 'restaurants_show', params: { id: restaurant.id } }">
                <img alt="Placeholder" class="block h-auto w-full" :src="restaurant.cover_picture" />
            </router-link>
        
            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                    <a class="no-underline hover:underline text-black font-bold" href="#">
                        {{ restaurant.name }}
                    </a>
                </h1>
                
                <div class="flex items-center justify-center bg-gray-400 w-10 h-10 rounded-full">
                    <div>
                        <span class="inline-block align-middle text-grey-darker text-sm">
                            {{ restaurant.ratings_average }}
                        </span>
                    </div>
                </div>
            </header>
    
            <h2 class="text-lg leading-tight md:py-2 md:p-4">
                {{ restaurant.city }}
            </h2>
    
            <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                <a class="flex items-center no-underline hover:underline text-black" href="#">
                    <p class="text-sm w-24 rounded-lg text-center bg-blue-500">
                        {{ restaurant.category_label }}
                    </p>
                </a>
            </footer>
    
        </article>
        <!-- END Article -->
    </div>
</template>

<script>
export default {
    name: 'RestaurantCard',
    props: {
        restaurant: {
            type: Object,
            required: true,
        },
    },
};

</script>

<style scoped>

</style>

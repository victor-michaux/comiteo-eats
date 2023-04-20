<template>
    <div class="relative rounded shadow-lg my-10">
        <div class="overflow-hidden max-h-56 flex-shrink-0">
            <img
                class="w-full rounded"
                :src="profile"
                :alt="name"
            />
        </div>
        <div class="absolute bottom-[5px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 mx-auto bg-white rounded-lg px-6 py-4 ">
            <div class="t-0 absolute right-3">
                <rating
                    :rating="rating"
                >
                    <template #rating>
                        <span :class="`item-center justify-center rounded-full bg-rating-${rating} p-4 text-xs font-bold text-black`">
                            {{ rating }}
                        </span>
                    </template>
                </rating>
            </div>

            <router-link :to="{ name: 'restaurant', params: { id: restaurantId } }">
                <h2 class="font-bold text-2xl text-left">
                    {{ name }}
                </h2>
                <p class="text-left font-bold mb-5">
                    {{ city }}
                </p>
            </router-link>

            <badge
                v-if="category"
                :badges="[category]"
                class="text-left"
            >
                <template #tags>
                    <span
                        :class="`bg-${cleanString(category)}-400 text-dark font-bold text-sm mr-2 px-2.5 py-2 rounded `"
                    >
                        {{ category }}
                    </span>
                </template>
            </badge>
        </div>
    </div>
</template>

<script>
import Badge from '../ui/Badge.vue';
import Rating from './Rating.vue';
import stringMixin from '../../../mixins/stringMixin';

export default {
    name: 'RestaurantCard',
    components: {
        Badge,
        Rating,
    },
    mixins: [
        stringMixin,
    ],
    props: {
        name: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: false,
        },
        profile: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: false,
        },
        restaurantId: {
            type: Number,
            required: true,
        },
    },
};
</script>

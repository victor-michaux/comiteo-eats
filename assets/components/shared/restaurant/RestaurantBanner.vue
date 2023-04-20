<template>
    <div class="container px-4 mx-auto">
        <div class="w-full bg-center bg-cover rounded">
            <img
                :src="picture"
                :alt="name"
            />
        </div>
        <div class="px-4 mx-auto">
            <h2 class="mt-8 mb-1 text-4xl text-left lg:text-3xl font-bold text-black-100">
                {{ name }}
            </h2>
            <p class="max-w-3xl text-left text-lg text-gray-300">
                {{ adress }}
            </p>
            <p class="max-w-3xl text-left text-lg text-gray-300">
                <span>{{ Number(zip) }} {{ city }}</span>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'RestaurantBanner',
    props: {
        adress: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        picture: {
            type: String,
            required: true,
            default: 'https://placehold.co/1000x300',
        },
        zip: {
            type: Number,
            required: true,
            validator(value) {
                return /^\d{5}$/.test(value);
            },
        },
    },

};
</script>

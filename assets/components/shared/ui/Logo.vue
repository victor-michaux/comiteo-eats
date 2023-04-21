<template>
    <div>
        <router-link
            to="/"
            tag="a"
        >
            <img
                class="h-12 w-auto hover:text-green-500 duration-200"
                :src="logoSrc"
                :alt="altText"
            />
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Logo',
    props: {
        logoSrc: {
            type: String,
            required: true,
        },
        altText: {
            type: String,
            default: 'Comiteo',
            required: false,
        },
    },
};
</script>

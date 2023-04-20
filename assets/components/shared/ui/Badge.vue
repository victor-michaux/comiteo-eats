<template>
    <div class="badges">
        <slot
            v-for="badge in badges"
            name="tags"
            :badge="badge"
        ></slot>
    </div>
</template>

<script>
export default {
    name: 'Badge',
    props: {
        badges: {
            type: Array,
            required: true,
        },
    },
};
</script>

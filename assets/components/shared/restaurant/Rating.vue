<template>
    <div class="ratings">
        <slot
            name="rating"
            :rating="rating"
        ></slot>
    </div>
</template>

<script>
export default {
    name: 'Ratings',
    props: {
        rating: {
            type: Number,
            required: true,
            validator: (value) => value >= 0 && value <= 5,
        },
    },
};
</script>

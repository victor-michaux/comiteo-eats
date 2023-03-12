<template>
    <div class="flex justify-between">
        <div>
            {{ dish.name }}
        </div>
        
        <div>
            {{ price }} €
        </div>
    </div>
</template>

<script>
export default {
    name: 'Dish',
    props: {
        dish: {
            type: Object,
            required: true,
        },
    },
    computed: {
        price() {
            return (this.dish.price / 100)
                .toLocaleString('fr-FR', { minimumFractionDigits: 2 });
        },
    },
};
</script>

<style scoped>

</style>

<!-- eslint-disable vue/no-mutating-props -->
<template>
    <div>
        <Checkbox
            v-model="value"
            :options="deliveryMethods"
            @option-selected="onOptionSelected"
        >
            <template #option="{value}">
                <font-awesome-icon
                    class="font-bold text-2xl hover:text-green-500"
                    :icon="['fas', `${getIcon(value)}`]"
                />
            </template>
        </Checkbox>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Checkbox from '../ui/Checkbox.vue';

export default {
    name: 'Delivery',
    components: {
        Checkbox,
    },
    props: {
        value: {
            type: [String, Object],
            required: true,
        },
    },
    data() {
        return {
            selectedValue: null,
        };
    },
    computed: {
        ...mapGetters(['deliveryMethods']),
    },
    mounted() {
        this.$store.dispatch('fetchDeliveryMethod');
    },
    methods: {
        onOptionSelected(selectedOption) {
            this.$emit('option-selected', { value: selectedOption.value, fee: selectedOption.price });
        },
        getIcon(option) {
            switch (option) {
            case 'walk':
                return 'shoe-prints';
            case 'bike':
                return 'bicycle';
            case 'car':
                return 'car';
            case 'scooter':
                return 'motorcycle';
            case 'electric_scooter':
                return 'horse';
            default:
                return '';
            }
        },
    },
};
</script>

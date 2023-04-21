<template>
    <div class="flex flex-wrap">
        <div
            v-for="(option, index) in options"
            :key="index"
        >
            <label
                :for="option.id"
                class="relative inline-flex mb-2 mr-2 items-center cursor-pointer"
            >
                <input
                    :id="option.id"
                    v-model="selectedOptions"
                    type="radio"
                    class="sr-only peer"
                    :value="{ value: option.value, price: option.price }"
                    @change="$emit('option-selected', selectedOptions)"
                />
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    <slot
                        name="option"
                        :value="option.value"
                    ></slot>
                </span>
            </label>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Checkbox',
    props: {
        options: {
            type: Array,
            required: true,
            default: () => [],
        },
    },
    data() {
        return {
            selectedOptions: [],
        };
    },
};
</script>

<template>
    <div>
        <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
        >
            {{ label }}
        </label>
        <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            v-bind="$attrs"
            type="text"
            :value="value"
            v-on="$listeners"
            @input="$emit('update', $event.target.value)"
        />
    </div>
</template>

<script>
import TYPES from '../../../utils/constants/inputTypes';

export default {
    name: 'CustomInput',
    inheritAttrs: false,
    model: {
        prop: 'value',
        event: 'update',
    },
    props: {
        label: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: 'text',
            validator(value) {
                const includesTypes = (types, type) => types.includes(type);
                const isValid = includesTypes(TYPES, value);
                if (!isValid) {
                    console.warn(`allowed types are ${TYPES}`);
                }
                return isValid;
            },
        },
    },
};
</script>

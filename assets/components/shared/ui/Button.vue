<template>
    <div class="ui-button">
        <button
            :class="`
        w-${width} h-${height}
        inline-flex items-center justify-center
        ${color} transition-colors duration-150
        ${bgColor} ${hoverColor}
        rounded-full focus:shadow-outline`"
            @click.prevent="onClick"
        >
            <slot name="button"></slot>
        </button>
    </div>
</template>
<script>
export default {
    name: 'Button',
    props: {
        // eslint-disable-next-line vue/require-default-prop
        onClick: {
            type: Function,
            required: false,
        },
        bgColor: {
            type: String,
            required: true,
            default: 'bg-green-500',
        },
        color: {
            type: String,
            required: true,
            default: 'text-white',
        },
        disabled: {
            type: Boolean,
            required: true,
            default: false,
        },
        hoverColor: {
            type: String,
            required: true,
            default: 'hover:bg-green-600',
        },
        width: {
            type: Number,
            required: false,
            default: 5,
        },
        height: {
            type: Number,
            required: false,
            default: 5,
        },
    },

};
</script>

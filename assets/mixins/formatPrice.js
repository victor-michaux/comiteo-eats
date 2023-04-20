export default {
    methods: {
        formatPrice(price) {
            const euro = Math.floor(price / 100);
            let cents = price % 100;

            if (cents < 10) {
                cents = `0${cents}`;
            }

            return `${euro},${cents}`;
        },
    },
};

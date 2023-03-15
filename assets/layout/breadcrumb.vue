<template>
    <nav class="mt-4">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li
                v-for="(route, index) in routeList"
                :key="index"
                class="inline-flex items-center"
            >
                <router-link
                    :to="{name : route.name}"
                    class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                    <svg
                        v-if="route.meta.label === 'Home'"
                        aria-hidden="true"
                        class="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-"
                        />
                    </svg>
                    <svg
                        v-if="route.meta.label !== 'Home'"
                        aria-hidden="true"
                        class="w-6 h-6 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                    {{ route.meta.label }}
                </router-link>
            </li>
        </ol>
    </nav>
</template>

<script>
export default {
    name: 'Breadcrumb',
    data() {
        return {
            routeList: [],
        };
    },
    watch: {
        $route(to, from) {
            if (from.name !== to.name) {
                this.currentRouteList(to);
            }
        },
    },
    beforeMount() {
        this.currentRouteList(this.$route);
    },
    methods: {
        currentRouteList(currentRoute) {
            this.routeList = [];
            currentRoute.meta.breadcrumb.forEach((item) => {
                const routeItem = this.$router.resolve({ name: item });
                this.routeList.push(routeItem.route);
            });
            this.routeList.push(currentRoute);
        },
    },
};
</script>

<style scoped>

</style>

<template>
    <div class="relative text-gray-600">
        <form>
            <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
                <input
                    id="default-search"
                    type="search"
                    class="block w-full p-2 pl-7 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-blue-500"
                    placeholder="Search Mockups, Logos..."
                    required
                />
            </div>
        </form>
    </div>
</template>

<script>
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default {
    name: 'Search',
    component: {
        faMagnifyingGlass,
    },
    data() {
        return {
            searchQuery: '',
            items: [
                { id: 1, name: 'Item 1' },
                { id: 2, name: 'Item 2' },
                { id: 3, name: 'Item 3' },
                { id: 4, name: 'Item 4' },
            ],
        };
    },
    computed: {
        filteredItems() {
            return this.items.filter((item) => item.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
        },
    },
};
</script>

<style scoped>
/* CSS styles for the component */
</style>

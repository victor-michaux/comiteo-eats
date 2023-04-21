<template>
    <div class="h-screen w-screen bg-gray-100 flex items-center">
        <div
            class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700"
        >
            <div class="max-w-md">
                <div class="text-5xl font-dark font-bold">
                    404
                </div>
                <p class="text-2xl md:text-3xl font-light leading-normal">
                    Cette page n'est pas la voie
                </p>
                <p class="mb-8">
                    Cette page est peut-être dans une galaxie lointaine, très lointaine,
                    mais elle n'est pas la voie que vous cherchez.
                </p>

                <router-link to="/">
                    <button
                        class="
                        px-4 inline py-2 text-sm font-medium leading-5
                        shadow text-white transition-colors duration-150 border border-transparent
                        rounded-lg focus:outline-none focus:shadow-outline-blue bg-green-600 active:bg-green-600
                        hover:bg-green-700"
                    >
                        This is the Way
                    </button>
                </router-link>
            </div>
            <div class="max-w-lg">
                <img
                    src="https://i.pinimg.com/564x/55/86/43/558643890d618169b3ee44f8eef2da15.jpg"
                />
            </div>
        </div>
    </div>
</template>

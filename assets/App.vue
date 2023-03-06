<template>
    <div class="container mx-auto pt-5">
        <div class="bg-gray-100">
            <nav class="bg-gray-800">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div class="flex h-16 items-center justify-between">
                        <div class="flex items-center">
                            <div class="flex-shrink-4">
                                <img
                                    class="h-8 w-8"
                                    src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-08a68b9418adeb6c8599892284a22ef1_screen.jpg?ts=1599559226"
                                    alt="Logo restaurant"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
    
            <header class="bg-white shadow">
                <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-bold tracking-tight text-gray-900">Restaurants</h1>
                </div>
            </header>
    
            <main>
                <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    <div class="px-4 py-6 sm:px-0">
                        Hello!!!
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            user: {
                name: 'Tom Cook',
                email: 'tom@example.com',
                imageUrl:
                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            navigation: [
                { name: 'Dashboard', href: '#', current: true },
                { name: 'Team', href: '#', current: false },
                { name: 'Projects', href: '#', current: false },
                { name: 'Calendar', href: '#', current: false },
                { name: 'Reports', href: '#', current: false },
            ],
            userNavigation: [
                { name: 'Your Profile', href: '#' },
                { name: 'Settings', href: '#' },
                { name: 'Sign out', href: '#' },
            ],
        };
    },
};
</script>

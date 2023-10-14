<template>
    <div>
        <div class="border border-[#e4ee4] h-[300px] mb-4
        relative overflow-hidden group transition">
            <div class="w-full h-full flex justify-center items-center">
                <img class="max-h-[160px] group-hover:scale-110
            tansition duration-300" :src="props.image" alt="">
            </div>
            <div class="absolute top-2 right-0">
                <button
                    class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 mr-2 mb-2text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 mr-2 mb-2">
                    <img src="../asstes/eye.svg">
                    Detalles
                </button>
            </div>
        </div>
        <div>2</div>
    </div>
</template>

<script setup>

const props = defineProps({
    title: String,
    category: String,
    image: String
});

</script>

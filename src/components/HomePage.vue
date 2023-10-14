<template>
<div>
    <section class="py-16">

        <div class="container mx-auto">
        <div class=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
        xl:grid-cols-5 gap-[30px] max-w-sm md:max-w-none md:mx-0">
            <div v-for="product in filterCategory" :key="product.id">
                <ProductPage 
                :title="product.title" 
                :category="product.category"
                :image="product.image"
                />
            </div>
        </div>  
    </div>     
    </section>
</div>
</template>

<script setup>
import { filterCategory } from "../data/products";
import ProductPage from "./ProductPage.vue";

</script>
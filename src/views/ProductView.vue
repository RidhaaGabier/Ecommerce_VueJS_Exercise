<template>
    <div v-if="product" class="product-details" :key="product.id">
        <img :src="product.image" :alt= "product.image">
    
        <div>
            <h2>{{ product.desc }}</h2>
            <p>Description {{ product.size }}</p>
            <p>Price: R {{ product.price }}</p>
            <p>{{ product.button }}</p>
            
        </div>
    </div>
    </template>
    
    <script>
    export default {
        props: ["id"],
        computed: {
            tutorial() {
                return this.$store.state.product;
            }
        },
        mounted(){
            return this.$store.dispatch("getProduct",this.id);
        }
    }
    </script>
<template>
  <div class="card">
    <img
      src="https://i.postimg.cc/C51PLXPt/feature-1.jpg"
      class="card-img-top"
      style="padding: 0.6rem"
      height="450"
    />
    <div class="card-body">
      <h5 class="card-title">R&amp;G</h5>
      <p class="card-text">{{ card.desc }}</p>
      <p class="card-text">{{ card.price }}</p>
      <button class="btn btn-product" @click="addToCart(1)">Buy Now</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["card"],
}
</script>
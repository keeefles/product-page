<template>
  

<div class="products">
  <div class="container">
    <h2 class="header">Products Page</h2><div class="dropdown">
    <div class="dropdown-center">
  <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Core Components
  </button>
  <ul class="dropdown-menu">
    <li>
      <a class="dropdown-item" href="#">CPU</a>
    </li>
    <li>
      <a class="dropdown-item" href="#">Graphics Card</a>
    </li>
    <li>
      <a class="dropdown-item" href="#">Motherboard</a>
    </li>
    <li>
      <a class="dropdown-item" href="#">Solid State Drive (SSD)</a>
    </li>
    <li>
      <a class="dropdown-item" href="#">Hard Drive</a>
    </li>
    <li>
      <a class="dropdown-item" href="#">Memory (RAM)</a>
    </li>
  </ul>
  </div>

  <div class="dropdown-center">
  <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Cooling Solutions
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Case Fans</a></li>
    <li><a class="dropdown-item" href="#">CPU Coolers</a></li>
  </ul>
  </div>

  <div class="dropdown-center">
  <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Accessories
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Gaming Mouse</a></li>
    <li><a class="dropdown-item" href="#">Mouse Pads</a></li>
    <li><a class="dropdown-item" href="#">Headphones & Headsets</a></li>
  </ul>
  </div>

  <div class="dropdown-center">
  <button class="btn dropdown-toggle" type="button" href="#" data-bs-toggle="dropdown" aria-expanded="false">
    Power Supply
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Power Supply</a></li>
  </ul>
  </div>
</div>
  
<div class="row" v-if="products">
          <Card v-for="product in products" :key="product.prodID">
              <template #card-header>
                  <h4 class="card-title">{{ product.prodName }}</h4>
              </template>
              <template #card-body>
                  
                  <img :src= "product.prodURL" alt="lingerie">
                  <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                      {{ product.prodDesc }}
                  </p>
                  <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                      R{{ product.amount }}
                  </p>
                  <router-link class="btn buttonPad" :to="{name: 'product', params: {id: product.prodID}}">View More</router-link>
              </template>
          </Card>
      </div>
      </div>
      </div>
  
</template>

<script>
import Card from '@/components/CardComp.vue';
export default {
  name: 'ProductsView',
  components: {
      Card
  },
  computed:{
      products(){
          return this.$store.state.products
      }
  },
  mounted() {
      this.$store.dispatch('fetchProducts')
  }
}
</script>

<style scoped>
.dropdown {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
}
button {
  background-color: rgba(100, 158, 184, 0.814);
  color: white;
  border-radius: 20px;
}
button:hover {
  background-color: white;
  color: rgba(100, 158, 184, 1);
  cursor: pointer;
}
.dropdown-menu {
  border-radius: 20px
}
.dropdown-item:hover {
  color: rgba(100, 158, 184, 0.814);
  background-color: white;
  border-bottom: 1s solid rgba(100, 158, 184, 0.814);
  border-radius: 20px;
}
.header {
  margin: 20px;
}
</style>
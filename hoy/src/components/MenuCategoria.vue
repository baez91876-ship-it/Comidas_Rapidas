<script setup>
import { inject } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  banner: { type: String, required: true },
  items: { type: Array, required: true },
  chefPick: { type: Object, required: true }
})

const { addToCart } = inject('cart')

function googleImageSearch(term) {
  return `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(`${props.title} ${term}`)}`
}

function addToOrder(name) {
  const product = [...props.items, props.chefPick].find((item) => item.name === name)
  if (product) addToCart(product)
}
</script>

<template>
  <section class="menu-page">
    <div class="menu-intro"><div><span class="eyebrow">Hecho al momento</span><h1>Elige tu antojo</h1></div><a class="location-link" href="https://maps.google.com/?q=Calle+85+12-24+Bogota" target="_blank" rel="noopener noreferrer">⌖ Bogotá · Calle 85 # 12-24</a></div>
    <section class="category-hero">
      <a :href="googleImageSearch('comida rápida')" target="_blank" rel="noopener noreferrer" class="image-link"><img :src="banner" :alt="title" class="hero-image"><span class="image-fallback">🍽</span></a>
      <div class="hero-overlay"><nav class="breadcrumbs"><RouterLink to="/hamburguesas">Menú</RouterLink><span>/</span><span>{{ title }}</span></nav><h2>{{ title }}</h2><p>{{ description }}</p><button class="primary-button" type="button">Ver opciones</button></div>
    </section>
    <div class="section-heading"><div><span class="eyebrow">Para compartir y disfrutar</span><h2>Nuestros favoritos</h2></div><a class="outline-button" href="tel:+576013456789">☎ Pedir ahora</a></div>
    <article class="chef-pick"><a :href="googleImageSearch(chefPick.name)" target="_blank" rel="noopener noreferrer" class="image-link"><img :src="chefPick.image" :alt="chefPick.name" class="chef-image"><span class="image-fallback">🍽</span></a><div class="chef-content"><span class="chef-label">Recomendación del chef</span><h2>{{ chefPick.name }}</h2><p>{{ chefPick.description }}</p><strong class="price">{{ chefPick.price }}</strong><button class="primary-button" type="button" @click="addToOrder(chefPick.name)">Agregar al pedido</button></div></article>
    <div class="products-grid"><article v-for="item in items" :key="item.name" class="product-card"><a :href="googleImageSearch(item.name)" target="_blank" rel="noopener noreferrer" class="image-link"><img :src="item.image" :alt="item.name" class="product-image"><span class="image-fallback">🍽 Imagen no disponible</span></a><div class="product-body"><div class="product-heading"><h3>{{ item.name }}</h3><span v-if="item.tag" class="tag">{{ item.tag }}</span></div><p>{{ item.description }}</p><div class="product-bottom"><strong class="price">{{ item.price }}</strong><button class="add-button" type="button" aria-label="Agregar producto" @click="addToOrder(item.name)">＋</button></div></div></article></div>
  </section>
</template>

<style scoped>
.menu-page { width: 100%; margin: 0; padding: clamp(24px, 4vw, 42px) clamp(14px, 3vw, 36px) 72px; }
.menu-intro, .section-heading { display: flex; align-items: end; justify-content: space-between; gap: 28px; margin-bottom: 26px; }
.eyebrow { color: #c63524; font-size: .75rem; font-weight: 800; letter-spacing: .13em; text-transform: uppercase; }
h1, h2, h3, p { margin-top: 0; }
h1 { margin: 5px 0 0; color: #282522; font-size: clamp(1.8rem, 4vw, 2.6rem); }
.section-heading { margin: 56px 0 22px; }
.section-heading h2 { margin: 5px 0 0; color: #282522; font-size: clamp(1.8rem, 4vw, 2.5rem); }
.location-link, .outline-button { color: #c63524; font-weight: 700; text-decoration: none; }
.outline-button { padding: 11px 15px; border: 1px solid #c63524; border-radius: 8px; }
.category-hero { position: relative; min-height: 360px; overflow: hidden; border-radius: 16px; box-shadow: 0 12px 28px #30241b18; }
.image-link { position: relative; display: block; color: inherit; text-decoration: none; }
.hero-image, .chef-image, .product-image { display: block; width: 100%; object-fit: cover; }
.hero-image { position: absolute; inset: 0; height: 100%; }
.hero-overlay { position: relative; min-height: 360px; display: flex; flex-direction: column; justify-content: end; padding: clamp(26px, 5vw, 58px); color: #fff; background: linear-gradient(0deg, #111cdd, #111c1100); }
.hero-overlay h2 { margin: 12px 0 0; font-size: clamp(2.2rem, 6vw, 4.5rem); }
.hero-overlay p { max-width: 640px; margin: 8px 0 0; font-size: 1.05rem; line-height: 1.6; }
.breadcrumbs { display: flex; gap: 8px; color: #fff; font-size: .9rem; }
.breadcrumbs a { color: #fff; }
.primary-button { width: fit-content; margin-top: 20px; padding: 12px 17px; border: 0; border-radius: 8px; color: #fff; background: #c63524; font-weight: 800; cursor: pointer; }
.chef-pick { display: grid; grid-template-columns: minmax(280px, .9fr) 1.1fr; overflow: hidden; border: 2px solid #f0bd43; border-radius: 14px; background: #fff; box-shadow: 0 8px 22px #30241b12; }
.chef-image { min-height: 270px; }
.chef-content { align-self: center; padding: clamp(24px, 4vw, 42px); }
.chef-content h2 { margin: 12px 0; font-size: 1.8rem; }
.chef-content p, .product-body p { color: #657080; line-height: 1.55; }
.chef-label, .tag { display: inline-block; padding: 5px 8px; border-radius: 5px; color: #6f4e00; background: #ffe19a; font-size: .75rem; font-weight: 800; }
.price { color: #17202b; font-size: 1.15rem; }
.chef-content .price { display: block; margin-bottom: 2px; font-size: 1.35rem; }
.products-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 22px; }
.product-card { overflow: hidden; border: 1px solid #e5ddd6; border-radius: 12px; background: #fff; box-shadow: 0 7px 20px #30241b0d; }
.product-card:hover { transform: translateY(-3px); }
.product-image { aspect-ratio: 1.35; }
.product-body { padding: 18px; }
.product-heading, .product-bottom { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.product-heading { align-items: start; }
.product-heading h3 { margin: 0; font-size: 1.15rem; }
.product-body p { min-height: 50px; margin: 12px 0; }
.add-button { width: 36px; height: 36px; border: 0; border-radius: 50%; color: #fff; background: #c63524; font-size: 1.4rem; cursor: pointer; }
.image-fallback { display: none; align-items: center; justify-content: center; min-height: 100%; color: #8b5e34; background: #f6eadb; font-size: 2rem; text-align: center; }
.image-link img:not([src]) + .image-fallback, .image-link img[src=""] + .image-fallback { display: flex; }
@media (max-width: 1000px) { .products-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 640px) { .menu-intro, .section-heading { align-items: flex-start; flex-direction: column; } .chef-pick { grid-template-columns: 1fr; } .products-grid { grid-template-columns: 1fr; } }
</style>

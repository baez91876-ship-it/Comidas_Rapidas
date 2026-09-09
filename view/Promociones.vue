<script setup>
const promotions = [
  { title: 'Combo Brasa', description: 'Hamburguesa clásica, papas y bebida.', price: '$24.900', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=85' },
  { title: 'Pizza para compartir', description: 'Pizza grande de pepperoni + gaseosa 1.5 L.', price: '$39.900', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1000&q=85' },
  { title: 'Martes de perros', description: 'Lleva 2 perros especiales y paga 1.', price: '$16.500', image: 'https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=1000&q=85' }
]
function takePromotion(title) { window.alert(`${title} se agregó al pedido.`) }
function googleImageSearch(title) { return `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(title + ' comida rápida')}` }
</script>
<template>
  <main class="promotions-page">
    <section class="promo-hero"><img src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1800&q=85" alt="Promociones" class="promo-image"><div class="promo-content"><span class="eyebrow">Solo por tiempo limitado</span><h1>Promociones</h1><p>Antojos grandes, combos especiales y precios para compartir.</p></div></section>
    <div class="promotions-grid"><article v-for="promotion in promotions" :key="promotion.title" class="promotion-card"><a :href="googleImageSearch(promotion.title)" target="_blank" rel="noopener noreferrer"><img :src="promotion.image" :alt="promotion.title"></a><div class="promotion-body"><h2>{{ promotion.title }}</h2><p>{{ promotion.description }}</p><strong>{{ promotion.price }}</strong><button class="primary-button" type="button" @click="takePromotion(promotion.title)">Agregar al pedido</button></div></article></div>
  </main>
</template>
<style scoped>
.promotions-page { width: min(1180px, 100%); margin: auto; padding: 32px clamp(16px, 4vw, 48px) 56px; }
.promo-hero { position: relative; min-height: 280px; overflow: hidden; border-radius: 16px; color: #fff; }
.promo-image { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.promo-content { position: relative; min-height: 280px; display: flex; flex-direction: column; justify-content: end; padding: clamp(24px, 5vw, 52px); background: linear-gradient(0deg, #111cdd, #111c1100); }
.eyebrow { color: #ffd86a; font-size: .8rem; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
h1 { margin: 10px 0 0; font-size: clamp(2.2rem, 6vw, 4.2rem); } .promo-content p { margin: 10px 0 0; font-size: 1.05rem; }
.promotions-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; margin-top: 36px; }
.promotion-card { overflow: hidden; border: 1px solid #e5ddd6; border-radius: 12px; background: #fff; box-shadow: 0 7px 20px #30241b0d; }
.promotion-card img { display: block; width: 100%; aspect-ratio: 1.4; object-fit: cover; }
.promotion-body { padding: 20px; } .promotion-body h2 { margin: 0; font-size: 1.3rem; } .promotion-body p { min-height: 48px; color: #657080; line-height: 1.5; } .promotion-body strong { display: block; font-size: 1.2rem; }
.primary-button { margin-top: 18px; padding: 12px 16px; border: 0; border-radius: 8px; color: #fff; background: #c63524; font-weight: 800; cursor: pointer; }
@media (max-width: 700px) { .promotions-grid { grid-template-columns: 1fr; } }
</style>

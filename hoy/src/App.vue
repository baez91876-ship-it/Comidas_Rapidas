<script setup>
import { computed, provide, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const menuOpen = ref(false)
const cartOpen = ref(false)
const cart = ref([])
const navigation = [
  { path: '/hamburguesas', icon: '🍔', label: 'Hamburguesas' },
  { path: '/perros', icon: '🌭', label: 'Perros' },
  { path: '/pizzas', icon: '🍕', label: 'Pizzas' },
  { path: '/bebidas', icon: '🥤', label: 'Bebidas' },
  { path: '/postres', icon: '🍰', label: 'Postres' },
  { path: '/promociones', icon: '🏷', label: 'Promociones' },
  { path: '/nosotros', icon: '♥', label: 'Nosotros' }
]

function addToCart(product) {
  const existingProduct = cart.value.find((item) => item.name === product.name)
  if (existingProduct) {
    existingProduct.quantity += 1
    return
  }
  cart.value.push({ ...product, quantity: 1 })
}

function removeFromCart(name) {
  cart.value = cart.value.filter((item) => item.name !== name)
}

function clearCart() {
  cart.value = []
}

const cartCount = computed(() => cart.value.reduce((total, item) => total + item.quantity, 0))
const cartTotal = computed(() => cart.value.reduce((total, item) => total + Number(item.price.replace(/[^0-9]/g, '')) * item.quantity, 0))

provide('cart', { addToCart })

function toggleCart() {
  cartOpen.value = !cartOpen.value
  menuOpen.value = false
}
</script>

<template>
  <div class="app-layout">
    <header class="site-header">
      <div class="header-toolbar">
        <button class="menu-button" type="button" aria-label="Abrir menú" @click="menuOpen = !menuOpen">☰</button>
        <RouterLink to="/hamburguesas" class="brand"><span class="brand-icon">✦</span><span>Brasa Urbana</span></RouterLink>
        <button class="order-button" type="button" @click="toggleCart">🛒 Mi pedido<span v-if="cartCount" class="cart-count">{{ cartCount }}</span></button>
      </div>
    </header>

    <button v-if="menuOpen" class="menu-backdrop" type="button" aria-label="Cerrar menú" @click="menuOpen = false"></button>
    <aside class="menu-drawer" :class="{ 'menu-drawer--open': menuOpen }">
      <div class="drawer-heading"><strong>Menú</strong><button class="drawer-close" type="button" aria-label="Cerrar menú" @click="menuOpen = false">×</button></div>
      <nav aria-label="Menú lateral">
        <RouterLink v-for="item in navigation" :key="item.path" :to="item.path" @click="menuOpen = false">
          <span aria-hidden="true">{{ item.icon }}</span>{{ item.label }}
        </RouterLink>
      </nav>
    </aside>

    <button v-if="cartOpen" class="cart-backdrop" type="button" aria-label="Cerrar carrito" @click="cartOpen = false"></button>
    <aside v-if="cartOpen" class="cart-drawer">
      <div class="drawer-heading"><strong>Mi pedido</strong><button class="drawer-close" type="button" aria-label="Cerrar pedido" @click="cartOpen = false">×</button></div>
      <p v-if="!cart.length" class="empty-cart">Tu pedido está vacío.</p>
      <div v-else class="cart-content">
        <div v-for="item in cart" :key="item.name" class="cart-item">
          <div><strong>{{ item.name }}</strong><span>{{ item.quantity }} × {{ item.price }}</span></div>
          <button type="button" aria-label="Quitar producto" @click="removeFromCart(item.name)">×</button>
        </div>
        <div class="cart-total"><strong>Total</strong><strong>${{ cartTotal.toLocaleString('es-CO') }}</strong></div>
        <button class="clear-cart" type="button" @click="clearCart">Vaciar pedido</button>
      </div>
    </aside>

    <main class="page-shell"><RouterView /></main>
    <footer class="site-footer"><div><span class="footer-mark">✦</span><strong>Brasa Urbana</strong></div><a href="tel:+576013456789">¿Antojo? Pide ahora · 601 345 6789</a></footer>
  </div>
</template>

<style scoped>
.app-layout { min-height: 100vh; display: flex; flex-direction: column; }
.site-header { position: sticky; top: 0; z-index: 20; color: #fff; background: #c63524; box-shadow: 0 2px 8px #30241b33; }
.header-toolbar { width: 100%; min-height: 72px; display: flex; align-items: center; gap: 14px; margin: auto; padding: 12px clamp(16px, 4vw, 48px); }
.brand { display: inline-flex; align-items: center; gap: 10px; color: #fff; font-size: 1.3rem; font-weight: 800; text-decoration: none; }
.brand-icon, .footer-mark { display: grid; width: 36px; height: 36px; place-items: center; color: #c63524; background: #fff; border-radius: 50%; }
.menu-button, .drawer-close { border: 0; color: inherit; background: transparent; cursor: pointer; }
.menu-button { font-size: 1.45rem; }
.order-button { position: relative; margin-left: auto; padding: 11px 16px; border: 1px solid #ffffff66; border-radius: 8px; color: #fff; background: #a92c20; font-weight: 700; cursor: pointer; }
.cart-count { display: inline-grid; min-width: 20px; height: 20px; place-items: center; margin-left: 7px; border-radius: 50%; color: #c63524; background: #fff; font-size: .75rem; }
.drawer-heading { display: flex; align-items: center; justify-content: space-between; color: #282522; font-size: 1.1rem; }
.menu-backdrop { position: fixed; inset: 0; z-index: 24; border: 0; background: transparent; cursor: default; }
.menu-drawer { position: absolute; top: 78px; left: 0; z-index: 25; display: none; width: 100%; padding: 24px clamp(16px, 4vw, 48px) 28px; border-top: 1px solid #e8e2db; border-bottom: 1px solid #e8e2db; background: #fff; box-shadow: 0 12px 32px #30241b33; }
.menu-drawer--open { display: block; }
.drawer-close { display: none; color: #302b27; font-size: 1.8rem; }
.menu-drawer nav { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10px; width: min(1180px, 100%); margin: auto; }
.menu-drawer a { display: flex; gap: 11px; align-items: center; min-height: 58px; padding: 14px 16px; border: 1px solid #eee8e2; border-radius: 8px; color: #5f5750; font-weight: 700; text-decoration: none; }
.menu-drawer a.router-link-active { color: #c63524; background: #fff0ec; }
.cart-drawer { position: fixed; top: 0; right: 0; bottom: 0; z-index: 45; width: min(360px, 90vw); padding: 24px 18px; background: #fff; box-shadow: -8px 0 24px #0002; }
.cart-backdrop { position: fixed; inset: 0; z-index: 44; border: 0; background: #19151266; cursor: pointer; }
.cart-drawer .drawer-close { display: grid; width: 34px; height: 34px; place-items: center; margin: -6px -6px 0 0; border-radius: 50%; color: #302b27; background: #f7f5f2; font-size: 1.5rem; line-height: 1; }
.cart-drawer .drawer-heading { padding-bottom: 22px; border-bottom: 1px solid #e8e2db; }
.cart-content { display: grid; gap: 16px; }
.empty-cart { color: #657080; }
.cart-item { display: flex; align-items: start; justify-content: space-between; gap: 12px; padding-bottom: 14px; border-bottom: 1px solid #e8e2db; }
.cart-item div { display: grid; gap: 5px; }
.cart-item span { color: #657080; font-size: .9rem; }
.cart-item button { border: 0; color: #c63524; background: transparent; font-size: 1.3rem; cursor: pointer; }
.cart-total { display: flex; justify-content: space-between; padding-top: 4px; font-size: 1.1rem; }
.clear-cart { padding: 11px; border: 1px solid #c63524; border-radius: 8px; color: #c63524; background: #fff; font-weight: 700; cursor: pointer; }
.page-shell { flex: 1; min-width: 0; background: #f7f5f2; }
.site-footer { display: flex; align-items: center; justify-content: space-between; gap: 14px; padding: 16px max(16px, calc((100% - 1144px) / 2)); color: #fff; background: #282522; }
.site-footer div { display: flex; align-items: center; gap: 9px; }
.footer-mark { width: 28px; height: 28px; }
.site-footer a { color: #fff; font-weight: 700; }
@media (max-width: 700px) {
  .brand { font-size: 1.05rem; }
  .menu-drawer { top: 72px; left: 0; width: 100%; padding: 16px; }
  .menu-drawer nav { grid-template-columns: 1fr; }
  .page-shell { flex: 1; }
  .site-footer { gap: 12px; flex-direction: column; align-items: flex-start; }
}
</style>

<template>
  <q-app class="app-shell">
    <q-layout view="hHh Lpr fFf">
      <q-header class="app-header">
        <q-toolbar class="content-width q-px-md q-px-lg-xl">
          <q-btn
            flat
            round
            dense
            icon="menu"
            class="lt-md"
            aria-label="Abrir menu"
            @click="drawerOpen = !drawerOpen"
          />

          <router-link to="/" class="brand-link">
            <span class="brand-mark">CR</span>
            <span>
              <span class="brand-name">Comidas Rapidas</span>
              <span class="brand-caption">Sabor que llega rapido</span>
            </span>
          </router-link>

          <q-space />

          <q-btn
            flat
            round
            icon="shopping_bag"
            aria-label="Ver pedido"
            class="cart-button"
          >
            <q-badge color="accent" floating rounded>0</q-badge>
            <q-tooltip>Tu pedido</q-tooltip>
          </q-btn>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawerOpen"
        bordered
        :width="264"
        class="app-drawer"
      >
        <div class="drawer-inner">
          <div class="drawer-kicker">Menu principal</div>
          <q-list padding>
            <q-item
              v-for="item in menuItems"
              :key="item.to"
              v-ripple
              clickable
              :to="item.to"
              exact
              active-class="menu-item-active"
              class="menu-item"
              @click="drawerOpen = false"
            >
              <q-item-section avatar>
                <q-icon :name="item.icon" size="22px" />
              </q-item-section>
              <q-item-section>{{ item.label }}</q-item-section>
              <q-item-section side>
                <q-icon name="chevron_right" size="18px" />
              </q-item-section>
            </q-item>
          </q-list>

          <q-card flat class="drawer-promo q-mt-auto">
            <q-card-section>
              <q-icon name="local_fire_department" size="28px" color="accent" />
              <div class="text-subtitle1 text-weight-bold q-mt-sm">Antojo de hoy</div>
              <div class="text-caption text-grey-7">Descubre algo delicioso para compartir.</div>
              <q-btn unelevated color="accent" label="Ver promociones" to="/categoria/promociones" class="q-mt-md full-width" />
            </q-card-section>
          </q-card>
        </div>
      </q-drawer>

      <q-page-container>
        <div class="desktop-nav content-width q-px-md q-px-lg-xl">
          <q-btn flat no-caps icon="home" label="Inicio" to="/" class="nav-link" />
          <q-btn-dropdown
            flat
            no-caps
            split
            icon="restaurant_menu"
            label="Explorar menu"
            class="menu-dropdown"
          >
            <div class="dropdown-panel">
              <div class="dropdown-intro">
                <div class="dropdown-kicker">Menu digital</div>
                <div class="dropdown-title">Elige tu antojo</div>
                <div class="dropdown-description">Todo preparado al momento.</div>
              </div>
              <q-list class="category-list">
                <q-item
                  v-for="category in categories"
                  :key="category.slug"
                  v-close-popup
                  clickable
                  :to="`/categoria/${category.slug}`"
                  class="category-option"
                >
                  <q-item-section avatar>
                    <q-icon :name="category.icon" size="24px" color="accent" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>{{ category.label }}</q-item-label>
                    <q-item-label caption>Ver productos</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-icon name="arrow_forward" size="18px" />
                  </q-item-section>
                </q-item>
              </q-list>
              <q-separator />
              <q-item v-close-popup clickable to="/nosotros" class="about-option">
                <q-item-section avatar><q-icon name="groups" size="22px" /></q-item-section>
                <q-item-section>Conoce nuestro equipo</q-item-section>
                <q-item-section side><q-icon name="arrow_forward" size="18px" /></q-item-section>
              </q-item>
            </div>
          </q-btn-dropdown>
          <q-btn flat no-caps icon="groups" label="Nosotros" to="/nosotros" class="nav-link" />
        </div>
        <router-view />
      </q-page-container>
    </q-layout>
  </q-app>
</template>

<script setup>
import { ref } from 'vue'
import { categories } from '@/data/menu'

const drawerOpen = ref(false)

const menuItems = [
  { label: 'Inicio', icon: 'home', to: '/' },
  ...categories.map((category) => ({
    label: category.label,
    icon: category.icon,
    to: `/categoria/${category.slug}`
  })),
  { label: 'Nosotros', icon: 'groups', to: '/nosotros' }
]
</script>

<style scoped>
.app-shell {
  --ink: #1d2420;
  --cream: #fffaf0;
  background: var(--cream);
  color: var(--ink);
}

.app-header {
  background: #1d2420;
  color: #fffaf0;
}

.content-width {
  width: min(1180px, 100%);
  margin: 0 auto;
}

.brand-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: inherit;
  text-decoration: none;
}

.brand-mark {
  display: grid;
  width: 38px;
  height: 38px;
  place-items: center;
  border-radius: 12px;
  background: #f2a649;
  color: #1d2420;
  font-size: 13px;
  font-weight: 900;
}

.brand-name,
.brand-caption {
  display: block;
}

.brand-name {
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 0.02em;
}

.brand-caption {
  color: #bdc6be;
  font-size: 11px;
}

.cart-button {
  color: #fffaf0;
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 4px;
  min-height: 54px;
  background: #fffaf0;
  border-bottom: 1px solid #e9e3d6;
}

.nav-link,
.menu-dropdown {
  color: #5f6961;
}

.dropdown-panel {
  width: min(640px, calc(100vw - 32px));
  padding: 18px;
  background: #fffaf0;
}

.dropdown-intro {
  padding: 4px 12px 14px;
}

.dropdown-kicker {
  color: #b56a2c;
  font-size: 10px;
  font-weight: 850;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.dropdown-title {
  margin-top: 4px;
  color: #1d2420;
  font-size: 22px;
  font-weight: 850;
}

.dropdown-description {
  color: #7d867e;
  font-size: 12px;
}

.category-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 4px;
}

.category-option,
.about-option {
  min-height: 64px;
  border-radius: 10px;
  color: #1d2420;
}

.category-option:hover,
.about-option:hover {
  background: #f5e8d0;
}

.category-option .q-item__label--caption {
  color: #8a928b;
}

.app-drawer {
  background: #fffaf0;
}

.drawer-inner {
  display: flex;
  min-height: 100%;
  flex-direction: column;
  padding: 28px 16px 18px;
}

.drawer-kicker {
  padding: 0 12px 8px;
  color: #7d867e;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.menu-item {
  min-height: 48px;
  border-radius: 12px;
  color: #5f6961;
}

.menu-item-active {
  background: #1d2420;
  color: #fffaf0;
}

.drawer-promo {
  background: #f8e7c8;
  border-radius: 16px;
}

@media (max-width: 599px) {
  .desktop-nav {
    display: none;
  }
}

@media (max-width: 430px) {
  .category-list {
    grid-template-columns: 1fr;
  }
}
</style>

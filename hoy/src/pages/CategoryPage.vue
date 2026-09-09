<template>
  <q-page v-if="category" class="category-page">
    <div class="category-wrap">
      <q-breadcrumbs class="category-breadcrumbs q-py-md" active-color="accent">
        <q-breadcrumbs-el label="Inicio" to="/" />
        <q-breadcrumbs-el :label="category.label" />
      </q-breadcrumbs>

      <section class="category-hero">
        <q-img :src="category.banner" :alt="`Banner de ${category.label}`" class="hero-image">
          <div class="hero-overlay absolute-full">
            <div class="hero-copy">
              <q-badge color="accent" text-color="dark" class="q-mb-md">Menu digital</q-badge>
              <h1>{{ category.label }}</h1>
              <p>{{ category.description }}</p>
            </div>
          </div>
        </q-img>
      </section>

      <section class="section-heading q-mt-xl">
        <div>
          <div class="eyebrow">Hecho para tu antojo</div>
          <h2>Elige tu favorito</h2>
        </div>
        <span class="product-count">{{ category.products.length }} opciones</span>
      </section>

      <section class="product-grid">
        <q-card v-for="product in category.products" :key="product.name" flat bordered class="product-card">
          <q-img :src="product.image" :alt="product.name" class="product-image" :ratio="1.28">
            <q-badge v-if="product.tag" color="dark" class="product-tag">{{ product.tag }}</q-badge>
          </q-img>
          <q-card-section class="product-content">
            <div class="row items-start no-wrap q-col-gutter-sm">
              <div class="col">
                <h3>{{ product.name }}</h3>
                <p>{{ product.description }}</p>
              </div>
              <strong class="product-price">{{ formatPrice(product.price) }}</strong>
            </div>
            <q-btn outline color="dark" no-caps icon="add" label="Agregar al pedido" class="add-button q-mt-md full-width" @click="addToCart(product)" />
          </q-card-section>
        </q-card>
      </section>

      <section class="chef-pick q-mt-xl q-mb-xl">
        <div class="chef-icon"><q-icon name="restaurant" size="28px" /></div>
        <div>
          <div class="eyebrow">Recomendacion del chef</div>
          <h2>{{ category.chef }}</h2>
          <p>{{ category.chefNote }}</p>
        </div>
        <q-btn unelevated color="accent" text-color="dark" no-caps label="Lo quiero" icon-right="arrow_forward" class="chef-button" />
      </section>
    </div>
  </q-page>

  <q-page v-else class="flex flex-center">
    <q-spinner color="accent" size="3em" />
  </q-page>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { formatPrice, getCategory } from '@/data/menu'
import { useCart } from '@/composables/useCart'

const route = useRoute()
const category = computed(() => getCategory(route.params.slug))
const { addToCart } = useCart()
</script>

<style scoped>
.category-page {
  background: #fffaf0;
}

.category-wrap {
  width: min(1180px, 100%);
  margin: 0 auto;
  padding: 0 24px;
}

.category-breadcrumbs {
  color: #7d867e;
  font-size: 13px;
}

.category-hero {
  overflow: hidden;
  border-radius: 22px;
  box-shadow: 0 16px 34px rgba(29, 36, 32, 0.12);
}

.hero-image {
  height: clamp(270px, 36vw, 410px);
}

.hero-overlay {
  display: flex;
  align-items: flex-end;
  padding: clamp(22px, 5vw, 56px);
  background: linear-gradient(90deg, rgba(15, 20, 17, 0.8), rgba(15, 20, 17, 0.08));
}

.hero-copy {
  max-width: 560px;
  color: #fffaf0;
}

.hero-copy h1,
.section-heading h2,
.chef-pick h2 {
  margin: 0;
  font-weight: 850;
  letter-spacing: -0.02em;
}

.hero-copy h1 {
  font-size: clamp(34px, 5vw, 66px);
  line-height: 0.98;
}

.hero-copy p {
  max-width: 500px;
  margin: 16px 0 0;
  color: #f4efe4;
  font-size: 17px;
  line-height: 1.5;
}

.section-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
}

.eyebrow {
  color: #b56a2c;
  font-size: 11px;
  font-weight: 850;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.section-heading h2 {
  margin-top: 6px;
  color: #1d2420;
  font-size: 32px;
}

.product-count {
  color: #7d867e;
  font-size: 13px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  margin-top: 24px;
}

.product-card {
  overflow: hidden;
  border-color: #e9e3d6;
  border-radius: 16px;
  background: #fff;
  transition: transform 180ms ease, box-shadow 180ms ease;
}

.product-card:hover {
  box-shadow: 0 14px 28px rgba(29, 36, 32, 0.1);
  transform: translateY(-4px);
}

.product-image {
  background: #e9e3d6;
}

.product-tag {
  top: 12px;
  left: 12px;
  border-radius: 5px;
  font-size: 11px;
}

.product-content {
  min-height: 188px;
  padding: 18px;
}

.product-content h3 {
  margin: 0;
  color: #1d2420;
  font-size: 19px;
  font-weight: 800;
}

.product-content p,
.chef-pick p {
  margin: 8px 0 0;
  color: #6f786f;
  font-size: 13px;
  line-height: 1.5;
}

.product-price {
  color: #b55d2d;
  font-size: 16px;
  white-space: nowrap;
}

.add-button {
  border-radius: 9px;
}

.chef-pick {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 26px 30px;
  border-radius: 18px;
  background: #1d2420;
  color: #fffaf0;
}

.chef-icon {
  display: grid;
  width: 58px;
  height: 58px;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 50%;
  background: #f2a649;
  color: #1d2420;
}

.chef-pick h2 {
  margin-top: 4px;
  font-size: 25px;
}

.chef-pick p {
  max-width: 650px;
  color: #c3cbc3;
}

.chef-button {
  margin-left: auto;
  flex: 0 0 auto;
  border-radius: 9px;
}

@media (max-width: 900px) {
  .product-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 599px) {
  .category-wrap {
    padding: 0 16px;
  }

  .hero-image {
    height: 330px;
  }

  .hero-overlay {
    background: linear-gradient(0deg, rgba(15, 20, 17, 0.82), rgba(15, 20, 17, 0.05));
  }

  .hero-copy p {
    font-size: 14px;
  }

  .product-grid {
    grid-template-columns: 1fr;
  }

  .chef-pick {
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 22px;
  }

  .chef-button {
    width: 100%;
    margin-left: 0;
  }
}
</style>

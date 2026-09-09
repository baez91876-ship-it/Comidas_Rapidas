<template>
  <q-page class="home-page">
    <section class="home-hero">
      <div class="home-hero-copy">
        <q-badge color="accent" text-color="dark">Hecho en Medellin</q-badge>
        <h1>El antojo que estabas esperando.</h1>
        <p>Hamburguesas, perros, pizzas y mucho mas. Pide algo delicioso, preparado al momento y con ingredientes de verdad.</p>
        <q-btn unelevated color="accent" text-color="dark" no-caps label="Explorar el menu" icon-right="arrow_forward" to="/categoria/hamburguesas" />
      </div>
      <div class="hero-note">
        <q-icon name="star" color="accent" size="18px" />
        <span>Favorito de la casa</span>
        <strong>La BBQ</strong>
      </div>
    </section>

    <div class="home-wrap">
      <section class="home-heading">
        <div>
          <div class="eyebrow">Menu digital</div>
          <h2>Explora nuestro menu</h2>
        </div>
        <q-btn unelevated color="accent" text-color="dark" no-caps label="Ver hamburguesas" icon-right="arrow_forward" to="/categoria/hamburguesas" />
      </section>

      <section class="menu-guide">
        <q-icon name="restaurant_menu" size="38px" color="accent" />
        <div>
          <h3>Encuentra todo desde Explorar menu</h3>
          <p>Hamburguesas, perros, pizzas, bebidas, postres y promociones en un solo lugar.</p>
        </div>
        <q-icon name="arrow_forward" size="24px" class="guide-arrow" />
      </section>
    </div>
  </q-page>
</template>

<script setup>
</script>

<style scoped>
.home-page {
  background: #fffaf0;
}

.home-hero {
  position: relative;
  min-height: 470px;
  padding: clamp(56px, 9vw, 110px) max(24px, calc((100% - 1132px) / 2));
  background: linear-gradient(90deg, rgba(21, 29, 24, 0.96) 0%, rgba(21, 29, 24, 0.74) 48%, rgba(21, 29, 24, 0.08) 100%), url('https://images.unsplash.com/photo-1576867757603-05b134ebc379?auto=format&fit=crop&w=2000&q=88') center / cover;
  color: #fffaf0;
}

.home-hero-copy {
  max-width: 580px;
}

.home-hero h1 {
  max-width: 560px;
  margin: 18px 0;
  font-size: clamp(42px, 6vw, 78px);
  font-weight: 850;
  letter-spacing: -0.045em;
  line-height: 0.96;
}

.home-hero p {
  max-width: 500px;
  margin: 0 0 28px;
  color: #d9e0d9;
  font-size: 17px;
  line-height: 1.55;
}

.hero-note {
  position: absolute;
  right: max(24px, calc((100% - 1132px) / 2));
  bottom: 34px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 3px 9px;
  padding: 14px 18px;
  border: 1px solid rgba(255, 250, 240, 0.25);
  border-radius: 10px;
  background: rgba(29, 36, 32, 0.72);
  backdrop-filter: blur(8px);
}

.hero-note span {
  color: #c1cbc0;
  font-size: 11px;
}

.hero-note strong {
  font-size: 15px;
}

.home-wrap {
  width: min(1132px, 100%);
  margin: 0 auto;
  padding: 60px 24px;
}

.home-heading {
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

.home-heading h2 {
  margin: 8px 0 0;
  color: #1d2420;
  font-size: 34px;
  font-weight: 850;
}

.home-heading > span {
  color: #7d867e;
  font-size: 13px;
}

.menu-guide {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-top: 26px;
  padding: 30px 34px;
  border-radius: 16px;
  background: #1d2420;
  color: #fffaf0;
}

.menu-guide h3 {
  margin: 0;
  font-size: 21px;
  font-weight: 800;
}

.menu-guide p {
  margin: 5px 0 0;
  color: #c1cbc0;
  font-size: 13px;
  line-height: 1.5;
}

.guide-arrow {
  margin-left: auto;
  color: #f2a649;
}

@media (max-width: 760px) {
  .menu-guide {
    align-items: flex-start;
  }

  .guide-arrow {
    display: none;
  }
}

@media (max-width: 520px) {
  .menu-guide {
    padding: 24px;
  }
}
</style>

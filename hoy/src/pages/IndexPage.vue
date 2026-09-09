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

  </q-page>
</template>

<style scoped>
.home-page {
  background: #fffaf0;
}

.home-hero {
  position: relative;
  display: flex;
  min-height: calc(100vh - 132px);
  align-items: center;
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

@media (max-width: 760px) {
  .home-hero {
    min-height: calc(100vh - 86px);
    align-items: flex-start;
    padding-top: 76px;
    background-position: 62% center;
  }
}
</style>

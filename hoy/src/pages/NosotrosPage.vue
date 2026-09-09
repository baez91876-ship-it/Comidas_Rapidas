<template>
  <q-page class="about-page">
    <div class="about-wrap">
      <section class="about-intro">
        <div>
          <div class="eyebrow">Conoce nuestra historia</div>
          <h1>Comida honesta, hecha para compartir.</h1>
          <p>Comidas Rapidas nacio en Medellin con una idea sencilla: servir recetas abundantes, ingredientes frescos y un trato cercano en cada pedido.</p>
        </div>
        <q-img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1100&q=85" alt="Equipo preparando comida" class="about-image" />
      </section>

      <section class="info-grid q-mt-xl">
        <q-card flat class="info-card">
          <q-icon name="location_on" color="accent" size="28px" />
          <div class="info-label">Visitanos</div>
          <p>Calle 10 # 35-18<br />Medellin, Antioquia</p>
        </q-card>
        <q-card flat class="info-card">
          <q-icon name="schedule" color="accent" size="28px" />
          <div class="info-label">Horarios</div>
          <p>Lun - Jue: 12:00 m - 10:00 pm<br />Vie - Dom: 12:00 m - 11:00 pm</p>
        </q-card>
        <q-card flat class="info-card">
          <q-icon name="phone" color="accent" size="28px" />
          <div class="info-label">Pedidos</div>
          <p>+57 300 456 7890<br />WhatsApp disponible</p>
        </q-card>
      </section>

      <section class="team-section q-mt-xl q-mb-xl">
        <div class="section-heading">
          <div>
            <div class="eyebrow">Las personas detras del sabor</div>
            <h2>Nuestro equipo</h2>
          </div>
          <q-btn flat color="dark" no-caps icon="chat" label="Escribenos" href="https://wa.me/573004567890" target="_blank" />
        </div>
        <div class="team-grid q-mt-lg">
          <q-card v-for="person in team" :key="person.name" flat bordered class="team-card">
            <q-img :src="person.image" :alt="person.name" :ratio="1.18" />
            <q-card-section>
              <div class="team-role">{{ person.role }}</div>
              <h3>{{ person.name }}</h3>
              <p>{{ person.description }}</p>
            </q-card-section>
          </q-card>
        </div>
      </section>
    </div>
  </q-page>
</template>

<script setup>
const team = [
  { name: 'Camila Torres', role: 'Chef principal', description: 'Convierte ingredientes sencillos en recetas con mucho sabor.', image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=85' },
  { name: 'Juan Esteban', role: 'Atencion y caja', description: 'Te ayuda a elegir y se asegura de que tu pedido salga perfecto.', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=85' },
  { name: 'Mateo Rios', role: 'Domicilios', description: 'Lleva cada pedido caliente y a tiempo hasta tu puerta.', image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=85' }
]
</script>

<style scoped>
.about-page {
  background: #fffaf0;
}

.about-wrap {
  width: min(1180px, 100%);
  margin: 0 auto;
  padding: clamp(32px, 6vw, 76px) 24px 0;
}

.about-intro {
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
  align-items: center;
  gap: clamp(28px, 6vw, 80px);
}

.eyebrow,
.team-role {
  color: #b56a2c;
  font-size: 11px;
  font-weight: 850;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.about-intro h1 {
  max-width: 600px;
  margin: 10px 0 18px;
  color: #1d2420;
  font-size: clamp(38px, 5vw, 68px);
  font-weight: 850;
  letter-spacing: -0.035em;
  line-height: 0.98;
}

.about-intro p {
  max-width: 520px;
  margin: 0;
  color: #677168;
  font-size: 17px;
  line-height: 1.65;
}

.about-image {
  height: clamp(300px, 40vw, 480px);
  border-radius: 22px;
  box-shadow: 0 16px 34px rgba(29, 36, 32, 0.12);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.info-card {
  padding: 24px;
  border: 1px solid #e9e3d6;
  border-radius: 16px;
  background: #fff;
}

.info-label {
  margin-top: 18px;
  color: #1d2420;
  font-weight: 800;
}

.info-card p,
.team-card p {
  margin: 8px 0 0;
  color: #6f786f;
  font-size: 13px;
  line-height: 1.6;
}

.section-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
}

.section-heading h2 {
  margin: 7px 0 0;
  color: #1d2420;
  font-size: 32px;
  font-weight: 850;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.team-card {
  overflow: hidden;
  border-color: #e9e3d6;
  border-radius: 16px;
  background: #fff;
}

.team-card h3 {
  margin: 6px 0 0;
  color: #1d2420;
  font-size: 20px;
  font-weight: 800;
}

@media (max-width: 760px) {
  .about-intro,
  .info-grid,
  .team-grid {
    grid-template-columns: 1fr;
  }

  .about-intro h1 {
    font-size: 46px;
  }
}
</style>

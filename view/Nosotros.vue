<script setup>
const team = [
  { name: 'Laura Gómez', role: 'Chef y fundadora', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=700&q=85' },
  { name: 'Mateo Ruiz', role: 'Atención y caja', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=85' },
  { name: 'Santiago León', role: 'Domicilios', image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=700&q=85' }
]
</script>
<template>
  <main class="about-page">
    <section class="about-hero"><img src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1800&q=85" alt="Nuestro restaurante" class="about-image"><div class="about-content"><span class="eyebrow">Hecho con cariño</span><h1>Nosotros</h1><p>Una esquina de sabor para comer rico, rápido y sin complicaciones.</p></div></section>
    <div class="about-grid"><article class="info-card"><span class="eyebrow">Nuestra historia</span><h2>De una cocina pequeña a tu lugar favorito</h2><p>Nacimos en 2018 con una plancha, recetas familiares y la idea de servir comida rápida con ingredientes honestos. Hoy seguimos cocinando cada pedido con la misma energía de nuestro primer día.</p></article><article class="info-card"><span class="eyebrow">Visítanos</span><h2>Calle 85 # 12-24, Bogotá</h2><p>Lunes a jueves: 12:00 m - 10:00 p. m.<br>Viernes y sábado: 12:00 m - 11:00 p. m.<br>Domingo: 1:00 p. m. - 9:00 p. m.</p><a class="primary-button" href="https://wa.me/573005550188" target="_blank" rel="noopener noreferrer">WhatsApp: 300 555 0188</a></article></div>
    <h2 class="team-title">El equipo detrás de tu pedido</h2><div class="team-grid"><article v-for="person in team" :key="person.name" class="team-card"><a :href="`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(person.name + ' restaurante')}`" target="_blank" rel="noopener noreferrer"><img :src="person.image" :alt="person.name"></a><div><h3>{{ person.name }}</h3><p>{{ person.role }}</p></div></article></div>
  </main>
</template>
<style scoped>
.about-page { width: min(1180px, 100%); margin: auto; padding: 32px clamp(16px, 4vw, 48px) 56px; }
.about-hero { position: relative; min-height: 280px; overflow: hidden; border-radius: 16px; color: #fff; } .about-image { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; } .about-content { position: relative; min-height: 280px; display: flex; flex-direction: column; justify-content: end; padding: clamp(24px, 5vw, 52px); background: linear-gradient(0deg, #111cdd, #111c1100); }
.eyebrow { color: #c63524; font-size: .8rem; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; } .about-content .eyebrow { color: #ffd86a; } h1 { margin: 10px 0 0; font-size: clamp(2.2rem, 6vw, 4.2rem); } .about-content p { margin: 10px 0 0; font-size: 1.05rem; }
.about-grid, .team-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; margin-top: 36px; } .info-card { padding: 28px; border: 1px solid #e5ddd6; border-radius: 12px; background: #fff; } .info-card h2 { margin: 10px 0; } .info-card p, .team-card p { color: #657080; line-height: 1.7; }
.primary-button { display: inline-block; margin-top: 12px; padding: 12px 16px; border-radius: 8px; color: #fff; background: #c63524; font-weight: 800; text-decoration: none; } .team-title { margin: 48px 0 20px; } .team-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); margin-top: 0; } .team-card { overflow: hidden; border: 1px solid #e5ddd6; border-radius: 12px; background: #fff; } .team-card img { display: block; width: 100%; aspect-ratio: 1; object-fit: cover; } .team-card div { padding: 16px; } .team-card h3 { margin: 0; } .team-card p { margin: 6px 0 0; }
@media (max-width: 700px) { .about-grid, .team-grid { grid-template-columns: 1fr; } }
</style>

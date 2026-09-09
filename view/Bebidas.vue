<script setup>
import MenuCategoria from '../hoy/src/components/MenuCategoria.vue'
const items = [
  { name: 'Limonada Natural', description: 'Limón recién exprimido, agua fría y un toque de hierbabuena.', price: '$7.500', tag: 'Más pedido', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=85' },
  { name: 'Gaseosa Personal', description: 'Elige entre las opciones disponibles, servida bien fría.', price: '$5.500', image: 'https://images.unsplash.com/photo-1629203849820-fdd70d49c38e?auto=format&fit=crop&w=900&q=85' },
  { name: 'Malteada de Chocolate', description: 'Helado de chocolate, leche, crema y lluvia de chocolate.', price: '$12.500', tag: 'Favorita', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=85' },
  { name: 'Té Frío de Durazno', description: 'Té negro, durazno natural, hielo y rodajas de naranja.', price: '$8.500', tag: 'Nuevo', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=85' }
]
const chefPick = { name: 'Soda Frutal de la Casa', description: 'Maracuyá, frutos rojos, hierbabuena y burbujas para acompañar cualquier antojo.', price: '$10.500', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1200&q=85' }
</script>
<template><MenuCategoria title="Bebidas" description="Opciones frías y refrescantes para acompañar tu comida favorita." banner="https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1800&q=85" :items="items" :chef-pick="chefPick" /></template>

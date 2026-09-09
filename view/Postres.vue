<script setup>
import MenuCategoria from '../hoy/src/components/MenuCategoria.vue'
const items = [
  { name: 'Brownie con Helado', description: 'Brownie tibio de chocolate, helado de vainilla y salsa de chocolate.', price: '$11.500', tag: 'Más pedido', image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=900&q=85' },
  { name: 'Cheesecake de Frutos Rojos', description: 'Base crocante, crema de queso y compota de frutos rojos.', price: '$12.500', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=85' },
  { name: 'Waffle de Arequipe', description: 'Waffle dorado, arequipe, banano, crema y nueces.', price: '$13.500', tag: 'Nuevo', image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=900&q=85' },
  { name: 'Copa de Frutas', description: 'Frutas de temporada, yogur griego, granola y miel.', price: '$10.500', tag: 'Ligero', image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=900&q=85' }
]
const chefPick = { name: 'Volcán de Chocolate', description: 'Bizcocho de chocolate con centro líquido, helado de vainilla y frutos rojos.', price: '$14.500', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=85' }
</script>
<template><MenuCategoria title="Postres" description="El final dulce que merece tu comida: casero, tibio y recién servido." banner="https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=1800&q=85" :items="items" :chef-pick="chefPick" /></template>

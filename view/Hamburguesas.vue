<script setup>
import MenuCategoria from '../hoy/src/components/MenuCategoria.vue'

const items = [
  { name: 'La Clásica', description: 'Carne de res, cheddar, lechuga, tomate y salsa de la casa.', price: '$18.500', tag: 'Más pedido', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85' },
  { name: 'BBQ Ahumada', description: 'Carne de res, queso mozzarella, cebolla crispy y BBQ ahumada.', price: '$22.500', tag: 'Nuevo', image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=900&q=85' },
  { name: 'Doble Bacon', description: 'Doble carne, doble cheddar, tocineta crocante y pepinillos.', price: '$27.500', tag: 'Favorita', image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=900&q=85' },
  { name: 'Verde', description: 'Portobello, aguacate, tomate, rúgula y mayonesa de hierbas.', price: '$20.500', tag: 'Vegetariana', image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=900&q=85' }
]
const chefPick = { name: 'La Brasa de la Casa', description: 'Nuestra hamburguesa insignia con carne madurada, provolone, cebolla caramelizada y salsa secreta.', price: '$25.500', image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=1200&q=85' }
</script>

<template><MenuCategoria title="Hamburguesas" description="Carne jugosa, pan artesanal y combinaciones hechas para disfrutar sin afán." banner="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1800&q=85" :items="items" :chef-pick="chefPick" /></template>

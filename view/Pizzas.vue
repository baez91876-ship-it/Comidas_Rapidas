<script setup>
import MenuCategoria from '../hoy/src/components/MenuCategoria.vue'
const items = [
  { name: 'Pepperoni', description: 'Salsa de tomate, mozzarella, pepperoni y orégano.', price: '$24.500', tag: 'Más pedido', image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=85' },
  { name: 'Cuatro Quesos', description: 'Mozzarella, parmesano, azul y provolone sobre masa artesanal.', price: '$28.500', tag: 'Favorita', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85' },
  { name: 'Carnes', description: 'Jamón, pepperoni, tocineta, chorizo y mozzarella.', price: '$30.500', tag: 'Nueva', image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=900&q=85' },
  { name: 'Vegetariana', description: 'Champiñones, pimentón, cebolla morada, tomate y aceitunas.', price: '$25.500', tag: 'Vegetariana', image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=85' }
]
const chefPick = { name: 'Pizza Brasa', description: 'Masa delgada, mozzarella fresca, chorizo artesanal, cebolla caramelizada y miel picante.', price: '$29.500', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1200&q=85' }
</script>
<template><MenuCategoria title="Pizzas" description="Masas artesanales, ingredientes frescos y horno caliente en cada porción." banner="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1800&q=85" :items="items" :chef-pick="chefPick" /></template>

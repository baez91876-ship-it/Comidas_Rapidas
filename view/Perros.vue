<script setup>
import MenuCategoria from '../hoy/src/components/MenuCategoria.vue'
const items = [
  { name: 'Perro Especial', description: 'Salchicha, queso, tocineta, papitas, salsa de piña y de la casa.', price: '$16.500', tag: 'Más pedido', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQRWcwouDWa-Sll4k4-n4pWngVnNv3cOXYhG8w4FDsTg&s=10' },
  { name: 'Perro BBQ', description: 'Salchicha ahumada, cebolla crispy, queso y BBQ dulce.', price: '$17.500', tag: 'Nuevo', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkSAWBN_mpIhI9nYUuvmwDWoFiX9cE1qd5-CGuwEvAxI-L2U0ewAaasIyH&s=10' },
  { name: 'Perro Picante', description: 'Salchicha, jalapeños, chorizo, queso fundido y salsa picante.', price: '$18.500', tag: 'Picante', image: 'https://ranchera.com.co/wp-content/uploads/2022/01/perro-con-pina-a-la-parrilla-tocineta-y-jalapeno.png' },
  { name: 'Perro Veggie', description: 'Salchicha vegetal, aguacate, maíz, tomate y salsa de ajo.', price: '$17.500', tag: 'Vegetariano', image: 'https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=900&q=85' }
]
const chefPick = { name: 'Perro Callejero', description: 'La versión de la casa con salchicha alemana, chorizo, queso gratinado y todos los toppings.', price: '$21.500', image: 'https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=1200&q=85' }
</script>
<template><MenuCategoria title="Perros" description="Sabor callejero colombiano con toppings generosos y salsas preparadas en casa." banner="https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=1800&q=85" :items="items" :chef-pick="chefPick" /></template>

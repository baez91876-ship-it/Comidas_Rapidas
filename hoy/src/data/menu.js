export const categories = [
  {
    slug: 'hamburguesas',
    label: 'Hamburguesas',
    icon: 'lunch_dining',
    description: 'Carne jugosa, pan suave y combinaciones hechas para disfrutar sin afan.',
    banner: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1800&q=85',
    accent: '#d66b3d',
    products: [
      { name: 'La Clasica', description: 'Carne de res, queso cheddar, lechuga, tomate y salsa de la casa.', price: 18500, tag: 'Mas pedida', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85' },
      { name: 'La BBQ', description: 'Doble carne, queso ahumado, tocineta crocante y salsa BBQ.', price: 23900, tag: 'Favorita', image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=900&q=85' },
      { name: 'La Verde', description: 'Portobello grillado, aguacate, tomate, rucula y mayonesa de ajo.', price: 19900, tag: 'Vegetariana', image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=900&q=85' },
      { name: 'La Picante', description: 'Carne de res, jalapenos, pepper jack, cebolla crispy y chipotle.', price: 22500, tag: 'Picante', image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=900&q=85' }
    ],
    chef: 'La BBQ',
    chefNote: 'La combinacion de tocineta y BBQ es el punto exacto entre ahumado, dulce y crocante.'
  },
  {
    slug: 'perros',
    label: 'Perros',
    icon: 'fastfood',
    description: 'Perros calientes cargados de sabor, toppings abundantes y salsas de la casa.',
    banner: 'https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=1800&q=85',
    accent: '#e39b3b',
    products: [
      { name: 'Perro Tradicional', description: 'Salchicha, papa ripio, queso, cebolla y salsas clasicas.', price: 14500, tag: 'Clasico', image: 'https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=900&q=85' },
      { name: 'Perro Mexicano', description: 'Salchicha, guacamole, pico de gallo, jalapeno y nachos.', price: 18900, tag: 'Picante', image: 'https://images.unsplash.com/photo-1619740455993-9e612b1d9c16?auto=format&fit=crop&w=900&q=85' },
      { name: 'Perro Tocineta', description: 'Salchicha, tocineta, queso fundido, maiz y salsa de la casa.', price: 17900, tag: 'Mas pedido', image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=900&q=85' },
      { name: 'Perro Veggie', description: 'Salchicha vegetal, champinones, cebolla caramelizada y mostaza miel.', price: 16900, tag: 'Vegetariano', image: 'https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=900&q=85' }
    ],
    chef: 'Perro Mexicano',
    chefNote: 'Un bocado con frescura, crocancia y ese picante que despierta todo el menu.'
  },
  {
    slug: 'pizzas',
    label: 'Pizzas',
    icon: 'local_pizza',
    description: 'Masa artesanal, borde dorado y quesos fundidos para compartir la mesa.',
    banner: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1800&q=85',
    accent: '#c9553d',
    products: [
      { name: 'Pepperoni', description: 'Salsa de tomate, mozzarella, pepperoni y oregano fresco.', price: 28900, tag: 'Mas pedida', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85' },
      { name: 'Pollo BBQ', description: 'Pollo en tiras, mozzarella, cebolla morada y BBQ ahumada.', price: 31900, tag: 'Favorita', image: 'https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?auto=format&fit=crop&w=900&q=85' },
      { name: 'Vegetariana', description: 'Pimenton, champinones, aceitunas, cebolla y albahaca.', price: 29900, tag: 'Vegetariana', image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=85' },
      { name: 'Carnes', description: 'Pepperoni, jamon, tocineta, carne y mozzarella gratinada.', price: 33900, tag: 'Para compartir', image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=900&q=85' }
    ],
    chef: 'Pollo BBQ',
    chefNote: 'Una pizza equilibrada y ahumada, pensada para que nadie se quede sin su porcion.'
  },
  {
    slug: 'bebidas',
    label: 'Bebidas',
    icon: 'local_drink',
    description: 'Opciones frias y refrescantes para acompanar cada antojo.',
    banner: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1800&q=85',
    accent: '#4b8f8c',
    products: [
      { name: 'Limonada de Coco', description: 'Limon, coco cremoso, hielo y un toque de leche condensada.', price: 9900, tag: 'Favorita', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85' },
      { name: 'Limonada Natural', description: 'Limon recien exprimido, agua fria y hielo al gusto.', price: 7500, tag: 'Refrescante', image: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?auto=format&fit=crop&w=900&q=85' },
      { name: 'Malteada de Vainilla', description: 'Helado de vainilla, leche, crema batida y sprinkles.', price: 12900, tag: 'Dulce', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=85' },
      { name: 'Gaseosa Personal', description: 'Tu sabor favorito bien frio para acompanarlo todo.', price: 5500, tag: 'Clasica', image: 'https://images.unsplash.com/photo-1629203849820-fdd70d49c38e?auto=format&fit=crop&w=900&q=85' }
    ],
    chef: 'Limonada de Coco',
    chefNote: 'Cremosa, citrica y muy fria: el acompanamiento perfecto para una comida completa.'
  },
  {
    slug: 'postres',
    label: 'Postres',
    icon: 'cake',
    description: 'El cierre dulce que hace que la visita valga la pena repetir.',
    banner: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1800&q=85',
    accent: '#b85c83',
    products: [
      { name: 'Brownie con Helado', description: 'Brownie tibio de chocolate, helado de vainilla y salsa de chocolate.', price: 13900, tag: 'Mas pedido', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85' },
      { name: 'Cheesecake de Frutos Rojos', description: 'Base crocante, crema de queso y compota de frutos rojos.', price: 14900, tag: 'Nuevo', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=85' },
      { name: 'Churros', description: 'Churros dorados, azucar y canela con salsa de arequipe.', price: 10900, tag: 'Para compartir', image: 'https://images.unsplash.com/photo-1624371414361-e670edf4898d?auto=format&fit=crop&w=900&q=85' },
      { name: 'Copa de Helado', description: 'Tres sabores de helado, crema batida y topping crocante.', price: 11900, tag: 'Clasico', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=85' }
    ],
    chef: 'Brownie con Helado',
    chefNote: 'Chocolate tibio y helado frio: un contraste sencillo que siempre funciona.'
  },
  {
    slug: 'promociones',
    label: 'Promociones',
    icon: 'local_offer',
    description: 'Combos pensados para comer rico, compartir y cuidar el bolsillo.',
    banner: 'https://images.unsplash.com/photo-1576867757603-05b134ebc379?auto=format&fit=crop&w=1800&q=85',
    accent: '#47765e',
    products: [
      { name: 'Combo Doble', description: 'Dos hamburguesas clasicas, papas grandes y dos bebidas.', price: 42900, tag: 'Ahorra', image: 'https://images.unsplash.com/photo-1576867757603-05b134ebc379?auto=format&fit=crop&w=900&q=85' },
      { name: 'Combo Familiar', description: 'Cuatro perros, papas familiares y gaseosa de 1.5 litros.', price: 55900, tag: 'Para compartir', image: 'https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=900&q=85' },
      { name: 'Martes de Pizza', description: 'Pizza grande de dos sabores y dos bebidas personales.', price: 34900, tag: 'Solo martes', image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=85' },
      { name: 'Plan Antojo', description: 'Hamburguesa clasica, papas, bebida y brownie con helado.', price: 32900, tag: 'Nuevo', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85' }
    ],
    chef: 'Combo Doble',
    chefNote: 'La opcion favorita para resolver el antojo de dos personas sin complicaciones.'
  }
]

export const getCategory = (slug) => categories.find((category) => category.slug === slug)

export const formatPrice = (price) => `$${price.toLocaleString('es-CO')}`

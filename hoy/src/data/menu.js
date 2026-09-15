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
      { name: 'La BBQ', description: 'Doble carne, queso ahumado, tocineta crocante y salsa BBQ.', price: 23900, tag: 'Favorita', image: 'https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=900&q=85' },
      { name: 'La Verde', description: 'Portobello grillado, aguacate, tomate, rucula y mayonesa de ajo.', price: 19900, tag: 'Vegetariana', image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=900&q=85' },
      { name: 'La Picante', description: 'Carne de res, jalapenos, pepper jack, cebolla crispy y chipotle.', price: 22500, tag: 'Picante', image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=900&q=85' },
      { name: 'La Criolla', description: 'Carne de res, queso costeño, cebolla caramelizada y salsa criolla.', price: 22900, tag: 'Nuevo', image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=85' },
      { name: 'La Doble Queso', description: 'Doble carne, cheddar y mozzarella con pepinillos y salsa especial.', price: 24900, tag: 'Recomendada', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=85' }
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
      { name: 'Perro Mexicano', description: 'Salchicha, guacamole, pico de gallo, jalapeno y nachos.', price: 18900, tag: 'Picante', image: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=900&q=85' },
      { name: 'Perro Tocineta', description: 'Salchicha, tocineta, queso fundido, maiz y salsa de la casa.', price: 17900, tag: 'Mas pedido', image: 'https://images.unsplash.com/photo-1541214113241-21578d2d9b62?auto=format&fit=crop&w=900&q=85' },
      { name: 'Perro Veggie', description: 'Salchicha vegetal, champinones, cebolla caramelizada y mostaza miel.', price: 16900, tag: 'Vegetariano', image: 'https://images.unsplash.com/photo-1496905583330-eb54c7e5915a?auto=format&fit=crop&w=900&q=85' },
      { name: 'Perro Ranchero', description: 'Salchicha premium, chorizo, maiz tierno, queso y salsa BBQ.', price: 19500, tag: 'Nuevo', image: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=900&h=700&crop=edges&q=85' },
      { name: 'Perro Hawaiano', description: 'Salchicha, pina caramelizada, queso mozzarella y salsa de pina.', price: 18900, tag: 'Dulce salado', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThkGE6nmKuua_hvRMTjd6cYVHI6GaXKXPx00I-pXlwGk4q_UtVPVrfsf0&s=10' }
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
      { name: 'Pepperoni', description: 'Salsa de tomate, mozzarella, pepperoni y oregano fresco.', price: 28900, tag: 'Mas pedida', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85' },
      { name: 'Pollo BBQ', description: 'Pollo en tiras, mozzarella, cebolla morada y BBQ ahumada.', price: 31900, tag: 'Favorita', image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=900&q=85' },
      { name: 'Vegetariana', description: 'Pimenton, champinones, aceitunas, cebolla y albahaca.', price: 29900, tag: 'Vegetariana', image: 'https://images.unsplash.com/photo-1552539618-7eec9b4d1796?auto=format&fit=crop&w=900&q=85' },
      { name: 'Carnes', description: 'Pepperoni, jamon, tocineta, carne y mozzarella gratinada.', price: 33900, tag: 'Para compartir', image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=900&q=85' },
      { name: 'Hawaiana', description: 'Salsa de tomate, jamon, pina, mozzarella y oregano.', price: 30900, tag: 'Clasica', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=85' },
      { name: 'Napolitana', description: 'Tomate fresco, albahaca, mozzarella y toque de aceite de oliva.', price: 29900, tag: 'Artesanal', image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=900&q=85' }
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
      { name: 'Limonada Natural', description: 'Limon recien exprimido, agua fria y hielo al gusto.', price: 7500, tag: 'Refrescante', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=85' },
      { name: 'Malteada de Vainilla', description: 'Helado de vainilla, leche, crema batida y sprinkles.', price: 12900, tag: 'Dulce', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=85' },
      { name: 'Gaseosa Personal', description: 'Tu sabor favorito bien frio para acompanarlo todo.', price: 5500, tag: 'Clasica', image: 'https://images.unsplash.com/photo-1629203849820-fdd70d49c38e?auto=format&fit=crop&w=900&q=85' },
      { name: 'Soda de Maracuya', description: 'Pulpa natural de maracuya, soda fria y rodajas de limon.', price: 10500, tag: 'Nuevo', image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=85' },
      { name: 'Te Helado de Durazno', description: 'Te negro, durazno natural, hielo y toque citrico.', price: 8500, tag: 'Ligera', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=85' }
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
      { name: 'Copa de Helado', description: 'Tres sabores de helado, crema batida y topping crocante.', price: 11900, tag: 'Clasico', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=85' },
      { name: 'Torta de Zanahoria', description: 'Bizcocho especiado con cobertura de queso crema y nuez.', price: 12900, tag: 'Casero', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85' },
      { name: 'Flan de Caramelo', description: 'Flan suave de vainilla con caramelo artesanal.', price: 9900, tag: 'Tradicional', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=85' }
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
      { name: 'Combo Doble', description: 'Dos hamburguesas clasicas, papas grandes y dos bebidas.', price: 42900, tag: 'Ahorra', image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=900&q=85' },
      { name: 'Combo Familiar', description: 'Cuatro perros, papas familiares y gaseosa de 1.5 litros.', price: 55900, tag: 'Para compartir', image: 'https://images.unsplash.com/photo-1576867757603-05b134ebc379?auto=format&fit=crop&w=900&q=85' },
      { name: 'Martes de Pizza', description: 'Pizza grande de dos sabores y dos bebidas personales.', price: 34900, tag: 'Solo martes', image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=900&q=85' },
      { name: 'Plan Antojo', description: 'Hamburguesa clasica, papas, bebida y brownie con helado.', price: 32900, tag: 'Nuevo', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=85' },
      { name: 'Combo Perro y Papas', description: 'Perro tocineta, papas medianas y gaseosa personal.', price: 24900, tag: 'Antojo rapido', image: 'https://images.unsplash.com/photo-1541214113241-21578d2d9b62?auto=format&fit=crop&w=900&q=85' },
      { name: 'Final Dulce', description: 'Churros con arequipe y brownie con helado para compartir.', price: 19900, tag: 'Postre x2', image: 'https://images.unsplash.com/photo-1624371414361-e670edf4898d?auto=format&fit=crop&w=900&q=85' }
    ],
    chef: 'Combo Doble',
    chefNote: 'La opcion favorita para resolver el antojo de dos personas sin complicaciones.'
  }
]

export const getCategory = (slug) => categories.find((category) => category.slug === slug)

export const formatPrice = (price) => `$${price.toLocaleString('es-CO')}`

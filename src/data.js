const productos = [
    {
      id: "Buzo-Man-fest-[Blanco]",
      nombre: 'Buzo Man|fest [Blanco]',
      descripcion: "Tela 100% algodon con corta oversize",
      stock: 10,
      precio: 25000,
      categoria: "buzos",
      imagen: "/img/Catalogo/buzo-blanco.jpg"
    },
    {
      id: "Buzo-Tussy-OVERSIZE-[Rosa]",
      nombre: 'Buzo Tussy OVERSIZE [Rosa]',
      descripcion: "Tela 100% algodon con corta oversize",
      stock: 10,
      precio: 35000,
      categoria: "buzos",
      imagen: '/img/Catalogo/buzo-rosa.webp'
    },
    {
      id: "Crop-REHAB-[Negro]",
      nombre: 'Crop REHAB [Negro]',
      descripcion: "Poliester corte rigido",
      stock: 10,
      precio: 19000,
      categoria: "remeras",
      imagen:  '/img/Catalogo/crop.webp'
    },
    {
      id: "Pantalon-CARGO-[Gris]",
      nombre: 'Pantalon CARGO [Gris]',
      descripcion: "Pantalon super ancho",
      stock: 10,
      precio: 25000,
      categoria: "pantalones",
      imagen: '/img/Catalogo/pantalon-gris.jpg'
    },
    {
      id: "Campera-Universitaria-T-Shit",
      nombre: 'Campera Universitaria T-Shit',
      descripcion: "Tela 100% algodon con corta oversize",
      stock: 10,
      precio: 25000,
      categoria: "remeras",
      imagen: '/img/Catalogo/campera-verde.webp'
    },
    {
      id: "Camisaco-Family",
      nombre:'Camisaco Family',
      descripcion: "Tela 100% algodon con corta oversize",
      stock: 10,
      precio: 25000,
      categoria: "remeras",
      imagen: '/img/Catalogo/camisaco.webp'
    },
     
  ];
  
  const obtenerProductos = new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000); 
  });
  
  export default obtenerProductos
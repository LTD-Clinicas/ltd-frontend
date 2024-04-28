/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: 'clinica 1',
    href: '#',
    price: '',
    imageSrc: 'https://cdn-icons-png.flaticon.com/512/3367/3367695.png',
    imageAlt: 'icone da clinica de psicologia.',
  },
  {
    id: 2,
    name: 'clinica 2',
    href: '#',
    price: '',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWgqQ6OyRPiEUR9Ct0ed56MtBeYLjPpoJaJADlh1xE-w&s',
    imageAlt: 'Icone simbolizando a mentoria de direito.',
  },
  {
    id: 3,
    name: 'clinica 3',
    href: '#',
    price: '',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5zLiBMSllXGveR6zZeuzJd3X8ujGGKeJ2DkNiQ9phvQ&s',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'cinicla 4',
    href: '#',
    price: '',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'cinicla 5',
    href: '#',
    price: '',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 6,
    name: 'cinicla 6',
    href: '#',
    price: '',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 7,
    name: 'cinicla 7',
    href: '#',
    price: '',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 8,
    name: 'cinicla 8',
    href: '#',
    price: '',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
]

export default function Example() {
  return (
    <div className="bg-white">
       <img
        src="https://logodownload.org/wp-content/uploads/2014/12/estacio-logo-0.png"
        alt="Ícone"
        className="absolute top-0 left-0 -mt-12 -ml-4 h-40 w-40"
      />
       <p className="absolute top-0 right-0 m-4 text-gray-700">Login</p>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
    
  )
}

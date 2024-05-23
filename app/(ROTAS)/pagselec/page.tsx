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
    name: 'Psicologia',
    href: './login',
    price: '',
    imageSrc: 'https://cdn-icons-png.flaticon.com/512/3367/3367695.png',
    imageAlt: 'icone da clinica de psicologia.',
  },
  {
    id: 2,
    name: 'Direito',
    href: '#',
    price: '',
    imageSrc: 'https://gifs.eco.br/wp-content/uploads/2023/07/imagens-de-simbolo-direito-png-12.png',
    imageAlt: 'Icone simbolizando a mentoria de direito.',
  },
  {
    id: 3,
    name: 'Fisioterapia',
    href: '#',
    price: '',
    imageSrc: 'https://www.matrizesdebordados.com/image/cache/data/profissoes/simbolo%20de%20fisioterapia-600x600.png',
    imageAlt: 'clinica enfermagem',
  },
  {
    id: 4,
    name: 'Nutrição',
    href: '#',
    price: '',
    imageSrc: 'https://seeklogo.com/images/S/S__mbolo_de_Nutri____o-logo-31DFE3FB28-seeklogo.com.png',
    imageAlt: '',
  },
  // More products...
]


export default function Example() {
  return (
    <div className="bg-white">
      <img
        src="https://logodownload.org/wp-content/uploads/2014/12/estacio-logo-0.png"
        alt="Ícone"
        className="absolute top-0 left-0 -mt-8 -ml-4 h-32 w-32"
      />
      <a href="./login" className="absolute top-0 right-0 m-4 text-gray-700">Login</a>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="sm:col-span-1 lg:col-span-1 xl:col-span-2">
              <a href={product.href} className="group flex flex-col items-center">
                <div className="aspect-w-1 aspect-h-1 w-full  overflow-hidden rounded-lg bg-gray-200">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-60 w-60 object-cover object-center group-hover:opacity-75 ml-20"
                    style={{ marginLeft: '170px' }}
                  />
                </div>
                <h3 className="mt-4 text-lg text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
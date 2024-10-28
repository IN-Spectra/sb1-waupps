import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'IPA "Хмельной хмель"',
    type: 'Крафтовое',
    price: '320 ₽',
    description: 'Насыщенный хмелевой вкус с цитрусовыми нотками',
    abv: '6.2%'
  },
  {
    id: 2,
    name: 'Stout "Чёрный бархат"',
    type: 'Крафтовое',
    price: '340 ₽',
    description: 'Плотный стаут с кофейно-шоколадным вкусом',
    abv: '5.8%'
  },
  {
    id: 3,
    name: 'Пшеничное "Золотой колос"',
    type: 'Крафтовое',
    price: '280 ₽',
    description: 'Легкое пшеничное пиво с банановыми нотками',
    abv: '4.9%'
  }
];

function Catalog() {
  const [filter, setFilter] = useState('all');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-[#f3be26] mb-8">Каталог продукции</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-800 rounded-lg p-6 border border-[#f3be26]/20"
          >
            <h3 className="text-xl font-bold text-[#f3be26] mb-2">{product.name}</h3>
            <p className="text-gray-400 text-sm mb-2">{product.type}</p>
            <p className="text-gray-300 mb-4">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-[#f3be26] font-bold">{product.price}</span>
              <span className="text-gray-400">ABV: {product.abv}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
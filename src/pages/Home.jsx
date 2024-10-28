import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#f3be26] mb-6">
          Добро пожаловать в Пиво да Пиво
        </h1>
        <p className="text-gray-300 text-xl mb-8">
          Сеть магазинов крафтового и импортного пива
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-gray-800 p-8 rounded-lg border border-[#f3be26]/20">
            <h2 className="text-2xl font-bold text-[#f3be26] mb-4">Наш каталог</h2>
            <p className="text-gray-300 mb-6">
              Широкий выбор крафтового пива, сидров и снеков к пиву
            </p>
            <Link
              to="/catalog"
              className="inline-block bg-[#f3be26] text-gray-900 px-6 py-2 rounded-md font-semibold hover:bg-[#f3be26]/90"
            >
              Смотреть каталог
            </Link>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-lg border border-[#f3be26]/20">
            <h2 className="text-2xl font-bold text-[#f3be26] mb-4">Франшиза</h2>
            <p className="text-gray-300 mb-6">
              Откройте свой магазин под нашим брендом с проверенной бизнес-моделью
            </p>
            <Link
              to="/franchise"
              className="inline-block bg-[#f3be26] text-gray-900 px-6 py-2 rounded-md font-semibold hover:bg-[#f3be26]/90"
            >
              Узнать подробнее
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
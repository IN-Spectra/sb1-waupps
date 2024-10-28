import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-[#f3be26]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-[#f3be26] font-bold text-lg mb-4">Пиво да Пиво</h3>
            <p className="text-gray-400">
              Сеть магазинов крафтового и импортного пива
            </p>
          </div>
          
          <div>
            <h3 className="text-[#f3be26] font-bold text-lg mb-4">Контакты</h3>
            <div className="text-gray-400">
              <p>Телефон: +7 (XXX) XXX-XX-XX</p>
              <p>Email: info@pivodapivo.ru</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-[#f3be26] font-bold text-lg mb-4">Навигация</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-[#f3be26]">
                Главная
              </Link>
              <Link to="/catalog" className="block text-gray-400 hover:text-[#f3be26]">
                Каталог
              </Link>
              <Link to="/franchise" className="block text-gray-400 hover:text-[#f3be26]">
                Франшиза
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© 2024 Пиво да Пиво. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
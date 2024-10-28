function Franchise() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#f3be26] mb-6">
          Франшиза Пиво да Пиво
        </h1>
        <p className="text-gray-300 text-xl">
          Откройте свой магазин разливного пива по проверенной бизнес-модели
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-8 rounded-lg border border-[#f3be26]/20">
          <h2 className="text-2xl font-bold text-[#f3be26] mb-4">Преимущества франшизы</h2>
          <ul className="text-gray-300 space-y-3">
            <li>✓ Проверенная бизнес-модель</li>
            <li>✓ Поддержка на всех этапах</li>
            <li>✓ Обучение персонала</li>
            <li>✓ Отлаженная система поставок</li>
            <li>✓ Маркетинговая поддержка</li>
          </ul>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg border border-[#f3be26]/20">
          <h2 className="text-2xl font-bold text-[#f3be26] mb-4">Условия открытия</h2>
          <div className="text-gray-300 space-y-3">
            <p>🏪 Площадь помещения: от 40 м²</p>
            <p>💰 Инвестиции: от 2 500 000 ₽</p>
            <p>⏱ Окупаемость: от 8 месяцев</p>
            <p>📊 Рентабельность: 25-35%</p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <button className="bg-[#f3be26] text-gray-900 px-8 py-3 rounded-md font-bold text-lg hover:bg-[#f3be26]/90">
          Получить подробную информацию
        </button>
      </div>
    </div>
  );
}

export default Franchise;
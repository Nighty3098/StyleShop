import React from 'react';
import Product from './Product';

const ProductList = ({ addToCart }) => {
  // Данные о продуктах (обычно получаются с бэкенда)
  const products = [
    {
      id: 1,
      title: 'Кожаная куртка',
      price: 12990,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
      description: 'Стильная кожаная куртка черного цвета с качественной фурнитурой.'
    },
    {
      id: 2,
      title: 'Джинсы прямого кроя',
      price: 5990,
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80',
      description: 'Классические джинсы прямого кроя из высококачественного денима.'
    },
    {
      id: 3,
      title: 'Футболка оверсайз',
      price: 2490,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
      description: 'Свободная футболка оверсайз с принтом, унисекс.'
    },
    {
      id: 4,
      title: 'Пальто в клетку',
      price: 15990,
      image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      description: 'Элегантное пальто в клетку средней длины.'
    },
    {
      id: 5,
      title: 'Кроссовки беговые',
      price: 8990,
      image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80',
      description: 'Легкие и удобные кроссовки для бега и повседневной носки.'
    },
    {
      id: 6,
      title: 'Рубашка льняная',
      price: 4990,
      image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=685&q=80',
      description: 'Стильная льняная рубашка свободного кроя, идеальна для лета.'
    },
    {
      id: 7,
      title: 'Шапка вязаная',
      price: 1990,
      image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      description: 'Теплая вязаная шапка из шерсти мериноса.'
    },
    {
      id: 8,
      title: 'Платье миди',
      price: 7990,
      image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=746&q=80',
      description: 'Элегантное платье миди с цветочным принтом.'
    }
  ];

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Каталог одежды</h2>
      <div className="product-list">
        {products.map(product => (
          <Product 
            key={product.id} 
            product={product} 
            addToCart={addToCart} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList; 

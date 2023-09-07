const categories = {
  books: {
    name: 'Books',
    products: [
      {
        id: 1,
        name: 'Kindle',
        description: 'Kindle book abrakadabra....',
        price: 100,
      },
      {
        id: 2,
        name: 'Pocketbook',
        description: 'Pocketbook - book abrakadabra....',
        price: 150,
      },
    ],
  },
  phones: {
    name: 'Phones',
    products: [
      {
        id: 3,
        name: 'Samsung Galaxy S23 Ultra',
        price: 2000,
        description: 'galaxy ... description'
      },
      {
        id: 4,
        name: 'iPhone 100',
        price: 1500,
        description: 'iphone is not just a phone'
      },
      {
        id: 5,
        name: 'Huawei',
        price: 1000,
        description: 'china-phone'
      }
    ],
  },
  tablets: {
    name: 'Tablets',
    products: [
      {
        id: 6,
        name: 'iPad',
        price: 1000,
        description: '...description...'
      },
      {
        id: 7,
        name: 'iPad Pro',
        price: 1500,
        description: '...description...'
      },
      {
        id: 8,
        name: 'Samsung Tab X',
        price: 1700,
        description: '...description...'
      },
    ],
  }
};

const formData = [
  { element: 'input', name: 'userName', type: 'text', placeholder: 'Enter your name' },
  { element: 'select', name: 'city', type: '', placeholder: 'City', options: [
    { value: 'zp', label: 'Zaporizhzhia' },
    { value: 'kh', label: 'Kharkiv' }, 
    { value: 'od', label: 'Odessa' },
    { value: 'ky', label: 'Kyiv'},
  ] },
  { element: 'input', name: 'delivery', type: 'text', placeholder: 'Delivery' },
  { element: 'input', name: 'payment', type: 'radio', placeholder: 'After pay', value: 'non-card' },
  { element: 'input', name: 'payment', type: 'radio', placeholder: 'Credit / Debit card', value: 'card' },
  { element: 'input', name: 'quantity', type: 'number', placeholder: 'Production quantity' },
  { element: 'textarea', name: 'comment', type: 'text', placeholder: 'Comment' },
  { element: 'input', name: 'delivery-btn', type: 'button', placeholder: 'Submit'},
];

const paymentMethods = {
  card: 'Credit / Debit card',
  'non-card': 'After pay',
}

const cities = {
  zp: 'Zaporizhzhia',
  kh: 'Kharkiv',
  od: 'Odessa',
  ky: 'ToKyivronto'
}

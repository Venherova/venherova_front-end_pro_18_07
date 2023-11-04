import axios from 'axios';
import { createElement } from './domHelpers.js';
import { handleCategoryClick } from './eventHandlers.js';
import '../scss/styles.scss';

import { basicUrl } from './common.js';


document.addEventListener('DOMContentLoaded', async () => {
  const menuParent = document.getElementById('menu');

  const { data } = await axios(`${basicUrl}/api/categories`);
  
  const menuWrapper = createElement(
    'div',
    menuParent,
    '',
    { className: 'menu btn-group', role: 'group' },
    
  )

  data.forEach(item => {
    createElement(
      'input', 
    menuWrapper, 
    item.name, 
    {
      'data-id': item.id, type: 'radio', className: 'btn-check', name: 'btnradio', id: `btnradio${item.id}`,
    },
    { click: handleCategoryClick }
  );
    createElement('label', menuWrapper, item.name, { className: 'btn btn-outline-primary', for: `btnradio${item.id}` });
  });
})
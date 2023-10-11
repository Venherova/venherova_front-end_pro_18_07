function showFormHouse() {
  checkViewHouseElements();
  checkFormHouse();

  const parentSelector = '#form form';

  const inputConfigs = [
    { element: 'label', config: { type: 'label', label: 'Enter number of appartments'}},
    { element: 'input', config: { name: 'date', type: 'text', value: house ? house.appartment : '' }},
  ];
  
  for (const item of inputConfigs) {
    switch (item.config.type) {
      case 'button':
        createElement(item.element, parentSelector, '', item.config, item.handler); 
        break;
      case 'label':
        createElement(item.element, parentSelector, item.config.label);
        break;
      default:
        createElement(item.element, parentSelector, '', item.config);
    }
  }
}



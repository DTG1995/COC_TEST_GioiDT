const categories = [{
  id: 1,
  key: 'games',
  displayName: '🕹️ Game',
  show: "enable",
  order: 0
 }, {
  id: 2,
  key: 'defi',
  displayName: '💰 DeFi',
  show: "disable",
  order: 1
}];

export const getCategoriesAPI = () => {
  return [...categories];
};

export const getCategoryAPI = (id) => {
  let itemRs = {};
  categories.every(item => {
    if(item.id === id ) {
      itemRs = item;
      return false;
    }
    return true;
  });
  
  return itemRs;
};

export const addCategoryAPI = (content) => {
  content.id = categories.length + 1;
  categories.push(content);
  return 1;
}

export const editCategoryAPI = (content) => {
  var index = categories.findIndex(item => item.id === content.id);
  categories[index] = content;
  return 1;
}

export const deleteCategoryAPI = (id) => {
  var index = categories.findIndex(item => item.id === id);
  if(index > -1) {
    categories.splice(index, 1);
  }
  return 1;
};

const configurations = [{
  id: 1,
  constName: 'buyeerFee',
  value: 0
 }, {
  id: 2,
  constName: 'sellerFee',
  value: 250
}, {
  id: 3,
  constName: 'cooperationFee',
  value: 1750
}, {
  id: 4,
  constName: 'requiredTee',
  value: 1000
}];

export const getConfigurationsAPI = () => {
  return [...configurations];
};

export const getConfigAPI = (id) => {
  let itemRs = {};
  configurations.every(item => {
    if(item.id === id ) {
      itemRs = item;
      return false;
    }
    return true;
  });
  
  return itemRs;
};

export const addConfigAPI = (content) => {
  content.id = configurations.length + 1;
  configurations.push(content);
  return 1;
}

export const editConfigAPI = (content) => {
  var index = configurations.findIndex(item => item.id === content.id);
  configurations[index] = content;
  return 1;
}

export const deleteConfigAPI = (id) => {
  var index = configurations.findIndex(item => item.id === id);
  if(index > -1) {
    configurations.splice(index, 1);
  }
  return 1;
};

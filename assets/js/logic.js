function saveToLocalStorage(storageName, newItem) {
    const existingItems = JSON.parse(localStorage.getItem(storageName)) || [];
    existingItems.push(newItem);
    localStorage.setItem(storageName, JSON.stringify(existingItems));
  }

function getFromLocalStorage(storageName) {
    return JSON.parse(localStorage.getItem(storageName)) || [];
  }



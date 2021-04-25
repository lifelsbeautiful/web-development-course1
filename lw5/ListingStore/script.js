window.onload = function () {

  // состояние приложения: данные
  var listingElements = ['apple', 'orange'];
  var storeElements = [];

  // логика JS, не связана с DOM
  // данная функция работает только с состоянием
  function addToStoreElements(element) {
    var elementPosition = listingElements.indexOf(element);
    if (elementPosition > -1) {
      storeElements.push(element);
      listingElements.splice(elementPosition, 1);
    }
  }

  // updateUI берет данные из массивов и вставляет в DOM
  function updateUI() {
    var storeSelect = document.querySelector('.store-select');
    var listingSelect = document.querySelector('.listing-select');
    var numOfStore = document.querySelector('#store-num');
    var numOfListing = document.querySelector('#listing-num');
    var storeLength = storeElements.length;
    var listingLength = listingElements.length;
    numOfStore.innerHTML = `${storeLength}`;
    numOfListing.innerHTML = `${listingLength}`;
    storeSelect.innerHTML = '';
    listingSelect.innerHTML = '';

    // вставка элементов из Listing
    for (var i = 0; i < listingElements.length; i++) {
      var newOption = document.createElement('option');
      newOption.innerText = listingElements[i];
      listingSelect.append(newOption);
    }


    // вставка элементов из Store
    for (var i = 0; i < storeElements.length; i++) {
      var newOption = document.createElement('option');
      newOption.innerText = storeElements[i];
      storeSelect.append(newOption);
    }
  }

  // событие для кнопки "Add to store"
  var addButton = document.querySelector('#add-button');
  addButton.onclick = function () {
    var selectedOption = document.querySelector('.listing-select option:checked');
    if (selectedOption !== null)
      addToStoreElements(selectedOption.innerText);
    updateUI();
  }

  function addToListingElements(element) {
    var elementPosition = storeElements.indexOf(element);
    if (elementPosition > -1) {
      listingElements.push(element);
      storeElements.splice(elementPosition, 1);
    }
  }
  // событие для кнопки "Add to listing"
  var addButton = document.querySelector('#add-btn');
  addButton.onclick = function () {
    var selectedOption = document.querySelector('.store-select option:checked');
    if (selectedOption !== null)
      addToListingElements(selectedOption.innerText);
    updateUI();
  }
  // событие для кнопки "Delete element"
  function deleteElement(element) {
    if (storeElements.indexOf(element) !== -1) {
      storeElements.splice(storeElements.indexOf(element), 1)
    } if (listingElements.indexOf(element) !== -1) {
      listingElements.splice(listingElements.indexOf(element), 1)
    }
  }
  var addButton = document.querySelector('#delete-btn');
  addButton.onclick = function () {
    var selectedOptionListing = document.querySelector('.listing-select option:checked');
    var selectedOptionStore = document.querySelector('.store-select option:checked');
    if (selectedOptionStore !== null) {
      deleteElement(selectedOptionStore.innerText);
    }
    if (selectedOptionListing !== null) {
      deleteElement(selectedOptionListing.innerText);
    }
    updateUI();
  }
  // событие для кнопки "Add new element"
  var addButton = document.querySelector('#add-new-btn');
  addButton.onclick = function () {
    var newPrompt = prompt("Введите название фрукта");
    if (addElement(newPrompt) !== null) {
      updateUI();
    }
  }
  function addElement(newPrompt) {
    listingElements.push(newPrompt)
  }

  // запускаем начальное обновление интерфейса
  // для первоначального вывода данных из состояния в UI
  updateUI();

};
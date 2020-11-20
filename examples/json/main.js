const data = './data.json';

async function fetchInventory() {
  // requires a server
  const response = await fetch(data);
  const items = await response.json();
  // console.log('items', JSON.stringify(items));
  return items;
}

const inventory = fetchInventory().then((items) => {
  console.log('items', items);

  const ul = document.querySelector('ul');
  items.inventory.forEach((item) => {
    const li = document.createElement('li');
    if (item.count > 0) li.innerHTML = `${item.name}: ${item.count} available`;
    else li.innerHTML = `<del>${item.name}</del> Out of stock 😢`;
    ul.appendChild(li);
  });

  // Destructure the 'item' paramter
  // items.inventory.forEach(({ name, count }) => {
  //   const li = document.createElement('li');
  //   if (count > 0) li.innerHTML = `${name}: ${count} available`;
  //   else li.innerHTML = `<del>${name}</del> Out of stock 😢`;
  //   ul.appendChild(li);
  // });
});

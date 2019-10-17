const url = 'https://cep.awesomeapi.com.br/json/90020070';

axios.get(url).then(response => {
  const header = document.createElement('header');
  document.body.appendChild(header);

  const main = document.createElement('main');
  document.body.appendChild(main);

  const footer = document.createElement('footer');
  document.body.appendChild(footer);

  const cep = document.createElement('h1');
  cep.id = 'cep';
  cep.textContent = response.data.cep;
  main.appendChild(cep);

  const addressType = document.createElement('h1');
  addressType.id = 'addressType';
  addressType.textContent = response.data.addressType;
  main.appendChild(addressType);

  const addressName = document.createElement('h1');
  addressName.id = 'addressName';
  addressName.textContent = response.data.addressName;
  main.appendChild(addressName);

  const address = document.createElement('h1');
  address.id = 'address';
  address.textContent = response.data.address;
  main.appendChild(address);

  const district = document.createElement('h1');
  district.id = 'district';
  district.textContent = response.data.district;
  main.appendChild(district);

  const city = document.createElement('h1');
  city.id = 'city';
  city.textContent = response.data.city;
  main.appendChild(city);

  const state = document.createElement('h1');
  state.id = 'state';
  state.textContent = response.data.state;
  main.appendChild(state);

  const lat = document.createElement('h1');
  lat.id = 'lat';
  lat.textContent = response.data.lat;
  main.appendChild(lat);

  const lng = document.createElement('h1');
  lng.id = 'lng';
  lng.textContent = response.data.lng;
  main.appendChild(lng);

  const ddd = document.createElement('h1');
  ddd.id = 'ddd';
  ddd.textContent = response.data.ddd;
  main.appendChild(ddd);
});

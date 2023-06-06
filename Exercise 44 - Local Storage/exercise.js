const user = {
  id: 1,
  name: "John",
  age: 25,
};

function loadStorage() {
  const jsonUser = JSON.stringify(user);
  localStorage.setItem(jsonUser);
}

function getStorage(){
  const parsUser = JSON.parse(jsonUser);
  localStorage.getItem(parsUser)
}

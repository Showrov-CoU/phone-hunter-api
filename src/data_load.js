const loadData = async (searchValue) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
  );
  const getdata = await res.json();
  const phones = getdata.data;
  showPhones(phones);
};

const showPhones = (phones) => {
  const phoneCardContainer = document.getElementById("phone-card-container");
  phoneCardContainer.textContent = "";
  const showAllButton = document.getElementById("show-all-button");
  if (phones.length > 12) {
    showAllButton.classList.remove("hidden");
  } else {
    showAllButton.classList.add("hidden");
  }
  phones = phones.slice(0, 12);
  phones.forEach((phone) => {
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card  bg-base-100 shadow-xl`;
    phoneCard.innerHTML = `
    <figure class="m-5 py-10 bg-[#0d6efd0d] flex justify-center items-center">
      <img
        src="${phone.image}"
        alt="Phones"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title mx-auto">${phone.phone_name}</h2>
      <p class="text-center">There are many variations of </br> passages of available, but the </br> majority have suffered</p>
      <div class="card-actions justify-center">
        <button class="btn btn-primary font-bold">Show Details</button>
    </div>
    `;
    phoneCardContainer.appendChild(phoneCard);
    //console.log(phoneCard);
  });
};

const handleSearch = () => {
  const searchField = document.getElementById("search-field");
  const searchValue = searchField.value;
  loadData(searchValue);
  searchField.value = "";
};

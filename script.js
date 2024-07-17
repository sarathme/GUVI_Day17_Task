const countryCardBlock = document.getElementById("country-card-display");
const modal = document.getElementById("modal-dialog");
const spinner = ` <div class="spinner-border text-primary mx-auto" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
`;

console.log(modal);
function renderModal(modalData) {
  fetch();

  const modalHTML = `<div class="modal-content">
          <div class="modal-header bg-primary">
            <h5 class="modal-title">${modalData.countryName}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div class="modal-body bg-subtle">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-4 col-10 mx-auto"
                  >.<img
                    class="mx-md-auto"
                    src="https://openweathermap.org/img/wn/10d@2x.png"
                    alt="Icon of Rain"
                /></div>
              </div>
              <div class="row">
                <div class="col-6 mx-auto modal-title fs-2">Light Rain</div>
              </div>
            </div>
          </div>

          <div class="modal-footer bg-secondary">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              >Close</button
            >
          </div>
        </div>`;

  modal.innerHTML = modalHTML;
}

countryCardBlock.innerHTML = spinner;

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    countryCardBlock.innerHTML = "";
    data.forEach((country) => {
      renderCountry(country);
    });

    const cardBody = document.querySelectorAll(".card-body");
    cardBody.forEach((el) => {
      el.addEventListener("click", (e) => {
        if (e.target.dataset.bsToggle === "modal") {
          renderModal(e.target.dataset);
        }
      });
    });
  });

function renderCountry(country) {
  const cardHTML = `<div class="col-12 col-sm-10 col-lg-4 col-md-6 mb-4 mx-sm-auto" style="height:500px ">
          <div class="card h-100" >
            <h5 class="card-header text-center bg-primary p-4" style="max-height:6.5rem;min-height:6.5rem">${country.name.common}</h5>
            <div class="p-1 border border-2 border-secondary" style="min-height:12rem; max-height:12rem">
              <img
              src="${country.flags.png}"
              class="card-img-top w-100 h-100" 
              alt="Flag of ${country.name.common}" />
            </div>
          
            <div class="card-body w-100 h-50">
              <div class="p-1 w-100"
                ><span class="text-secondary text-start w-auto d-inline-block"
                  >Capital:
                </span>
                <span
                  class="text-primary text-start w-auto fw-bolder text-uppercase"
                  id="capital"
                  >${country.capital?.[0]}</span
                ></div
              >
              <div class="p-2 w-100"
                ><span class="text-secondary text-start w-auto d-inline-block"
                  >Region:
                </span>
                <span
                  class="text-primary text-center w-auto  fw-bolder"
                  id="capital"
                  >${country.region}</span
                ></div
              >
              <div class="p-2 w-100 mb-4"
                ><span class="text-secondary text-start w-auto d-inline-block"
                  >Country Code:
                </span>
                <span
                  class="text-primary text-center w-50 fw-bolder"
                  id="countryCode"
                  >${country.cca2}</span
                ></div
              >
              <a  type="button" class="btn btn-primary mx-auto w-100" data-bs-toggle="modal" data-bs-target="#modal"
               data-lat="${country.latlng[0]}" data-lng="${country.latlng[1]}" data-country-name="${country.name.common}" >Weather Details</a
              >
            </div>
          </div>
        </div>`;
  countryCardBlock.insertAdjacentHTML("beforeend", cardHTML);
}

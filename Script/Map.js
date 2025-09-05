let latitud;
let longitud;

function initMap() {
  const university = { lat: 4.668506871633285, lng: -74.10310276150402 };
  const mapa = new google.maps.Map(document.getElementById("map"), {
    center: university,
    zoom: 18,
    disableDoubleClickZoom: true,
  });

  let maker = new google.maps.Marker({
    position: university,
    map: mapa,
  });

  //   Si da doble click sobre el mapa hacer un nuevo marcador
  mapa.addListener("dblclick", (e) => {
    // Longitud y latitud
    latitud = e.latLng.lat();
    longitud = e.latLng.lng();
    console.log(`latitud ${latitud} y Longitud ${longitud}`);

    const alertaConfirm = window.confirm("¿Quieres seleccionar esta ubicacion");
    if (alertaConfirm) {
      maker.setMap(null);
      maker = new google.maps.Marker({
        position: { lat: latitud, lng: longitud },
        map: mapa,
      });
    }
  });
}

function buttonAccept() {
  const buttonconfirm = document.getElementById("buttonConfirm");
  const coordinated = document.getElementById("Coordinated");

  buttonconfirm.addEventListener("click", () => {
    const coordinatedUser = JSON.stringify({
      latitud,
      longitud,
    });
    coordinated.value = coordinatedUser;
    console.log(coordinated);
  });
}

buttonAccept();
initMap();

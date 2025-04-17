const imagenes = [
  {
    src: "assets/paisaje.jpg",
    categoria: "paisaje",
    descripcion: "El reflejo del agua.",
    autor: "James Wheeler",
  },
  {
    src: "assets/abstracto.jpg",
    categoria: "abstracto",
    descripcion: "Obra abstracta.",
    autor: "ablozhka",
  },
  {
    src: "assets/atardecer.jpg",
    categoria: "paisaje",
    descripcion: "Atardecer sobre el mar.",
    autor: "Sebastien Gabriel",
  }
];

function mostrarGaleria(filtro = "todas") {
  const galeria = document.getElementById("galeria");
  galeria.innerHTML = "";

  const filtradas = filtro === "todas"
    ? imagenes
    : imagenes.filter(img => img.categoria === filtro);

  filtradas.forEach((img) => {
    const col = document.createElement("div");
    col.className = "col-md-4";
    col.innerHTML = `<img src="${img.src}" class="img-fluid" onclick='verDetalle(${JSON.stringify(img)})' alt="Imagen" />`;
    galeria.appendChild(col);
  });
}

function filtrar(categoria) {
  mostrarGaleria(categoria);
}

function verDetalle(img) {
  document.getElementById("detalle-img").src = img.src;
  document.getElementById("detalle-descripcion").textContent = img.descripcion;
  document.getElementById("detalle-autor").textContent = img.autor;
  document.getElementById("detalle").classList.remove("d-none");
}

function cerrarDetalle() {
  document.getElementById("detalle").classList.add("d-none");
}

document.getElementById("form-contacto").addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (!nombre || !correo || !mensaje) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  alert("Mensaje enviado correctamente. ¡Gracias por contactarnos!");
  this.reset();
});

window.onload = () => {
  mostrarGaleria();
};


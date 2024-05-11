document.addEventListener("DOMContentLoaded", function() {
  const registrationForm = document.getElementById("registrationForm");

  if (registrationForm) { // Verificar si el formulario de registro está presente en la página
    registrationForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Evitar el envío predeterminado del formulario

      // Obtener los valores del formulario
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      let adminKey = ''; // Inicializar la clave de administrador como vacía

      // Verificar si se proporcionó una adminKey
      const adminKeyInput = document.getElementById("adminKey");
      if (adminKeyInput) {
        adminKey = adminKeyInput.value;
      }

      // Guardar email, contraseña y clave de administrador (si existe) en localStorage
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      if (adminKey) {
        localStorage.setItem("adminKey", adminKey);
      }

      // Redirigir al usuario de vuelta al inicio
      window.location.href = "Inicio.html";
    });
  }
});

function generateRandomKey() {
  const allowedChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#_';
  let key = '';
  for (let i = 0; i < 16; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    key += allowedChars.charAt(randomIndex);
  }
  return key;
}

// Esperar a que el contenido del documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
  // Obtener el formulario de registro por su ID
  const registrationForm = document.getElementById("registrationForm");

  // Verificar si el formulario de registro está presente en la página
  if (registrationForm) {
    // Agregar un event listener para el evento submit del formulario
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

      // Redirigir al usuario de vuelta al inicio solo si el formulario de registro está presente
      window.location.href = "Inicio.html";
    });
  }
});

// Función para generar una operación matemática simple (suma o resta de números unitarios)
function generateMathOperation() {
  let x, y;
  do {
    // Generar dos números aleatorios del 1 al 9
    x = Math.floor(Math.random() * 9) + 1;
    y = Math.floor(Math.random() * 9) + 1;
  } while (x === y); // Repetir el proceso hasta que los números sean diferentes

  // Determinar aleatoriamente si la operación será suma o resta (1 para suma, 0 para resta)
  const operation = Math.round(Math.random());

  // Devolver la operación como una cadena de texto
  return operation === 1 ? `${x} + ${y}` : `${x} - ${y}`;
}

// Función para el primer pop-up de confirmación
function confirmDeleteUserData() {
  if (confirm("¿Estás seguro de que quieres borrar todos los datos de usuario? Esta acción no se puede deshacer.")) {
    // Si el usuario confirma el primer pop-up, mostrar el segundo pop-up más cauteloso
    confirmSecondDeleteUserData();
  }
}

// Función para el segundo pop-up de confirmación
function confirmSecondDeleteUserData() {
  if (confirm("¿Segurito segurito? Esta acción puede ser desastroso para la empresa.")) {
    // Si el usuario confirma el segundo pop-up, solicitar una operación matemática generada automáticamente
    const mathOperation = generateMathOperation();
    const result = prompt(`¿Cuánto es ${mathOperation}? (Ingresa el resultado como un número)`);

    // Verificar si el resultado es correcto
    if (result && eval(mathOperation) == result) {
      // Si el resultado es correcto, borrar los datos de usuario del localStorage
      localStorage.removeItem("username");
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      localStorage.removeItem("adminKey");

      // Mostrar un mensaje de confirmación
      alert("Todos los datos de usuario han sido borrados con éxito.");
    } else {
      // Si el resultado es incorrecto, mostrar un mensaje de error
      alert("Respuesta incorrecta. Inténtalo de nuevo.");
    }
  }
}

// Agregar un event listener para el botón de borrar datos de usuario
document.getElementById("deleteUserDataBtn").addEventListener("click", confirmDeleteUserData);

// Agregar un event listener para el botón "Volver al Inicio"
document.getElementById("homeButton").addEventListener("click", function() {
  // Redirigir a la página de inicio
  window.location.href = "Inicio.html";
});

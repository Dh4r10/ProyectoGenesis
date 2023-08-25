export const Validations = () => {
  const usuario = document.getElementById("usuario");
  const pass = document.getElementById("password");
  const parrafo = document.getElementById("warnings");
  const buttonLogin = document.getElementById("buttonLogin");

  let warnings = "";
  let entrar = false;

  if (usuario.value.length == 0) {
    warnings += `⚠️ Usuario vacio ⚠️<br>`;
    entrar = true;
  } else {
    //Acá se dará la validación de usuario
    if (usuario.value.length < 8) {
      warnings += `⚠️ El usuario es muy corto ⚠️<br>`;
      entrar = true;
    }
    if (usuario.value.length > 8) {
      warnings += `⚠️ No puedes usar mas de 8 caracteres ⚠️<br>`;
      entrar = true;
    }
  }

  if (pass.value.length == 0) {
    warnings += `⚠️ Contraseña vacia ⚠️<br>`;
    entrar = true;
  } else {
    //Acá se dará la validación de la contraseña
    if (pass.value.length < 8) {
      warnings += `⚠️ La contraseña es muy corta ⚠️<br>`;
      entrar = true;
    }
  }

  if (entrar) {
    parrafo.innerHTML = warnings;
    buttonLogin.type = "button";
  } else {
    warnings = "";
    parrafo.innerHTML = warnings;
    buttonLogin.type = "submit";
  }
};

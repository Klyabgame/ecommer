export const register = async (form) => {
  form.idRol = "1";
  console.log(form);

  try {
    const result = await fetch("http://localhost:3000/api/auth/crearUsuario", {
      method: "POST",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(form),
    });

    return {
      ok: true,
      ...result,
    };

  } catch (error) {
    console.log("error al hacer el fetch");
    return {
      ok: false,
    };
  }
};

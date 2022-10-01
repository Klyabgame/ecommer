export const register = async (data) => {
  form.idRol = "1";
  try {
    const result = await fetch("http://localhost:3000/api/auth/crearUsuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const dataUser = await result.json();
    return {
      ok: true,
      ...dataUser,
    };
  } catch (error) {
    console.log("error al hacer el fetch");
    return {
      ok: false,
    };
  }
};

export const login = async(form) => {

}

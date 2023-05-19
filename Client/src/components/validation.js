const validation = (data) => {

  let errors = {}

  if (!/\S+@\S+\.\S+/.test(data.email)) errors.e1 = 'Email invalido'

  if (!data.email) errors.e2 = 'Ingrese un Email'

  if (data.email.length > 35) errors.e3 = 'El Email debe tener menos de 35 carateres'

  if (!/\d/.test(data.password)) errors.p1 = 'La contraseña debe tener al menos un numero'

  if (data.password.length < 6 || data.password.length > 10) errors.p2 = 'La contraseña debe tener entre 6 y 10 caracteres'

  return errors

}

export default validation
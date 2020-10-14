// Validação de e-mail
export const emailValidation = [
  (v) =>
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(
      v
    ) || "Preencha com um e-mail válido",
];

// Validação de senha
export const passwordValidation = [
  (v) => !!v || "Preencha com uma senha",
  (v) => v.length > 5 || "A senha deve conter 6 caracteres no mínimo",
];

// Validação de telefone
export const phoneValidation = [
  (v) => v.length > 13 || "Preencha com um telefone válido",
];

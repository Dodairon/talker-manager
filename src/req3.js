function emptyEmail(email) {
  if (!email || email.length === 0) {
    return 'O campo "email" é obrigatório';
  }
}

function validateEmail(email) {
  const validEmail = /.+@.+\..+/;
  if (validEmail.test(email) === false) {
    return 'O "email" deve ter o formato "email@email.com"';
  }
}

function emptyPassword(password) {
  if (!password || password.length === 0) {
    return 'O campo "password" é obrigatório';
  }
}

function validatePassword(password) {
  const num = 6;
  if (password.length < num) {
    return 'O "password" deve ter pelo menos 6 caracteres';
  }
}

function validLogin(email, password) {
  return (
    emptyEmail(email)
    || validateEmail(email)
    || emptyPassword(password)
    || validatePassword(password)
  );
}

module.exports = validLogin;

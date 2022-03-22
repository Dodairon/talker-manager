function emptyToken(token) {
  if (!token) {
    return { status: 401, message: 'Token não encontrado' };
  }
}

function validateToken(token) {
  if (token.length < 16) {
    return { status: 401, message: 'Token inválido' };
  }
}

function emptyName(name) {
  if (!name || name.length === 0) {
    return { status: 400, message: 'O campo "name" é obrigatório' };
  }
}

function validateName(name) {
  if (name.length < 3) {
    return {
      status: 400,
      message: 'O "name" deve ter pelo menos 3 caracteres',
    };
  }
}

function emptyAge(age) {
  if (!age || age.length === 0) {
    return {
      status: 400,
      message: 'O campo "age" é obrigatório',
    };
  }
}

function validateAge(age) {
  if (!Number.isInteger(age) || age < 18) {
    return {
      status: 400,
      message: 'A pessoa palestrante deve ser maior de idade',
    };
  }
}

function validateDate(watchedAt) {
  const validWatchedAt = /^(((?=3)3[0-1])|(?=[0-2])[0-2][1-9])\/(((?=1)1[0-2])|0[1-9])\/\d{4}/;
  if (validWatchedAt.test(watchedAt) === false) {
    return {
      status: 400,
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    };
  }
}

function validateRate(rate) {
  if (!Number.isInteger(rate) || rate < 1 || rate > 5) {
    return {
      status: 400,
      message: 'O campo "rate" deve ser um inteiro de 1 à 5',
    };
  }
}

function validateTalker(talk) {
  if (talk.length === 0 || !talk.watchedAt || talk.rate === undefined) {
    return {
      status: 400,
      message:
        'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    };
  }
}

function tokens(token) {
  return emptyToken(token) || validateToken(token);
}

function names(name) {
  return emptyName(name) || validateName(name);
}

function ages(age) {
  return emptyAge(age) || validateAge(age);
}

function talks(talk = {}) {
  const { watchedAt, rate } = talk;
  return validateTalker(talk) || validateDate(watchedAt) || validateRate(rate);
}

function validateInfos(token, name, age, talk) {
  return tokens(token) || names(name) || ages(age) || talks(talk);
}

module.exports = { validateInfos, tokens };

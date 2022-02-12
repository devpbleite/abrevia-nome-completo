const form = document.getElementById('minification-form')

function abridgedControl(fullName, limit) {
  if (fullName.length > limit) {
    return toAbridged(fullName);
  }
  return fullName;
}

const submitForm = (event) => {
  event.preventDefault()

  const inputName = document.getElementById('name-input')
  const inputMinName = document.getElementById('min-name')

  let value = inputName.value.trim()

  if (!value)
    alert('Campo "nome" não pode ser vazio')

  inputMinName.value = toAbridged(value, 13)
}

form.addEventListener('submit', submitForm)

function toAbridged(fullName) {
  const token = '.';
  const separator = ' ';
  const names = removePrepositions(fullName).split(separator);
  const firstName = names[0];
  let surnames = '';
  names
    .filter((name, index) => index)
    .map(name => surnames += `${separator}${name.charAt()}${token}`);
  return `${firstName}${surnames.toUpperCase()}`;
}

function removePrepositions(fullName) {
  return fullName.replace(/\ dos|\ das|\ dos|\ das|\ de|\ d\'/gi, '');
}


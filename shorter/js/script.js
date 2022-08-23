const input = document.getElementById('link-input');
const errorMsg = document.getElementById('error-msg');
const linkForm = document.getElementById('link-form');

const validURL = (str) => {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' +
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i'
  );
  return !!pattern.test(str);
};

const formSubmit = (e) => {
  e.preventDefault();
  if (input.value === '') {
    errorMsg.innerHTML = 'Please enter a url!';
    input.classList.add('border-red');
  } else if (!validURL(e.value)) {
    errorMsg.innerHTML = 'Please enter a valid url!';
    input.classList.add('border-red');
  } else {
    errorMsg.innerHTML = '';
    input.classList.remove('border-red');
    alert('Success');
  }
};

linkForm.addEventListener('submit', formSubmit);

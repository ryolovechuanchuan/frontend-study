const btn = document.getElementById('btn');
const input = document.getElementById('input') as HTMLInputElement;
const title = document.querySelector('h1');
const form = document.getElementById('form');

document.addEventListener('keydown', (event: KeyboardEvent) => {
  if (event.key == 'Enter') {
    console.log('Submit');
  } else {
    console.log(event.key);
  }
});

if (btn) {
  btn.addEventListener('click', (event: MouseEvent) => {
    console.log(event.clientX);
    console.log(event.clientY);
  });
}

input.addEventListener('input', () => {
  console.log(input.value);
});

console.log(input.value);

if (title) {
  console.log(title.textContent);
}

if (form) {
  form.addEventListener('submit', (event: SubmitEvent) => {
    event.preventDefault();

    console.log('Submit');
  });
}

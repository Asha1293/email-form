const scriptURL = 'https://script.google.com/macros/s/AKfycbxZZ1CUtJEJZeuX8p5j4PRo_9M_eUEZcf8CEeirqVLm0ybRP0OtZSDwqTyDfvZnzEhAsQ/exec'
  const form = document.forms['submit-to-google-sheet']
  let msg = document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = 'Thank you for subscribing!'

        setTimeout(function(){
            msg.innerHTML = ''
        }, 5000)

        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
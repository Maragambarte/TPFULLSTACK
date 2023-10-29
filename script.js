document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    
    fetch('https://formspree.io/f/xpzgbgzq', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        
        console.log(data);
    })
    .catch(error => {
        console.error('Error al enviar el formulario', error);
    });
})
    

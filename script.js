document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    alert('El formulario se ha enviado');
 
    fetch('https://formspree.io/f/xpzgbgzq', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
       
        console.log(data);
        if (data.success) {
            
            const successMessage = document.createElement('div');
            successMessage.textContent = 'El formulario se completó con éxito. ¡Gracias!';
            document.body.appendChild(successMessage);
        } else {
            
            console.error('Error en el formulario:', data.error);
        }
    })
    .catch(error => {
        console.error('Error al enviar el formulario', error);
    });
});

function toggleConverter(event) { 
   const button = event.target
   const price = button.previousElementSibling
   const usd = price.textContent.includes('$')
    if(usd) { 
       price.textContent = price.getAttribute('data-etb') + ' ETB'
       button.textContent = 'Show in USD'
    }
    else {
      price.textContent = '$' + price.getAttribute('data-usd')
      button.textContent = 'Show in ETB'
    }
  }


  document.querySelectorAll('.showIn').forEach(button => {
    button.addEventListener('click', toggleConverter)
  });

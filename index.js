const modalBtn = document.getElementById('modalBtn')
const closeBtn = document.getElementById('closeBtn')
const modalContainer = document.getElementById('modalContainer')

modalBtn.addEventListener('click', function(){
  modalContainer.style.display = 'block'
})

closeBtn.addEventListener('click', function(){
  modalContainer.style.display = 'none'
})

window.addEventListener('click', function(e){
  if(e.target === modalContainer){
    modalContainer.style.display = 'none'
  }
})
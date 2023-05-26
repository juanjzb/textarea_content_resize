const textarea = document.getElementById('textarea')

textarea.addEventListener('input', e => {
  textarea.style.height = '1.4rem'
  textarea.style.height = textarea.scrollHeight + 'px'
  console.info(`🚀 ~ height:`, textarea.style.height)
  console.info(`🚀 ~ textarea.scrollHeight:`, textarea.scrollHeight)
})

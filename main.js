
const pics = document.querySelectorAll('.pic')
console.log(pics)

pics.forEach(pic => {
  pic.addEventListener('click', () => {
    removeActiveClasses()
    pic.classList.add('clicked')
  })
})

function removeActiveClasses() {
  pics.forEach(pic => {
    pic.classList.remove('clicked')
  }
  )
}
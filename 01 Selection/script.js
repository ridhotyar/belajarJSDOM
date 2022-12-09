//DOM Selection
//getElementById()

const judul = document.getElementById('judul')
judul.style.color = '#fff'
judul.style.backgroundColor = '#d9b99b'
judul.innerHTML = 'Ridho Tiyar'

//getElementsByTagName()

const p = document.getElementsByTagName('p')
p[0].style.backgroundColor = '#B2AC88'

//atau bisa juga kek gini
const p2 = document.getElementsByTagName('p')[1]
p2.style.backgroundColor = '#B2AC88'

//document getElementsByClassName
const px = document.getElementsByClassName('p1')[0]
px.innerHTML = 'dirubah melalui JS'
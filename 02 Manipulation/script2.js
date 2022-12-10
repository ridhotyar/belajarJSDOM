//buat elemen baru
const pBaru = document.createElement('p')
const teksBaru = document.createTextNode ('Paragraf baru')
//node di atas masih terpisah, masih ada dalam memori
//berikut cara simpannya dan nampilin
pBaru.appendChild(teksBaru)
//cara simpan di akhir sectionA
const sectionA = document.getElementById('a')
sectionA.appendChild(pBaru)

//contoh insert after
const liBaru = document.createElement('li')
const isiLi = document.createTextNode('Item Baru')
liBaru.appendChild(isiLi)

const ul = document.querySelector('section#b ul')
// const li2 = document.querySelector('section#b ul li:nth-child(2)')
//atau bisa disingkat seperti berikut
const li2 = ul.querySelector('li:nth-child(2)')

//tempat penyimpanan
ul.insertBefore(liBaru, li2)

const link = document.getElementsByTagName('a')[0]
sectionA.removeChild(link)

const sectionB = document.getElementById('b')
const p4 = sectionB.querySelector('p')

const newh2 = document.createElement('h2')
const teksh2new = document.createTextNode('Judul Baru')

newh2.appendChild(teksh2new)

sectionB.replaceChild(newh2, p4)
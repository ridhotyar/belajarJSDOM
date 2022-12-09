const p4 = document.querySelector('#b p')
p4.style.color = 'green'

//untuk selector, penulisannya sama dengan memilih css yg mana

const li2 = document.querySelector('section#b ul li:nth-child(2)')
li2.style.backgroundColor = 'orange'

//kalau di JS, yg akan terpilih hanya 1 element tag

// untuk bisa memilih semua pakainya selectorall
//hasilnya node list
const p = document.querySelectorAll('p')
p[1].style.backgroundColor = 'blue'
//biar bisa terpilih semuanya, gunakan looping
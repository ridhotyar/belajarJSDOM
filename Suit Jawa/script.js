function getPilihanComputer (){
    const comp = Math.random()

    if( comp < 0.34 ) return 'gajah'
    if( comp >= 0.34 && comp < 0.67 ) return 'orang'
    return 'semut'
}

function getHasil(comp, player){
    if( player == comp ) return 'SERI!'
    if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!'
    if( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!'
    if( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH' : 'MENANG!'
    // return 'memasukkan pilihan yang salah!'
}

function shake(){
    const imgComputer = document.querySelector('.img-computer')
    const gambar = ['gajah', 'semut', 'orang']
    let i = 0
    const waktuMulai = new Date().getTime()
    setInterval(function(){
        if ( (new Date().getTime() - waktuMulai) > 1000) {
            clearInterval
            return
        }
        imgComputer.setAttribute('src', 'img/'+ gambar[i++] +'.png')
        if (i == gambar.length) i=0
    }, 100)
}

const Suit = document.querySelectorAll('li img')
Suit.forEach(function(i){
    i.addEventListener('click', function(){
        const pilihanComputer = getPilihanComputer()
        const pilihanPlayer = i.className
        const hasil = getHasil(pilihanComputer,pilihanPlayer)

        shake()

        setTimeout(function(){
            const imgComputer = document.querySelector('.img-computer')
            imgComputer.setAttribute('src', 'img/'+pilihanComputer+'.png')
    
            const info = document.querySelector('.info')
            info.innerHTML = hasil
        },1000)

    })
})


//cara yang tidak efektif
// function count(hasil, pilihanComputer){
    // const imgComputer = document.querySelector('.img-computer')
    // imgComputer.setAttribute('src', 'img/'+pilihanComputer+'.png')

    // const info = document.querySelector('.info')
    // info.innerHTML = hasil
// }

// const pGajah = document.querySelector('.gajah')
// pGajah.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer()
//     const pilihanPlayer = pGajah.className
//     const hasil = getHasil(pilihanComputer,pilihanPlayer)

//     count(hasil, pilihanComputer)
// })

// const pOrang = document.querySelector('.orang')
// pOrang.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer()
//     const pilihanPlayer = pOrang.className
//     const hasil = getHasil(pilihanComputer,pilihanPlayer)

//     count(hasil, pilihanComputer)
// })

// const pSemut = document.querySelector('.semut')
// pSemut.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer()
//     const pilihanPlayer = pSemut.className
//     const hasil = getHasil(pilihanComputer,pilihanPlayer)

//     count(hasil, pilihanComputer)
// })
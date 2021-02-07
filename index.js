const songs = [
    {
        artist: {
            name: "Kasra",
            label: "Critical music",
        },
        title: {
            name: "Let it slide",
        },
        album: {
            name: "Let it Slide / I don't know",
        },
        data: {
            duration: "4:11",
            available: true,
            iscr: "CA86K1800001",
        },
    },
    {
        artist: {
            name: "The Weeknd",
            label: "popup media",
        },
        title: {
            name: "Blinding Lights",
        },
        album: {
            name: "Head Down Heart Up",
        },
        data: {
            duration: "2:00",
            available: true,
            iscr: "CA86K1800001"
        },
    },
    {
        artist: {
            name: "Dean and Chapter",
            label: "popup media",
        },
        title: {
            name: "Friends with the Devil",
        },
        album: {
            name: "Head Down Heart Up",
        },
        data: {
            duration: "2:00",
            available: true,
            iscr: "CA86K1800001"
        },
        
    },
    {
        artist: {
            name: "Sam Smith",
            label: "Warner Music",
        },
        title: {
            name: "Diamonds",
        },
        album: {
            name: "Let it Slide / I don't know",
        },
        data: {
            duration: "4:11",
            available: true,
            iscr: "CA86K1800001",
        },
    },
    {
        artist: {
            name: "Jason Derulo",
            label: "Critical music",
        },
        title: {
            name: "Take You Dancing",
        },
        album: {
            name: "Let it Slide / I don't know",
        },
        data: {
            duration: "4:11",
            available: true,
            iscr: "CA86K1800001",
        },
    },
    {
        artist: {
            name: "Dua Lipa",
            label: "Critical music",
        },
        title: {
            name: "Levitating",
        },
        album: {
            name: "Let it Slide / I don't know",
        },
        data: {
            duration: "4:11",
            available: true,
            iscr: "CA86K1800001",
        },
    },
    {
        artist: {
        name: "Miley Cyrus",
            label: "Critical music",
        },
        title: {
        name: "Prisoner",
        },
        album: {
            name: "Let it Slide / I don't know",
        },
        data: {
            duration: "4:11",
            available: true,
            iscr: "CA86K1800001",
        },
    },
    {
        artist: {
        name: "Harry Styles",
            label: "Critical music",
        },
        title: {
        name: "Golden",
        },
        album: {
            name: "Let it Slide / I don't know",
        },
        data: {
            duration: "4:11",
            available: false,
            iscr: "CA86K1800001",
        },
    },
    {
        artist: {
        name: "BTS",
            label: "Critical music",
        },
        title: {
        name: "Dynamite",
        },
        album: {
            name: "Let it Slide / I don't know",
        },
        data: {
            duration: "4:11",
            available: true,
            iscr: "CA86K1800001",
        },
    },
    {
        artist: {
        name: "Chris Brown",
            label: "Critical music",
        },
        title: {
        name: "Go Crazy",
        },
        album: {
            name: "Let it Slide / I don't know",
        },
        data: {
            duration: "4:11",
            available: true,
            iscr: "CA86K1800001",
        },
        
    },
    {
        artist: {
        name: "Tate McRae",
            label: "Critical music",
        },
        title: {
        name: "You Broke Me First",
        },
        album: {
            name: "Let it Slide / I don't know",
        },
        data: {
            duration: "4:11",
            available: true,
            iscr: "CA86K1800001",
        },
    },
    {
        artist: {
        name: "Postmalone",
            label: "Critical music",
        },
        title: {
        name: "Circles",
        },
        album: {
            name: "Let it Slide / I don't know",
        },
        data: {
            duration: "4:11",
            available: false,
            iscr: "CA86K1800001",
        },
    },
]

document.addEventListener('DOMContentLoaded', () => {
    initializeList(songs)
})

const initializeList = (items) => {
    const table = document.querySelector('.table tbody')

    items.forEach(song => {
        const template = document.querySelector('#songTemplate').content
        const clone = template.cloneNode(true)

        const row = clone.querySelector('tr')
        const rowControl = clone.querySelector('#rowControl')
        const songArtistName = clone.querySelector('#songArtistName')
        const songArtistLabel = clone.querySelector('#songArtistLabel')
        const songName = clone.querySelector('#songName')
        const songAlbum = clone.querySelector('#songAlbum')
        const songDuration = clone.querySelector('#songDuration')
        const songIsrc = clone.querySelector('#songIsrc')
        const trialBtn = clone.querySelector('#trialBtn')
        const availabilityBtn = clone.querySelector('#availabilityBtn')

        rowControl.addEventListener('click', () => toggleSongDetail(row))

        trialBtn.addEventListener('click', () => toggleSubscriptionModal(song.title.name))

        songArtistName.textContent = song.artist.name
        songArtistLabel.textContent = song.artist.label
        songName.textContent = song.title.name
        songAlbum.textContent = song.album.name
        songDuration.textContent = song.data.duration
        songIsrc.textContent = song.data.iscr

        if (!song.data.available) {
            availabilityBtn.classList.remove('btn-sec')
            availabilityBtn.classList.add('btn-ter')
            availabilityBtn.textContent = 'Unavailable'
            availabilityBtn.style.cursor = 'not-allowed'
        }

        table.appendChild(clone)
    })
}

const toggleSongDetail = (ref) => {
    const _this = ref

    ref.classList.toggle('active')
}

const toggleSubscriptionModal = (string) => {
    const subModal = document.querySelector("#confirmationModal")
    toggleModal('#confirmationModal')

    const songName = subModal.querySelector('#songName')
    songName.textContent = string
}

const toggleSuccessModal = (string) => {
    const successModal = document.querySelector("#successModal")
    toggleModal('#successModal')

    const songName = successModal.querySelector('#songName')
    songName.textContent = string
}

const toggleModal = (modalId) => {
    const target = document.querySelector(modalId)
    target.classList.toggle('open')
}

const handleModalChange = (closingModalId) => {
    const subModal = document.querySelector("#confirmationModal")
    const songName = subModal.querySelector('#songName').textContent
    toggleModal(closingModalId)
    toggleSuccessModal(songName)
}

const toggleMenu = () => {
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    
    if (!menu.classList.contains('open')) {
        menu.classList.add('open')
        body.style.overflow = 'hidden'
    } else {
        menu.classList.remove('open')
        body.style.overflow = 'scroll'
    }
}
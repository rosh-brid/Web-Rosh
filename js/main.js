function buatDrawer() {
    const drawer = document.createElement('aside');
    drawer.id = 'drawer';
    drawer.setAttribute('aria-hidden', 'true');

    drawer.innerHTML = `
        <h1>Main Menu</h1>
        <button type="button">Berkas</button>
        <button type="button">Editor</button>
        <button type="button">Terminal</button>
        <button type="button">Pengaturan</button>
    `;

    document.body.appendChild(drawer);
    return drawer;
}

function buatOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'drawer_overlay';
    overlay.setAttribute('aria-hidden', 'true');

    document.body.appendChild(overlay);
    return overlay;
}

function aturDrawer(drawer, overlay, terbuka) {
    drawer.classList.toggle('terbuka', terbuka);
    overlay.classList.toggle('terbuka', terbuka);

    drawer.setAttribute('aria-hidden', String(!terbuka));
    overlay.setAttribute('aria-hidden', String(!terbuka));
}

const daftarItem = [
    {
        nama: 'Browser',
        gambar: '../gambar/browser.png',
        info: 'Internet'
    },
    {
        nama: 'Editor',
        gambar: '../gambar/editor.png',
        info: 'Kode'
    },
    {
        nama: 'Terminal',
        gambar: '../gambar/terminal.png',
        info: 'Tools'
    },
    {
        nama: 'Musik',
        gambar: '../gambar/musik.png',
        info: 'Audio'
    },
    {
        nama: 'Video',
        gambar: '../gambar/video.png',
        info: 'Media'
    },
    {
        nama: 'Gambar',
        gambar: '../gambar/gambar.png',
        info: 'Galeri'
    },
    {
        nama: 'Kalkulator',
        gambar: '../gambar/kalkulator.png',
        info: 'Hitung'
    },
    {
        nama: 'Berkas',
        gambar: '../gambar/berkas.png',
        info: 'File'
    },
    {
        nama: 'Pengaturan',
        gambar: '../gambar/pengaturan.png',
        info: 'Sistem'
    }
];

function buatItem(data) {
    const item = document.createElement('button');
    item.className = 'item_konten';
    item.type = 'button';

    item.innerHTML = `
        <img src="${data.gambar}" alt="${data.nama}" />
        <span class="item_nama">${data.nama}</span>
        <span class="item_info">${data.info}</span>
    `;

    return item;
}

function tampilkanKonten() {
    const konten = document.querySelector('#konten');

    if (!konten) {
        return;
    }

    daftarItem.forEach(function(data) {
        konten.appendChild(buatItem(data));
    });
}

function main() {
    const nav = document.querySelector('#nav');
    const drawer = document.querySelector('#drawer') || buatDrawer();
    const overlay = document.querySelector('#drawer_overlay') || buatOverlay();

    if (!nav) {
        return;
    }

    nav.addEventListener('click', function() {
        const terbuka = !drawer.classList.contains('terbuka');
        aturDrawer(drawer, overlay, terbuka);
    });

    overlay.addEventListener('click', function() {
        aturDrawer(drawer, overlay, false);
    });

    tampilkanKonten();
}

document.addEventListener('DOMContentLoaded', main);

# Jawaban Pertanyaan Pertemuan 5

## Praktikum 1
a. Mengganti nama class container dengan container-fluid

1. Tampilan container dan container-fluid
    * Container-fluid
    
        <img src="./MD assets/Container-Fluid.png">

    * Container

        <img src="./MD assets/Container.png">

2. Jika container tampilan akan terdapat margin left dan right, sedangkan container-fluid mengisi seluruh width pada layar


b. Menginstall modulenya dengan menggunakan package manager seperti `npm` atau `yarn`

## Praktikum 2
a. Karena setiap port hanya dapat melakukan 1 proses

b. Json tidak akan berjalan karena port 3000 telah digunakan oleh react

## Praktikum 3
a. Data akan terhapus dan hilang ketika button Hapus diklik

b. listArtikel.json akan berkurang datanya berdasarkan id

c. Untuk merequest ke json-server dengan method DELETE dengan parameter "id" dari artikel yang akan dihapus, lalu json-server akan menghapus artikel berdasarkan "id" tersebut yang dikirimkan. Lalu Menfetch semua data baru

d. API yang diambil memiliki sumber data yang berbeda, yang satunya di jsonplaceholder, sedangkan satunya berada di local dengan sumber data listArtikel.json

## Praktikum 4
a. listArtikel.json akan menambahkan data yang diinputkan pada form, sehingga terdapat data baru

b. Karena data yang difetch oleh react akan di order secara descending, sehingga data yang berada dibawah di listArtikel.json akan berada di atas saat ditampilkan oleh react
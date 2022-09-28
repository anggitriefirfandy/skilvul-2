# Writing and Presentation Test Week 1
## Day 1 : UNIX COMMAND LINE 
* ### Shell 
    adalah program yang menerima perintah, kemudian meneruskan perintah tersebut ke system untuk dieksekusi atau bisa di sebut juga penghubung antara user dengan komputer, CLI dan GUI termasuk shell juga
* ### command line interface (CLI)
    adalah program yang memungkinkan pengguna mengetik perintah teks yang memerintahkan komputer untuk melakukan tugas tertentu
* ### cara mengakses CLI (git bash)
    yaitu jika belum ada git bash di laptop maka bisa download terlebih dahulu dan konfigurasi, lalu bisa klik tombol windows dan cari git bash <br>
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1663901268/gitbash_edgn4o.png)
* ### Terminal
    user dan komputer terhubung melalui terminal, terminal yaitu tempat dimana user bisa memberikan perintah
* ### File System Structure
    yaitu struktur dimana cara mengatur bagaimana data disimpan didalam sebuah system<br>
    untuk system operasi windows dan unix menyusun file dan direktori menggunakan struktur yang berbentuk tree<br>
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1663902375/struktur_system_dhpld5.png)



* ### Command
    1. pwd (Print Working Directory) yaitu perintah untuk melihat kita sedang ada di direktori mana
    2. ls (list) yaitu perintah untuk melihat list/isi dari sebuah direktori
    3. cd (Change Directory) yaitu perintah untuk berpindah ke direktori lain
    4. touch yaitu perintah untuk membuat file
    5. mkdir yaitu perintah untuk membuat direktori
    6. head yaitu perintah untuk melihat line awal dari suatu file
    7. tail yaitu perintah untuk melihat line bawah suatu file
    8. cat yaitu perintah untuk melihat suatu file
    9. cp (copy) yaitu perintah untuk menyalin suatu file atau direktori
    10. mv (move) yaitu perintah untuk memindahkan suatu file dan direktori atau bisa juga untuk mengubah nama suatu file dan direktori
    11. rm (remove) yaitu perintah untuk menghapus suatu file atau direktori

* ### GIT & Github
    * Git adalah salah satu sistem pengontrol versi (Version Control System) pada proyek perangkat lunak, Pengontrol versi bertugas mencatat setiap perubahan pada file proyek yang dikerjakan oleh banyak orang maupun sendiri.
    * Github adalah sebuah website dan layanan berbasis cloud bagi para developer untuk menyimpan, mengelola kode, mendokumentasikannya dan mengontrol perubahannya


* ### Kenapa Git dan Github penting untuk programmer?
    * karena git bisa untuk kolaborasi dan salah satu   tool terpopuler yang digunakan pada pengembangan software, contohnya google, microsoft, facebook semuanya menggunakan git
    * Karena github merupakan wadah khusus bagi developer untuk menulis code, menyimpan code, melihat referensi code, meninjau project dan berkomunikasi dengan programmer lain

* ### keuntungan menggunakan git
    1. bisa menyimpan seluruh versi source code
    2. bisa paham cara kolaborasi dalam project
    3. bisa ikut kontribusi di project open source
    4. lebih aman untuk berkolaborasi karena bisa tau siapa yang mengubah dan apa yang diubah
    5. bisa memahami cara deploy aplikasi modern
    6. bisa membuat blog dengan SSG

* ### perintah perintah yang ada di git
    1. git init adalah perintah untuk menginisiasi git kedalam folder project
    2. git add adalah perintah untuk mengtrack file yang ada didalam folder project
    3. git commit adalah perintah untuk menyimpan perubahan secara permanen ke dalam local repository
    4. git push adalah perintah untuk mengupload project
    5. git remote adalah perintah untuk menghubungkan local repository dengan github repository
    6. git branch adalah perintah untuk melihat cabang apa saja yang ada di repositori, gunakan perintah git branch
    7. git config adalah perintah untuk mengkonfigurasi username dan email dan lain lain
    8. git status adalah perintah untuk menampilkan daftar file yang berubah bersama dengan file yang ingin di tambahkan atau di-commit
    9. git log adalah perintah untuk menjalankan peritah ini akan menampilkan daftar commits yang ada di branch beserta detail-nya
    10. git clone yaitu unutk melakukan cloning dari github ke komputer atau lokal
* ### Cara kerja git dan github
    * cara kerjanya yaitu yang pertama git init untuk membuat repository baru, lalu git add untuk menambahkan track file, lalu git commit untuk menyimpan perubahan, lalu git remote untuk menghubungkan ke repository github dan yang terakhir git push untuk upload kode ke github. lalu cara kerja github yaitu sebagai tempat menyimpan kode secara online ,bisa juga agar diakses oleh orang lain dan dapat untuk mengelola project
* ### Cara membuat repository Git
    * git init untuk membuat repository baru
    `git init .` atau bisa menggunakan `git init <nama_project>`
* ### Cara commit pada git
    * `git commit -m "pesannya apa"`
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1663910177/commit_pqq5mo.png)
* ### cara push/publish ke github
    * yang pertama siapkan repository baru digithub, lalu copy link yang ada di github, lalu lakukan `git remote add origin https://github.com/anggitriefirfandy/skilvul-2.git`, lalu lakukan git push
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1663912307/git_push_qeufon.png)

* ### Cara clone dari github
    * menggunakan git clone
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1663912554/clone_yvev5h.png)

## DAY 2 : HTML
* ### HTML
    Hypertext Markup Language atau HTML adalah bahasa markup standar yang digunakan untuk membuat halaman website dan aplikasi web, HTML bukanlah sebuah bahasa pemrograman.
    ![](https://www.scmgalaxy.com/tutorials/wp-content/uploads/2021/07/html-syntax.png)
    di dalam element html terdapat tag dan content, lalu didalam tag terdapat attribute dan value
* ### Peran HTML pada web development
    yaitu sebagai kerangka dasar pada saat akan membuat sebuah website
* ### Tools pendukung dalam menggunakan HTML
    Salah satunya ada code editor bisa menggunakan visual studio code atau yang lainnya, lalu browser bisa google chrome dan lainnya
* ### HTML Sederhana
    ``` HTML
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Belajar HTML</title>
    </head>
    <body>
    <h1>Hai.. Nama saya Anggit</h1>
    </body>
    </html>

    ```
    ketika di jalankan akan mengasilkan tulisan Hai.. Nama saya anggit di browser

* ### Menjalankan HTML
    * bisa manual dengan cara membuka folder yang berisi index.html dan klik maka otomatis akan masuk ke halaman browser
    *  bisa menggunakan live server (extension dari VS Code) caranya yaitu instal extension live server di VS Code lalu klik kanan pada maka akan ada pilihan open with live server
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1663913868/live_server_pavpd6.png)
* ### HTML comment
    html comment adalah catatan kecil yang bisa di tambahkan di dalam source code tanpa mempengaruhi source code yang sudah dibuat, untuk membuat comment bisa dengan memencet tombol `shift dan tombol / secara bersamaan` nanti akan terbentuk seperti `<!--      -->`
* ### HTML Tag untuk teks
    1. `<h1></h1>` sampai paling kecil `<h6></h6>` adalah tag html untuk menuliskan judul atau sub judul
    2. `<p></p>` adalah tag html untuk membuat paragraf
    3. `<a href=""></a>` adalah tag html untuk membuat teks yang ketika di klik bisa menuju ke web lain
    4. `<span></span>` adalah tag html untuk mengelompokan tulisan dalam satu baris
    5. `<b></b>` atau `<strong></strong>` adalah tag html untuk membuat teks menjadi tebal
    6. `<i></i>` atau `<em></em>` adalah tag html untuk membuat teks menjadi bercetak miring
    7. `<ul>` adalah tag html untuk membuat list tidak berurutan
    8. `<ol>` adalah tag html untuk membuat list berurutan
    9. `<li>` adalah tag html untuk mendefinisikan nilai dari list tersebut

* ### HTML Tag untuk multimedia
    1. `<img src=""></img>` adalah tag html untuk menampilkan gambar
    2. `<video src=""></video>` adalah tag html untuk menambahkan video pada halaman web
    3. `<audio src=""></audio>` adalah tag html untuk menampilkan suara pada halaman web
    4. `<iframe src=""></iframe>` adalah tag html untuk menampilkan halaman website lainnya ke halaman website kita

* ### HTML Tag untuk tabel
    1. `<table></table>` adalah tag html tabel sebagai elemen utama
    2. `<tr></tr>` adalah tag html tabel untuk membuat garis baru
    3. `<td></td>` adalah tag html tabel untuk membuat wadah dari data yang mau diisi
    4. `<th></th>` adalah tag pengganti <td> untuk membuat header tabel

* ### HTML Tag untuk formulir
    1. `<form>` adalah tag html formulir untuk mengawali pembuatan form
    2. `<input>` adalah tag html formulir untuk membuat kotak input yang bisa diisi user
    3. `<select>` dan `<option>` adalah tag html formulir untuk membuat dropdown(pilihan yang ketika di pilih akan memunculkan beberapa opsi)
    4. `<fieldset>` adalah tag html untuk memberikan garis tepi pada element html yang ingin dikelompokkan
    5. `<legend>` adalah tag html untuk memberikan keterangan pada elemen didalam tag `<fieldset>`
    6. `<textarea>` adalah tag html formulir untuk menampung inputan user yang jumlahnya lebih dari 1 baris
    7. `<button>` adalah tag html formulir untuk membuat sebuah tombol yang dapat di klik

* ### Apa itu semantic HTML
    * element semantik adalah elemen elemen yang menyatakan makna atau tujuan dari elemen itu sendiri, diantaranya :
    1. `<header></header>` yaitu untuk membuat kepala kop dari web
    2. `<nav></nav>` yaitu untuk membuat navigasi atau navbar
    3. `<section></section>` yaitu untuk membuat bagian artikel
    4. `<article></article>` yaitu untuk membuat elemen artikel
    5. `<aside></aside>` yaitu untuk membuat elemen bagian samping
    6. `<footer></footer>` yaitu untuk membuat elemen bagian kaki web

    * Contoh penggunaan semantic html<br>
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1664042376/html_semantic_hrcfmq.png)
* ### Cara mempublish atau mendeploy aplikasi
    * deploy ke github pages yaitu upload atau push kode program yang telah dibuat ke repository github, lalu buka setting repository<br>
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1664042557/setting_repository_nurlph.png)
    lalu pilih pages<br>
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1664042622/pages_v0wpia.png)<br>
    lalu setting pagesnya<br>
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1664042711/setting_pagesnya_unpus3.png)<br>
    dan terakhir klik visit site, maka tampilannya seperti ini<br>
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1664043154/publish_github_pages_zb3rih.png)

## DAY 2
* ### CSS
    CSS adalah Cascading Style Sheets yaitu bahasa style sheet yang digunakan untuk mengstyle/mempercantik tampilan html
* ### peran CSS pada web development
    perannya untuk mempercantik atau memberi kulit pada tampilan dari halaman website yang sebelumnya sudah diberi kerangka html
* ### cara untuk menyisipkan CSS
    1. inline yaitu menyisipkan css di dalam opening tag suatu elemen html `<h1 style="color:blue;">Selamat Datang</h1>`
    2. internal yaitu menyisipkan css di dalam html tetapi berada di bagian head dengan menggunakan tag `<style></style>`
    3. eksternal yaitu menyisipkan css di luar halaman html yaitu dengan cara memanggil dengan `<link rel="stylesheet" href="styles.css" />` href diisi dengan alamat file cssnya

* ### CSS Syntax
```CSS
selector {
    property : value;
}
```
* ### Responsive CSS
    * responsive css bisa menggunakan media query atau bisa juga menggunakan col (grid view)

* ### Box model CSS
    ![](https://www.washington.edu/accesscomputing/webd2/student/unit3/images/boxmodel.gif)
    1. margin yaitu area terluar yang kosong setelah border. Margin bersifat transparan
    2. border yaitu garis tepi yang membungkus padding dan konten.
    3. padding yaitu area kosong di antara konten dan border. Padding bersifat transparan.
    4. content yaitu konten (value/nilai) dari HTML element. Bisa berupa teks, gambar, video, ataupun suara.
* ### Display CSS
    1. display none yaitu ketika digunakan ke suatu element maka element tersebut akan hilang dan digantikan posisinya oleh elemen yang lain
    2. visibility hidden yaitu ketika digunakan ke suatu elemen maka element tersebut akan seperti menghilang tetapi sebenarnya masih ada, sehingga posisinya tidak akan tergantikan oleh element lain
    3. display blok yaitu untuk mengatur ukuran menjadi penuh dari kanan ke kiri layar
    4. display inline yaitu untuk mengatur ukuran displaynya mengikuti ukuran contentnya
    5. display inline blok yaitu mengatur ukuran display yang bisa diatur untuk ukuran displaynya

* ### Position CSS
    1. static yaitu posisi yang tidak akan terpengaruh oleh properti top,bottom,left dan right
    2. relative yaitu posisi yang bisa di atur dengan properti top,bottom, left dan right
    3. absolute yaitu posisi yang mengikuti induknya yang bersifat position relative

* ### Flexbox
    * yaitu untuk mengatur layout, posisi, dan ukuran dari tiap element di dalamnya
    * display: flex yaitu untuk mendefinisikan wadah yang flexibel
    * flex-direction yaitu apakah akan membentuk vertikal atau horizontal
    * justify-content yaitu mengatur konten letaknya seperti apa, apakah rata kanan kiri, rata kiri, rata kanan dan lain lain

## DAY 3
* ### Perbedaan Algoritma dan Struktur data
    * Struktur data adalah cara penyimpanan , pengorganisasian , dan pengaturan data di dalam media penyimpanan komputer sehingga data tersebut dapat digunakan secara efisien. Algoritma adalah sederetan langkah-langkah logis yang disusun secara sistematis untuk memecahkan suatu masalah.

* ### Kegunaan algoritma dan struktur data
    * kegunaan struktur data yaitu untuk memudahkan dalam konsep algoritma sehingga logika program menjadi lebih terstruktur
    * kegunaan algoritma yaitu untuk memecahkan suatu masalah dan dapat membantu menyederhanakan program yang rumit
* ### contoh algoritma
    * Menentukan bilangan genap atau ganjil
        1. mulai
        2. deklarasi variabel
        3. input nilai bilangan
        4. lakukan pengecekan dengan modulus jika sisa bagi hasilnya 0 maka tampilkan  genap, kalau sisa bagi hasilnya 1 maka tampilkan bilangan ganjil
        5. selesai
* ### Menerapkan algoritma kedalam bahasa pemrograman javascript
    ```Javascript
        function ganjilGenap(a) {
            if (a % 2 === 0) {
                return("genap")
            }else{
                return("ganjil")
            }
        }
        console.log(ganjilGenap(2));
    ```
* ### Big 0 notation
    * Notasi O besar atau yang lazim disebut dengan Big-O Notation adalah sebuah cara atau metode untuk melakukan analisa terhadap sebuah algoritma pemrograman terhadap waktu eksekusi. Tentang seberapa efisien dan kompleksitas barisan kode dalam dimensi waktu
* ### Ciri ciri Algoritma
    1. input yaitu memiliki 0 atau lebih inputan
    2. output yaitu memiliki minimal 1 output
    3. Definiteness yaitu instruksinya jelas tidak ambigu
    4. Finitness yaitu memiliki titik berhenti (stop)
    5. Effectiveness yaitu sebisa mungkin tepat sasaran dan efisien

* ### Jenis jenis Algoritma
    1. Sequence yaitu instruksi yang dijalankan secara berurutan
    2. Selection yaitu instruksi yang dijalankan memenuhi suatu kondisi
    3. Iteration yaitu instruksi yang berulang kali dijalankan selama memenuhi suatu kondisi
    4. Concurent yaitu instruksi yang diajalankan secara bersamaan

* ### Cara Penyajian Algoritma
    1. Deskriptif yaitu penyajian algoritma dengan menggunakan bahasa sehari hari
    2. Flow Chart yaitu penyajian algoritma dengan menggunakan gambar diagram<br>
    ![](https://kelasprogrammer.com/wp-content/uploads/2019/10/flowchart-percabangan-sederhana.png)
    3. Pseudo Code yaitu penyajian algoritma yang hampir sama dengan penulisan kode pemrograman<br>
    ![](https://www.dicoding.com/blog/wp-content/uploads/2021/08/Contoh-pseudocode-ganjil-genap.png)

* ### Struktur data javascript misalnya dengan array
    ```Javascript
    let mobil = ['avanza', 'xenia', 'kijang'];
    // untuk memanggil misalnya avanza, maka bisa menggunakan
    console.log(mobil[0])
    ```


## DAY 6
* ### JAVASCRIPT
    * JavaScript adalah bahasa pemrograman tingkat tinggi dan dinamis. JavaScript populer di internet dan dapat bekerja di sebagian besar penjelajah web populer seperti Google Chrome, Internet Explorer, Mozilla Firefox, Netscape dan Opera. Kode JavaScript dapat disisipkan dalam halaman web menggunakan tag script

* ### fungsi javascript di web development
    * Javascript bisa digunakan untuk membuat fitur beragam seperti drag, drop komponen yang semuanya bisa bermanfaat untuk meningkatkan tampilan (interface) dan pengalaman menggunakan web.
    
* ### Cara menjalankan javascript
    * cara menjalankan javascript harus menempel di html, jadi yang pertama buat index.html lalu didalamnya yaitu di dalam tag body di tambahkan tag script dan hubungkan ke file javascriptnya, lalu untuk menjalankan bisa menjalankan index.html lalu klik kanan di web browser dan pilih inspect lalu pilih konsol
## Cara Menyisipkan javascript
1. Internal Javascript yaitu menyisipkan kode javascript langsung didalam file HTML
2. External Javascript yaitu menyisipkan Kode javascript terpisah dari file HTMLnya, biasanya nanti akan dipanggil di tag `<script></script>` di `<head></head>` atau di `<body></body>` 

## Cara mendeklarasikan variabel di Javascript
``` Javascript
let namaVariabel = "Anggit Rief Irfandy"
```
1. ketika terdapat 2 kata bisa menggunakan camelCase
2. nama variabel tidak boleh diawali dengan angka, @ , *, !, %, (), -, +
3. tidak boleh menggunakan kata kunci Javascript seperti `boolean, break, else dan lain lain`
4. tidak boleh ada spasi
5. penulisan huruf kecil dan besar harus diperhatikan, misalnya hitung dengan Hitung itu dianggap berbeda

* ### Tipe data Javascript
    ![](https://pbs.twimg.com/media/EM2pyP-VUAEYWLE.jpg)
    1. string yaitu tipe data yang diapit dengan petik dua (""), petik 1 ('') dan backtik  `let nama = "Anggit"`
    2. number yaitu tipe data yang isinya berupa angka `let number = 10;`
    3. boolean yaitu tipe data yang isinya true atau false
    4. null yaitu tipe data yang diartikan tidak memiliki nilai, biasanya diperoleh dalam kondisi normal atau sudah direncanakan
    5. undefined yaitu tipe data yang mempresentasikan variabel/data yang tidak memiliki nilai, biasanya didapat dari hasil kesalahan program(error) dan tidak di rencanakan
    6. object yaitu koleksi data yang saling berhubungan, dapat menyimpan berbagai mcam tipe data
        ``` Javascript
        let mahasiswa = {
            nama: "Anggit",
            semester: 5,
        }
        ```

* ### cara mendefiniskan variabel di Javascript
    1. var
    2. let
    3. const gunakan const jika ingin variabel tidak dapat dirubah nilainya

* ### Arithmetic Operator Javascript
    1. Tambah `+`
    2. Kurang `-`
    3. Perkalian `*`
    4. Pembagian `/`
    5. Modulus `%`

* ### Operator Perbandingan Javascript
    1. lebih kecil dari `<`
    2. lebih besar dari `>`
    3. lebih kecil atau sama dengan `<=`
    4. lebih besar atau sama dengan `>=`
    5. sama dengan dicek nilainya saja `==`
    6. tidak sama dengan di cek nilainya saja `!=`
    5. sama dengan tiga dicek nilai dan tipe datanya `===`
    6. tidak sama dengan dicek nilai dan tipe datanya `!==`

* ### Operator logika Javascript
    1. AND operator `&&` semua harus true agar bernilai true, jika salah satunya false maka nilainya jadi false
    2. OR operator `||` salah satu true maka hasilnya true
    3. NOT operator `!` akan membalikan nilai boolean true menjadi false dan sebaliknya

* ### Pengkondisian Javascript
    * pengkondisian adalah statement percabangan yang menggambarkan suatu kondisi, jika kondisi terpenuhi atau true maka kode didalamnya akan dijalankan, contoh pengkondisian diantaranya:
    1. if
        ```Javascript
        let makan = true;
        if (makan) {
            console.log('sudah selesai')
        }
        ```
    2. if else
        ```Javascript
        let makan = false;
        if (makan) {
            console.log('sudah selesai')
        } else {
            console.log('belum selesai makan')
        }
        ```
    3. if else if
        ```Javascript
        let lampuJalan = 'Merah';
        if (lampuJalan === 'Merah') {
            console.log('berhenti');
        }else if (lampuJalan === 'kuning'){
            console.log('hati hati');
        }else if (lampuJalan === 'hijau'){
            console.log('silahkan jalan');
        }else {
            console.log('awas, lampu rusak mohon lebih hati hati');
        }
        ```                                                 
    4. switch case
        * gunakan switch case jika kondisi percabangan terlalu banyak
        ```Javascript
        let ac = 1;
        switch(remote){
            case 1:
                console.log('sangat dingin');
                break;
            case 2:
                console.log('dingin');
                break;
            case 3:
                console.log('normal');
                break;
            case 4:
                console.log('hangat');
                break;
            case 5:
                console.log('panas');
                break;
            case 6:
                console.log('sangat panas');
                break;
        }
        ```
    5. ternary operator
        merupakan short singkat dari statement if else
        ```Javascript
        let makan = true;
        makan ? console.log('sudah selesai') : console.log('belum selesai makan')
        ```
* ### Looping
    * Looping adalah statement yang mengulang sebuah instruksi sampai kondisi terpenuhi atau berhenti tercapai
    1. for
        digunakan ketika kita tahu seberapa banyak nilai yang akan kita ulang, misalnya kita ingin mencetak angka dari 1-10 menggunakan perulangan
        ```Javascript
        let angka = 1;
        for (angka; angka <= 10; angka++ ){
            console.log(angka);
        }
        ```
    2. while
        digunakan ketika kita tidak tahu secara pasti berapa banyak yang akan kita lakukan perulangan
        ```Javascript
        let counter = 1
        while (counter < 10){
            console.log(count);
            counter++;
        }
        ```
    3. do while
        yaitu perulangan yang dijalankan terlebih dahulu baru mengecek kondisi
        ```Javascript
        let angka = 1;
        do {
            console.log(angka);
            angka++;
        } while (angka <= 10);
        ```
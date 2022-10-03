# week1
## day1
* ### unix command line
    * shell adalah program khusus yang menyediakan komunikasi langsung antara pengguna dan sistem operasi
    * command line interface adalah tempat untuk menuliskan perintah, untuk berkomunikasi dengan komputer
    * cara mengakses CLI (git bash)download git terlebih dahulu, lalu konfigurasi, cari didalam pencarian aplikasi dengan nama git bash lalu klik.
    ![](https://res.cloudinary.com/ddhkwq4zk/image/upload/v1664039156/Screenshot_58_t04suk.png)
    * terminal adalah terminal mempunyai fungsi seperti cli yaitu untuk  berkomunikasi dengan komputer
    * file system struktur adalah system untuk mengatur bagaimana data disimpan didalam sebuah sistem(seperti pohon)
    * `pwd` untuk melihat current working directory
    * `ls` melihat isi sebuah directory
    * `cd` untuk berpindah directory
    * `touch` untuk membuat sebuah file
    * `mkdir` untuk membuat sebuah direktori
    * `head` untuk melihat beberapa line awal dari sebuah file text
    * `tail` untuk melihat beberapa line awal dari sebuah file text
    * `cat` untuk melihat isi sebuah file
    *  `cp` untuk mengcopy file / directory
    * `mv` untuk memindah file, dan bisa digunakan untuk meriname
    * `rm` untuk menghapus file

## day2
* ### git & github
    * git dan github wajib digunakan karena github merupakanwadah khusus bagi developer untuk menulis code, menyimpan code,dan untuk berkomunikasi dengan programmer lain
    * perbedaan antara git dan github adalah git dapat menyimpan software di penyimpanan lokal github host melalui layanan cloud, git dikelola oleh the linux foundation ,github deakuisisi oleh microsoft pada 2018, git dapat diakses secara offline, github diakses secara online 
    * alur kerja git dan github yaitu yang pertama git init untuk membuat sebuah repository baru, lalu git add untuk menambahkan suatu track file, git commit untuk menyimpan perubahan, git remote untuk menghubungkan ke dalam repository github dan yang terakhir adalah git push untuk upload kode ke github. lalu cara kerja github yaitu sebagai tempat menyimpan kode secara online ,untuk diakses oleh orang lain dan dapat untuk mengelola project
    * cara membuat repository git   `git init` untuk membuat repository baru atau bisa juga menggunakan `git init <nama project>`
    * cara melakukan commit pada git `git commit -m "pesan yang akan disampaikan`
    * cara push/publish ke github (!)
    * Cara clone dari github (!)
## day3
* ### html
    * peran html pada web development yaitu sebagai kerangka dasar pada saat akan membuat website
    * tools pendukung dalam menggunakan HTML yaitu Salah satunya adalah code editor, bisa menggunakan visual studio code atau yang lainnya, lalu browser bisa menggunakan google chrome dan lainnya
    * html sederhana
    * menjalankan HTML secara manual dan menggunakan live server dari VS Code yaitu bisa secara manual dengan cara membuka folder yang berisikan index.html kemudian klik maka otomatis akan masuk ke halaman browser, lalu bisa juga menggunakan live server (extension dari VS Code) caranya yaitu instal extension live server di VS Code lalu klik kanan pada maka akan ada pilihan open with live server
    * Tag HTML teks
    1. `<h1></h1>` sampai dengan yang terkecil `<h6></h6>` adalah tag html untuk menuliskan judul atau sub judul
    2. `<a href=""></a>` adalah tag html untuk membuat teks yang apabila diklik bisa masuk ke web lain
    3. `<p></p>` adalah tag html untuk membuat paragraf
    4. `<li>` adalah tag html untuk mendefinisikan nilai dari list tersebut
    5. `<i></i>` atau `<em></em>` adalah tag html untuk membuat teks menjadi bercetak miring
    6. `<ul>` adalah tag html untuk membuat list tidak berurutan
    7. `<ol>` adalah tag html untuk membuat list berurutan
    8. `<span></span>` adalah tag html untuk mengelompokan tulisan dalam satu baris
    9. `<b></b>` atau `<strong></strong>` adalah tag html untuk membuat teks menjadi tebal
    * tag HTML tag untuk multimedia
    1. `<iframe src=""></iframe>` adalah tag html untuk menampilkan halaman website lainnya kehalaman membuat header table
    2. `<img src=""></img>` adalah tag html untuk menampilkan gambar
    3. `<audio src=""></audio>` adalah tag html untuk menampilkan suara pada halaman web
    4. `<video src=""></video>` adalah tag html untuk menambahkan video pada halaman web
    *  tag HTML untuk tabel
    1. `<td></td>` adalah tag html tabel untuk membuat wadah dari data yang mau diisi
    2. `<table></table>` adalah tag html tabel sebagai elemen utama
    * tag HTML untuk formulir
    1. `<input>` adalah tag html formulir untuk membuat kotak input yang bisa diisi user
    2. `<button>` adalah tag html formulir untuk membuat sebuah tombol yang dapat di klik
    3. `<legend>` adalah tag html untuk memberikan keterangan pada elemen didalam tag `<fieldset>`
    4. `<fieldset>` adalah tag html untuk memberikan garis tepi pada element html yang ingin dikelompokkan

    * Apa itu semantic HTML
    * element semantik adalah elemen elemen yang menyatakan makna atau tujuan dari elemen itu sendiri, diantaranya :
    1. `<header></header>` yaitu untuk membuat kepala kop dari web
    2. `<nav></nav>` yaitu untuk membuat navigasi atau navbar
    3. `<section></section>` yaitu untuk membuat bagian artikel
    4. `<article></article>` yaitu untuk membuat elemen artikel
    5. `<aside></aside>` yaitu untuk membuat elemen bagian samping
    6. `<footer></footer>` yaitu untuk membuat elemen bagian kaki web

    * Contoh penggunaan semantic html<br>
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1664042376/html_semantic_hrcfmq.png)
    * Cara mempublish atau mendeploy aplikasi yaitu deploy ke github pages
## day4
* ### CSS
    
    * CSS adalah Cascading Style Sheets yaitu suatu bahasa style sheet yang digunakan untuk mengstyle/mempercantik sebuah tampilan html
    * perannya untuk mempercantik atau memberi kulit pada tampilan dari halaman website yang sebelumnya sudah diberi kerangka html
    * cara menyisipkan CSS ke dalam HTML 
    1. inline yaitu menyisipkan css di dalam sebuah opening tag suatu elemen  `<h1 style="color:blue;">Selmat pagi</h1>`
    2. internal yaitu menyisipkan css didalam html akan tetapi berada di bagian head dengan menggunakan sebuah tag `<style></style>`
    3. eksternal yaitu menyisipkan css diluar halaman html dengan cara memanggil dengan menggunakan `<link rel="stylesheet" href="styles.css" />` href diisi dengan alamat file cssnya
    * CSS Syntax
    ```CSS
    selector {
        property : value;
    }
    ```
    * responsive css bisa menggunakan media query atau bisa juga menggunakan col (grid view)
    * flex box
        * yaitu untuk mengatur layout, posisi, dan ukuran dari tiap element di dalamnya
        * display: flex yaitu untuk mendefinisikan wadah yang flexibel
## day5
* ### algoritma
    * perbedaan antara Algoritma dan Data Structures , Struktur data adalah cara penyimpanan , pengorganisasian , dan pengaturan data di dalam media penyimpanan komputer sehingga data tersebut dapat digunakan secara efisien. Algoritma adalah sederetan langkah-langkah logis yang disusun secara sistematis untuk memecahkan suatu masalah
    * Kegunaan algoritma dan data structur
        * kegunaan struktur data yaitu untuk memudahkan dalam konsep algoritma sehingga logika program menjadi lebih terstruktur
        * kegunaan algoritma yaitu untuk memecahkan suatu masalah dan dapat membantu menyederhanakan program yang rumit

    * Contoh algoritma
        * Menentukan bilangan genap atau ganjil
            1. mulai
            2. deklarasi variabel
            3. input nilai bilangan
            4. lakukan pengecekan dengan modulus jika sisa bagi hasilnya 0 maka tampilkan  genap, kalau sisa bagi hasilnya 1 maka tampilkan bilangan ganjil
            5. selesai

    * Contoh implementasi algoritma ke bahasa javascript
        ```Javascript
            function ganjilGenap(i) {
                if (i % 2 === 0) {
                    return("genap")
                }else{
                    return("ganjil")
                }
            }
            console.log(ganjilGenap(2));
        ```

    * contoh struktur data
        ```Javascript
        let hewan = ['kucing', 'kambing', 'ayam','sapi'];
        // untuk memanggil misalnya ayam, maka bisa menggunakan
        console.log(hewan[2])
        ```
    * Big O natation adalah Big-O Notation adalah sebuah cara atau metode untuk melakukan analisa terhadap sebuah algoritma pemrograman terhadap waktu eksekusi


    * Cara Penyajian Algoritma
    1. Deskriptif yaitu penyajian algoritma dengan menggunakan bahasa sehari hari
    2. Flow Chart yaitu penyajian algoritma dengan menggunakan gambar diagram
    ![](https://kelasprogrammer.com/wp-content/uploads/2019/10/flowchart-percabangan-sederhana.png) (!!!!!)
    3. Pseudo Code yaitu penyajian algoritma yang hampir sama dengan penulisan kode pemrograman
    ![](https://www.dicoding.com/blog/wp-content/uploads/2021/08/Contoh-pseudocode-ganjil-genap.png) (!!!!!)
## day6
* ### java script

    * JavaScript adalah bahasa pemrograman tingkat tinggi dan dinamis. JavaScript populer di internet dan dapat bekerja di sebagian besar penjelajah web populer seperti Google Chrome, Internet Explorer, Mozilla Firefox, Netscape dan Opera. Kode JavaScript dapat disisipkan dalam halaman web menggunakan tag script
    * Javascript bisa digunakan untuk membuat fitur beragam seperti drag, drop komponen yang semuanya bisa bermanfaat untuk meningkatkan tampilan (interface) dan pengalaman menggunakan web.
    * cara menjalankan javascript harus menempel di html, jadi yang pertama buat index.html lalu didalamnya yaitu di dalam tag body di tambahkan tag script dan hubungkan ke file javascriptnya, lalu untuk menjalankan bisa menjalankan index.html lalu klik kanan di web browser dan pilih inspect lalu pilih konsol
    * Cara Menyisipkan javascript
    1. Internal Javascript yaitu menyisipkan kode javascript langsung didalam file HTML
    2. External Javascript yaitu menyisipkan Kode javascript terpisah dari file HTMLnya, biasanya nanti akan dipanggil di tag `<script></script>` di `<head></head>` atau di `<body></body>` 
    * Tipe data
        ![](https://pbs.twimg.com/media/EM2pyP-VUAEYWLE.jpg)
        1. string yaitu tipe data yang diapit dengan petik dua (""), petik 1 ('') dan backtik  `let nama = "Anggit"`
        2. number yaitu tipe data yang isinya berupa angka `let number = 10;`
        3. boolean yaitu tipe data yang isinya true atau false
        4. null yaitu tipe data yang diartikan tidak memiliki nilai, biasanya diperoleh dalam kondisi normal atau sudah direncanakan
        5. undefined yaitu tipe data yang mempresentasikan variabel/data yang tidak memiliki nilai, biasanya didapat dari hasil kesalahan program(error) dan tidak di rencanakan
        6. object yaitu koleksi data yang saling berhubungan, dapat menyimpan berbagai mcam tipe data
            ``` Javascript
            let karyawan = {
                nama: "lita",
                umur: 21,
            }
            ```
    * Operator
        1. Tambah `+`
        2. Kurang `-`
        3. Perkalian `*`
        4. Pembagian `/`
        5. Modulus `%`
        6. lebih kecil dari `<`
        7. lebih besar dari `>`
        8. lebih kecil atau sama dengan `<=`
        9. lebih besar atau sama dengan `>=`
        10. sama dengan dicek nilainya saja `==`
        11. tidak sama dengan di cek nilainya saja `!=`
        12. sama dengan tiga dicek nilai dan tipe datanya `===`
        13. tidak sama dengan dicek nilai dan tipe datanya `!==`
        14. AND operator `&&` semua harus true agar bernilai true, jika salah satunya false maka nilainya jadi false
        15. OR operator `||` salah satu true maka hasilnya true
        16. NOT operator `!` akan membalikan nilai boolean true menjadi false dan sebaliknya
    
    * pengkondisian adalah statement percabangan yang menggambarkan suatu kondisi, jika kondisi terpenuhi atau true maka kode didalamnya akan dijalankan, contoh pengkondisian diantaranya:
        1. if else
        2. if elseif
        3. switch case
    * contoh pengkondisian
        ```Javascript
        let lampu = true;
        if (lampu) {
            console.log('lampu menyala')
        } else {
            console.log('lampu mati')
        }
        ```
    * Looping adalah statement yang mengulang sebuah instruksi sampai kondisi terpenuhi atau berhenti tercapai
        1. for
        2. while
        3. do while

    * Contoh looping
        ```Javascript
        let angka = 1;
        for (angka; angka <= 10; angka++ ){
            console.log(angka);
        }
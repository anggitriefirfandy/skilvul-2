# Writting and presentation week2
## DAY 1
* ### Scope
    * Scope
        variabel scope merupakan wilayah program anda yang sudah ditentukan, variabel scope ada dua jenis yaitu global variabel dan local variabel
    * Variabel global
        * variabel global dapat di akses di seluruh dokumen web
        ```javascript
        var makanan = "mie ayam";
        function namaMakanan() {

        }
        ```
        * variabel local hanya tersedia di dalam fungsi yang telah dideklarasikan
        ```javascript
        function namaMakanan(){
            var makanan = "mie ayam"
        }
        ```
* ### Function
    * function
        yaitu sekumpulan kode yang dirancang untuk melakukan tugas tertentu, atau program yang bisa digunakan kembali baik didalam program itu sendiri maupun di program lain
    * deklarasi function
        ```javascript
        function namaFungsi(){
            //kodenya
        }
        ```
        ```javascript
        let namaVariabelFungsi = function(){
            //kodenya
        }
        ```
        contoh
        ```javascript
        function sapa(){
            console.log("halo")
        }
        ```
    * memanggil function
        cara untuk memanggil function yaitu dengan menuliskan nama functionnya lalu diberi kurung buka dan kurung tutup.
        ```javascript
        sapa();
        ```
    * Arguments
        argumen adalah nilai yang diteruskan ke dalam fungsi saat fungsi dipanggil
        ```javascript
        function functionName(parameter1, parameter2){
            //code
        }
        functionName(argumen1,argumen2)
        ```
    * parameter
        parameter adalah variabel yang terdaftar menjadi bagian dari definisi fungsi
        ```javascript
        function functionName(parameter1, parameter2){
            //code
        }
        functionName(argumen1,argumen2)
        ```
    * arrow function
        arrow function adalah cara lain menuliskan function, ini adalah fitur terbaru yang ada pada ES6
        ```javascript
        let sapa = () => {
            console.log("halo")
        }
        sapa();
        ```
        
## DAY 2
* ### Data type built in prototype and method
    * Data type
        data type atau tipe data adalah jenis jenis data yang bisa disimpan didalam variabel
    * String
        1. String mempunyai properties String.length
        2. String mempunyai banyak method diantara toUppercase, toLowercase dan lain lain
        ```javascript
        let mahasiswa = "AngGiT"
        // properties untuk menghitung panjang teks
        console.log(mahasiswa.length);
        //method untuk membuah huruf besar semua atau kecil semua
        console.log(mahasiswa.toUppercase())
        console.log(mahasiswa.toLowercase())
        //method untuk mengambil/menampilkan satu karakter saja, penggunaanya mirip seperti array
        console.log(mahasiswa.charAt(3))
        console.log(hewan[])
        //method untuk mencari apakah di suatu teks ada huruf yang dicari dan akan mengembalikan nilai true atau false
        console.log(mahasiswa.include("g"))
        ```
    * Number
        ```javascript
        //properties isNaN adalah untuk mengecek apakah sebuah teks atau number(is Not a Number) jadi apakah "hai" adalah bukan angka? true
        isNaN("hai")
        //mengubah number menjadi String
        let angka = 10
        angka.toString()
        //bisa juga menggunakan + ""
        10 + ""
        //untuk membatasi setelah koma ada berapa digit yang ingin ditampilkan dan hasilnya berbentuk string
        let angkaKoma = 13.9374
        angkaKoma.toFixed(2)
        //ketika ingin nilainya berbentuk angka maka bisa dibungkus dengan Number
        Number(angkaKoma.toFixed(2))
        ```
    * Math
        ``` JavaScript
        //abs = nilai absolute tidak boleh minus maka hasilnya adalah 10
        Math.abs(-10)
        //pow = pangkat
        Math.pow(5, 2)
        //sqrt = akar dari
        Math.sqrt(4)
        //round = untuk membulatkan jadi dibelakang koma dihilangkan
        Math.round(221.231)
        //floor = untuk membulatkan kebawah
        Math.floor(5.9)
        //ceil = untuk membulatkan keatas
        Math.ceil(5.1)
        //untuk menampilkan angka random
        Math.random()
        ```
    * prototype
        prototype adalah properti object yang menghubungkan objek ke objek lain misalnya kita ingin membuat function baru yang gunanya untuk membalik suatu kata maka kita buat menggunakan prototype dan didalamnya terdapat function yang menjalankan agar kata menjadi terbalik
        ```javascript
        String.prototype.reverse = function(){
            let s = ""
            for(let i = String(this).length-1; i >= 0; i--) {
                s = s + String(this)[i]
            }
            return s
        }
        console.log("Anggit".reverse())
        ```
    * Primitive datatype
        adalah tipe data dasar yang tersedia secara langsung pada suatu bahasa pemrograman
        1. Numbers
        2. String
        3. Boolean
        4. undefined
        5. null
    * Non Primitive
        adalah tipe data yang didefinisikan sendiri oleh programmer dan biasanya berisi lebih dari satu nilai
        1. Object
        2. Array
        3. Function


## DAY 3
* ### DOM
    * DOM
        DOM (Document Object Model) adalah sebuah API yang menyediakan fungsi fungsi untuk memanipulasi halaman website dari segi struktur, tampilan dan kontennya.
    * mengambil berdasarkan id
        ```javascript
        document.getElementById("idnya apa")
        ```
    * mengambil berdasarkan class name
        akan mendapatkan HTML Collection karena class itu jamak
        ```javascript
        document.getElementByClassName("nama kelasnya apa")
        ```
    * mengambil berdasarkan tag name
        ```javascript
        document.getElementsByTagName("tag html")
        ```
    * mengambil berdasarkan query selector
        ```javascript
        document.querySelector("selectornya apa")
        ```
    * mengambil berdasarkan querySelectorAll akan menghasilkan nodeList
        ```javascript
        document.querySelectorAll(".list")//untuk selecornya bebas(menggunakan titik karena selector class)
        ```
    * mengambil elemen di dalam sebuah elemen menggunakan child
        ```javascript
        //misalnya ada tag html seperti dibawah ini
        //<ul class="list">
        //  <li class="item">satu</li>
        //  <li class="item">dua</li>
        //</ul>
        let list = document.getElementsByClassName("list")
        console.log(list[0].children)
        //hasilnya adalah HTMLCollection { 0: li.item, 1: li.item, length: 2 }
        ```
    * mengambil elemen yang membungkus element menggunakan parent
        ```javascript
        //misalnya ada tag html seperti dibawah ini
        //<ul class="list">
        //  <li class="item">satu</li>
        //  <li class="item">dua</li>
        //</ul>
        let itemQuery = document.querySelector(".item")
        console.log(itemQuery.parentElement)
        //bisa juga menggunakan closest
        console.log(itemQuery.closest(".list"))
        ```
    * mengambil elemen yang masih satu parent menggunakan sibling
        ```javascript
        console.log(itemQuery.previousElementSibling)
        console.log(itemQuery.nextElementSibling)
        ```
## DAY 4
* ### menyisipkan dan style element menggunakan DOM
    * menambahkan/menyisipkan menggunakan innerHTML
        ```javascript
        let tampil = document.getElementById("tampil")
        //menampilkan sesuatu bisa sekalian dengan tagnya(bisa mendeteksi tag/element html)
        tampil.innerHTML = "hai"
        //menampilkan sesuatu menjadi teks semua(tidak bisa mendeteksi tag/element html)
        tampil.innerText = "halo halo"
        ```
    * membuat element html menggunakan createElement()
        ```javascript
        let p = document.createElement("p")
        p.innerText = "contoh paragraf"
        ```
    * menyisipkan elemen kedalam elemen menggunakan append()
        ```javascript
        let p = document.createElement("p")
        p.innerText = "contoh paragraf"
        tampil.append(p)
        // untuk appendChild hanya bisa menampilkan node, jika di beri string maka tidak mau tampil
        ```
    * untuk menghapus element html
        ```javascript
        let p = document.getElementById("p")
        p.remove()
        ```
    * menampilkan attribute
        ```javascript
        //kenapa ada [0] karena getElementByClassName mengembalikan nilai berbentuk HTML collection mirip array dan karena di sini saya hanya bikin 1 maka masuk ke index ke 0, misalnya saya buat 3 buahh className isinya 3 maka tinggal memilih mana yang akan di gunakan
        let link = document.getElementByClassName("link")[0]
        //maka akan tampil atribut dari clas link itu apa saja
        console.log(link.attributes)
        //maka akan tampil isi dari atribut href itu apa
        console.log(link.getAttribute("href"))
        //maka akan menambahkan di dalam link yaitu id dengan nama google
        link.setAttribute("id", "google")
        ```
    * menambahkan style
        ```javascript
        link.style.color = "red"
        link.style.backgroundColor = "green"
        link.style.border = "1px solid red"
        ```
    * mengambil isi style
        ```javascript
        //ambil id isi, disini id isi sudah diberi style lewat css
        let isi = document.getElementById("isi")
        //panggil getComputedStyle lalu ambil elemen isi dan masukan ke variabel isiStyle
        let isiStyle = getComputedStyle(isi)
        //tampilkan
        console.log(isiStyle.height)
        ```
## DAY 5
* ### Event
    * Event
        Event adalah sesuatu yang terjadi ketika ada aksi yang dilakukan oleh pengguna atau sistem pada halaman web.
    * cara memberikan event
        1. HTML attribute
            ```Javascript
            <p onClick="alert("selamat datang")">Hai</p>
            ```
        2. Event property
            ```Javascript
            let paragraf = document.getElementById("paragraf")
            paragraf.onclick = tampilkanAlert
            function tampilkanAlert(){
                alert("hai hai hai")
            }
            ```
        3. addEventListener
            addEventListener bisa handler lebih dari 1 event
            ```Javascript
            let button = document.getElementById("btn")
            button.addEventListener("click", function(){
            alert("contoh dari addEventListener")

            button.addEventListener("click", function(){
            confirm("apakah kamu yakin?")
            })
            ```
    * Jenis Event di javascript
        1. onload adalah event terjadi ketika halaman html selesai ditampilkan
        2. onclick adalah event terjadi ketika suatu element HTML diklik
        3. onchange adalah event ketika nilai suatu element berubah
        4. onmouseover adalah event terjadi ketika pointer mouse menyentuh/memasuki suatu element HTML
        5. onmouseout adalah event terjadi ketika pointer mouse keluar dari suatu element HTML
        6. onsubmit adalah event ketika form di submit
        
    * mengambil element menggunakan event.target
        ```Javascript
        button.addEventListener("click", function(event){
        console.log(event.target);
        })
        ```
    * onClick
        terjadi ketika element di klik
        ``` JavaScript
        //ketika paragraf Hai di click maka akan muncul alert selamat datang
        //ini adalah cara memberikan event dengan HTML attribute
        <p onClick="alert("selamat datang")">Hai</p>
        ```
    * onmouseover
        terjadi ketika mouse diarahin
        ``` JavaScript
        <p onmouseover="alert('selamat datang')">Hai</p>
        ```
    * event.preventDefault
        kegunaanya untuk mencegah/menghalangi agar tidak melakukan hal defaultnya, misalnya submit itu defaultnya ketika dijalankan akan merefresh semua, ketika tidak ingin merefresh maka gunakan `event.preventDefault`

    
* ### Forms
    * form merupakan bagian pada html yang dapat digunakan untuk membuat element form pada halaman web, element form terdiri dari check bpx, radio button, menu, text box, text area, dan button
    * menggunakan Form
        ```javascript
        //buat variabel form, lalu ambil element dengan id form dan masukan kedalam variabel form
        const form = document.getElementById('form')
        ```
    * menggunakan form.input
        ```javascript
        const form = document.getElementById('form')
        const input = form.input
        ```
    * menggunakan form input value
        ```javascript
        const form = document.getElementById('form')
        const input = form.input
        const value = input.value
        ```
    * menggunakan form input type
        ```javascript
        const form = document.getElementById('form');
        const input = form.input
        const type = input.type
        ```
    * menggunakan form input placeholder
        ```javascript
        const form = document.getElementById('form');
        const input = form.input
        const placeholder = input.placeholder
        ```
    * menggunakan form input checked
        ```javascript
        const form = document.getElementById('form');
        const input = form.input
        const checked = input.checked
        ```
    * menggunakan form input disabled
        ```javascript
        const form = document.getElementById('form');
        const input = form.input
        const disabled = input.disabled
        ```
    * menggunakan form input max length
        ```javascript
        const form = document.getElementById('form');
        const input = form.input
        const maxLength = input.maxLength
        ```
    * menggunakan form input min length
        ```javascript
        const form = document.getElementById('form');
        const input = form.input
        const minLength = input.minLength
        ```
# Writing week3
### DAY 1
* ### Array
    * membuat array
        ```javascript
        let namaArray = [element1, element2, element3]
        //contoh 
        let angka = [1, 2, 3]
        ```
    * memanggil array
        ```javascript
        console.log(namaArray)
        //contoh
        console.log(angka)
        //mengakses array angka dengan isi 2
        angka[1]//tampil angka 2
        ```
    * menambahkan element array di akhir(push)
        ```javascript
        let angka = [1, 2, 3]
        angka.push("halo")//[1, 2, 3, "halo"]
        ```
    * menambahkan element array di awal(unshift)
        ```javascript
        let angka = [1, 2, 3]
        angka.unshift("halo")//["halo", 1, 2, 3,]
        ```
    * menghapus element array di akhir(pop)
        ```javascript
        let angka = [1, 2, 3]
        angka.pop()//[1,2]
        ```
    * menghapus element array di awal(shift)
        ```javascript
        let angka = [1, 2, 3]
        angka.shift()//[2, 3]
        ```
    * for
        ```javascript
        for (let i = 0; i < angka.length; i++){
            console.log(angka[i])
        }
        ```
    * for of
        ```javascript
        // lakukan perulangan, variabel tampil pada
        // perulangan pertama berisi angka 1 lalu di tampilkan
        for (let tampil of angka){
            console.log(buah);
        }
        ```
    * forEach
        digunakan ketika ingin melooping tanpa ingin mengambil nilainya ( tanpa return) maka bisa menggunakan forEach
        ```javascript
        // parameter tampil itu pada saat perulangan pertama
        // akan berisi angka 1 lalu ditampilkan
        angka.forEach( (tampil) => {
            console.log(tampil);
        })
        //bisa juga menampilkan indexnya
        angka.forEach( (tampil , index) => {
            console.log(index, tampil);
        });
        ```
    * map
        digunakan ketika ingin melooping dan ingin mengambil nilainya (bisa mereturn) maka bisa menggunakan map dan akan mengembalikan berbentuk array dengan banyak isinya sama, tidak bisa kurang, misalnya array angka isinya 3 maka returnnya juga 3, misalnya dari 3 angka itu ingin ditampilkan angka ganjil saja maka pada angka 2 akan tampil undefined [1, undefined, 3]
        ```javascript
        // parameter tampil itu pada saat perulangan pertama
        // akan berisi angka 1 lalu ditampilkan
        angka.map((tampil) => {
            console.log(tampil)
        })
        // contoh map dengan return
        let tampilAngka = angka.map((tampil) => {
            return "ini adalah angka" + "" + tampil
        })
        console.log(tampilAngka)
        ```
* ### array multi dimensional
    * contoh array multi dimensi
        ```javascript
        let arrMulti = [
            ["nama", "rendi"],
            ["nilai", 80],
            ["peringkat", 21],
        ]
        // artinya saya ingin menampilkan pada baris ke 0 dan kolom ke 1 yaitu rendi
        console.log(arrMulti[0][1])
        ```
    * menimpa isi salah satu array multi dimensi
        ```javascript
        //kita ingin mengganti nama rendi dengan dimas
        arrMulti[0][1] = "dimas"
        console.log(arrMulti)
        ```
### DAY 2
* ### Object
    * Membuat object
        ```javascript
        //syntax dasarnya
        let namaObjek = {
            namaProperti: nilai1,
            namaProperti: nilai2
        }
        ```
        ```javascript
        let mahasiswa = {
            nama: "deni",
            jurusan: "teknik informatika",
            alamat: "tegal"
        }
        ```
    * mengakses Object
        cara mengakses object ada 2 yaitu
        1. dot notation
            ```javascript
            console.log(mahasiswa.nama)//deni
            ```
        2. bracket
            ```Javascript
            console.log(mahasiswa["nama"]);
            ```
    * Memanggil object dengan variabel
        ```Javascript
        let bagian = "alamat";
        console.log(mahasiswa[bagian]);
        ```
    * Membuat property baru object
        ```Javascript
        let film = {
            judul: "civil wars",
            series: "marvel",
            "jumlah series": 3,
        }
        console.log(film);
        //kita tambahkan property ratings dengan value 4.9
        film.ratings = 4.9;
        //ketika di console.log maka akan tampil object film dengan tambahan ratings
        console.log(film);
        ```
    * Mengupdate value properti dari object
        ```javascript
        let film = {
            judul: "civil wars",
            series: "marvel",
            "jumlah series": 3,
        };
        console.log(film.judul);//civil wars
        //kita akan mengganti judul civil wars dengan end game
        film.judul = "end game";
        console.log(film.judul);//end game
        ```
    * Menghapus properti dari object
        ```javascript
        let film = {
            judul: "civil wars",
            series: "marvel",
            "jumlah series": 3
        };
        console.log(film);
        //maka akan tampil {judul: "civil wars", series: "marvel", "jumlah series": 3}
        //lalu kita akan hapus properti series
        delete film.series;
        console.log(film);
        //maka akan tampil {judul: "civil wars", "jumlah series": 3}
        ```
    * Method object
        ```javascript
        let sapa = {
            welcome: function() {
                return "selamat siang";
            },
            afterpay: function() {
                return "sampai jumpa"
            },
        };
        console.log(sapa.welcome());
        console.log(sapa.afterpay());

        let film = {
            judul: "civil wars",
            series: "marvel",
            "jumlah series": 3
        };
        console.log(Object.keys(film));//menampilkan propertinya
        console.log(Object.values(film));//menampilkan valuenya
        ```
    * Nested Object
        ```javascript
        let film = {
            judul: "civil wars",
            series: "marvel",
            "jumlah series": 3,
            pemeran: {
                pemeran1: {
                    nama: "tony stark",
                    umur: 45
                },
                pemeran2: {
                    nama: "tom holland",
                    umur: 35
                },
            },
        };

        console.log(film);
        console.log(film.pemeran.pemeran1.nama);//tony stark
        console.log(film.pemeran.pemeran2.umur);//35
        ```
    * Loop object
        ```javascript
        //loop
        let mahasiswa = {
            nama: "deni",
            jurusan: "teknik informatika",
            alamat: "tegal"
        }
        for (let key in mahasiswa){
            console.log(mahasiswa[key]);
        }
        //nested loop
        let film = {
            judul: "civil wars",
            series: "marvel",
            "jumlah series": 3,
            pemeran: {
                pemeran1: {
                    nama: "tony stark",
                    umur: 45
                },
                pemeran2: {
                    nama: "tom holland",
                    umur: 35
                },
            },
        };
        for (let key in film.pemeran.pemeran1) {
            console.log(film.pemeran.pemeran1[key], "---ini dari contoh nested")
        }
        ```
    * Array of object
        ```javascript
        let artist = [
            {
                nama: "nikita willy",
                umur: 40
            },
            {
                nama: "stephen william",
                umur: 50
            },
            {
                nama: "tom holland",
                umur: 35
            },
        ];

        console.log(artist);
        ```
### DAY 3
* ### Javascript Modules
    * Javascript module
        yaitu cara untuk memisahkan kode ke file yang berbeda
    * keuntungan:
        1. mudah untuk mengelola kode
        2. kode ga numpuk di 1 file
    * apa saja yang bisa di export dan import
        1. array
        2. object
        3. function
        4. dan lain lain
    * aturan aturan import export
        1. file yang di tuliskan didalam html `<script src="./indonesia.js" type="module"></script>` yaitu indonesia.js hanya bisa import, tidak bisa mengeksport
        2. kita bisa merubah nama variabel menggunakan kata kunci `as` atau artinya alias
        3. export default hanya bisa 1 saja
        4. script utama tidak bisa diakses oleh script kedua dan seterusnya
        5. tapi script kedua dan seterusnya bisa di akses oleh script utama
    * cara melakukan import dan export module
        1. tambahkan type="module" pada script utama
        2. siapkan script kedua dan seterusnya untuk melakukan export
        3. lalu lakukan import pada script utama
    * membuat export
        ```javascript
        export let motor = ["suzuki", "yamaha", "honda", "Kawasaki"]
        export let mobil = ["honda", "mitsubishi","subaru"]
        //alternative
        //as itu alias, jadi kita bisa merubah mobil menjadi mobilJepang dengan alias, maka ketika import bisa menggunakan variabel mobilJepang
        export {motor, mobil as mobilJepang}
        //membuat export default yaitu hanya bisa 1 saja yang di export
        let entertainment = ["anime", "manga", "dorama"]
        export default entertainment
        ```
    * memanggil import
        ```javascript
        import {motor, mobil} from "./jepang.js"
        //menangkap export dengan export default yaitu entertainment
        import entertainment, {motor, mobil} from "./jepang"
        ```
    * menampilkan yang sudah di import
        ```javascript
        console.log(entertainment);
        console.log(motor);
        console.log(mobilJepang);
        ```
* ### Javascript rekursive
    * Rekursive
        rekursive yaitu function yang memanggil dirinya sendiri sampai keadaan terpenuhi atau berhenti
    * contoh kasus rekursive
        ```javascript
        function deretAngka(n){
            //basecase
            if (n == 1){
                console.log(n);
            }else{
            //recursive case
                deretAngka(n-1)
                console.log(n);
            }
        }
        deretAngka(2)
        ```
    * contoh lain
        ```javascript
        function sum(num){
            if(num === 0){
                return 0;
            }else{
                return num + sum (--num)
            }
        }
        sum(5)//15
        ```
## DAY 4
* ### asynchronous, callback dan promise
    * sifat javascript
        1. single-thread yaitu hanya mempunyai 1 jalur
        2. non-blocking yaitu mengijinkan proses selanjutnya untuk mendahului jika proses sebelumnya lebih lama dari yang mau mendahului
        3. asynchronous yaitu urutan perintah yang acak karena harus memanggil perintah yang belum selesai
    * kunci javascript asynchronous
        1. callback
        2. promise
        3. async await
    
    * callback
        adalah function yang dikirimkan ke parameter aktual dari function lain
        ```javascript
        console.log("nomer 1")
        console.log("nomer 2")
        setTimeout(() => {
            console.log("nomer 3")
        }, 1000)
        console.log("nomer 4")
        // maka yang akan tampil urutannya = nomor 1, nomor 2,
        //nomor 4, nomor 3
        //karena javascript menjalankan dari atas ke bawah, ketika ke nomor 3 maka akan pending dulu karena ada setTimeout lalu langsung
        //menampilkan nomor 4 baru setelah itu nomor 3 tampil
        ```
    * Promise
        secara sederhana promise adalah sebuah janji yang bisa pending, terpenuhi atau ditolak
    * statement yang ada di promise
        1. pending(sedang dalam proses)
        2. fulfilled(terpenuhi)
        3. rejected(dibatalkan/gagal)
    * contoh promise
        ```javascript
        let ketemu = new Promise((resolve, reject) =>{
            if(true){
                resolve("jadi ketemu")//artinya berhasil
            }
            reject("gagal ketemu"); //artinya tertolak
        });

        ketemu.then((result) =>{
            console.log(result)
        })
        .catch((err) =>{
            console.log(err);
        });
        //hasilnya maka akan tampil jadi ketemu
        ```
    * contoh promise dari function
        ```javascript
        let ayoKetemu = (kondisi) => {
            return new Promise((resolve,reject) => {
                if (kondisi == "jadi"){
                    resolve("jadi ketemuan")
                }
                reject("gagal ketemuan")
            })
        }

        ayoKetemu("jadi")
        .then(result =>{
            console.log(result)
        })
        .catch(err => {
            console.log(err)
        })
        //maka akan tampil jadi ketemuan
        ```
## DAY 5
* ### web storage
    * web storage
        adalah salah satu Web API yang dapat menyimpan data secara lokal pada sisi client
    * web api membagi dua tipe web storage
        1. session storage yaitu penyimpanan data ketika website atau aplikasi ditutup maka datanya hilang
        2. local storage yaitu penyimpanan data ketika website atau aplikasi ditutup atau dimatikan perangkatnya maka datanya tetap tidak hilang
    * contoh aplikasi yang mengimplementasikan webstorage
        aplikasi yang menerapkan toggle darkmode, ketika default temanya terang dan kita pencet darkmode lalu kita close browsernya dan coba buka lagi dan websitenya masih dalam darkmode maka web tersebut mengimplementasikan web storage tepatnya local storage
    * contoh menyimpan data ke lokal storage
        ```Javascript
        localStorage.setItem('makanan', 'bakso');
        localStorage.setItem('minuman', 'jus');
        ```
    * contoh menyimpan data ke session storage
        ```Javascript
        sessionStorage.setItem('makanan', 'bakso');
        sessionStorage.setItem('minuman', 'jus');
        ```
    * contoh menampilkan data dari lokal storage
        ```Javascript
        let tampil = localStorage.getItem('makanan');
        console.log(tampil)
        //maka akan tampil bakso
        ```
    * contoh menambahkan data dari session storage
        ```Javascript
        let tampil2 = sessionStorage.getItem('makanan');
        console.log(tampil2)
        //maka akan tampil bakso
        ```
    * menghapus salah satu dari local storage
        ```Javascript
        localStorage.removeItem('minuman')
        //maka minuman akan dihapus
        ```
    * menghapus salah satu dari session storage
        ```Javascript
        sessionStorage.removeItem('minuman')
        //maka minuman akan dihapus dari session storage
        ```
    * menghapus seluruh data dari storage
        ```javascript
        localStorage.clear()
        sessionStorage.clear()
        ```
    * contoh penggunaan local storage pada website yang menggunakan darkmode
        ```javascript
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }

        document.getElementById("toggle").onclick = () => {
            if (localStorage.getItem("theme")) {
                localStorage.removeItem("theme");
                document.body.classList.remove("dark");
            } else {
                localStorage.setItem("theme", "dark");
                document.body.classList.add("dark");
            }
        };
        ```
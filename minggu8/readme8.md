# Writing test
## React Context
* React context adalah cara untuk mengelola state secara global. ini dapat digunakan bersama dengan useState hook untuk berbagi state antar komponen dengan lebih mudah dibandingkan dengan useState saja
* Dalam aplikasi React yang khusus, data dioper dari atas ke bawah (parent ke child) melalui props, tetapi ini bisa menjadi rumit untuk tipe props tertentu (mis. preferensi locale, tema UI) yang dibutuhkan oleh banyak komponen di dalam sebuah aplikasi. Context menyediakan cara untuk berbagi nilai seperti ini di antara komponen tanpa harus oper prop secara explisit melalui setiap tingkatan diagram.
* kapan menggunakan context ? Context dirancang untuk berbagi data yang dapat dianggap “global” untuk diagram komponen React, seperti pengguna terotentikasi saat ini, tema, atau bahasa yang disukai
* cara membuat dan menggunakan react context
 1. buat file component untuk menampung react contextnya
 2. lalu buat context menggunakan `export const KeranjangCountContext = createContext()` 
 3. lalu didalam return kita buat pembungkus menggunakan `<KeranjangCountContext.Provider></KeranjangCountContext.Provider>` 
 4. lalu buat penampung statenya atau datanya menggunakan useState `const [keranjangCount, setKeranjangCount] = useState(0)`, 
 5. lalu pembungkusnya dikasih value isinya adalah state keranjangCount dan setKeranjangCount`<KeranjangCountContext.Provider value={{keranjangCount setKeranjangCount}}>`, 
 6. lalu karena component context akan membungkus app.jsx maka diberi props children dan panggil children kedalam pembungkus providernya dan kita masuk ke file main.jsx dan bungkus app menggunakan nama function dimana tempat dibuat react contextnya`<kerangjangCountProvider><App /></keranjangCountProvider>` maka app akan masuk kedalam props children di keranjangCountProvider, maka state keranjangCount sudah menjadi state global
 ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1668435312/buat_react_context_knkowl.png)
 7. lalu untuk menggunakan contexnya dengan cara import useContext terlebih dahulu
 8. lalu memanggil menggunakan useContext(),
 9. dan masukkan nama contextnya menjadi `useContext(KeranjangCountContext)` 
 10. dan jangan lupa import juga KeranjangCountContext nya, maka ketika kita coba console.log statenya maka isinya adalah state dari KeranjangCountContextnya artinya sudah berhasil memanggil state dari KeranjangCountContextnya di component lain, karena disini sedang mencoba menggunakan context untuk membuat aplikasi counter maka yang akan tampil adalah 0 atau state awal dari keranjangCountContext
 ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1668436940/keranjang_context_fw7qak.png)
 11. lalu untuk menghubungkan agar ketika tombol counter + dan - di pencet maka state dari keranjangCountContextnya berubah maka kita tambahkan di dalam function increment dan decrement dengan `setKeranjangCount(keranjangCount + 1)` untuk tombol increment, dan untuk tombol decrement menambahkan `setKeranjangCount(keranjangCount - 1)` maka ketika tombol button + dan - di pencet maka nilai dari keranjangCount akan mengikuti count dari file counternya
 ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1668438050/counter_context_k9yh48.png)
## React Testing
* ## Unit testing
* unit testing adalah proses pengembangan perangkat lunak di mana bagian aplikasi terkecil yang dapat diuji, yang disebut unit, diperika secara
* Unit testing adalah sebuah pekerjaan dimana kita melakukan pengujian pada suatu bagian pada aplikasi yang kita buat. Tujuan dari unit testing sendiri yaitu untuk melakukan validasi setiap unit pada kode aplikasi agar berfungsi seperti yang diharapkan. Unit yang dimaksud bisa berupa kode, fungsi, metode, prosedur, modul, atau objek tersendiri.
* Alasan unit testing itu penting diantaranya:
    1. Membantu memperbaiki bug di awal pada siklus software development dan menghemat biaya
    2. Membantu developer untuk memahami basis kode dan memungkinkan mereka membuat perubahan dengan cepat
    3. Berfungsi sebagai dokumentasi proyek
    4. Membantu reusability code pada projek baru
* Unit testing bertujuan untuk mendapatkan hasil yang sesuai ekspektasi agar suatu software dapat berjalan dengan baik
* Contoh hal yang sederhana adalah membuat sebuah function yang mana tujuan function tersebut adalah melakukan pengurangan, Misal kita mempunyai ‘value1’ bernilai 50 dan ‘value2’ bernilai 5 maka kita mengharapkan dari function tersebut bisa menghasilkan nilai 45. Di sini lah unit testing melakukan pengujian, apakah dari function tersebut menghasilkan nilai sesuai dengan yang diharapkan? Jika iya, maka test tersebut berhasil dan jika tidak, maka test tersebut gagal.
* Kelebihan unit testing
    1. Membantu menulis kode lebih baik
    2. Membantu menemukan sebuah bug sebelumnya
    3. Membantu mendeteksi bug regression (bug yang menyebabkan fitur menjadi berhenti)
    4. Membuat kode lebih mudah di refactor
    5. Membuat penulisan kode lebih efisien
* Kekurangan unit testing
    1. Membutuhkan waktu untuk melakukan tes
    2. Sangat sulit untuk melakukan test terhadap legacy code
    3. Test membutuhkan waktu yang banyak untuk melakukan maintenance
    4. Sedikit sulit untuk melakukan test kode berbasi GUI
    5. Unit Testing tidak menangkap semua error
* Unit testing biasanya bisa dilakukan secara manual atau otomatis. Biasanya yang melakukan testing secara manual memiliki sebuah method yaitu mempunyai sebuah dokumen yang dibuat merinci setiap langkah dalam proses testingnya, tetapi melakukan testing dengan otomatis adalah sebuah method yang sering dilakukan ketika melakukan unit test
* Apa itu jest? jest adalah framework pengujian JavaScript yang menyenangkan dengan fokus pada kesederhanaan. Ia bekerja dengan projek yang menggunakan: Babel, TypeScript, Node, React, Angular, Vue, dan lainnya
* React Testing Library adalah solusi yang sangat ringan untuk menguji komponen React. Ini menyediakan fungsi utilitas ringan di atas react-dom dan react-dom/test-utils, dengan cara yang mendorong praktik pengujian yang lebih baik.
* contoh testing
    1. buat ekspektasi terlebih dahulu dari function yang ketika dibuat akan menjumlahkan 2 parameter<br>
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1668439571/buat_ekspetasi_shr6en.png)<br>
    2. lalu buat functionnya<br>
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1668439698/function_untuk_solve_ekspetasi_gwoo3z.png)<br>
    3. dan jalankan dengan mengetikan di terminal vs code node (nama file yang akan di jalankan) contoh `node test.js`<br
* Testing Jest
 1.  install jest `npm install -D jest`
 2. kita buat testingnya terlebih dahulu(ekspektasi) dengan menuliskan test yang berisi 2 argumen, argumen pertama menjelaskan isi testnya apa lalu parameter yang kedua adalah callback<br>
 ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1668440313/buat_ekspetasi_jest_z9gv0m.png)<br>
 3. lalu buat functionnya<br>
 ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1668440678/buat_function_solve_jest_jvlw4j.png)<br>
 4. tambahkan `  "scripts": {"test": "jest"},` pada dependencies agar bisa dirun
 5. untuk menjalankan dengan mengetikan `npm run test`
 6. ketika test yang dijalankan sesuai dengan ekspektasi(benar) maka akan menampilkan<br>
 ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1668440937/ketika_jest_benar_zx7f7q.png)<br>
 7. tetapi ketika test tidak sesuai dengan ekspektasi(salah) maka akan menampilkan<br>
 ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1668441075/ketika_jest_salah_s6jisp.png)<br>
 8. ketika kita menambahkan `--coverage` di script setelah text `"test": "jest --coverage"` maka ketika di test dijalankan maka akan dikasih tau berapa persen kodingan kita sudah tercoverage ke dalam testing
 ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1668441540/test_coverage_pdy9yk.png)

 * RTL (React Testing Library)
    1. install rtl menggunakan `npm install --save-dev @testing-library/react `
    2. lalu kita buat test block, didalam test block ada proses render component, find element, interact with element dan assert the result
    3. misalkan kita akan membuat project react yang didalamnya sudah mengimplementasikan rtl dengan mengetikan `npx create-react-app rtl` biasanya untuk pembuat project react menggunakan cra akan otomatis didalamnya ada rtl dan ketika di jalankan akan menampilkan logo react dan dibawahnya ada tulisan Learn React, lalu apa yang sebenarnya dilakukan oleh rtl, yang pertama di file App.test.js akan ada test yang didalamnya terdapat parameter bahwa ini akan merender learn react link, lalu parameter kedua melakukan callback yang didalamnya akan melakukan render terhadap file `<App />` setelah component app dirender lalu ambil menggunakan `screen.getByText(/learn react/i)` screen lalu getByText maksudnya akan mencari learn react didalam component app, untuk penulisannya dalam bentuk regex. atau secara singkat screen akan mencari text yang berupa `learn react` didalam component app. lalu `expect(linkElement).toBeinTheDocument()` maksudnya yaitu ekspektasinya adalah linkElementnya ada di dalam documentnya

    4. lalu dari kumpulan test block bisa kita masukkan kedalam describe block
    5. misalnya kita akan mengetes counter, kita buat component counter dengan button - dan button +<br>
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1668443220/counter_test_with_rtl_rfu5ud.png)<br>
    6. lalu kita bungkus counternya<br>
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1668443400/bungkus_app_test_rtl_xsh7iz.png)<br>
    7. lalu kita buat testnya di file counter.test.js dan buat testnya<br>
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1668443563/counter_test_vtplvy.png)<br>
    8. di test pertama kita akan mencari di screen apakah text dengan isi "-" ada?. cara membacanya yaitu kita buat test lalu ketika merender component counter kita cari di layar(screen) apakah ada text dengan isi "-" menggunakan `getByText("-")` dan ekspektasinya minBtn yang berisi getByText harusnya ada di dalam document, ketika di jalankan maka akan pass atau berhasil karena memang di dalam component Counter ada text - yaitu di button -
* Access by everyone
    1. getByRole
    2. getByLabelText
    3. getByPlaceholderText
    4. getByText
* Sematic Queries
    1. getByAltText
    2. getByTitle
* Test ID
    1. getByTestId
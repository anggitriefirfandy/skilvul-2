# Writing
* ## PROP TYPE
* Prop Types adalah library yang dapat membantu untuk memeriksa data props yang dikirim agar sesuai dengan ekspetasi, jika tidak sesuai maka akan muncul error
* untuk menggunakan Prop Types kita perlu menginstallnya kedalam folder project, caranya kita buka folder project menggunakan vs code, lalu kita buka terminal vs code yang menggunakan gitbash, lalu kita ketika `npm install prop-types`
* Syntax Prop Type
    ```javascript
    import PropTypes from 'prop-types';

    const StudentInfo = ({name, age}) => {
        return (
            <div>
                {name}
                {age + 1}
            </div>
        )
    }
    StudentInfo.propTypes = {
        name: PropTypes.string,
        age: PropTypes.number,
    };
    export default StudentInfo
    ```
* Macam Macam PropTypes
    1. `name: PropTypes.string` data yang boleh dikirimkan harus bertipe string
    2. `name: PropTypes.any.isRequired` data yang boleh dikirimkan bersifat bebas, dan `isRequired` yaitu data harus ada
    3. `age: PropTypes.oneOfType([PropTypes.string, PropTypes.number])` data yang boleh dikirimkan harus diantara tipe data string dan number, selain itu tidak diperbolehkan
    4. `data: PropTypes.array` untuk tipe data array
    5. `data: PropTypes.arrayOf(PropTypes.number)` untuk mengecek value dari propsnya
    6. `data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string]))` untuk array dengan berbagai tipe data
    7. `info: PropTypes.object` untuk tipe data object
    8. mengecek nilai dari object menggunakan shape dan tidak harus sama dari jumlah keynya<br>
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1667715169/proptypeshape_lg9vsl.png)<br>
    9. mengecek nilai dan key dari object, jika menggunakan exact nilai dari jumlah keynya harus sama seperti yang ada di propsnya<br>
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1667715300/proptypeexact_tns3bj.png)<br>

    * jika data yang dikirimkan tidak sesuai dengan prop types maka akan menampilkan error dikonsol<br>
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1667715530/jika_proptype_tidak_sesuai_dhsifl.png)<br>


* ## React Router
* ## Konsep Routing pada React.js
* Routing pada React.js adalah cara atau suatu proses yang diperlukan untuk berpindah dari halaman yang satu ke halaman yang lain, jadi misalnya kita berada di halaman homepage dan ingin berpindah ke halaman about atau yang lainnya kalau di react js tidak bisa langsung berpindah seperti html biasa, tetapi harus melakukan routing terlebih dahulu
* secara konsep untuk berpindah halaman di html pasti akan merender ulang dan menyebabkan ketika berpindah halaman akan memulai proses dari awal lagi sedangkan untuk routing memungkinkan aplikasi dapat memperbarui url pada saat berpindah halaman tanpa merender ulang, bisa di lihat ketika html biasa berpindah maka akan menyebabkan seperti loading sedangakn routing tidak ada loading ketika berpindah halaman
* `<BrowserRouter>` digunakan sebagai router yang menggunakan API history dari HTML5, sehingga dapat menggunakan location untuk mensingkronasi UI dengan url. Di dalam object location sendiri merepresentasikan dimana lokasi aplikasi sekarang
* Pada dasarnya, react-router-dom mempunyai 2 jenis router yang dapat kita gunakan, yaitu HashRouter dan BrowserRouter. Keduanya mempunyai kegunaan masing-masing tergantung dari jenis Web apa yang akan kita buat. Seperti contoh, jika kita ingin membuat sebuah web yang static atau tidak ada server untuk me-render data yang dinamis, maka sebaiknya kita menggunakan HashRouter. Sebaliknya, jika kita membuat web yang menggunakan data dinamis dengan server backend, maka menggunakan BrowserRouter adalah pilihan tepat
* `<Link>` Komponen ini digunakan untuk membuat tautan yang memungkinkan untuk menavigasi pada URL yang berbeda dan membuat kontennya tanpa memuat ulang halaman web.
* `<Navlink>` komponen NavLink digunakan untuk menambahkan gaya ke rute aktif
* `<Routes><Routes>` fungsi Routes untuk membungkus/menampung child route
* `<Route>` route fungsinya untuk menampung alamat alamat yang digunakan untuk berpindah halaman nanti
* ## Membuat routing dasar
    1. install react router dengan cara ketikan `npm install react-router-dom@6` di terminal vscode
    2. import BrowserRouter di main.js `import { BrowserRouter } from "react-router-dom"`
    3. bungkus app di main.js dengan BrowserRouter, tujuan dibungkus agar react tahu bahwa kita akan memakai react router di project<br>
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1667721057/browseroute_fytk41.png)<br>
    4. import Routes, Route, dan Link dari react router dom, fungsi Routes untuk membungkus/menampung child route, route fungsinya untuk menampung alamat alamat yang digunakan untuk berpindah halaman nanti, dan link itu fungsinya mirip seperti tag a atau bisa disebut pengganti tag a di react<br>
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1667721372/import_routes_routelink_hqenem.png)<br>
    5. import semua halaman yang ingin kita routing<br>
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1667721615/all_import_page_sv1ypk.png)<br>
    6. lalu kita masukan untuk routingnya, contohnya saya akan merouting ke halaman HomePage maka syntaxnya seperti ini, maka ketika link url kita tambahi dengan "/" maka akan berpindah ke halaman HomePage
        ```javascript
        <Routes>
            <Route path="/" element={<HomePage/>}/>
        </Routes>
        ```
    7. karena kita tidak mungkin setiap berpindah halaman dengan cara merubah urlnya secara manual, maka kita bisa menggunakan navbar agar ketika button homepage di klik maka otomatis akan berpindah ke halaman HomePage, untuk syntaxnya menggunakan `<Link to={"/"}>Home</Link>`, untuk `to={}` itu didalamnya kita bisa isikan path halaman yang ingin kita pindah<br>
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1667722062/nav_route_teqvd2.png)<br>

* ## Membuat dynamic route
    1. untuk membuat dynamic route membutuhkan params, dynamic route itu misalnya ada daftar menu dari nomer 1-10 lalu ketika kita klik salah satu daftar menu maka akan berpindah ke halaman detail tersebut beserta membawa datanya, misalnya kita klik menu 5 maka akan membawa data 5 kedalam routenya
    2. buat routenya dulu ` <Route path='/detail/:id' element={<DetailPage/>}/>` menggunakan `:id` jadi ketika berpindah halaman misalnya 2, maka akan berubah pathnya menjadi `/detail/2`
    3. kita akan menggunakan data dummy, dengan cara buat array of object bernama data yang didalamnya terdapat beberapa data<br>
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1667722748/data_route_vtkbeu.png)<br>
    4. lalu kita tampilkan daftar datanya terlebih dahulu ke browser dengan mapping dan tambahkan button agar setiap data bisa di klik dan kita buat fungsi ketika button di klik maka akan mengirim id sesuai namanya<br>
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1667723243/maping_data_dan_fungsi_handle_data_fw3gfw.png)<br>
    5. lalu untuk berpindah dengan membawa data menggunakan params memerlukan useNavigate, fungsinya sama seperti Link tetapi untuk useNavigate bisa membawa data seperti params
    6. maka ketika misalnya data pertama diklik maka params akan membawa data pertama, lalu untuk menampilkannya yang pertama bikin data baru lagi yang lebih detail, lalu untuk menangkap id yang dibawa oleh useNavigate menggunakan useParams<br>
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1667724018/detail_data_acdcaf.png)<br>
    7. lalu untuk menampilkan sesuai dari id yang dibawa oleh useNavigate dan diterima useParams, disini akan menggunakan filter<br>
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1667724923/filter_data_jihis3.png)<br>


* ## membuat nested route
* nested route digunakan ketika misalnya ada halaman about yang didalamnya ada halaman lagi misalnya about teacher dan about student, maka bisa menggunkan nested route. cara nestednya:
    1. kita buat agar si parent yaitu Route about tidak single tag yaitu dengan menambahkan tag Route penutup, lalu masukkan Route about teacher dan about student kedalam Route about, jadi akan menjadi child dari about
    2. lalu untuk path about pada about teacher dan about student di hilangkan sehingga menyisakan path teacher dan student sehingga menjadi seperti ini, disini ada route index element artinya ketika kita berpindah ke halaman about maka yang akan ditampilkan pertama kali adalah halaman about school<br>
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1667725595/nested_route_yzqwpl.png)<br>
    3. lalu daftarkan anak anak dari about agar bisa berpindah ke halaman student dan teacher menggunakan `Outlet`, caranya kita tuliskan `<Outlet />` di induknya yaitu halaman about, maka di halaman about akan terdeteksi halaman student dan teacher, maka kita sudah bisa berpindah ke ha;aman student dan teacher, ini adalah cara untuk memanggil nested route di induknya
    4. lalu misalnya kita ingin memanggil atau berpindah ke halaman about student dan about teacher, maka kita tinggal menuliskannya seperti dibawah ini yaitu tidak menggunakan slash awal<br>
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1667726392/nested_dari_halaman_lain_gtmme4.png)<br>
* ## Konsep dan menggunakan redux
* Redux adalah sebuah aplikasi state management. State management adalah cara untuk memfasilitasi komunikasi dan berbagai data lintas komponen. State management menciptakan struktur data yang nyata untuk mewakili keadaan aplikasi Anda yang dapat Anda gunakan untuk membaca dan menulis.
* gunakan Redux jika Banyak data yang berubah dari waktu ke waktu. Pengelolaan state harus dilakukan di satu tempat (Single source of truth) Mengelola state di top-level component sudah tidak lagi relevan, jadi ketika Parent mempunyai child dan child mempunyai child secara berulang ulang dan mengakibatkan props drilling maka harus menggunakan redux
* Store adalah tempat untuk menyimpan semua state secara global.
* hal hal yang dilakukan store yaitu menyimpan state, memberikan akses ke state, mengupdate state
* action adalah object javascript sederhana yang digunakan untuk mengirim informasi dari aplikasi ke store
* reducer adalah function yang didalamnya terdapat function switch case, mereka mengambil state dan action sebagai argumen dan mengembalikan ke statenya
* combine reducer adalah cara ketika mempunyai 2 atau lebih reducer dan menggabungkannya menggunakan combineReducer
* provider adalah untuk memberi tahu bahwa store tersedia untuk component yang dibungkus yaitu App sehingga App bisa mengambil data dari store
* useSelector digunakan untuk mengabil data dari store
* dispatch digunakan untuk mengirim action ke reducer


* install package redux dan react redux `npm install redux react-redux`



* langkah menggunakan redux
    1. membuat store menggunakan createStore()<br>
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1667735136/create_store_ss3fu3.png)<br>
    2. membuat reducer itu adalah function didalam store, yang didalamnya ada switch case, untuk return dari switch case mengikuti initialState, misalkan menggunakan object {}, maka di return switch casenya juga menggunakan object {}, jika berbentuk array maka return juga array []<br>
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1667737402/reducer_m9csln.png)<br>
    3. membuat provider, memberi tahu bahwa store tersedia untuk component app, provider membungkus component app, sehingga app bisa mengambil data dari store<br>
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1667737479/provider_a74iwa.png)<br>
    4. mengambil state menggunakan useSelector ngambil state dari store,useSelector untuk mengambil data dari store<br>
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1667737783/useSelector_kk580t.png)<br>
    5. membuat action misalnya jika casenya increment maka akan mereturn data + 1 di dalam reducer<br>
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1667737562/action_u1rwgz.png)<br>
    6. sebelum menggunakan action, kita buat dispatch dari useDispatch, dispatch digunakan untuk mengirim action kedalam reducer<br>
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1667737686/usedispatch_w0t0ef.png)<br>
* useSelector itu hook yang otomatis menuju ke store, file yang ada createStore, lalu didalam store = createStore(Reducer) ada reducer, di reducer ada state, maka secara singkat useSelector itu isinya state yang ada di reducer<br>

* array function bisa mempersingkat syntax, contoh:
    ```javascript
    const myFunction = (state) => {
        return state
    }
    ```
    bisa menjadi
    ```javascript
    const myFunction = (state) => state
    ```
* ## Redux Thunk
* Redux Thunk adalah middleware yang memungkinkan Anda memanggil pembuat aksi yang mengembalikan fungsi sebagai ganti objek aksi. Fungsi itu menerima metode pengiriman penyimpanan, yang kemudian digunakan untuk mengirim aksi sinkron di dalam isi fungsi setelah operasi asinkron selesai atau jika disingkat thunk itu merubah sifat redux yang synchronous menjadi asynchronous
* install redux dengan mengetikan `npm install redux react-redux` di terminal vs code
* install redux thunk dan thunk `npm install thunk redux-thunk` di terminal vs code
* install axios `npm install axios` di terminal vs code


1. buat store dan buat function allReducer menggunakan combineReducers, combineReducers digunakan ketika ada 2 atau lebih reducer dalam satu project, yang beda dari pembuatan store redux dengan redux thunk adalah dengan mengimport thunk dan applyMiddleware dan menambahkan applyMiddleware(thunk) didalam variabel store<br>
![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1667749474/store_thunk_kxhgjh.png)<br>
2. buat action untuk ambil data dari api menggunakan thunk, dispatch sifat bawaan dispatch adalah langsung mengirimkan data ke reducer(synchronous), sehingga ketika membutuhkan asyncronous atau yang membutuhkan delay membutuhkan thunk, disini kita menggunakan mock api dan untuk handlenya menggunakan axios. Disini kita akan membuat action yang pertama saya akan membuat function fetchStart() disini akan mengembalikan dan mengirimkan property type: FETCH_START dan yang kedua buat action dengan nama successGetTodo yang mengembalikan dan mengirimkan property type: SUCCESS_GET_TODO dan property payload yang berisi data, datanya yaitu berbentuk object yang didapatkan dari fetch api, jika diconsole.log maka akan tampil seperti ini.<br>
![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1667750579/data_payload_yem0af.png)<br>
disini saya akan membuat function getTodo yang didalamnya akan melakukan dispatch dengan action fetch start sehingga ketika browser pertama kali dijalankan akan menampilkan loading... dan selanjutnya akan melakukan fetch data menggunakan axios dan lakukan dispatch dengan action succesGetTodo yang didalamnya akan mengirimkan data yang sudah di fetch tadi<br>
dan ini adalah codingan action secara keseluruhan. <br>
![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1667750218/action_thunk_enwtli.png)<br>
3. buat reducer(buat initialState, buat function isinya switch case) disini initial state akan berisi array todos dan variabel isLoading: false dan didalam switch case akan ada case FETCH_START untuk menampilkan semua isi state dan mengubah isLoading menjadi true, lalu case SUCCESS_GET_TODO untuk menampilkan semua isi state dan akan menjalankan action.payload dan merubah isLoading menjadi false dan menampilkan data yang telah di fetch tadi<br>
![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1667749897/todo_reducer_o3cple.png)<br>
4. provider file main.jsx, provider menggunakan store={store}<br>
![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1667751091/provider_thunk_ztjir7.png)<br>
5. buat useSelector, disini kita menggunakan useSelector dan useDispatch, yang pertama kita useSelector statenya lalu kita return dan lakukan destrukturing menjadi todos dan isLoading, lalu ketika kode dijalankan atau merender maka akan menggunakan sideEffect, disini sideEffectnya akan melakukan dispatch getTodo dan akan dilooping di dalam return function TodoListnya. jadi ketika pertama kali dijalankan akan menampilkan isLoading lalu baru tampil data yang telah di fetch<br>
![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1667751194/useSelector_thunk_jymdko.png)<br>

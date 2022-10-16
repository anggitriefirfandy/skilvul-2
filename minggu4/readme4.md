# Writting test

- ### DAY 1
  - API
    - api adalah singkatan dari application programming interface dan memungkinkan developer untuk mengintegrasikan dua bagian dari aplikasi atau dengan aplikasi yang berbeda secara bersamaan.<br>
    - tujuan penggunaan api adalah untuk mempercepat proses development dengan menyediakan function secara terpisah sehingga developer tidak perlu membuat fitur yang serupa.
  - JSON
    - JSON adalah singkatan dari JavaScript Object Notation, adalah suatu format ringkas pertukaran data komputer. Formatnya berbasis teks dan terbaca manusia serta digunakan untuk merepresentasikan struktur data sederhana dan larik asosiatif
    - contoh kode JSON
      ```javascript
      {"users": [
          {"username" : "Anton", "lokasi" : "Bandung"},
          {"username" : "Budi", "lokasi" : "Semarang"},
          {"username" : "Nana", "lokasi" : "Surabaya"},
          {"username" : "Jamal", "lokasi" : "Tangerang"}
      ] }
      //username adalah keys pada json
      //anton adalah value dari username
      ```
  - Jenis value JSON
    1. String
    2. Object
    3. Array
    4. Boolean
    5. Number
    6. Null
  - fetch
    fetch merupakan cara baru dalam melakukan network request. Pada dasarnya fungsi fetch memanfaatkan sebuah promise.
  - bentuk fetch
    ```javascript
    fetch("urlnya")
      .then(function (response) {
        return response.json();
      })
      .catch(function (err) {
        console.log(err);
      });
    ```
    jadi untuk pembacaan fetch diatas yaitu, jika fetch berhasil dilakukan maka blok then akan terpangil dan mengembalikan nilai object sesuai response yang didapat. apabila fungsi fetch gagal dilakukan, maka blok catch akan terpangil dan menampilkan error pada console
  - implementasi fetch pada project tmdb movie api
    ```javascript
    let getMovie = async () => {
      let response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=fd994cd1d1b84012f15c628c5f14a14f&sort_by=popularity.desc&page=1"
      );
      let movieTampil = await response.json();
      let dataMovie = movieTampil.results;
      dataMovie.slice(0, 12).forEach((item) => {
        listMovie.innerHTML += `<div class="card" style="width: 18rem;">
                <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" class="card-img-top" alt="poster.film ${item.tittle}">
                <div class="card-body">
                    <div class="title">
                        <h5 class="card-title">${item.title}</h5>
                        <h5 class="card-text">${item.vote_average}</h5>
                    </div>
                    <p class="card-text">${item.release_date}</p>
                </div>
            </div>`;
      });
    };
    getMovie();
    ```
    jadi kode diatas cara kerjanya kita fetch data dari tmdb movie api lalu datanya kita masukkan ke variabel response, lalu kita unboxing variabel response lalu simpan di variabel movieTampil, lalu kita ambil property results yang berisi daftar film kita simpan ke variabel dataMovie, lalu isinya kita looping dan tampilkan berbentuk card yang didalamnya kita akan mengambil gambarnya, judul film, ratingnya dan tanggal release filmnya
  - Async await
    async await adalah fitur yang hadir sejak ES2017. fitur ini mempermudah dalam menangani asynchronous. async await merupakan syntax khusus yang digunakan untuk menanggapi promise agar penulisan code lebih efisien dam rapih
    - syntax async await
      ```javascript
      const getAllUser = async () => {
        const data = await getUser();
        console.log(data);
      };
      ```
    - penjelasan penggunaan async await
      1. async await adalah salah satu cara untuk mengatasi masalah asynchronous pada javascript selain menggunakan callback dan promise
      2. pada implementasi async await kita menggunakan kata kunci async sebelum fungsi. await sendiri hanya bisa digunakan pada fungsi yang menggunakan async
      3. untuk menggunakan async await, kembalian dari suatu fungsi harus merupakan suatu promise. async await tidak dapat berdiri tanpa adanya promise
      4. tidak seperti promise, dengan async await maka suatu baris kode dapat tersusun rapi mirip dengan kode yang sifatnya synchronous
      5. setiap baris yang menggunakan await akan ditunggu sampai asynchronous promise tersebut di resolve
    - error handling async await
      untuk menghandle erorr async await dapat mengguanakan try catch didalam function yang dibuat, sehingga jika terjadi error dapat menangkap errornya dalam blok catch berikut contohnya:
      ```javascript
      const getAllUser = async ()=> {
          try {
      const result = await getUser()
        console.log(result)
      } catch (error) {
        console.log(error)
      }
      ```
- ### DAY 2
  - Github collab
  - kenapa git dan github wajib digunakan
    * karena git bisa untuk kolaborasi dan salah satu   tool terpopuler yang digunakan pada pengembangan software, contohnya google, microsoft, facebook semuanya menggunakan git
    * Karena github merupakan wadah khusus bagi developer untuk menulis code, menyimpan code, melihat referensi code, meninjau project dan berkomunikasi dengan programmer lain
  - perbedaan git dan github
    * Git adalah salah satu sistem pengontrol versi (Version Control System) pada proyek perangkat lunak, Pengontrol versi bertugas mencatat setiap perubahan pada file proyek yang dikerjakan oleh banyak orang maupun sendiri.
    * Github adalah sebuah website dan layanan berbasis cloud bagi para developer untuk menyimpan, mengelola kode, mendokumentasikannya dan mengontrol perubahannya
  - alur kerja git dan github
    * cara kerjanya yaitu yang pertama git init untuk membuat repository baru, lalu git add untuk menambahkan track file, lalu git commit untuk menyimpan perubahan, lalu git remote untuk menghubungkan ke repository github dan yang terakhir git push untuk upload kode ke github. lalu cara kerja github yaitu sebagai tempat menyimpan kode secara online ,bisa juga agar diakses oleh orang lain dan dapat untuk mengelola project
  - Cara membuat repository Git
    * git init untuk membuat repository baru
    `git init .` atau bisa menggunakan `git init <nama_project>`
  - Cara commit pada git
    * `git commit -m "pesannya apa"`
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1663910177/commit_pqq5mo.png)
  - Cara merge pada git
    * merge fungsinya yaitu menggabungkan branch baru yang telah dibuat dengan branch master
    * caranya dengan mengetikan `git merge feature` feature itu di isi dengan nama branch yang ingin di merge
  - Cara menyelesaikan conflict pada git
    apa itu conflict? conflict yaitu ketika sebuah code di kerjakan oleh lebih dari 1 orang misalnya di user a menambahkan teks paragraf pada baris kode ke 1 dan user b menambahkan gambar pada baris kode ke 2 maka ketika di merge akan mengalami conflict, dan untuk menyelesaikan conflict bisa melakukan undo dan memulai dari awal bisa menggunakan `git merge -abort` dan `git rebase -abort` cara ini bisa digunakan ketika sudah melakukan berbagai cara tetapi masih conflict, lalu bisa juga resolve dengan beberapa pilihan:
    1. keep yours (hanya perubahan dari source milikmu yang akan diterapkan)
    2. keep theirs (hanya perubahan dari source milik temanmu yang akan diterapkan)
    3. keep both (perubahan dari kedua source milikmu dan temanmu akan diterapkan)
    4. remove both (perubahan dari kedua source akan dihapus)
  - cara push/publish ke github
    * yang pertama siapkan repository baru digithub, lalu copy link yang ada di github, lalu lakukan `git remote add origin https://github.com/anggitriefirfandy/skilvul-2.git`, lalu lakukan git push
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1663912307/git_push_qeufon.png)
  - Cara clone dari github
    * menggunakan git clone<br>
      ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1663912554/clone_yvev5h.png)
  - Cara berkolaborasi dengan tim di github
    1. ketika ingin menggunakan organization yang pertama buat organization di github, lalu invite anggota yang akan berkontribusi atau berkolaborasi di organization tersebut, lalu buat repository dan buat branch tersendiri, umumnya setiap repository mempunyai 2 branch utama, branch pertama bisa master/main gunannya untuk menampung semua code yang siap di publish ke umum atau dicoba ke khalayak umum, sedangkan branch utama yang kedua development gunanya untuk menampung semua code yang masih tahap pengembangan biasanya hanya bisa diakses oleh developer saja.
    2. lalu selanjutnya untuk proses development yang melibatkan banyak orang, yang bisa dilakukan pertama kali yaitu masing masing anggota melakukan git clone pada repo yang telah dibuat di organization
    3. lalu untuk ketua tim atau yang memimpin project bisa membagi tugas tugas kepada anggotanya misalkan anggota 1 membuat fitur login, lalu anggota kedua membuat fitur registration dan lain lain
    4. lalu dari branch master/main pindah dulu ke branch dev/development menggunakan perintah `git switch dev`
    5. biasakan sebelum memulai ngoding bisa lakukan git pull pada branch dev untuk update kode terbaru
    6. lalu setiap masing masing anggota membuat branch tersendiri, biasanya untuk penamaan bisa menggunakan format nama yang membuat lalu diikuti sedang membuat fitur apa `rendi-loginPage`
    7. lalu masing masing anggota pindah dari branch dev ke branch perorangan menggunakan `git switch rendi-loginPage`
    8. lalu masing masing anggota mengerjakan code di dalam branch yang telah dibuat perorangan
    9. jika code sudah selesai dikerjakan, lalu lakukan `git add, git commit`
    10. lalu sebelum codenya di push ke github, lakukan `git merge dev` terlebih dahulu, gunanya untuk menghindari conflict di github, conflict itu misalnya dalam 1 buah code diubah atau dikerjakan lebih dari 1 orang, misalnya orang pertaman menambahkan paragraf di baris pertama, lalu orang kedua menambahkan heading di baris pertama juga maka akan menimbulkan conflict
    11. lalu jika ada conflict bisa di selesaikan conflictnya terlebih dahulu
    12. setelah itu baru kita push menggunakan git push -u origin nama branch yang telah dibuat perorangan, misalnya `git push -u origin rendi-loginPage` maka code akan masuk ke github kedalam branch masing masing
    13. lalu lakukan pull request untuk merge ke branch dev, pull request itu misalnya kita sudah push fitur yang telah kita buat lalu kita ingin agar fitur yang telah kita buat digabungin kedalam branch dev atau branch utama yang menampung semua fitur yang sedang di development
    14. lalu tunggu pull request di accept oleh ketua tim atau yang memimpin project
- ### DAY 3
  - responsive website
    responsive website adalah sebuah teknik atau metode bagi web designer untuk membuat suatu layout website yang dapat menyesuaikan diri sesuai dengan ukuran layar pengguna
  - keuntungan menggunakan responsive website
    1. dapat diakses oleh berbagai device dengan ukuran layar berbeda beda
    2. lebih hemat biaya
    3. kemudahan dalam maintenance
    4. halaman yang lebih cepat dibuka
  - tools untuke membuat website yang responsive
    1. menggunakan framework seperti bootsrap, tailwind dan lain lain
    2. mengguanakn viewport
    3. menggunakan max-width
    4. menggunakan css relative unit
    5. menggunakan media query
    6. menggunakan flex
    7. menggunakan grid
  - viewport
    dengan menggunakan tag `<meta name='viewport'>` kita bisa mengatur viewport sesuai kebutuhan. setiap kita menggunakan emmet pada html maka akan dibuatkan meta viewport secara otomatis
    - syntax viewport
      ```html
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      ```
      perhatikan di atribut 'content', disana kita menggunakan beberapa variabel untuk viewport:
      1. width untuk mengatur lebar halaman, jika memberikan nilai 'device-width' maka lebar akan mengikuti ukuran lebar dari perangkat
      2. initial-scale untuk mengatur skala (zoom) dari halaman web
  - max-width
    agar gambar mengikuti ukuran layar bisa menggunakan max-width, jadi ketika layar diperkecil maka gambar ikut mengecil mengikuti layarnya
    ```css
    max-width: 100%;
    ```
  - css relative unit
    adalah satuan ukuran yang bersifat mengikuti layar
    ukuran yang sering digunakan untuk responsive:

    1. em yaitu ukuran yang mengikuti parent elementnya, misalkan kita membuat tag div lalu didalamnya terdapat tag p, maka ketika tag div kita set ukurannya 20 maka ketika kita menggunakan ukuran 2 em pada tag p maka 2\*20 hasilnya 40px
    2. rem yaitu ukuran yang mengikuti element rootnya, untuk destkop dan laptop biasanya root htmlnya berukuran 16px, jadi misalkan kita menggunakan ukuran 2 rem maka 2\*16 hasilnya 32px
    3. vw (viewport width) ketika kita menggunakan 50 vw pada gambar maka artinya kita mengatur ukurannya 50 persen dari ukuran lebar viewport
    4. vh (viewport height) ketika kita menggunakan 50 vh pada gambar maka artinya kita mengatur ukurannya 50 persen dari ukuran tinggi viewport
    5. % yaitu ukuran yang mengikuti parentnya, misalnya kita membuat div lalu kita menambahkan gambar dan menambahkan ururan 100% ke gambar maka itu artinya 100% dari ukuran parentnya atau di sini berarti mengikuti ukuran dari divnya

    - contoh menggunakan css relative unit dengan salah satu ukuran px
      ```css
      h1 {
        font-size: 50px;
      }

      p {
        font-size: 35px;
        line-height: 40px;
      }
      ```

  - media query
    untuk mengatur style supaya ada di ukuran device tertentu atau ketika kondisinya terpenuhi maka akan menggunakan style tertentu
    - syntax media query
      ```css
      @media not|only mediatype and (mediafeature and|or|not mediafeature) {
        //CSS-Code;
      }
      ```
    - contoh penulisan media query
      ```css
      @media (max-width: 600px) {
        .card {
          margin-top: 40px;
          margin-bottom: 40px;
        }
      }
      ```
  - flex
    digunakan untuk pengaturan layout, posisi dan tampilan dari suatu konten yang ukurannya belum diketahui atau bernilai dinamis
    - membuat layout flexbox
      ```HTML
      <nav class="container">
          <div>Home</div>
          <div>Search</div>
          <div>Logout</div>
      </nav>
      ```
      tampilan di atas ketika dijalankan akan membuat navbar secara vertikal, ketika kita ingin agar navbar tampil secara horizontal bisa menggunakn flex
      ```CSS
      .container {
          display: flex;
      }
      ```
    - justify content
      adalah property css yang membantu mendistribusikan item item didalam container. diantaranya :
      1. flex-start
      2. flex-end
      3. center
      4. space-between
      5. space-around
      6. space-evenly
  - grid
    css grid adalah css yang dapat membagi kolom pada website menjadi beberapa bagian sesuai dengan yang diinginkan, baik secara horizontal maupun vertikal
    - properti display
      properti display pada grid container harus bernilai grid
      ```css
      .container {
        display: grid;
      }
      ```
    - justify-item
      1. start
      2. end
      3. center
      4. stretch
    - align-items
      1. stretch
      2. start
      3. end
      4. center
      5. baseline
    - justify-content
      1. start
      2. end
      3. center
      4. stretch
      5. space-around
      6. space-between
      7. space-evenly
  - perbedaan flex dan grid

    - Flexbox hanya dapat mengatur arah pembagian dimensi tampilan hanya secara horizontal saja atau secara vertikal saja.

    - Sebagai contoh, pada flexbox, jika kita atur arahnya menjadi "kolom", maka tampilannya hanya terbagi rata secara vertikal. Begitu juga dengan arah "baris" yang akan secara horizontal.

    - Kalau Grids dapat mengatur arah dimensi tampilan secara horizontal dan vertikal.

  - bootstrap
    bootstrap adalah framework web development berbasis html, css dan javascript yang dirancang untuk mempercepat proses pengembangan web responsive dan mobile first.
    - mengapa menggunakan bootstrap?
      karena bootstrap adalah framework html,css,javascript yang bisa mempercepat proses pengembangan web responsive dan mobile first karena kita tinggal copy and paste lalu modifications sesuai keinginan kita
    - kapan menggunakan bootstrap?
      pada saat kita ingin membuat website responsive dengan waktu yang sedikit
    - tampilan bootstrap
      ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1665845190/bootstrap_hglxcg.png)
    - hal yang bisa kita lakukan di bootstrap
      - kita bisa mengambil component seperti card, button, carousel, navbar, dan lain lain
      - lalu semua component yang kita ambil semuanya sudah responsive sehingga kita mungkin hanya perlu mengubah ubah sedikit sesuai keinginan kita
    - contoh component di bootstrap
      ```html
      <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      ```
    - layout pada bootstrap
      disini kita bisa mengatur berbagai macam layout, diantaranya:
        1. Breakpoint adalah lebar yang dapat disesuaikan yang menentukan bagaimana tata letak responsif Anda berperilaku di seluruh perangkat atau ukuran viewport di Bootstrap. disini ada media query, ada X-small, small, medium, large, extra large, extra extra large
        2. Container adalah blok bangunan dasar Bootstrap yang berisi, melapisi, dan menyelaraskan konten Anda dalam perangkat atau area pandang tertentu.
        3. Grid adalah untuk mengatur layout, dengan cara dibagi menjadi 12 kolom
          ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1665892387/grid_wqm7us.png)
        4. Column yaitu mengatur atau memodifikasi kolom dengan beberapa opsi untuk penyelarasan, pengurutan dan penyeimbangan
        5. Gutters adalah padding diantara kolom anda, digunakan untuk memberi ruang secara responsive dan menyelaraskan konten dalam sistem kisi bootstrap
        6. Utilities yaitu untuk pengembangan mobile-friendly dan responsive
        7. Z-index yaitu untuk overlay misalkan ada gambar yang menutupi tulisan kita bisa menggunakan z-index agar gambar berada dibawah tulisan
    - Content pada bootstrap
      yaitu kita bisa mengatur tulisan, fontnya, typography, gambar, tabel, dan figure
        1. reboot yaitu kumpulan perubahan css khusus elemen dalam satu file
            ```html
            <pre><code>&lt;p&gt;Sample text here...&lt;/p&gt;
              &lt;p&gt;And another line of sample text here...&lt;/p&gt;
            </code></pre>
            ```
        2. Typhography yaitu mengatur heading, text body, list dan lain lain yang berhubungan dengan penulisan
            ```html
            <h3>
              Fancy display heading
              <small class="text-muted">With faded secondary text</small>
            </h3>
            ```
        3. Image yaitu mengatur gambar menjadi lebih responsive seperti menggunakan `.img-fluid, max-width: 100%, height: auto`
            ```html
            <img src="..." class="img-fluid" alt="...">
            ```
        4. tables
          yaitu kita bisa styling table menggunakan bootstrap
            ```html
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
            ```
        5. figure
            yaitu dokumentasi dan contoh untuk menampilkan gambar dan teks terkait dengan komponen gambar dibootsrap
            ```html
              <figure class="figure">
                <img src="..." class="figure-img img-fluid rounded" alt="...">
                <figcaption class="figure-caption">A caption for the above image.</figcaption>
              </figure>
              ```
    - component pada bootstrap
        component pada bootstrap yaitu seperti bagian bagian yang biasa ada di website seperti tombol, navbar, card, slider, dan lain lain
        1. button
            ```html
            <button type="button" class="btn btn-primary">Primary</button>
            <button type="button" class="btn btn-secondary">Secondary</button>
            <button type="button" class="btn btn-success">Success</button>
            <button type="button" class="btn btn-danger">Danger</button>
            <button type="button" class="btn btn-warning">Warning</button>
            <button type="button" class="btn btn-info">Info</button>
            <button type="button" class="btn btn-light">Light</button>
            <button type="button" class="btn btn-dark">Dark</button>

            <button type="button" class="btn btn-link">Link</button>
            ```
        2. card
            ```html
            <div class="card" style="width: 18rem;">
              <img src="..." class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            ```
        3. navbar
            ```html
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            ```
        4. navbar
              ```html
              <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="..." class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="...">
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              ```
    - saya mengimplementasikan bootstrap pada project tpa3 saya dengan link https://movie-api-anggit.netlify.app/
      disitu saya menggunakan card, navbar dari bootstrap sehingga website saya responsive

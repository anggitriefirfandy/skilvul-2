# Writting
## * React js fundamental
* React JS adalah library Javascript yang biasa digunakan saat membangun UI suatu website atau aplikasi web. Pada dasarnya, react adalah library JavaScript deklaratif, efisien, dan fleksibel yang digunakan untuk membangun antarmuka pengguna (UI).
* JSX merupakan singkatan dari JavaScript Syntax Extension atau dikenal juga dengan Javascript XML. JSX adalah ekstensi React untuk Javasript. Sintaks JSX mirip seperti HTML, sehingga membuat kita lebih gampang menyusun elemen pada komponen React.
* React JS menggunakan virtual DOM, Virtual DOM secara singkat nya adalah sebuah javascript object (virtual) yang merepresentasikan DOM yang sebenarnya (real DOM). karena virtual dom ini adalah representasi dari real dom maka virtual dom adalah sebuah replikasi (copy) dari real dom tersebut
* kelebihan react js
1. React JS membuat aplikasi front end menjadi lebih cepat walaupun harus menghandle berbagai data
2. React JS dapat menerapkan konsep modular javascript yaitu membagi tampilan pada website menjadi komponen komponen kecil
3. React JS itu scalable yaitu dapat digunakan pada aplikasi berskala kecil hingga besar dan kompleks
4. React JS itu popular dan komunitasnya besar

## * Menjalankan Aplikasi react
* untuk membuat atau menjalankan react bisa menggunakan `npx create-react-app namaprojet` pada terminal lalu cd nama projectnya dan untuk menjalankan menggunakan `npm start`, lalu bisa juga menggunakan vite js yaitu caranya ketik `npm create vite@latest nama-project --template react` di terminal lalu akan ada konfirmasi bisa pilih `y` lalu sudah membuat projectnya bisa pindah direktori ke projectnya `cd nama-project` setelah itu intal dependencies menggunakan `npm install` dan untuk menjalankan bisa menggunakan `npm run dev`


## * Membuat component pada react js
1. untuk membuat component di react js caranya kita bisa membuat folder components didalam folder <br>
![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1667135084/folder_components_f0j1no.png)<br>
2. lalu didalam folder component kita buat file dengan ekstensi jsx disini saya membuat component Form
3. lalu kita coding file Form.jsxnya
![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1667137467/code_component_form_uovomk.png)<br>
4. lalu kita import file Form.jsxnya didalam file App.jsx dengan syntax `import Form from "./components/Form";`
5. lalu panggil Form didalam file App.jsxnya seperti ini `<Form />`<br>
![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1667137651/code_memanggil_componentform_ty1ast.png)

## * Menggunakan JSX
* pada saat membuat file JSX pastikan huruf pertama kapital, contoh `Form.jsx`
* Untuk menuliskan file jsx itu untuk class component didalam method `render()`, lalu untuk function component pada statement `return`
    ```Javascript
    class Button extends React.Component {
        render() {
            <button>OK</button>
        }
    }

    function signInButton(){
        return <button>Login</button>
    }
    ```
* jika didalam file jsx punya banyak element bisa menggunakan fragment `<> </>` atau bisa menggunakan `<div></div>` karena jika tidak dibungkus terlebih dahulu maka akan menyebabkan error
![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1667137651/code_memanggil_componentform_ty1ast.png)
* penulisan attribut di jsx ada beberapa yang berbeda misalnya untuk `class` di react diganti dengan `ClassName` dan lain lain
* penulisan atribut event juga menggunakan huruf kapital seperti `OnClick` dan lain lain
* didalam syntax jsx bisa membuat ekspresi javascript dengan menggunakan kurung kurawal `{}`
![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1667138697/code_ekspresi_javascript_l4jids.png)

## * Perbedaan class component dengan Functional component
1. Syntax
    * class component
        ```javascript
        class App extends Component {
            render() {
                return (
                    <div>
                        <h1>Hello World</h1>
                    </div>
                );
            }
        }
        ```
    * functional component
        ```javascript
        function App(){
            return(
                <div>
                <h1>Hello World</h1>
                </div>
            )
        }
        ```
2. penulisan code di functional component lebih ringkas daripada class component
3. lifecycle method
    * class component menggunakan componentDidMount(), ComponentDidUpdate()
    * functional component menggunakan react hook useEffect()
4. menangani state management
    * class component menggunakan keyword state
    * functional component menggunakan keyword useState
## * State dan Props
* state adalah data yang berada pada atau ada didalam component atau bisa disebut state adalah data privat sebuah component yang hanya tersedia untuk component tersebut dan tidak bisa diakses dari component lain
* props adalah data yang dikirimkan dan hasil pemberian yang diterima suatu component
    ```javascript
    //nama="anggit" umur="32" itu adalah props
    <Card nama="anggit" umur="32"/>
    ```
* tipe component
    1. Stateless component yaitu component yang tidak memiliki state hanya prop saja.
    2. Statefull component yaitu component yang memiliki state dan props
* kapan menggunana props atau state
    * gunakan props untuk komunikasi data antar component (parent to child component)
    * gunakan state untuk komunikasi data internal, hanya didalam component itu sendiri
    * gunakan state  ketika memerlukan data yang bisa berubah ubah, misalnya nilai counter, nama barang, kotak pencarian, ratings dan lain lain
    * props dan state bisa memiliki default value
* state untuk menyimpan data sedangkan setState untuk mengubah data
![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1667140541/code_state_dan_setState_qwanfc.png)
* mengakses value dari state
    ```javascript
    import React, {useState} from 'react';
    function App(){
        const [state, setState] = useState("bintang")
            return(
                <div>
                <h1>My Name is {state}</h1>
                </div>
            )
    }
    ```
* Mengubah state
ketika button Change Name di klik maka nama state yang isinya bintang diganti menjadi roni
    ```javascript
    import React, {useState} from 'react';
    function App(){
        const [state, setState] = useState("bintang")

        const handleChange = () => {
            setState('roni')
        }
            return(
                <div>
                <h1>My Name is {state}</h1>
                <button onClick={handleChange}>Change Name</button>
                </div>
            )
    }
    ```

## * lifecycle method pada react
lifecycle method atau bisa disebut siklus hidup di react itu ada 3 yaitu:
1. Mounting yaitu ketika component pertama kali di inisiasi contohnya ketika kita ingin mengatur alarm bunyi jam 5 pagi itu dinamakan pemasangan atau mounting
    ```javascript
    conponentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000
    )}
    ```
2. Update yaitu ketika didalam component ada yang berubah datanya, contohnya ketika alarm berbunyi hanya mengeluarkan bunyi saja, lalu kita tambahkan agar pada saat alarm berbunyi juga menampilkan teks menggunakn update menggunakan `setState` 
    ```Javascript
    this.setState((state, props) => {
        return {
        counter: state.counter + props.increment
        }
    })
    ```
3. UnMounting yaitu ketika melakukan pembersihan atau menghapus, contohnya ketika alarm selesai berbunyi atau melewati jam 5 pagi maka alarmnya akan dihapus
    ```javascript
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    ```

## * Styling pada React
1. untuk styling pada React kita bisa menggunakan css yang dibuat sendiri, menggunakan bootstrap biasa atau bisa juga menggunakan bootstrap khusus react yang sudah berbentuk component
2. ketika menggunakan css yang dibuat sendiri, kita harus mengimportnya, misalnya kita buat file css dengan nama `App.css` lalu kita import file tersebut ke dalam file jsx yang ingin kita beri styling `import "./App.css"`
3. lalu untuk selectornya sama seperti css pada umumnya, hanya ada beberapa selector yang berubah di react, contohnya jika di html biasa menggunakan selector `class="card"` maka di react menggunakan `className="card"` lalu untuk valuenya juga ada beberapa yang berubah, misalnya untuk value yang menggunakan 2 kata contohnya `background-color` di react menggunakan `backgroundColor`
![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1667146087/styling_react_hsx0ie.png)
4. lalu misalnya ingin menggunakan css bootstrap, langkah pertama kita ambil script style bootstrapnya lalu kita paste kedalam index.htmlnya dibagian body paling bawah seperti menambahkan css pada html biasa, lalu ambil link style bootstrapnya lalu pastekan kedalam file index.htmlnya dibagian head seperti menyambungkan bootstrap ke html seperti biasa
5. lalu misalnya ingin menggunakan css bootstrap yang tidak menggunakan link, bisa dengan cara download file bootstrapnya dengan mengetikan `npm install bootstrap` di terminal, lalu untuk menyambungkannya dengan cara menggunakan import `import "bootstrap/dist/css/bootstrap.min.css"` dan `import "bootstrap/dist/js/bootstrap.bundle.min"` di dalam file main.jsxnya

* menambahkan argumen pada event handler menggunakan callback
    ```javascript
    const handleClick = (name) => {
        console.log("tess click dari " + name)// tess click dari anggit
    }
    return(
        <div>
            <h2 onClick={() => handleClick("anggit")}>{props.nama}</h2>
            <p>{props.umur}</p>
        </div>
    )
    ```

## * React Hooks
* Hooks adalah tambahan baru di React 16.8. Mereka memungkinkan menggunakan state dan fitur react lainnya tanpa menulis class
* Hooks pada dasarnya adalah function yang disediakan React untuk mempermudah kita dalam menggunakan state dan fitur React lain seperti lifecylce method, context dan lain lain
* Hooks rule
    1. Hooks hanya dapat dipanggil didalam react functional component
    2. Hooks hanya dapat dipanggil ditingkat atas suatu komponen
    3. Hooks tidak bisa bersyarat(conditional)
* Hooks yang sering digunakan, yaitu :
    1. useState() digunakan untuk membuat dan mengupdate state
        * syntax useState<br>
        ![](https://miro.medium.com/max/1400/0*b5qfLP1BxkArg3xG.png)<br>
    2. useEffect() digunakan untuk menambahkan side effect di functional component dan juga bisa menjadi alternative untuk lifecylce method componentDidMount() dan componentDidUpdate(). Side effect pada react adalah function yang dieksekusi setelah di render
        * syntax useEffect<br>
        ![](https://res.cloudinary.com/practicaldev/image/fetch/s--LyvPoa-c--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i.ibb.co/1f7GSHb/use-Effect-hook.png)<br>
        * Mengatasi re-render yang berlebihan bisa menggunakan `[]` atau `[variabel yang berubah]`. apa perbedaaan `[]` dengan `[variabel yang berubah]` yaitu jika `[]` maka hanya 1 kali dirender saat pertama kali dijalankan sedangkan `[variabel yang berubah]` maka akan berubah ubah mengikuti variabel yang berubah
        ```javascript
        useEffect(() => {
            axios.get(endPoint)
                .then(res => setLists(res.data)
        },[])
        ```
    3. useContext() digunakan untuk memudahkan penggunaan context
    4. useReducer() digunakan untuk menyimpan dan memperbaharui state sama seperti useState tetapi isinya object state dan fungsi dispacth
    5. useCallback() untuk mengembalikan callback function yang telah di memo
    6. useMemo() untuk mengembalikan memoized value, memoize adalah sebuah teknik yang digunakan untuk mengoptimalkan sebuah program
    7. useRef() digunakan untuk mengakses DOM node dalam sebuah komponen
* kelebihan menggunakan React hook yaitu code menjadi lebih clean, pendek dan mudah dimengerti

* ## React event handler
    ![](https://res.cloudinary.com/dk55ik2ah/image/upload/v1667194115/react_event_handler_naps9z.png)
    * pada saat menggunakan react event handler menggunakan camelCase seperti `onClick`
    * Jadi ketika button increment di klik maka akan masuk ke function increment, disini nilai dari statenya akan ditambahkan 1
    * lalu jika mengklik button decrement maka akan masuk ke function decrement, disini nilai dari statenya akan kurangi 1
<script>
var time = new Date();
console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
</script>

function Home() {
    return (
    <div>
        <h1>Meu Irmãozinho mais querido!</h1>   
        <p>DAVID CAMPOS DA SILVA</p>
        <img src="david.JPG">David Campos da Silva</img>
    <small>copyright: Gabriel Campos da Silva</small>
    </div>
    )        
}

<script>
let d = new Date();
document.body.innerHTML = "<h1>Time right now is:  " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
"</h1>"
</script>

export default Home

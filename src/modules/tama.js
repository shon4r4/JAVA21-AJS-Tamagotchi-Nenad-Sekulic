const img = document.querySelector('img');


export class Tamagotchi{
    #hunger = 0;
    #happiness = 0;
    #running = false;
    #intervalID;
    #tamagochiname;
    #tamagochitype;

    constructor() {

    }

    feed() {
        if (this.#hunger > 0) {
            this.#hunger--;
        }
        document.getElementById('hng').innerText = this.#hunger;
    }

    play() {
        if (this.#happiness < 10) {
            this.#happiness++;
        }
        document.getElementById('hpn').innerText = this.#happiness;
    }

    isRunning() {
        return this.#running;
    }

    start() {
        this.#hunger = 5;
        this.#happiness = 5;
        document.getElementById('hng').innerText = this.#hunger;
        document.getElementById('hpn').innerText = this.#happiness;
        this.#intervalID = setInterval(this.#update.bind(this), 2000);
        this.#running = true;
        img.src = picture;
        this.#tamagochiname = document.getElementById('tname').value;
        this.#tamagochitype = document.getElementById('ttype').value;
    }
    
    stop() {
        clearInterval(this.#intervalID);
        this.#running = false;
    }

    #update() {
        this.#hunger++;
        this.#happiness--;
        document.getElementById('hng').innerText = this.#hunger;
        document.getElementById('hpn').innerText = this.#happiness;
        if (this.#hunger == 10 || this.#happiness == 0) {
            this.stop()
            document.getElementById('msg').innerHTML = this.#tamagochiname + " who was a " + this.#tamagochitype + " just passed away ):";
            document.querySelector('button').innerText = 'Start';
            img.src = picture2;
        }
    }
}


const picture = new URL('../img/tama-happy.png', import.meta.url);
const picture2 = new URL('../img/tama-dead.png', import.meta.url);


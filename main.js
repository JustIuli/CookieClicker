const cookie = document.querySelector('img');
const cookiesAmountText = document.querySelector('span');
const clickerUpgrades = document.getElementById('clickerUpgrades')


let cookiesAmount = 0;
let clickerMultiplier = 1

const upgrades = {'clicker': {
        'doubleClick1': {'active': false, 'multiplier': 2 , 'price' : 15 , 'name' : 'X2 CLicks'},
        'doubleClick2': {'active': false, 'multiplier': 2 , 'price'  : 25 , 'name' : 'X2 CLicks'},
        'doubleClick3': {'active': false, 'multiplier': 2 , 'price' : 50 , 'name' : 'X2 CLicks'},
        'doubleClick4': {'active': false, 'multiplier': 2 , 'price' : 75 , 'name' : 'X2 CLicks'},
    }}
let getClickerMultiplier = () => {
    Object.keys(upgrades['clicker']).forEach(upgradeName => {
        if(upgrades['clicker'][upgradeName].active === true){
            // console.log(upgrades['clicker'][upgradeName].multiplier)
            clickerMultiplier *= 2;
        }
    })
}

getClickerMultiplier()
function generateButtons() {
    Object.keys(upgrades['clicker']).forEach(upgradeName => {
        let x = document.createElement('div')
        let y = document.createElement("p")
        let z = document.createElement("p")
        // px-0.5 py-0.5 text-center rounded bg-yellow-500 text-white font-mono"
        x.classList.add('border-4' , 'border-yellow-500', 'text-center', 'text-white' , 'font-mono', 'p-0.5', 'rounded' , 'w-16' , 'h-16' , 'text-xs')
        x.setAttribute('id', `${upgrades['clicker'][upgradeName]}`);

        y.innerText = upgrades['clicker'][upgradeName].name
        z.innerText = upgrades['clicker'][upgradeName].price

        x.addEventListener('click', function () {
            if (cookiesAmount >= upgrades['clicker'][upgradeName].price) {
                upgrades['clicker'][upgradeName].active = true
                cookiesAmount -= upgrades['clicker'][upgradeName].price
                getClickerMultiplier()
                x.remove()
            }
        })

        clickerUpgrades.appendChild(x);
        x.appendChild(y)
        x.appendChild(z)

        //const multiplier = upgrades['clicker'][upgradeName].multiplier;
    });
}

generateButtons()


cookie.addEventListener('click', function () {
    cookie.classList.toggle('scale');
    cookiesAmount += clickerMultiplier
    cookiesAmountText.innerText = String(cookiesAmount)
    setTimeout(function(){
        cookie.classList.toggle('scale');
    } , 100)
});

setInterval(function () {
    cookiesAmountText.innerText = String(cookiesAmount);
}, 1000);

/*

        console.log(Key.length)
        x = document.createElement('button')
        x.classList.add('bg-yellow-400', 'text-lg', 'p-2')
        x.setAttribute('id', 'my-id');
        x.textContent = 'Hello world';
        clickerUpgrades.appendChild(x);
        console.log(upgrades[Key])

 */
document.addEventListener("DOMContentLoaded", function () {

    const doc = document,
        time = doc.querySelector('#time'),
        greeting = doc.querySelector('#greeting'),
        name = doc.querySelector('#name'),
        focus = doc.querySelector('#focus');

        // Show Time
    showTime = () => {
        let today = new Date(),
            hour = today.getHours(),
            min = today.getMinutes(),
            sec = today.getSeconds();

        time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

        setTimeout(showTime, 1000);
    };

        // Add Zero
    addZero = (n) => {
        return (parseInt(n, 10) < 10 ? '0' : '') + n;
    };

        // Set Background and Greeting
    setBgGreet = () => {
        let today = new Date(),
            hour = today.getHours();

        if (hour < 11) {
            doc.body.style.backgroundImage = "url('img/morning.jpg')";
            greeting.textContent = 'Good Morning';
        } else if (hour < 19) {
            doc.body.style.backgroundImage = "url('img/afternoon.jpg')";
            greeting.textContent = 'Good Afternoon';

        } else {
            doc.body.style.backgroundImage = "url('img/night.jpg')";
            greeting.textContent = 'Good Evnenig';
            doc.body.style.color = 'white';
        };
    };

        // Get Name
    getName = () => {
        if (localStorage.getItem('name') === null) {
            name.textContent = '>Enter Name<';
        } else {
            name.textContent = localStorage.getItem('name');
        };
    };

        // Set Name
    setName = (e) => {
        if (e.type === 'keypress') {
            if (e.which == 13 || e.keyCode == 13) {
                localStorage.setItem('name', e.target.innerText);
                name.blur();
            };
        } else {
            localStorage.setItem('name', e.target.innerText);
        };
    };

        // Get Focus
    getfocus = () => {
        if (localStorage.getItem('focus') === null) {
            focus.textContent = '>Enter Focus<';
        } else {
            focus.textContent = localStorage.getItem('focus');
        };
    };

        // Set Focus
    setFocus = (e) => {
        if (e.type === 'keypress') {
            if (e.which == 13 || e.keyCode == 13) {
                localStorage.setItem('focus', e.target.innerText);
                name.blur();
            };
        } else {
            localStorage.setItem('focus', e.target.innerText);
        };
    };

    name.addEventListener('keypress', setName);
    name.addEventListener('blur', setName);
    focus.addEventListener('keypress', setFocus);
    focus.addEventListener('blur', setFocus);

    showTime();
    setBgGreet();
    getName();
    getfocus();
});

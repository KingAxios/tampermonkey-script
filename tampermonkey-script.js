(function() {
    'use strict';

    // Generate a random token of specified length
    function get(length) {
        let result = '';
        const crg = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const cr = crg.length;
        for (let i = 0; i < length; i++) {
            result += crg.charAt(Math.floor(Math.random() * cr));
        }
        return result;
    }

    // Get the token from localStorage or generate a new one if it doesn't exist
    let token = localStorage.getItem('token');
    if (!token) {
        token = get(32);
        localStorage.setItem('token', token);
    }

    // List of authorized tokens
    const authorized = [
        'CnuXZG7wyphwRbtK3pcw3TRv136DDlcb', '7S2kQlY0CxxxX0sZ5XxYE0GzvQRUYEiZ', 'LVU6CdH6usE0q3CuofxX5SNahJjC8UPx', 'fHHLWu4KDiLYGFTVU4W3gj0evYFKyPWs', 'hHbd8BzZQzhbb6KdX1ItuDV1mFQl2wW5', 'bp6AjYq3qLF78UVw0gOx48fT3IYRbFv2', 'KgsY2tro7r1wRCxfasSBMx0HXbQ13ew7', 'VcOV963h4I1LZetqgXFLkO0EctfURX9N'
    ];

    // Check if the token is authorized
    if (authorized.includes(token)) {
        console.log("Running");
    } else {
        alert('token: ' + token);
        secure();
    }

    // Retrieve or initialize the counter
    function tm() {
        let ctt = localStorage.getItem('ctt');
        if (ctt === null) {
            ctt = 0;
        } else {
            ctt = parseInt(ctt);
        }
        return ctt;
    }

    // Secure function to remove all elements from the page
    function secure() {
        var k = document.querySelectorAll('*');
        for (var i = 0; i < k.length; i++) {
            k[i].remove();
        }
    }

    // Update function with a timer
    function upd() {
        const setTimer = false;

        if (!setTimer) {
            return;
        }

        let ctt = tm();

        let interval = setInterval(() => {
            ctt++;
            localStorage.setItem('ctt', ctt);

            if (ctt >= 1 && setTimer) {
                clearInterval(interval);
                alert('an error occurred');
                secure();
            }
        }, 1000);
    }

    // Call the update function
    upd();
})();

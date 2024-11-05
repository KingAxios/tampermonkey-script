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
        'CnuXZG7wyphwRbtK3pcw3TRv136DDlcb', 'HPkXP0f8oqkSDbgwOI1RlbDXS2xoCBhC', 'a6p27JUZ7Swzlu0HW5Sj4e1CFqDKv9MA', 'bc34LnLApUDIeRKovucjw7Md4nF3uUqn', '7S2kQlY0CxxxX0sZ5XxYE0GzvQRUYEiZ', '7lS3zK8o0OUSKZGfOlEDEXf4iRfoIoZo', 'LVU6CdH6usE0q3CuofxX5SNahJjC8UPx', 'bp6AjYq3qLF78UVw0gOx48fT3IYRbFv2', 'KgsY2tro7r1wRCxfasSBMx0HXbQ13ew7', 'kQk2Ea2oO0zfgBhmz208RGrKSx4t94Ga', 'kK1TBLEoxbjfXbPGVylScNgzVZBE7id6', 'y20wwBykcduk4Y4YQslYI1ydGAofas0c', 'cstmtknpryker', 'xhm5orGDmxQ85qveIcMFkXVkBl22nfN8', 'JrllMSDwXBbm8jEYhdavdPkLM3VplInO', 'bYElq5GpsLHWDc6WszOLzIZXvc1cpl86', 'Vi33WyXT4kq5F8eyy6zsHC3QcaTyHEaN', 'qsl8OeMy0aned3zfn8WfHpIxFiKNktsz', 'DEmJjzxUpMHxea2ndmorVJOPDrFV3A13', 'r9zConvkV2aXXhaYECDV4c4kuPSZiJDR', 'HL3P5T7q6FsdF4BVVeUs7W1PwJmUtJTJ', 'NNfaNvQcKeJVuaN5PPSmQaabaoNWYqcG', 'DAA7yQncVMX7Els00t8H6n6v5cHZj6ye', 'x7xlvEWJWugJG6sVRpMFNnzBGYMuF6fP', 'v4rPppNNOIZNn9obbejephAyBMavgmLx', 'E8lprzHZePKLBHV3hgpMZxE6CtPTMwXB', '8ZHM54c9hrpVUU4QdChQ5fNwoAr4GW90', 'Rb4jIIjtR0DkAQU0HZkvCK5a87if1KcG', 'wLhEik9XsN7rlIjkThLeV6WuozZdnm8E', 'Wy7kd53CNAlSckVY1ua0iVClZOVyKFmz', 'VtztOI4RH9I4BgW6XaYaWMOIL28SwAXo', 'vRnuIqHJfO8O8jkNDMAsGzGo7bqeHbS8', 'lEZ56JyWa2fXxj729LbL1WVIRXYC7iYA'
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

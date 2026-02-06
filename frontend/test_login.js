const axios = require('axios');

async function testLogin() {
    try {
        console.log('Attempting login...');
        const res = await axios.post('http://localhost:5000/api/auth/login', {
            email: 'admin@magizh.com',
            password: 'admin123'
        });
        console.log('Login Success:', res.data);
    } catch (err) {
        if (err.response) {
            console.error('Login Failed:', err.response.status);
            console.error('Data:', err.response.data);
        } else {
            console.error('Error:', err.message);
        }
    }
}

testLogin();

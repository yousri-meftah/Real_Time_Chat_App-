import User from '../models/user_model.js';
function login(req, res) {
    const { email, password } = req.body;

}
function signup(req, res) {
    console.log(req.body); 
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    user.save()
        .then(() => {
            res.status(201).send('User Created');
        })
        .catch((err) => {
            res.status(500).send('Server Error');
    });
}
function logout(req, res) {
    res.status(200).send('Login');
}
export { login, logout, signup };
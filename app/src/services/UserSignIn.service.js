const UserSignIn = async () => {
    try {

        let process = await axios.post(API_URL + "login", formdata);
        alert('User has been registered');
        return process.data;

    } catch (error) {
        console.error(error);
    }
};

export default UserSignIn;
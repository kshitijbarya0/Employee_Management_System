export const Logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('loggedInUser')
}
import React from 'react';
class Navbar extends React.Component{
    constructor() {
        super()
    }
    render() {
        return(
            <div className='Nav'>
                <a href='/'>home</a>
                <a href='/products'>Products</a>
                <a href='/cart'>Cart</a>
                <a href='/profiles'>Profile</a>
            </div>
        )
    }
}
export default Navbar;

import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="gameName mr-auto"><h1>Clicky Game</h1></div>
                    <div className="gameInfo ml-auto"><h5>To win, try to click each image only once!</h5></div>
                </nav>
        );
    }
}

export default Navbar;
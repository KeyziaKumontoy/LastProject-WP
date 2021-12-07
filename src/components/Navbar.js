import React from 'react';
import './style.css';


function Navbar() {
    return (
        <div>
            <div className="container">
                <nav class="navbar navbar-expand-md navbar-light bg-light ">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                ALL TYPES
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Modern</a></li>
                                <li><a class="dropdown-item" href="#">Classic</a></li>
                                <li><a class="dropdown-item" href="#">Vintage</a></li>
                            </ul>
                        </li>
                        <li class="nav-item active text-center">
                            <a class="nav-link" href="#">Popular Product</a>
                        </li>
                        <li class="nav-item text-center">
                            <a class="nav-link" href="#">Low Price</a>
                        </li>
                        <li class="nav-item text-center">
                            <a class="nav-link" href="#">High Price</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                PRICE
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;

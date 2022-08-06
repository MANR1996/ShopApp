import React from 'react';
import './index.css';

function SignNCart() {
    return (
        <div className="SignNCart">
            <div className="SignIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 23C1 17.477 5.477 13 11 13H13C18.523 13 23 17.477 23 23" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square" />
                    <path d="M12 13C15.3137 13 18 10.3137 18 7C18 3.68629 15.3137 1 12 1C8.68629 1 6 3.68629 6 7C6 10.3137 8.68629 13 12 13Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square" />
                </svg>
                <span>Sign in</span>
            </div>
            <div className="Cart">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" fill="#091625" />
                    <path d="M19.734 23H4.266C3.98238 23.0001 3.70199 22.9398 3.44345 22.8232C3.1849 22.7066 2.9541 22.5364 2.76638 22.3238C2.57865 22.1112 2.43829 21.8611 2.3546 21.5901C2.27092 21.3191 2.24583 21.0334 2.281 20.752L4 7H20L21.719 20.752C21.7542 21.0334 21.7291 21.3191 21.6454 21.5901C21.5617 21.8611 21.4214 22.1112 21.2336 22.3238C21.0459 22.5364 20.8151 22.7066 20.5566 22.8232C20.298 22.9398 20.0176 23.0001 19.734 23Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square" />
                    <path d="M8 10V5C8.00343 3.94019 8.42596 2.92476 9.17536 2.17536C9.92476 1.42596 10.9402 1.00343 12 1V1C13.0598 1.00343 14.0752 1.42596 14.8246 2.17536C15.574 2.92476 15.9966 3.94019 16 5V10" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square" />
                    <path d="M12.0049 12.7686C12.6885 12.7686 13.2386 12.9248 13.6553 13.2373C14.0752 13.5465 14.2852 13.9648 14.2852 14.4922C14.2852 14.8568 14.1842 15.1823 13.9824 15.4688C13.7806 15.752 13.4551 16.0059 13.0059 16.2305C13.5397 16.5169 13.9222 16.8164 14.1533 17.1289C14.3877 17.4382 14.5049 17.7783 14.5049 18.1494C14.5049 18.7354 14.2754 19.2074 13.8164 19.5654C13.3574 19.9202 12.7536 20.0977 12.0049 20.0977C11.2236 20.0977 10.61 19.9316 10.1641 19.5996C9.7181 19.2676 9.49512 18.7972 9.49512 18.1885C9.49512 17.7816 9.60254 17.4202 9.81738 17.1045C10.0355 16.7887 10.3838 16.5104 10.8623 16.2695C10.4554 16.0124 10.1624 15.7373 9.9834 15.4443C9.80436 15.1514 9.71484 14.8307 9.71484 14.4824C9.71484 13.9714 9.92643 13.5579 10.3496 13.2422C10.7728 12.9264 11.3245 12.7686 12.0049 12.7686ZM10.8916 18.1006C10.8916 18.3805 10.9893 18.5986 11.1846 18.7549C11.3799 18.9111 11.6468 18.9893 11.9854 18.9893C12.3597 18.9893 12.6396 18.9095 12.8252 18.75C13.0107 18.5872 13.1035 18.374 13.1035 18.1104C13.1035 17.8923 13.0107 17.6888 12.8252 17.5C12.6429 17.3079 12.3451 17.1045 11.9316 16.8896C11.2383 17.2087 10.8916 17.6123 10.8916 18.1006ZM11.9951 13.8721C11.738 13.8721 11.5296 13.9388 11.3701 14.0723C11.2139 14.2025 11.1357 14.3783 11.1357 14.5996C11.1357 14.7949 11.1976 14.9707 11.3213 15.127C11.4482 15.2799 11.6761 15.4378 12.0049 15.6006C12.3239 15.4508 12.5469 15.2979 12.6738 15.1416C12.8008 14.9854 12.8643 14.8047 12.8643 14.5996C12.8643 14.375 12.7829 14.1976 12.6201 14.0674C12.4574 13.9372 12.249 13.8721 11.9951 13.8721Z" fill="white" />
                </svg>
                <span>Cart</span>
            </div>
        </div>
    );
}

export default SignNCart;
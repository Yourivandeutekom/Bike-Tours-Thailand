window.addEventListener('load', () => {

    const bookTourBtn = document.querySelectorAll('.booktour');
    const closeBtn = document.querySelector('.close');
    const bookingDiv = document.getElementById('booking');
    const overlay = document.getElementById('overlay')


    // Booking tour button handler
    bookTourBtn.forEach((btn) => {
        btn.addEventListener('click', (e) => {

            const bookItem = document.querySelector('.bookitem');
            overlay.style.display = 'block';

            e.preventDefault;
            bookingDiv.classList.add('active');
            bookItem.innerHTML = e.target.value;

        });
    });

    closeBtn.addEventListener('click', () => closeBooking());
    overlay.addEventListener('click', () => closeBooking())

    const closeBooking = () => {
        bookingDiv.classList.remove('active');
        overlay.style.display = 'none';
    }
});

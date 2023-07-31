window.onload = () => {
    const transition_el = document.querySelector('.introduce');
    setTimeout(() => {
        transition_el.classList.remove('is-active');
        let clearDiv = document.getElementById('introduce');
        clearDiv.style.visibility = "hidden";
    }, 5000);
}



export const cardClick = (ref) => {
    // console.log(ref)
    if (ref === null) return;
    ref.classList.toggle('show')
    // ref.addEventListener("click", (e) => {
    //     alert('clicked')
    //     // cad.classList.toggle('show')
    // })

}
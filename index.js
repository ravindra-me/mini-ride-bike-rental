window.addEventListener("scroll" , (event) => {
    let faqSec = document.querySelector(".faq-sec");
    let contentPosition = faqSec.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/3;
    if(contentPosition < screenPosition) {
        faqSec.classList.add("active");
    }else{
        faqSec.classList.remove("active");
    }
})


let bikesContainer = document.querySelector(".bikes-container");


function createUi(bikesArr) {
    let bikesArrCards = bikesArr.map(bike => {
        return `
            <article>
                <div class="font-0"><img src=${bike.imgUrl} class="img" alt="royalEnfield"></div>
                <h3>${bike.name}</h3>
                <div class="flex flex-column card-text">
                    <div class="flex justify-flex-between border-bottom">
                        <p>Min. Booking</p>
                        <p>5 hr min</p>
                        <p class="price">${bike.minBookRate}</p>
                    </div>
                    <div class="flex justify-flex-between border-bottom">
                        <p>Hourly Rate</p>
                        <p>After 5 hr</p>
                        <p class="price">${bike.extraRate}</p>
                    </div>
                    <div class="flex justify-flex-between border-bottom">
                        <p>Online Special</p>
                        <p>10%</p>
                        <p class="price">First Ride</p>
                    </div>
                </div>
                <a href="#"  class="btn">Book now</a>
            </article>
            `
    }).join("") 
    bikesContainer.innerHTML = bikesArrCards;
}
createUi(bikesArr);


{/* <article>
    <div class="font-0"><img src="./assets/imgs/royalEnfield.jpg" class="img" alt="royalEnfield"></div>
    <h3>Royal Enfield 350</h3>
    <div class="grid template-column-3">
        <div>
            <p>Min. Booking</p>
            <p>5 hr min</p>
            <p class="price">Rs.450</p>
        </div>
        <div>
            <p>Hourly Rate</p>
            <p>After 5 hr</p>
            <p class="price">Rs.29/hr</p>
        </div>
        <div>
            <p>Online Special</p>
            <p>10%</p>
            <p class="price">First Ride</p>
        </div>
    </div>
    <a href="#">Book now</a>
</article> */}
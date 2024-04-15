
const backToTop = document.querySelector('#back-to-top');
const productBtns = document.querySelectorAll('.product-btn');
const modalBox = document.querySelector('#modalBox');
const closeBtn = document.querySelector('#close-btn');
const signUpBtn = document.querySelector('#sign-up-btn');
const loginBtn = document.querySelector('#login-btn');
const signUpForm = document.querySelector('#sign-up-form');
const loginForm = document.querySelector('#login-form');
const regWord = document.querySelector('#reg-word');
const modalContent = document.querySelector('#modal-content');
const pName = document.querySelector('#p-name');
const testimonies = document.querySelectorAll('#testiMony');
const amtTag = document.querySelector('#amount-tag');
const amtSlider = document.querySelector('#amount-slider');
const priceDetail = document.querySelectorAll('#price-dtl');
const input1 = document.querySelector('#input-container1');
const input2 = document.querySelector('#input-container2');

const productData = [
    {
        id: 1,
        pName:'Email Validator',
        'content':`<div id="price-dtl" class="flex justify-between hover:bg-gray-700 px-2 rounded">
        <span>Up to 150</span>
        <span class="font-semibold">Free</span>
    </div>
    <div id="price-dtl" class="flex justify-between hover:bg-gray-700 px-2 rounded">
        <span>From 2000</span>
        <span class="">0.007</span>
    </div>
    <div id="price-dtl" class="flex justify-between hover:bg-gray-700 px-2 rounded">
        <span>From 5000</span>
        <span class="">0.0065</span>
    </div>
    <div id="price-dtl" class="flex justify-between hover:bg-gray-700 px-2 rounded">
        <span>From 10,000</span>
        <span class="">0.006</span>
    </div>
    <div id="price-dtl" class="flex justify-between hover:bg-gray-700 px-2 rounded">
        <span>From 100,000</span>
        <span class="">0.0032</span>
    </div>
    <div id="price-dtl" class="flex justify-between hover:bg-gray-700 px-2 rounded">
        <span>From 250,000</span>
        <span class="">0.003</span>
    </div>
    <div id="price-dtl" class="flex justify-between hover:bg-gray-700 px-2 rounded">
        <span>From 1,000,000</span>
        <span class="">0.002</span>
    </div>`
    },
    {
        id: 2,
        pName:'Contacts Extractor',
        'content':`<div id="price-dtl" class="flex justify-between hover:bg-gray-700 px-2 rounded">
        <span>1 email</span>
        <span class="">5</span>
    </div>
    <div id="price-dtl" class="flex justify-between hover:bg-gray-700 px-2 rounded">
        <span>10 emails</span>
        <span class="">45</span>
    </div>
    <div id="price-dtl" class="flex justify-between hover:bg-gray-700 px-2 rounded">
        <span>100 emails</span>
        <span class="">350</span>
    </div>
    <div id="price-dtl" class="flex justify-between hover:bg-gray-700 px-2 rounded">
        <span>500 emails</span>
        <span class="">1,400</span>
    </div>
    <div id="price-dtl" class="flex justify-between hover:bg-gray-700 px-2 rounded">
        <span>1000 emails</span>
        <span class="">2700</span>
    </div>`
    },
    {
        id: 3,
        pName:'Country Sorter',
        'content':`<p>This product is <span class='font-semibold uppercase'>free</span> for now, this to appreciate You for being a huge part of this.</p>`
    }
]

// back to top arrow
window.addEventListener('scroll', function(){
    if(scrollY <= '550'){
        backToTop.classList.add('hidden');
    } else {
        backToTop.classList.remove('hidden');
        backToTop.classList.add('flex');
    }
})

// products section buttons
// productBtns.forEach(function (productBtn) {
//     productBtn.addEventListener('click', function(evt){
//         modalBox.classList.remove('hidden');
//         const btnId = parseInt(evt.currentTarget.dataset.id);
//         modalContent.innerHTML = productData[btnId].content;
//         if(btnId === 1){
//             amtSlider.setAttribute('step', 50);
//             amtSlider.setAttribute('max', 1000);
//         }
//         if(btnId === 2){
//             amtSlider.classList.add('hidden');
//             amtTag.classList.add('hidden');
//         }
//     })
// })

// pricing modal box close btn
closeBtn.addEventListener('click', function(){
    modalBox.classList.add('hidden');
})

// signup form
signUpBtn.addEventListener('click', function(){
    signUpForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
    regWord.innerHTML = 'Sign-Up';
    signUpBtn.classList.add('btn-active');
    signUpBtn.classList.remove('btn');
    loginBtn.classList.remove('btn-active');
})

// login form 
loginBtn.addEventListener('click', function(){
    signUpForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
    loginForm.classList.add('flex');
    regWord.innerHTML = 'Login';
    loginBtn.classList.add('btn-active');
    loginBtn.classList.remove('btn');
    signUpBtn.classList.remove('btn-active');
})

// testimony slideshow
// let counter = 0;

// setInterval(function(){
    
//     if(counter < testimonies.length){
//         testimonies[counter].classList.remove('flex');
//         testimonies[counter].classList.add('hidden');
//         // console.log(counter, 'middle');
//         testimonies[counter].classList.add('flex');
//         testimonies[counter].classList.remove('hidden');
//         // console.log(testimonies[counter])
//         console.log(counter, 'if');
//     } else {
//         counter = 0;
//         testimonies[counter].classList.add('flex');
//         testimonies[counter].classList.remove('hidden');
//         console.log(counter, 'else');

//     }
//     counter++;
// }, 2000)

// amtTag.value = amtSlider.value
// // amount input 
// amtSlider.addEventListener('input', function(){
//     amtTag.value = amtSlider.value;
// })
// amtTag.addEventListener('input', function(){
//     amtSlider.value = parseInt(amtTag.value);
// })

// priceDetail.addEventListener('click', function(){

// })
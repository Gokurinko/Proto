let form = document.querySelector('form')
let weight = document.querySelector('#personWeight')
let height = document.querySelector('#personHeight')
let results = document.querySelector('#results')
let imgHolder = document.querySelector('#imgHolder')
let bmiResult = document.querySelector('#bmi')
let calculateBMI = function (w, h) {
    const jud = w / (h ** 2);
    return jud;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let BMI = calculateBMI(weight.value, height.value);
    weight.value = '';
    height.value = '';
    if (BMI >= 30) {
        results.textContent = `You are Obese, your BMI is :`;
        bmiResult.textContent = `${BMI}`;
        newBMI('https://imgs.search.brave.com/Wo2lB7KWRky5JjDIQs_JlNYABdE6PQEEXUXwKpOpVi0/rs:fit:788:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5x/dHQxbUFveXRubVJG/RVhkSXFLU1R3SGFF/ZCZwaWQ9QXBp');
    } else if (BMI >= 25) {
        results.textContent = `You are Overweight, your BMI is :`;
        bmiResult.textContent = `${BMI}`;
        newBMI('https://imgs.search.brave.com/RPj75mkjAbw1d5iCHfL5G-rC30kUYek5M-cP9c2gVxU/rs:fit:355:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC41/N3RqSFE5ZE1SZFQt/TE84THNwV1B3SGFK/NCZwaWQ9QXBp');
    } else if (BMI >= 20) {
        results.textContent = `You have normal BMI:`;
        bmiResult.textContent = `${BMI}`;
        newBMI('https://imgs.search.brave.com/tSzfab0Wgn-wFGTIhioIEwWO5iULiCNSB6z_uevlgCc/rs:fit:741:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5G/NWR1NHdleFFRV3Zo/WVpfeHlnQXNBSGFF/diZwaWQ9QXBp')
    } else {
        results.textContent = `Your BMI is below the normal:`;
        bmiResult.textContent = `${BMI}`;
        newBMI('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXUUy_GAsNMf7qnSSlvwssuRfLEuOFV_XLdA&usqp=CAU')
    }

})

let newBMI = function (url) {
    imgHolder.innerHTML = ""
    let img = document.createElement('img');
    img.src = url;
    imgHolder.append(img);
}

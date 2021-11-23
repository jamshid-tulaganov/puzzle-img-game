// #
let elBtns = document.querySelectorAll('.image');
 result = [];
 btns = [];
 count = 1;
elBtns.forEach((btn)=>{
    let win = ['1','4','7','2','5','8','3','6','9']
    btn.addEventListener('click',()=>{
        let elDataId = btn.getAttribute('data-id');
        result.push(elDataId);
        btns.push(btn);
        // find img number
        function divide(img){
            let str = img.split('.')
            str = str[0];
            let len = str.length-1;
            return str[len];
        }
        // change images
        function change(res,el) {
            if(res.length  === 2 && el.length === 2){
                let a = el[0].firstElementChild.src;
                let b = el[1].firstElementChild.src;
                let c = b;
                el[0].firstElementChild.src = el[1].firstElementChild.src;
                el[1].firstElementChild.src = a;
                result = [];
                btns = [];
            }
        }
        change(result,btns);
         function win(btns) {
             count = 0;
             btns.forEach((el)=>{
                 let dataId = el.getAttribute('data-id');
                 let imgId = divide(el.firstElementChild.src);

                 if(dataId === imgId){
                     count++;
                 }
                 if(count === 9){
                     document.querySelector('.result').style.display = 'block'
                     $(".close").click(function() {
                         $(this)
                             .parent(".alert")
                             .fadeOut();
                     })
                    document.getElementById('btn').textContent = 'New Game'

                 }
             })
         }
         win(elBtns)
    })

})
//check win

elBtn = document.getElementById('btn');
elBtn.addEventListener('click',()=>{
    let arr = [1,2,3,4,5,6,7,8,9];
    function random(array){
        for (let k = 0;k<20;k++){
            let i = Math.floor(Math.random()*9);
            let j = Math.floor(Math.random()*9);
            let c = array[j];
            array[j] = array[i];
            array[i] = c;
        }
        return arr
    }

    let changeArray = random(arr);
    i = 0
    elBtns.forEach((el)=>{
        el.firstElementChild.src = `/imgpuzzlegame/images/${changeArray[i]}.jpg`
        i++;
    })
})
//
// alert
;
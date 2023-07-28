// const btN=document.querySelectorAll('.question-btn');

// btN.forEach((butN)=>{
//     butN.addEventListener('click',(e)=>{
//         const questionNum=e.currentTarget.parentElement.parentElement;

//         questionNum.classList.toggle('show-text')
//     })
// })

// OR


const qNs = document.querySelectorAll('.question');

qNs.forEach((question) => {
  const btN = question.querySelector('.question-btn');

  btN.addEventListener("click", () => {

        qNs.forEach((item)=>{
            if (item!== question) {
                item.classList.remove("show-text");
            }
        })


    question.classList.toggle("show-text");
  });
});

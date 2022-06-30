const correctAnswers = ['D','C','C','B','D','B','B','B','D','C'];
//correct ans in order

const form = document.querySelector('.quiz-form');

const resultClass = document.querySelector('.result');



form.addEventListener('submit', e=>{
    e.preventDefault();

    let score = 0;

    const userAns = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value,form.q7.value,form.q8.value,form.q9.value,form.q10.value];

    //checking the ans;
    scrollTo(0,0);
    userAns.forEach((answer,index)=>{
        if(answer=== correctAnswers[index])
            score+=10;
    });

    // console.log(score);

    
    resultClass.classList.remove('d-none');

    let temp = 0;
    const timer = setInterval(() => {
        resultClass.querySelector('span').textContent = `${temp}%`;
        if(temp===score){
            clearInterval(timer);
        }
        else 
            temp++;
    }, 5);
});


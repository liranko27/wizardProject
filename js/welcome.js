//elements 
const aggrement = document.querySelector('#agreement')
const agreeWrap = document.querySelector('.agree-wrap')
const continueBtn = document.querySelector('.continue-btn')

continueBtn.addEventListener('click',()=>{
    if(aggrement.checked){
        console.log('Yes')
        createFormFlowObj()
        initWizardDetailsObj()
    }
    else{
        agreeWrap.classList.add('wrong-input')
    }
})

function createFormFlowObj(){
    const formFlow = {
        welcome:true,
        phase1:false,
        phase2:false,
        phase3:false,
        phase4:false,
    }
    localStorage.setItem('formFlow',JSON.stringify(formFlow))
}

function initWizardDetailsObj(){
    const wizardDetailsObj={
        phase1:{
            fullName:'',
            email:'',
            birthDate:'',
        },
        phase2:{
            city:'',
            street:'',
            num:'',
        },
        phase3:{
           imgSrc:'',
           hobbies:[], 
        },
    }
    localStorage.setItem('wizardDetailsObj',JSON.stringify(wizardDetailsObj))
}
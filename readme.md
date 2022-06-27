# Wizard project

Welcome page:
form with check box and continue to phase1
add agree boolean value to welcome agree


Main concept:
iterate over formFlow all phases and count how many true inside and update progress bar

formFlow ={
    welcome:true,
    phase1:false,
    phase2:false,
    phase3:...
    phase4:...
}
wizardDetailsObj ={
    phase1:{
    fullName:'',
    email:'',
    birthDate:''
    },
    phase2:{
        ...
    },
    ...
}

Phases: 
check if welcome page is true if not open welcome page  if(formFlow.phase1)=> load page else error page link to welcome page
//Ex. wizardDetailsObj.phase1.fullName= user input
if all input are valid let the user click on next button and fill all details in wizardDetailsObj
if there are empty inputs change backround color to salmon and make change border to red


////////////////////
Work split: 
////////////////////
Welcome page: Liran
Phase1:Lior
Phase2:Bar
Phase3:Liran
Phase4:Lior
app.js:Bar




const btn=document.getElementById('add');
const updateLSdata= ()=>{
const textarea=document.querySelectorAll('textarea');
const note1=[]
textarea.forEach(element => {
    return note1.push(element.value)
});
console.log(note1)
localStorage.setItem('note', JSON.stringify(note1));
}
function addnode(text=''){
    const notes=document.createElement('div')
    notes.classList.add('note');
    console.log(text)

    const html=`   <div class="tools">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
</div>
<div id="main" class="main"></div>
<textarea class="" name="" id="" cols="30" rows="10"></textarea>`
    notes.insertAdjacentHTML('afterbegin',html);
    
        const del_btn=notes.querySelector('.delete');
        const edit_btn=notes.querySelector('.edit');
        const main=notes.querySelector('.main');
        const textarea=notes.querySelector('textarea');
        textarea.innerHTML = text
        main.innerHTML = text
        textarea.className=textarea.value==''?'':'hidden'
        main.className=textarea.value==''?'hidden':''
        
        edit_btn.addEventListener('click',()=>{
            
           
            textarea.classList.toggle('hidden');
            main.classList.toggle('hidden');
            updateLSdata()
            notes.style.overflowY=textarea.className=='hidden'?'scroll':'hidden';
        })
        del_btn.addEventListener('click',()=>{
            notes.remove();
            updateLSdata();
        })
        textarea.addEventListener('change',()=>{
            main.innerHTML=textarea.value;
           
           
    })
    


    document.body.appendChild(notes);
};
const note=JSON.parse(localStorage.getItem('note'));

if (note) { note.forEach((ele)=>{addnode(ele)

})
}
btn.addEventListener('click',()=>addnode() );



const div2 = document.getElementById('displayn2');
const body = document.querySelector('body');
// const btt = document.querySelector('button');
// btt.addEventListener('click',getchange);
// btt.addEventListener('click',getchange);
function dform(){
    const BlockP = document.createElement('div');
    BlockP.classList.add('dform');
    const divblock1 = document.createElement('div');
    divblock1.classList.add('block-1');
    divblock1.classList.add('bk');
    const divblock2 = document.createElement('div');
    divblock2.classList.add('block-2');
    divblock2.classList.add('bk');
    const divblock3 = document.createElement('div');
    divblock3.classList.add('block-3');
    divblock3.classList.add('bk');
    const divblock4 = document.createElement('div');
    divblock4.classList.add('block-4');
    divblock4.classList.add('bk');
    const divblock5 = document.createElement('div');
    divblock5.classList.add('block-5');
    divblock5.classList.add('bk');
    const divblock = document.createElement('div');
    divblock.classList.add('block');
    BlockP.append(divblock1,divblock2,divblock3,divblock4,divblock5,divblock);
    // BlockP.innerText = 'samree';
    body.append(BlockP);
}
function inform(){
    const divblock1 = document.createElement('div');
    divblock1.classList.add('block-1');
    divblock1.classList.add('bk');
    const divblock2 = document.createElement('div');
    divblock2.classList.add('block-2');
    divblock2.classList.add('bk');
    const divblock = document.createElement('div');
    divblock.classList.add('block');
    div2.append(divblock1,divblock2,divblock);
}
function getchange(){
    dform();
    inform();
    div2.classList.remove("display-none-2");
    // BlockP.classList.add("dform");
    div2.classList.add("bar-form");
}





(function(){
    const stageElem = document.querySelector('.stage');
    const houseElem = document.querySelector('.house');
    const barElem = document.querySelector('.progress-bar');
    const selectCharacterElem = document.querySelector('.select-character');
    const text = document.querySelector('.wall-title');
    const dayWallLeft = document.querySelector('.wall-left');
    const dayWallRight = document.querySelector('.wall-right');
    const wallLast = document.querySelector('.wall-last');
    const mousePos = { x:0, y:0 };
    let maxScrollValue;
    
    function resizeHandler(){
        maxScrollValue = document.body.offsetHeight - window.innerHeight;
    }

    window.addEventListener('scroll',function(){
        const scrollPer = this.pageYOffset / maxScrollValue;
        const zMove = scrollPer * 980 - 490;
        houseElem.style.transform = 'translateZ(' + zMove + 'vw)';
        
        // pregress bar
        barElem.style.width = scrollPer * 100 +'%';
        
    });
    resizeHandler();

    window.addEventListener('mousemove',function(e){
        // console.log(e.clientX,e.clientY); 
        mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
        mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;
        stageElem.style.transform = `rotateX(${mousePos.y*5}deg) rotateY(${mousePos.x*5}deg)`
    });

    window.addEventListener('resize', resizeHandler);

    stageElem.addEventListener('click',function(e){
        text.innerHTML='scroll'
        new Character({
            xPos:e.clientX / window.innerWidth * 100,
            speed: Math.random() * 0.5 + 0.2
        });
    });
    
    selectCharacterElem.addEventListener('click', function(e){
        const value = e.target.getAttribute('data-char');
        document.body.setAttribute('data-char',value);
    })

})();

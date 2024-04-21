document.addEventListener('DOMContentLoaded', function () {

    //set flag id from html into javascript
    const flag = document.getElementById('flag');
    const stripes = 13;
    const starsRows = 10; 

    
    for (let i = 0; i < stripes; i++) {
        const stripe = document.createElement('div');
        stripe.className = i % 2 === 0 ? 'stripe red ' : 'stripe white';
        flag.appendChild(stripe);
    }

    /* The loop will run 13x to crete stripes. Everytime it run a div is creted
    Now figure out odd vs even to crete a pattern for red & white.
    Even becomes red, odd white. Then add to flag container.

    For if statement, thoses are 2 seperate classes  
    that we creted in css. The loop & condition decdides how to 
    categroize our new elements so they are instantlly formatted.
    
    */


   
    const corner = document.createElement('div');
    corner.className = 'corner';
    flag.appendChild(corner);

    /* ^If you want to crete classes in js. Especially if you know
     the class only purpose is going to be in js handling
    */

    


    for (let row = 0; row < starsRows; row++) {
        for (let col = 0; col < 5; col++) { 
            const star = document.createElement('div');
            star.className = 'star';
            corner.appendChild(star);
        }
    }
  /* Two for loop to make rows. The inner loop creates 5 rows. The first loop add 10 stars per row.
   We know the overall loop can only run up to 10x bc of higharhcy condition.
    */

});
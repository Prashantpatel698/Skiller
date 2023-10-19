var right1 = document.querySelector(".right1")
var right2 = document.querySelector(".right2")
var right3 = document.querySelector(".right3")
var right = document.querySelector(".right")
var boxright=document.querySelector(".box-right")

boxright.addEventListener("mouseenter",function()
{
   boxright.style.backgroundColor=" #deea86"
   
})
boxright.addEventListener("mouseleave",function()
{
   boxright.style.backgroundColor="#57c123"
})


// right.addEventListener("mouseleave",function()
// {
//     right1.style.width="45%"
//     right1.style.width="45%"
// })

right1.addEventListener("mouseenter",function()
{
    right1.style.width="45%"
    right2.style.width="15%"
    right3.style.width="15%"
})
// right1.addEventListener("mouseleave",function()
// {
//     right1.style.width="45%"
//     right1.style.width="15%"
// })

    right2.addEventListener("mouseenter",function()
    {
        right1.style.width="15%"
        right2.style.width="45%"
        right3.style.width="15%"
        
       
    })
    right2.addEventListener("mouseleave",function()
    {
        right2.style.width="15%"
        right1.style.width="45%"
    })

    right3.addEventListener("mouseenter",function()
    {
        right1.style.width="15%"
        right2.style.width="15%"
        right3.style.width="45%"
                
       
    })
    right3.addEventListener("mouseleave",function()
    {
        right3.style.width="15%"
    })
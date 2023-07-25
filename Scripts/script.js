let readMoreButton = document.getElementById("read-more-button");

readMoreButton.addEventListener('click', function (event){
    console.log(readMoreButton);
    readMoreButton.previousElementSibling.innerHTML += "<br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, beatae doloribus id iusto necessitatibus\n" +
        "        sit tempora veniam. Adipisci aperiam asperiores atque autem et fugit impedit libero ratione velit! Ipsa,\n" +
        "        nobis."

    //readMoreButton.style.setProperty("visibility", "hidden");
    let newImage = document.createElement("img");
    newImage.setAttribute('src', 'Assets/icons/no-image.jpg');
    newImage.setAttribute('width', "200");
    newImage.setAttribute('height', "200");

    readMoreButton.parentElement.appendChild(newImage);
    readMoreButton.remove();
})

let mainTitle = document.getElementsByClassName("title").item(0);
let originalText = mainTitle.innerHTML;
let modifiedText = "";
let disabled = false;
for(let letter of originalText)
{
    if(letter == "<")
        disabled = true;

    if(disabled == false)
    modifiedText += "<span>" +letter+ "</span>";
    else
        modifiedText+=letter;

    if(letter == ">")
        disabled = false;

}
mainTitle.innerHTML = modifiedText;

document.querySelectorAll(".title span:not(.colored-accent)").forEach((span) =>{
    if(span.innerText === ' ')
        return;
    span.addEventListener('mouseover', ()=>{
        span.classList.add('spin-animation');
        setTimeout(()=> {
            span.classList.remove('spin-animation');
        }, 500);
    });
});

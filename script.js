const generateButton=document.querySelector('.button')
const memeTitle=document.querySelector('.meme-title')
const memeImage=document.querySelector('.meme-image')
const memeAuthor=document.querySelector('.author')



function getMeme()  {
    fetch('https://meme-api.com/gimme/wholesomememes')
    .then((res)=>res.json())
    .then((data)=>{
        const {author,title,url}=data
        memeAuthor.innerText= `Meme by : ${author}`
        memeImage.src=url
        memeTitle.innerText=title
       
    })
}
getMeme()
generateButton.addEventListener('click',()=>
{
    getMeme()
})
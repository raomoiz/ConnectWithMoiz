let tablinks = document.getElementsByClassName("tap-links")
let tabcontents = document.getElementsByClassName("tab-contents")
function opentab(tabname) {
   for (tablink of tablinks) {
      tablink.classList.remove("active-link");
   }
   for (tabcontent of tabcontents) {
      tabcontent.classList.remove("active-tab");
   }
   event.currentTarget.classList.add("active-link")
   document.getElementById(tabname).classList.add("active-tab")
}
var sidemeu = document.getElementById("sidemenu");
var open = document.getElementsByClassName("menu")
function openmenu() {
   sidemeu.style.right = "0";
}
function closemenu() {
   sidemeu.style.right = "-80%";
}

let texts = [" I specialize in crafting top-notch websites that not only look stunning but also excel in search engine optimization (SEO). Whether you need a stylish online presence, a robust e-commerce platform, or a feature-rich web application, I have the expertise to deliver a website that not only meets your unique needs but also ensures high visibility and ranking on search engines. Let's transform your online presence into a powerful asset for your business", "I specialize in Python development, delivering robust, efficient, and scalable solutions tailored to your specific needs. Whether you require web applications, data analysis tools, automation scripts, or machine learning models, I'm here to create Python-powered solutions that streamline your processes and drive results. Let's turn your ideas into reality through the power of Python", " I excel in web scraping, harnessing the capabilities of Python to extract valuable data from websites efficiently and accurately. Whether it's gathering market insights, tracking competitors, or aggregating information for research, I have the expertise to craft web scraping solutions that provide you with the data you need. Let's unlock the wealth of information available online and turn it into actionable insights for your business"]

let halfText = [texts[0].substring(0,125)+"..", texts[1].substring(0,122)+"..", texts[2].substring(0,130)+".."]
function addText(id, index) {
   let el = document.getElementById(id);
   if (el.innerHTML.length < texts[index].length) {
      el.innerHTML = texts[index]
      console.log(el.parentElement)
      let each_a = document.querySelectorAll(".each");
      each_a.forEach(element => {
         element.style.alignSelf = "flex-start";
      })
   }
   else{
      el.innerHTML = halfText[index]
      let each_a = document.querySelectorAll(".each");
      each_a.forEach(element => {
         element.style.alignSelf = "center";
         el.scrollIntoView({ behavior: "smooth" });

      })
   }
}




function transani(e){
    e.style.transform = "scale(0.1)"
    setTimeout(()=>{
    e.style.transform = "scale(1)"
    },500)

}

let img = document.getElementById("shown")
let img_src = img.getAttribute("src")
let all_img = document.getElementsByClassName("small_img")
function change_cer(im){
      img.setAttribute("src", im.getAttribute("src"))
      for (e of all_img){
        e.classList.add("blur")
      }
      im.classList.remove("blur")
      transani(img)

}
for (let i = 0; i < all_img.length; i++){
      all_img[i].addEventListener("click", () => {
            change_cer(all_img[i])
      })
}
let mode = document.getElementById('mode_icon')
let body = document.getElementsByTagName('html')
let images = document.getElementsByTagName('img')
let videos = document.getElementsByTagName('video')
mode.addEventListener("click", ()=>{
    body[0].classList.toggle("dark")
    for (im of images){
        im.classList.toggle("dark")
        im.classList.toggle("boder")
    }
    for (v of videos){
        v.classList.toggle("dark")
      v.classList.toggle("boder")
    }
    let src = mode.getAttribute("src")
    if (src == "/Images/light_icon.svg"){
        mode.setAttribute("src", "/Images/dark_icon.svg")
    }
    else{
        mode.setAttribute("src", "/Images/light_icon.svg")
    }
})

for (im of images){
   im.addEventListener("click", ()=>{
      im_src = im.getAttribute("src")
      let big_img = document.getElementById("big_img")
      let big_src = document.getElementById("img_src")
      big_src.setAttribute("src", im_src)
      big_img.classList.remove("disable")
      
   })
}
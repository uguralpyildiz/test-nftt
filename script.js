* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inconsolata', monospace;



}

html{
    scroll-behavior: smooth;
}
body {
    background: linear-gradient(to bottom, #898886 50%, #1A1310 50%);
    color: #fff;
    max-width: 1920px;
    min-width: 1020px;
}

nav{
    position: sticky;
    top: 0;
    z-index: 1000;
    visibility: hidden;
    transition: 2s ease all;
    opacity: 0;
}
.scroll-function{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    opacity: 1;
    transform: scale(1);
    transition: .5s ease all;
}
.main-container{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: .3s ease all;
}
.door-container{
    position: fixed;
    top: 0;
    width: 100%;
        height: 100%;
    transform: translateX(0px);
    z-index: -1;
    transition: .3s  cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.main-container img{
    z-index: -1;
    width: 100%;
    object-fit: contain;
}
.door-container img{
    z-index: 1;
    width: 100%;
    object-fit: contain;
}

.img-container{
   position: relative;
    width: 100%;
}
.mask-eff{
    height: 700px;
}
#rarity{
    position: absolute;
    top: 47%;
    width: 100%;
    z-index: 999;
}
#about{
    position: absolute;
    top: 29%;
    height: 30px;
    width: 100%;
    
    scroll-margin-top: 150px;
}
#secrets{
    position: absolute;
    top: 64%;
    height: 30px;
    width: 100%;
    
    scroll-margin-top: 150px;
}
#faq{
    position: absolute;
    top: 80%;
    height: 30px;
    width: 100%;
    
    scroll-margin-top: 150px;
}
.nav-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: #898886;

    border-radius: 5px;    
}

.nav-menu-header {
    display: none;
}

i {
    margin-right: 8px;
}



.nav-links-effect-container{
    top: -40px;
}
.nav-link {
    color: #fff;
    text-align: left;
    padding: 15px;
    padding-bottom: 20px;
    text-decoration: none;
    width: 120px;
    border-radius: 5px 5px 0 0;
    font-size: 18px;
    color: #ffffff;
    font-weight: 600;
    transition: .3s opacity ;
    height: 80px;
}

.nav-link:hover .link-numbers {
    color: #fff !important;
    
}

.nav-link-settings {
    display: flex !important;
    opacity: 1 !important;
    transform: scale(1) !important;
}

.nav-links {
    
    align-items: center;
   
}

.nav-links-effect-container {
    position: relative;
    display: flex;
    align-items: center;
    
}
.nav-links-effect-container a{
    width: 200px;
}
.dot-link-effect {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 120px;
    border-radius: 0%;
    
    background: transparent;
    transition: .4s ease all;
    z-index: 0;
    
    z-index: -1;
}



@keyframes dot-eff {
    0% {
        box-shadow: 0 0 10px #fff;
    }

    50% {
        box-shadow: 0 0 25px #fff;
    }

    100% {
        box-shadow: 0 0 10px #fff;
    }
}

.active0 {
    left: 0%;
}

.active1 {
    left: 20%;
}

.active2 {
    left: 40%;
}

.active3 {
    left: 60%;
}

.active4 {
    left: 80%;
}


.overlay{
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #00000099;
}


/* text-opactity */

/* #nth a:nth-child(n):hover~.dot-link-effect {
    box-shadow: 0 0 20px #fff;
} */

#nth a:nth-child(1):hover~.dot-link-effect {
    left: 0%;
}

#nth a:nth-child(2):hover~.dot-link-effect {
    left: 20%;
}

#nth a:nth-child(3):hover~.dot-link-effect {
    left: 40%;
}

#nth a:nth-child(4):hover~.dot-link-effect {
    left: 60%;
}

#nth a:nth-child(5):hover~.dot-link-effect {
    left: 80%;
}


.link-numbers {
    font-size: 15px;
    font-family: consolas;
    text-align: left;
    color: #fff;
    opacity: .50;
    transition: .3s;
}

.slash {
    letter-spacing: 4px;
}

.nav-title {
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 24px;
}

.link-anim-set {
    position: relative;
    top: 0;
    overflow: hidden;
}

.link-anim-set-p {
    position: relative;
    top: 0;
    transform-origin: bottom left;
}

.p1 {
    animation: link-anim ease-in-out .6s 1;
}

.p2 {
    animation: link-anim ease-in-out .8s 1;
}

.p3 {
    animation: link-anim ease-in-out 1s 1;
}

.p4 {
    animation: link-anim ease-in-out 1.2s 1;
}

.p5 {
    animation: link-anim ease-in-out 1.3s 1;
}


@keyframes link-anim {
    0% {
        transform: scale(.5);

        top: 100px;
        opacity: 0;
    }

    33% {

        opacity: 0.50;
    }

    100% {
        opacity: 1;
        top: 0px;
    }
}

.download-cv {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    text-align: center;
    text-decoration: none;
    width: 165px;
    height: 50px;
    background: #5a518650;
    color: #fff;
    border: 2px dotted #5a5186;
    border-radius: 70px;
    font-size: 16px;
    cursor: pointer;
    z-index: 1;
    overflow: hidden;
    transition: .4s ease transform;
}

.download-cv:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px #00000080;
    border: 2px solid #5a5186;
}

.download-cv:active {
    transform: scale(0.90);
    box-shadow: 0 0 15px #00000080;
    border: 2px solid #5a5186;
}



.spinner-anim {
    position: relative;
    top: 0;
    animation: transformspin 1s ease;
}

@keyframes transformspin {
    0% {
        top: 100px;
    }

    100% {
        top: 0;
    }
}

.spinner {
    animation: rotate 1s linear infinite;
    z-index: 2;
    width: 27px;
    height: 27px;
}

.spinner .path {
    stroke: #ffffff;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes dash {
    0% {
        stroke-dasharray: 1, 150;
        stroke-dashoffset: 0;
    }

    50% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -35;
    }

    100% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -124;
    }
}

.download-cv i {
    font-size: 19px;
}

.download-cv::before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 150px;
    width: 100%;
    height: 100%;
    transform: rotate(-320deg);
    background: #5a5186;
    z-index: -1;
}

.download-cv:hover::before {
    animation: flashEffect 1s ease 3;
}

@keyframes flashEffect {
    0% {
        left: -150px;
    }

    100% {
        left: 150px;
    }
}

.download-text {
    position: relative;
    top: 0;
    transition: .6s;
    animation: downloadText ease .7s;
}

@keyframes downloadText {
    from {
        opacity: 0;
        top: 100px;
    }

    to {
        opacity: 1;
        top: 0px;
    }
}


.profile-img {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 60px;
    background: linear-gradient(to bottom, #1A1F25, #3d454e);
    margin: 0 20px;
    border-radius: 50%;

}

.profile-img img {
    height: 60px;
    width: 60px;
    border-radius: 50%;
}

.type-bar,
.job-bar {
    position: relative;
    font-size: 18px;
    margin-right: 3px;
}



.job-bar::after {
    content: "";
    position: absolute;
    top: 0;
    right: -2px;
    height: 100%;
    width: 2px;
    background: #fff;
    animation: blink 0.7s ease infinite;
}



.menu-btn {
    display: none;
}

.mask {
    height: 4000px;

}

.container {
    max-width: 1000px;
    min-width: 500px;
    margin: auto;
    /* background: #00000084;
    backdrop-filter: blur(7px); */
    border-radius: 5px;
}

.big-header{
    padding: 25px 0;
    margin: 15px 0;
    color: #fff;
    font-size: 64px;
    font-weight: 600;
    text-align: center;
    text-shadow: 0 5px #000000 !important;
}
.content-text{
    margin: 50px 0;
    text-shadow: 0 5px #000000 !important;
    padding: 20px;
}
.header {
    color: #fff;
    font-size: 42px;
    font-weight: 600;
    text-shadow: 0 5px #000000 !important;
    padding: 20px;

}
.content-alt{
    padding: 15px 0;
    font-size: 34px;
    color: #fff;
    font-weight: 600;
    text-shadow: 0 5px #000000 !important;
    padding: 20px;
}

.section {
    scroll-margin-top: 150px;
    padding: 25px 0;

}





#wave{
    position: relative;
    top: 5px;
}



.swiper-slide {
    position: relative;  
    overflow: hidden;
}

.oriantion{
    display: flex;
}

.swiper2 {
    width: 100%;
    margin: auto;
    height: auto;
}

.slider-container{
    position: relative;
    max-width: 1200px;
    overflow: hidden;
    
}
.buttons{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px;
}

/* .swiper-pagination{
    margin-bottom: 10px;
} */
.swiper-pagination-bullet{
    background:#fff !important;
    width: 10px !important;
        height: 10px !important;
}


.swiper-button-prev,.swiper-button-next{
    color: #fff !important;
}
.card-img{
    margin:20px ;
    width: 350px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 0 15px #00000030;
}
.card-header{
    text-align: left;
    font-size: 36px;
    margin-bottom: 15px;
    font-weight: 600;
    text-shadow: 0 5px #000000;
}
.card-title{
    padding: 25px;
    font-size: 26px;
    text-align: left;
    text-shadow: 0 5px #000000;
    font-weight: 600;
}


.swiper-pagination-bullet {
    font-size: 22px;
    font-weight: 600;
    width: auto !important;
    background: transparent !important;
    border: 3px solid transparent;
    border-radius: 0 !important;
    height: auto !important;
    padding: 15px;
}
.swiper-pagination-bullet {
    opacity: 1 !important;
}
.swiper-pagination-bullet-active {
    border: 3px solid rgb(255, 162, 0);
}










@media only screen and (max-width: 1270px) {
    
        #rarity{
            top: 44%;
        }
    .oriantion{
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 650px;
        margin: auto;
    }
 .s-btn{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    z-index: 9;
    height: 50px;
    width: 650px;
    margin: auto;
 }
           .card-title,
           .card-header {
               text-align: center;

    
           }
    .buttons{
        display: none;
    }

    .scroll-function{
        display: none;
    }
    .mask-eff{
        display: none;
    }
        
}





/* responsive tablet navbar start */
@media only screen and (min-width: 650px) {
    .overlay {
        display: none !important;
    }
}



@media only screen and (max-width: 650px) {



    .nav-links-effect-container a {
            width: 150px;
        }
    .nav-links-effect-container a img{
            width: 100px;
        }
}

@media only screen and (max-width: 640px) {

    .profile-img,
    .profile-img img {
        width: 50px;
        height: 50px;
    }

    .nav-container {
        padding: 12px 0;

    }

}

@media only screen and (max-width:455px) {
    .nav-links {
        width: 300px;

    }

    .nav-link {
        width: 260px;
    }
}

@media only screen and (max-width: 411px) {

    .nav-link {
        width: 250px;
    }

    .nav-links {
        width: 300px;
    }

    .nav-menu-header {
        padding: 0;

    }




    .nav-menu-header>.name-bar {
        font-size: 16px;
        padding: 13px;
    }

    .nav-menu-header>.name-bar>span {
        font-size: 13px;
    }

    .nav-link {
        font-size: 16px;
        padding: 15px;
    }

    .profile-img,
    .profile-img img {
        width: 40px;
        height: 40px;
        margin: 0 10px;
    }

    .nav-container {
        padding: 12px 0;

    }

    .name-bar {
        font-size: 16px;
    }

    .job-bar,
    .type-bar {
        font-size: 14px;
    }

    .menu-btn {
        font-size: 18px;
    }

}

@media only screen and (max-width:340px) {

    .nav-menu-header {
        padding: 10px 0 0;
        flex-direction: column;
        text-align: center;
    }

    .nav-links {

        width: 250px;

    }

    .download-cv {
        font-size: 13px;
        height: 50px;
        width: 150px;
    }

    .nav-link {
        width: 200px;
    }
}

@media only screen and (max-width: 300px) {

    .profile-img,
    .profile-img img {
        width: 30px;
        height: 30px;
        margin: 0 8px;
    }

    .nav-container {
        padding: 12px 0;

    }

    .name-bar {
        font-size: 14px;
    }

    .job-bar,
    .type-bar {
        font-size: 12px;
    }

    .menu-btn {
        font-size: 16px;
    }

    .nav-links {
        padding: 5px;
        width: 200px;
    }

    .nav-link {
        font-size: 14px;
        padding: 10px;
        width: 150px;
    }

    .download-cv {
        height: 40px;
    }
}

/* responsive tablet navbar end */

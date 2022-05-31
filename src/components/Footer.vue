<template>
    <div class="footer container-fluid">
        <div class="container">
                <div class="footer-row row g-0 d-none d-xl-flex">

                    <div class="col-6 col-sm-3 p-0">
                        <div class="extra">
                            <div class="logo-links-container">
                                <div id="logo-box"><a href="/"><img src="../assets/img/whitelogo.png" alt=""></a></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 p-0">
                        <div class="navigation">
                            <div class="nav">  
                                <router-link to="/about">About</router-link> 
                                <router-link to="/events">Events</router-link> 
                                <router-link to="/contact">Contact</router-link> 
                                <a href="">Start-ups</a>
                                <a href="https://techhubinvest.com/">Investors</a>
                                <router-link to="/admin" class="mb-3">Admin</router-link>
                            </div>
                        </div>
                        <router-view/>
                    </div>
                    <div class="col-sm-3 p-0">
                        <a href="" target="_blank" class="some-icon-container me-3" >
                            <img src="../assets/img/linkedin.svg" width="24" height="21" alt="linkedin" >
                        </a>

                        <a href="" target="_blank" class="some-icon-container me-3">
                                <img src="../assets/img/facebook-f-light.svg" width="24" height="21" alt="facebook">
                        </a>
                        
                        <a href="" target="_blank" class="some-icon-container me-3">
                        <img src="../assets/img/twitter.svg" width="24" height="21" alt="twitter">
                        </a>

                        <a href="" target="_blank" class="some-icon-container">
                        <img src="../assets/img/youtube.svg" width="24" height="21" alt="youtube" >
                        </a>
                    </div>

                    <div class="col-12 p-0">
                        <div id="rights-container">
                            <div id="rights"><p>2022 © Techhub Syd. All rights reserved.</p></div>
                        </div>
                    </div>
            </div>
             <div class="mobile-menu-container d-flex d-xl-none align-items-center justify-content-between">
               
                    <div class="logo-container-mobile d-flex col-1 justify-content-center align-items-center">
                            <a href="/"> <div class="image-container-mobile"> </div> </a>
                    </div>
                    
                    <a href="#" class="nav-mobile d-flex d-xl-none justify-content-end align-items-center" @click="showMobileMenu = true" >
                        <div class="burgermenu-container-mobile"> </div> 
                    </a>
                    
                    
            </div>
        </div>

         <div v-if="showMobileMenu" class="col-12 col-sm-12 d-flex d-xl-none  menu-modal align-items-center  justify-content-center"  >
            <div class="container ">
                <div class="row d-flex flex-column justify-content-center align-items-center">
                        <span class="close-btn"  @click="showMobileMenu = false" > 
                            <img src="../assets/img/bars-solid-x.svg" width="30" height="30" alt="close"  > 
                        </span>
                      
                        <div class="position-absolute d-flex flex-column  justify-content-center col-sm-6 col6-6" > 
                            <div class="navigation-mobile d-flex flex-column" @click="showMobileMenu = false">
                                     <div class="logo-container-mobile d-flex col-12 justify-content-center align-items-start mb-5">
                                        <a href="/"> <div class="image-container-mobile"> </div> </a>
                                    </div>
                                    <router-link to="/" class="mb-3">HOME</router-link>
                                    <router-link to="/about" class="mb-3">ABOUT</router-link>
                                    <router-link to="/events" class="mb-3">EVENTS</router-link>
                                    <router-link to="/contact" class="mb-3">CONTACT</router-link>
                                    <a href="#" class="mb-3">START-UPS</a>
                                    <a href="https://techhubinvest.com/">INVESTORS</a>
                                    <router-link to="/admin" class="mb-3">ADMIN</router-link>
                            </div>
                            
                           
                            <div class="line-mobile-nav my-5">

                            </div>
                            <h3 class="mb-4 follow-us">
                                    FOLLOW US ON
                            </h3>
                            <div class="some d-flex justify-content-center align-items-center col-sm-12 col-12" >
                                      
                                    <a href="" target="_blank" class="some-icon-container me-4" >
                                        <img src="../assets/img/linkedin.svg" width="24" height="21" alt="linkedin" >
                                    </a>

                                    <a href="" target="_blank" class="some-icon-container me-4">
                                         <img src="../assets/img/facebook-f-light.svg" width="24" height="21" alt="facebook">
                                    </a>
                                    
                                    <a href="" target="_blank" class="some-icon-container me-4">
                                    <img src="../assets/img/twitter.svg" width="24" height="21" alt="twitter">
                                    </a>

                                    <a href="" target="_blank" class="some-icon-container">
                                    <img src="../assets/img/youtube.svg" width="24" height="21" alt="youtube" >
                                    </a>
                                
                            </div>
                        </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
  import {ref} from 'vue';

export default {
    setup() {
    
      let showMobileMenu = ref(false)
      return{
      
        showMobileMenu,
        
      }
    }
}
</script>

<style scoped lang="scss">
@import "../assets/shared.scss";
@include light-paragraph1;

.footer{
 background-color: $shadecolor;
}

.footer-row {
    display: flex;
    // background-color: $shadecolor;
    padding: 40px 0 40px 0;
}

.logo-links-container {
    display: flex;
    justify-content: flex-start;
    width: 85%;

    // Logo

    #logo-box {
        display: flex;
        align-items: center;
        width: 100%;

        img {
          width: 100%;
          object-fit: cover;
        }
    }
}

// Navigation 

.navigation {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        color: $backgroundcolor;
        text-decoration: none;
        font: normal normal 500 18px/27px Poppins;
        letter-spacing: 0px;
        margin: 0 15px;

        &:hover {
            color: $accentlightcolor;
        }

        &.router-link-exact-active {
            border-bottom: 2px solid $lightcolor;
        }
    }
}

// Soc. links

.some-icon-container{
    border: 1px solid $backgroundcolor;
    padding: 10px;
    transition: 0.3s;
    &:hover{
        background-color: $backgroundcolor;
        
    }
}
.soc-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 85%;

    .soc-links {
        display: flex;
        width: 75%;

        a {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            width: 100%;

            img {
                object-fit: cover;
                width: 65%;
                padding: 5px;
            }
        }
    }
}

#rights-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 20px;
    p{
        opacity: .60;
    }
}

// Extra 

.extra {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.mobile-menu-container {
    padding:20px 30px;
}

.image-container-mobile{
    background-image: url('../assets/img/logo-grayscale-inverted.png');
}

.burgermenu-container-mobile{
    background-image: url('../assets/img/bars-solid.svg');
    
}

.image-container-mobile,
.burgermenu-container-mobile {
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 50px;
    width: 50px;
}

.menu-modal{
  top:0;
  left: 0;
  position:fixed;
  z-index: 100;
  background-color: $basecolor;
  height: 100vh;
  width: 100vw;
//   transition: 0.5s;

  span{
  position: absolute;
  top: 40px;
right: 10%;
  font-size: 20px;
  color:$backgroundcolor;
  // font-weight: bold;
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  // text-transform: uppercase;
  cursor: pointer;
  }
  overflow: hidden;
}


.line-mobile-nav{
    height: 0;
    width: 100%;
    background-color: $backgroundcolor;
    border: 1.5px solid $backgroundcolor;
    opacity: 1;
    margin-right: 20px;
}

.follow-us{
    color: $backgroundcolor;
    text-decoration: none;
    font: normal normal 500 18px/27px Poppins;
    letter-spacing: 0px;
    margin: 0 15px;
}

.some-icon-container{
    border: 1px solid $backgroundcolor;
    padding: 10px;
    transition: 0.3s;
    &:hover{
        background-color: $backgroundcolor;
        
    }
}


.navigation-mobile {
        // width: 50%;
        display: flex;
        padding: 0 20px 0 0;

        a {
            color: $backgroundcolor;
            text-decoration: none;
            font: normal normal 500 18px/27px Poppins;
            letter-spacing: 0px;
            margin: 0 15px;

            &:hover {
                color: $accentlightcolor;
            }
        }
    }
</style>
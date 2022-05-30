<template>
    <div class="header container-fluid">
        <div class="container">
             <div class="header-row row d-none d-xl-flex">
                <div class="desktop-menu-container d-none d-xl-flex justify-content-between">
                        <div class="left-menu-container d-flex col-6 align-items-center justify-content-start" >
                            <div class="logo-container col-5 ">
                                <a href="/"> <div class="image-container "> </div> </a>
                            </div>
                            <div class="startup-invest-container d-flex g-2 col-6">
                                <div class="links-box me-3"><a href="">START-UPS</a></div>
                                <div class="links-box "><a href="https://techhubinvest.com/">INVESTORS</a></div>
                            </div>
                        </div>
                        <div class="right-menu-container col-6 d-flex align-items-center justify-content-end g-2">
                            <div class="navigation d-flex g-2">
                                        <router-link to="/" class="me-2">HOME</router-link>
                                        <router-link to="/about" class="me-2">ABOUT</router-link>
                                        <router-link to="/events" class="me-2">EVENTS</router-link>
                                        <router-link to="/contact" class="">CONTACT</router-link>
                                </div>
                                <div id="btn-box">
                                    <button type="button" class="btn btn-primary btn-lg" @click="$router.push('contact')">LET'S TALK</button>
                                </div>

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
                                    <a href="#" class="mb-3">FAQ</a>
                                    <a href="#" class="mb-3">START-UPS</a>
                                    <a href="https://techhubinvest.com/">INVESTORS</a>
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
.header-row {
    // display: flex;
    // background-color: $basecolor;
    padding: 10px 0;
}

.mobile-menu-container {
    padding:20px 30px;
}

.close-btn{
    // padding:0px 30px;
}
.header{
    background-color: $basecolor;
}

.image-container-mobile{
    background-image: url('../assets/img/logo\ grayscale\ inverted.svg');
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

.image-container{
    background-image: url('../assets/img/logo-whitetext_1.svg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 100px;
    width: 100%;
}


 a {
                text-align: center;
                text-decoration: none;
                font: normal normal 500 18px/27px Poppins;
                letter-spacing: 0px;
                color: $backgroundcolor;
                opacity: 1;

                &:hover {
                    color: $accentlightcolor;
                }
            }

.logo-links-container {
    display: flex;
    justify-content: flex-start;
    // width: 85%;

    // Logo

    #logo-box {
      display: flex;
      align-items: center;
      width: 45%;
      
      img {
        width: 100%;
        object-fit: cover;
      }
    }

    // Links



    #links-box-container {
        display: flex;
        align-items: center;
        margin-left: 30px;


        .links-box {
            display: flex;
            align-items: center;
            margin: 0 15px;

            a {
                text-align: center;
                text-decoration: none;
                font: normal normal 500 18px/27px Poppins;
                letter-spacing: 0px;
                color: $backgroundcolor;
                opacity: 1;

                &:hover {
                    color: $accentlightcolor;
                }
            }
        }
    } 
}

.navigation {
        // width: 50%;
        display: flex;
        justify-content: flex-end;
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

            &.router-link-exact-active {
              border-bottom: 2px solid $lightcolor;
            }
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

            // &.router-link-exact-active {
            //   border-bottom: 2px solid $lightcolor;
             
            // }
        }
    }

#btn-box {
        // width: 20%;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .btn {
            border: 1px solid $lightcolor;
            opacity: 1;
            border-radius: 0;
            opacity: 1;
            background-color: $basecolor;
            transition: 0.3s;
            &:hover{
                background-color: $lightcolor;
                color: $basecolor;
                border: 1px solid $basecolor;
            }
        }
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

// .mobile-menu-container {
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   object-fit: cover;
// }

// #nav-container {
//     // width: 85%;
//     display: flex;
//     justify-content: flex-end;
//     align-items: center;

//     // Navigation

//     .navigation {
//         // width: 50%;
//         display: flex;
//         justify-content: flex-end;
//         padding: 0 20px 0 0;

//         a {
//             color: $backgroundcolor;
//             text-decoration: none;
//             font: normal normal 500 18px/27px Poppins;
//             letter-spacing: 0px;
//             margin: 0 15px;

//             &:hover {
//                 color: $accentlightcolor;
//             }

//             &.router-link-exact-active {
//               border-bottom: 2px solid $lightcolor;
//             }
//         }
//     }

//     // Buttons

//     #btn-box {
//         // width: 20%;
//         display: flex;
//         align-items: center;
//         justify-content: flex-end;

//         .btn {
//             border: 1px solid $lightcolor;
//             opacity: 1;
//             border-radius: 0;
//             opacity: 1;
//             background-color: $basecolor;
//         }
//     }
// }

// Extra

.extra {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
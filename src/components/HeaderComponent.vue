<template>
    <div class="header">
        <div class="header-row row g-0">
            
            <div class="col-sm-1 p-0"></div>
            <div class="col-6 col-sm-4 p-0">
                <div class="logo-links-container">
                    <div id="logo-box"><img src="../assets/img/logo.svg" alt=""></div>
            
                    <div class="links-box"><a href="">START-UPS</a></div>
                    <div class="links-box"><a href="https://techhubinvest.com/">INVESTORS</a></div>
                </div>
            </div>

            <div class="col-6 col-sm-5 p-0">
                <div class="navigation">
                    <div class="nav">  
                        <router-link to="/">Homepage</router-link> |
                        <router-link to="/events">Events</router-link> |
                        <router-link to="/admin">Admin</router-link>
                    </div>
                </div>
                <router-view/>
            </div>
            <div class="col-sm-1 p-0">
                <div id="btn-box">
                    <button type="button" class="btn btn-primary btn-lg">LET'S TALK</button>
                </div>
            </div>
            <div class="col-sm-1 p-0"></div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="scss">
@import "../assets/shared.scss";

.header-row {
    display: flex;
    background-color: $basecolor;
    padding: 20px 0 20px 0;
}

.logo-links-container {
    display: flex;
    justify-content: start;
    width: 100%;

    // Logo

    #logo-box {
      display: flex;
      align-items: center;  
      img {
          object-fit: cover;
          height: 65px;
      }
    }

    // Links

    .links-box {
        display: flex;
        align-items: center;
        margin: 0 10px;

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

// Navigation 

.navigation {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0 20px 0 0;

    a {
        font-weight: 500;
        color: $backgroundcolor;

        &.router-link-exact-active {
          color: $accentlightcolor;
        }
    }
}

// Button

#btn-box {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    .btn {
        border: 1px solid $lightcolor;
        opacity: 1;
        border-radius: 0;
        opacity: 1;
        font-size: 18px;
        background-color: $basecolor;
    }
}
</style>
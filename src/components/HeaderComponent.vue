<template>
    <div class="header">
        <div class="header-row row g-0">
            
            <div class="col-sm-1 p-0"></div>
            <div class="col-6 col-sm-4 p-0">
                <div class="logo-container">
                    <div class="logo-box">
                        <img src="../assets/img/logo.svg" alt="">
                    </div>
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

// Logo

.logo-container {
    display: flex;
    justify-content: start;
    width: 100%;

  .logo-box {
    display: flex;
    align-items: center;

    img {
        object-fit: cover;
        height: 65px;
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
        font-weight: normal;
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
        background: transparent linear-gradient(108deg, #F5F5F54D 0%, #10041C00 100%) 0% 0% no-repeat padding-box;
        border: 1px solid $lightcolor;
        border-radius: 0;
        opacity: 1;
        font-size: 18px;
    }
}
</style>
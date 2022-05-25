<template>
    <div class="header">
        <div class="header-row row g-0">
            
            <div class="col-6 p-0">
                <div class="extra">
                    <div class="logo-links-container">
                        <div id="logo-box"><img src="../assets/img/logo.png" alt=""></div>

                        <div class="links-box"><a href="">START-UPS</a></div>
                        <div class="links-box"><a href="https://techhubinvest.com/">INVESTORS</a></div>
                    </div>
                </div>
            </div>

            <div class="col-6 p-0">
                <div class="extra">
                    <div id="nav-container">
                        <div class="navigation">
                            <div class="nav">  
                                <router-link to="/">Homepage</router-link> |
                                <router-link to="/events">Events</router-link> |
                                <router-link to="/admin">Admin</router-link>
                            </div>
                        </div>
                        <router-view/>

                        <div id="btn-box">
                            <button type="button" class="btn btn-primary btn-lg">LET'S TALK</button>
                        </div>
                    </div>
                </div>
            </div>
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
    justify-content: flex-start;
    width: 85%;

    // Logo

    #logo-box {
      display: flex;
      align-items: center;
      width: 35%;
      
      img {
        width: 100%;
        object-fit: cover;
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

#nav-container {
    width: 85%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    // Navigation

    .navigation {
        width: 50%;
        display: flex;
        justify-content: flex-end;
        padding: 0 20px 0 0;

        a {
            font-weight: 500;
            color: $backgroundcolor;

            &.router-link-exact-active {
              color: $accentlightcolor;
            }
        }
    }

    // Buttons

    #btn-box {
        width: 20%;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .btn {
            border: 1px solid $lightcolor;
            opacity: 1;
            border-radius: 0;
            opacity: 1;
            background-color: $basecolor;
        }
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

</style>
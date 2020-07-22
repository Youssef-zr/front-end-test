<template>
  <div class="header scroll">
    <sp-nav></sp-nav>
    <div class="overlay"></div>
    <div class="b-position">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-7">
            <div class="subscription">
              <h2>
                just drive.
                <br />we'll do the rest.
              </h2>
              <p>all-inclusive,usage-based subscriptions.</p>
              <div class="form-subscribe">
                <form action>
                  <div class="input">
                    <input type="text" placeholder="phone number..." />
                  </div>
                  <div class="submite">
                    <a href="#" type="submit" class="special-btn">get started</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-xs-8 col-sm-6 col-md-5 img-subs">
            <div class="subs-image">
              <img src="dist/img/car1.gif" alt="care 1 image" class="img-responsive" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="our-sponsore">
            <div class="col-md-10">
              <div class="sponsore">
                <img src="dist/img/sponsore.png" alt />
              </div>
            </div>
            <div class="col-md-2">
              <div class="scroll-down">
                <a href="#" class="sc-to-business" data-scroll='business'>
                  <i class="fa fa-arrow-down" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import spNav from "@/components/nav";
export default {
  data() {
    return {};
  },
  components: {
    spNav
  }
};
</script>

<style lang="scss" scoped>
.header {
  height: 100vh;
  background: url('../../public/dist/img/garage.jpg') no-repeat center top #222;
  background-size: cover;

  padding-top: 70px;
  text-transform: capitalize;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    .overlay{
      position:absolute;
      top:0;
      left:0;
      width: 100%;
      height: 100%;
      background:rgba(62, 25, 87, 0.4)

    }
  .b-position {
    height: 100%;
    display: flex;
    align-items: flex-end;
    align-content: space-between;
  }
  .subscription {
    h2 {
      font-size: 38px;
      font-weight: bolder;
      color: #fff;
      line-height: 50px;
    }
    p {
      color: #eee;
      margin: 25px 0;
    }
    .form-subscribe {
      .input {
        width: 45%;
        margin-right: 40px;
        float: left;
        input {
          display: block;
          width: 100%;
          border: none;
          border-bottom: 1px solid azure;
          background: transparent;
          padding: 10px 6px;
          color: azure;
          text-transform: capitalize;
          font-size: 15px;
          &::placeholder {
            color: azure;
          }
        }
      }
      .submite {
        width: calc(100% - 55%);
        float: left;
        padding-top: 10px;
      }
    }
  }
  @media (max-width: 992px) {
    .img-subs {
      // background: red;
      height: 200px;
      position: absolute;
      top: 40%;
      right: 3px;
      transform: translateY(-100px);
      .subs-image {
        img {
          height: 100%;
          float: right;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .img-subs {
      // background: red;
      overflow: hidden;
      height: 150px;
      position: absolute;
      top: 38%;
      right: 5%;
      transform: translateY(-100px);
      .subs-image {
        height: 100%;
        img {
          float: right;
        }
      }
    }
  }

  .sponsore {
    width: 100%;

    img {
      position: relative;
      z-index: 2;
      margin-top: 50px;
      width: 100%;
    }

    @media (max-width: 992px) {
      img {
        margin-top: 20px;
      }
    }
  }
  .scroll-down {
    // background: red;
    margin-top: 50px;
    display: flex;
    height: 60px;
    width: 100%;
    align-items: center;
    justify-content: center;
    transition: ease 3s;
    @media (max-width: 992px) {
      margin-top: 10px;
    }
    a {
      color: rgb(253, 252, 252);
      &:hover {
        color: rgb(228, 225, 225);
      }
    }
  }
  .special-btn {
    background: #e3e5e6;
    padding: 18px 35px !important;
    border-radius: 20px;
    color: #eee;
    background: #45b9fc;
  }
}
</style>
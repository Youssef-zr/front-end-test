<template>
  <div class="nav">
    <div class="container">
      <div class="row">
        <a class="toggle-nav">
          <i class="fa fa-bars"></i>
        </a>
        <div class="col-md-2">
          <div class="logo">
            <h3>
              <img src="dist/img/logo-1.png" alt class="img-responsive" />
            </h3>
          </div>
        </div>
        <div class="col-md-10">
          <ul class="links" id="navigation">
            <li class="link-item">
              <a href="#" class="active" data-scroll="header">
                <i class="fa fa-circle"></i> Personal
              </a>
            </li>
            <li class="link-item">
              <a href="#" data-scroll="business">
                <i class="fa fa-circle"></i> Business
              </a>
            </li>
            <li class="link-item">
              <a href="#" data-scroll="about">About</a>
            </li>
            <li class="link-item">
              <a href="#" data-scroll="pricing">Pricing</a>
            </li>
            <li class="link-item">
              <a href="#" data-scroll="FAQ">FAQ</a>
            </li>
            <li class="link-item">
              <a href="#" data-scroll="contact-us">Contact Us</a>
            </li>
            <li class="link-item">
              <a href="#" class="disabled">Login</a>
            </li>
            <li class="link-item">
              <a href="#" class="disabled special-btn">Join now</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

.nav {
  position: fixed;
  background: #f6f5f8;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  .toggle-nav {
    position: absolute;
    right: 30px;
    top: 15px;
    color: #696a8d;
    font-size: 25px;
    transition: ease 0.5s;
    cursor: pointer;
    z-index: 999;
    &:hover i {
      color: #72738e;
    }
    @media (min-width: 992px) {
      display: none;
    }
    &.opned {
      transform: rotate(90deg);
    }
  }
  .logo {
    position: relative;
    cursor: pointer;
    h3 {
      font-weight: 600;
      color: #72738e;
      font-family: Arial, Helvetica, sans-serif;
      letter-spacing: -1px;
      width: 100px;
      @media (min-width: 992px) {
        margin: 18px auto 15px;
      }
    }
  }
  .links {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    @media (max-width: 992px) {
      // display: none;
      display: block;
      width: 250px;
      position: fixed;
      top: 60px;
      margin-top: 10px;
      right: -100%;
      transition: ease 0.5s;
      z-index: 999;

      .link-item {
        background: #333456;
        text-align: right;
        margin-bottom: 10px;
        border: 1px solid #fff;
        transition: ease 0.5s;
        &:hover {
          opacity: 0.9;
          margin-right: 10px;
        }
        a {
          display: inline-block;
          padding: 15px !important;
          color: #fff;
          position: relative;
          transition: ease 0.5s;
          &:hover,&:link {
            text-decoration: none;
            color: #b2b3bd;
          }
          &.active {
            color: #d1d2d4;
            transition: ease 0.5s;
            margin-right:10px;

            &::after {
              content: "";
              position: absolute;
              top: 10px;
              left: 15px;
              width: calc(100% - 30px);
              height: 1px;
              background-color: #fff;
            }
          }
        }
      }
      &.nav-active {
        right: 3px;
        z-index: 9999;
      }
      .special-btn {
        background: transparent !important;
      }
    }
    @media (min-width: 992px) {
      .link-item {
        a {
          padding: 34px 15px 28px;
          color: #9190a3;
          font-family: Arial, Helvetica, sans-serif;
          transition: ease 0.3s;
          position: relative;
          top: 22px;
          z-index: 999;
          font-size: 14px;
          &.active {
            color: #363651;
            &::after {
              content: "";
              position: absolute;
              top: 10px;
              left: 15px;
              width: calc(100% - 30px);
              height: 1px;
              background-color: #363651;
            }
          }
          i.fa-square {
            border-radius: 50% !important;
            background: rebeccapurple;
          }
          &:hover,
          &:focus {
            color: #696a8d;
            text-decoration: none;
          }
        }
      }
    }
    .special-btn {
      background: #e3e5e6;
      padding: 14px 25px !important;
      border-radius: 20px;
      color: #555;
    }
  }
}
</style>

<script>

</script>
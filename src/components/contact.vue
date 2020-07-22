<template>
  <div class="contact-us scroll">
    <div class="container border-top">
      <div class="row">
        <div class="col-sm-8">
          <div class="col-xs-4">
            <div class="contact-links">
              <div class="title">
                <h4>product</h4>
              </div>
              <ul class="links">
                <li class="link">
                  <a href="#">personal</a>
                </li>
                <li class="link">
                  <a href="#">business</a>
                </li>
                <li class="link">
                  <a href="#">pricing</a>
                </li>
                <li class="link">
                  <a href="#">log in</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-xs-4">
            <div class="contact-links">
              <div class="title">
                <h4>company</h4>
              </div>
              <ul class="links">
                <li class="link">
                  <a href="#">about</a>
                </li>
                <li class="link">
                  <a href="#">blog</a>
                </li>
                <li class="link">
                  <a href="#">careers</a>
                </li>
                <li class="link">
                  <a href="#">contact us</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-xs-4">
            <div class="contact-links">
              <div class="title">
                <h4>help center</h4>
              </div>
              <ul class="links">
                <li class="link">
                  <a href="#">FAQ</a>
                </li>
                <li class="link">
                  <a href="#">insurance</a>
                </li>
                <li class="link">
                  <a href="#">agreement</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-0">
          <div class="contact-links">
            <div class="title">
              <h4>Stay in touch</h4>
            </div>
            <div class="privacy">
              <p>join our mailing list to get updates . We respect your privacy</p>
            </div>
            <div class="email-adress">
              <input type="text" placeholder="Email adress..." />
              <a href="#" class="icon">
                <i class="fa fa-send"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-8 col-md-offset-1">
          <div class="copyright">
            <ul class="copy">
              <li class="logo">
                <img src="dist/img/logo-1.png" alt="logo" class="img-responsive" />
              </li>
              <li class="inc">
                <span>Copyrigth &copy; 2019 Upshift, inc</span>
              </li>
              <li class="social">
                <a href="#" class="img-circle">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="#" class="img-circle">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#" class="img-circle">
                  <i class="fa fa-yelp"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- start icon slide up -->
      <div
        class="slide-up hidden-xs"
        data-toggle="tooltip"
        data-trigger="hover"
        title="Slide To Top"
      >
        <i class="fa fa-angle-double-up fa-fw fa-2x"></i>
      </div>
      <!-- end icon slide up -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss'>
body {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.contact-us {
  background: #f6f5f8;

  .border-top {
    padding: 50px 0;
    border-top: 1px solid #ccc;
  }
  .contact-links {
    .title {
      color: #555;
      text-transform: uppercase;
      h4 {
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 20px;
      }
    }
    .links {
      .link {
        padding: 10px 0;
        a {
          text-transform: capitalize;
          color: #555;
          transition: ease 0.4s;
          &:hover {
            color: #777;
            text-decoration: none;
          }
        }
      }
    }
    .privacy {
      p {
        color: #555;
        font-size: 13px;
        text-transform: capitalize;
        margin: 10px 0 30px;
      }
    }
    .email-adress {
      width: 100%;
      background: #e6e8ea;
      border-radius: 50px;
      padding: 18px;
      position: relative;
      input {
        width: 100%;
        border: none;
        background: transparent;
        padding: 0 40px 0 15px;
        color: #777;
        text-transform: capitalize;
        &::placeholder {
          color: #777;
        }
      }
      .icon {
        position: absolute;
        right: 10px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #72738e;
        top: 10px;
        text-align: center;
        color: #fff;
        transition: ease 0.3s;
        i {
          transform: rotate(35deg);
          margin-top: 10px;
        }
        &:hover {
          background: #555;
          color: #eee;
        }
      }
    }
  }
  .copyright {
    ul.copy {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
      align-items: center;
      // background:red;
      margin-top: 40px;
      li.logo {
        width: 100px;
        cursor: pointer;
      }
      li.inc {
        color: #555;
      }
      li.social {
        a {
          width: 35px;
          height: 35px;
          display: inline-block;
          border-radius: 50%;
          background: #e6e8ea;
          color: #727290;
          text-align: center;
          position: relative;
          transition: ease 0.4s;
          &:not(:last-of-type) {
            margin-right: 10px;
          }
          &:hover {
            background: #7d7d91;
            color: #eee;
          }
          i {
            position: absolute;
            top: 10px;
            left: 11px;
          }
        }
      }
    }
  }

  /* start icon slide up */
  .slide-up {
    position: fixed;
    right: 40px;
    bottom: 90px;
    background: #333456;
    color: white;
    text-align: center;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 18px;
    overflow: hidden;
    cursor: pointer;
    z-index: 10;
    display: none;
  }

  .bg-white {
    background: #eeeeee60;
    border: 2px solid white;
  }

  .slide-up i.fa {
    position: absolute;
    left: 2px;
    top: 12px;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;

    animation: infinite slide-animation 0.7s backwards alternate-reverse;
  }

  /* Safari 4.0 - 8.0 */
  @-webkit-keyframes slide-animation {
    0% {
      color: #f0ad4e;
      top: 2px;
    }
    25% {
      color: rgb(253, 253, 252);
    }
    50% {
      color: #ff7300;
    }
    75% {
      color: white;
    }
    100% {
      color: #ff7300;
      top: 15px;
    }
  }

  /* Standard syntax */
  @keyframes slide-animation {
    0% {
      color: #f0ad4e;
      top: 2px;
    }
    25% {
      color: rgb(253, 253, 252);
    }
    50% {
      color: #ff7300;
    }
    75% {
      color: white;
    }
    100% {
      color: #ff7300;
      top: 15px;
    }
  }

  /* end icon slide up */
}
</style>
<template>
  <div class="about scroll">
    <div class="container">
      <div class="row pos-relative">
        <div class="col-sm-12 col-md-8 col-md-offset-4">
          <div class="services-zone">
            <div class="col-sm-12 col-md-10 col-md-offset-1">
              <div class="shared-style">
                <div class="mini-dsc">
                  <span class="number">03</span>
                  <span>service zone</span>
                </div>
                <div class="title">
                  <h3 class="text-muted">We've got SF covered</h3>
                </div>
                <div class="desc">We provide two delivery options for any trip:</div>
              </div>
              <div class="our-services">
                <div class="service">
                  <div class="icon">
                    <i class="fa fa-check"></i>
                  </div>
                  <div class="service-desc">
                    <h3>Concierge service ( 8am - 8pm daily )</h3>
                    <p>
                      We deliver or pick up at your doorstep . Always
                      have a parking spot right out front , just for you.
                    </p>
                  </div>
                </div>
                <div class="service">
                  <div class="icon">
                    <i class="fa fa-check"></i>
                  </div>
                  <div class="service-desc">
                    <h3>Self service ( 24/7 )</h3>
                    <p>
                      We deliver within 3 blocks and unlock it whenever
                      you are ready. Park anywhere legal in our zone.
                      lock up and walk away to return. More flexibility on
                      timing,especially for starting early or ending late.
                    </p>
                  </div>
                </div>
              </div>
              <div class="more">
                <div class="img img-circle">
                  <img src="dist/img/default.png" alt="learn more image" class="img-responsive" />
                </div>
                <div class="content">
                  <h5>Outside of SF?</h5>
                  <p>
                    Tell us where to exoand
                    <i class="fa fa-arrow-right"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="clearfix"></div>
        <div class="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-0 car-image">
          <div class="image">
            <img src="dist/img/Insurance.jpg" alt="service car image" class="img-responsive" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang='scss' scoped>
.about {
  padding: 90px 0 10px;
  .pos-relative {
    position: relative;
  }
  .services-zone {
    background: #333456;
    overflow: hidden;
    padding: 70px;
    @media (max-width: 992px) {
      padding: 40px 10px;
    }
  }
  .our-services {
    margin: 20px 0 35px;
    border-bottom: 1px solid #eeee;
    padding-bottom: 25px;
    .service {
      margin-bottom: 8px;
      display: flex;
      flex-direction: row;
      // background: red;
      // align-items: center;
      .icon {
        // flex-grow: 1;
        margin: 22px 22px 0 0;
        color: #eee;
      }
      .service-desc {
        h3 {
          color: #eee;
          margin-bottom: 10px;
          line-height: 1.4;
          font-size: 18px;

          @media (max-width: 1200px) {
            font-size: 16px;
          }
        }
        p {
          color: #999;
          word-wrap: break-word;
        }
      }
    }
  }
  .car-image {
    @media (max-width: 992px) {
      .image {
        height: 300px;
        text-align: center;
        // background: #333456;
        padding: 40px 0;
        border-top: 1px solid #eee;
        margin-top: 10px;
        img {
          margin: auto;
          height: 100%;
        }
      }
    }
    @media (min-width: 992px) {
      position: absolute;
      bottom: -30px;
      left: 30px;
      height: 100%;
      .image {
        height: 70%;
        img {
          height: 100%;
        }
      }
    }
  }
}

.shared-style {
  .title {
    color: #fff;
    h3 {
      color: inherit;
    }
  }

  .desc {
    color: rgb(194, 192, 192);
  }
  .mini-dsc {
    color: #eee;
  }
}

.more {
  .content {
    h5 {
      color: rgb(185, 183, 183);
    }
    p {
      color: #fff;
    }
  }
}

.more {
  .img {
    width: 55px;
    height: 50px;
    padding: 8px;
    background: #eee;
    border-radius: 50%;
    margin-right: 15px;
  }
}
</style>
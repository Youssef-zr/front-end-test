<template>
  <div class="FAQ scroll">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-0">
          <div class="shared-style">
            <div class="mini-dsc">
              <span class="number">05</span>
              <span>the car</span>
            </div>
            <div class="title">
              <h3>
                Always Drive an
                <br />Identical Prius
              </h3>
            </div>
            <div class="desc">
              All our cars are the same so they feel familiar.
              No branding so you don't stick out.
              Fits 5 comfortably - or a surfboard , bicycle , or skiis.
              <br />
              <br />54 MPG hybrid gets you to tohie and back on a single tank? Phone mount , charging cables, and FasTrak included , Bluetooth and safty technology like adaptive cruise control , We use all natural doedorizers and cleaning supplies.
            </div>
          </div>
        </div>
        <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-0">
          <div class="cars-images">
            <div class="row">
              <div class="col-md-12 first-section">
                <div class="image">
                  <img src="dist/img/car2.png" alt="Faq car 1" class="img-responsive" />
                </div>
              </div>
              <div class="col-xs-8 col-xs-offset-2 col-sm-10 col-sm-offset-1 col-md-offset-0 col-md-12 secand-section">
                <div class="col-md-6">
                  <div class="image">
                    <img src="dist/img/car3.png" alt="Faq car 1" class="img-responsive" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="image">
                    <img src="dist/img/car4.png" alt="Faq car 1" class="img-responsive" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <div class="started">
            <div class="col-sm-6 text-right">
              <h3>
                Join instantly with $0 down
                <br />and get your car right now
              </h3>
            </div>
            <div class="col-sm-6 text-center btn-flex">
              <a href="#" class="special-btn">Get started</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.FAQ {
  margin-top: 100px;
  padding: 70px 0;
  background: #f6f5f8;
  @media (min-width: 1200px) {
    .cars-images {
      position: absolute;
      top: -150px;
    }
  }
  @media (max-width: 992px) {
    .cars-images {
      margin-top: 40px;
    }
  }
  .secand-section {
    margin-top: 50px;
    .image {
      margin-bottom: 30px;
    }
  }
  .started {
    margin: 30px 0 0;
    @media (min-width: 992px) {
      margin: 150px 0 50px;
    }
    // background: red;
    .special-btn {
      background: #72738e;
      padding: 14px 70px !important;
      border-radius: 20px;
      color: #eee;
    }
    h3{
      color:#333456;
    }
    @media (max-width: 768px) {
      h3 {
        text-align: center;
      }
    }
  }
  .btn-flex {
    overflow: hidden;
    height: 96px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
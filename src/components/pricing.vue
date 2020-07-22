<template>
  <div class="pricing scroll">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2">
          <div class="shared-style text-center">
            <div class="mini-dsc">
              <span class="number">05</span>
              <span>Pricing</span>
            </div>
            <div class="title">
              <h3>Monthly plans for less than a parking space</h3>
            </div>
            <div class="desc">
              Plans include concierge delivery and pickup, cleaning and refueling service, full coverage insurance
              <br />and maintenance-everything but gas and tolls. Join instantly with $0 down and get your car rioght now.
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="our-plans">
          <div class="col-sm-8 col-sm-offset-2 col-md-10 col-md-offset-1">
            <div class="col-sm-10 col-sm-offset-1 col-md-offset-0 col-md-4">
              <div class="plan">
                <div class="head">
                  <h3>FlexPass</h3>
                  <span>Get 2 days/month</span>
                </div>
                <div class="price">
                  <span class="count">$159</span>
                  <span>/month</span>
                </div>
                <div class="desc">
                  Not sure how much you drive?
                  Get a magic button anytime you need a car.
                </div>
                <div class="submit">
                  <a href="#" class="special-btn" type="submit">Start with FlexPass</a>
                </div>
                <div class="details">
                  <p>
                    View plan details
                    <i class="fa fa-arrow-right"></i>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-sm-10 col-sm-offset-1 col-md-offset-0 col-md-4">
              <div class="plan recomended-plan">
                <div class="head">
                  <div class="recomended">
                    <span>recommended</span>
                  </div>
                  <h3>Getaway</h3>
                  <span>Get 4 days/month</span>
                </div>
                <div class="price">
                  <span class="count">$219</span>
                  <span>/month</span>
                </div>
                <div class="desc">
                  Get away up to once a week.
                  Your car is delivered and disappears-like magic.
                </div>
                <div class="submit">
                  <a href="#" class="special-btn" type="submit">Start with Getaway</a>
                </div>
                <div class="details">
                  <p>
                    View plan details
                    <i class="fa fa-arrow-right"></i>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-sm-10 col-sm-offset-1 col-md-offset-0 col-md-4">
              <div class="plan">
                <div class="head">
                  <h3>Freedom</h3>
                  <span>Get 8 days/month</span>
                </div>
                <div class="price">
                  <span class="count">$389</span>
                  <span>/month</span>
                </div>
                <div class="desc">
                  Get a car up to twice a week. it's
                  freedom whenever you want it and
                  no additional fees when you don't.
                </div>
                <div class="submit">
                  <a href="#" class="special-btn" type="submit">Start with Freedom</a>
                </div>
                <div class="clearfix"></div>
                <div class="details">
                  <p>
                    View plan details
                    <i class="fa fa-arrow-right"></i>
                  </p>
                </div>
              </div>
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

<style lang="scss">
.pricing {
  padding: 70px 0 10px;

  .our-plans {
    @media (max-width: 992px) {
      margin-top: 30px;
    }
    margin-top: 100px;
    position: relative;

    .plan {
      text-align: center;
      border: 1px solid #eee;
      padding: 30px 15px;
      background: #fff;
      margin-bottom: 20px;
      @media (min-width: 528px) and (max-width: 768px) {
        width: 350px;
        margin: 20px auto;
      }
      &.recomended-plan {
        border-top: 3px solid #72738e;
        box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.5);
        @media (min-width: 992px) {
          position: absolute;
          top: -30px;
        }
      }
      .head {
        h3 {
          color: #333554;
        }
        span {
          display: block;
          margin: 10px;
          color: #666;
        }
        .recomended {
          span {
            color: #777;
            text-transform: uppercase;
            font-size: 14px;
          }
        }
      }
      .price {
        margin: 30px 0 20px;
        color: #666;
        padding-bottom: 30px;
        border-bottom: 1px solid #eee;
        span.count {
          font-size: 24px;
          font-weight: bold;
        }
      }
      .desc {
        color: #777;
        line-height: 1.6;
        min-height: 100px;
      }
    }
  }
  .details {
    p {
      color: #666;
      i {
        display: inline-block;
        margin-left: 5px;
      }
    }
  }
}
.submit {
  margin: 40px 0;
}
.special-btn {
  background: #72738e;
  padding: 14px 25px !important;
  border-radius: 20px;
  color: #fff;
  transition: ease 0.3s;
  &:hover {
    text-decoration: none;
    opacity: 0.9;
    color: #eee;
  }
}
</style>
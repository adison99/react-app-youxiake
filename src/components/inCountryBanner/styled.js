import styled from "styled-components"

export const InCountryBanner = styled.div`
.mSwiperBanner {
    position: relative;
    width: 100%;
    overflow: hidden;
}
.mSwiperBanner .mSwiperBanner__box {
    width: 7.5rem;
}

.vux-slider {
    overflow: hidden;
    position: relative;
}
.vux-slider>.vux-swiper {
    overflow: hidden;
    position: relative;
}
.vux-slider>.vux-swiper .vux-swiper-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.vux-slider>.vux-swiper .vux-swiper-item>a {
    display: block;
    width: 100%;
    height: 100%;
}

.mSwiperBanner .mSwiperBanner__box .mSwiperBanner__link {
    height: 4.22rem!important;
    background: #fff9db 50% no-repeat;
    background-size: cover;
    overflow: hidden;
}

`
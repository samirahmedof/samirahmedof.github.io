<template>
  <main class="about">
    <Loader v-if="!loaderOff" />
    <section
      class="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1"
      :class="{'no-transform revealator-within':loaderOff}"
    >
      <h1>
        ABOUT
        <span>ME</span>
      </h1>
      <span class="title-bg">Resume</span>
    </section>

    <section
      class="main-content revealator-slideup revealator-once revealator-delay1"
      :class="{'no-transform revealator-partially-below':loaderOff}"
    >
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-5 col-xl-6">
            <div class="row">
              <div class="col-12">
                <h3 class="text-uppercase custom-title mb-0 ft-wt-600">personal infos</h3>
              </div>
              <div class="col-12 d-block d-sm-none">
                <img
                  src="src/assets/img/222.jpg"
                  class="img-fluid main-img-mobile"
                  alt="my picture"
                />
              </div>
              <div class="col-6">
                <ul class="about-list list-unstyled open-sans-font">
                  <li>
                    <span class="title">first name :</span>
                    <span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Samir</span>
                  </li>
                  <li>
                    <span class="title">last name :</span>
                    <span
                      class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
                    >Ahmadov</span>
                  </li>
                  <li>
                    <span class="title">Birth :</span>
                    <span
                      class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
                    >10 March 1998</span>
                  </li>
                  <li>
                    <span class="title">Freelance :</span>
                    <span
                      class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
                    >Available</span>
                  </li>
                </ul>
              </div>
              <div class="col-6">
                <ul class="about-list list-unstyled open-sans-font">
                  <li>
                    <span class="title">Address :</span>
                    <span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Baku</span>
                  </li>
                  <li>
                    <span class="title">phone :</span>
                    <span
                      class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
                    >+994 55 250 75 35</span>
                  </li>
                  <li>
                    <span class="title">Email :</span>
                    <span
                      class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
                    >ahmadovsmr@gmail.com</span>
                  </li>
                  <li>
                    <span class="title">languages :</span>
                    <span
                      class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
                    >English, Turkish</span>
                  </li>
                </ul>
              </div>
              <div class="col-12 mt-3">
                <a href="src/assets/files/resume.pdf" class="btn btn-download" target="blank">
                  <i class="fas fa-eye"></i>
                  <span>Show CV</span>
                </a>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-7 col-xl-6 mt-5 mt-lg-0 d-flex">
            <div class="row w-100 align-self-center m-0">
              <div class="col-6">
                <div class="box-stats with-margin">
                  <h3 class="poppins-font position-relative">1</h3>
                  <p class="open-sans-font m-0 position-relative text-uppercase">
                    years of
                    <span class="d-block">experience</span>
                  </p>
                </div>
              </div>
              <div class="col-6">
                <div class="box-stats with-margin">
                  <h3 class="poppins-font position-relative">25</h3>
                  <p class="open-sans-font m-0 position-relative text-uppercase">
                    completed
                    <span class="d-block">projects</span>
                  </p>
                </div>
              </div>
              <!-- <div class="col-6">
                <div class="box-stats">
                  <h3 class="poppins-font position-relative">81</h3>
                  <p class="open-sans-font m-0 position-relative text-uppercase">
                    Happy
                    <span class="d-block">customers</span>
                  </p>
                </div>
              </div>
              <div class="col-6">
                <div class="box-stats">
                  <h3 class="poppins-font position-relative">53</h3>
                  <p class="open-sans-font m-0 position-relative text-uppercase">
                    awards
                    <span class="d-block">won</span>
                  </p>
                </div>
              </div>-->
            </div>
          </div>
        </div>
        <hr class="separator" />
        <div class="row justify-content-center">
          <div class="col-12">
            <h3
              class="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600"
            >My Skills</h3>
          </div>
          <div class="col-6 col-md-3 mb-3 mb-sm-5">
            <div class="c100 p95">
              <span>95%</span>
              <div class="slice">
                <div class="bar"></div>
                <div class="fill"></div>
              </div>
            </div>
            <h6 class="text-uppercase open-sans-font text-center mt-2 mt-sm-4">html</h6>
          </div>
          <div class="col-6 col-md-3 mb-3 mb-sm-5">
            <div class="c100 p95">
              <span>95%</span>
              <div class="slice">
                <div class="bar"></div>
                <div class="fill"></div>
              </div>
            </div>
            <h6 class="text-uppercase open-sans-font text-center mt-2 mt-sm-4">css</h6>
          </div>
          <div class="col-6 col-md-3 mb-3 mb-sm-5">
            <div class="c100 p85">
              <span>85%</span>
              <div class="slice">
                <div class="bar"></div>
                <div class="fill"></div>
              </div>
            </div>
            <h6 class="text-uppercase open-sans-font text-center mt-2 mt-sm-4">javascript</h6>
          </div>
          <div class="col-6 col-md-3 mb-3 mb-sm-5">
            <div class="c100 p90">
              <span>90%</span>
              <div class="slice">
                <div class="bar"></div>
                <div class="fill"></div>
              </div>
            </div>
            <h6 class="text-uppercase open-sans-font text-center mt-2 mt-sm-4">bootstrap</h6>
          </div>
          <div class="col-6 col-md-3 mb-3 mb-sm-5">
            <div class="c100 p90">
              <span>90%</span>
              <div class="slice">
                <div class="bar"></div>
                <div class="fill"></div>
              </div>
            </div>
            <h6 class="text-uppercase open-sans-font text-center mt-2 mt-sm-4">sass</h6>
          </div>

          <div class="col-6 col-md-3 mb-3 mb-sm-5">
            <div class="c100 p90">
              <span>90%</span>
              <div class="slice">
                <div class="bar"></div>
                <div class="fill"></div>
              </div>
            </div>
            <h6 class="text-uppercase open-sans-font text-center mt-2 mt-sm-4">jquery</h6>
          </div>
          <div class="col-6 col-md-3 mb-3 mb-sm-5">
            <div class="c100 p70">
              <span>70%</span>
              <div class="slice">
                <div class="bar"></div>
                <div class="fill"></div>
              </div>
            </div>
            <h6 class="text-uppercase open-sans-font text-center mt-2 mt-sm-4">vue</h6>
          </div>
        </div>
        <hr class="separator mt-1" />
        <div class="row">
          <div class="col-12">
            <h3 class="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
              Experience
              <span>&</span> Education
            </h3>
          </div>
          <div class="col-lg-6 m-15px-tb">
            <div class="resume-box">
              <ul>
                <li>
                  <div class="icon">
                    <i class="fa fa-briefcase"></i>
                  </div>
                  <span class="time open-sans-font text-uppercase">2019 - Present</span>
                  <h5 class="poppins-font text-uppercase">Front-end Developer</h5>
                  <p
                    class="open-sans-font"
                  >The Ministry of Transport, Communications and High Technologies</p>
                </li>
                <li>
                  <div class="icon">
                    <i class="fa fa-briefcase"></i>
                  </div>
                  <span class="time open-sans-font text-uppercase">2017</span>
                  <h5 class="poppins-font text-uppercase">Transport / Volunteer</h5>
                  <p class="open-sans-font">41st World Scout Conference</p>
                </li>
                <li>
                  <div class="icon">
                    <i class="fa fa-briefcase"></i>
                  </div>
                  <span class="time open-sans-font text-uppercase">2017</span>
                  <h5 class="poppins-font text-uppercase">Assistant / Volunteer</h5>
                  <p class="open-sans-font">ASAN Service</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 m-15px-tb">
            <div class="resume-box">
              <ul>
                <li>
                  <div class="icon">
                    <i class="fa fa-graduation-cap"></i>
                  </div>
                  <span class="time open-sans-font text-uppercase">2019 - present</span>
                  <h5 class="poppins-font text-uppercase">
                    Master Degree
                    <span
                      class="place open-sans-font"
                    >AZERBAIJAN STATE UNIVERSITY OF ECONOMICS</span>
                  </h5>
                  <p class="open-sans-font">Information Technologies Management</p>
                </li>
                <li>
                  <div class="icon">
                    <i class="fa fa-graduation-cap"></i>
                  </div>
                  <span class="time open-sans-font text-uppercase">2018 - 2019</span>
                  <h5 class="poppins-font text-uppercase">CODE ACADEMY</h5>
                  <p class="open-sans-font">Web Programming</p>
                </li>
                <li>
                  <div class="icon">
                    <i class="fa fa-graduation-cap"></i>
                  </div>
                  <span class="time open-sans-font text-uppercase">2015 - 2019</span>
                  <h5 class="poppins-font text-uppercase">
                    Bachelor Degree
                    <span class="place open-sans-font">NATIONAL AVIATION ACADEMY</span>
                  </h5>
                  <p class="open-sans-font">Information Technologies and System Engineering</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import Loader from "./../shared/Loader";

export default {
  data() {
    return {
      loaderOff: false,
    };
  },
  components: {
    Loader
  },
  mounted() {
    setTimeout(() => {
      this.loaderOff = true;
    }, 300);
  },
};
</script>
<style lang="scss" scoped>
img {
  object-fit: cover;
}
</style>
<template>
  <main class="portfolio">
    <Loader v-if="!loaderOff" />
    <section
      class="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1"
      :class="{'no-transform revealator-within':loaderOff}"
    >
      <h1>
        my
        <span>portfolio</span>
      </h1>
      <span class="title-bg">works</span>
    </section>

    <section
      class="main-content text-center revealator-slideup revealator-once revealator-delay1"
      :class="{'no-transform revealator-partially-below':loaderOff}"
    >
      <div id="grid-gallery" class="container grid-gallery" :class="{'slideshow-open':openGallery}">
        <section class="grid-wrap">
          <!-- <ul class="row grid"> -->
          <div class="row">
            <ProjectItem
              v-for="(item,index) in projects"
              :key="item.id"
              :item="item"
              :index="index"
              @clickedLi="openClickedGallery($event)"
            />
          </div>

          <!-- </ul> -->
        </section>

        <section class="slideshow">
          <ul>
            <li class="current show" v-if="activeProject">
              <figure>
                <figcaption>
                  <h3 class="m-0">{{activeProject.name}}</h3>
                  <div class="row open-sans-font">
                    <!-- <div class="col-12 col-sm-6 mb-2" :class="{'col-sm-12':!activeProject.preview}">
                      <i class="fa fa-code pr-2"></i>
                      <span class="project-label">Languages</span>:
                      <span class="ft-wt-600 uppercase">{{activeProject.languages}}</span>
                    </div>-->
                    <div class="col-12 mb-2" v-if="activeProject.preview">
                      <!-- <div class="col-12 col-sm-6 mb-2" v-if="activeProject.preview"> -->
                      <i class="fas fa-link pr-2"></i>
                      <span class="project-label">Preview</span>:
                      <span class="ft-wt-600 uppercase">
                        <a :href="activeProject.preview" target="_blank">{{activeProject.preview}}</a>
                      </span>
                    </div>
                  </div>
                </figcaption>

                <div
                  class="mediaContainer"
                  v-if="activeProject.media[currentShowenIndex].type=='image'"
                  key="image"
                >
                  <img :src="activeProject.media[currentShowenIndex].src" />
                </div>
                <div class="mediaContainer" v-else key="video">
                  <video id="video" class="responsive-video" controls>
                    <source
                      :src="activeProject.media[currentShowenIndex].src"
                      :type="'video/'+activeProject.media[currentShowenIndex].ext"
                    />
                  </video>
                </div>
                <nav>
                  <span
                    class="icon nav-prev"
                    :class="{'disabled':currentShowenIndex == 0}"
                    @click="showPrev"
                  >
                    <img src="src/assets/img/projects/navigation/left-arrow.png" alt="previous" />
                  </span>
                  <span
                    class="icon nav-next"
                    :class="{'disabled':currentShowenIndex == activeProject.media.length - 1}"
                    @click="showNext"
                  >
                    <img src="src/assets/img/projects/navigation/right-arrow.png" alt="next" />
                  </span>
                  <span class="nav-close" @click="closeGallery">
                    <img src="src/assets/img/projects/navigation/close-button.png" alt="close" />
                  </span>
                </nav>
              </figure>
            </li>
          </ul>
        </section>
      </div>
    </section>
  </main>
</template>
<script>
import ProjectItem from "./ProjectItem";
import Loader from "./../shared/Loader";
export default {
  data() {
    return {
      loaderOff: false,
      openGallery: false,
      projects: [
        {
          id: "1",
          name: "Dövlət Dəniz Agentliyi",
          languages: "html, javascript, jquery, sass, bootstrap",
          media: [
            {
              type: "image",
              ext: "png",
              src: "src/assets/img/projects/ardda1.png",
            },
            {
              type: "image",
              ext: "png",
              src: "src/assets/img/projects/ardda2.png",
            },
            {
              type: "image",
              ext: "png",
              src: "src/assets/img/projects/ardda3.png",
            },
            {
              type: "video",
              ext: "mp4",
              src: "src/assets/img/projects/ardda.mp4",
            },
          ],
        },
        {
          id: "2",
          name: "AzDoc",
          languages: "html, javascript, jquery, sass, bootstrap",
          media: [
            {
              type: "image",
              ext: "png",
              src: "src/assets/img/projects/azdoc4.png",
            },
            {
              type: "image",
              ext: "png",
              src: "src/assets/img/projects/azdoc1.png",
            },
            {
              type: "image",
              ext: "png",
              src: "src/assets/img/projects/azdoc2.png",
            },
            {
              type: "image",
              ext: "png",
              src: "src/assets/img/projects/azdoc3.png",
            },
            {
              type: "image",
              ext: "png",
              src: "src/assets/img/projects/azdoc0.png",
            },
          ],
        },
        {
          id: "3",
          name: "Bakutel Oyun",
          languages: "html, javascript, jquery, sass, bootstrap",
          media: [
            {
              type: "image",
              ext: "png",
              src: "src/assets/img/projects/bakutel1.png",
            },
            {
              type: "image",
              ext: "png",
              src: "src/assets/img/projects/bakutel2.png",
            },
            {
              type: "image",
              ext: "png",
              src: "src/assets/img/projects/bakutel3.png",
            },
          ],
        },
        {
          id: "4",
          name: "Call Center",
          languages: "html, javascript, jquery, sass, bootstrap",
          media: [
            {
              type: "image",
              ext: "png",
              src: "src/assets/img/projects/call3.png",
            },
            {
              type: "image",
              ext: "png",
              src: "src/assets/img/projects/call1.png",
            },
            {
              type: "video",
              ext: "mp4",
              src: "src/assets/img/projects/call.mp4",
            },
            {
              type: "image",
              ext: "png",
              src: "src/assets/img/projects/call4.png",
            },
          ],
        },
        {
          id: "5",
          name: "Electron Archive",
          languages: "html, javascript, jquery, sass, bootstrap",
          media: [
            {
              type: "image",
              ext: "png",
              src: "src/assets/img/projects/earch1.png",
            },
            {
              type: "image",
              ext: "png",
              src: "src/assets/img/projects/earch2.png",
            },
            {
              type: "image",
              ext: "png",
              src: "src/assets/img/projects/earch3.png",
            },
            {
              type: "image",
              ext: "png",
              src: "src/assets/img/projects/earch4.png",
            },
          ],
        },
        {
          id: "6",
          name: "Hamiləlikdə inkişaf portalı",
          languages: "html, javascript, jquery, sass, bootstrap",
          preview: "http://hip.az/",
          media: [
            {
              type: "image",
              ext: "png",
              src: "src/assets/img/projects/hip1.png",
            },
            {
              type: "image",
              ext: "png",
              src: "src/assets/img/projects/hip2.png",
            },
            {
              type: "image",
              ext: "png",
              src: "src/assets/img/projects/hip3.png",
            },
          ],
        },
        {
          id: "7",
          name: "Zefer",
          languages: "html, javascript, jquery, sass, bootstrap",
          preview: "http://zefer.az/",
          media: [
            {
              type: "image",
              ext: "png",
              src: "src/assets/img/projects/zefer1.png",
            },
            {
              type: "image",
              ext: "png",
              src: "src/assets/img/projects/zefer2.png",
            },
            {
              type: "image",
              ext: "png",
              src: "src/assets/img/projects/zefer3.png",
            },
          ],
        },
        {
          id: "8",
          name: "Redbot",
          languages: "html, javascript, jquery, sass, bootstrap",
          preview: "http://redbotcreativity.com/",
          media: [
            {
              type: "image",
              ext: "png",
              src: "src/assets/img/projects/redbot1.png",
            },
            {
              type: "image",
              ext: "png",
              src: "src/assets/img/projects/redbot2.png",
            },
          ],
        },
      ],
      activeProject: null,
      currentShowenIndex: 0,
    };
  },
  methods: {
    openClickedGallery(e) {
      this.openGallery = true;
      this.activeProject = this.projects[e];
    },
    showPrev() {
      if (this.currentShowenIndex != 0) {
        this.currentShowenIndex--;
      }
    },
    showNext() {
      if (this.currentShowenIndex != this.activeProject.media.length - 1) {
        this.currentShowenIndex++;
      }
    },
    closeGallery() {
      this.openGallery = false;
      this.currentShowenIndex = 0;
      this.activeProject = null;
    },
  },
  components: {
    ProjectItem,
    Loader,
  },
  mounted() {
    setTimeout(() => {
      this.loaderOff = true;
    }, 300);
  },
};
</script>
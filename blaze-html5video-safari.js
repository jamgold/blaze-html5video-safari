import { Template } from 'meteor/templating'
// Write your package code here!
import './blaze-html5video-safari.html'
//
// Safari
// Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.1.2 Safari/605.1.15
// Chrome
// Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36
// 
Template.html5video.onCreated(function () {
  const instance = this
  const re = new RegExp("Version[\/][\\d,.]+ Safari[\/]", "g")
  const match = navigator.userAgent.match(re)
  instance.browserCheck = match ? match.length > 0 : false
  if (typeof instance.data.browserCheck == 'boolean') instance.browserCheck = instance.data.browserCheck
  instance.keywords = ['loop', 'inline', 'autoplay', 'controls']
  instance.defaults = {
    id: 'video',
    type: 'video/mp4',
    // boolean
    loop: 'loop',
    inline: 'playsinline',
    autoplay: 'autoplay',
    controls: 'controls',
  };
})
Template.html5video.onRendered(function () {
  const instance = this
  const parent = instance.find('#video-parent')
  instance.video = null
  if (instance.browserCheck) {
    instance.video = document.createElement('video')
    instance.video.id = instance.data.id ? instance.data.id : instance.defaults.id
    instance.video.type = instance.data.type ? instance.data.type : instance.defaults.type
    instance.video.style.display = 'none'
    if (instance.data.controls) instance.video.controls = true
    if (instance.data.loop) instance.video.loop = true
    if (instance.data.inline) instance.video.playsInline = true
    if (instance.data.autoplay) instance.video.autoplay = true

    if (instance.data.classes != undefined) {
      instance.data.classes.split(' ').forEach((c) => {
        instance.video.classList.add(c)
      })
    }
    instance.video.src = instance.data.src ? instance.data.src : ''
    // wait for the video being loaded
    instance.video.addEventListener('canplaythrough', () => {
      instance.video.style.display = 'block'
      parent.style.backgroundColor = 'transparent'
    })
    parent.append(instance.video)
  }
})
Template.html5video.onDestroyed(function () {
  const instance = this
  if (instance.video) {
    instance.video.pause()
    instance.video.remove()
  }
})
Template.html5video.helpers({
  doBrowserCheck() {
    return Template.instance().browserCheck;
  },
  getData(what) {
    const instance = Template.instance()
    if (what in instance.data) {
      if (instance.keywords.indexOf(what) >= 0) {
        return instance.data[what] === true ? instance.defaults[what] : ''
      } else {
        return instance.data[what];
      }
    } else {
      if (instance.keywords.indexOf(what) < 0) {
        return what in instance.defaults ? instance.defaults[what] : ''
      }
    }
  },
});
Template.html5video.events({
});
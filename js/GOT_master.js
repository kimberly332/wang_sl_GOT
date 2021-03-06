(() => {
  console.log('fired!');

  let lightBox = document.querySelector(".lightbox"),
      lbClose = lightBox.querySelector("span"),
      lbVideo = lightBox.querySelector("video"),
      sigils = document.querySelectorAll(".sigilContainer"),
      houseImages = document.querySelector("#houseImages"),
      houseName = document.querySelector(".house-name"),
      houseBio = document.querySelector(".house-info");

  const houseInfo = [
      ["Stark", `House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryen's invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.`],

      ["Baratheon", `House Baratheon of Storm's End is a legally extinct Great House of Westeros. A cadet branch was formerly the royal house, but House Lannister now controls the throne. House Baratheon traditionally ruled the Stormlands on the eastern coast of Westeros, aptly named for its frequent storms, from their seat of Storm's End.
      House Baratheon became the royal house of the Seven Kingdoms after Robert Baratheon led a rebellion against the Targaryen dynasty. At the end of the rebellion, Robert ascended the Iron Throne as Robert I and married Cersei Lannister after the death of Lyanna Stark.`],

      ["Lannister", `House Lannister of Casterly Rock is one of the Great Houses of Westeros, one of its richest and most powerful families and oldest dynasties. It is also the current royal house of the Seven Kingdoms following the extinction of House Baratheon of King's Landing, which had been their puppet house anyway.
      The Lannisters rule over the Westerlands. Their seat is Casterly Rock, a massive rocky promontory overlooking the Sunset Sea which has had habitations and fortifications built into it over the millennia. They are the Lords Paramount of the Westerlands and Wardens of the West. As the new royal house, they also rule directly over the Crownlands from their seat of the Red Keep in King's Landing, the traditional seat of the royal family.`],

      ["Tully", `House Tully of Riverrun is an exiled Great House of Westeros. Its most senior member carried the title of Lord of Riverrun and Lord Paramount of the Trident, until the Red Wedding. The current head is Lord Edmure Tully, son of the late Hoster Tully. The Tully sigil is a silver trout on a red and blue background. Their house words are "Family, Duty, Honor."`],

      ["Greyjoy", `House Greyjoy of Pyke is one of the Great Houses of Westeros. It rules over the Iron Islands, a harsh and bleak collection of islands off the west coast of Westeros, from the castle at Pyke. The head of the house is the Lord Reaper of Pyke.
      House Greyjoy's sigil is traditionally a golden kraken on a black field. Their house words are "We Do Not Sow," although the phrase "What Is Dead May Never Die" is also closely associated with House Greyjoy and their bannermen, as they are associated with the faith of the Drowned God. `],

      ["Arryn", `House Arryn of the Eyrie is one of the Great Houses of Westeros. It has ruled over the Vale of Arryn for millennia, originally as the Kings of Mountain and Vale and more recently as Lords Paramount of the Vale and Wardens of the East under the Targaryen kings and Baratheon-Lannister kings. The nominal head of House Arryn is Robin Arryn, the Lord of the Eyrie, with his stepfather Petyr Baelish acting as Lord Protector until he reaches the age of majority.`],

      ["Targaryen", `House Targaryen of Dragonstone is an exiled Great House of Westeros and the former royal house of the Seven Kingdoms. House Targaryen conquered and unified the realm before it was deposed during Robert's Rebellion and House Baratheon replaced it as the new royal House. The two surviving Targaryens, Viserys and Daenerys, fled into exile to the Free Cities of Essos across the Narrow Sea. House Lannister replaced House Baratheon as the royal House following the destruction of the Great Sept of Baelor, but the realm was reconquered by Daenerys Targaryen, retaking the Iron Throne following the Battle of King's Landing. After she laid waste to a surrendered King's Landing, Daenerys was assassinated by Jon Snow to prevent further destruction. Jon became the last known living member of House Targaryen and his identity as the son of Rhaegar Targaryen is kept hidden from Westeros. He is exiled to the Night's Watch for the assassination of Daenerys. The bloodline of House Targaryen also still exists in various houses, such as House Baratheon, House Velaryon, and House Martell.
      House Targaryen's sigil is a three-headed red dragon on a black background, and their house words are "Fire and Blood."`],

      ["Tyrell", `House Tyrell of Highgarden is an extinct Great House of Westeros. It ruled over the Reach, a vast, fertile, and heavily-populated region of southwestern Westeros, from their castle-seat of Highgarden as Lords Paramount of the Reach and Wardens of the South after taking control of the region from House Gardener during the Targaryen conquest.
      The Tyrell sigil is a golden rose on a pale green field. Their house words are "Growing Strong."`],

      ["Frey", `House Frey of the Twins is the former Great House of the Riverlands, having gained their position for their treachery against their former liege lords, House Tully, who were stripped of all their lands and titles for their rebellion against the Iron Throne; House Tully had supported the independence movement for the Kingdom of the North. The current head of the house is unknown following the assassinations of Lord Walder Frey and two of his sons, Lothar Frey and Walder Rivers, by the vengeful Arya Stark. This is made more complex by the subsequent assassination of all male Freys soon after. After the defeat of Cersei Lannister, Edmure Tully took back his title of Lord of the Riverlands and Riverrun became the Great House of the Riverlands again.`]
    ]

    var play = document.getElementById("play"),
        pause = document.getElementById("pause");

  function showHideLightbox() {
    lightBox.classList.toggle('show-lightbox');
    let status = document.querySelector(".show-lightbox");
    // try making the video play as well
    // check the play state of the video.
    // if it's paused or not playing, that means we just onpened the lightBox
    // and we want the video to play


    if (lbVideo.paused && status) {
      lbVideo.play();
    }
    else {
      // lightBox is open and we want the video to rewind and stop when we close it.
      lbVideo.currentTime = 0;
      lbVideo.pause();
    }
    // rewind the video and make it pause at currentTime of 0
  }

  function animateBanner() {
    // let bannerNum = this.dataset.offset;
    // console.log(bannerNum * 600);
    // move the banner to the right using the data-offset attribute
    // we get from the shields

    // 600 is the width of each image - multuply them together
    houseImages.style.right = `${this.dataset.offset * 600}px`;

    // and also show the house house name
    houseName.textContent = `House ${houseInfo[this.dataset.offset][0]}`;
    houseBio.textContent = `House ${houseInfo[this.dataset.offset][1]}`;

    // control the timing between animating banner and showing lightbox
    TweenMax.to(houseImages, 0.8, {right: houseImages.style.right}).eventCallback("onComplete", showHideLightbox);
  }

  // custom buttons control function
  play.addEventListener("click", function() {
    lbVideo.play();

    // update the button text to 'Pause'
    play.classList.toggle('pause');
  })
  pause.addEventListener("click", function() {
    lbVideo.pause();

    // update the button text to 'Play'
   pause.classList.toggle('pause');
  })

  // mute volume function
  mute.addEventListener("click", function() {
    lbVideo.muted = true;
  })

  // half volume function
  down.addEventListener("click", function() {
    // if the muted function is activated, then first turn off the mute mode then make it half volume of the original volume
    if(lbVideo.muted = true) {
      lbVideo.muted = false;
      lbVideo.volume = 0.2;
    }
    else { // else set to half volume
      lbVideo.volume = 0.2;
    }
  })

  // full volume function
  up.addEventListener("click", function() {
    if(lbVideo.muted = true) {
      lbVideo.muted = false;
      lbVideo.volume = 1.0;
    }
    else { // else set to full volume
      lbVideo.volume = 1.0;
    }
  })

  sigils.forEach(sigil => sigil.addEventListener("click", animateBanner));
  lbClose.addEventListener("click", showHideLightbox);

  // add an "ended" event handler for the video -> close the lightBox
  lbVideo.addEventListener("ended", showHideLightbox);

  // auto close the lightbox when the video is finished
  document.getElementById('autoplay').addEventListener('ended', closeLightbox, false);
    function closeLightbox() {
      lightBox.classList.remove("show-lightbox");
      lbVideo.currentTime = 0;
      lbVideo.pause();
  }
})();

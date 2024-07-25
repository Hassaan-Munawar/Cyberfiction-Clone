function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  function files(index) {
    var data = `
       ./Canvas/male0001.png
       ./Canvas/male0002.png
       ./Canvas/male0003.png
       ./Canvas/male0004.png
       ./Canvas/male0005.png
       ./Canvas/male0006.png
       ./Canvas/male0007.png
       ./Canvas/male0008.png
       ./Canvas/male0009.png
       ./Canvas/male0010.png
       ./Canvas/male0011.png
       ./Canvas/male0012.png
       ./Canvas/male0013.png
       ./Canvas/male0014.png
       ./Canvas/male0015.png
       ./Canvas/male0016.png
       ./Canvas/male0017.png
       ./Canvas/male0018.png
       ./Canvas/male0019.png
       ./Canvas/male0020.png
       ./Canvas/male0021.png
       ./Canvas/male0022.png
       ./Canvas/male0023.png
       ./Canvas/male0024.png
       ./Canvas/male0025.png
       ./Canvas/male0026.png
       ./Canvas/male0027.png
       ./Canvas/male0028.png
       ./Canvas/male0029.png
       ./Canvas/male0030.png
       ./Canvas/male0031.png
       ./Canvas/male0032.png
       ./Canvas/male0033.png
       ./Canvas/male0034.png
       ./Canvas/male0035.png
       ./Canvas/male0036.png
       ./Canvas/male0037.png
       ./Canvas/male0038.png
       ./Canvas/male0039.png
       ./Canvas/male0040.png
       ./Canvas/male0041.png
       ./Canvas/male0042.png
       ./Canvas/male0043.png
       ./Canvas/male0044.png
       ./Canvas/male0045.png
       ./Canvas/male0046.png
       ./Canvas/male0047.png
       ./Canvas/male0048.png
       ./Canvas/male0049.png
       ./Canvas/male0050.png
       ./Canvas/male0051.png
       ./Canvas/male0052.png
       ./Canvas/male0053.png
       ./Canvas/male0054.png
       ./Canvas/male0055.png
       ./Canvas/male0056.png
       ./Canvas/male0057.png
       ./Canvas/male0058.png
       ./Canvas/male0059.png
       ./Canvas/male0060.png
       ./Canvas/male0061.png
       ./Canvas/male0062.png
       ./Canvas/male0063.png
       ./Canvas/male0064.png
       ./Canvas/male0065.png
       ./Canvas/male0066.png
       ./Canvas/male0067.png
       ./Canvas/male0068.png
       ./Canvas/male0069.png
       ./Canvas/male0070.png
       ./Canvas/male0071.png
       ./Canvas/male0072.png
       ./Canvas/male0073.png
       ./Canvas/male0074.png
       ./Canvas/male0075.png
       ./Canvas/male0076.png
       ./Canvas/male0077.png
       ./Canvas/male0078.png
       ./Canvas/male0079.png
       ./Canvas/male0080.png
       ./Canvas/male0081.png
       ./Canvas/male0082.png
       ./Canvas/male0083.png
       ./Canvas/male0084.png
       ./Canvas/male0085.png
       ./Canvas/male0086.png
       ./Canvas/male0087.png
       ./Canvas/male0088.png
       ./Canvas/male0089.png
       ./Canvas/male0090.png
       ./Canvas/male0091.png
       ./Canvas/male0092.png
       ./Canvas/male0093.png
       ./Canvas/male0094.png
       ./Canvas/male0095.png
       ./Canvas/male0096.png
       ./Canvas/male0097.png
       ./Canvas/male0098.png
       ./Canvas/male0099.png
       ./Canvas/male0100.png
       ./Canvas/male0101.png
       ./Canvas/male0102.png
       ./Canvas/male0103.png
       ./Canvas/male0104.png
       ./Canvas/male0105.png
       ./Canvas/male0106.png
       ./Canvas/male0107.png
       ./Canvas/male0108.png
       ./Canvas/male0109.png
       ./Canvas/male0110.png
       ./Canvas/male0111.png
       ./Canvas/male0112.png
       ./Canvas/male0113.png
       ./Canvas/male0114.png
       ./Canvas/male0115.png
       ./Canvas/male0116.png
       ./Canvas/male0117.png
       ./Canvas/male0118.png
       ./Canvas/male0119.png
       ./Canvas/male0120.png
       ./Canvas/male0121.png
       ./Canvas/male0122.png
       ./Canvas/male0123.png
       ./Canvas/male0124.png
       ./Canvas/male0125.png
       ./Canvas/male0126.png
       ./Canvas/male0127.png
       ./Canvas/male0128.png
       ./Canvas/male0129.png
       ./Canvas/male0130.png
       ./Canvas/male0131.png
       ./Canvas/male0132.png
       ./Canvas/male0133.png
       ./Canvas/male0134.png
       ./Canvas/male0135.png
       ./Canvas/male0136.png
       ./Canvas/male0137.png
       ./Canvas/male0138.png
       ./Canvas/male0139.png
       ./Canvas/male0140.png
       ./Canvas/male0141.png
       ./Canvas/male0142.png
       ./Canvas/male0143.png
       ./Canvas/male0144.png
       ./Canvas/male0145.png
       ./Canvas/male0146.png
       ./Canvas/male0147.png
       ./Canvas/male0148.png
       ./Canvas/male0149.png
       ./Canvas/male0150.png
       ./Canvas/male0151.png
       ./Canvas/male0152.png
       ./Canvas/male0153.png
       ./Canvas/male0154.png
       ./Canvas/male0155.png
       ./Canvas/male0156.png
       ./Canvas/male0157.png
       ./Canvas/male0158.png
       ./Canvas/male0159.png
       ./Canvas/male0160.png
       ./Canvas/male0161.png
       ./Canvas/male0162.png
       ./Canvas/male0163.png
       ./Canvas/male0164.png
       ./Canvas/male0165.png
       ./Canvas/male0166.png
       ./Canvas/male0167.png
       ./Canvas/male0168.png
       ./Canvas/male0169.png
       ./Canvas/male0170.png
       ./Canvas/male0171.png
       ./Canvas/male0172.png
       ./Canvas/male0173.png
       ./Canvas/male0174.png
       ./Canvas/male0175.png
       ./Canvas/male0176.png
       ./Canvas/male0177.png
       ./Canvas/male0178.png
       ./Canvas/male0179.png
       ./Canvas/male0180.png
       ./Canvas/male0181.png
       ./Canvas/male0182.png
       ./Canvas/male0183.png
       ./Canvas/male0184.png
       ./Canvas/male0185.png
       ./Canvas/male0186.png
       ./Canvas/male0187.png
       ./Canvas/male0188.png
       ./Canvas/male0189.png
       ./Canvas/male0190.png
       ./Canvas/male0191.png
       ./Canvas/male0192.png
       ./Canvas/male0193.png
       ./Canvas/male0194.png
       ./Canvas/male0195.png
       ./Canvas/male0196.png
       ./Canvas/male0197.png
       ./Canvas/male0198.png
       ./Canvas/male0199.png
       ./Canvas/male0200.png
       ./Canvas/male0201.png
       ./Canvas/male0202.png
       ./Canvas/male0203.png
       ./Canvas/male0204.png
       ./Canvas/male0205.png
       ./Canvas/male0206.png
       ./Canvas/male0207.png
       ./Canvas/male0208.png
       ./Canvas/male0209.png
       ./Canvas/male0210.png
       ./Canvas/male0211.png
       ./Canvas/male0212.png
       ./Canvas/male0213.png
       ./Canvas/male0214.png
       ./Canvas/male0215.png
       ./Canvas/male0216.png
       ./Canvas/male0217.png
       ./Canvas/male0218.png
       ./Canvas/male0219.png
       ./Canvas/male0220.png
       ./Canvas/male0221.png
       ./Canvas/male0222.png
       ./Canvas/male0223.png
       ./Canvas/male0224.png
       ./Canvas/male0225.png
       ./Canvas/male0226.png
       ./Canvas/male0227.png
       ./Canvas/male0228.png
       ./Canvas/male0229.png
       ./Canvas/male0230.png
       ./Canvas/male0231.png
       ./Canvas/male0232.png
       ./Canvas/male0233.png
       ./Canvas/male0234.png
       ./Canvas/male0235.png
       ./Canvas/male0236.png
       ./Canvas/male0237.png
       ./Canvas/male0238.png
       ./Canvas/male0239.png
       ./Canvas/male0240.png
       ./Canvas/male0241.png
       ./Canvas/male0242.png
       ./Canvas/male0243.png
       ./Canvas/male0244.png
       ./Canvas/male0245.png
       ./Canvas/male0246.png
       ./Canvas/male0247.png
       ./Canvas/male0248.png
       ./Canvas/male0249.png
       ./Canvas/male0250.png
       ./Canvas/male0251.png
       ./Canvas/male0252.png
       ./Canvas/male0253.png
       ./Canvas/male0254.png
       ./Canvas/male0255.png
       ./Canvas/male0256.png
       ./Canvas/male0257.png
       ./Canvas/male0258.png
       ./Canvas/male0259.png
       ./Canvas/male0260.png
       ./Canvas/male0261.png
       ./Canvas/male0262.png
       ./Canvas/male0263.png
       ./Canvas/male0264.png
       ./Canvas/male0265.png
       ./Canvas/male0266.png
       ./Canvas/male0267.png
       ./Canvas/male0268.png
       ./Canvas/male0269.png
       ./Canvas/male0270.png
       ./Canvas/male0271.png
       ./Canvas/male0272.png
       ./Canvas/male0273.png
       ./Canvas/male0274.png
       ./Canvas/male0275.png
       ./Canvas/male0276.png
       ./Canvas/male0277.png
       ./Canvas/male0278.png
       ./Canvas/male0279.png
       ./Canvas/male0280.png
       ./Canvas/male0281.png
       ./Canvas/male0282.png
       ./Canvas/male0283.png
       ./Canvas/male0284.png
       ./Canvas/male0285.png
       ./Canvas/male0286.png
       ./Canvas/male0287.png
       ./Canvas/male0288.png
       ./Canvas/male0289.png
       ./Canvas/male0290.png
       ./Canvas/male0291.png
       ./Canvas/male0292.png
       ./Canvas/male0293.png
       ./Canvas/male0294.png
       ./Canvas/male0295.png
       ./Canvas/male0296.png
       ./Canvas/male0297.png
       ./Canvas/male0298.png
       ./Canvas/male0299.png
       ./Canvas/male0300.png
   `;
    return data.split("\n")[index];
  }
  const frameCount = 300;
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  images[1].onload = render;
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
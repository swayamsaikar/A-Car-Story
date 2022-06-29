AFRAME.registerComponent("base", {
  schema: {
    radius: {
      type: "number",
      default: 100,
    },
    height: {
      type: "number",
      default: 3,
    },
  },

  init: function () {
    // console.log("started");
    // executes something after starting

    this.el.setAttribute("geometry", {
      primitive: "cylinder",
      radius: this.data.radius,
      height: this.data.height,
    });

    // console.log("ended")
  },
});

AFRAME.registerComponent("change-rotation", {
  schema: {
    clickCounter: {
      type: "number",
      default: 0,
    },
  },

  update: function () {
    // Do something when component's data is updated.
    window.addEventListener("click", (e) => {
      this.data.clickCounter = this.data.clickCounter + 1;
      if (this.data.clickCounter === 1) {
        let rotation = {
          x: -90,
          y: 100,
          z: 0,
        };
        this.el.setAttribute("rotation", rotation);
      } else if (this.data.clickCounter === 2) {
        let rotation = {
          x: -90,
          y: 180,
          z: 0,
        };
        this.el.setAttribute("rotation", rotation);
      } else if (this.data.clickCounter === 3) {
        let rotation = {
          x: -90,
          y: -90,
          z: 0,
        };
        this.el.setAttribute("rotation", rotation);
      } else {
        let rotation = {
          x: -90,
          y: 40,
          z: 0,
        };
        this.el.setAttribute("rotation", rotation);
        this.data.clickCounter = 0;
      }
    });
  },
});

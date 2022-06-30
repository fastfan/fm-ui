export default {
  title: {
    left: 0,
    textStyle: {
      color: "rgba(68,202,255,1)",
      fontSize: 16,
      fontWeight: 400
    }
  },
  color: [
    "#3196FA", // new color
    "#EF4864",
    "#FACC14",
    "#2FC25B",
    "#6236FF",
    "#B620E0",
    "#11C2C1",
    "#EB2F95",
    "#FA8C15",
    "#A0D911",
    "#10229E", // old color
    "#2F54EB",
    "#1990FF",
    "#3fb1e3",
    "#6be6c1",
    "#626c91",
    "#a0a7e6",
    "#c4ebad",
    "#96dee8"
  ],
  grid: {
    left: 5,
    right: 5,
    bottom: 20,
    containLabel: true
  },
  categoryAxis: {
    axisLine: {
      // x轴线
      show: true,
      lineStyle: {
        color: "rgba(255, 255, 255, .7)",
        opacity: "0.5"
      }
    },
    axisTick: {
      //x轴线刻度
      show: false,
      lineStyle: {
        color: "#333"
      }
    },
    axisLabel: {
      // x轴文字
      show: true,
      textStyle: {
        color: "rgba(255, 255, 255, .7)"
      }
    }
  },
  valueAxis: {
    axisLabel: {
      textStyle: {
        color: "rgba(255, 255, 255, .7)"
      }
    },
    axisTick: {
      //y轴刻度线
      show: false
    },
    axisLine: { show: false },
    splitLine: {
      show: true,
      lineStyle: {
        type: "dotted",
        color: "rgba(255, 255, 255, .7)",
        opacity: "0.15"
      }
    },
    nameTextStyle: {
      color: "rgba(255, 255, 255, .7)"
    }
  }
};

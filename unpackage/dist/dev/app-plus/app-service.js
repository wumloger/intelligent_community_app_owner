if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  const ON_LOAD = "onLoad";
  function formatAppLog(type2, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type2, filename, ...args);
    } else {
      console[type2].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
  const version = "3";
  {
    formatAppLog("log", "at uni_modules/uview-plus/libs/config/config.js:5", `
 %c uview-plus V${version} %c https://ijry.github.io/uview-plus/ 

`, "color: #ffffff; background: #3c9cff; padding:5px 0;", "color: #3c9cff;background: #ffffff; padding:5px 0;");
  }
  const config = {
    v: version,
    version,
    // 主题名称
    type: [
      "primary",
      "success",
      "info",
      "error",
      "warning"
    ],
    // 颜色部分，本来可以通过scss的:export导出供js使用，但是奈何nvue不支持
    color: {
      "u-primary": "#2979ff",
      "u-warning": "#ff9900",
      "u-success": "#19be6b",
      "u-error": "#fa3534",
      "u-info": "#909399",
      "u-main-color": "#303133",
      "u-content-color": "#606266",
      "u-tips-color": "#909399",
      "u-light-color": "#c0c4cc"
    },
    // 默认单位，可以通过配置为rpx，那么在用于传入组件大小参数为数值时，就默认为rpx
    unit: "px"
  };
  const ActionSheet = {
    // action-sheet组件
    actionSheet: {
      show: false,
      title: "",
      description: "",
      actions: () => [],
      index: "",
      cancelText: "",
      closeOnClickAction: true,
      safeAreaInsetBottom: true,
      openType: "",
      closeOnClickOverlay: true,
      round: 0
    }
  };
  const Album = {
    // album 组件
    album: {
      urls: () => [],
      keyName: "",
      singleSize: 180,
      multipleSize: 70,
      space: 6,
      singleMode: "scaleToFill",
      multipleMode: "aspectFill",
      maxCount: 9,
      previewFullImage: true,
      rowCount: 3,
      showMore: true
    }
  };
  const Alert = {
    // alert警告组件
    alert: {
      title: "",
      type: "warning",
      description: "",
      closable: false,
      showIcon: false,
      effect: "light",
      center: false,
      fontSize: 14
    }
  };
  const Avatar = {
    // avatar 组件
    avatar: {
      src: "",
      shape: "circle",
      size: 40,
      mode: "scaleToFill",
      text: "",
      bgColor: "#c0c4cc",
      color: "#ffffff",
      fontSize: 18,
      icon: "",
      mpAvatar: false,
      randomBgColor: false,
      defaultUrl: "",
      colorIndex: "",
      name: ""
    }
  };
  const AvatarGroup = {
    // avatarGroup 组件
    avatarGroup: {
      urls: () => [],
      maxCount: 5,
      shape: "circle",
      mode: "scaleToFill",
      showMore: true,
      size: 40,
      keyName: "",
      gap: 0.5,
      extraValue: 0
    }
  };
  const Backtop = {
    // backtop组件
    backtop: {
      mode: "circle",
      icon: "arrow-upward",
      text: "",
      duration: 100,
      scrollTop: 0,
      top: 400,
      bottom: 100,
      right: 20,
      zIndex: 9,
      iconStyle: () => ({
        color: "#909399",
        fontSize: "19px"
      })
    }
  };
  const Badge = {
    // 徽标数组件
    badge: {
      isDot: false,
      value: "",
      show: true,
      max: 999,
      type: "error",
      showZero: false,
      bgColor: null,
      color: null,
      shape: "circle",
      numberType: "overflow",
      offset: () => [],
      inverted: false,
      absolute: false
    }
  };
  const Button = {
    // button组件
    button: {
      hairline: false,
      type: "info",
      size: "normal",
      shape: "square",
      plain: false,
      disabled: false,
      loading: false,
      loadingText: "",
      loadingMode: "spinner",
      loadingSize: 15,
      openType: "",
      formType: "",
      appParameter: "",
      hoverStopPropagation: true,
      lang: "en",
      sessionFrom: "",
      sendMessageTitle: "",
      sendMessagePath: "",
      sendMessageImg: "",
      showMessageCard: false,
      dataName: "",
      throttleTime: 0,
      hoverStartTime: 0,
      hoverStayTime: 200,
      text: "",
      icon: "",
      iconColor: "",
      color: ""
    }
  };
  const Calendar = {
    // calendar 组件
    calendar: {
      title: "日期选择",
      showTitle: true,
      showSubtitle: true,
      mode: "single",
      startText: "开始",
      endText: "结束",
      customList: () => [],
      color: "#3c9cff",
      minDate: 0,
      maxDate: 0,
      defaultDate: null,
      maxCount: Number.MAX_SAFE_INTEGER,
      // Infinity
      rowHeight: 56,
      formatter: null,
      showLunar: false,
      showMark: true,
      confirmText: "确定",
      confirmDisabledText: "确定",
      show: false,
      closeOnClickOverlay: false,
      readonly: false,
      showConfirm: true,
      maxRange: Number.MAX_SAFE_INTEGER,
      // Infinity
      rangePrompt: "",
      showRangePrompt: true,
      allowSameDay: false,
      round: 0,
      monthNum: 3
    }
  };
  const CarKeyboard = {
    // 车牌号键盘
    carKeyboard: {
      random: false
    }
  };
  const Cell = {
    // cell组件的props
    cell: {
      customClass: "",
      title: "",
      label: "",
      value: "",
      icon: "",
      disabled: false,
      border: true,
      center: false,
      url: "",
      linkType: "navigateTo",
      clickable: false,
      isLink: false,
      required: false,
      arrowDirection: "",
      iconStyle: {},
      rightIconStyle: {},
      rightIcon: "arrow-right",
      titleStyle: {},
      size: "",
      stop: true,
      name: ""
    }
  };
  const CellGroup = {
    // cell-group组件的props
    cellGroup: {
      title: "",
      border: true,
      customStyle: {}
    }
  };
  const Checkbox = {
    // checkbox组件
    checkbox: {
      name: "",
      shape: "",
      size: "",
      checkbox: false,
      disabled: "",
      activeColor: "",
      inactiveColor: "",
      iconSize: "",
      iconColor: "",
      label: "",
      labelSize: "",
      labelColor: "",
      labelDisabled: ""
    }
  };
  const CheckboxGroup = {
    // checkbox-group组件
    checkboxGroup: {
      name: "",
      value: () => [],
      shape: "square",
      disabled: false,
      activeColor: "#2979ff",
      inactiveColor: "#c8c9cc",
      size: 18,
      placement: "row",
      labelSize: 14,
      labelColor: "#303133",
      labelDisabled: false,
      iconColor: "#ffffff",
      iconSize: 12,
      iconPlacement: "left",
      borderBottom: false
    }
  };
  const CircleProgress = {
    // circleProgress 组件
    circleProgress: {
      percentage: 30
    }
  };
  const Code = {
    // code 组件
    code: {
      seconds: 60,
      startText: "获取验证码",
      changeText: "X秒重新获取",
      endText: "重新获取",
      keepRunning: false,
      uniqueKey: ""
    }
  };
  const CodeInput = {
    // codeInput 组件
    codeInput: {
      adjustPosition: true,
      maxlength: 6,
      dot: false,
      mode: "box",
      hairline: false,
      space: 10,
      value: "",
      focus: false,
      bold: false,
      color: "#606266",
      fontSize: 18,
      size: 35,
      disabledKeyboard: false,
      borderColor: "#c9cacc",
      disabledDot: true
    }
  };
  const Col = {
    // col 组件
    col: {
      span: 12,
      offset: 0,
      justify: "start",
      align: "stretch",
      textAlign: "left"
    }
  };
  const Collapse = {
    // collapse 组件
    collapse: {
      value: null,
      accordion: false,
      border: true
    }
  };
  const CollapseItem = {
    // collapseItem 组件
    collapseItem: {
      title: "",
      value: "",
      label: "",
      disabled: false,
      isLink: true,
      clickable: true,
      border: true,
      align: "left",
      name: "",
      icon: "",
      duration: 300
    }
  };
  const ColumnNotice = {
    // columnNotice 组件
    columnNotice: {
      text: "",
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      fontSize: 14,
      speed: 80,
      step: false,
      duration: 1500,
      disableTouch: true
    }
  };
  const CountDown = {
    // u-count-down 计时器组件
    countDown: {
      time: 0,
      format: "HH:mm:ss",
      autoStart: true,
      millisecond: false
    }
  };
  const CountTo = {
    // countTo 组件
    countTo: {
      startVal: 0,
      endVal: 0,
      duration: 2e3,
      autoplay: true,
      decimals: 0,
      useEasing: true,
      decimal: ".",
      color: "#606266",
      fontSize: 22,
      bold: false,
      separator: ""
    }
  };
  const DatetimePicker = {
    // datetimePicker 组件
    datetimePicker: {
      show: false,
      showToolbar: true,
      value: "",
      title: "",
      mode: "datetime",
      maxDate: new Date((/* @__PURE__ */ new Date()).getFullYear() + 10, 0, 1).getTime(),
      minDate: new Date((/* @__PURE__ */ new Date()).getFullYear() - 10, 0, 1).getTime(),
      minHour: 0,
      maxHour: 23,
      minMinute: 0,
      maxMinute: 59,
      filter: null,
      formatter: null,
      loading: false,
      itemHeight: 44,
      cancelText: "取消",
      confirmText: "确认",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      visibleItemCount: 5,
      closeOnClickOverlay: false,
      defaultIndex: () => []
    }
  };
  const Divider = {
    // divider组件
    divider: {
      dashed: false,
      hairline: true,
      dot: false,
      textPosition: "center",
      text: "",
      textSize: 14,
      textColor: "#909399",
      lineColor: "#dcdfe6"
    }
  };
  const Empty = {
    // empty组件
    empty: {
      icon: "",
      text: "",
      textColor: "#c0c4cc",
      textSize: 14,
      iconColor: "#c0c4cc",
      iconSize: 90,
      mode: "data",
      width: 160,
      height: 160,
      show: true,
      marginTop: 0
    }
  };
  const Form = {
    // form 组件
    form: {
      model: () => ({}),
      rules: () => ({}),
      errorType: "message",
      borderBottom: true,
      labelPosition: "left",
      labelWidth: 45,
      labelAlign: "left",
      labelStyle: () => ({})
    }
  };
  const GormItem = {
    // formItem 组件
    formItem: {
      label: "",
      prop: "",
      borderBottom: "",
      labelWidth: "",
      rightIcon: "",
      leftIcon: "",
      required: false,
      leftIconStyle: ""
    }
  };
  const Gap = {
    // gap组件
    gap: {
      bgColor: "transparent",
      height: 20,
      marginTop: 0,
      marginBottom: 0,
      customStyle: {}
    }
  };
  const Grid = {
    // grid组件
    grid: {
      col: 3,
      border: false,
      align: "left"
    }
  };
  const GridItem = {
    // grid-item组件
    gridItem: {
      name: null,
      bgColor: "transparent"
    }
  };
  const {
    color: color$3
  } = config;
  const Icon = {
    // icon组件
    icon: {
      name: "",
      color: color$3["u-content-color"],
      size: "16px",
      bold: false,
      index: "",
      hoverClass: "",
      customPrefix: "uicon",
      label: "",
      labelPos: "right",
      labelSize: "15px",
      labelColor: color$3["u-content-color"],
      space: "3px",
      imgMode: "",
      width: "",
      height: "",
      top: 0,
      stop: false
    }
  };
  const Image = {
    // image组件
    image: {
      src: "",
      mode: "aspectFill",
      width: "300",
      height: "225",
      shape: "square",
      radius: 0,
      lazyLoad: true,
      showMenuByLongpress: true,
      loadingIcon: "photo",
      errorIcon: "error-circle",
      showLoading: true,
      showError: true,
      fade: true,
      webp: false,
      duration: 500,
      bgColor: "#f3f4f6"
    }
  };
  const IndexAnchor = {
    // indexAnchor 组件
    indexAnchor: {
      text: "",
      color: "#606266",
      size: 14,
      bgColor: "#dedede",
      height: 32
    }
  };
  const IndexList = {
    // indexList 组件
    indexList: {
      inactiveColor: "#606266",
      activeColor: "#5677fc",
      indexList: () => [],
      sticky: true,
      customNavHeight: 0
    }
  };
  const Input = {
    // index 组件
    input: {
      value: "",
      type: "text",
      fixed: false,
      disabled: false,
      disabledColor: "#f5f7fa",
      clearable: false,
      password: false,
      maxlength: -1,
      placeholder: null,
      placeholderClass: "input-placeholder",
      placeholderStyle: "color: #c0c4cc",
      showWordLimit: false,
      confirmType: "done",
      confirmHold: false,
      holdKeyboard: false,
      focus: false,
      autoBlur: false,
      disableDefaultPadding: false,
      cursor: -1,
      cursorSpacing: 30,
      selectionStart: -1,
      selectionEnd: -1,
      adjustPosition: true,
      inputAlign: "left",
      fontSize: "15px",
      color: "#303133",
      prefixIcon: "",
      prefixIconStyle: "",
      suffixIcon: "",
      suffixIconStyle: "",
      border: "surround",
      readonly: false,
      shape: "square",
      formatter: null
    }
  };
  const Keyboard = {
    // 键盘组件
    keyboard: {
      mode: "number",
      dotDisabled: false,
      tooltip: true,
      showTips: true,
      tips: "",
      showCancel: true,
      showConfirm: true,
      random: false,
      safeAreaInsetBottom: true,
      closeOnClickOverlay: true,
      show: false,
      overlay: true,
      zIndex: 10075,
      cancelText: "取消",
      confirmText: "确定",
      autoChange: false
    }
  };
  const Line = {
    // line组件
    line: {
      color: "#d6d7d9",
      length: "100%",
      direction: "row",
      hairline: true,
      margin: 0,
      dashed: false
    }
  };
  const LineProgress = {
    // lineProgress 组件
    lineProgress: {
      activeColor: "#19be6b",
      inactiveColor: "#ececec",
      percentage: 0,
      showText: true,
      height: 12
    }
  };
  const {
    color: color$2
  } = config;
  const Link = {
    // link超链接组件props参数
    link: {
      color: color$2["u-primary"],
      fontSize: 15,
      underLine: false,
      href: "",
      mpTips: "链接已复制，请在浏览器打开",
      lineColor: "",
      text: ""
    }
  };
  const List = {
    // list 组件
    list: {
      showScrollbar: false,
      lowerThreshold: 50,
      upperThreshold: 0,
      scrollTop: 0,
      offsetAccuracy: 10,
      enableFlex: false,
      pagingEnabled: false,
      scrollable: true,
      scrollIntoView: "",
      scrollWithAnimation: false,
      enableBackToTop: false,
      height: 0,
      width: 0,
      preLoadScreen: 1
    }
  };
  const ListItem = {
    // listItem 组件
    listItem: {
      anchor: ""
    }
  };
  const {
    color: color$1
  } = config;
  const LoadingIcon = {
    // loading-icon加载中图标组件
    loadingIcon: {
      show: true,
      color: color$1["u-tips-color"],
      textColor: color$1["u-tips-color"],
      vertical: false,
      mode: "spinner",
      size: 24,
      textSize: 15,
      text: "",
      timingFunction: "ease-in-out",
      duration: 1200,
      inactiveColor: ""
    }
  };
  const LoadingPage = {
    // loading-page组件
    loadingPage: {
      loadingText: "正在加载",
      image: "",
      loadingMode: "circle",
      loading: false,
      bgColor: "#ffffff",
      color: "#C8C8C8",
      fontSize: 19,
      iconSize: 28,
      loadingColor: "#C8C8C8"
    }
  };
  const Loadmore = {
    // loadmore 组件
    loadmore: {
      status: "loadmore",
      bgColor: "transparent",
      icon: true,
      fontSize: 14,
      iconSize: 17,
      color: "#606266",
      loadingIcon: "spinner",
      loadmoreText: "加载更多",
      loadingText: "正在加载...",
      nomoreText: "没有更多了",
      isDot: false,
      iconColor: "#b7b7b7",
      marginTop: 10,
      marginBottom: 10,
      height: "auto",
      line: false,
      lineColor: "#E6E8EB",
      dashed: false
    }
  };
  const Modal = {
    // modal 组件
    modal: {
      show: false,
      title: "",
      content: "",
      confirmText: "确认",
      cancelText: "取消",
      showConfirmButton: true,
      showCancelButton: false,
      confirmColor: "#2979ff",
      cancelColor: "#606266",
      buttonReverse: false,
      zoom: true,
      asyncClose: false,
      closeOnClickOverlay: false,
      negativeTop: 0,
      width: "650rpx",
      confirmButtonShape: ""
    }
  };
  const color = {
    primary: "#3c9cff",
    info: "#909399",
    default: "#909399",
    warning: "#f9ae3d",
    error: "#f56c6c",
    success: "#5ac725",
    mainColor: "#303133",
    contentColor: "#606266",
    tipsColor: "#909399",
    lightColor: "#c0c4cc",
    borderColor: "#e4e7ed"
  };
  const Navbar = {
    // navbar 组件
    navbar: {
      safeAreaInsetTop: true,
      placeholder: false,
      fixed: true,
      border: false,
      leftIcon: "arrow-left",
      leftText: "",
      rightText: "",
      rightIcon: "",
      title: "",
      bgColor: "#ffffff",
      titleWidth: "400rpx",
      height: "44px",
      leftIconSize: 20,
      leftIconColor: color.mainColor,
      autoBack: false,
      titleStyle: ""
    }
  };
  const NoNetwork = {
    // noNetwork
    noNetwork: {
      tips: "哎呀，网络信号丢失",
      zIndex: "",
      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABLKADAAQAAAABAAABLAAAAADYYILnAABAAElEQVR4Ae29CZhkV3kefNeq6m2W7tn3nl0aCbHIAgmQPGB+sLCNzSID9g9PYrAf57d/+4+DiW0cy8QBJ06c2In/PLFDHJ78+MGCGNsYgyxwIwktwEijAc1ohtmnZ+2Z7p5eq6vu9r/vuXWrq25VdVV1V3dXVX9Hmj73nv285963vvOd75yraeIEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQaD8E9PbrkvRopSMwMBBYRs+5O/yJS68cPnzYXel4tFP/jXbqjPRFEAiCQNe6Bw/6gdFn9Oy9Q90LLG2DgBBW2wyldIQIPPPCte2a5q3jtR+4ff/4wuBuXotrDwSEsNpjHKUXQODppy+udYJMEUEZgbd94DvnNwlA7YGAEFZ7jOOK78Xp06eTTkq7sxwQhmXuf/754VXl4iSstRAQwmqt8ZLWlkHg0UcD49qYfUjXfLtMtOZ7npExJu4iqZWLl7DWQUAIq3XGSlpaAYHD77q8xwuCOSUoXw8Sl0eMux977DGzQjES3AIICGG1wCBJEysj8PXnz230XXdr5RQFMYbRvWnv6w8UhMhliyGwYghr4Pjg3oEXL34ey9zyC9tiD2ml5h47dr1LN7S6CMjz/A3PvHh1Z6UyJby5EVgRhKUe7Kz/JU0LfvrJo5f+Y3MPibSuFgQGBgasYSd9l6GDsup0WS/T/9RTp9fXmU2SNwECdQ92E7S57iaMeJnPQLK6ixkDLfjlb7546RfrLkQyNBcC3dsP6oHWMd9G+V3JgwPHh7rnm1/yLQ8CbU9Y33zp0j+nZFUMb/DHmB7+SHGY3LUKAk8cObtD00xlHDrfNge+Z2ozU3c9dvx4Yr5lSL6lR6CtCWvg6OAPw9z538ZhhZRl6XrwhW8du1KX/iNejtwvPQIDR8+vSRqJ/obU7GupjdNdh2gW0ZDypJBFR6BtB2rg2OVtuub9JcmpHIpBoK1xfffLzx4f7C0XL2HNiYDp6bs9z23Ypn1fC1Y/9PCFDc3ZW2lVHIG2JKzTp4Ok7nv/G6Q054MIvda+bNb74pEgKGtwGAdL7pcfAa8vOKEZ2kyjWuLr7uDh+/qvN6o8KWdxEWhLwroyeek/g4zuqwU6kNrhyZcu/UktaSXN8iNwuL9/RuvVXtJ9PbPQ1vhmcP6t9+47u9ByJP/SIdB2hDVw9MJHQFYfrQdCph84evFX68kjaZcPAZJWwjMXRFpJ2zr91tfuvrh8vZCa54NA2xGWrunvmg8QWCJ/N4ir7fCYDxatkOeBB7an501agXbygVdvv9IK/ZQ2FiPQdi9osGbH+zRNf7y4m9Xu9Me7N9nv0HXdr5ZS4psHgXpJC9P/wDRTx0Vn1TxjWG9LGrbaUm/Fi5meSvcrkxf/Cg/ow9XqAUk91v3qHT97r6471dJKfHMi8Oyzgx1Z03t1YAQVT2MwgsC3u+yXHzi0faQ5eyGtqgWBtpOw2Ol9+/TM+sTOn8L08MtzgQCy+tOHXr3jA0JWc6HU/HF5Scssr4jXcYqfP6V/T8iq+ceyWgvbUsKKOn38eJAYyl56TAuCEr2WYei//9Crd/5GlFb81kdASVopSFrerKRlaoZj9HR+700H10+0fg+lB21NWBxe2lhNHsUpDZr27mi4dV379R9+za4/iO7Fbx8ECknLCPTsTDJ17O33bJpqnx6u7J60PWFxeAcCbMV56dJfQKf1bkMLfuGh1+76zMoe9vbuPUnLsb2DtmOe5HSxvXsrvWtLBEhaTx29+Ma27Jx0ShAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQaEsEVoQdVluO3BJ06ptHL34b1XRjp4Ch6Rq24+kmjG4Nwwg+9uA9u/73EjRBqhAEihAoe3xwUQq5WTYEzp0b3ZnV/Ncf6O/9AvY9wlh/6dy3X7ncN512Zw9BVLXjuAP4np44vnQtkZoEgVkEhLBmsWiKqwsXpjbPBOn3gRfenwnc+7GBe+zsjclvonFDS9nA9Iy/u3x9+vAP3735VPk4CRUEFhcBIazFxbfm0k9fHD7k+v4nQFaPQIrx8Gmyx/GJ0J/t7ez7mw0b9MmaC2pQQgh0/ZSm4g5TwueWWtqLt0HuVy4CQljLPPYnB0depTn+b3t+8B4t0AdBUv93h2H9xc6da0aXs2m+r1WQsLRnl7NdUvfKRkAIa5nG//r1oGtsZvjTgev/kqYHF/TA+AXoqv4npJemOEiQU1Eo2l+G0movBK1UBBPU7s9E1+ILAkuNgKwSLjXiqO/khVtvARH8dxDBRkMzPrF/V+9/BlG5y9CUqlXinHv9mRPXtvuus88L9H3JPv2zD2yXExCqAicJBIFWRwAvv3Xqwq0/Pnn+lv/K+ZvfPH3p9p5W75O0fxaBp793ce3AwIDMWmYhafiVgNtwSMsXeHp4eNXJC8Nf0PAdRCiuf/XgrnWUqsqotcvnl9DmRkCdweX4b9N7+m/ih+mbMraLM14yJVwcXItKpT1VRve+ArC3Qqn+3gM7132jKEGZm6tXg86J7OhDfuA/iHwPUpfUZSfu2L59tXxEoQxeyxkEgjKeOnLxHb4RqC+NY5H3+2953d4XlrNN7Vq3ENYij+yZwbG9jpt9GkBPQ5H9zgP9607OVeWp87cOQtn9zwJf+xDMNFfj+jryPqXpxj8c2Nn7P+SXey70lidu4IXzb0DNB4tr9751+HV7zxSHyd1CERDCWiiCc+QPjUCnsaqmZ62O5IN7N/VUNP48ee7mAZDTf4Tt049iUG4Guv4ZfNLos9UIbo7qJWoJEHjy+bP7fNsoOcnW0A0/aacef8PdG28sQTNWTBVCWIs01OfPj66BpfqTmq732UnjgT1bei+Vq4pTv7HM8Ceg2/o1qLQug7T+FaaM3IqTLZdewpoHgYEjV9fphvOj+OShWa5V+CxvZtpzv/LwG/aNl4uXsPoRwI+4uEYjAJ2GmdG8L0FK2mYa+tsrkdXZy+P7x2ZuHdW14P+BLdank9q6Qwd3rf+ckFWjR6Tx5Q2cP58K9Jm3VCIr1ogt48lO237r3//96YofeG18y9q7RFklXITxPXV+5DchKb3ZDMy37Nu5tuxG4R9cHH6b42QfAzlds+3EPXu2rfrBIjRFilwkBIIR7SHoJDurFU89ZOd680Gke6JaWomvjoBIWNUxqivFD87fej0e0n8Fwvr0/t1rnyqX+QfnRz7g+8FX8Rv8vL3auF/IqhxKzR2WCPxXqKeq3krDTdj2ierpJEUtCIgOqxaUakwzNBR0D09yiqePHOjveyOkpxLr9VMXb73V97S/h3nDXx7Y2fdPkAYbncW1IgIDxy5vM7LZt/hgrnLtxyaBrJNxv/72N+6tuNhSLp+EVUZACKsyNnXHvHL+1qcgNf2KbSXu2bt9dcmS9qlzo/fARgcmCtpzB3b1/Vg5QiuslLowENyDWDn8cSjl98PgdBviu03N+rl9/WufLEwr18uDwLdevLTF1YK3xnVZ2HI1bUxrT7z5zTuXdRP78qCyeLUKYTUI25OXbm4JPO00TBj+6I7+db8ZL3ZwMOiYdG4dA1lN9HWte2iuI2NAVPapC8O/CGPR34Ip/AZIbIMo7yX8G9QMbcS09P+2b1vf5XgdrXaPfiYns9oeLLEd8D1/B7Dp0E1jGP042pXQj7RKf546cmGzp+tv1TRf6YQD35/QO3seP3xow5IfC9QqmM23naJ0ny9ysXwgq98BWc0kVhv/Nhalbqe8kd/Fr8MOSEr3zEVWrwyO3I29hl+E9LUHGf+nAXI6sGPdd8uV2YphIKnE5IyL6bLxk7cn3bdkHHefrpvJAExMZ1uBZmqeNzXtfzUzk/m/ens7LjV7Px+8d9e1579/44l0duZtge+Np5zEEw8c2pBu9na3YvtEwmrAqNE8IZvNHsep5//yjl3r/0O8yFOXbv0QCO05gP0JGIL+fjw+uj91YeRh/Dp/PtCDM7Zpfmjvjt6Xo7hW9ycmJjaYduf7Hdf/8HTGfa3rG9rYxLSWnsloPg7fijZV8oFM2Ja2a9t6EJd7bCztvHP7us4rrdD/r3/7ct9I99jEI4cOiQ3dIg2YEFYDgOUJDFj1e8TqX7cT4kImXuQr5279A4DeBEX8ayvprU4N3rovcALot/TH13T0fXDTJn0qXk4r3k9OTm4y7a6PzjjORzOOvn1kbEqbnEprPhRzwAKzwFLHk05hv6Yd6N+o3R6beG50aPSdr3qV6IJKkVp5ITIlXOCYn4Yexr0w/DO6YXymHFlR0e5r7tsM3fxgJbI6fW1ivTeT+SsYmr54cFff+5Cu5X+hb94Merp6/J/PusGvTE6724eGJ7RpSFOkKPCUZvBPBccoHBet3Rwe13rX9tw/PjXzZ5hKvr8SfhWKkeA2REAIa4GD6p0feRdWBnvxjv2PckVhVfBf4A29uG/X2i+Ui2eYn8n8NryuDr3jPfWSFV5k44UT137eshIP2K7/64cObbheqZ6lCp+Ydt8TBO7vTM5od1+/NR4SFVhoLpKKt410lnE8LTMzo3V2dLznxLkhYgQ9obiVjEDln7mVjEodfYcpw+MAsftg/7qSDbAnb97sCSb0Yei2fqOcbovVqKNnNO8HmAE9Cv3Wp+uoWjt27HpXNqH9WTKR+kBHKqEFbvo5y3N/avfu4g23R45f3WGa1k9ZicTd0zPTf/f6O7f8dT311Jp2fHzmgJlI/N70jPPe4bEZ6Kg4qw0lqlrLiNKBiLWerpTW25PUbkPXZViW62ecHz+4d8PXojTirzwEyhq8rTwYFtRjvpX/rlwJ+iSXugPbMuyKBOHo3geRJtuT7PujcmVUCuPJlhnL/9NUqvMD2eyM5sxMaIlE4n7XML907tyNjcxHQjty4sZv66Z1xEok/xNW5n4uZSf+8sT5m++vVO58wkEu5sR09pd9w/rWyET2vReujiqygrSopn/zKZN5qMeirotKeTyolm7p/+X06Wvr51ue5Gt9BISwFjiGsLl6N6SrvylXDNTK70D4mX071pwtF88w6Jd/DG/1E1u26NOV0pQL71y3/8PJVOcHMzPTWkcCH2YGOaTTaS2RTN6f1fQvvvDK1bdnbO2JZCr1SeRfn05Pa1PTU0gXJBKW+ecnzlxvCGndhFQ1NRP8bcY1/vjS9bF1V26MwHwsVKiXa3etYVw1TNhYJ3TDjQCO42jJVMcez7J+t9YyJF37ISCEtahjGjxkGDr2DJZ31D8h5vUQJL5RPkXlUMM07u3qSGidICvkzzuSlmlZb0olrK9hD9v9JCrPC196JoPMAolFg6CV+PPj54YeyWecx8Vk2v1Q0rSfhFT18LnBmzBRyNalp5qrSuq7kiAsh4SFa7oZ9M0wzI+cPHOjZPo9V1kS1z4ICGEt4lhiCvZrSa2jol7qzPXJPk6nIGbVbWfUvcr7hO9MP97ZVXpggOu6ajplYStj7l1XvbRMXbPAbp6HzSSBlkraNknrvfVCcPt2sHYi7f3pTDb47KUbYxuvKqkKpYBXKBnV869c3WgbDEixAck0FGFFfEzJzbIsO9C1TyrcymWWsLZGIHoW2rqTzdo5dXyykz0NC8l779i5vu4zwM+eHVntGP5jqVTq/6AkVc5NZ3wNH2lVxNWZNIukMSjiNd9z0+CHp5DXAdX4SAg203w8GB5IATtODHzdK8C15kEjhXvNS9rWA11dnfcMDY9prscss48RySakrOLWqODCoIKAgkuVgsS0urtD60haeV1YYVbbtjUn6/74HXvW/11huFy3PwKzT1r797Upe3jq4sib9u9Y+wxe+vh7W1N7jx49v6ZzbffnQD4/Cj1Pfjx54XiBls6GVuTUc9mQsOIO9mPQFdkIRlz4fy5JLm2ZMOqTcJaXIqpcqnixVe+rdbZ3dbc2OT0D0wZIibHSksmklslknvx+//q3PiKnXcTQae/b+LPQ3r1t0969cOL6G7o6E09qgZegdMJBpVQ1DbKCpyUt6oPKz/4NEJalCAuZFIuEVBJd+jgLh4rvAiFqUVGkhJZMWFp3Z0obGSu/d5gSnWmavuO6h+/cvYHSobgVgoAYjrb4QPMUiGtj1/79jBMkLBwiTlMASlYzTkhWCJyTrGAyMOFkst/BoYMmuIIyGJYcMXMMdNwHPhYN1qWS1t6ZLGaKZL8yzFXTr15BooLLMugHMBRNKgW+It8y9TEcJGt4rvcRFCCEVQbFdg0Swmrxkb0+cf2XOzq73kgdFieEXF2jdEUJKQH6SVWQrNjtZDKlpTPp38U58iUbthk/Ph7sN6zg/xudSGvD4xkq6otcnnjyF0XRRTflkyC0IIJE1JG0QbqGNpMNp5xFhRTcZDNoj66988SFm5vv3LX+WkGUXLYxAuXnCW3c4XbqGs9hwjv+a9lsuN+ahOJSCoLjNDAFvVUll0p1aNPp6adTweSflEszPO48oFn+4yOTmR+6enOshKyYhzWpf/jDuuf6x2aV/qNRaPG/1d0gUXWCA0uu7GhMmkqmerEc8KOVU0lMuyFQ+Ylut562YX9Sncmf7Ojo3BDZWbGLtMkiUVXSWTFNuMqWuYG530f7+/tnGFboxsfdd9mm8XdDo9O7rg6NFq0CFqZr5DWlK9qV0fZqGvZchSuPlevB2VmG/hOV4yWm3RAQwmrhEcW64qu4ykfJho52Vp3J8quBYQooqWDKADftBd6HD+5efyoKj/zR8ew/hWXY56/cnFh7a3RCTTGjuMX0SVB9qzu1qfQM+jO3dBW1g6uVSHv/qVNX10Vh4rc3AkJYLTy+WA/8ou9kJjo7bOh+DLVFZ64TEbCyBktxI5PJZj56R//Gx+NdH5vM4vuI+p8NXh9LjU1iw3EZhXc8TyPuuV9wDaaCfBjTM06N0hVWQmHBDzvSDZ5tvqYR7ZAymh8BIazmH6OKLbzv0KZvJEz3ZzEFnEolaEtV2XEaCLKadrIz//TQnk1/EU85NuH8th8Yf4j9gMZUOrNkZEVZCnsbtTU9KW18GqcKFyjh420sd2+j33pg3F8uTsLaDwEhrBYf04O7N/2t7/o/C2FoGnsIy/YGlvAwSfCvZzLOe+8oR1ZT3u/5uvHJC9dGtJlMrfqjslXVHwjpat2aLi2rjFFLjUSrFUjlO0juddXSSXx7ICCE1QbjiHO0/hofbPgwpnDTOR2V6hWNQqGUx34890noet5yaO+Gko3Y45PO7/uB/lvnrwxrWdha1absbgxo1FWtwplXqYSJY5Nn5lU3bLHQmGA/yko0plVSSjMjIITVzKNTR9sO7dv8RSeb/T9BWmMkKv4D+YzBXuljV7yxd+zfte6VeHGKrHTz4+cv38JWmyUmKzSGG5z7VndoE7kz3uPtq+Welvhwm39weVjOyaoFsBZPI4TV4gNY2Pw79mz8KyebeRIH+VEZTaX0sf27+v794TKmCxNTzr/2NOPj5wZBVjjdYSklq6jN69dyKuhqmWztivYob+RTSkPbe/xMdlMUJn77IiCE1W5jq+s4dYEO6mzsYAmvi/+CrH7LDYxPcBq4HGTFVcG1ULLT5orS1ULIkoSFI2cMHKG8obiXcteOCAhhtdmo6gaOh4EWWlkyYU9gvHswXfgV19d/7+LVkSWfBrItJJhObL/p7elQR8fUZnEV70XxPc01sM+xrzhU7toRgZIHuh07uZL6xA3LBaYB+Ar8rBsfz34YX1j+D5eu317QNGy2xPquSE4mDuXb2IujY2AgytNE67RiKFshzuwCR5s9ZSMlsK0QEMJqq+GkBKOF5yFzRoidK5BoFCeMjM/8mG+a//Xy0Li55KYLBRiTrGjwOQ1br4VMBQuKVJeQKVPxMLlvPwSEsNpsTEECmBLSgbHUpwD1YGwse59l2p+9fmuig4fiNZIowrqq/6Xeqm9Vh9JbjcOKvqFtACX7gV8kTVZvkaRoRQSEsFpx1OZoM2iKxxuHLtDcsZlgLzYZfv7m7XSv+r7fIm234XSP/8o5ktWqzqSyZr89PoXPYDTYkZvziw0NLluKayoEyq4iNVULpTF1IaDjHHZmoAW4aep9geN8fiLt998cGYdtVp7K6iqzXGJFUCAi7jdkuapsBJKcPBwgyP8YRyV7B04Q3dDbpY3jg6gupoMNla5U41BbUN9n0sr1ScKaHwEhrOYfo7paCAW0WiWknihhW/0Tabf/6tDtxpIVSIhGnz1dSXUkDL8fSHKi4/lWPId9Kp3Vxqegp8J/m9f14D6DQ/nmb281FwgkZ1Dj7bnSSFx7ICCE1R7jmO8FJJr8jCvjeNrIxFjDJBpKVaSlXhwDw384MyucBoLAGEfHI5ptO6n1YAq4FjorH9IWjUOnFlF3pj62aui3whbI33ZGQAir/UY3XCVEvzgdw/8NcSyGUhSlpVWQrFg2p39xp0JYLyIohaXxdZ2FGofG6yi85/QS32F0Asu8URgu1+2JgCjd22xcsVElPC85169Gaa1YTkRWJKpSqooBiQQzONvq9sRULKKxtzzAEJw1api2EFZjoW3K0oSwmnJY5tcoSD09HanEDztubnfO/IopyUWC6sUmZUpW5aSqkgwgK04DxxaZrFivacCaIdAuH9zaM1rSDgloOwSEsNpoSMenvU93dXb+EE5taFivKElRqd67qrNmsqIF+yjMF/i56MV2JqadYKxXMDXM6+4Wu04pf/kQEMJaPuwbWvPticwj4Il/NnTrdl7JrqaDC5wTUle1GmdWWVCw1+JotjA6PgnThsIdQrXknF8arkJi/+R355dbcrUaArU9ha3WqxXW3tHR9C5dN//T9eEJ3aGdUwP7T0V7F86Mr0VW4mF6o2NTS/ilaB2HDmb8wA2+08AuS1FNjIAQVhMPTi1NgwRkGKbxRxMz3uaJSRzVUkumOtLwo6Zc7aOkVdEhynN9NQ1cyuNqeEqD67mX9TXGyxXbJhFthYAQVosP58S0909czfqJqzdGODVqaG/IUbCWr2p0yukfp4FUtDfeir1yl8IPUGjPHFy/fqJyKolpJwSEsFp4NEfT6Z3YBvOp8MvMc0hAi9hHNQ1cBrJil5TUZxhfXsTuSdFNhoAQVpMNSD3NMTzzU1PZYAM/ProYkg3UV5rHT8lXmA7SwnwEq4FLLVkRI04HM+n0LdvzvlEPZpK2tREQwmrR8ZucCd7hePr7rw2N5PfxLUZXON1zHKz4kb0KnIttP6Njk8tyaimbwXPrsW/yq3v3bhoqaJZctjkCQlgtOMCYCnU4GedTI+NpQ32XbxH7QOmKG5nzdIWZJz8HNkKygqI9TmSL2JSiovGVn0A39c8WBcpN2yMghNWCQ4zPc0HRbr6GEs6chJFnmfl3knZO4/hmII1B6fiFG9br0s6qAeXPp2WUrhzHeXH/jr6n5pNf8rQuAkJYLTZ2kK7Wul7w6zeGx9DyUsZovOodOizosTg1TM9k1Wogpa7lIisOF+w48E/7E5B1Y/cgtdizsBKbK6c1tNioT6X9n3MDcyePOo7OoJqrC6S0+ZIYV+GSOHxvc18PJCxXG4ed13I727axqTp9yk9rX1jutkj9S4+ASFhLj/m8axwdDdbgELxfGsLpoZyqVXPVU1QugVJUV0dC27p+FaaBWWxknq6ceAljTNMiAf/BoUMbJpewWqmqSRAQCatJBqKWZpgJ731Zx9pJM4aK0hXe5vlKVFEbKFlxs3PvqpSSqpbzKztRm+gnEkktnU6/2GFMfa4wXK5XDgJCWC0y1iAR6/Z49iOjY7C5qkG6mk+3SFQGlEP8FFdnygrNFqBsn1OxP5+K5pGHbcBhqhT8fqu/v39mHkVIljZAQAirRQYx7Wj3Zj3tddQjVVJ4l50CMjHe8mqOTJCCvmoTyIrENXx7Uinbm4Gs2PZUqkObnp76i0N7N36tWl8kvn0RaGnCGhgILKPn3B3+xKVXDh8+nPseX3sOlpt13+P4uonv71WeDqLr1ampFB8S1JrulNaHc9rTMxltcpofOeWns0rTLkeIZUHRnpm5YibMf7kc9UudzYNAyyrd8ZLpWvfgQT8w+oyevXeo++bBtaEtQd9s1/ffRsV3I6eDJCp+nourgH04UZQnhIYfWm1o8xdUGCU8/E/bil89sH3dlQUVJplbHoGWJaxnXri2HTvd1nEEcCBS3z++MLi75UejQgcmJjL92ax/gNJPo6QekhVXAbdvXI3D+XQ1Bcxiu02zTAEjKFIdHTQS/S8Hd2/4YhQm/spFoCUJ6+mnL651gkwRQRmBt33gO+c3teNQYin/oG6aKX5rcKEukqqoWN+Ij5vy81v8UATDG0WGC21jlJ96K6wKPpWd8H8jChN/ZSPQcoR1+vTppJPS7iw3bIZl7n/++eFV5eJaOczX9Z2YvM1LPxWpocBHKv8qHHdMqSphGUqqahaThfj40ITBcbLnsDj6oXvu2bS4n96JVy73TYtASxHWo48GxrUx+5Cu+XY5RH3PMzLGxF0ktXLxrRoGNVPPfNtOolIrgElLGYH2wbZqcipdIFVFlDbfGhqfj9bskCaHHS/7gTt3r73Y+BqkxFZFoKUI6/C7Lu/Bl1jmlKB8PUhcHjHufuyxx/g5lbZw+BL7bX4EoiZqyS0T0uM0j1+82QSl+ua+bhxj7GjD2LicwWkLzaarigbKsmDJ7gcTmezMBw/t3ixntUfAiK8QaBmzhq8/f26j77pbaxo3w+jetPf1B5D2RE3pmzyR4/nH+Mti4Wx1dUrCHO0lSVGqskFUnakkpn6mhu086jgYHkWTW3Wbo4Tli6L5gqYHE47vfeDufVv+YflaIjU3KwItIWEdO3a9Szc0ElDNDqcLbHjmxas7a87QxAnX9ljfxcr+Mzs29ykpi1O8iJjoR/cm5o7dnUl89LRLW93dyWmVIip+Kp7pmlWqIvQ8Mga9Gslm3Efu3LX+K008HNK0ZUSgplnGMrZPGxgYsIKeXa/TA61jPu0w0+7xBx/cd3M+eZspD0wbDgWm+RXP13cODY/jWGKuGAb48jG+agNpilbqlKZoWDqDY2AyjtNUlupzYZlKpXgaxIVMNv0zd+/d+uxcaSVuZSPQ/IT13TN34QRvZW81n6HSDdMLUqmjh9tgd//Fi8OHEl3JL3Z2dh3MzGA7XU664llVWRz/QhLjNYmsmaWp/DjCjqIDdlaZTOZZ1/A+fGj7hjP5OLkQBMog0NSE9cSRszuswNhdpt31BRnazM3U9IuPHDrUuG+419eChqU+cvzqjp7u5P9KJpMPpqc51Zv9QntLkFQBEqZluVCw/7nhaP9i376+8YIouRQEyiLQtIQ1cPT8GjOw7vE8tyFtxBrb2MBXdh579FF99g0vC0nzB548ebNHT2l/aFmJj1BPBYyav9EFLaQ+jdPAVNL8/pZ13a8qiJLLOhAAjvrTRy/d0enbF+69d0tzHFhWR/vnk7Rple6mp+9uFFkRGF8LVj/08IUN8wGp2fIcPLh+4sCu9R+F3ucj0MLf4vaVVnChqYWmdaQS2jpY2vd0djh86Vqh7c3Yxm8dudTPxaW0lrn7yJEjZW0Tm7HdC2lT0xKW1xecgHE3FDWNcb7uDh6+r/96Y0prjlIO7ur7TOD5b3ayzt9ylY0Gl83qKFXZsCXrXdOlrV3djf2LBr556JOshLDmMWhPPXV6vav5O5jVxYLUhNl3iIbV8yiqpbI0bQcP85C2Xu0l3dczC0XUN4Pzb71339mFltOM+Q/0rzu5f2fvu1zH+QDOt3uZ0pbVRMRFouJK5qqeTkhVqyBdtdUmhGV5JI4cudrpd5kHiyp3tTU/8s6r+4rC2vCmaQmLWJO0Ep65INJK2tbpt75298U2HLuiLh3oX/95L+0/kHUyvwTieiUJHVEimVzy1UKeWMqv2pCoKEVFRNXT1aHawnBx80eAZj7TwcxdAc5Gi5fiaNnNT37nCk4xaV/X1IRF2B94YHt63qQVaCcfePX2K+07fMU9U7qtHev+xE/7r3cc70O+6w1gxuV0dHZiusgvJS/O7IskRXLs6KCxqj+B26t9a3uUREWi4plbQlTFYzXvu+7tB3EIUGel/L6e3TNw5NS8zYAqldss4YvzBC9C7559drAja3qvDoyg6pwCP+KBZaVOPPjazS1vMLpQKE9fuPnawDB+EqehPwzWuAuSl8LPg90WVxhJJPWQCUmPBAWTBEz1TFUGpqO3wYYvIPgr2az35a2b1/50V6f1e1NTlVcvEzB0xRekj67usu5FmS2/crvQcaol/zeeObfTSOj91dIq28PxiaOHDx9quy8LtQxhcZBqIS0Dhkl2l/3yA4e2j1Qb2JUUD1Iyz1waOQib0vsxKXsAFvH3wMB0JySwtZC+DBPTN5BOCEnhrI1BuKe9l6tIzsVCiD6E0DOabrwI2elZ09aP7N3aNxjheXvK+a1OENa0EFYEyYL9rz072Ju03ZpNQKj7Xd899cKhNrA9LASvZTY/s9GcHoK0XsrakLS8UklLxyl+/rj+/Qfu2367sJNyTS7SuZfneO7ffweBGScu3NwAqWgrTvTc5jjBZmw87tMCfRXYKQWOgula4OiBOQUZ7DZuhrAGdQXxV0zPuCaGnkv3VPGHOpPw7+QPR62OM5HhdNddGOeX2kmCbSnC4mDlSStVTFr4eLljdHV+702vWz9R66Cu5HS5h5hmHvz3QiOxwJTRo2BGgY06dm7OVhewYGAY6s75oD+ZDs4JPY9JyqSCQ7ABqftd5VFM3/j2Ja4mtsWpJQSq6ZXu5UZTKeJnsHpohiYPRqBn04nkS2+CQWW59BK2dAjwS0Y4IHDz2ERWG8Gnwm7iK9W3sFmbvrqGPzw6gW8eTmvTM07XmTPX28KYd7EQ3rjnvv1QFHbPt3zT9DcMPHd+13zzN1s+/hC2rKOo7NjeQdsxT5LEWrYjbdLw05eHtwWe9jl0542u62HZHZIVpalY/yIlP5X3MHYddLLZfy4fmYiBhNuB509vw+rG3tKY+kOwGHLi7W/cS91jS7v4s9TSnZHGLx8CICH9lXNDX+zpWfXuycnaBV2e3e567nAm4973qv0bzy1fD5qr5oEB7KXt0u7B3Loh7yhWVfypbOalh9+wr6U3mbfklLC5Hi1pDRE4ef7Wj+EEiZ+amqpvJT2bzWjJRLIPR3n9riA5i4DZg720DSIrlsrvHXSZ9p7ZGlrzSgirNcetqVp9/vz5FJTqj6JRejTdq6eBMzNpHP9s//QrF4bvrydfO6f1JrCX1mvcXlo98Kembjotr3wXwmrnp36J+pYNeh5JdqRem83O77gxkpxtW3bgOZ/g1HKJmt3U1Rw+3D+zrc89aunagnWzpq6PdxujLz388L4F78tdbtCEsJZ7BFq8/sHBoMPX/I9hyrGgnuDUUZzrnnz7yQu3HlxQQW2Ued++fZmJ1e5LoPB5k5ZpWCPXz+08du+99zrtAI0QVjuM4jL2YcIZeh+2+9wF49MFtYJSlgmHE0g/JlLWLJQPg7RmhtyXsJ18eja0tivsXhj6xy9ve/mRR5TRcG2ZmjyViN9NPkDN3Dz1FW5z9XM4i+s1ME1YcFNpUIrVLHzJzHnwjl0bn1twgW1UwPHjxxPXpztejR0HFTc+F3YXRwxdfdM9W08D0zrs4wtLaM5rkbCac1xaolWOvurhZIPIih0OdVm2haNTfqUlAFjCRnJP4HBn+iUqz6tVa2nGpTe/etsP2o2s2G8hrGqjL/FlEQC5GHghfplSUSMdvwaEA/9+4vjpa3c2stx2KIsfUek2dr+EuXNF2xEjSJx98w/tbFt7NiGsdniSl6EPp84O3W/Z1oPzXRms1GRKWdCJdeCIlJ+vlGYlh997r+70+EPH8NHJEtLCauCph+7bmj81ox1xEsJqx1Fdij4Zxi9AT2KSYBrtslgxhOD2gWOyz7AstFzx6zFHj1mGobYUYAgC9cHge3ddK5uhjQKFsNpoMJeqK6+8cm0X6noXiWUxHA8WxAdWNyQM45HFKL8dyiRpueM7jllmMGpnjO+1w9fNaxmXxiogaqlR0jQdAkeOBPjczrnOiQ6jw88ESSOA6KT7iQzOHEvavu1pZsLQg4QPP/DdZG9Xx/vWrOr+mfR03SvtNffdxleAQIgvTzjBT0w409Mpu2faufZy+vDhw5WPMa25dEnYqggIYbXqyNXY7i/jCyvdfmaVb5hdVsLp9LJGp43j1/1A7/RdvdMwPRzEboRnLVHe9vEvL3eXBOB4ZMta22H+TiqV2LJQ26u5u6Bju44Z3J7O/Lvp6cwPmBanOwQ4uNHRTWMK21bSvh1Mm642nTWCtKkH07rnTE72aOO0XZq7bIltVQSEsFp15HLthg5J/+aJE12m3tVjOPYq1/dW4cTjHnwMYhXOce8xDd3y/PJW6OpMdsTRVy4iK/rKMR/jwvz825VIHFzT3fkx13UW/dnhRy3GJyeeHEs7n1XNibUPFvY6vtGDw5vV9w0Vofn81qGhZfDhi3HX8SfQ/3HPMse9CWcCX0gel2OIFJIt+2fRH7qWRaYJG85NxldGzV4tGayFSLQ24+q9ULyu9gJfMU5ELTn6wUISTl03NHz1KzyiJLqmX657OLLdSJgoXTO7cBxyN172blier4YCvBsFdSNXV2dC35tKJrbzfPfFdjwvC/qs9MSMxxNRsSqmT6LhUDQHE+jUBE7UnATXTuLsrRn01K2l/x6+qItiR3TNG8V59KNB0DGSfNXGUXwJY2Gm+osNhpSvEBDCasIHgVLTt75/aQ0MnXpBNb2QgNYEntfr4wu/nBYpKQLtxtdwAh0SBX3VDe7nM/Ha5vf1Fb/CURS2bCTAWWuxR229qRsbQQQbUed61LfW14JVKKsTJ5sk8WUcHbtlNANyTOhgcmAGKH7p3m1FWpqtuZCu+LByVdKHVMjpKEQrBwIW9tnpXOIH+QTDSH/D9f0bmCLewDn1I4HmwtAypPDZ/oe9oXKf/aMPsWxSs/RR13FHrURiZE1gDR86tKHEdCDMKX+XCwEhrOVCvqBeHNaW6ui11/mWDtLQ1kEiWodXE4rwYgepAPssTPCMOjIdAk94TZ8pMZjch8HjDorGFUTUAwlkh64be0A9/ZCatiDZWtOyE7ClQmIdJICJFYhA+TRV4Fo5/QIHiUvrTEbkVRCxiJfsSBbfYk87OTExXxdazY5yUgiRKfpHQ1YSkONmAZY+gV4NIeVFfCXoLNA5h/Plb5LzWAyzF+IVXdNnvO/6GcsyhjC1vmWZ7s2pO3fdOqzriy9asnJxZREoerDLppDAhiIAEtCfO3F5rW0a6z1PX4/nf53nG5RqqrpieSnULEVh8cx4E7ugH78H8tG9eP/24oVezY+pkpA8b/abhPF8le75BqdsXUtaFeaTlTI2IByEoU1l8oq1mkokcZHElIRoWmpejMMCMyCvQXyy7JjjuUcgOl4tLCzCMpTHgFpcgkViX/dH/ax2Szf8m2Yqc/MN+1r7BM/C/rfCtRDWEozSkbMjq7NTY5t13dqE6dhG3wsSqlp+C9DDi0ifLrqmT1f6BgUaPjiHN0lJAGAfvpWcI4XjiHIMF6ocO/EjmMa9HeelQ1LT1PRpoce/sJwOTCQtc+kfGQp6Uxl+9JWtmL+jNEaJ0gKBgbsygR58B4sHfwV5aliVWg3vCHv6ymHcdG868IzrVsK6pnd71+/dsmXxbD3m3/W2ybn0T1/bQFe5I8euX+9ybuqbXMPbDA7ZCKV4uMOecyz+9OfmWvj9x9zEw6JW+JuOX298WhE6qtwLEV3TL1tb/AWj7sqwfqaro/sdmcyM+vBp2XzzDEzaBiQsNH+e+eeTjQ+ohwqnG0BYhfVzNYKrkOmpyauYYH8KvD8G6RPBszrC6Jq+ystl0ghzXEZjR5+O4+iZwTh+eG7Yqa5rq/3hGzzTSkXKn4YgIITVABjBP+ZzP7i8ydasrZCetuCHvIvFRs92SEdlpnCYE2LOQi12OA7RNf1yjrphHIyE9yOXPnfNMDg70DpdTf8DWDKs5rRvMVwChAWrUgh21HzllD0NrigqlxKVC7bKQuOOWeGiuI7OTkhb6T8C/Xw3xkel9cXxj6eIxiY3Hhx3X9dHsWJwDaa3l1+zd9Mt/F4tUk/ijWnP+/DBb8++LWqvnh0c7NDGta0pO7kl6zpb8AJzEUr91kYEFdeBRCt69Nm4+AsSl6jwjVGckY6VwPwUpLhLURx9xliWvxFHi/w+zB0SWCnLsVpxnoXesSI2ngp4zmRJXPgf/0IleGH51R6uwjeX5MR76qtITh7+8N9Cp4GF7Sm8Zl1s35pVXVomm/5c1vG+Wm284njHJeJq44/FjixUAld8w7uijW6+xo3MhW2S6+oIVHumqpewglJ87+LFtcFUcqur+1vxwPcZJqYPMOyhXw6GKI4+4/GwQpjCBhe+6XDIpFb06PM+np5hhS5eXzw9bLJ2pBLGv4Fe36BU4kA6IQGw8MUY6MJywVeqDs54Z69zrWdY7jI3G1ZtUiSV6zzDI3IqLLew/wu9jspl+yywrA1pEed5QceXPT3jBb/DLrA5ua5UHZ/4eMTbFx+fwvE3DJO8fANrjlctL7giJhRx9MrfR89R+VgJ1Y6currONuwd0FNsxwtV02mPlWGLy1TxlPHf6Hh8PH9xesvw9yRM+5PIRT2ZIgVKKZxWUY/PT8aTFPji0i3m4Ed1hDWV/7uY9bNGtiGqAyorJRWSqCgdkrQiR5KddrwPlsq8xfhG6efvx8dvtiQczDdmmPaldDBxSVYeZ3GJXxUMWzxq5d4fPz7Ym7X1HTAL2A7NqtJHEQ3qtCPjw3LoxB/v+OMZ5VVzR5aHWRuErYA+y4uu6fM+Xl9J/lh7bFvbY+vmv0bWos9tsXAWSLIiaSnyApHxJz6SbFSFuXTw8i86r5vVRW1m+6IHmUREAuI0lcREP5q2ztWPrO9/YK54xsXHI56+cePvj3qBfimZNS+J5FWMcrjptThsRd4dPX9+DcwEd5iQphwozfkCwJKaLv9ewHYKeicfSudwShcnJDBBOD3MTwGRO0cqLIj73jQTaejDBYaPHTBgJ/i5+HyYijd95sFhRzkzB7yL2IrCtGwezj9nOQVTUlfPwiicifnu5J0qHHd8mXHIG6ZD7JQqIk9kJK6QwAokMWRUhMaSeJ0vcfaiXNhs7PyuwpYV51Vh+EM/Pu2M9GckpyiOuZm2Wvtom+Y4me8xPbvIIujzPu6Wbvyt1ejL3U7Sv/v754ZHsORwaX3KGdwiJhO5pzY+Mivk/urVq52jTnIXlEc78LKu8qAMx/G8kHhyOicosz0ovM3IrIDKb15HSvDoOoqv+hMLYCOWI8ash0vmufryZVcqLz4u8fym3ov1xT/EVp4UDUTn4/iS0xW+sZTMojASmLqGp64iH4FRXJQ2TKj+lv7JVRTVxwQkm9APyaboGnGMzSVR6VR87ipsVT645ovOzi5tamb6zzB1/nqzjz+s9YetwLioZW5C8jq08K9+1IxS8yQsfF6ap1WL2BK8VOaJc6NbPcPrx7wJ++hmHQUPvOaQgMJ3ETtVlERDP0wVsQ19uPgcLQyt/Dc+p4jlL6k/1xa2qVyh5ApEzEoErm/DsPOTXV3de6anq36roFyRdYWVbVSshHJEMt98saIXfIu9koplYZL6m/hUz7kS/Jt0/PE8+Jj6X/Y6k+fv2tA1BKIvB/OC8WnGAmp5dpqx3XW36fjgYK/upXbhFd+BrRlqn16MfkrspkoC4hnirYjbUVWzs4rHx8uL3cerjwt0TA4RcBcsuX8Rn97q54okVsCKJJ9YkSvy1gJR4aOtnAr6OJP+L13d+BKBKMEzHhAfgDh6yzD+vqHjTDDvYpAxLqwEfVdbE9bpIEi6V27tdLP+LnzPrWS/XrRTnz5d4e79+LNY7r4kP+Z7Jv7z1LyPL0B4Tb+ci9cXLy+eJ54e8Rw//rqqcUR+HOrgYVprJbBl5E2w63oI64J7k8mUDZLGhmAXs19ucVkxP8gKQu4ptCxbMy2TW3KAGI4u1P207ztH3CDx/7bL+Cdse8h1Zy5ev7Dp8uHD7blJuy0J69TV8XW6l92Dl3cbLG6g98idbhDgdANcY1ZY9o2N4mpNr96GRf1Da3Wui0RW69F1bWslvp81LD2xDTOGu9DhQzBc7AcYfYlkAqo6A6ozqHNBYJTESGitTGShsp0qQSxT4AcoPJQw0LBlEPhBFakHDjoLvY+XgVIyg7WK77tG8n9pvpHXBbXL+OMBd7FN6KLu+uf27esbX9RHdIkLbxvCGhgYsDb3v2a7obt7YHakpKmYiqgE2ioqJbzIOszXcSov/DAzRRNehyJKvPx4+igv/ZLKEaCkoZxUFMYXE1I8f7Xyq/UHp9CkAlfbCF3NdlhS7IQguA0N2wiJYy1ktC5IISb1Okr5jSYruy2SGlYkIkKLSC3yy/WrUWGzSnjaTUX/QEhYQuNewLCdwBFKRkpOuAfr4sBnwwfDg6B0MHagORhBHNqHw5WxTwYav6lAt/42MBLfrYZXHO9w3Ftr/B0Hp0pY+tkD29ddAz5ln8NGjddSlNPyhHV8aKjbzAS7Dd3egRcvgRHJWyrHASw9Pyp+vlSxEluH0jWAGQF9VVZMpxHVRZ/xSKQU4PR5Xy0+/sLQZCFS9DN/XKtSeh5WrL2x+sMyZv+W67+vwz5eC7oDx12rm9pakNg639B68XL3Qh+2Bm94DySxHhg0daBHSQhiCbyyyMS9SDi8RhEHyYP1qD9qak0S4VGn5VYrSTRKEkKHWYYiHuQmCYb/YKYLqS+3H5LYckxJmz6qhSYJ5yNgzgtuclESpncBfN8Fj3lgJdCSGpHcGECoxrouMoHjzO+4evLLMB1VKxJV8Wyj8Q80Ix043jnTu32hlTdkh08Yn7UWcnio9Qs3pzZm0lN7LCOxIdIZxbuQ1+lAVFFxJB7aMeUIiPkiPRPjo2v6dPF4FVjHnxi/oQK0Az/bymf5uI7ayGLj6eM63nrbF5VNXzV7nv3HViQL3JAEaSV1z0iBNJIgJBCYkSKJYbdjEiSHw7a0BI5s6QBBbINUswMUsQ6E11UojZGccA9dcZDBdQY+TgyFTgkiEKYyIBvstAQzIRk8cBJ+A2j4gZFDFWAqjAp3V5IhQYYwwUJ57ByS0QINzMYK8FyrRxt3KNbXb2qG/UVNT5wDyCt6/A0boGbdqzPA4tD21SPquWihPy1FWHjQzYs3xnZkM95ePIZd8RccBx1xez/UPowp46I4+uVcLD9/8Plq0Gfy6Jp+uez5uqPyY+UtNN5DuVQc06drpv4bIDXsjtsMpdkOSC79QK4Xog3PzwF4IBNCBiIhpBSpoE8jioqWaM2KCRuOqwLXgIQItKIe0lCYD/lZjoqgGIo0+J++SsmMKA8eqQ21qHuUh2PfzQHN6vgG6vVK8GfmQhcbr3Yff+AEi3rtdCtNF8u/eIWD2ATXx4Mg0XH1Vr/hm7sDQw8PvyvTrriKWocEE0C6oM/kJRJHrAykgj6WGlq+JUifu6YfS6pu4/UVa6AgQcXKi78ApekhcWFBwMstEkTX9MvVHw+Lt2ex+4+Pg62CxgsHEwZbAdgWIJfA+ICkfDRYtyAwWWB7Ay8F8VT/KB0bOJ4Gx/CQfUKSwZGrJJs8iZHYgB0zMB+zk8hopQ8hEcEog2ERASIBAOL5fIrVIKLxXKtzKPZLgZUckvGf+/nH5HsK0+Uz3316zeAjj3D23Lwu90w0ZwNpiZ72UnvwfO/AXIFnXfLBxLOsHn6yiLqmr3oQ04LHX9hq6TFHI6txrlYWkHj98UT1lh8vryR/rIKq6aO204drdP8hRWF3itmLUw42QnW1CSTSA2IAIXkWOBYKLWw8wjVqNkEaFqjFwLQNJhWI4ZiFoiq6QX0SbsEo6HMoWVFCYprwjw6FP65BXCSoXJwiOwpnFK9A6yiWkQhRDwA9XAfpwLS/AqnqSKP7jwapquiznXFXMn6x8Yg/X/HySvLHKqiaPlZfvf0H6BloAM/v3tpzHkJwUx59Uxb4GE5Lfnt2ZGS16SX3+F5mq4llfegtwnaSR6J5EC8hPUV6IDaS6aDnoZ5DpYe6AtdgOr4pyhXLNPH0KKCo/DDP7N+S+mI6qHzbQr7AbdgW+iylWn0l5cf6E29ftfSN6L9lGl04x30tOtMHklmLhxpClW9BL4S1T+i2uNPRp+0FflD0AN9A9LHnmHGBBfJCE3QL9ALiguoJqiu+64gDzWGIIAlhzhaSDsMV/yjJi3BxyY9khP9BXBSzEMY/AFORGMmM1yyKZfmm+ZKuJf4uMHV1THEj+o+S864E7zYd/8Dliqp2MamvPbt9uw4dY/M4DnXTuMuXx/scK9iHLcbryzfKwvOJBSGNPl10Tb8WV0xYyMFymDdXXv46Kq+ueChJQI4WlSUqf8StOf5CNdXqr9afxe8/Gm6AoLAqGKyCGLSG350ACFzKM2FvaeOseEhFOsjItdQ2S6wYYmkOdl2+CfLBvmpIV55vYY2Qn6uAxAWC40zbhxSmWArcQj0TSIiSU37mx0kgVesgLereOSz8E5EWJa6Qzyh1hZEcO7xY4Ct9WLfNvwa+5xA2h6uGP6vMPxMsZ8WNf0Gf+cOCw9usq51a5+kNG9Sn1IjJsjoO0LI7EpVra/vxhPdFs7JyjYriohlbTAKGxO1C6oJEljseOLqmTxfPX66OucJK66OUNzuDjK7p05UIbGwX25I/vrj4BYrnD0uZ/Rtvfzz9fPsPIkgkbL0DZNMFRVEHFEY2ZCBTcwMLdfCsCCVN4SwpE9YG+ARNgD24IDHYSYB1yNCYDkLRFoC8oOUG40AKQx5IYyAmlQ6SF7dDoSof0hbJiApzqLs43aPc5UG+AvVQ/4T7nGQFQiJ5kdbAkmgH2Sz0FaWB4gLrad22v4nmuvPt/yzCc1+V4t0e4z93r8PYwDCvNANxLSthkai0jmCf5+jq6y6Y4SkjTfoKprgWufj9Dg3AozBmiK7pl3H8WDH3u0YfLY6u6c/HVS2vSvsxoygyTF2q/qNenEyjJ5NJPYGPRidME1M1/JYqwyoNq32Ihu4J0z5M+WA2DoqwEI9wfmEaEhQJzPNsKNOh0jJwrfRVJqbnNOrC6IGwQFzgHiKrpCuq2kE+FizrMXWE7IWCEKemg7hSiimOQchNIC3EchqpHlBO95TshQThkwF5TL9k+Mm/MZLGzVo3AlQdLzagDle1vCYd/wU9/5Z5ZcyZPnNow/J8ZHZZCGtsbKw3rdn7nIzTx42o0WfP1cPKuYJ6XPFs5q7p8zmKx5v8cdcxDeMPOR1fj+gh4X10TV/dukiC+nJPeLy8eH1hrtm/UVvpKxcrP2oL/dlcs1eQ9PCeo73wGcp+R2Xyvlp74vH19B9EkoA2CYKUlcQqJCQj6vkoyBjh/IurcJiy4Zxy2FMptRBO7sK3kClR0UYUZAX+wMqfC1ICiYHMYBsKSQsSFKaAUEqZLoiK00ASFsgpN0UEUWE6yOkiiArE6NmUb91OWwAAEuNJREFUszCNxA0c/uBoF04W86YOarWQAYjGmHBBEIkUiXEqib025hNmInWknv6zKo77Sh3/RvcfSx5Xl4O4yr5Y7NxiuEEQFT4uvs8yrF5VvosX28LLS185vsiRHkc9YPiJtrCbJIzHyx3gJdfpl80flZWPR6qIxJghus7xjSqj4E9UNn2VvN76Csqq6XIR+48OYEeGlcAaXhLfQwxNQcgQEI9IErOOxBUuCuDLz9Arm5iyOTaYy7Jty8hAb2VCm43ZmwnwQTbgFpAWyA4SGEKhaMdgYNpngKAcpeMCAfFjYGE4yAqco3RZ0LorUqOkxVkf6AgzvFBPFbISSsOUD+WRrWijpcwbmI4Gomj4yxAIv4bPVU+q9sfxk/EP36UlfP49N3vNWr/m9CZdX/zzjDDofAoW3XHVr9NPHdB8p2+uORl/mjFLUktMbBTtkSJbpLCRxYyD5OpJps/4+DJuvq5IIgoLqfi3pLzcRuloM7QSzKImsBSWG80LVKkxkSvOkFHaCjL5QvrPN9rwvaSVtEg2ICmQCNRQkGjwnlOpNktMxdds+GxcRFrIyCmhTQMEUJjl4qwtzPbAOVC8o0DUZroGiMmBpEUfRBZ4DvRUJC4/1GOpij1ML9XU0PJdFxIZGsOpJkkOQ0YdFh5CPodKl0WfRqQkVUhTIEf1iN4GkdJU4Rx/xsJfHkpfMv4cd+IAUJb1+YdkfSU7NXp6+/bti7qquKiEdfVq0Gl2TO2DonYzAcUTCv0slCB8FuGia/q8j7iAPl30aNIPHVKq55w+00MvjFLo05WmV8H5P9XLzydVF/H0xbGl9UGfjm226B98po2u6fO+0f3H9M7SbT1h+FoS00ybSmm+5/RZHxzbwWvVHtSvNuLRR4BKl0vPtHRhWh1SESUsNBkH0qjvNiAx4MA1JDBc4yBmTPmwJArJCFM+dA1SE5XsmFIqRTzKUrZYkMio78IUkauFoW6Mcbin1GWrOR8nqOEUEUQFmuK3ZdEw6NFg92s9j3XLp0CIsAuS8VdPkcKhCZ9/KAc81x/c3NdzFjy6KHZc0YPNh7VhDg9jYnh4co9n2dvx1nLalys7Rimx2xLGigfEJBQ0Xr149FkBVb04BQiTlPAFbTiDxRGKM1pJf5AgarPKG0sQu413N07hkCANO5m0fSebtCwziW5DqMISHTRMJCDF23inYbmsauNCHq+Vn1ta5dErzKN8psP/RiIXVpAegKJQ30Y06AQSEXdAIpdL0wbTNsLpoSIeCwRJHZYBpTusIFAIlPC0iqL5AxoCcmLPQkkLdITRCc0dSFqQD1A51g4pLOXmhZCwDMO2BpH9q6ZtDoU4oKQIy5yEynFnv+mzw+0+/q3Sf5yT4aYs89zq1alLIK7wYeQANcCpgW5AOaqIARzxcudrXrMTz+cuFAxBI1Rw06eLKz3xsnDikt+Mmr9mWBlXrbySeJAlTt8MXJImXHRNv0zx2GpWZ3r0KKqzXHlRHH26+fQf+mkbg56ADjppUuihMJl7BEhGtmnj+4Phj1lEUAzjaQcgJkzcqPPmlI/yjdJV8Trf/+hbeYyP0uMS0zSVF8SEaSELxkhR6a7IC1IVHkNMBWEkCljxYQ7YXgWKrDCHw2ohJDDKSkr5Tst3TANBp7DdgkTFKSOpxYMtV2i3hXQoJjwbBo3L4oibAajdXmSbCl01PEvi6x3PetMvwfi3cv+xHpPRk8GZvo6Oq5y5FvZlvtfqQZ5v5igfH7iRdHqrn/H24McyEb6ejCUxkCwqEATi8JDNKtWRIxI6wrLj+aOyQgIqLT/KTZ+OLYnCFGHE60PdSgzIgVmcfrbt5evjYkB97VeNyv8plx/UYoChElhYgB7KtD3PAUWRpejIVNzNAjNzyDuYRqnrMF5dIx4CkTrlAJQRps2FhZIX5lqYwfFLOygTBeSmkUhDEgNvIC7MR5ML6JhozoCpn+858G1utbH4j7BRT0Z9VlZzbTyOKJCKeCjkqYbkFBJh+DXCPVcKuXKIFURlm8WBoZSFOBCYmk6i33ioT+Kw1CegEMspcFfe+M8+rRySNum/YUwm9I7TPT04NWOBDg/nwtz16xMbEp3mPswIOuI6G7wBSlynz1pQWZEIP0smIcEEWN3QsfJDn+nj9FFSPh73wilgdE2f+eOumo4pPqWI2kI/LKu4RVXLq7H/kJopRUFhnkj4joNT9KC/BlZgAIVD1I+cwASVUBgCIsF1KEQxJLpGPKHGP5LYrAs5ikREnmJ61KF4K5cG1+REVS6HC1JauGroYYcOrLWUEp6MSF0UpoZgK5hV2dgEzeNLYbMBnRQZEUPnOwGMT6GOp57Kg/0WTCMYjnsQHpDmlJFTR5IcNt/alvV1PdF5NsKcLSpGG03L6QcjnWDpeIXqgFYb//A9wGi1+fMPDeqY7nae6uvT530KKp+JebkhHJyX6Fqz33X83tCgRr1d6gXBH+XnFtEwDmEVMBfAtbK7UvHxVTb1gGLQokbFVBZMDtUJHmT+dsPxmqSRU2nkrxkWxhfbOfEVwLov4sIaonSRr1qZy6vy8xliPbn+qPjYHxSm6mJwdB357DfaVtJ/BMLeW0/ayVQSR6TA5AB7h8kwmFeRrFBUSFYkJk7GsM+F5SuiCQmFBEriCskHYcxfEM9ozBjBS/yaKD//rBzndjD3BHswAcmqwFdhOWGugCw5owwpEt9sxMlVGWQEK4GlcAOi1XAcL6eLICfdcMFmNDnH7xdO/YTCHTkxM2B6EiSPbuXmHrZO5eJy4Iu6lfo2Gu8orFfA+PM9UMjnHpBIx9v+/Q9Wm8nMfcMTE1d7u7vP4Ec6fzy1wqOGP3xI63JHjgT2/rsy/boTbMP0pe78dVUWS5wjK0VUjIqNN3kA62ZYeIcfxofXDFNFUZBTT4W6m71mWBlXrb4yWSoEYWh0jVIUdJEmzA6o18mRDN7dCplCEkK8IiP4WRAU9OO8j5wimZB3SAhKYlJEphLkJCaSEP7PEdxsfVG5UWFxP6qPPngTlvBED6IWLN8dTPmg8ocFPPRXWBdlFWqqCEmLlhAgLRtKdLaAkpQNfRUM6DUQGOUiTimNEaT7FvRVw/F6K91XG4/mHf9KPaovvJ36jzfSS1mpc6mUdhnvhZL4a0GjZsKBKK+n0+kt0AHvztCAsIzjeeAeUKVPF1l101cBWCICxcGmcPalUeHRnyguIsJYej79fFnpKxdjrKhu+spVK69Ke+OW6SXlh7Xk/8b7D5umJKY6nUiQAEmp5ZKoD5Ay8kTFzcAsJIrL+ZREYCWAaU4ubXRNP8wfpuSuGubHMwCJhSuGPCiYJIMw5GV6xkfY0Wd+WoPiBAlEhvnzNluw3SKZYTkQHIQ5J1RQDg7Lw/QQGUIdFp4wcC9KgQ/7KkxjucEHROVmc3ZaCFfEjMxUvlPvBZ0WhT1Q1zG06hQKyGPA9qEh4bPRJuO/0p//WvoPyXpa77BPr9L1mn64QiJRT0vlP3jg1oyn0/th1dnN6VOkQyh8wVRuPpLUH9GHi+sckD4vLaj43NSHLwfv8cKjbGxdgc97JUpFpIRbpovKYHTUltkpHYkyEqNYf1gWfZU+Vn+JiMZERS4qKyTAMv1hmwoItLT/aL6OL9cn8A4mknhDkR5CUuh43ExhAXjnIQVxRQ9UwnU1JM73meHISINzlY/1Ir3jwNQBtui5IpU3K2mFZbEUEhgJiHlZhkqI8rws7hPFxBHlZ5romu1CGRSv2HyQEQiLPkwefJcSk2o0mU+F8Z46KswbKd8qvRUWiq7BsuoYlF/q+Jd839p4/KNnFHhw+Fbc819r/y3dHO7qsk9D2lLPBvEq59SLXC6CYSCq1OTk5F48g+FxLyQSvvyzhFK8taaYL1ACiYdkkSOg/HVO4irmAySLlR8+yHy5wnaWysTF7YmnRxdyecMXFDcxx3KjNCUEGUtb2r4Iixwh5qebxEG58v2Hkh0ERqlLp5kClNLkngLSyF8XExrZi089SYbFm9DRg1FCbEKyoxQE8sqFkTOgTwrDVIPCP/k8qpRcGrxMEXmxnpwjUeXbhjpgA2bBNsp0HPQWOiwNOnddw5YcNIdSFyzTlUKehEbrLDxDNn7osjCXPw5FO22qgPfKHn/pf8XxxxetvSvYlX8BxBVKCdGDmPPDhz0W+Oijjxof//jHt+Hh2oko/qKqFx4l0BJQmQIwS3RNn/fxZXqGFbq4nQzimI9tKFs+S1S1KJ9XoQkEfUQwtKg98fSzefMMwmx5F28/IqK2RLjM2b54/gX0H0v6+IiDZSVgHJogfYWNzDMUpCtsUkKg4pKIUJAsnNTlkjNWzfBCPMOhi8JAiCSqPBmyMFVQ1OdctQwLywNZ5cPCpDl80D6IhjzBASQF0sUeREpSJCyE4ceSpJXbEO2612AHepaTSRn/YrtEAD3n8xV/ntv4+S96nyGRO9gccQZmEPiBK3bRi5kPHcG+v2T32n2+53bxNY8oQyWIB0SR9OmqxMeTh5lm/8azx8srEbCQNSqTpUTX+eagwCiPqiWeQAXO/olHV2tPaYUFjWCxsQJjt7MV564K6iOB2Xj1adNGa3PqDMFl4XwSSnAQCUIibqFPlwtTwbiOkoSR+JvLx3KYv9BXaSrlLyifSegQBNMFTAWhiIeFArRZnoX+8Y2EzKhbnuNlYO9wFpZXkwoH5Kmj/6qOFTz+0n8+Y4Y/2pVIcJqY35+YJ6wjEN33ZzL9kPY3hWjx6Sv+RcByLIQAZZYQJSn2C944FRF/QkvjQ31XZDcV04GVPOGl+WdJEhVGbaNPV3d7Va7ZP83U/1ACgzTjkg4gjUFvHhGWkrPAPnnBLNeFSEKKfAbzOu9yBAUdVj6cZURpZuU3XOUILioD93x2IEnxxFGc9c6M+M93cHSNZVzHquBQDeMn4x898wQ2us7pgGvAbyU8/z5e5EupVEqtJirCgp4KHxVI7sbrQIYKHyKF3+yvIvEEX8FsQNk9qXwgBpgQwNo7p9OKrukzfdzF08+WTmYrV35YF+tU8bEpYImInGtLVH+8PkzZ8iQcVpjrawXCLOHH5uo/9JmWjbXHJMQcNhVW8bOklbsumnJw7Q+cgtVK2mJxAUNNKKncp54KHuzAwnjCE01B1UIHA1A80ik/IkdIfTj6mE8MXh2sSKZhdHUd+IcDykwFLj4eMv7Fv+il75c8/xEmeHaojD+jZ4LgbsPVVvO5iutg4oSAFCCiAqVp/jrUKRU8mzVexsube05ff3tiD0Q1wkP/ojrYgeiaftiheHsjLKL4GrudTxYvb0H9h94bpzeAwCD4cAqJf5SmlBjFH5D8ChVC1Q8KyIkrjtgbE64y4lqtINJHel5Hq4q4ZdsYzsWBWaU+rkFWtFzQbiNNnWciNbT/qD4+Hitq/FdE/3mWzmvQU+W4hZZPenQuRHRNfylcvfVjpUqz0Tj6dNE1/fm4euufTx1z5am3/hr6z6lj9A9ElneKwPJ3IYEVEpqKys0YFeUhoDBP4TV/+bjVIkfqKuu8/ixC/+tqR73111V4DYnrrb+G8a+h1tkk9dY/m7MxV7XUzwdP3ApBgCYG6Co+L6/+kcB4X0g0ERFFzwXjojBc5q8ZhqOKtWEoROmLEwSWBIHowVySyqSS5kIABEYhisRFEov8SgRWGD6K9OMgq8IwBIkTBBYXASGsxcW3pUoHgfF5iIiLPv9x+03kuLxMqaqsUj1KJL4gsFgICGEtFrJtUG6OwDhtJHHhqLOl+dBAG0AnXRAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBIGVhMD/D0fV/fpMMM+gAAAAAElFTkSuQmCC"
    }
  };
  const NoticeBar = {
    // noticeBar
    noticeBar: {
      text: () => [],
      direction: "row",
      step: false,
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      speed: 80,
      fontSize: 14,
      duration: 2e3,
      disableTouch: true,
      url: "",
      linkType: "navigateTo"
    }
  };
  const Notify = {
    // notify组件
    notify: {
      top: 0,
      type: "primary",
      color: "#ffffff",
      bgColor: "",
      message: "",
      duration: 3e3,
      fontSize: 15,
      safeAreaInsetTop: false
    }
  };
  const NumberBox = {
    // 步进器组件
    numberBox: {
      name: "",
      value: 0,
      min: 1,
      max: Number.MAX_SAFE_INTEGER,
      step: 1,
      integer: false,
      disabled: false,
      disabledInput: false,
      asyncChange: false,
      inputWidth: 35,
      showMinus: true,
      showPlus: true,
      decimalLength: null,
      longPress: true,
      color: "#323233",
      buttonSize: 30,
      bgColor: "#EBECEE",
      cursorSpacing: 100,
      disableMinus: false,
      disablePlus: false,
      iconStyle: ""
    }
  };
  const NumberKeyboard = {
    // 数字键盘
    numberKeyboard: {
      mode: "number",
      dotDisabled: false,
      random: false
    }
  };
  const Overlay = {
    // overlay组件
    overlay: {
      show: false,
      zIndex: 10070,
      duration: 300,
      opacity: 0.5
    }
  };
  const Parse = {
    // parse
    parse: {
      copyLink: true,
      errorImg: "",
      lazyLoad: false,
      loadingImg: "",
      pauseVideo: true,
      previewImg: true,
      setTitle: true,
      showImgMenu: true
    }
  };
  const Picker = {
    // picker
    picker: {
      show: false,
      showToolbar: true,
      title: "",
      columns: () => [],
      loading: false,
      itemHeight: 44,
      cancelText: "取消",
      confirmText: "确定",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      visibleItemCount: 5,
      keyName: "text",
      closeOnClickOverlay: false,
      defaultIndex: () => [],
      immediateChange: false
    }
  };
  const Popup = {
    // popup组件
    popup: {
      show: false,
      overlay: true,
      mode: "bottom",
      duration: 300,
      closeable: false,
      overlayStyle: () => {
      },
      closeOnClickOverlay: true,
      zIndex: 10075,
      safeAreaInsetBottom: true,
      safeAreaInsetTop: false,
      closeIconPos: "top-right",
      round: 0,
      zoom: true,
      bgColor: "",
      overlayOpacity: 0.5
    }
  };
  const Radio = {
    // radio组件
    radio: {
      name: "",
      shape: "",
      disabled: "",
      labelDisabled: "",
      activeColor: "",
      inactiveColor: "",
      iconSize: "",
      labelSize: "",
      label: "",
      labelColor: "",
      size: "",
      iconColor: "",
      placement: ""
    }
  };
  const RadioGroup = {
    // radio-group组件
    radioGroup: {
      value: "",
      disabled: false,
      shape: "circle",
      activeColor: "#2979ff",
      inactiveColor: "#c8c9cc",
      name: "",
      size: 18,
      placement: "row",
      label: "",
      labelColor: "#303133",
      labelSize: 14,
      labelDisabled: false,
      iconColor: "#ffffff",
      iconSize: 12,
      borderBottom: false,
      iconPlacement: "left"
    }
  };
  const Rate = {
    // rate组件
    rate: {
      value: 1,
      count: 5,
      disabled: false,
      size: 18,
      inactiveColor: "#b2b2b2",
      activeColor: "#FA3534",
      gutter: 4,
      minCount: 1,
      allowHalf: false,
      activeIcon: "star-fill",
      inactiveIcon: "star",
      touchable: true
    }
  };
  const ReadMore = {
    // readMore
    readMore: {
      showHeight: 400,
      toggle: false,
      closeText: "展开阅读全文",
      openText: "收起",
      color: "#2979ff",
      fontSize: 14,
      textIndent: "2em",
      name: ""
    }
  };
  const Row = {
    // row
    row: {
      gutter: 0,
      justify: "start",
      align: "center"
    }
  };
  const RowNotice = {
    // rowNotice
    rowNotice: {
      text: "",
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      fontSize: 14,
      speed: 80
    }
  };
  const ScrollList = {
    // scrollList
    scrollList: {
      indicatorWidth: 50,
      indicatorBarWidth: 20,
      indicator: true,
      indicatorColor: "#f2f2f2",
      indicatorActiveColor: "#3c9cff",
      indicatorStyle: ""
    }
  };
  const Search = {
    // search
    search: {
      shape: "round",
      bgColor: "#f2f2f2",
      placeholder: "请输入关键字",
      clearabled: true,
      focus: false,
      showAction: true,
      actionStyle: () => ({}),
      actionText: "搜索",
      inputAlign: "left",
      inputStyle: () => ({}),
      disabled: false,
      borderColor: "transparent",
      searchIconColor: "#909399",
      searchIconSize: 22,
      color: "#606266",
      placeholderColor: "#909399",
      searchIcon: "search",
      margin: "0",
      animation: false,
      value: "",
      maxlength: "-1",
      height: 32,
      label: null
    }
  };
  const Section = {
    // u-section组件
    section: {
      title: "",
      subTitle: "更多",
      right: true,
      fontSize: 15,
      bold: true,
      color: "#303133",
      subColor: "#909399",
      showLine: true,
      lineColor: "",
      arrow: true
    }
  };
  const Skeleton = {
    // skeleton
    skeleton: {
      loading: true,
      animate: true,
      rows: 0,
      rowsWidth: "100%",
      rowsHeight: 18,
      title: true,
      titleWidth: "50%",
      titleHeight: 18,
      avatar: false,
      avatarSize: 32,
      avatarShape: "circle"
    }
  };
  const Slider = {
    // slider组件
    slider: {
      value: 0,
      blockSize: 18,
      min: 0,
      max: 100,
      step: 1,
      activeColor: "#2979ff",
      inactiveColor: "#c0c4cc",
      blockColor: "#ffffff",
      showValue: false,
      disabled: false,
      blockStyle: () => {
      }
    }
  };
  const StatusBar = {
    // statusBar
    statusBar: {
      bgColor: "transparent"
    }
  };
  const Steps = {
    // steps组件
    steps: {
      direction: "row",
      current: 0,
      activeColor: "#3c9cff",
      inactiveColor: "#969799",
      activeIcon: "",
      inactiveIcon: "",
      dot: false
    }
  };
  const StepsItem = {
    // steps-item组件
    stepsItem: {
      title: "",
      desc: "",
      iconSize: 17,
      error: false
    }
  };
  const Sticky = {
    // sticky组件
    sticky: {
      offsetTop: 0,
      customNavHeight: 0,
      disabled: false,
      bgColor: "transparent",
      zIndex: "",
      index: ""
    }
  };
  const Subsection = {
    // subsection组件
    subsection: {
      list: [],
      current: 0,
      activeColor: "#3c9cff",
      inactiveColor: "#303133",
      mode: "button",
      fontSize: 12,
      bold: true,
      bgColor: "#eeeeef",
      keyName: "name"
    }
  };
  const SwipeAction = {
    // swipe-action组件
    swipeAction: {
      autoClose: true
    }
  };
  const SwipeActionItem = {
    // swipeActionItem 组件
    swipeActionItem: {
      show: false,
      name: "",
      disabled: false,
      threshold: 20,
      autoClose: true,
      options: [],
      duration: 300
    }
  };
  const Swiper = {
    // swiper 组件
    swiper: {
      list: () => [],
      indicator: false,
      indicatorActiveColor: "#FFFFFF",
      indicatorInactiveColor: "rgba(255, 255, 255, 0.35)",
      indicatorStyle: "",
      indicatorMode: "line",
      autoplay: true,
      current: 0,
      currentItemId: "",
      interval: 3e3,
      duration: 300,
      circular: false,
      previousMargin: 0,
      nextMargin: 0,
      acceleration: false,
      displayMultipleItems: 1,
      easingFunction: "default",
      keyName: "url",
      imgMode: "aspectFill",
      height: 130,
      bgColor: "#f3f4f6",
      radius: 4,
      loading: false,
      showTitle: false
    }
  };
  const SwipterIndicator = {
    // swiperIndicator 组件
    swiperIndicator: {
      length: 0,
      current: 0,
      indicatorActiveColor: "",
      indicatorInactiveColor: "",
      indicatorMode: "line"
    }
  };
  const Switch = {
    // switch
    switch: {
      loading: false,
      disabled: false,
      size: 25,
      activeColor: "#2979ff",
      inactiveColor: "#ffffff",
      value: false,
      activeValue: true,
      inactiveValue: false,
      asyncChange: false,
      space: 0
    }
  };
  const Tabbar = {
    // tabbar
    tabbar: {
      value: null,
      safeAreaInsetBottom: true,
      border: true,
      zIndex: 1,
      activeColor: "#1989fa",
      inactiveColor: "#7d7e80",
      fixed: true,
      placeholder: true
    }
  };
  const TabbarItem = {
    //
    tabbarItem: {
      name: null,
      icon: "",
      badge: null,
      dot: false,
      text: "",
      badgeStyle: "top: 6px;right:2px;"
    }
  };
  const Tabs = {
    //
    tabs: {
      duration: 300,
      list: () => [],
      lineColor: "#3c9cff",
      activeStyle: () => ({
        color: "#303133"
      }),
      inactiveStyle: () => ({
        color: "#606266"
      }),
      lineWidth: 20,
      lineHeight: 3,
      lineBgSize: "cover",
      itemStyle: () => ({
        height: "44px"
      }),
      scrollable: true,
      current: 0,
      keyName: "name"
    }
  };
  const Tag = {
    // tag 组件
    tag: {
      type: "primary",
      disabled: false,
      size: "medium",
      shape: "square",
      text: "",
      bgColor: "",
      color: "",
      borderColor: "",
      closeColor: "#C6C7CB",
      name: "",
      plainFill: false,
      plain: false,
      closable: false,
      show: true,
      icon: ""
    }
  };
  const Text = {
    // text 组件
    text: {
      type: "",
      show: true,
      text: "",
      prefixIcon: "",
      suffixIcon: "",
      mode: "",
      href: "",
      format: "",
      call: false,
      openType: "",
      bold: false,
      block: false,
      lines: "",
      color: "#303133",
      size: 15,
      iconStyle: () => ({
        fontSize: "15px"
      }),
      decoration: "none",
      margin: 0,
      lineHeight: "",
      align: "left",
      wordWrap: "normal"
    }
  };
  const Textarea = {
    // textarea 组件
    textarea: {
      value: "",
      placeholder: "",
      placeholderClass: "textarea-placeholder",
      placeholderStyle: "color: #c0c4cc",
      height: 70,
      confirmType: "done",
      disabled: false,
      count: false,
      focus: false,
      autoHeight: false,
      fixed: false,
      cursorSpacing: 0,
      cursor: "",
      showConfirmBar: true,
      selectionStart: -1,
      selectionEnd: -1,
      adjustPosition: true,
      disableDefaultPadding: false,
      holdKeyboard: false,
      maxlength: 140,
      border: "surround",
      formatter: null
    }
  };
  const Toast = {
    // toast组件
    toast: {
      zIndex: 10090,
      loading: false,
      text: "",
      icon: "",
      type: "",
      loadingMode: "",
      show: "",
      overlay: false,
      position: "center",
      params: () => {
      },
      duration: 2e3,
      isTab: false,
      url: "",
      callback: null,
      back: false
    }
  };
  const Toolbar = {
    // toolbar 组件
    toolbar: {
      show: true,
      cancelText: "取消",
      confirmText: "确认",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      title: ""
    }
  };
  const Tooltip = {
    // tooltip 组件
    tooltip: {
      text: "",
      copyText: "",
      size: 14,
      color: "#606266",
      bgColor: "transparent",
      direction: "top",
      zIndex: 10071,
      showCopy: true,
      buttons: () => [],
      overlay: true,
      showToast: true
    }
  };
  const Transition = {
    // transition动画组件的props
    transition: {
      show: false,
      mode: "fade",
      duration: "300",
      timingFunction: "ease-out"
    }
  };
  const Upload = {
    // upload组件
    upload: {
      accept: "image",
      capture: () => ["album", "camera"],
      compressed: true,
      camera: "back",
      maxDuration: 60,
      uploadIcon: "camera-fill",
      uploadIconColor: "#D3D4D6",
      useBeforeRead: false,
      previewFullImage: true,
      maxCount: 52,
      disabled: false,
      imageMode: "aspectFill",
      name: "",
      sizeType: () => ["original", "compressed"],
      multiple: false,
      deletable: true,
      maxSize: Number.MAX_VALUE,
      fileList: () => [],
      uploadText: "",
      width: 80,
      height: 80,
      previewImage: true
    }
  };
  const drawer = {
    // 抽屉组件
    drawer: {
      // 是否显示 
      show: false,
      // 点击遮罩是否关闭
      mask: true,
      // // 是否显示关闭按钮
      // closeBtn:true,
      // 抽屉宽度
      width: "40%",
      // 抽屉位置
      placement: "left",
      // 权重
      zIndex: 100
    }
  };
  const props$x = {
    ...ActionSheet,
    ...Album,
    ...Alert,
    ...Avatar,
    ...AvatarGroup,
    ...Backtop,
    ...Badge,
    ...Button,
    ...Calendar,
    ...CarKeyboard,
    ...Cell,
    ...CellGroup,
    ...Checkbox,
    ...CheckboxGroup,
    ...CircleProgress,
    ...Code,
    ...CodeInput,
    ...Col,
    ...Collapse,
    ...CollapseItem,
    ...ColumnNotice,
    ...CountDown,
    ...CountTo,
    ...DatetimePicker,
    ...Divider,
    ...Empty,
    ...Form,
    ...GormItem,
    ...Gap,
    ...Grid,
    ...GridItem,
    ...Icon,
    ...Image,
    ...IndexAnchor,
    ...IndexList,
    ...Input,
    ...Keyboard,
    ...Line,
    ...LineProgress,
    ...Link,
    ...List,
    ...ListItem,
    ...LoadingIcon,
    ...LoadingPage,
    ...Loadmore,
    ...Modal,
    ...Navbar,
    ...NoNetwork,
    ...NoticeBar,
    ...Notify,
    ...NumberBox,
    ...NumberKeyboard,
    ...Overlay,
    ...Parse,
    ...Picker,
    ...Popup,
    ...Radio,
    ...RadioGroup,
    ...Rate,
    ...ReadMore,
    ...Row,
    ...RowNotice,
    ...ScrollList,
    ...Search,
    ...Section,
    ...Skeleton,
    ...Slider,
    ...StatusBar,
    ...Steps,
    ...StepsItem,
    ...Sticky,
    ...Subsection,
    ...SwipeAction,
    ...SwipeActionItem,
    ...Swiper,
    ...SwipterIndicator,
    ...Switch,
    ...Tabbar,
    ...TabbarItem,
    ...Tabs,
    ...Tag,
    ...Text,
    ...Textarea,
    ...Toast,
    ...Toolbar,
    ...Tooltip,
    ...Transition,
    ...Upload,
    ...drawer
  };
  const props$w = {
    props: {
      // 是否展示组件
      show: {
        type: Boolean,
        default: props$x.transition.show
      },
      // 使用的动画模式
      mode: {
        type: String,
        default: props$x.transition.mode
      },
      // 动画的执行时间，单位ms
      duration: {
        type: [String, Number],
        default: props$x.transition.duration
      },
      // 使用的动画过渡函数
      timingFunction: {
        type: String,
        default: props$x.transition.timingFunction
      }
    }
  };
  const mpMixin = {};
  const mixin = {
    // 定义每个组件都可能需要用到的外部样式以及类名
    props: {
      // 每个组件都有的父组件传递的样式，可以为字符串或者对象形式
      customStyle: {
        type: [Object, String],
        default: () => ({})
      },
      customClass: {
        type: String,
        default: ""
      },
      // 跳转的页面路径
      url: {
        type: String,
        default: ""
      },
      // 页面跳转的类型
      linkType: {
        type: String,
        default: "navigateTo"
      }
    },
    data() {
      return {};
    },
    onLoad() {
      this.$u.getRect = this.$uGetRect;
    },
    created() {
      this.$u.getRect = this.$uGetRect;
    },
    computed: {
      // 在2.x版本中，将会把$u挂载到uni对象下，导致在模板中无法使用uni.$u.xxx形式
      // 所以这里通过computed计算属性将其附加到this.$u上，就可以在模板或者js中使用uni.$u.xxx
      // 只在nvue环境通过此方式引入完整的$u，其他平台会出现性能问题，非nvue则按需引入（主要原因是props过大）
      $u() {
        return uni.$u.deepMerge(uni.$u, {
          props: void 0,
          http: void 0,
          mixin: void 0
        });
      },
      /**
       * 生成bem规则类名
       * 由于微信小程序，H5，nvue之间绑定class的差异，无法通过:class="[bem()]"的形式进行同用
       * 故采用如下折中做法，最后返回的是数组（一般平台）或字符串（支付宝和字节跳动平台），类似['a', 'b', 'c']或'a b c'的形式
       * @param {String} name 组件名称
       * @param {Array} fixed 一直会存在的类名
       * @param {Array} change 会根据变量值为true或者false而出现或者隐藏的类名
       * @returns {Array|string}
       */
      bem() {
        return function(name, fixed, change) {
          const prefix = `u-${name}--`;
          const classes = {};
          if (fixed) {
            fixed.map((item) => {
              classes[prefix + this[item]] = true;
            });
          }
          if (change) {
            change.map((item) => {
              this[item] ? classes[prefix + item] = this[item] : delete classes[prefix + item];
            });
          }
          return Object.keys(classes);
        };
      }
    },
    methods: {
      // 跳转某一个页面
      openPage(urlKey = "url") {
        const url2 = this[urlKey];
        if (url2) {
          this.$u.route({ type: this.linkType, url: url2 });
        }
      },
      // 查询节点信息
      // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
      // 解决办法为在组件根部再套一个没有任何作用的view元素
      $uGetRect(selector, all) {
        return new Promise((resolve) => {
          uni.createSelectorQuery().in(this)[all ? "selectAll" : "select"](selector).boundingClientRect((rect) => {
            if (all && Array.isArray(rect) && rect.length) {
              resolve(rect);
            }
            if (!all && rect) {
              resolve(rect);
            }
          }).exec();
        });
      },
      getParentData(parentName = "") {
        if (!this.parent)
          this.parent = {};
        this.parent = uni.$u.$parent.call(this, parentName);
        if (this.parent.children) {
          this.parent.children.indexOf(this) === -1 && this.parent.children.push(this);
        }
        if (this.parent && this.parentData) {
          Object.keys(this.parentData).map((key) => {
            this.parentData[key] = this.parent[key];
          });
        }
      },
      // 阻止事件冒泡
      preventEvent(e) {
        e && typeof e.stopPropagation === "function" && e.stopPropagation();
      },
      // 空操作
      noop(e) {
        this.preventEvent(e);
      }
    },
    onReachBottom() {
      uni.$emit("uOnReachBottom");
    },
    beforeDestroy() {
      if (this.parent && uni.$u.test.array(this.parent.children)) {
        const childrenList = this.parent.children;
        childrenList.map((child, index2) => {
          if (child === this) {
            childrenList.splice(index2, 1);
          }
        });
      }
    }
  };
  const getClassNames = (name) => ({
    enter: `u-${name}-enter u-${name}-enter-active`,
    "enter-to": `u-${name}-enter-to u-${name}-enter-active`,
    leave: `u-${name}-leave u-${name}-leave-active`,
    "leave-to": `u-${name}-leave-to u-${name}-leave-active`
  });
  const transition = {
    methods: {
      // 组件被点击发出事件
      clickHandler() {
        this.$emit("click");
      },
      // vue版本的组件进场处理
      vueEnter() {
        const classNames = getClassNames(this.mode);
        this.status = "enter";
        this.$emit("beforeEnter");
        this.inited = true;
        this.display = true;
        this.classes = classNames.enter;
        this.$nextTick(async () => {
          this.$emit("enter");
          this.transitionEnded = false;
          this.$emit("afterEnter");
          this.classes = classNames["enter-to"];
        });
      },
      // 动画离场处理
      vueLeave() {
        if (!this.display)
          return;
        const classNames = getClassNames(this.mode);
        this.status = "leave";
        this.$emit("beforeLeave");
        this.classes = classNames.leave;
        this.$nextTick(() => {
          this.transitionEnded = false;
          this.$emit("leave");
          setTimeout(this.onTransitionEnd, this.duration);
          this.classes = classNames["leave-to"];
        });
      },
      // 完成过渡后触发
      onTransitionEnd() {
        if (this.transitionEnded)
          return;
        this.transitionEnded = true;
        this.$emit(this.status === "leave" ? "afterLeave" : "afterEnter");
        if (!this.show && this.display) {
          this.display = false;
          this.inited = false;
        }
      }
    }
  };
  const _export_sfc = (sfc, props2) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props2) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$19 = {
    name: "u-transition",
    data() {
      return {
        inited: false,
        // 是否显示/隐藏组件
        viewStyle: {},
        // 组件内部的样式
        status: "",
        // 记录组件动画的状态
        transitionEnded: false,
        // 组件是否结束的标记
        display: false,
        // 组件是否展示
        classes: ""
        // 应用的类名
      };
    },
    computed: {
      mergeStyle() {
        const { viewStyle, customStyle } = this;
        return {
          transitionDuration: `${this.duration}ms`,
          // display: `${this.display ? '' : 'none'}`,
          transitionTimingFunction: this.timingFunction,
          // 避免自定义样式影响到动画属性，所以写在viewStyle前面
          ...uni.$u.addStyle(customStyle),
          ...viewStyle
        };
      }
    },
    // 将mixin挂在到组件中，uni.$u.mixin实际上为一个vue格式对象
    mixins: [mpMixin, mixin, transition, props$w],
    watch: {
      show: {
        handler(newVal) {
          newVal ? this.vueEnter() : this.vueLeave();
        },
        // 表示同时监听初始化时的props的show的意思
        immediate: true
      }
    }
  };
  function _sfc_render$18(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.inited ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass(["u-transition", $data.classes]),
        ref: "u-transition",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.clickHandler && _ctx.clickHandler(...args)),
        style: vue.normalizeStyle([$options.mergeStyle]),
        onTouchmove: _cache[1] || (_cache[1] = (...args) => _ctx.noop && _ctx.noop(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      38
      /* CLASS, STYLE, HYDRATE_EVENTS */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$19, [["render", _sfc_render$18], ["__scopeId", "data-v-5cec8177"], ["__file", "D:/study/实训/intelligent_community_app_owner/uni_modules/uview-plus/components/u-transition/u-transition.vue"]]);
  const props$v = {
    props: {
      // 是否显示遮罩
      show: {
        type: Boolean,
        default: props$x.overlay.show
      },
      // 层级z-index
      zIndex: {
        type: [String, Number],
        default: props$x.overlay.zIndex
      },
      // 遮罩的过渡时间，单位为ms
      duration: {
        type: [String, Number],
        default: props$x.overlay.duration
      },
      // 不透明度值，当做rgba的第四个参数
      opacity: {
        type: [String, Number],
        default: props$x.overlay.opacity
      }
    }
  };
  const _sfc_main$18 = {
    name: "u-overlay",
    mixins: [mpMixin, mixin, props$v],
    computed: {
      overlayStyle() {
        const style = {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: this.zIndex,
          bottom: 0,
          "background-color": `rgba(0, 0, 0, ${this.opacity})`
        };
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      }
    },
    methods: {
      clickHandler() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$17(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_transition = resolveEasycom(vue.resolveDynamicComponent("u-transition"), __easycom_4$1);
    return vue.openBlock(), vue.createBlock(_component_u_transition, {
      show: _ctx.show,
      "custom-class": "u-overlay",
      duration: _ctx.duration,
      "custom-style": $options.overlayStyle,
      onClick: $options.clickHandler
    }, {
      default: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["show", "duration", "custom-style", "onClick"]);
  }
  const __easycom_3$3 = /* @__PURE__ */ _export_sfc(_sfc_main$18, [["render", _sfc_render$17], ["__scopeId", "data-v-9112bed9"], ["__file", "D:/study/实训/intelligent_community_app_owner/uni_modules/uview-plus/components/u-overlay/u-overlay.vue"]]);
  const props$u = {
    props: {
      bgColor: {
        type: String,
        default: props$x.statusBar.bgColor
      }
    }
  };
  const _sfc_main$17 = {
    name: "u-status-bar",
    mixins: [mpMixin, mixin, props$u],
    data() {
      return {};
    },
    computed: {
      style() {
        const style = {};
        style.height = uni.$u.addUnit(uni.$u.sys().statusBarHeight, "px");
        style.backgroundColor = this.bgColor;
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      }
    }
  };
  function _sfc_render$16(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        style: vue.normalizeStyle([$options.style]),
        class: "u-status-bar"
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      4
      /* STYLE */
    );
  }
  const __easycom_1$a = /* @__PURE__ */ _export_sfc(_sfc_main$17, [["render", _sfc_render$16], ["__scopeId", "data-v-eb8e0cdd"], ["__file", "D:/study/实训/intelligent_community_app_owner/uni_modules/uview-plus/components/u-status-bar/u-status-bar.vue"]]);
  const icons = {
    "uicon-level": "",
    "uicon-column-line": "",
    "uicon-checkbox-mark": "",
    "uicon-folder": "",
    "uicon-movie": "",
    "uicon-star-fill": "",
    "uicon-star": "",
    "uicon-phone-fill": "",
    "uicon-phone": "",
    "uicon-apple-fill": "",
    "uicon-chrome-circle-fill": "",
    "uicon-backspace": "",
    "uicon-attach": "",
    "uicon-cut": "",
    "uicon-empty-car": "",
    "uicon-empty-coupon": "",
    "uicon-empty-address": "",
    "uicon-empty-favor": "",
    "uicon-empty-permission": "",
    "uicon-empty-news": "",
    "uicon-empty-search": "",
    "uicon-github-circle-fill": "",
    "uicon-rmb": "",
    "uicon-person-delete-fill": "",
    "uicon-reload": "",
    "uicon-order": "",
    "uicon-server-man": "",
    "uicon-search": "",
    "uicon-fingerprint": "",
    "uicon-more-dot-fill": "",
    "uicon-scan": "",
    "uicon-share-square": "",
    "uicon-map": "",
    "uicon-map-fill": "",
    "uicon-tags": "",
    "uicon-tags-fill": "",
    "uicon-bookmark-fill": "",
    "uicon-bookmark": "",
    "uicon-eye": "",
    "uicon-eye-fill": "",
    "uicon-mic": "",
    "uicon-mic-off": "",
    "uicon-calendar": "",
    "uicon-calendar-fill": "",
    "uicon-trash": "",
    "uicon-trash-fill": "",
    "uicon-play-left": "",
    "uicon-play-right": "",
    "uicon-minus": "",
    "uicon-plus": "",
    "uicon-info": "",
    "uicon-info-circle": "",
    "uicon-info-circle-fill": "",
    "uicon-question": "",
    "uicon-error": "",
    "uicon-close": "",
    "uicon-checkmark": "",
    "uicon-android-circle-fill": "",
    "uicon-android-fill": "",
    "uicon-ie": "",
    "uicon-IE-circle-fill": "",
    "uicon-google": "",
    "uicon-google-circle-fill": "",
    "uicon-setting-fill": "",
    "uicon-setting": "",
    "uicon-minus-square-fill": "",
    "uicon-plus-square-fill": "",
    "uicon-heart": "",
    "uicon-heart-fill": "",
    "uicon-camera": "",
    "uicon-camera-fill": "",
    "uicon-more-circle": "",
    "uicon-more-circle-fill": "",
    "uicon-chat": "",
    "uicon-chat-fill": "",
    "uicon-bag-fill": "",
    "uicon-bag": "",
    "uicon-error-circle-fill": "",
    "uicon-error-circle": "",
    "uicon-close-circle": "",
    "uicon-close-circle-fill": "",
    "uicon-checkmark-circle": "",
    "uicon-checkmark-circle-fill": "",
    "uicon-question-circle-fill": "",
    "uicon-question-circle": "",
    "uicon-share": "",
    "uicon-share-fill": "",
    "uicon-shopping-cart": "",
    "uicon-shopping-cart-fill": "",
    "uicon-bell": "",
    "uicon-bell-fill": "",
    "uicon-list": "",
    "uicon-list-dot": "",
    "uicon-zhihu": "",
    "uicon-zhihu-circle-fill": "",
    "uicon-zhifubao": "",
    "uicon-zhifubao-circle-fill": "",
    "uicon-weixin-circle-fill": "",
    "uicon-weixin-fill": "",
    "uicon-twitter-circle-fill": "",
    "uicon-twitter": "",
    "uicon-taobao-circle-fill": "",
    "uicon-taobao": "",
    "uicon-weibo-circle-fill": "",
    "uicon-weibo": "",
    "uicon-qq-fill": "",
    "uicon-qq-circle-fill": "",
    "uicon-moments-circel-fill": "",
    "uicon-moments": "",
    "uicon-qzone": "",
    "uicon-qzone-circle-fill": "",
    "uicon-baidu-circle-fill": "",
    "uicon-baidu": "",
    "uicon-facebook-circle-fill": "",
    "uicon-facebook": "",
    "uicon-car": "",
    "uicon-car-fill": "",
    "uicon-warning-fill": "",
    "uicon-warning": "",
    "uicon-clock-fill": "",
    "uicon-clock": "",
    "uicon-edit-pen": "",
    "uicon-edit-pen-fill": "",
    "uicon-email": "",
    "uicon-email-fill": "",
    "uicon-minus-circle": "",
    "uicon-minus-circle-fill": "",
    "uicon-plus-circle": "",
    "uicon-plus-circle-fill": "",
    "uicon-file-text": "",
    "uicon-file-text-fill": "",
    "uicon-pushpin": "",
    "uicon-pushpin-fill": "",
    "uicon-grid": "",
    "uicon-grid-fill": "",
    "uicon-play-circle": "",
    "uicon-play-circle-fill": "",
    "uicon-pause-circle-fill": "",
    "uicon-pause": "",
    "uicon-pause-circle": "",
    "uicon-eye-off": "",
    "uicon-eye-off-outline": "",
    "uicon-gift-fill": "",
    "uicon-gift": "",
    "uicon-rmb-circle-fill": "",
    "uicon-rmb-circle": "",
    "uicon-kefu-ermai": "",
    "uicon-server-fill": "",
    "uicon-coupon-fill": "",
    "uicon-coupon": "",
    "uicon-integral": "",
    "uicon-integral-fill": "",
    "uicon-home-fill": "",
    "uicon-home": "",
    "uicon-hourglass-half-fill": "",
    "uicon-hourglass": "",
    "uicon-account": "",
    "uicon-plus-people-fill": "",
    "uicon-minus-people-fill": "",
    "uicon-account-fill": "",
    "uicon-thumb-down-fill": "",
    "uicon-thumb-down": "",
    "uicon-thumb-up": "",
    "uicon-thumb-up-fill": "",
    "uicon-lock-fill": "",
    "uicon-lock-open": "",
    "uicon-lock-opened-fill": "",
    "uicon-lock": "",
    "uicon-red-packet-fill": "",
    "uicon-photo-fill": "",
    "uicon-photo": "",
    "uicon-volume-off-fill": "",
    "uicon-volume-off": "",
    "uicon-volume-fill": "",
    "uicon-volume": "",
    "uicon-red-packet": "",
    "uicon-download": "",
    "uicon-arrow-up-fill": "",
    "uicon-arrow-down-fill": "",
    "uicon-play-left-fill": "",
    "uicon-play-right-fill": "",
    "uicon-rewind-left-fill": "",
    "uicon-rewind-right-fill": "",
    "uicon-arrow-downward": "",
    "uicon-arrow-leftward": "",
    "uicon-arrow-rightward": "",
    "uicon-arrow-upward": "",
    "uicon-arrow-down": "",
    "uicon-arrow-right": "",
    "uicon-arrow-left": "",
    "uicon-arrow-up": "",
    "uicon-skip-back-left": "",
    "uicon-skip-forward-right": "",
    "uicon-rewind-right": "",
    "uicon-rewind-left": "",
    "uicon-arrow-right-double": "",
    "uicon-arrow-left-double": "",
    "uicon-wifi-off": "",
    "uicon-wifi": "",
    "uicon-empty-data": "",
    "uicon-empty-history": "",
    "uicon-empty-list": "",
    "uicon-empty-page": "",
    "uicon-empty-order": "",
    "uicon-man": "",
    "uicon-woman": "",
    "uicon-man-add": "",
    "uicon-man-add-fill": "",
    "uicon-man-delete": "",
    "uicon-man-delete-fill": "",
    "uicon-zh": "",
    "uicon-en": ""
  };
  const props$t = {
    props: {
      // 图标类名
      name: {
        type: String,
        default: props$x.icon.name
      },
      // 图标颜色，可接受主题色
      color: {
        type: String,
        default: props$x.icon.color
      },
      // 字体大小，单位px
      size: {
        type: [String, Number],
        default: props$x.icon.size
      },
      // 是否显示粗体
      bold: {
        type: Boolean,
        default: props$x.icon.bold
      },
      // 点击图标的时候传递事件出去的index（用于区分点击了哪一个）
      index: {
        type: [String, Number],
        default: props$x.icon.index
      },
      // 触摸图标时的类名
      hoverClass: {
        type: String,
        default: props$x.icon.hoverClass
      },
      // 自定义扩展前缀，方便用户扩展自己的图标库
      customPrefix: {
        type: String,
        default: props$x.icon.customPrefix
      },
      // 图标右边或者下面的文字
      label: {
        type: [String, Number],
        default: props$x.icon.label
      },
      // label的位置，只能右边或者下边
      labelPos: {
        type: String,
        default: props$x.icon.labelPos
      },
      // label的大小
      labelSize: {
        type: [String, Number],
        default: props$x.icon.labelSize
      },
      // label的颜色
      labelColor: {
        type: String,
        default: props$x.icon.labelColor
      },
      // label与图标的距离
      space: {
        type: [String, Number],
        default: props$x.icon.space
      },
      // 图片的mode
      imgMode: {
        type: String,
        default: props$x.icon.imgMode
      },
      // 用于显示图片小图标时，图片的宽度
      width: {
        type: [String, Number],
        default: props$x.icon.width
      },
      // 用于显示图片小图标时，图片的高度
      height: {
        type: [String, Number],
        default: props$x.icon.height
      },
      // 用于解决某些情况下，让图标垂直居中的用途
      top: {
        type: [String, Number],
        default: props$x.icon.top
      },
      // 是否阻止事件传播
      stop: {
        type: Boolean,
        default: props$x.icon.stop
      }
    }
  };
  const _sfc_main$16 = {
    name: "u-icon",
    data() {
      return {};
    },
    emits: ["click"],
    mixins: [mpMixin, mixin, props$t],
    computed: {
      uClasses() {
        let classes = [];
        classes.push(this.customPrefix + "-" + this.name);
        if (this.color && uni.$u.config.type.includes(this.color))
          classes.push("u-icon__icon--" + this.color);
        return classes;
      },
      iconStyle() {
        let style = {};
        style = {
          fontSize: uni.$u.addUnit(this.size),
          lineHeight: uni.$u.addUnit(this.size),
          fontWeight: this.bold ? "bold" : "normal",
          // 某些特殊情况需要设置一个到顶部的距离，才能更好的垂直居中
          top: uni.$u.addUnit(this.top)
        };
        if (this.color && !uni.$u.config.type.includes(this.color))
          style.color = this.color;
        return style;
      },
      // 判断传入的name属性，是否图片路径，只要带有"/"均认为是图片形式
      isImg() {
        return this.name.indexOf("/") !== -1;
      },
      imgStyle() {
        let style = {};
        style.width = this.width ? uni.$u.addUnit(this.width) : uni.$u.addUnit(this.size);
        style.height = this.height ? uni.$u.addUnit(this.height) : uni.$u.addUnit(this.size);
        return style;
      },
      // 通过图标名，查找对应的图标
      icon() {
        return icons["uicon-" + this.name] || this.name;
      }
    },
    methods: {
      clickHandler(e) {
        this.$emit("click", this.index);
        this.stop && this.preventEvent(e);
      }
    }
  };
  function _sfc_render$15(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-icon", ["u-icon--" + _ctx.labelPos]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args))
      },
      [
        $options.isImg ? (vue.openBlock(), vue.createElementBlock("image", {
          key: 0,
          class: "u-icon__img",
          src: _ctx.name,
          mode: _ctx.imgMode,
          style: vue.normalizeStyle([$options.imgStyle, _ctx.$u.addStyle(_ctx.customStyle)])
        }, null, 12, ["src", "mode"])) : (vue.openBlock(), vue.createElementBlock("text", {
          key: 1,
          class: vue.normalizeClass(["u-icon__icon", $options.uClasses]),
          style: vue.normalizeStyle([$options.iconStyle, _ctx.$u.addStyle(_ctx.customStyle)]),
          "hover-class": _ctx.hoverClass
        }, vue.toDisplayString($options.icon), 15, ["hover-class"])),
        vue.createCommentVNode(' 这里进行空字符串判断，如果仅仅是v-if="label"，可能会出现传递0的时候，结果也无法显示 '),
        _ctx.label !== "" ? (vue.openBlock(), vue.createElementBlock(
          "text",
          {
            key: 2,
            class: "u-icon__label",
            style: vue.normalizeStyle({
              color: _ctx.labelColor,
              fontSize: _ctx.$u.addUnit(_ctx.labelSize),
              marginLeft: _ctx.labelPos == "right" ? _ctx.$u.addUnit(_ctx.space) : 0,
              marginTop: _ctx.labelPos == "bottom" ? _ctx.$u.addUnit(_ctx.space) : 0,
              marginRight: _ctx.labelPos == "left" ? _ctx.$u.addUnit(_ctx.space) : 0,
              marginBottom: _ctx.labelPos == "top" ? _ctx.$u.addUnit(_ctx.space) : 0
            })
          },
          vue.toDisplayString(_ctx.label),
          5
          /* TEXT, STYLE */
        )) : vue.createCommentVNode("v-if", true)
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_0$6 = /* @__PURE__ */ _export_sfc(_sfc_main$16, [["render", _sfc_render$15], ["__scopeId", "data-v-ac70166d"], ["__file", "D:/study/实训/intelligent_community_app_owner/uni_modules/uview-plus/components/u-icon/u-icon.vue"]]);
  const props$s = {
    props: {}
  };
  const _sfc_main$15 = {
    name: "u-safe-bottom",
    mixins: [mpMixin, mixin, props$s],
    data() {
      return {
        safeAreaBottomHeight: 0,
        isNvue: false
      };
    },
    computed: {
      style() {
        const style = {};
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      }
    },
    mounted() {
    }
  };
  function _sfc_render$14(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-safe-bottom", [!$data.isNvue && "u-safe-area-inset-bottom"]]),
        style: vue.normalizeStyle([$options.style])
      },
      null,
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_3$2 = /* @__PURE__ */ _export_sfc(_sfc_main$15, [["render", _sfc_render$14], ["__scopeId", "data-v-f3d22cfe"], ["__file", "D:/study/实训/intelligent_community_app_owner/uni_modules/uview-plus/components/u-safe-bottom/u-safe-bottom.vue"]]);
  const props$r = {
    props: {
      // 是否展示弹窗
      show: {
        type: Boolean,
        default: props$x.popup.show
      },
      // 是否显示遮罩
      overlay: {
        type: Boolean,
        default: props$x.popup.overlay
      },
      // 弹出的方向，可选值为 top bottom right left center
      mode: {
        type: String,
        default: props$x.popup.mode
      },
      // 动画时长，单位ms
      duration: {
        type: [String, Number],
        default: props$x.popup.duration
      },
      // 是否显示关闭图标
      closeable: {
        type: Boolean,
        default: props$x.popup.closeable
      },
      // 自定义遮罩的样式
      overlayStyle: {
        type: [Object, String],
        default: props$x.popup.overlayStyle
      },
      // 点击遮罩是否关闭弹窗
      closeOnClickOverlay: {
        type: Boolean,
        default: props$x.popup.closeOnClickOverlay
      },
      // 层级
      zIndex: {
        type: [String, Number],
        default: props$x.popup.zIndex
      },
      // 是否为iPhoneX留出底部安全距离
      safeAreaInsetBottom: {
        type: Boolean,
        default: props$x.popup.safeAreaInsetBottom
      },
      // 是否留出顶部安全距离（状态栏高度）
      safeAreaInsetTop: {
        type: Boolean,
        default: props$x.popup.safeAreaInsetTop
      },
      // 自定义关闭图标位置，top-left为左上角，top-right为右上角，bottom-left为左下角，bottom-right为右下角
      closeIconPos: {
        type: String,
        default: props$x.popup.closeIconPos
      },
      // 是否显示圆角
      round: {
        type: [Boolean, String, Number],
        default: props$x.popup.round
      },
      // mode=center，也即中部弹出时，是否使用缩放模式
      zoom: {
        type: Boolean,
        default: props$x.popup.zoom
      },
      // 弹窗背景色，设置为transparent可去除白色背景
      bgColor: {
        type: String,
        default: props$x.popup.bgColor
      },
      // 遮罩的透明度，0-1之间
      overlayOpacity: {
        type: [Number, String],
        default: props$x.popup.overlayOpacity
      }
    }
  };
  const _sfc_main$14 = {
    name: "u-popup",
    mixins: [mpMixin, mixin, props$r],
    data() {
      return {
        overlayDuration: this.duration + 50
      };
    },
    watch: {
      show(newValue, oldValue) {
      }
    },
    computed: {
      transitionStyle() {
        const style = {
          zIndex: this.zIndex,
          position: "fixed",
          display: "flex"
        };
        style[this.mode] = 0;
        if (this.mode === "left") {
          return uni.$u.deepMerge(style, {
            bottom: 0,
            top: 0
          });
        } else if (this.mode === "right") {
          return uni.$u.deepMerge(style, {
            bottom: 0,
            top: 0
          });
        } else if (this.mode === "top") {
          return uni.$u.deepMerge(style, {
            left: 0,
            right: 0
          });
        } else if (this.mode === "bottom") {
          return uni.$u.deepMerge(style, {
            left: 0,
            right: 0
          });
        } else if (this.mode === "center") {
          return uni.$u.deepMerge(style, {
            alignItems: "center",
            "justify-content": "center",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          });
        }
      },
      contentStyle() {
        const style = {};
        uni.$u.sys();
        if (this.mode !== "center") {
          style.flex = 1;
        }
        if (this.bgColor) {
          style.backgroundColor = this.bgColor;
        }
        if (this.round) {
          const value2 = uni.$u.addUnit(this.round);
          if (this.mode === "top") {
            style.borderBottomLeftRadius = value2;
            style.borderBottomRightRadius = value2;
          } else if (this.mode === "bottom") {
            style.borderTopLeftRadius = value2;
            style.borderTopRightRadius = value2;
          } else if (this.mode === "center") {
            style.borderRadius = value2;
          }
        }
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      },
      position() {
        if (this.mode === "center") {
          return this.zoom ? "fade-zoom" : "fade";
        }
        if (this.mode === "left") {
          return "slide-left";
        }
        if (this.mode === "right") {
          return "slide-right";
        }
        if (this.mode === "bottom") {
          return "slide-up";
        }
        if (this.mode === "top") {
          return "slide-down";
        }
      }
    },
    methods: {
      // 点击遮罩
      overlayClick() {
        if (this.closeOnClickOverlay) {
          this.$emit("close");
        }
      },
      close(e) {
        this.$emit("close");
      },
      afterEnter() {
        this.$emit("open");
      },
      clickHandler() {
        if (this.mode === "center") {
          this.overlayClick();
        }
        this.$emit("click");
      }
    }
  };
  function _sfc_render$13(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_overlay = resolveEasycom(vue.resolveDynamicComponent("u-overlay"), __easycom_3$3);
    const _component_u_status_bar = resolveEasycom(vue.resolveDynamicComponent("u-status-bar"), __easycom_1$a);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$6);
    const _component_u_safe_bottom = resolveEasycom(vue.resolveDynamicComponent("u-safe-bottom"), __easycom_3$2);
    const _component_u_transition = resolveEasycom(vue.resolveDynamicComponent("u-transition"), __easycom_4$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-popup" }, [
      _ctx.overlay ? (vue.openBlock(), vue.createBlock(_component_u_overlay, {
        key: 0,
        show: _ctx.show,
        onClick: $options.overlayClick,
        duration: $data.overlayDuration,
        customStyle: _ctx.overlayStyle,
        opacity: _ctx.overlayOpacity
      }, null, 8, ["show", "onClick", "duration", "customStyle", "opacity"])) : vue.createCommentVNode("v-if", true),
      vue.createVNode(_component_u_transition, {
        show: _ctx.show,
        customStyle: $options.transitionStyle,
        mode: $options.position,
        duration: _ctx.duration,
        onAfterEnter: $options.afterEnter,
        onClick: $options.clickHandler
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode(
            "view",
            {
              class: "u-popup__content",
              style: vue.normalizeStyle([$options.contentStyle]),
              onClick: _cache[1] || (_cache[1] = vue.withModifiers((...args) => _ctx.noop && _ctx.noop(...args), ["stop"]))
            },
            [
              _ctx.safeAreaInsetTop ? (vue.openBlock(), vue.createBlock(_component_u_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
              vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
              _ctx.closeable ? (vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  key: 1,
                  onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.close && $options.close(...args), ["stop"])),
                  class: vue.normalizeClass(["u-popup__content__close", ["u-popup__content__close--" + _ctx.closeIconPos]]),
                  "hover-class": "u-popup__content__close--hover",
                  "hover-stay-time": "150"
                },
                [
                  vue.createVNode(_component_u_icon, {
                    name: "close",
                    color: "#909399",
                    size: "18",
                    bold: ""
                  })
                ],
                2
                /* CLASS */
              )) : vue.createCommentVNode("v-if", true),
              _ctx.safeAreaInsetBottom ? (vue.openBlock(), vue.createBlock(_component_u_safe_bottom, { key: 2 })) : vue.createCommentVNode("v-if", true)
            ],
            4
            /* STYLE */
          )
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["show", "customStyle", "mode", "duration", "onAfterEnter", "onClick"])
    ]);
  }
  const __easycom_2$6 = /* @__PURE__ */ _export_sfc(_sfc_main$14, [["render", _sfc_render$13], ["__scopeId", "data-v-05c24e9b"], ["__file", "D:/study/实训/intelligent_community_app_owner/uni_modules/uview-plus/components/u-popup/u-popup.vue"]]);
  const _sfc_main$13 = {
    data() {
      return {
        show: true,
        flag: false,
        height: ""
      };
    },
    onShow() {
      this.height = uni.getSystemInfoSync().statusBarHeight + "px";
    },
    methods: {
      open() {
      },
      close() {
        this.show = false;
      },
      toIndex() {
        uni.switchTab({
          url: "/pages/tarbar/index/index"
        });
      },
      toBack() {
        plus.runtime.quit();
      },
      toContract() {
        uni.navigateTo({
          url: "/pages/contract/contract"
        });
      },
      toPrivacy() {
        uni.navigateTo({
          url: "/pages/contract/privacy"
        });
      }
    }
  };
  function _sfc_render$12(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_popup = resolveEasycom(vue.resolveDynamicComponent("u-popup"), __easycom_2$6);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode(
          "view",
          {
            class: "top",
            style: vue.normalizeStyle({ height: $data.height })
          },
          null,
          4
          /* STYLE */
        ),
        vue.createElementVNode("view", { class: "container" }, [
          vue.createVNode(_component_u_popup, {
            show: $data.show,
            mode: "center",
            onClose: $options.close,
            onOpen: $options.open,
            round: 15,
            bgColor: "#f0f8fa",
            closeOnClickOverlay: $data.flag
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "t4" }, [
                vue.createElementVNode("view", { class: "t1" }, [
                  vue.createElementVNode("text", { class: "w1" }, "温馨提示")
                ]),
                vue.createElementVNode("hr"),
                vue.createElementVNode("view", { class: "t2" }, [
                  vue.createElementVNode("text", { class: "w2" }, [
                    vue.createTextVNode(" 为了帮助您安全使用产品和服务，在您同意并授权基础上，我们可能会收集你的交易信息，位置信息，设备信息等。 请你认证阅读"),
                    vue.createElementVNode("text", {
                      class: "w2",
                      style: { "color": "dodgerblue" },
                      onClick: _cache[0] || (_cache[0] = (...args) => $options.toContract && $options.toContract(...args))
                    }, "《用户服务协议》"),
                    vue.createTextVNode("及"),
                    vue.createElementVNode("text", {
                      class: "w2",
                      style: { "color": "dodgerblue" },
                      onClick: _cache[1] || (_cache[1] = (...args) => $options.toPrivacy && $options.toPrivacy(...args))
                    }, "《隐私政策》"),
                    vue.createTextVNode("的全部条款。 您同意并接受全部条款后，再开始使用我们的服务。 ")
                  ])
                ]),
                vue.createElementVNode("hr"),
                vue.createElementVNode("view", { class: "t3" }, [
                  vue.createElementVNode("text", {
                    onClick: _cache[2] || (_cache[2] = (...args) => $options.toBack && $options.toBack(...args)),
                    style: { "font-size": "14px", "font-weight": "bold" }
                  }, "不同意"),
                  vue.createTextVNode("                 "),
                  vue.createElementVNode("text", {
                    onClick: _cache[3] || (_cache[3] = (...args) => $options.toIndex && $options.toIndex(...args)),
                    style: { "font-size": "14px", "font-weight": "bold", "color": "dodgerblue" }
                  }, "同意并继续")
                ])
              ])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["show", "onClose", "onOpen", "closeOnClickOverlay"])
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesLaunchLaunchPage = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["render", _sfc_render$12], ["__file", "D:/study/实训/intelligent_community_app_owner/pages/launch/launch-page.vue"]]);
  const props$q = {
    props: {
      // 是否显示组件
      show: {
        type: Boolean,
        default: props$x.loadingIcon.show
      },
      // 颜色
      color: {
        type: String,
        default: props$x.loadingIcon.color
      },
      // 提示文字颜色
      textColor: {
        type: String,
        default: props$x.loadingIcon.textColor
      },
      // 文字和图标是否垂直排列
      vertical: {
        type: Boolean,
        default: props$x.loadingIcon.vertical
      },
      // 模式选择，circle-圆形，spinner-花朵形，semicircle-半圆形
      mode: {
        type: String,
        default: props$x.loadingIcon.mode
      },
      // 图标大小，单位默认px
      size: {
        type: [String, Number],
        default: props$x.loadingIcon.size
      },
      // 文字大小
      textSize: {
        type: [String, Number],
        default: props$x.loadingIcon.textSize
      },
      // 文字内容
      text: {
        type: [String, Number],
        default: props$x.loadingIcon.text
      },
      // 动画模式
      timingFunction: {
        type: String,
        default: props$x.loadingIcon.timingFunction
      },
      // 动画执行周期时间
      duration: {
        type: [String, Number],
        default: props$x.loadingIcon.duration
      },
      // mode=circle时的暗边颜色
      inactiveColor: {
        type: String,
        default: props$x.loadingIcon.inactiveColor
      }
    }
  };
  const _sfc_main$12 = {
    name: "u-loading-icon",
    mixins: [mpMixin, mixin, props$q],
    data() {
      return {
        // Array.form可以通过一个伪数组对象创建指定长度的数组
        // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from
        array12: Array.from({
          length: 12
        }),
        // 这里需要设置默认值为360，否则在安卓nvue上，会延迟一个duration周期后才执行
        // 在iOS nvue上，则会一开始默认执行两个周期的动画
        aniAngel: 360,
        // 动画旋转角度
        webviewHide: false,
        // 监听webview的状态，如果隐藏了页面，则停止动画，以免性能消耗
        loading: false
        // 是否运行中，针对nvue使用
      };
    },
    computed: {
      // 当为circle类型时，给其另外三边设置一个更轻一些的颜色
      // 之所以需要这么做的原因是，比如父组件传了color为红色，那么需要另外的三个边为浅红色
      // 而不能是固定的某一个其他颜色(因为这个固定的颜色可能浅蓝，导致效果没有那么细腻良好)
      otherBorderColor() {
        const lightColor = uni.$u.colorGradient(this.color, "#ffffff", 100)[80];
        if (this.mode === "circle") {
          return this.inactiveColor ? this.inactiveColor : lightColor;
        } else {
          return "transparent";
        }
      }
    },
    watch: {
      show(n) {
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        setTimeout(() => {
          this.show && this.addEventListenerToWebview();
        }, 20);
      },
      // 监听webview的显示与隐藏
      addEventListenerToWebview() {
        const pages2 = getCurrentPages();
        const page2 = pages2[pages2.length - 1];
        const currentWebview = page2.$getAppWebview();
        currentWebview.addEventListener("hide", () => {
          this.webviewHide = true;
        });
        currentWebview.addEventListener("show", () => {
          this.webviewHide = false;
        });
      }
    }
  };
  function _sfc_render$11(_ctx, _cache, $props, $setup, $data, $options) {
    return _ctx.show ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass(["u-loading-icon", [_ctx.vertical && "u-loading-icon--vertical"]]),
        style: vue.normalizeStyle([_ctx.$u.addStyle(_ctx.customStyle)])
      },
      [
        !$data.webviewHide ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 0,
            class: vue.normalizeClass(["u-loading-icon__spinner", [`u-loading-icon__spinner--${_ctx.mode}`]]),
            ref: "ani",
            style: vue.normalizeStyle({
              color: _ctx.color,
              width: _ctx.$u.addUnit(_ctx.size),
              height: _ctx.$u.addUnit(_ctx.size),
              borderTopColor: _ctx.color,
              borderBottomColor: $options.otherBorderColor,
              borderLeftColor: $options.otherBorderColor,
              borderRightColor: $options.otherBorderColor,
              "animation-duration": `${_ctx.duration}ms`,
              "animation-timing-function": _ctx.mode === "semicircle" || _ctx.mode === "circle" ? _ctx.timingFunction : ""
            })
          },
          [
            _ctx.mode === "spinner" ? (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              { key: 0 },
              vue.renderList($data.array12, (item, index2) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index2,
                  class: "u-loading-icon__dot"
                });
              }),
              128
              /* KEYED_FRAGMENT */
            )) : vue.createCommentVNode("v-if", true)
          ],
          6
          /* CLASS, STYLE */
        )) : vue.createCommentVNode("v-if", true),
        _ctx.text ? (vue.openBlock(), vue.createElementBlock(
          "text",
          {
            key: 1,
            class: "u-loading-icon__text",
            style: vue.normalizeStyle({
              fontSize: _ctx.$u.addUnit(_ctx.textSize),
              color: _ctx.textColor
            })
          },
          vue.toDisplayString(_ctx.text),
          5
          /* TEXT, STYLE */
        )) : vue.createCommentVNode("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_1$9 = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["render", _sfc_render$11], ["__scopeId", "data-v-2af81691"], ["__file", "D:/study/实训/intelligent_community_app_owner/uni_modules/uview-plus/components/u-loading-icon/u-loading-icon.vue"]]);
  const props$p = {
    props: {
      // 轮播的长度
      length: {
        type: [String, Number],
        default: props$x.swiperIndicator.length
      },
      // 当前处于活动状态的轮播的索引
      current: {
        type: [String, Number],
        default: props$x.swiperIndicator.current
      },
      // 指示器非激活颜色
      indicatorActiveColor: {
        type: String,
        default: props$x.swiperIndicator.indicatorActiveColor
      },
      // 指示器的激活颜色
      indicatorInactiveColor: {
        type: String,
        default: props$x.swiperIndicator.indicatorInactiveColor
      },
      // 指示器模式，line-线型，dot-点型
      indicatorMode: {
        type: String,
        default: props$x.swiperIndicator.indicatorMode
      }
    }
  };
  const _sfc_main$11 = {
    name: "u-swiper-indicator",
    mixins: [mpMixin, mixin, props$p],
    data() {
      return {
        lineWidth: 22
      };
    },
    computed: {
      // 指示器为线型的样式
      lineStyle() {
        let style = {};
        style.width = uni.$u.addUnit(this.lineWidth);
        style.transform = `translateX(${uni.$u.addUnit(this.current * this.lineWidth)})`;
        style.backgroundColor = this.indicatorActiveColor;
        return style;
      },
      // 指示器为点型的样式
      dotStyle() {
        return (index2) => {
          let style = {};
          style.backgroundColor = index2 === this.current ? this.indicatorActiveColor : this.indicatorInactiveColor;
          return style;
        };
      }
    }
  };
  function _sfc_render$10(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-swiper-indicator" }, [
      _ctx.indicatorMode === "line" ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: vue.normalizeClass(["u-swiper-indicator__wrapper", [`u-swiper-indicator__wrapper--${_ctx.indicatorMode}`]]),
          style: vue.normalizeStyle({
            width: _ctx.$u.addUnit($data.lineWidth * _ctx.length),
            backgroundColor: _ctx.indicatorInactiveColor
          })
        },
        [
          vue.createElementVNode(
            "view",
            {
              class: "u-swiper-indicator__wrapper--line__bar",
              style: vue.normalizeStyle([$options.lineStyle])
            },
            null,
            4
            /* STYLE */
          )
        ],
        6
        /* CLASS, STYLE */
      )) : vue.createCommentVNode("v-if", true),
      _ctx.indicatorMode === "dot" ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "u-swiper-indicator__wrapper"
      }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList(_ctx.length, (item, index2) => {
            return vue.openBlock(), vue.createElementBlock(
              "view",
              {
                class: vue.normalizeClass(["u-swiper-indicator__wrapper__dot", [index2 === _ctx.current && "u-swiper-indicator__wrapper__dot--active"]]),
                key: index2,
                style: vue.normalizeStyle([$options.dotStyle(index2)])
              },
              null,
              6
              /* CLASS, STYLE */
            );
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_1$8 = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["render", _sfc_render$10], ["__scopeId", "data-v-7b7c7ea6"], ["__file", "D:/study/实训/intelligent_community_app_owner/uni_modules/uview-plus/components/u-swiper-indicator/u-swiper-indicator.vue"]]);
  const props$o = {
    props: {
      // 列表数组，元素可为字符串，如为对象可通过keyName指定目标属性名
      list: {
        type: Array,
        default: props$x.swiper.list
      },
      // 是否显示面板指示器
      indicator: {
        type: Boolean,
        default: props$x.swiper.indicator
      },
      // 指示器非激活颜色
      indicatorActiveColor: {
        type: String,
        default: props$x.swiper.indicatorActiveColor
      },
      // 指示器的激活颜色
      indicatorInactiveColor: {
        type: String,
        default: props$x.swiper.indicatorInactiveColor
      },
      // 指示器样式，可通过bottom，left，right进行定位
      indicatorStyle: {
        type: [String, Object],
        default: props$x.swiper.indicatorStyle
      },
      // 指示器模式，line-线型，dot-点型
      indicatorMode: {
        type: String,
        default: props$x.swiper.indicatorMode
      },
      // 是否自动切换
      autoplay: {
        type: Boolean,
        default: props$x.swiper.autoplay
      },
      // 当前所在滑块的 index
      current: {
        type: [String, Number],
        default: props$x.swiper.current
      },
      // 当前所在滑块的 item-id ，不能与 current 被同时指定
      currentItemId: {
        type: String,
        default: props$x.swiper.currentItemId
      },
      // 滑块自动切换时间间隔
      interval: {
        type: [String, Number],
        default: props$x.swiper.interval
      },
      // 滑块切换过程所需时间
      duration: {
        type: [String, Number],
        default: props$x.swiper.duration
      },
      // 播放到末尾后是否重新回到开头
      circular: {
        type: Boolean,
        default: props$x.swiper.circular
      },
      // 前边距，可用于露出前一项的一小部分，nvue和支付宝不支持
      previousMargin: {
        type: [String, Number],
        default: props$x.swiper.previousMargin
      },
      // 后边距，可用于露出后一项的一小部分，nvue和支付宝不支持
      nextMargin: {
        type: [String, Number],
        default: props$x.swiper.nextMargin
      },
      // 当开启时，会根据滑动速度，连续滑动多屏，支付宝不支持
      acceleration: {
        type: Boolean,
        default: props$x.swiper.acceleration
      },
      // 同时显示的滑块数量，nvue、支付宝小程序不支持
      displayMultipleItems: {
        type: Number,
        default: props$x.swiper.displayMultipleItems
      },
      // 指定swiper切换缓动动画类型，有效值：default、linear、easeInCubic、easeOutCubic、easeInOutCubic
      // 只对微信小程序有效
      easingFunction: {
        type: String,
        default: props$x.swiper.easingFunction
      },
      // list数组中指定对象的目标属性名
      keyName: {
        type: String,
        default: props$x.swiper.keyName
      },
      // 图片的裁剪模式
      imgMode: {
        type: String,
        default: props$x.swiper.imgMode
      },
      // 组件高度
      height: {
        type: [String, Number],
        default: props$x.swiper.height
      },
      // 背景颜色
      bgColor: {
        type: String,
        default: props$x.swiper.bgColor
      },
      // 组件圆角，数值或带单位的字符串
      radius: {
        type: [String, Number],
        default: props$x.swiper.radius
      },
      // 是否加载中
      loading: {
        type: Boolean,
        default: props$x.swiper.loading
      },
      // 是否显示标题，要求数组对象中有title属性
      showTitle: {
        type: Boolean,
        default: props$x.swiper.showTitle
      }
    }
  };
  const _sfc_main$10 = {
    name: "u-swiper",
    mixins: [mpMixin, mixin, props$o],
    data() {
      return {
        currentIndex: 0
      };
    },
    watch: {
      current(val, preVal) {
        if (val === preVal)
          return;
        this.currentIndex = val;
      }
    },
    computed: {
      itemStyle() {
        return (index2) => {
          const style = {};
          if (this.nextMargin && this.previousMargin) {
            style.borderRadius = uni.$u.addUnit(this.radius);
            if (index2 !== this.currentIndex)
              style.transform = "scale(0.92)";
          }
          return style;
        };
      }
    },
    methods: {
      getItemType(item) {
        if (typeof item === "string")
          return uni.$u.test.video(this.getSource(item)) ? "video" : "image";
        if (typeof item === "object" && this.keyName) {
          if (!item.type)
            return uni.$u.test.video(this.getSource(item)) ? "video" : "image";
          if (item.type === "image")
            return "image";
          if (item.type === "video")
            return "video";
          return "image";
        }
      },
      // 获取目标路径，可能数组中为字符串，对象的形式，额外可指定对象的目标属性名keyName
      getSource(item) {
        if (typeof item === "string")
          return item;
        if (typeof item === "object" && this.keyName)
          return item[this.keyName];
        else
          uni.$u.error("请按格式传递列表参数");
        return "";
      },
      // 轮播切换事件
      change(e) {
        const {
          current
        } = e.detail;
        this.pauseVideo(this.currentIndex);
        this.currentIndex = current;
        this.$emit("change", e.detail);
      },
      // 切换轮播时，暂停视频播放
      pauseVideo(index2) {
        const lastItem = this.getSource(this.list[index2]);
        if (uni.$u.test.video(lastItem)) {
          const video2 = uni.createVideoContext(`video-${index2}`, this);
          video2.pause();
        }
      },
      // 当一个轮播item为视频时，获取它的视频海报
      getPoster(item) {
        return typeof item === "object" && item.poster ? item.poster : "";
      },
      // 点击某个item
      clickHandler(index2) {
        this.$emit("click", index2);
      }
    }
  };
  function _sfc_render$$(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_loading_icon = resolveEasycom(vue.resolveDynamicComponent("u-loading-icon"), __easycom_1$9);
    const _component_u_swiper_indicator = resolveEasycom(vue.resolveDynamicComponent("u-swiper-indicator"), __easycom_1$8);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "u-swiper",
        style: vue.normalizeStyle({
          backgroundColor: _ctx.bgColor,
          height: _ctx.$u.addUnit(_ctx.height),
          borderRadius: _ctx.$u.addUnit(_ctx.radius)
        })
      },
      [
        _ctx.loading ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "u-swiper__loading"
        }, [
          vue.createVNode(_component_u_loading_icon, { mode: "circle" })
        ])) : (vue.openBlock(), vue.createElementBlock("swiper", {
          key: 1,
          class: "u-swiper__wrapper",
          style: vue.normalizeStyle({
            height: _ctx.$u.addUnit(_ctx.height)
          }),
          onChange: _cache[0] || (_cache[0] = (...args) => $options.change && $options.change(...args)),
          circular: _ctx.circular,
          interval: _ctx.interval,
          duration: _ctx.duration,
          autoplay: _ctx.autoplay,
          current: _ctx.current,
          currentItemId: _ctx.currentItemId,
          previousMargin: _ctx.$u.addUnit(_ctx.previousMargin),
          nextMargin: _ctx.$u.addUnit(_ctx.nextMargin),
          acceleration: _ctx.acceleration,
          displayMultipleItems: _ctx.displayMultipleItems,
          easingFunction: _ctx.easingFunction
        }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(_ctx.list, (item, index2) => {
              return vue.openBlock(), vue.createElementBlock("swiper-item", {
                class: "u-swiper__wrapper__item",
                key: index2
              }, [
                vue.createElementVNode(
                  "view",
                  {
                    class: "u-swiper__wrapper__item__wrapper",
                    style: vue.normalizeStyle([$options.itemStyle(index2)])
                  },
                  [
                    vue.createCommentVNode(" 在nvue中，image图片的宽度默认为屏幕宽度，需要通过flex:1撑开，另外必须设置高度才能显示图片 "),
                    $options.getItemType(item) === "image" ? (vue.openBlock(), vue.createElementBlock("image", {
                      key: 0,
                      class: "u-swiper__wrapper__item__wrapper__image",
                      src: $options.getSource(item),
                      mode: _ctx.imgMode,
                      onClick: ($event) => $options.clickHandler(index2),
                      style: vue.normalizeStyle({
                        height: _ctx.$u.addUnit(_ctx.height),
                        borderRadius: _ctx.$u.addUnit(_ctx.radius)
                      })
                    }, null, 12, ["src", "mode", "onClick"])) : vue.createCommentVNode("v-if", true),
                    $options.getItemType(item) === "video" ? (vue.openBlock(), vue.createElementBlock("video", {
                      key: 1,
                      class: "u-swiper__wrapper__item__wrapper__video",
                      id: `video-${index2}`,
                      "enable-progress-gesture": false,
                      src: $options.getSource(item),
                      poster: $options.getPoster(item),
                      title: _ctx.showTitle && _ctx.$u.test.object(item) && item.title ? item.title : "",
                      style: vue.normalizeStyle({
                        height: _ctx.$u.addUnit(_ctx.height)
                      }),
                      controls: "",
                      onClick: ($event) => $options.clickHandler(index2)
                    }, null, 12, ["id", "src", "poster", "title", "onClick"])) : vue.createCommentVNode("v-if", true),
                    _ctx.showTitle && _ctx.$u.test.object(item) && item.title && _ctx.$u.test.image($options.getSource(item)) ? (vue.openBlock(), vue.createElementBlock(
                      "text",
                      {
                        key: 2,
                        class: "u-swiper__wrapper__item__wrapper__title u-line-1"
                      },
                      vue.toDisplayString(item.title),
                      1
                      /* TEXT */
                    )) : vue.createCommentVNode("v-if", true)
                  ],
                  4
                  /* STYLE */
                )
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ], 44, ["circular", "interval", "duration", "autoplay", "current", "currentItemId", "previousMargin", "nextMargin", "acceleration", "displayMultipleItems", "easingFunction"])),
        vue.createElementVNode(
          "view",
          {
            class: "u-swiper__indicator",
            style: vue.normalizeStyle([_ctx.$u.addStyle(_ctx.indicatorStyle)])
          },
          [
            vue.renderSlot(_ctx.$slots, "indicator", {}, () => [
              !_ctx.loading && _ctx.indicator && !_ctx.showTitle ? (vue.openBlock(), vue.createBlock(_component_u_swiper_indicator, {
                key: 0,
                indicatorActiveColor: _ctx.indicatorActiveColor,
                indicatorInactiveColor: _ctx.indicatorInactiveColor,
                length: _ctx.list.length,
                current: $data.currentIndex,
                indicatorMode: _ctx.indicatorMode
              }, null, 8, ["indicatorActiveColor", "indicatorInactiveColor", "length", "current", "indicatorMode"])) : vue.createCommentVNode("v-if", true)
            ], true)
          ],
          4
          /* STYLE */
        )
      ],
      4
      /* STYLE */
    );
  }
  const __easycom_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["render", _sfc_render$$], ["__scopeId", "data-v-4e7d0c90"], ["__file", "D:/study/实训/intelligent_community_app_owner/uni_modules/uview-plus/components/u-swiper/u-swiper.vue"]]);
  const props$n = {
    props: {
      // 是否展示工具条
      show: {
        type: Boolean,
        default: props$x.toolbar.show
      },
      // 取消按钮的文字
      cancelText: {
        type: String,
        default: props$x.toolbar.cancelText
      },
      // 确认按钮的文字
      confirmText: {
        type: String,
        default: props$x.toolbar.confirmText
      },
      // 取消按钮的颜色
      cancelColor: {
        type: String,
        default: props$x.toolbar.cancelColor
      },
      // 确认按钮的颜色
      confirmColor: {
        type: String,
        default: props$x.toolbar.confirmColor
      },
      // 标题文字
      title: {
        type: String,
        default: props$x.toolbar.title
      }
    }
  };
  const _sfc_main$$ = {
    name: "u-toolbar",
    mixins: [mpMixin, mixin, props$n],
    methods: {
      // 点击取消按钮
      cancel() {
        this.$emit("cancel");
      },
      // 点击确定按钮
      confirm() {
        this.$emit("confirm");
      }
    }
  };
  function _sfc_render$_(_ctx, _cache, $props, $setup, $data, $options) {
    return _ctx.show ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: "u-toolbar",
        onTouchmove: _cache[2] || (_cache[2] = vue.withModifiers((...args) => _ctx.noop && _ctx.noop(...args), ["stop", "prevent"]))
      },
      [
        vue.createElementVNode("view", {
          class: "u-toolbar__cancel__wrapper",
          "hover-class": "u-hover-class"
        }, [
          vue.createElementVNode(
            "text",
            {
              class: "u-toolbar__wrapper__cancel",
              onClick: _cache[0] || (_cache[0] = (...args) => $options.cancel && $options.cancel(...args)),
              style: vue.normalizeStyle({
                color: _ctx.cancelColor
              })
            },
            vue.toDisplayString(_ctx.cancelText),
            5
            /* TEXT, STYLE */
          )
        ]),
        _ctx.title ? (vue.openBlock(), vue.createElementBlock(
          "text",
          {
            key: 0,
            class: "u-toolbar__title u-line-1"
          },
          vue.toDisplayString(_ctx.title),
          1
          /* TEXT */
        )) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", {
          class: "u-toolbar__confirm__wrapper",
          "hover-class": "u-hover-class"
        }, [
          vue.createElementVNode(
            "text",
            {
              class: "u-toolbar__wrapper__confirm",
              onClick: _cache[1] || (_cache[1] = (...args) => $options.confirm && $options.confirm(...args)),
              style: vue.normalizeStyle({
                color: _ctx.confirmColor
              })
            },
            vue.toDisplayString(_ctx.confirmText),
            5
            /* TEXT, STYLE */
          )
        ])
      ],
      32
      /* HYDRATE_EVENTS */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["render", _sfc_render$_], ["__scopeId", "data-v-eadae74e"], ["__file", "D:/study/实训/intelligent_community_app_owner/uni_modules/uview-plus/components/u-toolbar/u-toolbar.vue"]]);
  const props$m = {
    props: {
      // 是否展示picker弹窗
      show: {
        type: Boolean,
        default: props$x.picker.show
      },
      // 是否展示顶部的操作栏
      showToolbar: {
        type: Boolean,
        default: props$x.picker.showToolbar
      },
      // 顶部标题
      title: {
        type: String,
        default: props$x.picker.title
      },
      // 对象数组，设置每一列的数据
      columns: {
        type: Array,
        default: props$x.picker.columns
      },
      // 是否显示加载中状态
      loading: {
        type: Boolean,
        default: props$x.picker.loading
      },
      // 各列中，单个选项的高度
      itemHeight: {
        type: [String, Number],
        default: props$x.picker.itemHeight
      },
      // 取消按钮的文字
      cancelText: {
        type: String,
        default: props$x.picker.cancelText
      },
      // 确认按钮的文字
      confirmText: {
        type: String,
        default: props$x.picker.confirmText
      },
      // 取消按钮的颜色
      cancelColor: {
        type: String,
        default: props$x.picker.cancelColor
      },
      // 确认按钮的颜色
      confirmColor: {
        type: String,
        default: props$x.picker.confirmColor
      },
      // 每列中可见选项的数量
      visibleItemCount: {
        type: [String, Number],
        default: props$x.picker.visibleItemCount
      },
      // 选项对象中，需要展示的属性键名
      keyName: {
        type: String,
        default: props$x.picker.keyName
      },
      // 是否允许点击遮罩关闭选择器
      closeOnClickOverlay: {
        type: Boolean,
        default: props$x.picker.closeOnClickOverlay
      },
      // 各列的默认索引
      defaultIndex: {
        type: Array,
        default: props$x.picker.defaultIndex
      },
      // 是否在手指松开时立即触发 change 事件。若不开启则会在滚动动画结束后触发 change 事件，只在微信2.21.1及以上有效
      immediateChange: {
        type: Boolean,
        default: props$x.picker.immediateChange
      }
    }
  };
  const _sfc_main$_ = {
    name: "u-picker",
    mixins: [mpMixin, mixin, props$m],
    data() {
      return {
        // 上一次选择的列索引
        lastIndex: [],
        // 索引值 ，对应picker-view的value
        innerIndex: [],
        // 各列的值
        innerColumns: [],
        // 上一次的变化列索引
        columnIndex: 0
      };
    },
    watch: {
      // 监听默认索引的变化，重新设置对应的值
      defaultIndex: {
        immediate: true,
        handler(n) {
          this.setIndexs(n, true);
        }
      },
      // 监听columns参数的变化
      columns: {
        immediate: true,
        deep: true,
        handler(n) {
          this.setColumns(n);
        }
      }
    },
    emits: ["close", "cancel", "confirm", "change"],
    methods: {
      // 获取item需要显示的文字，判别为对象还是文本
      getItemText(item) {
        if (uni.$u.test.object(item)) {
          return item[this.keyName];
        } else {
          return item;
        }
      },
      // 关闭选择器
      closeHandler() {
        if (this.closeOnClickOverlay) {
          this.$emit("close");
        }
      },
      // 点击工具栏的取消按钮
      cancel() {
        this.$emit("cancel");
      },
      // 点击工具栏的确定按钮
      confirm() {
        this.$emit("confirm", {
          indexs: this.innerIndex,
          value: this.innerColumns.map((item, index2) => item[this.innerIndex[index2]]),
          values: this.innerColumns
        });
      },
      // 选择器某一列的数据发生变化时触发
      changeHandler(e) {
        const {
          value: value2
        } = e.detail;
        let index2 = 0, columnIndex = 0;
        for (let i2 = 0; i2 < value2.length; i2++) {
          let item = value2[i2];
          if (item !== (this.lastIndex[i2] || 0)) {
            columnIndex = i2;
            index2 = item;
            break;
          }
        }
        this.columnIndex = columnIndex;
        const values = this.innerColumns;
        this.setLastIndex(value2);
        this.setIndexs(value2);
        this.$emit("change", {
          // 微信小程序不能传递this，会因为循环引用而报错
          picker: this,
          value: this.innerColumns.map((item, index3) => item[value2[index3]]),
          index: index2,
          indexs: value2,
          // values为当前变化列的数组内容
          values,
          columnIndex
        });
      },
      // 设置index索引，此方法可被外部调用设置
      setIndexs(index2, setLastIndex) {
        this.innerIndex = uni.$u.deepClone(index2);
        if (setLastIndex) {
          this.setLastIndex(index2);
        }
      },
      // 记录上一次的各列索引位置
      setLastIndex(index2) {
        this.lastIndex = uni.$u.deepClone(index2);
      },
      // 设置对应列选项的所有值
      setColumnValues(columnIndex, values) {
        this.innerColumns.splice(columnIndex, 1, values);
        let tmpIndex = uni.$u.deepClone(this.innerIndex);
        for (let i2 = 0; i2 < this.innerColumns.length; i2++) {
          if (i2 > this.columnIndex) {
            tmpIndex[i2] = 0;
          }
        }
        this.setIndexs(tmpIndex);
      },
      // 获取对应列的所有选项
      getColumnValues(columnIndex) {
        (async () => {
          await uni.$u.sleep();
        })();
        return this.innerColumns[columnIndex];
      },
      // 设置整体各列的columns的值
      setColumns(columns) {
        formatAppLog("log", "at uni_modules/uview-plus/components/u-picker/u-picker.vue:217", columns);
        this.innerColumns = uni.$u.deepClone(columns);
        if (this.innerIndex.length === 0) {
          this.innerIndex = new Array(columns.length).fill(0);
        }
      },
      // 获取各列选中值对应的索引
      getIndexs() {
        return this.innerIndex;
      },
      // 获取各列选中的值
      getValues() {
        (async () => {
          await uni.$u.sleep();
        })();
        return this.innerColumns.map((item, index2) => item[this.innerIndex[index2]]);
      }
    }
  };
  function _sfc_render$Z(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_toolbar = resolveEasycom(vue.resolveDynamicComponent("u-toolbar"), __easycom_0$4);
    const _component_u_loading_icon = resolveEasycom(vue.resolveDynamicComponent("u-loading-icon"), __easycom_1$9);
    const _component_u_popup = resolveEasycom(vue.resolveDynamicComponent("u-popup"), __easycom_2$6);
    return vue.openBlock(), vue.createBlock(_component_u_popup, {
      show: _ctx.show,
      onClose: $options.closeHandler
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "u-picker" }, [
          _ctx.showToolbar ? (vue.openBlock(), vue.createBlock(_component_u_toolbar, {
            key: 0,
            cancelColor: _ctx.cancelColor,
            confirmColor: _ctx.confirmColor,
            cancelText: _ctx.cancelText,
            confirmText: _ctx.confirmText,
            title: _ctx.title,
            onCancel: $options.cancel,
            onConfirm: $options.confirm
          }, null, 8, ["cancelColor", "confirmColor", "cancelText", "confirmText", "title", "onCancel", "onConfirm"])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("picker-view", {
            class: "u-picker__view",
            indicatorStyle: `height: ${_ctx.$u.addUnit(_ctx.itemHeight)}`,
            value: $data.innerIndex,
            immediateChange: _ctx.immediateChange,
            style: vue.normalizeStyle({
              height: `${_ctx.$u.addUnit(_ctx.visibleItemCount * _ctx.itemHeight)}`
            }),
            onChange: _cache[0] || (_cache[0] = (...args) => $options.changeHandler && $options.changeHandler(...args))
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.innerColumns, (item, index2) => {
                return vue.openBlock(), vue.createElementBlock("picker-view-column", {
                  key: index2,
                  class: "u-picker__view__column"
                }, [
                  _ctx.$u.test.array(item) ? (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    { key: 0 },
                    vue.renderList(item, (item1, index1) => {
                      return vue.openBlock(), vue.createElementBlock(
                        "text",
                        {
                          class: "u-picker__view__column__item u-line-1",
                          key: index1,
                          style: vue.normalizeStyle({
                            height: _ctx.$u.addUnit(_ctx.itemHeight),
                            lineHeight: _ctx.$u.addUnit(_ctx.itemHeight),
                            fontWeight: index1 === $data.innerIndex[index2] ? "bold" : "normal"
                          })
                        },
                        vue.toDisplayString($options.getItemText(item1)),
                        5
                        /* TEXT, STYLE */
                      );
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  )) : vue.createCommentVNode("v-if", true)
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ], 44, ["indicatorStyle", "value", "immediateChange"]),
          _ctx.loading ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "u-picker--loading"
          }, [
            vue.createVNode(_component_u_loading_icon, { mode: "circle" })
          ])) : vue.createCommentVNode("v-if", true)
        ])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["show", "onClose"]);
  }
  const __easycom_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["render", _sfc_render$Z], ["__scopeId", "data-v-91b05052"], ["__file", "D:/study/实训/intelligent_community_app_owner/uni_modules/uview-plus/components/u-picker/u-picker.vue"]]);
  const props$l = {
    props: {
      // 占父容器宽度的多少等分，总分为12份
      span: {
        type: [String, Number],
        default: props$x.col.span
      },
      // 指定栅格左侧的间隔数(总12栏)
      offset: {
        type: [String, Number],
        default: props$x.col.offset
      },
      // 水平排列方式，可选值为`start`(或`flex-start`)、`end`(或`flex-end`)、`center`、`around`(或`space-around`)、`between`(或`space-between`)
      justify: {
        type: String,
        default: props$x.col.justify
      },
      // 垂直对齐方式，可选值为top、center、bottom、stretch
      align: {
        type: String,
        default: props$x.col.align
      },
      // 文字对齐方式
      textAlign: {
        type: String,
        default: props$x.col.textAlign
      }
    }
  };
  const _sfc_main$Z = {
    name: "u-col",
    mixins: [mpMixin, mixin, props$l],
    data() {
      return {
        width: 0,
        parentData: {
          gutter: 0
        },
        gridNum: 12
      };
    },
    //  微信小程序中 options 选项
    options: {
      virtualHost: true
      // 将自定义节点设置成虚拟的，更加接近Vue组件的表现。我们不希望自定义组件的这个节点本身可以设置样式、响应 flex 布局等
    },
    computed: {
      uJustify() {
        if (this.justify == "end" || this.justify == "start")
          return "flex-" + this.justify;
        else if (this.justify == "around" || this.justify == "between")
          return "space-" + this.justify;
        else
          return this.justify;
      },
      uAlignItem() {
        if (this.align == "top")
          return "flex-start";
        if (this.align == "bottom")
          return "flex-end";
        else
          return this.align;
      },
      colStyle() {
        const style = {
          // 这里写成"padding: 0 10px"的形式是因为nvue的需要
          paddingLeft: uni.$u.addUnit(uni.$u.getPx(this.parentData.gutter) / 2),
          paddingRight: uni.$u.addUnit(uni.$u.getPx(this.parentData.gutter) / 2),
          alignItems: this.uAlignItem,
          justifyContent: this.uJustify,
          textAlign: this.textAlign,
          // 在非nvue上，使用百分比形式
          flex: `0 0 ${100 / this.gridNum * this.span}%`,
          marginLeft: 100 / 12 * this.offset + "%"
        };
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      async init() {
        this.updateParentData();
        this.width = await this.parent.getComponentWidth();
      },
      updateParentData() {
        this.getParentData("u-row");
      },
      clickHandler(e) {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$Y(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-col", [
          "u-col-" + _ctx.span
        ]]),
        ref: "u-col",
        style: vue.normalizeStyle([$options.colStyle]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_5$1 = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["render", _sfc_render$Y], ["__scopeId", "data-v-2ae1a870"], ["__file", "D:/study/实训/intelligent_community_app_owner/uni_modules/uview-plus/components/u-col/u-col.vue"]]);
  const props$k = {
    props: {
      // 给col添加间距，左右边距各占一半
      gutter: {
        type: [String, Number],
        default: props$x.row.gutter
      },
      // 水平排列方式，可选值为`start`(或`flex-start`)、`end`(或`flex-end`)、`center`、`around`(或`space-around`)、`between`(或`space-between`)
      justify: {
        type: String,
        default: props$x.row.justify
      },
      // 垂直对齐方式，可选值为top、center、bottom
      align: {
        type: String,
        default: props$x.row.align
      }
    }
  };
  const _sfc_main$Y = {
    name: "u-row",
    mixins: [mpMixin, mixin, props$k],
    data() {
      return {};
    },
    computed: {
      uJustify() {
        if (this.justify == "end" || this.justify == "start")
          return "flex-" + this.justify;
        else if (this.justify == "around" || this.justify == "between")
          return "space-" + this.justify;
        else
          return this.justify;
      },
      uAlignItem() {
        if (this.align == "top")
          return "flex-start";
        if (this.align == "bottom")
          return "flex-end";
        else
          return this.align;
      },
      rowStyle() {
        const style = {
          alignItems: this.uAlignItem,
          justifyContent: this.uJustify
        };
        if (this.gutter) {
          style.marginLeft = uni.$u.addUnit(-Number(this.gutter) / 2);
          style.marginRight = uni.$u.addUnit(-Number(this.gutter) / 2);
        }
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      }
    },
    methods: {
      clickHandler(e) {
        this.$emit("click");
      },
      async getComponentWidth() {
        await uni.$u.sleep();
        return new Promise((resolve) => {
          this.$uGetRect(".u-row").then((res) => {
            resolve(res.width);
          });
        });
      }
    }
  };
  function _sfc_render$X(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "u-row",
        ref: "u-row",
        style: vue.normalizeStyle([$options.rowStyle]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      4
      /* STYLE */
    );
  }
  const __easycom_6 = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["render", _sfc_render$X], ["__scopeId", "data-v-a2f99026"], ["__file", "D:/study/实训/intelligent_community_app_owner/uni_modules/uview-plus/components/u-row/u-row.vue"]]);
  const props$j = {
    props: {
      // 背景颜色（默认transparent）
      bgColor: {
        type: String,
        default: props$x.gap.bgColor
      },
      // 分割槽高度，单位px（默认30）
      height: {
        type: [String, Number],
        default: props$x.gap.height
      },
      // 与上一个组件的距离
      marginTop: {
        type: [String, Number],
        default: props$x.gap.marginTop
      },
      // 与下一个组件的距离
      marginBottom: {
        type: [String, Number],
        default: props$x.gap.marginBottom
      }
    }
  };
  const _sfc_main$X = {
    name: "u-gap",
    mixins: [mpMixin, mixin, props$j],
    computed: {
      gapStyle() {
        const style = {
          backgroundColor: this.bgColor,
          height: uni.$u.addUnit(this.height),
          marginTop: uni.$u.addUnit(this.marginTop),
          marginBottom: uni.$u.addUnit(this.marginBottom)
        };
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      }
    }
  };
  function _sfc_render$W(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "u-gap",
        style: vue.normalizeStyle([$options.gapStyle])
      },
      null,
      4
      /* STYLE */
    );
  }
  const __easycom_2$5 = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["render", _sfc_render$W], ["__scopeId", "data-v-6fe44ee6"], ["__file", "D:/study/实训/intelligent_community_app_owner/uni_modules/uview-plus/components/u-gap/u-gap.vue"]]);
  const _sfc_main$W = {
    name: "u-toast",
    mixins: [mpMixin, mixin],
    data() {
      return {
        isShow: false,
        timer: null,
        // 定时器
        config: {
          message: "",
          // 显示文本
          type: "",
          // 主题类型，primary，success，error，warning，black
          duration: 2e3,
          // 显示的时间，毫秒
          icon: true,
          // 显示的图标
          position: "center",
          // toast出现的位置
          complete: null,
          // 执行完后的回调函数
          overlay: false,
          // 是否防止触摸穿透
          loading: false
          // 是否加载中状态
        },
        tmpConfig: {}
        // 将用户配置和内置配置合并后的临时配置变量
      };
    },
    computed: {
      iconName() {
        if (!this.tmpConfig.icon || this.tmpConfig.icon == "none") {
          return "";
        }
        if (["error", "warning", "success", "primary"].includes(this.tmpConfig.type)) {
          return uni.$u.type2icon(this.tmpConfig.type);
        } else {
          return "";
        }
      },
      overlayStyle() {
        const style = {
          justifyContent: "center",
          alignItems: "center",
          display: "flex"
        };
        style.backgroundColor = "rgba(0, 0, 0, 0)";
        return style;
      },
      iconStyle() {
        const style = {};
        style.marginRight = "4px";
        return style;
      },
      loadingIconColor() {
        let color2 = "rgb(255, 255, 255)";
        if (["error", "warning", "success", "primary"].includes(this.tmpConfig.type)) {
          color2 = uni.$u.hexToRgb(uni.$u.color[this.tmpConfig.type]);
        }
        return color2;
      },
      // 内容盒子的样式
      contentStyle() {
        const windowHeight = uni.$u.sys().windowHeight, style = {};
        let value2 = 0;
        if (this.tmpConfig.position === "top") {
          value2 = -windowHeight * 0.25;
        } else if (this.tmpConfig.position === "bottom") {
          value2 = windowHeight * 0.25;
        }
        style.transform = `translateY(${value2}px)`;
        return style;
      }
    },
    created() {
      ["primary", "success", "error", "warning", "default", "loading"].map((item) => {
        this[item] = (message) => this.show({
          type: item,
          message
        });
      });
    },
    methods: {
      // 显示toast组件，由父组件通过this.$refs.xxx.show(options)形式调用
      show(options) {
        this.tmpConfig = uni.$u.deepMerge(this.config, options);
        this.clearTimer();
        this.isShow = true;
        this.timer = setTimeout(() => {
          this.clearTimer();
          typeof this.tmpConfig.complete === "function" && this.tmpConfig.complete();
        }, this.tmpConfig.duration);
      },
      // 隐藏toast组件，由父组件通过this.$refs.xxx.hide()形式调用
      hide() {
        this.clearTimer();
      },
      clearTimer() {
        this.isShow = false;
        clearTimeout(this.timer);
        this.timer = null;
      }
    },
    beforeDestroy() {
      this.clearTimer();
    }
  };
  function _sfc_render$V(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_loading_icon = resolveEasycom(vue.resolveDynamicComponent("u-loading-icon"), __easycom_1$9);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$6);
    const _component_u_gap = resolveEasycom(vue.resolveDynamicComponent("u-gap"), __easycom_2$5);
    const _component_u_overlay = resolveEasycom(vue.resolveDynamicComponent("u-overlay"), __easycom_3$3);
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-toast" }, [
      vue.createVNode(_component_u_overlay, {
        show: $data.isShow,
        "custom-style": $options.overlayStyle
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["u-toast__content", ["u-type-" + $data.tmpConfig.type, $data.tmpConfig.type === "loading" || $data.tmpConfig.loading ? "u-toast__content--loading" : ""]]),
              style: vue.normalizeStyle([$options.contentStyle])
            },
            [
              $data.tmpConfig.type === "loading" ? (vue.openBlock(), vue.createBlock(_component_u_loading_icon, {
                key: 0,
                mode: "circle",
                color: "rgb(255, 255, 255)",
                inactiveColor: "rgb(120, 120, 120)",
                size: "25"
              })) : $data.tmpConfig.type !== "defalut" && $options.iconName ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
                key: 1,
                name: $options.iconName,
                size: "17",
                color: $data.tmpConfig.type,
                customStyle: $options.iconStyle
              }, null, 8, ["name", "color", "customStyle"])) : vue.createCommentVNode("v-if", true),
              $data.tmpConfig.type === "loading" || $data.tmpConfig.loading ? (vue.openBlock(), vue.createBlock(_component_u_gap, {
                key: 2,
                height: "12",
                bgColor: "transparent"
              })) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode(
                "text",
                {
                  class: vue.normalizeClass(["u-toast__content__text", ["u-toast__content__text--" + $data.tmpConfig.type]]),
                  style: { "max-width": "400rpx" }
                },
                vue.toDisplayString($data.tmpConfig.message),
                3
                /* TEXT, CLASS */
              )
            ],
            6
            /* CLASS, STYLE */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["show", "custom-style"])
    ]);
  }
  const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["render", _sfc_render$V], ["__scopeId", "data-v-e61e8fb9"], ["__file", "D:/study/实训/intelligent_community_app_owner/uni_modules/uview-plus/components/u-toast/u-toast.vue"]]);
  function bind$3(fn, thisArg) {
    return function wrap() {
      return fn.apply(thisArg, arguments);
    };
  }
  const { toString: toString$2 } = Object.prototype;
  const { getPrototypeOf } = Object;
  const kindOf$1 = ((cache) => (thing) => {
    const str = toString$2.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
  })(/* @__PURE__ */ Object.create(null));
  const kindOfTest$1 = (type2) => {
    type2 = type2.toLowerCase();
    return (thing) => kindOf$1(thing) === type2;
  };
  const typeOfTest = (type2) => (thing) => typeof thing === type2;
  const { isArray: isArray$2 } = Array;
  const isUndefined$2 = typeOfTest("undefined");
  function isBuffer$1(val) {
    return val !== null && !isUndefined$2(val) && val.constructor !== null && !isUndefined$2(val.constructor) && isFunction$1(val.constructor.isBuffer) && val.constructor.isBuffer(val);
  }
  const isArrayBuffer$1 = kindOfTest$1("ArrayBuffer");
  function isArrayBufferView$1(val) {
    let result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && isArrayBuffer$1(val.buffer);
    }
    return result;
  }
  const isString$1 = typeOfTest("string");
  const isFunction$1 = typeOfTest("function");
  const isNumber$1 = typeOfTest("number");
  const isObject$2 = (thing) => thing !== null && typeof thing === "object";
  const isBoolean = (thing) => thing === true || thing === false;
  const isPlainObject$2 = (val) => {
    if (kindOf$1(val) !== "object") {
      return false;
    }
    const prototype2 = getPrototypeOf(val);
    return (prototype2 === null || prototype2 === Object.prototype || Object.getPrototypeOf(prototype2) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
  };
  const isDate$2 = kindOfTest$1("Date");
  const isFile$1 = kindOfTest$1("File");
  const isBlob$1 = kindOfTest$1("Blob");
  const isFileList$1 = kindOfTest$1("FileList");
  const isStream$1 = (val) => isObject$2(val) && isFunction$1(val.pipe);
  const isFormData$1 = (thing) => {
    let kind;
    return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction$1(thing.append) && ((kind = kindOf$1(thing)) === "formdata" || // detect form-data instance
    kind === "object" && isFunction$1(thing.toString) && thing.toString() === "[object FormData]"));
  };
  const isURLSearchParams$2 = kindOfTest$1("URLSearchParams");
  const trim$2 = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function forEach$2(obj, fn, { allOwnKeys = false } = {}) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    let i2;
    let l;
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray$2(obj)) {
      for (i2 = 0, l = obj.length; i2 < l; i2++) {
        fn.call(null, obj[i2], i2, obj);
      }
    } else {
      const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
      const len = keys.length;
      let key;
      for (i2 = 0; i2 < len; i2++) {
        key = keys[i2];
        fn.call(null, obj[key], key, obj);
      }
    }
  }
  function findKey(obj, key) {
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i2 = keys.length;
    let _key;
    while (i2-- > 0) {
      _key = keys[i2];
      if (key === _key.toLowerCase()) {
        return _key;
      }
    }
    return null;
  }
  const _global$1 = (() => {
    if (typeof globalThis !== "undefined")
      return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
  })();
  const isContextDefined = (context) => !isUndefined$2(context) && context !== _global$1;
  function merge$1() {
    const { caseless } = isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key) => {
      const targetKey = caseless && findKey(result, key) || key;
      if (isPlainObject$2(result[targetKey]) && isPlainObject$2(val)) {
        result[targetKey] = merge$1(result[targetKey], val);
      } else if (isPlainObject$2(val)) {
        result[targetKey] = merge$1({}, val);
      } else if (isArray$2(val)) {
        result[targetKey] = val.slice();
      } else {
        result[targetKey] = val;
      }
    };
    for (let i2 = 0, l = arguments.length; i2 < l; i2++) {
      arguments[i2] && forEach$2(arguments[i2], assignValue);
    }
    return result;
  }
  const extend$1 = (a, b, thisArg, { allOwnKeys } = {}) => {
    forEach$2(b, (val, key) => {
      if (thisArg && isFunction$1(val)) {
        a[key] = bind$3(val, thisArg);
      } else {
        a[key] = val;
      }
    }, { allOwnKeys });
    return a;
  };
  const stripBOM$1 = (content) => {
    if (content.charCodeAt(0) === 65279) {
      content = content.slice(1);
    }
    return content;
  };
  const inherits$1 = (constructor, superConstructor, props2, descriptors2) => {
    constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, "super", {
      value: superConstructor.prototype
    });
    props2 && Object.assign(constructor.prototype, props2);
  };
  const toFlatObject$1 = (sourceObj, destObj, filter, propFilter) => {
    let props2;
    let i2;
    let prop;
    const merged = {};
    destObj = destObj || {};
    if (sourceObj == null)
      return destObj;
    do {
      props2 = Object.getOwnPropertyNames(sourceObj);
      i2 = props2.length;
      while (i2-- > 0) {
        prop = props2[i2];
        if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
          destObj[prop] = sourceObj[prop];
          merged[prop] = true;
        }
      }
      sourceObj = filter !== false && getPrototypeOf(sourceObj);
    } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
  };
  const endsWith$1 = (str, searchString, position) => {
    str = String(str);
    if (position === void 0 || position > str.length) {
      position = str.length;
    }
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
  const toArray$1 = (thing) => {
    if (!thing)
      return null;
    if (isArray$2(thing))
      return thing;
    let i2 = thing.length;
    if (!isNumber$1(i2))
      return null;
    const arr = new Array(i2);
    while (i2-- > 0) {
      arr[i2] = thing[i2];
    }
    return arr;
  };
  const isTypedArray$1 = ((TypedArray) => {
    return (thing) => {
      return TypedArray && thing instanceof TypedArray;
    };
  })(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
  const forEachEntry = (obj, fn) => {
    const generator = obj && obj[Symbol.iterator];
    const iterator = generator.call(obj);
    let result;
    while ((result = iterator.next()) && !result.done) {
      const pair = result.value;
      fn.call(obj, pair[0], pair[1]);
    }
  };
  const matchAll = (regExp2, str) => {
    let matches;
    const arr = [];
    while ((matches = regExp2.exec(str)) !== null) {
      arr.push(matches);
    }
    return arr;
  };
  const isHTMLForm = kindOfTest$1("HTMLFormElement");
  const toCamelCase = (str) => {
    return str.toLowerCase().replace(
      /[-_\s]([a-z\d])(\w*)/g,
      function replacer(m, p1, p2) {
        return p1.toUpperCase() + p2;
      }
    );
  };
  const hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
  const isRegExp = kindOfTest$1("RegExp");
  const reduceDescriptors = (obj, reducer) => {
    const descriptors2 = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    forEach$2(descriptors2, (descriptor, name) => {
      if (reducer(descriptor, name, obj) !== false) {
        reducedDescriptors[name] = descriptor;
      }
    });
    Object.defineProperties(obj, reducedDescriptors);
  };
  const freezeMethods = (obj) => {
    reduceDescriptors(obj, (descriptor, name) => {
      if (isFunction$1(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
        return false;
      }
      const value2 = obj[name];
      if (!isFunction$1(value2))
        return;
      descriptor.enumerable = false;
      if ("writable" in descriptor) {
        descriptor.writable = false;
        return;
      }
      if (!descriptor.set) {
        descriptor.set = () => {
          throw Error("Can not rewrite read-only method '" + name + "'");
        };
      }
    });
  };
  const toObjectSet = (arrayOrString, delimiter) => {
    const obj = {};
    const define = (arr) => {
      arr.forEach((value2) => {
        obj[value2] = true;
      });
    };
    isArray$2(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
  };
  const noop = () => {
  };
  const toFiniteNumber = (value2, defaultValue) => {
    value2 = +value2;
    return Number.isFinite(value2) ? value2 : defaultValue;
  };
  const ALPHA = "abcdefghijklmnopqrstuvwxyz";
  const DIGIT = "0123456789";
  const ALPHABET = {
    DIGIT,
    ALPHA,
    ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
  };
  const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
    let str = "";
    const { length } = alphabet;
    while (size--) {
      str += alphabet[Math.random() * length | 0];
    }
    return str;
  };
  function isSpecCompliantForm(thing) {
    return !!(thing && isFunction$1(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
  }
  const toJSONObject = (obj) => {
    const stack = new Array(10);
    const visit = (source, i2) => {
      if (isObject$2(source)) {
        if (stack.indexOf(source) >= 0) {
          return;
        }
        if (!("toJSON" in source)) {
          stack[i2] = source;
          const target = isArray$2(source) ? [] : {};
          forEach$2(source, (value2, key) => {
            const reducedValue = visit(value2, i2 + 1);
            !isUndefined$2(reducedValue) && (target[key] = reducedValue);
          });
          stack[i2] = void 0;
          return target;
        }
      }
      return source;
    };
    return visit(obj, 0);
  };
  const isAsyncFn = kindOfTest$1("AsyncFunction");
  const isThenable = (thing) => thing && (isObject$2(thing) || isFunction$1(thing)) && isFunction$1(thing.then) && isFunction$1(thing.catch);
  const utils$3 = {
    isArray: isArray$2,
    isArrayBuffer: isArrayBuffer$1,
    isBuffer: isBuffer$1,
    isFormData: isFormData$1,
    isArrayBufferView: isArrayBufferView$1,
    isString: isString$1,
    isNumber: isNumber$1,
    isBoolean,
    isObject: isObject$2,
    isPlainObject: isPlainObject$2,
    isUndefined: isUndefined$2,
    isDate: isDate$2,
    isFile: isFile$1,
    isBlob: isBlob$1,
    isRegExp,
    isFunction: isFunction$1,
    isStream: isStream$1,
    isURLSearchParams: isURLSearchParams$2,
    isTypedArray: isTypedArray$1,
    isFileList: isFileList$1,
    forEach: forEach$2,
    merge: merge$1,
    extend: extend$1,
    trim: trim$2,
    stripBOM: stripBOM$1,
    inherits: inherits$1,
    toFlatObject: toFlatObject$1,
    kindOf: kindOf$1,
    kindOfTest: kindOfTest$1,
    endsWith: endsWith$1,
    toArray: toArray$1,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty,
    hasOwnProp: hasOwnProperty,
    // an alias to avoid ESLint no-prototype-builtins detection
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop,
    toFiniteNumber,
    findKey,
    global: _global$1,
    isContextDefined,
    ALPHABET,
    generateString,
    isSpecCompliantForm,
    toJSONObject,
    isAsyncFn,
    isThenable
  };
  function AxiosError$2(message, code2, config2, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error().stack;
    }
    this.message = message;
    this.name = "AxiosError";
    code2 && (this.code = code2);
    config2 && (this.config = config2);
    request && (this.request = request);
    response && (this.response = response);
  }
  utils$3.inherits(AxiosError$2, Error, {
    toJSON: function toJSON() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: utils$3.toJSONObject(this.config),
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null
      };
    }
  });
  const prototype$2 = AxiosError$2.prototype;
  const descriptors$1 = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
    // eslint-disable-next-line func-names
  ].forEach((code2) => {
    descriptors$1[code2] = { value: code2 };
  });
  Object.defineProperties(AxiosError$2, descriptors$1);
  Object.defineProperty(prototype$2, "isAxiosError", { value: true });
  AxiosError$2.from = (error2, code2, config2, request, response, customProps) => {
    const axiosError = Object.create(prototype$2);
    utils$3.toFlatObject(error2, axiosError, function filter(obj) {
      return obj !== Error.prototype;
    }, (prop) => {
      return prop !== "isAxiosError";
    });
    AxiosError$2.call(axiosError, error2.message, code2, config2, request, response);
    axiosError.cause = error2;
    axiosError.name = error2.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
  };
  const httpAdapter = null;
  function isVisitable(thing) {
    return utils$3.isPlainObject(thing) || utils$3.isArray(thing);
  }
  function removeBrackets(key) {
    return utils$3.endsWith(key, "[]") ? key.slice(0, -2) : key;
  }
  function renderKey(path, key, dots) {
    if (!path)
      return key;
    return path.concat(key).map(function each(token, i2) {
      token = removeBrackets(token);
      return !dots && i2 ? "[" + token + "]" : token;
    }).join(dots ? "." : "");
  }
  function isFlatArray(arr) {
    return utils$3.isArray(arr) && !arr.some(isVisitable);
  }
  const predicates = utils$3.toFlatObject(utils$3, {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
  });
  function toFormData(obj, formData, options) {
    if (!utils$3.isObject(obj)) {
      throw new TypeError("target must be an object");
    }
    formData = formData || new FormData();
    options = utils$3.toFlatObject(options, {
      metaTokens: true,
      dots: false,
      indexes: false
    }, false, function defined(option, source) {
      return !utils$3.isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
    const useBlob = _Blob && utils$3.isSpecCompliantForm(formData);
    if (!utils$3.isFunction(visitor)) {
      throw new TypeError("visitor must be a function");
    }
    function convertValue(value2) {
      if (value2 === null)
        return "";
      if (utils$3.isDate(value2)) {
        return value2.toISOString();
      }
      if (!useBlob && utils$3.isBlob(value2)) {
        throw new AxiosError$2("Blob is not supported. Use a Buffer instead.");
      }
      if (utils$3.isArrayBuffer(value2) || utils$3.isTypedArray(value2)) {
        return useBlob && typeof Blob === "function" ? new Blob([value2]) : Buffer.from(value2);
      }
      return value2;
    }
    function defaultVisitor(value2, key, path) {
      let arr = value2;
      if (value2 && !path && typeof value2 === "object") {
        if (utils$3.endsWith(key, "{}")) {
          key = metaTokens ? key : key.slice(0, -2);
          value2 = JSON.stringify(value2);
        } else if (utils$3.isArray(value2) && isFlatArray(value2) || (utils$3.isFileList(value2) || utils$3.endsWith(key, "[]")) && (arr = utils$3.toArray(value2))) {
          key = removeBrackets(key);
          arr.forEach(function each(el, index2) {
            !(utils$3.isUndefined(el) || el === null) && formData.append(
              // eslint-disable-next-line no-nested-ternary
              indexes === true ? renderKey([key], index2, dots) : indexes === null ? key : key + "[]",
              convertValue(el)
            );
          });
          return false;
        }
      }
      if (isVisitable(value2)) {
        return true;
      }
      formData.append(renderKey(path, key, dots), convertValue(value2));
      return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
      defaultVisitor,
      convertValue,
      isVisitable
    });
    function build(value2, path) {
      if (utils$3.isUndefined(value2))
        return;
      if (stack.indexOf(value2) !== -1) {
        throw Error("Circular reference detected in " + path.join("."));
      }
      stack.push(value2);
      utils$3.forEach(value2, function each(el, key) {
        const result = !(utils$3.isUndefined(el) || el === null) && visitor.call(
          formData,
          el,
          utils$3.isString(key) ? key.trim() : key,
          path,
          exposedHelpers
        );
        if (result === true) {
          build(el, path ? path.concat(key) : [key]);
        }
      });
      stack.pop();
    }
    if (!utils$3.isObject(obj)) {
      throw new TypeError("data must be an object");
    }
    build(obj);
    return formData;
  }
  function encode$3(str) {
    const charMap = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
      return charMap[match];
    });
  }
  function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && toFormData(params, this, options);
  }
  const prototype$1 = AxiosURLSearchParams.prototype;
  prototype$1.append = function append(name, value2) {
    this._pairs.push([name, value2]);
  };
  prototype$1.toString = function toString2(encoder) {
    const _encode = encoder ? function(value2) {
      return encoder.call(this, value2, encode$3);
    } : encode$3;
    return this._pairs.map(function each(pair) {
      return _encode(pair[0]) + "=" + _encode(pair[1]);
    }, "").join("&");
  };
  function encode$2(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function buildURL$3(url2, params, options) {
    if (!params) {
      return url2;
    }
    const _encode = options && options.encode || encode$2;
    const serializeFn = options && options.serialize;
    let serializedParams;
    if (serializeFn) {
      serializedParams = serializeFn(params, options);
    } else {
      serializedParams = utils$3.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, options).toString(_encode);
    }
    if (serializedParams) {
      const hashmarkIndex = url2.indexOf("#");
      if (hashmarkIndex !== -1) {
        url2 = url2.slice(0, hashmarkIndex);
      }
      url2 += (url2.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url2;
  }
  let InterceptorManager$1 = class InterceptorManager {
    constructor() {
      this.handlers = [];
    }
    /**
     * Add a new interceptor to the stack
     *
     * @param {Function} fulfilled The function to handle `then` for a `Promise`
     * @param {Function} rejected The function to handle `reject` for a `Promise`
     *
     * @return {Number} An ID used to remove interceptor later
     */
    use(fulfilled, rejected, options) {
      this.handlers.push({
        fulfilled,
        rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    }
    /**
     * Remove an interceptor from the stack
     *
     * @param {Number} id The ID that was returned by `use`
     *
     * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
     */
    eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    }
    /**
     * Clear all interceptors from the stack
     *
     * @returns {void}
     */
    clear() {
      if (this.handlers) {
        this.handlers = [];
      }
    }
    /**
     * Iterate over all the registered interceptors
     *
     * This method is particularly useful for skipping over any
     * interceptors that may have become `null` calling `eject`.
     *
     * @param {Function} fn The function to call for each interceptor
     *
     * @returns {void}
     */
    forEach(fn) {
      utils$3.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    }
  };
  const InterceptorManager$2 = InterceptorManager$1;
  const transitionalDefaults = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  };
  const URLSearchParams$1 = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams;
  const FormData$1 = typeof FormData !== "undefined" ? FormData : null;
  const Blob$1 = typeof Blob !== "undefined" ? Blob : null;
  const isStandardBrowserEnv$1 = (() => {
    let product;
    if (typeof navigator !== "undefined" && ((product = navigator.product) === "ReactNative" || product === "NativeScript" || product === "NS")) {
      return false;
    }
    return typeof window !== "undefined" && typeof document !== "undefined";
  })();
  const isStandardBrowserWebWorkerEnv = (() => {
    return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
  })();
  const platform$2 = {
    isBrowser: true,
    classes: {
      URLSearchParams: URLSearchParams$1,
      FormData: FormData$1,
      Blob: Blob$1
    },
    isStandardBrowserEnv: isStandardBrowserEnv$1,
    isStandardBrowserWebWorkerEnv,
    protocols: ["http", "https", "file", "blob", "url", "data"]
  };
  function toURLEncodedForm(data, options) {
    return toFormData(data, new platform$2.classes.URLSearchParams(), Object.assign({
      visitor: function(value2, key, path, helpers) {
        if (platform$2.isNode && utils$3.isBuffer(value2)) {
          this.append(key, value2.toString("base64"));
          return false;
        }
        return helpers.defaultVisitor.apply(this, arguments);
      }
    }, options));
  }
  function parsePropPath(name) {
    return utils$3.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
      return match[0] === "[]" ? "" : match[1] || match[0];
    });
  }
  function arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i2;
    const len = keys.length;
    let key;
    for (i2 = 0; i2 < len; i2++) {
      key = keys[i2];
      obj[key] = arr[key];
    }
    return obj;
  }
  function formDataToJSON(formData) {
    function buildPath(path, value2, target, index2) {
      let name = path[index2++];
      const isNumericKey = Number.isFinite(+name);
      const isLast = index2 >= path.length;
      name = !name && utils$3.isArray(target) ? target.length : name;
      if (isLast) {
        if (utils$3.hasOwnProp(target, name)) {
          target[name] = [target[name], value2];
        } else {
          target[name] = value2;
        }
        return !isNumericKey;
      }
      if (!target[name] || !utils$3.isObject(target[name])) {
        target[name] = [];
      }
      const result = buildPath(path, value2, target[name], index2);
      if (result && utils$3.isArray(target[name])) {
        target[name] = arrayToObject(target[name]);
      }
      return !isNumericKey;
    }
    if (utils$3.isFormData(formData) && utils$3.isFunction(formData.entries)) {
      const obj = {};
      utils$3.forEachEntry(formData, (name, value2) => {
        buildPath(parsePropPath(name), value2, obj, 0);
      });
      return obj;
    }
    return null;
  }
  const DEFAULT_CONTENT_TYPE = {
    "Content-Type": void 0
  };
  function stringifySafely(rawValue, parser, encoder) {
    if (utils$3.isString(rawValue)) {
      try {
        (parser || JSON.parse)(rawValue);
        return utils$3.trim(rawValue);
      } catch (e) {
        if (e.name !== "SyntaxError") {
          throw e;
        }
      }
    }
    return (encoder || JSON.stringify)(rawValue);
  }
  const defaults$1 = {
    transitional: transitionalDefaults,
    adapter: ["xhr", "http"],
    transformRequest: [function transformRequest(data, headers) {
      const contentType = headers.getContentType() || "";
      const hasJSONContentType = contentType.indexOf("application/json") > -1;
      const isObjectPayload = utils$3.isObject(data);
      if (isObjectPayload && utils$3.isHTMLForm(data)) {
        data = new FormData(data);
      }
      const isFormData2 = utils$3.isFormData(data);
      if (isFormData2) {
        if (!hasJSONContentType) {
          return data;
        }
        return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
      }
      if (utils$3.isArrayBuffer(data) || utils$3.isBuffer(data) || utils$3.isStream(data) || utils$3.isFile(data) || utils$3.isBlob(data)) {
        return data;
      }
      if (utils$3.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils$3.isURLSearchParams(data)) {
        headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
        return data.toString();
      }
      let isFileList2;
      if (isObjectPayload) {
        if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
          return toURLEncodedForm(data, this.formSerializer).toString();
        }
        if ((isFileList2 = utils$3.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
          const _FormData = this.env && this.env.FormData;
          return toFormData(
            isFileList2 ? { "files[]": data } : data,
            _FormData && new _FormData(),
            this.formSerializer
          );
        }
      }
      if (isObjectPayload || hasJSONContentType) {
        headers.setContentType("application/json", false);
        return stringifySafely(data);
      }
      return data;
    }],
    transformResponse: [function transformResponse(data) {
      const transitional = this.transitional || defaults$1.transitional;
      const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
      const JSONRequested = this.responseType === "json";
      if (data && utils$3.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
        const silentJSONParsing = transitional && transitional.silentJSONParsing;
        const strictJSONParsing = !silentJSONParsing && JSONRequested;
        try {
          return JSON.parse(data);
        } catch (e) {
          if (strictJSONParsing) {
            if (e.name === "SyntaxError") {
              throw AxiosError$2.from(e, AxiosError$2.ERR_BAD_RESPONSE, this, null, this.response);
            }
            throw e;
          }
        }
      }
      return data;
    }],
    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: platform$2.classes.FormData,
      Blob: platform$2.classes.Blob
    },
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    },
    headers: {
      common: {
        "Accept": "application/json, text/plain, */*"
      }
    }
  };
  utils$3.forEach(["delete", "get", "head"], function forEachMethodNoData(method2) {
    defaults$1.headers[method2] = {};
  });
  utils$3.forEach(["post", "put", "patch"], function forEachMethodWithData(method2) {
    defaults$1.headers[method2] = utils$3.merge(DEFAULT_CONTENT_TYPE);
  });
  const defaults$2 = defaults$1;
  const ignoreDuplicateOf = utils$3.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ]);
  const parseHeaders = (rawHeaders) => {
    const parsed = {};
    let key;
    let val;
    let i2;
    rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
      i2 = line.indexOf(":");
      key = line.substring(0, i2).trim().toLowerCase();
      val = line.substring(i2 + 1).trim();
      if (!key || parsed[key] && ignoreDuplicateOf[key]) {
        return;
      }
      if (key === "set-cookie") {
        if (parsed[key]) {
          parsed[key].push(val);
        } else {
          parsed[key] = [val];
        }
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
      }
    });
    return parsed;
  };
  const $internals = Symbol("internals");
  function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
  }
  function normalizeValue(value2) {
    if (value2 === false || value2 == null) {
      return value2;
    }
    return utils$3.isArray(value2) ? value2.map(normalizeValue) : String(value2);
  }
  function parseTokens(str) {
    const tokens = /* @__PURE__ */ Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while (match = tokensRE.exec(str)) {
      tokens[match[1]] = match[2];
    }
    return tokens;
  }
  const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
  function matchHeaderValue(context, value2, header, filter, isHeaderNameFilter) {
    if (utils$3.isFunction(filter)) {
      return filter.call(this, value2, header);
    }
    if (isHeaderNameFilter) {
      value2 = header;
    }
    if (!utils$3.isString(value2))
      return;
    if (utils$3.isString(filter)) {
      return value2.indexOf(filter) !== -1;
    }
    if (utils$3.isRegExp(filter)) {
      return filter.test(value2);
    }
  }
  function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
  }
  function buildAccessors(obj, header) {
    const accessorName = utils$3.toCamelCase(" " + header);
    ["get", "set", "has"].forEach((methodName) => {
      Object.defineProperty(obj, methodName + accessorName, {
        value: function(arg1, arg2, arg3) {
          return this[methodName].call(this, header, arg1, arg2, arg3);
        },
        configurable: true
      });
    });
  }
  class AxiosHeaders {
    constructor(headers) {
      headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
      const self2 = this;
      function setHeader(_value, _header, _rewrite) {
        const lHeader = normalizeHeader(_header);
        if (!lHeader) {
          throw new Error("header name must be a non-empty string");
        }
        const key = utils$3.findKey(self2, lHeader);
        if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
          self2[key || _header] = normalizeValue(_value);
        }
      }
      const setHeaders = (headers, _rewrite) => utils$3.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
      if (utils$3.isPlainObject(header) || header instanceof this.constructor) {
        setHeaders(header, valueOrRewrite);
      } else if (utils$3.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
        setHeaders(parseHeaders(header), valueOrRewrite);
      } else {
        header != null && setHeader(valueOrRewrite, header, rewrite);
      }
      return this;
    }
    get(header, parser) {
      header = normalizeHeader(header);
      if (header) {
        const key = utils$3.findKey(this, header);
        if (key) {
          const value2 = this[key];
          if (!parser) {
            return value2;
          }
          if (parser === true) {
            return parseTokens(value2);
          }
          if (utils$3.isFunction(parser)) {
            return parser.call(this, value2, key);
          }
          if (utils$3.isRegExp(parser)) {
            return parser.exec(value2);
          }
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(header, matcher) {
      header = normalizeHeader(header);
      if (header) {
        const key = utils$3.findKey(this, header);
        return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
      }
      return false;
    }
    delete(header, matcher) {
      const self2 = this;
      let deleted = false;
      function deleteHeader(_header) {
        _header = normalizeHeader(_header);
        if (_header) {
          const key = utils$3.findKey(self2, _header);
          if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
            delete self2[key];
            deleted = true;
          }
        }
      }
      if (utils$3.isArray(header)) {
        header.forEach(deleteHeader);
      } else {
        deleteHeader(header);
      }
      return deleted;
    }
    clear(matcher) {
      const keys = Object.keys(this);
      let i2 = keys.length;
      let deleted = false;
      while (i2--) {
        const key = keys[i2];
        if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
          delete this[key];
          deleted = true;
        }
      }
      return deleted;
    }
    normalize(format2) {
      const self2 = this;
      const headers = {};
      utils$3.forEach(this, (value2, header) => {
        const key = utils$3.findKey(headers, header);
        if (key) {
          self2[key] = normalizeValue(value2);
          delete self2[header];
          return;
        }
        const normalized = format2 ? formatHeader(header) : String(header).trim();
        if (normalized !== header) {
          delete self2[header];
        }
        self2[normalized] = normalizeValue(value2);
        headers[normalized] = true;
      });
      return this;
    }
    concat(...targets) {
      return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
      const obj = /* @__PURE__ */ Object.create(null);
      utils$3.forEach(this, (value2, header) => {
        value2 != null && value2 !== false && (obj[header] = asStrings && utils$3.isArray(value2) ? value2.join(", ") : value2);
      });
      return obj;
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([header, value2]) => header + ": " + value2).join("\n");
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(thing) {
      return thing instanceof this ? thing : new this(thing);
    }
    static concat(first, ...targets) {
      const computed = new this(first);
      targets.forEach((target) => computed.set(target));
      return computed;
    }
    static accessor(header) {
      const internals = this[$internals] = this[$internals] = {
        accessors: {}
      };
      const accessors = internals.accessors;
      const prototype2 = this.prototype;
      function defineAccessor(_header) {
        const lHeader = normalizeHeader(_header);
        if (!accessors[lHeader]) {
          buildAccessors(prototype2, _header);
          accessors[lHeader] = true;
        }
      }
      utils$3.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
      return this;
    }
  }
  AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
  utils$3.freezeMethods(AxiosHeaders.prototype);
  utils$3.freezeMethods(AxiosHeaders);
  const AxiosHeaders$1 = AxiosHeaders;
  function transformData(fns, response) {
    const config2 = this || defaults$2;
    const context = response || config2;
    const headers = AxiosHeaders$1.from(context.headers);
    let data = context.data;
    utils$3.forEach(fns, function transform(fn) {
      data = fn.call(config2, data, headers.normalize(), response ? response.status : void 0);
    });
    headers.normalize();
    return data;
  }
  function isCancel(value2) {
    return !!(value2 && value2.__CANCEL__);
  }
  function CanceledError(message, config2, request) {
    AxiosError$2.call(this, message == null ? "canceled" : message, AxiosError$2.ERR_CANCELED, config2, request);
    this.name = "CanceledError";
  }
  utils$3.inherits(CanceledError, AxiosError$2, {
    __CANCEL__: true
  });
  function settle$3(resolve, reject, response) {
    const validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) {
      resolve(response);
    } else {
      reject(new AxiosError$2(
        "Request failed with status code " + response.status,
        [AxiosError$2.ERR_BAD_REQUEST, AxiosError$2.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
        response.config,
        response.request,
        response
      ));
    }
  }
  const cookies = platform$2.isStandardBrowserEnv ? (
    // Standard browser envs support document.cookie
    function standardBrowserEnv() {
      return {
        write: function write(name, value2, expires, path, domain, secure) {
          const cookie = [];
          cookie.push(name + "=" + encodeURIComponent(value2));
          if (utils$3.isNumber(expires)) {
            cookie.push("expires=" + new Date(expires).toGMTString());
          }
          if (utils$3.isString(path)) {
            cookie.push("path=" + path);
          }
          if (utils$3.isString(domain)) {
            cookie.push("domain=" + domain);
          }
          if (secure === true) {
            cookie.push("secure");
          }
          document.cookie = cookie.join("; ");
        },
        read: function read(name) {
          const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
          return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
          this.write(name, "", Date.now() - 864e5);
        }
      };
    }()
  ) : (
    // Non standard browser env (web workers, react-native) lack needed support.
    function nonStandardBrowserEnv() {
      return {
        write: function write() {
        },
        read: function read() {
          return null;
        },
        remove: function remove() {
        }
      };
    }()
  );
  function isAbsoluteURL$3(url2) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url2);
  }
  function combineURLs$3(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
  }
  function buildFullPath$3(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL$3(requestedURL)) {
      return combineURLs$3(baseURL, requestedURL);
    }
    return requestedURL;
  }
  const isURLSameOrigin = platform$2.isStandardBrowserEnv ? (
    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
    function standardBrowserEnv() {
      const msie = /(msie|trident)/i.test(navigator.userAgent);
      const urlParsingNode = document.createElement("a");
      let originURL;
      function resolveURL(url2) {
        let href = url2;
        if (msie) {
          urlParsingNode.setAttribute("href", href);
          href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
      }
      originURL = resolveURL(window.location.href);
      return function isURLSameOrigin2(requestURL) {
        const parsed = utils$3.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
      };
    }()
  ) : (
    // Non standard browser envs (web workers, react-native) lack needed support.
    function nonStandardBrowserEnv() {
      return function isURLSameOrigin2() {
        return true;
      };
    }()
  );
  function parseProtocol(url2) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url2);
    return match && match[1] || "";
  }
  function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== void 0 ? min : 1e3;
    return function push(chunkLength) {
      const now2 = Date.now();
      const startedAt = timestamps[tail];
      if (!firstSampleTS) {
        firstSampleTS = now2;
      }
      bytes[head] = chunkLength;
      timestamps[head] = now2;
      let i2 = tail;
      let bytesCount = 0;
      while (i2 !== head) {
        bytesCount += bytes[i2++];
        i2 = i2 % samplesCount;
      }
      head = (head + 1) % samplesCount;
      if (head === tail) {
        tail = (tail + 1) % samplesCount;
      }
      if (now2 - firstSampleTS < min) {
        return;
      }
      const passed = startedAt && now2 - startedAt;
      return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
    };
  }
  function progressEventReducer(listener, isDownloadStream) {
    let bytesNotified = 0;
    const _speedometer = speedometer(50, 250);
    return (e) => {
      const loaded = e.loaded;
      const total = e.lengthComputable ? e.total : void 0;
      const progressBytes = loaded - bytesNotified;
      const rate = _speedometer(progressBytes);
      const inRange = loaded <= total;
      bytesNotified = loaded;
      const data = {
        loaded,
        total,
        progress: total ? loaded / total : void 0,
        bytes: progressBytes,
        rate: rate ? rate : void 0,
        estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
        event: e
      };
      data[isDownloadStream ? "download" : "upload"] = true;
      listener(data);
    };
  }
  const isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
  const xhrAdapter = isXHRAdapterSupported && function(config2) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      let requestData = config2.data;
      const requestHeaders = AxiosHeaders$1.from(config2.headers).normalize();
      const responseType = config2.responseType;
      let onCanceled;
      function done() {
        if (config2.cancelToken) {
          config2.cancelToken.unsubscribe(onCanceled);
        }
        if (config2.signal) {
          config2.signal.removeEventListener("abort", onCanceled);
        }
      }
      if (utils$3.isFormData(requestData)) {
        if (platform$2.isStandardBrowserEnv || platform$2.isStandardBrowserWebWorkerEnv) {
          requestHeaders.setContentType(false);
        } else {
          requestHeaders.setContentType("multipart/form-data;", false);
        }
      }
      let request = new XMLHttpRequest();
      if (config2.auth) {
        const username = config2.auth.username || "";
        const password = config2.auth.password ? unescape(encodeURIComponent(config2.auth.password)) : "";
        requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
      }
      const fullPath = buildFullPath$3(config2.baseURL, config2.url);
      request.open(config2.method.toUpperCase(), buildURL$3(fullPath, config2.params, config2.paramsSerializer), true);
      request.timeout = config2.timeout;
      function onloadend() {
        if (!request) {
          return;
        }
        const responseHeaders = AxiosHeaders$1.from(
          "getAllResponseHeaders" in request && request.getAllResponseHeaders()
        );
        const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
        const response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config: config2,
          request
        };
        settle$3(function _resolve(value2) {
          resolve(value2);
          done();
        }, function _reject(err) {
          reject(err);
          done();
        }, response);
        request = null;
      }
      if ("onloadend" in request) {
        request.onloadend = onloadend;
      } else {
        request.onreadystatechange = function handleLoad() {
          if (!request || request.readyState !== 4) {
            return;
          }
          if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
            return;
          }
          setTimeout(onloadend);
        };
      }
      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }
        reject(new AxiosError$2("Request aborted", AxiosError$2.ECONNABORTED, config2, request));
        request = null;
      };
      request.onerror = function handleError() {
        reject(new AxiosError$2("Network Error", AxiosError$2.ERR_NETWORK, config2, request));
        request = null;
      };
      request.ontimeout = function handleTimeout() {
        let timeoutErrorMessage = config2.timeout ? "timeout of " + config2.timeout + "ms exceeded" : "timeout exceeded";
        const transitional = config2.transitional || transitionalDefaults;
        if (config2.timeoutErrorMessage) {
          timeoutErrorMessage = config2.timeoutErrorMessage;
        }
        reject(new AxiosError$2(
          timeoutErrorMessage,
          transitional.clarifyTimeoutError ? AxiosError$2.ETIMEDOUT : AxiosError$2.ECONNABORTED,
          config2,
          request
        ));
        request = null;
      };
      if (platform$2.isStandardBrowserEnv) {
        const xsrfValue = (config2.withCredentials || isURLSameOrigin(fullPath)) && config2.xsrfCookieName && cookies.read(config2.xsrfCookieName);
        if (xsrfValue) {
          requestHeaders.set(config2.xsrfHeaderName, xsrfValue);
        }
      }
      requestData === void 0 && requestHeaders.setContentType(null);
      if ("setRequestHeader" in request) {
        utils$3.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
          request.setRequestHeader(key, val);
        });
      }
      if (!utils$3.isUndefined(config2.withCredentials)) {
        request.withCredentials = !!config2.withCredentials;
      }
      if (responseType && responseType !== "json") {
        request.responseType = config2.responseType;
      }
      if (typeof config2.onDownloadProgress === "function") {
        request.addEventListener("progress", progressEventReducer(config2.onDownloadProgress, true));
      }
      if (typeof config2.onUploadProgress === "function" && request.upload) {
        request.upload.addEventListener("progress", progressEventReducer(config2.onUploadProgress));
      }
      if (config2.cancelToken || config2.signal) {
        onCanceled = (cancel) => {
          if (!request) {
            return;
          }
          reject(!cancel || cancel.type ? new CanceledError(null, config2, request) : cancel);
          request.abort();
          request = null;
        };
        config2.cancelToken && config2.cancelToken.subscribe(onCanceled);
        if (config2.signal) {
          config2.signal.aborted ? onCanceled() : config2.signal.addEventListener("abort", onCanceled);
        }
      }
      const protocol = parseProtocol(fullPath);
      if (protocol && platform$2.protocols.indexOf(protocol) === -1) {
        reject(new AxiosError$2("Unsupported protocol " + protocol + ":", AxiosError$2.ERR_BAD_REQUEST, config2));
        return;
      }
      request.send(requestData || null);
    });
  };
  const knownAdapters = {
    http: httpAdapter,
    xhr: xhrAdapter
  };
  utils$3.forEach(knownAdapters, (fn, value2) => {
    if (fn) {
      try {
        Object.defineProperty(fn, "name", { value: value2 });
      } catch (e) {
      }
      Object.defineProperty(fn, "adapterName", { value: value2 });
    }
  });
  const adapters = {
    getAdapter: (adapters2) => {
      adapters2 = utils$3.isArray(adapters2) ? adapters2 : [adapters2];
      const { length } = adapters2;
      let nameOrAdapter;
      let adapter2;
      for (let i2 = 0; i2 < length; i2++) {
        nameOrAdapter = adapters2[i2];
        if (adapter2 = utils$3.isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter) {
          break;
        }
      }
      if (!adapter2) {
        if (adapter2 === false) {
          throw new AxiosError$2(
            `Adapter ${nameOrAdapter} is not supported by the environment`,
            "ERR_NOT_SUPPORT"
          );
        }
        throw new Error(
          utils$3.hasOwnProp(knownAdapters, nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Unknown adapter '${nameOrAdapter}'`
        );
      }
      if (!utils$3.isFunction(adapter2)) {
        throw new TypeError("adapter is not a function");
      }
      return adapter2;
    },
    adapters: knownAdapters
  };
  function throwIfCancellationRequested(config2) {
    if (config2.cancelToken) {
      config2.cancelToken.throwIfRequested();
    }
    if (config2.signal && config2.signal.aborted) {
      throw new CanceledError(null, config2);
    }
  }
  function dispatchRequest$1(config2) {
    throwIfCancellationRequested(config2);
    config2.headers = AxiosHeaders$1.from(config2.headers);
    config2.data = transformData.call(
      config2,
      config2.transformRequest
    );
    if (["post", "put", "patch"].indexOf(config2.method) !== -1) {
      config2.headers.setContentType("application/x-www-form-urlencoded", false);
    }
    const adapter2 = adapters.getAdapter(config2.adapter || defaults$2.adapter);
    return adapter2(config2).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config2);
      response.data = transformData.call(
        config2,
        config2.transformResponse,
        response
      );
      response.headers = AxiosHeaders$1.from(response.headers);
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config2);
        if (reason && reason.response) {
          reason.response.data = transformData.call(
            config2,
            config2.transformResponse,
            reason.response
          );
          reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
        }
      }
      return Promise.reject(reason);
    });
  }
  const headersToObject = (thing) => thing instanceof AxiosHeaders$1 ? thing.toJSON() : thing;
  function mergeConfig$1(config1, config2) {
    config2 = config2 || {};
    const config3 = {};
    function getMergedValue(target, source, caseless) {
      if (utils$3.isPlainObject(target) && utils$3.isPlainObject(source)) {
        return utils$3.merge.call({ caseless }, target, source);
      } else if (utils$3.isPlainObject(source)) {
        return utils$3.merge({}, source);
      } else if (utils$3.isArray(source)) {
        return source.slice();
      }
      return source;
    }
    function mergeDeepProperties(a, b, caseless) {
      if (!utils$3.isUndefined(b)) {
        return getMergedValue(a, b, caseless);
      } else if (!utils$3.isUndefined(a)) {
        return getMergedValue(void 0, a, caseless);
      }
    }
    function valueFromConfig2(a, b) {
      if (!utils$3.isUndefined(b)) {
        return getMergedValue(void 0, b);
      }
    }
    function defaultToConfig2(a, b) {
      if (!utils$3.isUndefined(b)) {
        return getMergedValue(void 0, b);
      } else if (!utils$3.isUndefined(a)) {
        return getMergedValue(void 0, a);
      }
    }
    function mergeDirectKeys(a, b, prop) {
      if (prop in config2) {
        return getMergedValue(a, b);
      } else if (prop in config1) {
        return getMergedValue(void 0, a);
      }
    }
    const mergeMap = {
      url: valueFromConfig2,
      method: valueFromConfig2,
      data: valueFromConfig2,
      baseURL: defaultToConfig2,
      transformRequest: defaultToConfig2,
      transformResponse: defaultToConfig2,
      paramsSerializer: defaultToConfig2,
      timeout: defaultToConfig2,
      timeoutMessage: defaultToConfig2,
      withCredentials: defaultToConfig2,
      adapter: defaultToConfig2,
      responseType: defaultToConfig2,
      xsrfCookieName: defaultToConfig2,
      xsrfHeaderName: defaultToConfig2,
      onUploadProgress: defaultToConfig2,
      onDownloadProgress: defaultToConfig2,
      decompress: defaultToConfig2,
      maxContentLength: defaultToConfig2,
      maxBodyLength: defaultToConfig2,
      beforeRedirect: defaultToConfig2,
      transport: defaultToConfig2,
      httpAgent: defaultToConfig2,
      httpsAgent: defaultToConfig2,
      cancelToken: defaultToConfig2,
      socketPath: defaultToConfig2,
      responseEncoding: defaultToConfig2,
      validateStatus: mergeDirectKeys,
      headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
    };
    utils$3.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
      const merge2 = mergeMap[prop] || mergeDeepProperties;
      const configValue = merge2(config1[prop], config2[prop], prop);
      utils$3.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config3[prop] = configValue);
    });
    return config3;
  }
  const VERSION = "1.4.0";
  const validators$2 = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach((type2, i2) => {
    validators$2[type2] = function validator2(thing) {
      return typeof thing === type2 || "a" + (i2 < 1 ? "n " : " ") + type2;
    };
  });
  const deprecatedWarnings = {};
  validators$2.transitional = function transitional(validator2, version2, message) {
    function formatMessage(opt, desc) {
      return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    return (value2, opt, opts) => {
      if (validator2 === false) {
        throw new AxiosError$2(
          formatMessage(opt, " has been removed" + (version2 ? " in " + version2 : "")),
          AxiosError$2.ERR_DEPRECATED
        );
      }
      if (version2 && !deprecatedWarnings[opt]) {
        deprecatedWarnings[opt] = true;
        formatAppLog(
          "warn",
          "at node_modules/axios/lib/helpers/validator.js:43",
          formatMessage(
            opt,
            " has been deprecated since v" + version2 + " and will be removed in the near future"
          )
        );
      }
      return validator2 ? validator2(value2, opt, opts) : true;
    };
  };
  function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") {
      throw new AxiosError$2("options must be an object", AxiosError$2.ERR_BAD_OPTION_VALUE);
    }
    const keys = Object.keys(options);
    let i2 = keys.length;
    while (i2-- > 0) {
      const opt = keys[i2];
      const validator2 = schema[opt];
      if (validator2) {
        const value2 = options[opt];
        const result = value2 === void 0 || validator2(value2, opt, options);
        if (result !== true) {
          throw new AxiosError$2("option " + opt + " must be " + result, AxiosError$2.ERR_BAD_OPTION_VALUE);
        }
        continue;
      }
      if (allowUnknown !== true) {
        throw new AxiosError$2("Unknown option " + opt, AxiosError$2.ERR_BAD_OPTION);
      }
    }
  }
  const validator = {
    assertOptions,
    validators: validators$2
  };
  const validators$1 = validator.validators;
  class Axios {
    constructor(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager$2(),
        response: new InterceptorManager$2()
      };
    }
    /**
     * Dispatch a request
     *
     * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
     * @param {?Object} config
     *
     * @returns {Promise} The Promise to be fulfilled
     */
    request(configOrUrl, config2) {
      if (typeof configOrUrl === "string") {
        config2 = config2 || {};
        config2.url = configOrUrl;
      } else {
        config2 = configOrUrl || {};
      }
      config2 = mergeConfig$1(this.defaults, config2);
      const { transitional, paramsSerializer, headers } = config2;
      if (transitional !== void 0) {
        validator.assertOptions(transitional, {
          silentJSONParsing: validators$1.transitional(validators$1.boolean),
          forcedJSONParsing: validators$1.transitional(validators$1.boolean),
          clarifyTimeoutError: validators$1.transitional(validators$1.boolean)
        }, false);
      }
      if (paramsSerializer != null) {
        if (utils$3.isFunction(paramsSerializer)) {
          config2.paramsSerializer = {
            serialize: paramsSerializer
          };
        } else {
          validator.assertOptions(paramsSerializer, {
            encode: validators$1.function,
            serialize: validators$1.function
          }, true);
        }
      }
      config2.method = (config2.method || this.defaults.method || "get").toLowerCase();
      let contextHeaders;
      contextHeaders = headers && utils$3.merge(
        headers.common,
        headers[config2.method]
      );
      contextHeaders && utils$3.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (method2) => {
          delete headers[method2];
        }
      );
      config2.headers = AxiosHeaders$1.concat(contextHeaders, headers);
      const requestInterceptorChain = [];
      let synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config2) === false) {
          return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      const responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });
      let promise2;
      let i2 = 0;
      let len;
      if (!synchronousRequestInterceptors) {
        const chain = [dispatchRequest$1.bind(this), void 0];
        chain.unshift.apply(chain, requestInterceptorChain);
        chain.push.apply(chain, responseInterceptorChain);
        len = chain.length;
        promise2 = Promise.resolve(config2);
        while (i2 < len) {
          promise2 = promise2.then(chain[i2++], chain[i2++]);
        }
        return promise2;
      }
      len = requestInterceptorChain.length;
      let newConfig = config2;
      i2 = 0;
      while (i2 < len) {
        const onFulfilled = requestInterceptorChain[i2++];
        const onRejected = requestInterceptorChain[i2++];
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error2) {
          onRejected.call(this, error2);
          break;
        }
      }
      try {
        promise2 = dispatchRequest$1.call(this, newConfig);
      } catch (error2) {
        return Promise.reject(error2);
      }
      i2 = 0;
      len = responseInterceptorChain.length;
      while (i2 < len) {
        promise2 = promise2.then(responseInterceptorChain[i2++], responseInterceptorChain[i2++]);
      }
      return promise2;
    }
    getUri(config2) {
      config2 = mergeConfig$1(this.defaults, config2);
      const fullPath = buildFullPath$3(config2.baseURL, config2.url);
      return buildURL$3(fullPath, config2.params, config2.paramsSerializer);
    }
  }
  utils$3.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method2) {
    Axios.prototype[method2] = function(url2, config2) {
      return this.request(mergeConfig$1(config2 || {}, {
        method: method2,
        url: url2,
        data: (config2 || {}).data
      }));
    };
  });
  utils$3.forEach(["post", "put", "patch"], function forEachMethodWithData(method2) {
    function generateHTTPMethod(isForm) {
      return function httpMethod(url2, data, config2) {
        return this.request(mergeConfig$1(config2 || {}, {
          method: method2,
          headers: isForm ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: url2,
          data
        }));
      };
    }
    Axios.prototype[method2] = generateHTTPMethod();
    Axios.prototype[method2 + "Form"] = generateHTTPMethod(true);
  });
  const Axios$1 = Axios;
  class CancelToken {
    constructor(executor) {
      if (typeof executor !== "function") {
        throw new TypeError("executor must be a function.");
      }
      let resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      const token = this;
      this.promise.then((cancel) => {
        if (!token._listeners)
          return;
        let i2 = token._listeners.length;
        while (i2-- > 0) {
          token._listeners[i2](cancel);
        }
        token._listeners = null;
      });
      this.promise.then = (onfulfilled) => {
        let _resolve;
        const promise2 = new Promise((resolve) => {
          token.subscribe(resolve);
          _resolve = resolve;
        }).then(onfulfilled);
        promise2.cancel = function reject() {
          token.unsubscribe(_resolve);
        };
        return promise2;
      };
      executor(function cancel(message, config2, request) {
        if (token.reason) {
          return;
        }
        token.reason = new CanceledError(message, config2, request);
        resolvePromise(token.reason);
      });
    }
    /**
     * Throws a `CanceledError` if cancellation has been requested.
     */
    throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    }
    /**
     * Subscribe to the cancel signal
     */
    subscribe(listener) {
      if (this.reason) {
        listener(this.reason);
        return;
      }
      if (this._listeners) {
        this._listeners.push(listener);
      } else {
        this._listeners = [listener];
      }
    }
    /**
     * Unsubscribe from the cancel signal
     */
    unsubscribe(listener) {
      if (!this._listeners) {
        return;
      }
      const index2 = this._listeners.indexOf(listener);
      if (index2 !== -1) {
        this._listeners.splice(index2, 1);
      }
    }
    /**
     * Returns an object that contains a new `CancelToken` and a function that, when called,
     * cancels the `CancelToken`.
     */
    static source() {
      let cancel;
      const token = new CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token,
        cancel
      };
    }
  }
  const CancelToken$1 = CancelToken;
  function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  }
  function isAxiosError(payload) {
    return utils$3.isObject(payload) && payload.isAxiosError === true;
  }
  const HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
  };
  Object.entries(HttpStatusCode).forEach(([key, value2]) => {
    HttpStatusCode[value2] = key;
  });
  const HttpStatusCode$1 = HttpStatusCode;
  function createInstance(defaultConfig) {
    const context = new Axios$1(defaultConfig);
    const instance = bind$3(Axios$1.prototype.request, context);
    utils$3.extend(instance, Axios$1.prototype, context, { allOwnKeys: true });
    utils$3.extend(instance, context, null, { allOwnKeys: true });
    instance.create = function create(instanceConfig) {
      return createInstance(mergeConfig$1(defaultConfig, instanceConfig));
    };
    return instance;
  }
  const axios = createInstance(defaults$2);
  axios.Axios = Axios$1;
  axios.CanceledError = CanceledError;
  axios.CancelToken = CancelToken$1;
  axios.isCancel = isCancel;
  axios.VERSION = VERSION;
  axios.toFormData = toFormData;
  axios.AxiosError = AxiosError$2;
  axios.Cancel = axios.CanceledError;
  axios.all = function all(promises) {
    return Promise.all(promises);
  };
  axios.spread = spread;
  axios.isAxiosError = isAxiosError;
  axios.mergeConfig = mergeConfig$1;
  axios.AxiosHeaders = AxiosHeaders$1;
  axios.formToJSON = (thing) => formDataToJSON(utils$3.isHTMLForm(thing) ? new FormData(thing) : thing);
  axios.HttpStatusCode = HttpStatusCode$1;
  axios.default = axios;
  const axios$1 = axios;
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  var axiosAdapterUniappExports = {};
  var axiosAdapterUniapp = {
    get exports() {
      return axiosAdapterUniappExports;
    },
    set exports(v) {
      axiosAdapterUniappExports = v;
    }
  };
  var isMultiUpload$1 = function isMultiUpload2(config2) {
    return Array.isArray(config2.files) && config2.files.length > 0;
  };
  const isMultiUpload = isMultiUpload$1;
  var isUploadFile$2 = function isUploadFile2(config2) {
    if (config2.method === "post") {
      if (config2.filePath && config2.name)
        return true;
      if (isMultiUpload(config2))
        return true;
    }
    return false;
  };
  var bind$2 = function bind2(fn, thisArg) {
    return function wrap() {
      var args = new Array(arguments.length);
      for (var i2 = 0; i2 < args.length; i2++) {
        args[i2] = arguments[i2];
      }
      return fn.apply(thisArg, args);
    };
  };
  var bind$1 = bind$2;
  var toString$1 = Object.prototype.toString;
  var kindOf = function(cache) {
    return function(thing) {
      var str = toString$1.call(thing);
      return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    };
  }(/* @__PURE__ */ Object.create(null));
  function kindOfTest(type2) {
    type2 = type2.toLowerCase();
    return function isKindOf(thing) {
      return kindOf(thing) === type2;
    };
  }
  function isArray$1(val) {
    return Array.isArray(val);
  }
  function isUndefined$1(val) {
    return typeof val === "undefined";
  }
  function isBuffer(val) {
    return val !== null && !isUndefined$1(val) && val.constructor !== null && !isUndefined$1(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
  }
  var isArrayBuffer = kindOfTest("ArrayBuffer");
  function isArrayBufferView(val) {
    var result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && isArrayBuffer(val.buffer);
    }
    return result;
  }
  function isString(val) {
    return typeof val === "string";
  }
  function isNumber(val) {
    return typeof val === "number";
  }
  function isObject$1(val) {
    return val !== null && typeof val === "object";
  }
  function isPlainObject$1(val) {
    if (kindOf(val) !== "object") {
      return false;
    }
    var prototype2 = Object.getPrototypeOf(val);
    return prototype2 === null || prototype2 === Object.prototype;
  }
  var isDate$1 = kindOfTest("Date");
  var isFile = kindOfTest("File");
  var isBlob = kindOfTest("Blob");
  var isFileList = kindOfTest("FileList");
  function isFunction(val) {
    return toString$1.call(val) === "[object Function]";
  }
  function isStream(val) {
    return isObject$1(val) && isFunction(val.pipe);
  }
  function isFormData(thing) {
    var pattern2 = "[object FormData]";
    return thing && (typeof FormData === "function" && thing instanceof FormData || toString$1.call(thing) === pattern2 || isFunction(thing.toString) && thing.toString() === pattern2);
  }
  var isURLSearchParams$1 = kindOfTest("URLSearchParams");
  function trim$1(str) {
    return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
  }
  function isStandardBrowserEnv() {
    if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
      return false;
    }
    return typeof window !== "undefined" && typeof document !== "undefined";
  }
  function forEach$1(obj, fn) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray$1(obj)) {
      for (var i2 = 0, l = obj.length; i2 < l; i2++) {
        fn.call(null, obj[i2], i2, obj);
      }
    } else {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }
  function merge() {
    var result = {};
    function assignValue(val, key) {
      if (isPlainObject$1(result[key]) && isPlainObject$1(val)) {
        result[key] = merge(result[key], val);
      } else if (isPlainObject$1(val)) {
        result[key] = merge({}, val);
      } else if (isArray$1(val)) {
        result[key] = val.slice();
      } else {
        result[key] = val;
      }
    }
    for (var i2 = 0, l = arguments.length; i2 < l; i2++) {
      forEach$1(arguments[i2], assignValue);
    }
    return result;
  }
  function extend(a, b, thisArg) {
    forEach$1(b, function assignValue(val, key) {
      if (thisArg && typeof val === "function") {
        a[key] = bind$1(val, thisArg);
      } else {
        a[key] = val;
      }
    });
    return a;
  }
  function stripBOM(content) {
    if (content.charCodeAt(0) === 65279) {
      content = content.slice(1);
    }
    return content;
  }
  function inherits(constructor, superConstructor, props2, descriptors2) {
    constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
    constructor.prototype.constructor = constructor;
    props2 && Object.assign(constructor.prototype, props2);
  }
  function toFlatObject(sourceObj, destObj, filter) {
    var props2;
    var i2;
    var prop;
    var merged = {};
    destObj = destObj || {};
    do {
      props2 = Object.getOwnPropertyNames(sourceObj);
      i2 = props2.length;
      while (i2-- > 0) {
        prop = props2[i2];
        if (!merged[prop]) {
          destObj[prop] = sourceObj[prop];
          merged[prop] = true;
        }
      }
      sourceObj = Object.getPrototypeOf(sourceObj);
    } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
  }
  function endsWith(str, searchString, position) {
    str = String(str);
    if (position === void 0 || position > str.length) {
      position = str.length;
    }
    position -= searchString.length;
    var lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  }
  function toArray(thing) {
    if (!thing)
      return null;
    var i2 = thing.length;
    if (isUndefined$1(i2))
      return null;
    var arr = new Array(i2);
    while (i2-- > 0) {
      arr[i2] = thing[i2];
    }
    return arr;
  }
  var isTypedArray = function(TypedArray) {
    return function(thing) {
      return TypedArray && thing instanceof TypedArray;
    };
  }(typeof Uint8Array !== "undefined" && Object.getPrototypeOf(Uint8Array));
  var utils$2 = {
    isArray: isArray$1,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isObject: isObject$1,
    isPlainObject: isPlainObject$1,
    isUndefined: isUndefined$1,
    isDate: isDate$1,
    isFile,
    isBlob,
    isFunction,
    isStream,
    isURLSearchParams: isURLSearchParams$1,
    isStandardBrowserEnv,
    forEach: forEach$1,
    merge,
    extend,
    trim: trim$1,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    isTypedArray,
    isFileList
  };
  var utils$1 = utils$2;
  function AxiosError$1(message, code2, config2, request, response) {
    Error.call(this);
    this.message = message;
    this.name = "AxiosError";
    code2 && (this.code = code2);
    config2 && (this.config = config2);
    request && (this.request = request);
    response && (this.response = response);
  }
  utils$1.inherits(AxiosError$1, Error, {
    toJSON: function toJSON() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: this.config,
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null
      };
    }
  });
  var prototype = AxiosError$1.prototype;
  var descriptors = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED"
    // eslint-disable-next-line func-names
  ].forEach(function(code2) {
    descriptors[code2] = { value: code2 };
  });
  Object.defineProperties(AxiosError$1, descriptors);
  Object.defineProperty(prototype, "isAxiosError", { value: true });
  AxiosError$1.from = function(error2, code2, config2, request, response, customProps) {
    var axiosError = Object.create(prototype);
    utils$1.toFlatObject(error2, axiosError, function filter(obj) {
      return obj !== Error.prototype;
    });
    AxiosError$1.call(axiosError, error2.message, code2, config2, request, response);
    axiosError.name = error2.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
  };
  var AxiosError_1 = AxiosError$1;
  var AxiosError = AxiosError_1;
  var settle$2 = function settle2(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) {
      resolve(response);
    } else {
      reject(new AxiosError(
        "Request failed with status code " + response.status,
        [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
        response.config,
        response.request,
        response
      ));
    }
  };
  var utils = utils$2;
  function encode$1(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  var buildURL$2 = function buildURL2(url2, params, paramsSerializer) {
    if (!params) {
      return url2;
    }
    var serializedParams;
    if (paramsSerializer) {
      serializedParams = paramsSerializer(params);
    } else if (utils.isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      var parts = [];
      utils.forEach(params, function serialize(val, key) {
        if (val === null || typeof val === "undefined") {
          return;
        }
        if (utils.isArray(val)) {
          key = key + "[]";
        } else {
          val = [val];
        }
        utils.forEach(val, function parseValue(v) {
          if (utils.isDate(v)) {
            v = v.toISOString();
          } else if (utils.isObject(v)) {
            v = JSON.stringify(v);
          }
          parts.push(encode$1(key) + "=" + encode$1(v));
        });
      });
      serializedParams = parts.join("&");
    }
    if (serializedParams) {
      var hashmarkIndex = url2.indexOf("#");
      if (hashmarkIndex !== -1) {
        url2 = url2.slice(0, hashmarkIndex);
      }
      url2 += (url2.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url2;
  };
  var isAbsoluteURL$2 = function isAbsoluteURL2(url2) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url2);
  };
  var combineURLs$2 = function combineURLs2(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
  };
  var isAbsoluteURL$1 = isAbsoluteURL$2;
  var combineURLs$1 = combineURLs$2;
  var buildFullPath$2 = function buildFullPath2(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL$1(requestedURL)) {
      return combineURLs$1(baseURL, requestedURL);
    }
    return requestedURL;
  };
  var settle$1 = settle$2;
  var buildURL$1 = buildURL$2;
  var buildFullPath$1 = buildFullPath$2;
  const isUploadFile$1 = isUploadFile$2;
  var format$2 = function format2(config2, resolve, reject) {
    const fullPath = buildFullPath$1(config2.baseURL, config2.url);
    const requestHeaders = config2.headers;
    const uniConfig = {
      ...config2,
      url: buildURL$1(fullPath, config2.params, config2.paramsSerializer),
      // uniapp 用的是 header
      header: requestHeaders
    };
    if (isUploadFile$1(config2)) {
      delete requestHeaders["Content-Type"];
      if (config2.formData) {
        uniConfig.formData = config2.formData;
      } else {
        if (typeof config2.data === "string") {
          uniConfig.formData = JSON.parse(config2.data);
        } else {
          uniConfig.formData = config2.data;
        }
      }
    } else if (config2.method === "get") {
      uniConfig.data = config2.data ? config2.data : config2.params;
    } else {
      uniConfig.data = config2.data;
    }
    if (config2.auth) {
      var username = config2.auth.username || "";
      var password = unescape(encodeURIComponent(config2.auth.password)) || "";
      requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
    }
    uniConfig.complete = function(response) {
      var result = {
        data: response.data,
        status: response.statusCode,
        statusText: response.errMsg,
        header: response.header,
        config: config2
        // request: request
      };
      settle$1(resolve, reject, result);
    };
    return uniConfig;
  };
  const isUploadFile = isUploadFile$2;
  const format$1 = format$2;
  function uniappAdapter(config2 = {}) {
    return new Promise(function dispatchUniApp(resolve, reject) {
      const uniConfig = format$1(config2, resolve, reject);
      let requestTask = null;
      if (config2.cancelToken) {
        config2.cancelToken.promise.then(function onCanceled(cancel) {
          if (!requestTask) {
            return;
          }
          requestTask.abort();
          reject(cancel);
          requestTask = null;
        });
      }
      if (isUploadFile(config2)) {
        requestTask = uni.uploadFile(uniConfig);
      } else {
        requestTask = uni.request(uniConfig);
      }
    });
  }
  axiosAdapterUniapp.exports = uniappAdapter;
  axiosAdapterUniappExports.default = uniappAdapter;
  const service = axios$1.create(
    {
      adapter: axiosAdapterUniappExports,
      baseURL: "http://muteki.top:9090"
    }
  );
  service.interceptors.request.use(
    async (config2) => {
      const token = uni.getStorageSync("token");
      if (token) {
        config2.headers["token"] = token;
      }
      const community = uni.getStorageSync("community");
      if (community) {
        config2.headers["community_id"] = community.id;
      }
      return config2;
    },
    function(error2) {
      return Promise.reject(error2);
    }
  );
  function getCommunityList(owner_id, type2 = 0) {
    return service.get("/app/community?type=" + type2 + "&owner_id=" + owner_id);
  }
  function getActivity() {
    return service.get("/app/getCommunityList");
  }
  function getActivityById(id) {
    return service.get("/app/getCommunityList?info_id=" + id);
  }
  const _imports_0$7 = "/static/img/index/show.png";
  const _imports_1$5 = "/static/img/index/home.png";
  const _imports_2$3 = "/static/img/index/invite.png";
  const _imports_3$3 = "/static/img/index/open.png";
  const _imports_4$1 = "/static/img/index/pay.png";
  const _imports_5$1 = "/static/img/index/pic.png";
  const _imports_6 = "/static/img/f-card/park.png";
  const _imports_7 = "/static/img/f-card/pay.png";
  const _imports_2$2 = "/static/img/f-card/fix.png";
  const _imports_3$2 = "/static/img/f-card/advice.png";
  const _imports_1$4 = "/static/img/f-card/question.png";
  const _imports_0$6 = "/static/img/f-card/notice.png";
  const _imports_4 = "/static/img/f-card/connect.png";
  const _imports_13 = "/static/img/f-card/more.png";
  const _sfc_main$V = {
    data() {
      return {
        swiper_list: [
          "https://pic1.imgdb.cn/item/646f4f00f024cca173bfce69.png",
          "https://pic1.imgdb.cn/item/646f4f00f024cca173bfce48.png",
          "https://pic1.imgdb.cn/item/646f4f00f024cca173bfce26.png",
          "https://pic1.imgdb.cn/item/646f4f00f024cca173bfce13.png"
        ],
        swiper_list_local: [
          "http://192.168.31.6:5173/static/img/swiper/u7.png",
          "http://192.168.31.6:5173/static/img/swiper/u8.png",
          "http://192.168.31.6:5173/static/img/swiper/u9.png",
          "http://192.168.31.6:5173/static/img/swiper/u10.png"
        ],
        show: false,
        community_name: "请选择小区",
        columns: [
          [{ id: 0, name: "智慧小区" }, { id: 1, name: "翻斗花园" }, { id: 2, name: "广益佳苑" }]
        ],
        notice: "智慧物业体验版上线了,快来尝鲜呀~~",
        noticeList: [
          "智慧物业体验版上线了,快来尝鲜呀~~",
          "2023年09月28日,局部有大暴雨,风力10....."
        ],
        activityList: [],
        statusBarHeight: 0,
        owner_id: ""
      };
    },
    methods: {
      confirm(e) {
        this.community_name = e.value[0].name;
        uni.setStorage({
          key: "community",
          data: e.value[0]
        });
        getActivity().then((res) => {
          this.activityList = res.data.data;
        }).catch((err) => {
          formatAppLog("log", "at pages/tarbar/index/index.vue:154", "活动请求失败" + err);
        });
        this.show = false;
      },
      cancel() {
        this.show = false;
      },
      change(index2) {
        let idx = index2.current % 2;
        this.notice = this.noticeList[idx];
      },
      //界面跳转方法
      //我的房屋
      toHome() {
        uni.navigateTo({
          url: "/pages/home/home"
        });
      },
      //邀请访客
      toInvitor() {
        uni.navigateTo({
          url: "/pages/invitor/invitor"
        });
      },
      //手机开门
      toOpen() {
        uni.switchTab({
          url: "/pages/tarbar/open/open"
        });
      },
      //手机缴费
      toPay() {
        uni.navigateTo({
          url: "/pages/pay/pay"
        });
      },
      //我的车位
      toPark() {
        uni.navigateTo({
          url: "/pages/park/park"
        });
      },
      //在线报修
      toFix() {
        uni.navigateTo({
          url: "/pages/fix/fix"
        });
      },
      //投诉建议
      toAdvice() {
        uni.navigateTo({
          url: "/pages/advice/advice"
        });
      },
      //社区公告
      toNotice() {
        uni.switchTab({
          url: "/pages/tarbar/message/message"
        });
      },
      //联系物业
      toPhones() {
        uni.navigateTo({
          url: "/pages/phones/phones"
        });
      },
      //更多
      toServer() {
        uni.switchTab({
          url: "/pages/tarbar/server/server"
        });
      },
      activity_detail(id) {
        uni.navigateTo({
          url: "/pages/tarbar/index/activity?id=" + id
        });
      },
      noServer() {
        this.$refs.uToast.show({
          message: "该功能尚未开放",
          type: "warning",
          position: "top",
          duration: "500"
        });
      }
    },
    onShow() {
      this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight + "px";
      this.owner_id = uni.getStorageSync("owner").id;
      this.activityList = [];
      this.columns[0] = [];
      getCommunityList(this.owner_id).then((res) => {
        formatAppLog("log", "at pages/tarbar/index/index.vue:250", res);
        this.columns[0] = res.data.data.community_list;
        if (res.data.data.default_community) {
          this.community_name = res.data.data.default_community.name;
          uni.setStorageSync("community", res.data.data.default_community);
        }
        this.community_name = res.data.data.community_list[0].name;
        uni.setStorageSync("community", res.data.data.community_list[0]);
        getActivity().then((res2) => {
          this.activityList = res2.data.data;
        }).catch((err) => {
          formatAppLog("log", "at pages/tarbar/index/index.vue:262", "活动请求失败" + err);
        });
      }).catch((err) => {
        formatAppLog("log", "at pages/tarbar/index/index.vue:266", "小区请求失败" + err);
      });
      getActivity().then((res) => {
        formatAppLog("log", "at pages/tarbar/index/index.vue:270", res);
        this.activityList = res.data.data;
      }).catch((err) => {
        formatAppLog("log", "at pages/tarbar/index/index.vue:273", "活动请求失败" + err);
      });
    },
    mounted() {
    }
  };
  function _sfc_render$U(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_swiper = resolveEasycom(vue.resolveDynamicComponent("u-swiper"), __easycom_0$5);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$6);
    const _component_u_picker = resolveEasycom(vue.resolveDynamicComponent("u-picker"), __easycom_3$1);
    const _component_u_col = resolveEasycom(vue.resolveDynamicComponent("u-col"), __easycom_5$1);
    const _component_u_row = resolveEasycom(vue.resolveDynamicComponent("u-row"), __easycom_6);
    const _component_u_toast = resolveEasycom(vue.resolveDynamicComponent("u-toast"), __easycom_4);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "container",
        style: vue.normalizeStyle({ marginTop: $data.statusBarHeight })
      },
      [
        vue.createVNode(_component_u_swiper, {
          list: $data.swiper_list,
          onChange: $options.change,
          autoplay: true,
          indicator: "",
          indicatorMode: "dot",
          circular: "true",
          height: "400"
        }, null, 8, ["list", "onChange"]),
        vue.createElementVNode("view", {
          class: "community_card",
          onClick: _cache[0] || (_cache[0] = ($event) => $data.show = true)
        }, [
          vue.createTextVNode(
            vue.toDisplayString($data.community_name) + " ",
            1
            /* TEXT */
          ),
          vue.createVNode(_component_u_icon, {
            name: "arrow-right",
            color: "black"
          })
        ]),
        vue.createVNode(_component_u_picker, {
          show: $data.show,
          columns: $data.columns,
          onCancel: $options.cancel,
          onConfirm: $options.confirm,
          keyName: "name"
        }, null, 8, ["show", "columns", "onCancel", "onConfirm"]),
        vue.createElementVNode("view", { class: "notice" }, [
          vue.createElementVNode("image", { src: _imports_0$7 }),
          vue.createElementVNode(
            "text",
            null,
            vue.toDisplayString($data.notice),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { class: "server_list" }, [
          vue.createElementVNode("text", { class: "title" }, "常用服务"),
          vue.createVNode(_component_u_row, { justify: "around" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_u_col, {
                span: "5",
                style: { "background-color": "#fdece4" },
                onClick: _cache[1] || (_cache[1] = ($event) => $options.toHome())
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "contain" }, [
                    vue.createElementVNode("text", null, "我的房屋"),
                    vue.createElementVNode("image", { src: _imports_1$5 })
                  ])
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_u_col, {
                span: "5",
                style: { "background-color": "#ebeafc" },
                onClick: $options.toInvitor
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "contain" }, [
                    vue.createElementVNode("text", null, "访客邀请"),
                    vue.createElementVNode("image", {
                      style: { "width": "80upx" },
                      src: _imports_2$3
                    })
                  ])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["onClick"])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_u_row, {
            justify: "around",
            style: { "margin-top": "20upx" }
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_u_col, {
                span: "5",
                style: { "background-color": "#e9fbe3" },
                onClick: $options.toOpen
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "contain" }, [
                    vue.createElementVNode("text", null, "手机开门"),
                    vue.createElementVNode("image", {
                      style: { "width": "80upx" },
                      src: _imports_3$3
                    })
                  ])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["onClick"]),
              vue.createVNode(_component_u_col, {
                span: "5",
                style: { "background-color": "#e2f4ff" },
                onClick: $options.toPay
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "contain" }, [
                    vue.createElementVNode("text", null, "生活缴费"),
                    vue.createElementVNode("image", {
                      style: { "width": "80upx" },
                      src: _imports_4$1
                    })
                  ])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["onClick"])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        vue.createVNode(_component_u_row, {
          justify: "center",
          style: { "background-color": "#ffffff", "margin-top": "20upx", "margin-bottom": "20upx" }
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_u_col, { span: "10" }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("image", {
                  style: { "height": "200upx" },
                  src: _imports_5$1,
                  mode: ""
                })
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        vue.createElementVNode("view", { class: "function_card" }, [
          vue.createElementVNode("text", {
            class: "title",
            style: { "font-size": "30upx" }
          }, "智慧社区"),
          vue.createVNode(_component_u_row, { justify: "around" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_u_col, {
                span: "2",
                align: "center",
                onClick: $options.toPark
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("image", {
                    src: _imports_6,
                    mode: ""
                  }),
                  vue.createElementVNode("text", null, "我的车位")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["onClick"]),
              vue.createVNode(_component_u_col, {
                span: "2",
                align: "center",
                onClick: $options.noServer
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("image", {
                    src: _imports_7,
                    mode: ""
                  }),
                  vue.createElementVNode("text", null, "停车缴费")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["onClick"]),
              vue.createVNode(_component_u_col, {
                span: "2",
                align: "center",
                onClick: $options.toFix
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("image", {
                    src: _imports_2$2,
                    mode: ""
                  }),
                  vue.createElementVNode("text", null, "在线报修")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["onClick"]),
              vue.createVNode(_component_u_col, {
                span: "2",
                align: "center",
                onClick: $options.noServer
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("image", {
                    src: _imports_3$2,
                    mode: ""
                  }),
                  vue.createElementVNode("text", null, "投诉建议")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["onClick"])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_u_row, { justify: "around" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_u_col, {
                span: "2",
                align: "center",
                onClick: $options.noServer
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("image", {
                    src: _imports_1$4,
                    mode: ""
                  }),
                  vue.createElementVNode("text", null, "问卷调查")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["onClick"]),
              vue.createVNode(_component_u_col, {
                span: "2",
                align: "center",
                onClick: $options.toNotice
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("image", {
                    src: _imports_0$6,
                    mode: ""
                  }),
                  vue.createElementVNode("text", null, "社区公告")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["onClick"]),
              vue.createVNode(_component_u_col, {
                span: "2",
                align: "center",
                onClick: $options.toPhones
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("image", {
                    src: _imports_4,
                    mode: ""
                  }),
                  vue.createElementVNode("text", null, "联系物业")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["onClick"]),
              vue.createVNode(_component_u_col, {
                span: "2",
                align: "center",
                onClick: $options.toServer
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("image", {
                    src: _imports_13,
                    mode: ""
                  }),
                  vue.createElementVNode("text", null, "更多")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["onClick"])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        vue.createElementVNode("view", { class: "activity_title" }, [
          vue.createElementVNode("text", {
            class: "title",
            style: { "font-size": "30upx" }
          }, "社区活动")
        ]),
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.activityList, (item, index2) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "activity_item",
              onClick: ($event) => $options.activity_detail(item.id)
            }, [
              vue.createElementVNode("image", {
                src: item.pictures
              }, null, 8, ["src"]),
              vue.createElementVNode(
                "view",
                null,
                vue.toDisplayString(item.infoName),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                { style: { "font-size": "12upx", "color": "#73caff" } },
                "活动时间: " + vue.toDisplayString(item.startTime) + " - " + vue.toDisplayString(item.endTime),
                1
                /* TEXT */
              )
            ], 8, ["onClick"]);
          }),
          256
          /* UNKEYED_FRAGMENT */
        )),
        vue.createVNode(
          _component_u_toast,
          { ref: "uToast" },
          null,
          512
          /* NEED_PATCH */
        )
      ],
      4
      /* STYLE */
    );
  }
  const PagesTarbarIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["render", _sfc_render$U], ["__file", "D:/study/实训/intelligent_community_app_owner/pages/tarbar/index/index.vue"]]);
  const _imports_5 = "/static/img/server/pay.png";
  const _imports_8 = "/static/img/server/home.png";
  const _imports_9 = "/static/img/server/open.png";
  const _imports_10 = "/static/img/server/invite.png";
  const _imports_11 = "/static/img/f-card/invite.png";
  const _sfc_main$U = {
    methods: {
      //界面跳转方法
      //我的房屋
      toHome() {
        uni.navigateTo({
          url: "/pages/home/home"
        });
      },
      //邀请访客
      toInvitor() {
        uni.navigateTo({
          url: "/pages/invitor/invitor"
        });
      },
      //手机开门
      toOpen() {
        uni.switchTab({
          url: "/pages/tarbar/open/open"
        });
      },
      //手机缴费
      toPay() {
        uni.navigateTo({
          url: "/pages/pay/pay"
        });
      },
      //我的车位
      toPark() {
        uni.navigateTo({
          url: "/pages/park/park"
        });
      },
      //在线报修
      toFix() {
        uni.navigateTo({
          url: "/pages/fix/fix"
        });
      },
      //投诉建议
      toAdvice() {
        uni.navigateTo({
          url: "/pages/advice/advice"
        });
      },
      //社区公告
      toNotice() {
        uni.switchTab({
          url: "/pages/tarbar/message/message"
        });
      },
      //联系物业
      toPhones() {
        uni.navigateTo({
          url: "/pages/phones/phones"
        });
      },
      //更多
      toServer() {
        uni.switchTab({
          url: "/pages/tarbar/server/server"
        });
      },
      toFamily() {
        uni.navigateTo({
          url: "/pages/family/family"
        });
      },
      //未完成功能
      unFinished() {
        this.$refs.uToast.show({
          message: "该功能尚未开放,敬请期待!",
          position: "top",
          type: "warning"
        });
      }
    }
  };
  function _sfc_render$T(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_col = resolveEasycom(vue.resolveDynamicComponent("u-col"), __easycom_5$1);
    const _component_u_row = resolveEasycom(vue.resolveDynamicComponent("u-row"), __easycom_6);
    const _component_u_toast = resolveEasycom(vue.resolveDynamicComponent("u-toast"), __easycom_4);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: ".container" }, [
          vue.createElementVNode("view", { class: "activity_title" }, [
            vue.createElementVNode("text", {
              class: "title",
              style: { "font-size": "30upx" }
            }, "物业服务")
          ])
        ]),
        vue.createVNode(_component_u_row, { justify: "around" }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_u_col, {
              span: "2",
              align: "center"
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("image", {
                  src: _imports_0$6,
                  mode: "",
                  onClick: _cache[0] || (_cache[0] = (...args) => $options.toNotice && $options.toNotice(...args))
                }),
                vue.createElementVNode("text", null, "社区公告")
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createVNode(_component_u_col, {
              span: "2",
              align: "center"
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("image", {
                  src: _imports_1$4,
                  mode: "",
                  onClick: _cache[1] || (_cache[1] = (...args) => $options.unFinished && $options.unFinished(...args))
                }),
                vue.createElementVNode("text", null, "问卷调查")
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createVNode(_component_u_col, {
              span: "2",
              align: "center"
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("image", {
                  src: _imports_2$2,
                  mode: "",
                  onClick: _cache[2] || (_cache[2] = (...args) => $options.unFinished && $options.unFinished(...args))
                }),
                vue.createElementVNode("text", null, "在线报修")
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createVNode(_component_u_col, {
              span: "2",
              align: "center"
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("image", {
                  src: _imports_3$2,
                  mode: "",
                  onClick: _cache[3] || (_cache[3] = (...args) => $options.unFinished && $options.unFinished(...args))
                }),
                vue.createElementVNode("text", null, "投诉建议")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        vue.createVNode(_component_u_row, { justify: "around" }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_u_col, {
              span: "2",
              align: "center"
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("image", {
                  src: _imports_4,
                  mode: "",
                  onClick: _cache[4] || (_cache[4] = (...args) => $options.toPhones && $options.toPhones(...args))
                }),
                vue.createElementVNode("text", null, "联系物业")
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createVNode(_component_u_col, { span: "2" }),
            vue.createVNode(_component_u_col, { span: "2" }),
            vue.createVNode(_component_u_col, { span: "2" })
          ]),
          _: 1
          /* STABLE */
        }),
        vue.createElementVNode("view", { class: ".container" }, [
          vue.createElementVNode("view", {
            class: "activity_title",
            style: { "padding-top": "50upx" }
          }, [
            vue.createElementVNode("text", {
              class: "title",
              style: { "font-size": "30upx" }
            }, "社区服务")
          ])
        ]),
        vue.createVNode(_component_u_row, { justify: "around" }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_u_col, {
              span: "2",
              align: "center"
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("image", {
                  src: _imports_5,
                  mode: "",
                  onClick: _cache[5] || (_cache[5] = (...args) => $options.toPay && $options.toPay(...args))
                }),
                vue.createElementVNode("text", null, "生活缴费")
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createVNode(_component_u_col, {
              span: "2",
              align: "center"
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("image", {
                  src: _imports_6,
                  mode: "",
                  onClick: _cache[6] || (_cache[6] = (...args) => $options.toPark && $options.toPark(...args))
                }),
                vue.createElementVNode("text", null, "我的车位")
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createVNode(_component_u_col, {
              span: "2",
              align: "center"
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("image", {
                  src: _imports_7,
                  mode: "",
                  onClick: _cache[7] || (_cache[7] = (...args) => $options.unFinished && $options.unFinished(...args))
                }),
                vue.createElementVNode("text", null, "停车缴费")
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createVNode(_component_u_col, {
              span: "2",
              align: "center"
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("image", {
                  src: _imports_8,
                  mode: "",
                  onClick: _cache[8] || (_cache[8] = (...args) => $options.toHome && $options.toHome(...args))
                }),
                vue.createElementVNode("text", null, "我的房屋")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        vue.createVNode(_component_u_row, { justify: "around" }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_u_col, {
              span: "2",
              align: "center"
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("image", {
                  src: _imports_9,
                  mode: "",
                  onClick: _cache[9] || (_cache[9] = (...args) => $options.toOpen && $options.toOpen(...args))
                }),
                vue.createElementVNode("text", null, "手机开门")
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createVNode(_component_u_col, {
              span: "2",
              align: "center"
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("image", {
                  src: _imports_10,
                  mode: "",
                  onClick: _cache[10] || (_cache[10] = (...args) => $options.toInvitor && $options.toInvitor(...args))
                }),
                vue.createElementVNode("text", null, "访客邀请")
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createVNode(_component_u_col, {
              span: "2",
              align: "center"
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("image", {
                  src: _imports_11,
                  mode: "",
                  onClick: _cache[11] || (_cache[11] = (...args) => $options.toFamily && $options.toFamily(...args))
                }),
                vue.createElementVNode("text", null, "家属邀请")
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createVNode(_component_u_col, {
              span: "2",
              align: "center"
            })
          ]),
          _: 1
          /* STABLE */
        }),
        vue.createVNode(
          _component_u_toast,
          { ref: "uToast" },
          null,
          512
          /* NEED_PATCH */
        )
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesTarbarServerServer = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["render", _sfc_render$T], ["__scopeId", "data-v-bd10ae4d"], ["__file", "D:/study/实训/intelligent_community_app_owner/pages/tarbar/server/server.vue"]]);
  const props$i = {
    props: {
      // 是否细边框
      hairline: {
        type: Boolean,
        default: props$x.button.hairline
      },
      // 按钮的预置样式，info，primary，error，warning，success
      type: {
        type: String,
        default: props$x.button.type
      },
      // 按钮尺寸，large，normal，small，mini
      size: {
        type: String,
        default: props$x.button.size
      },
      // 按钮形状，circle（两边为半圆），square（带圆角）
      shape: {
        type: String,
        default: props$x.button.shape
      },
      // 按钮是否镂空
      plain: {
        type: Boolean,
        default: props$x.button.plain
      },
      // 是否禁止状态
      disabled: {
        type: Boolean,
        default: props$x.button.disabled
      },
      // 是否加载中
      loading: {
        type: Boolean,
        default: props$x.button.loading
      },
      // 加载中提示文字
      loadingText: {
        type: [String, Number],
        default: props$x.button.loadingText
      },
      // 加载状态图标类型
      loadingMode: {
        type: String,
        default: props$x.button.loadingMode
      },
      // 加载图标大小
      loadingSize: {
        type: [String, Number],
        default: props$x.button.loadingSize
      },
      // 开放能力，具体请看uniapp稳定关于button组件部分说明
      // https://uniapp.dcloud.io/component/button
      openType: {
        type: String,
        default: props$x.button.openType
      },
      // 用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件
      // 取值为submit（提交表单），reset（重置表单）
      formType: {
        type: String,
        default: props$x.button.formType
      },
      // 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效
      // 只微信小程序、QQ小程序有效
      appParameter: {
        type: String,
        default: props$x.button.appParameter
      },
      // 指定是否阻止本节点的祖先节点出现点击态，微信小程序有效
      hoverStopPropagation: {
        type: Boolean,
        default: props$x.button.hoverStopPropagation
      },
      // 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。只微信小程序有效
      lang: {
        type: String,
        default: props$x.button.lang
      },
      // 会话来源，open-type="contact"时有效。只微信小程序有效
      sessionFrom: {
        type: String,
        default: props$x.button.sessionFrom
      },
      // 会话内消息卡片标题，open-type="contact"时有效
      // 默认当前标题，只微信小程序有效
      sendMessageTitle: {
        type: String,
        default: props$x.button.sendMessageTitle
      },
      // 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效
      // 默认当前分享路径，只微信小程序有效
      sendMessagePath: {
        type: String,
        default: props$x.button.sendMessagePath
      },
      // 会话内消息卡片图片，open-type="contact"时有效
      // 默认当前页面截图，只微信小程序有效
      sendMessageImg: {
        type: String,
        default: props$x.button.sendMessageImg
      },
      // 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，
      // 用户点击后可以快速发送小程序消息，open-type="contact"时有效
      showMessageCard: {
        type: Boolean,
        default: props$x.button.showMessageCard
      },
      // 额外传参参数，用于小程序的data-xxx属性，通过target.dataset.name获取
      dataName: {
        type: String,
        default: props$x.button.dataName
      },
      // 节流，一定时间内只能触发一次
      throttleTime: {
        type: [String, Number],
        default: props$x.button.throttleTime
      },
      // 按住后多久出现点击态，单位毫秒
      hoverStartTime: {
        type: [String, Number],
        default: props$x.button.hoverStartTime
      },
      // 手指松开后点击态保留时间，单位毫秒
      hoverStayTime: {
        type: [String, Number],
        default: props$x.button.hoverStayTime
      },
      // 按钮文字，之所以通过props传入，是因为slot传入的话
      // nvue中无法控制文字的样式
      text: {
        type: [String, Number],
        default: props$x.button.text
      },
      // 按钮图标
      icon: {
        type: String,
        default: props$x.button.icon
      },
      // 按钮图标
      iconColor: {
        type: String,
        default: props$x.button.icon
      },
      // 按钮颜色，支持传入linear-gradient渐变色
      color: {
        type: String,
        default: props$x.button.color
      }
    }
  };
  const _sfc_main$T = {
    name: "u-button",
    mixins: [mpMixin, mixin, props$i],
    data() {
      return {};
    },
    computed: {
      // 生成bem风格的类名
      bemClass() {
        if (!this.color) {
          return this.bem(
            "button",
            ["type", "shape", "size"],
            ["disabled", "plain", "hairline"]
          );
        } else {
          return this.bem(
            "button",
            ["shape", "size"],
            ["disabled", "plain", "hairline"]
          );
        }
      },
      loadingColor() {
        if (this.plain) {
          return this.color ? this.color : uni.$u.config.color[`u-${this.type}`];
        }
        if (this.type === "info") {
          return "#c9c9c9";
        }
        return "rgb(200, 200, 200)";
      },
      iconColorCom() {
        if (this.iconColor)
          return this.iconColor;
        if (this.plain) {
          return this.color ? this.color : this.type;
        } else {
          return this.type === "info" ? "#000000" : "#ffffff";
        }
      },
      baseColor() {
        let style = {};
        if (this.color) {
          style.color = this.plain ? this.color : "white";
          if (!this.plain) {
            style["background-color"] = this.color;
          }
          if (this.color.indexOf("gradient") !== -1) {
            style.borderTopWidth = 0;
            style.borderRightWidth = 0;
            style.borderBottomWidth = 0;
            style.borderLeftWidth = 0;
            if (!this.plain) {
              style.backgroundImage = this.color;
            }
          } else {
            style.borderColor = this.color;
            style.borderWidth = "1px";
            style.borderStyle = "solid";
          }
        }
        return style;
      },
      // nvue版本按钮的字体不会继承父组件的颜色，需要对每一个text组件进行单独的设置
      nvueTextStyle() {
        let style = {};
        if (this.type === "info") {
          style.color = "#323233";
        }
        if (this.color) {
          style.color = this.plain ? this.color : "white";
        }
        style.fontSize = this.textSize + "px";
        return style;
      },
      // 字体大小
      textSize() {
        let fontSize = 14, { size } = this;
        if (size === "large")
          fontSize = 16;
        if (size === "normal")
          fontSize = 14;
        if (size === "small")
          fontSize = 12;
        if (size === "mini")
          fontSize = 10;
        return fontSize;
      }
    },
    emits: [
      "click",
      "getphonenumber",
      "getuserinfo",
      "error",
      "opensetting",
      "launchapp"
    ],
    methods: {
      clickHandler() {
        if (!this.disabled && !this.loading) {
          uni.$u.throttle(() => {
            this.$emit("click");
          }, this.throttleTime);
        }
      },
      // 下面为对接uniapp官方按钮开放能力事件回调的对接
      getphonenumber(res) {
        this.$emit("getphonenumber", res);
      },
      getuserinfo(res) {
        this.$emit("getuserinfo", res);
      },
      error(res) {
        this.$emit("error", res);
      },
      opensetting(res) {
        this.$emit("opensetting", res);
      },
      launchapp(res) {
        this.$emit("launchapp", res);
      }
    }
  };
  function _sfc_render$S(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_loading_icon = resolveEasycom(vue.resolveDynamicComponent("u-loading-icon"), __easycom_1$9);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$6);
    return vue.openBlock(), vue.createElementBlock("button", {
      "hover-start-time": Number(_ctx.hoverStartTime),
      "hover-stay-time": Number(_ctx.hoverStayTime),
      "form-type": _ctx.formType,
      "open-type": _ctx.openType,
      "app-parameter": _ctx.appParameter,
      "hover-stop-propagation": _ctx.hoverStopPropagation,
      "send-message-title": _ctx.sendMessageTitle,
      "send-message-path": _ctx.sendMessagePath,
      lang: _ctx.lang,
      "data-name": _ctx.dataName,
      "session-from": _ctx.sessionFrom,
      "send-message-img": _ctx.sendMessageImg,
      "show-message-card": _ctx.showMessageCard,
      onGetphonenumber: _cache[0] || (_cache[0] = (...args) => $options.getphonenumber && $options.getphonenumber(...args)),
      onGetuserinfo: _cache[1] || (_cache[1] = (...args) => $options.getuserinfo && $options.getuserinfo(...args)),
      onError: _cache[2] || (_cache[2] = (...args) => $options.error && $options.error(...args)),
      onOpensetting: _cache[3] || (_cache[3] = (...args) => $options.opensetting && $options.opensetting(...args)),
      onLaunchapp: _cache[4] || (_cache[4] = (...args) => $options.launchapp && $options.launchapp(...args)),
      "hover-class": !_ctx.disabled && !_ctx.loading ? "u-button--active" : "",
      class: vue.normalizeClass(["u-button u-reset-button", $options.bemClass]),
      style: vue.normalizeStyle([$options.baseColor, _ctx.$u.addStyle(_ctx.customStyle)]),
      onClick: _cache[5] || (_cache[5] = (...args) => $options.clickHandler && $options.clickHandler(...args))
    }, [
      _ctx.loading ? (vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        { key: 0 },
        [
          vue.createVNode(_component_u_loading_icon, {
            mode: _ctx.loadingMode,
            size: _ctx.loadingSize * 1.15,
            color: $options.loadingColor
          }, null, 8, ["mode", "size", "color"]),
          vue.createElementVNode(
            "text",
            {
              class: "u-button__loading-text",
              style: vue.normalizeStyle([{ fontSize: $options.textSize + "px" }])
            },
            vue.toDisplayString(_ctx.loadingText || _ctx.text),
            5
            /* TEXT, STYLE */
          )
        ],
        64
        /* STABLE_FRAGMENT */
      )) : (vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        { key: 1 },
        [
          _ctx.icon ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
            key: 0,
            name: _ctx.icon,
            color: $options.iconColorCom,
            size: $options.textSize * 1.35,
            customStyle: { marginRight: "2px" }
          }, null, 8, ["name", "color", "size"])) : vue.createCommentVNode("v-if", true),
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createElementVNode(
              "text",
              {
                class: "u-button__text",
                style: vue.normalizeStyle([{ fontSize: $options.textSize + "px" }])
              },
              vue.toDisplayString(_ctx.text),
              5
              /* TEXT, STYLE */
            )
          ], true)
        ],
        64
        /* STABLE_FRAGMENT */
      ))
    ], 46, ["hover-start-time", "hover-stay-time", "form-type", "open-type", "app-parameter", "hover-stop-propagation", "send-message-title", "send-message-path", "lang", "data-name", "session-from", "send-message-img", "show-message-card", "hover-class"]);
  }
  const __easycom_2$4 = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["render", _sfc_render$S], ["__scopeId", "data-v-5ce41ee6"], ["__file", "D:/study/实训/intelligent_community_app_owner/uni_modules/uview-plus/components/u-button/u-button.vue"]]);
  function getDoorsById(id) {
    return service.get("/app/getEquips?owner_id=" + id);
  }
  function openDoor(owner_id, doors, type2 = 0) {
    return service.post("/app/openDoor", {
      type: type2,
      ownerId: owner_id,
      doors
    });
  }
  function vister(owner_id, authorizer_device, authorizer_time) {
    return service.post("/app/vister", {
      ownerId: owner_id,
      authorizedDevice: authorizer_device,
      authorizedTime: authorizer_time
    });
  }
  function getCodeList(owner_id) {
    return service.get("/app/getCodeList?owner_id=" + owner_id);
  }
  function updateCode(uuid) {
    return service.post("/app/updateCode", {
      uuid
    });
  }
  function getRecord$1(owner_id) {
    return service.get("/app/getRecord?owner_id=" + owner_id);
  }
  const _imports_0$5 = "/static/img/open/open.png";
  const _sfc_main$S = {
    data() {
      return {
        community_name: "您尚未登录",
        equip_list: [],
        show: false,
        selected_list: []
      };
    },
    methods: {
      open() {
        this.selected_list = this.equip_list.filter((item) => {
          return item.selected == true;
        });
        if (this.selected_list.length > 0) {
          this.show = true;
          const owner_id = uni.getStorageSync("owner").id;
          const doors = [];
          this.selected_list.forEach((item) => doors.push(item.id));
          formatAppLog("log", "at pages/tarbar/open/open.vue:77", owner_id);
          openDoor(owner_id, doors).then((res) => {
            if (res.data.code === 0) {
              formatAppLog("log", "at pages/tarbar/open/open.vue:80", "记录成功");
            } else {
              formatAppLog("log", "at pages/tarbar/open/open.vue:82", "记录失败" + res.data.msg);
            }
          });
        } else {
          this.$refs.uToast.show({
            message: "您尚未选则设备",
            type: "warning",
            position: "top"
          });
        }
      },
      openDoor() {
        this.show = false;
      },
      toInvitor() {
        uni.navigateTo({
          url: "/pages/invitor/invitor"
        });
      }
    },
    onShow() {
      this.community_name = uni.getStorageSync("community").name;
      const owner_id = uni.getStorageSync("owner").id;
      this.equip_list = [];
      if (owner_id) {
        getDoorsById(owner_id).then((res) => {
          formatAppLog("log", "at pages/tarbar/open/open.vue:110", res);
          if (res.data.code === 0) {
            if (res.data.data.length > 0) {
              this.equip_list = res.data.data;
            }
          } else {
            this.$refs.uToast.show({
              message: res.data.msg,
              type: "error",
              position: "top"
            });
          }
        }).catch((err) => {
          formatAppLog("log", "at pages/tarbar/open/open.vue:123", "获取设备列表失败" + err);
        });
      }
    },
    mounted() {
    }
  };
  function _sfc_render$R(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$6);
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_2$4);
    const _component_u_popup = resolveEasycom(vue.resolveDynamicComponent("u-popup"), __easycom_2$6);
    const _component_u_toast = resolveEasycom(vue.resolveDynamicComponent("u-toast"), __easycom_4);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "title" }, [
        vue.createTextVNode(
          vue.toDisplayString($data.community_name) + " ",
          1
          /* TEXT */
        ),
        vue.createVNode(_component_u_icon, { name: "arrow-right" })
      ]),
      $data.equip_list.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "equip_list"
      }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.equip_list, (item, index2) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: index2,
              class: vue.normalizeClass(item.selected == true ? "selected_equip" : "equip"),
              onClick: ($event) => item.selected = !item.selected
            }, [
              vue.createElementVNode("image", {
                src: item.img,
                mode: ""
              }, null, 8, ["src"]),
              vue.createElementVNode(
                "view",
                null,
                vue.toDisplayString(item.equipName),
                1
                /* TEXT */
              )
            ], 10, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", { class: "operate" }, [
        vue.createElementVNode("view", {
          class: "open",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.open && $options.open(...args))
        }, [
          vue.createElementVNode("image", {
            src: _imports_0$5,
            mode: ""
          }),
          vue.createElementVNode("view", null, " 立即开门 ")
        ]),
        vue.createElementVNode("view", { class: "line" }),
        vue.createElementVNode("view", {
          class: "invite",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.toInvitor && $options.toInvitor(...args))
        }, [
          vue.createElementVNode("image", {
            src: "/static/img/open/lock.png",
            mode: ""
          }),
          vue.createElementVNode("view", null, " 访客邀请 ")
        ])
      ]),
      vue.createCommentVNode(" 弹出层 "),
      vue.createVNode(_component_u_popup, {
        show: $data.show,
        round: 20,
        mode: "center",
        onClose: _ctx.close
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "card" }, [
            vue.createElementVNode(
              "view",
              { class: "pop_title" },
              vue.toDisplayString($data.community_name),
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", { class: "content" }, [
              vue.createVNode(_component_u_icon, {
                name: "checkmark-circle-fill",
                color: "#409eff",
                size: "100"
              }),
              vue.createElementVNode("view", { style: { "color": "#3c9cff" } }, "开门成功"),
              vue.createElementVNode("view", {
                class: "btn",
                style: { "width": "200upx" }
              }, [
                vue.createVNode(_component_u_button, {
                  type: "primary",
                  shape: "circle",
                  style: { "color": "#ffffff" },
                  onClick: $options.openDoor
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("确定")
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["onClick"])
              ])
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["show", "onClose"]),
      vue.createVNode(
        _component_u_toast,
        { ref: "uToast" },
        null,
        512
        /* NEED_PATCH */
      )
    ]);
  }
  const PagesTarbarOpenOpen = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["render", _sfc_render$R], ["__scopeId", "data-v-52961baa"], ["__file", "D:/study/实训/intelligent_community_app_owner/pages/tarbar/open/open.vue"]]);
  const props$h = {
    props: {
      // 文字颜色
      color: {
        type: String,
        default: props$x.link.color
      },
      // 字体大小，单位px
      fontSize: {
        type: [String, Number],
        default: props$x.link.fontSize
      },
      // 是否显示下划线
      underLine: {
        type: Boolean,
        default: props$x.link.underLine
      },
      // 要跳转的链接
      href: {
        type: String,
        default: props$x.link.href
      },
      // 小程序中复制到粘贴板的提示语
      mpTips: {
        type: String,
        default: props$x.link.mpTips
      },
      // 下划线颜色
      lineColor: {
        type: String,
        default: props$x.link.lineColor
      },
      // 超链接的问题，不使用slot形式传入，是因为nvue下无法修改颜色
      text: {
        type: String,
        default: props$x.link.text
      }
    }
  };
  const _sfc_main$R = {
    name: "u-link",
    mixins: [mpMixin, mixin, props$h],
    computed: {
      linkStyle() {
        const style = {
          color: this.color,
          fontSize: uni.$u.addUnit(this.fontSize),
          // line-height设置为比字体大小多2px
          lineHeight: uni.$u.addUnit(uni.$u.getPx(this.fontSize) + 2),
          textDecoration: this.underLine ? "underline" : "none"
        };
        return style;
      }
    },
    methods: {
      openLink() {
        plus.runtime.openURL(this.href);
        this.$emit("click");
      }
    }
  };
  function _sfc_render$Q(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        class: "u-link",
        onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.openLink && $options.openLink(...args), ["stop"])),
        style: vue.normalizeStyle([$options.linkStyle, _ctx.$u.addStyle(_ctx.customStyle)])
      },
      vue.toDisplayString(_ctx.text),
      5
      /* TEXT, STYLE */
    );
  }
  const __easycom_1$7 = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["render", _sfc_render$Q], ["__scopeId", "data-v-12f6646d"], ["__file", "D:/study/实训/intelligent_community_app_owner/uni_modules/uview-plus/components/u-link/u-link.vue"]]);
  const value = {
    computed: {
      // 经处理后需要显示的值
      value() {
        const {
          text,
          mode,
          format: format2,
          href
        } = this;
        if (mode === "price") {
          if (!/^\d+(\.\d+)?$/.test(text)) {
            uni.$u.error("金额模式下，text参数需要为金额格式");
          }
          if (uni.$u.test.func(format2)) {
            return format2(text);
          }
          return uni.$u.priceFormat(text, 2);
        }
        if (mode === "date") {
          !uni.$u.test.date(text) && uni.$u.error("日期模式下，text参数需要为日期或时间戳格式");
          if (uni.$u.test.func(format2)) {
            return format2(text);
          }
          if (format2) {
            return uni.$u.timeFormat(text, format2);
          }
          return uni.$u.timeFormat(text, "yyyy-mm-dd");
        }
        if (mode === "phone") {
          if (uni.$u.test.func(format2)) {
            return format2(text);
          }
          if (format2 === "encrypt") {
            return `${text.substr(0, 3)}****${text.substr(7)}`;
          }
          return text;
        }
        if (mode === "name") {
          !(typeof text === "string") && uni.$u.error("姓名模式下，text参数需要为字符串格式");
          if (uni.$u.test.func(format2)) {
            return format2(text);
          }
          if (format2 === "encrypt") {
            return this.formatName(text);
          }
          return text;
        }
        if (mode === "link") {
          !uni.$u.test.url(href) && uni.$u.error("超链接模式下，href参数需要为URL格式");
          return text;
        }
        return text;
      }
    },
    methods: {
      // 默认的姓名脱敏规则
      formatName(name) {
        let value2 = "";
        if (name.length === 2) {
          value2 = name.substr(0, 1) + "*";
        } else if (name.length > 2) {
          let char = "";
          for (let i2 = 0, len = name.length - 2; i2 < len; i2++) {
            char += "*";
          }
          value2 = name.substr(0, 1) + char + name.substr(-1, 1);
        } else {
          value2 = name;
        }
        return value2;
      }
    }
  };
  const props$g = {
    props: {
      // 主题颜色
      type: {
        type: String,
        default: props$x.text.type
      },
      // 是否显示
      show: {
        type: Boolean,
        default: props$x.text.show
      },
      // 显示的值
      text: {
        type: [String, Number],
        default: props$x.text.text
      },
      // 前置图标
      prefixIcon: {
        type: String,
        default: props$x.text.prefixIcon
      },
      // 后置图标
      suffixIcon: {
        type: String,
        default: props$x.text.suffixIcon
      },
      // 文本处理的匹配模式
      // text-普通文本，price-价格，phone-手机号，name-姓名，date-日期，link-超链接
      mode: {
        type: String,
        default: props$x.text.mode
      },
      // mode=link下，配置的链接
      href: {
        type: String,
        default: props$x.text.href
      },
      // 格式化规则
      format: {
        type: [String, Function],
        default: props$x.text.format
      },
      // mode=phone时，点击文本是否拨打电话
      call: {
        type: Boolean,
        default: props$x.text.call
      },
      // 小程序的打开方式
      openType: {
        type: String,
        default: props$x.text.openType
      },
      // 是否粗体，默认normal
      bold: {
        type: Boolean,
        default: props$x.text.bold
      },
      // 是否块状
      block: {
        type: Boolean,
        default: props$x.text.block
      },
      // 文本显示的行数，如果设置，超出此行数，将会显示省略号
      lines: {
        type: [String, Number],
        default: props$x.text.lines
      },
      // 文本颜色
      color: {
        type: String,
        default: props$x.text.color
      },
      // 字体大小
      size: {
        type: [String, Number],
        default: props$x.text.size
      },
      // 图标的样式
      iconStyle: {
        type: [Object, String],
        default: props$x.text.iconStyle
      },
      // 文字装饰，下划线，中划线等，可选值 none|underline|line-through
      decoration: {
        tepe: String,
        default: props$x.text.decoration
      },
      // 外边距，对象、字符串，数值形式均可
      margin: {
        type: [Object, String, Number],
        default: props$x.text.margin
      },
      // 文本行高
      lineHeight: {
        type: [String, Number],
        default: props$x.text.lineHeight
      },
      // 文本对齐方式，可选值left|center|right
      align: {
        type: String,
        default: props$x.text.align
      },
      // 文字换行，可选值break-word|normal|anywhere
      wordWrap: {
        type: String,
        default: props$x.text.wordWrap
      }
    }
  };
  const _sfc_main$Q = {
    name: "u--text",
    mixins: [mpMixin, mixin, value, props$g],
    emits: ["click"],
    computed: {
      valueStyle() {
        const style = {
          textDecoration: this.decoration,
          fontWeight: this.bold ? "bold" : "normal",
          wordWrap: this.wordWrap,
          fontSize: uni.$u.addUnit(this.size)
        };
        !this.type && (style.color = this.color);
        this.isNvue && this.lines && (style.lines = this.lines);
        this.lineHeight && (style.lineHeight = uni.$u.addUnit(this.lineHeight));
        !this.isNvue && this.block && (style.display = "block");
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      },
      isNvue() {
        let nvue = false;
        return nvue;
      },
      isMp() {
        let mp = false;
        return mp;
      }
    },
    data() {
      return {};
    },
    methods: {
      clickHandler() {
        if (this.call && this.mode === "phone") {
          uni.makePhoneCall({
            phoneNumber: this.text
          });
        }
        this.$emit("click");
      }
    }
  };
  function _sfc_render$P(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$6);
    const _component_u_link = resolveEasycom(vue.resolveDynamicComponent("u-link"), __easycom_1$7);
    return _ctx.show ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass(["u-text", []]),
        style: vue.normalizeStyle({
          margin: _ctx.margin,
          justifyContent: _ctx.align === "left" ? "flex-start" : _ctx.align === "center" ? "center" : "flex-end"
        }),
        onClick: _cache[6] || (_cache[6] = (...args) => $options.clickHandler && $options.clickHandler(...args))
      },
      [
        _ctx.mode === "price" ? (vue.openBlock(), vue.createElementBlock(
          "text",
          {
            key: 0,
            class: vue.normalizeClass(["u-text__price", _ctx.type && `u-text__value--${_ctx.type}`]),
            style: vue.normalizeStyle([$options.valueStyle])
          },
          "￥",
          6
          /* CLASS, STYLE */
        )) : vue.createCommentVNode("v-if", true),
        _ctx.prefixIcon ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "u-text__prefix-icon"
        }, [
          vue.createVNode(_component_u_icon, {
            name: _ctx.prefixIcon,
            customStyle: _ctx.$u.addStyle(_ctx.iconStyle)
          }, null, 8, ["name", "customStyle"])
        ])) : vue.createCommentVNode("v-if", true),
        _ctx.mode === "link" ? (vue.openBlock(), vue.createBlock(_component_u_link, {
          key: 2,
          text: _ctx.value,
          href: _ctx.href,
          underLine: ""
        }, null, 8, ["text", "href"])) : _ctx.openType && $options.isMp ? (vue.openBlock(), vue.createElementBlock("button", {
          key: 3,
          class: "u-reset-button u-text__value",
          style: vue.normalizeStyle([$options.valueStyle]),
          "data-index": _ctx.index,
          openType: _ctx.openType,
          onGetuserinfo: _cache[0] || (_cache[0] = (...args) => _ctx.onGetUserInfo && _ctx.onGetUserInfo(...args)),
          onContact: _cache[1] || (_cache[1] = (...args) => _ctx.onContact && _ctx.onContact(...args)),
          onGetphonenumber: _cache[2] || (_cache[2] = (...args) => _ctx.onGetPhoneNumber && _ctx.onGetPhoneNumber(...args)),
          onError: _cache[3] || (_cache[3] = (...args) => _ctx.onError && _ctx.onError(...args)),
          onLaunchapp: _cache[4] || (_cache[4] = (...args) => _ctx.onLaunchApp && _ctx.onLaunchApp(...args)),
          onOpensetting: _cache[5] || (_cache[5] = (...args) => _ctx.onOpenSetting && _ctx.onOpenSetting(...args)),
          lang: _ctx.lang,
          "session-from": _ctx.sessionFrom,
          "send-message-title": _ctx.sendMessageTitle,
          "send-message-path": _ctx.sendMessagePath,
          "send-message-img": _ctx.sendMessageImg,
          "show-message-card": _ctx.showMessageCard,
          "app-parameter": _ctx.appParameter
        }, vue.toDisplayString(_ctx.value), 45, ["data-index", "openType", "lang", "session-from", "send-message-title", "send-message-path", "send-message-img", "show-message-card", "app-parameter"])) : (vue.openBlock(), vue.createElementBlock(
          "text",
          {
            key: 4,
            class: vue.normalizeClass(["u-text__value", [
              _ctx.type && `u-text__value--${_ctx.type}`,
              _ctx.lines && `u-line-${_ctx.lines}`
            ]]),
            style: vue.normalizeStyle([$options.valueStyle])
          },
          vue.toDisplayString(_ctx.value),
          7
          /* TEXT, CLASS, STYLE */
        )),
        _ctx.suffixIcon ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 5,
          class: "u-text__suffix-icon"
        }, [
          vue.createVNode(_component_u_icon, {
            name: _ctx.suffixIcon,
            customStyle: _ctx.$u.addStyle(_ctx.iconStyle)
          }, null, 8, ["name", "customStyle"])
        ])) : vue.createCommentVNode("v-if", true)
      ],
      4
      /* STYLE */
    )) : vue.createCommentVNode("v-if", true);
  }
  const uvText = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["render", _sfc_render$P], ["__scopeId", "data-v-0a574502"], ["__file", "D:/study/实训/intelligent_community_app_owner/uni_modules/uview-plus/components/u-text/u-text.vue"]]);
  const _sfc_main$P = {
    name: "u--text",
    mixins: [mpMixin, mixin, props$g],
    components: {
      uvText
    }
  };
  function _sfc_render$O(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uvText = vue.resolveComponent("uvText");
    return vue.openBlock(), vue.createBlock(_component_uvText, {
      type: _ctx.type,
      show: _ctx.show,
      text: _ctx.text,
      prefixIcon: _ctx.prefixIcon,
      suffixIcon: _ctx.suffixIcon,
      mode: _ctx.mode,
      href: _ctx.href,
      format: _ctx.format,
      call: _ctx.call,
      openType: _ctx.openType,
      bold: _ctx.bold,
      block: _ctx.block,
      lines: _ctx.lines,
      color: _ctx.color,
      decoration: _ctx.decoration,
      size: _ctx.size,
      iconStyle: _ctx.iconStyle,
      margin: _ctx.margin,
      lineHeight: _ctx.lineHeight,
      align: _ctx.align,
      wordWrap: _ctx.wordWrap,
      customStyle: _ctx.customStyle
    }, null, 8, ["type", "show", "text", "prefixIcon", "suffixIcon", "mode", "href", "format", "call", "openType", "bold", "block", "lines", "color", "decoration", "size", "iconStyle", "margin", "lineHeight", "align", "wordWrap", "customStyle"]);
  }
  const __easycom_1$6 = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["render", _sfc_render$O], ["__file", "D:/study/实训/intelligent_community_app_owner/uni_modules/uview-plus/components/u--text/u--text.vue"]]);
  function getNotice() {
    return service.get("/app/getNotice");
  }
  function getNoticeById(id) {
    return service.get("/app/getNotice?notice_id=" + id);
  }
  const _sfc_main$O = {
    data() {
      return {
        msg_list: []
      };
    },
    onShow() {
      this.msg_list = [];
      getNotice().then((res) => {
        formatAppLog("log", "at pages/tarbar/message/message.vue:35", res);
        if (res.data.code === 0 && res.data.data.length > 0) {
          this.msg_list = res.data.data;
        }
      });
    },
    methods: {
      msg_detail(id) {
        uni.navigateTo({
          url: "/pages/tarbar/message/msg-detail?id=" + id
        });
      }
    }
  };
  function _sfc_render$N(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u__text = resolveEasycom(vue.resolveDynamicComponent("u--text"), __easycom_1$6);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$6);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "top" }),
      $data.msg_list.length > 0 ? (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        { key: 0 },
        vue.renderList($data.msg_list, (item, index2) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: "message_card",
            onClick: ($event) => $options.msg_detail(item.id)
          }, [
            vue.createElementVNode(
              "b",
              { style: { "padding": "10upx" } },
              vue.toDisplayString(item.title),
              1
              /* TEXT */
            ),
            vue.createVNode(_component_u__text, {
              lines: "3",
              class: "content",
              text: item.content,
              color: "#A1A1A1"
            }, null, 8, ["text"]),
            vue.createElementVNode("view", {
              class: "date",
              style: { "padding": "10upx" }
            }, [
              vue.createVNode(_component_u_icon, { name: "clock" }),
              vue.createTextVNode(
                " " + vue.toDisplayString(item.releaseTime) + "     ",
                1
                /* TEXT */
              ),
              vue.createVNode(_component_u_icon, { name: "eye" }),
              vue.createTextVNode("  1524 ")
            ])
          ], 8, ["onClick"]);
        }),
        256
        /* UNKEYED_FRAGMENT */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesTarbarMessageMessage = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["render", _sfc_render$N], ["__scopeId", "data-v-1488e261"], ["__file", "D:/study/实训/intelligent_community_app_owner/pages/tarbar/message/message.vue"]]);
  const props$f = {
    props: {
      // 头像图片路径(不能为相对路径)
      src: {
        type: String,
        default: props$x.avatar.src
      },
      // 头像形状，circle-圆形，square-方形
      shape: {
        type: String,
        default: props$x.avatar.shape
      },
      // 头像尺寸
      size: {
        type: [String, Number],
        default: props$x.avatar.size
      },
      // 裁剪模式
      mode: {
        type: String,
        default: props$x.avatar.mode
      },
      // 显示的文字
      text: {
        type: String,
        default: props$x.avatar.text
      },
      // 背景色
      bgColor: {
        type: String,
        default: props$x.avatar.bgColor
      },
      // 文字颜色
      color: {
        type: String,
        default: props$x.avatar.color
      },
      // 文字大小
      fontSize: {
        type: [String, Number],
        default: props$x.avatar.fontSize
      },
      // 显示的图标
      icon: {
        type: String,
        default: props$x.avatar.icon
      },
      // 显示小程序头像，只对百度，微信，QQ小程序有效
      mpAvatar: {
        type: Boolean,
        default: props$x.avatar.mpAvatar
      },
      // 是否使用随机背景色
      randomBgColor: {
        type: Boolean,
        default: props$x.avatar.randomBgColor
      },
      // 加载失败的默认头像(组件有内置默认图片)
      defaultUrl: {
        type: String,
        default: props$x.avatar.defaultUrl
      },
      // 如果配置了randomBgColor为true，且配置了此值，则从默认的背景色数组中取出对应索引的颜色值，取值0-19之间
      colorIndex: {
        type: [String, Number],
        // 校验参数规则，索引在0-19之间
        validator(n) {
          return uni.$u.test.range(n, [0, 19]) || n === "";
        },
        default: props$x.avatar.colorIndex
      },
      // 组件标识符
      name: {
        type: String,
        default: props$x.avatar.name
      }
    }
  };
  const base64Avatar = "data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjREMEQwRkY0RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjREMEQwRkY1RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEQwRDBGRjJGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEQwRDBGRjNGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCADIAMgDAREAAhEBAxEB/8QAcQABAQEAAwEBAAAAAAAAAAAAAAUEAQMGAgcBAQAAAAAAAAAAAAAAAAAAAAAQAAIBAwICBgkDBQAAAAAAAAABAhEDBCEFMVFBYXGREiKBscHRMkJSEyOh4XLxYjNDFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/fAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHbHFyZ/Dam+yLA+Z2L0Pjtyj2poD4AAAAAAAAAAAAAAAAAAAAAAAAKWFs9y6lcvvwQeqj8z9wFaziY1n/HbUX9XF97A7QAGXI23EvJ1goyfzR0YEfN269jeZ+a03pNe0DIAAAAAAAAAAAAAAAAAAAACvtO3RcVkXlWutuL9YFYAAAAAOJRjKLjJVi9GmB5/csH/mu1h/in8PU+QGMAAAAAAAAAAAAAAAAAAaMDG/6MmMH8C80+xAelSSVFolwQAAAAAAAHVlWI37ErUulaPk+hgeYnCUJuElSUXRrrQHAAAAAAAAAAAAAAAAABa2Oz4bM7r4zdF2ICmAAAAAAAAAg7zZ8GX41wuJP0rRgYAAAAAAAAAAAAAAAAAD0m2R8ODaXU33tsDSAAAAAAAAAlb9HyWZcnJd9PcBHAAAAAAAAAAAAAAAAAPS7e64Vn+KA0AAAAAAAAAJm+v8Ftf3ewCKAAAAAAAAAAAAAAAAAX9muqeGo9NttP06+0DcAAAAAAAAAjb7dTu2ra+VOT9P8AQCWAAAAAAAAAAAAAAAAAUNmyPt5Ltv4bui/kuAF0AAAAAAADiUlGLlJ0SVW+oDzOXfd/Ind6JPRdS0QHSAAAAAAAAAAAAAAAAAE2nVaNcGB6Lbs6OTao9LsF51z60BrAAAAAABJ3jOVHjW3r/sa9QEgAAAAAAAAAAAAAAAAAAAPu1duWriuW34ZR4MC9hbnZyEoy8l36XwfYBsAAADaSq9EuLAlZ+7xSdrGdW9Hc5dgEdtt1erfFgAAAAAAAAAAAAAAAAADVjbblX6NR8MH80tEBRs7HYivyzlN8lovaBPzduvY0m6eK10TXtAyAarO55lpJK54orolr+4GqO/Xaea1FvqbXvA+Z77kNeW3GPbV+4DJfzcm/pcm3H6Vou5AdAFLC2ed2Pjv1txa8sV8T6wOL+yZEKu1JXFy4MDBOE4ScZxcZLinoB8gAAAAAAAAAAAB242LeyJ+C3GvN9C7QLmJtePYpKS+5c+p8F2IDYAANJqj1T4oCfk7Nj3G5Wn9qXJax7gJ93Z82D8sVNc4v30A6Xg5i42Z+iLfqARwcyT0sz9MWvWBps7LlTf5Grce9/oBTxdtxseklHxT+uWr9AGoAB138ezfj4bsFJdD6V2MCPm7RdtJzs1uW1xXzL3gTgAAAAAAAAADRhYc8q74I6RWs5ckB6GxYtWLat21SK731sDsAAAAAAAAAAAAAAAASt021NO/YjrxuQXT1oCOAAAAAAABzGLlJRSq26JAelwsWONYjbXxcZvmwO8AAAAAAAAAAAAAAAAAAef3TEWPkVivx3NY9T6UBiAAAAAABo2+VmGXblddIJ8eivRUD0oAAAAAAAAAAAAAAAAAAAYt4tKeFKVNYNSXfRgefAAAAAAAAr7VuSSWPedKaW5v1MCsAAAAAAAAAAAAAAAAAAIe6bj96Ts2n+JPzSXzP3ATgAAAAAAAAFbbt1UUrOQ9FpC4/UwK6aaqtU+DAAAAAAAAAAAAAAA4lKMIuUmoxWrb4ARNx3R3q2rLpa4Sl0y/YCcAAAAAAAAAAANmFud7G8r89r6X0dgFvGzLGRGtuWvTF6NAdwAAAAAAAAAAAy5W442PVN+K59EePp5ARMvOv5MvO6QXCC4AZwAAAAAAAAAAAAAcxlKLUotprg1owN+PvORborq+7Hnwl3gUbO74VzRydt8pKn68ANcJwmqwkpLmnUDkAAAAfNy9atqtyagut0AxXt5xIV8Fbj6lRd7Am5G65V6qUvtwfyx94GMAAAAAAAAAAAAAAAAAAAOU2nVOj5gdsc3LiqRvTpyqwOxbnnrhdfpSfrQB7pnv/AGvuS9gHXPMy5/Fem1yq0v0A6W29XqwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//Z";
  const _sfc_main$N = {
    name: "u-avatar",
    mixins: [mpMixin, mixin, props$f],
    data() {
      return {
        // 如果配置randomBgColor参数为true，在图标或者文字的模式下，会随机从中取出一个颜色值当做背景色
        colors: [
          "#ffb34b",
          "#f2bba9",
          "#f7a196",
          "#f18080",
          "#88a867",
          "#bfbf39",
          "#89c152",
          "#94d554",
          "#f19ec2",
          "#afaae4",
          "#e1b0df",
          "#c38cc1",
          "#72dcdc",
          "#9acdcb",
          "#77b1cc",
          "#448aca",
          "#86cefa",
          "#98d1ee",
          "#73d1f1",
          "#80a7dc"
        ],
        avatarUrl: this.src,
        allowMp: false
      };
    },
    watch: {
      // 监听头像src的变化，赋值给内部的avatarUrl变量，因为图片加载失败时，需要修改图片的src为默认值
      // 而组件内部不能直接修改props的值，所以需要一个中间变量
      src: {
        immediate: true,
        handler(newVal) {
          this.avatarUrl = newVal;
          if (!newVal) {
            this.errorHandler();
          }
        }
      }
    },
    computed: {
      imageStyle() {
        const style = {};
        return style;
      }
    },
    created() {
      this.init();
    },
    methods: {
      init() {
      },
      // 判断传入的name属性，是否图片路径，只要带有"/"均认为是图片形式
      isImg() {
        return this.src.indexOf("/") !== -1;
      },
      // 图片加载时失败时触发
      errorHandler() {
        this.avatarUrl = this.defaultUrl || base64Avatar;
      },
      clickHandler() {
        this.$emit("click", this.name);
      }
    }
  };
  function _sfc_render$M(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$6);
    const _component_u__text = resolveEasycom(vue.resolveDynamicComponent("u--text"), __easycom_1$6);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-avatar", [`u-avatar--${_ctx.shape}`]]),
        style: vue.normalizeStyle([{
          backgroundColor: _ctx.text || _ctx.icon ? _ctx.randomBgColor ? $data.colors[_ctx.colorIndex !== "" ? _ctx.colorIndex : _ctx.$u.random(0, 19)] : _ctx.bgColor : "transparent",
          width: _ctx.$u.addUnit(_ctx.size),
          height: _ctx.$u.addUnit(_ctx.size)
        }, _ctx.$u.addStyle(_ctx.customStyle)]),
        onClick: _cache[1] || (_cache[1] = (...args) => $options.clickHandler && $options.clickHandler(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          _ctx.mpAvatar && $data.allowMp ? (vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            { key: 0 },
            [],
            64
            /* STABLE_FRAGMENT */
          )) : _ctx.icon ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
            key: 1,
            name: _ctx.icon,
            size: _ctx.fontSize,
            color: _ctx.color
          }, null, 8, ["name", "size", "color"])) : _ctx.text ? (vue.openBlock(), vue.createBlock(_component_u__text, {
            key: 2,
            text: _ctx.text,
            size: _ctx.fontSize,
            color: _ctx.color,
            align: "center",
            customStyle: "justify-content: center"
          }, null, 8, ["text", "size", "color"])) : (vue.openBlock(), vue.createElementBlock("image", {
            key: 3,
            class: vue.normalizeClass(["u-avatar__image", [`u-avatar__image--${_ctx.shape}`]]),
            src: $data.avatarUrl || _ctx.defaultUrl,
            mode: _ctx.mode,
            onError: _cache[0] || (_cache[0] = (...args) => $options.errorHandler && $options.errorHandler(...args)),
            style: vue.normalizeStyle([{
              width: _ctx.$u.addUnit(_ctx.size),
              height: _ctx.$u.addUnit(_ctx.size)
            }])
          }, null, 46, ["src", "mode"]))
        ], true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["render", _sfc_render$M], ["__scopeId", "data-v-34d954f9"], ["__file", "D:/study/实训/intelligent_community_app_owner/uni_modules/uview-plus/components/u-avatar/u-avatar.vue"]]);
  const props$e = {
    props: {
      color: {
        type: String,
        default: props$x.line.color
      },
      // 长度，竖向时表现为高度，横向时表现为长度，可以为百分比，带px单位的值等
      length: {
        type: [String, Number],
        default: props$x.line.length
      },
      // 线条方向，col-竖向，row-横向
      direction: {
        type: String,
        default: props$x.line.direction
      },
      // 是否显示细边框
      hairline: {
        type: Boolean,
        default: props$x.line.hairline
      },
      // 线条与上下左右元素的间距，字符串形式，如"30px"、"20px 30px"
      margin: {
        type: [String, Number],
        default: props$x.line.margin
      },
      // 是否虚线，true-虚线，false-实线
      dashed: {
        type: Boolean,
        default: props$x.line.dashed
      }
    }
  };
  const _sfc_main$M = {
    name: "u-line",
    mixins: [mpMixin, mixin, props$e],
    computed: {
      lineStyle() {
        const style = {};
        style.margin = this.margin;
        if (this.direction === "row") {
          style.borderBottomWidth = "1px";
          style.borderBottomStyle = this.dashed ? "dashed" : "solid";
          style.width = uni.$u.addUnit(this.length);
          if (this.hairline)
            style.transform = "scaleY(0.5)";
        } else {
          style.borderLeftWidth = "1px";
          style.borderLeftStyle = this.dashed ? "dashed" : "solid";
          style.height = uni.$u.addUnit(this.length);
          if (this.hairline)
            style.transform = "scaleX(0.5)";
        }
        style.borderColor = this.color;
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      }
    }
  };
  function _sfc_render$L(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "u-line",
        style: vue.normalizeStyle([$options.lineStyle])
      },
      null,
      4
      /* STYLE */
    );
  }
  const __easycom_1$5 = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["render", _sfc_render$L], ["__scopeId", "data-v-72791e59"], ["__file", "D:/study/实训/intelligent_community_app_owner/uni_modules/uview-plus/components/u-line/u-line.vue"]]);
  const props$d = {
    props: {
      // 标题
      title: {
        type: [String, Number],
        default: props$x.cell.title
      },
      // 标题下方的描述信息
      label: {
        type: [String, Number],
        default: props$x.cell.label
      },
      // 右侧的内容
      value: {
        type: [String, Number],
        default: props$x.cell.value
      },
      // 左侧图标名称，或者图片链接(本地文件建议使用绝对地址)
      icon: {
        type: String,
        default: props$x.cell.icon
      },
      // 是否禁用cell
      disabled: {
        type: Boolean,
        default: props$x.cell.disabled
      },
      // 是否显示下边框
      border: {
        type: Boolean,
        default: props$x.cell.border
      },
      // 内容是否垂直居中(主要是针对右侧的value部分)
      center: {
        type: Boolean,
        default: props$x.cell.center
      },
      // 点击后跳转的URL地址
      url: {
        type: String,
        default: props$x.cell.url
      },
      // 链接跳转的方式，内部使用的是uView封装的route方法，可能会进行拦截操作
      linkType: {
        type: String,
        default: props$x.cell.linkType
      },
      // 是否开启点击反馈(表现为点击时加上灰色背景)
      clickable: {
        type: Boolean,
        default: props$x.cell.clickable
      },
      // 是否展示右侧箭头并开启点击反馈
      isLink: {
        type: Boolean,
        default: props$x.cell.isLink
      },
      // 是否显示表单状态下的必填星号(此组件可能会内嵌入input组件)
      required: {
        type: Boolean,
        default: props$x.cell.required
      },
      // 右侧的图标箭头
      rightIcon: {
        type: String,
        default: props$x.cell.rightIcon
      },
      // 右侧箭头的方向，可选值为：left，up，down
      arrowDirection: {
        type: String,
        default: props$x.cell.arrowDirection
      },
      // 左侧图标样式
      iconStyle: {
        type: [Object, String],
        default: () => {
          return uni.$u.props.cell.iconStyle;
        }
      },
      // 右侧箭头图标的样式
      rightIconStyle: {
        type: [Object, String],
        default: () => {
          return uni.$u.props.cell.rightIconStyle;
        }
      },
      // 标题的样式
      titleStyle: {
        type: [Object, String],
        default: () => {
          return uni.$u.props.cell.titleStyle;
        }
      },
      // 单位元的大小，可选值为large
      size: {
        type: String,
        default: props$x.cell.size
      },
      // 点击cell是否阻止事件传播
      stop: {
        type: Boolean,
        default: props$x.cell.stop
      },
      // 标识符，cell被点击时返回
      name: {
        type: [Number, String],
        default: props$x.cell.name
      }
    }
  };
  const _sfc_main$L = {
    name: "u-cell",
    data() {
      return {};
    },
    mixins: [mpMixin, mixin, props$d],
    computed: {
      titleTextStyle() {
        return uni.$u.addStyle(this.titleStyle);
      }
    },
    emits: ["click"],
    methods: {
      // 点击cell
      clickHandler(e) {
        if (this.disabled)
          return;
        this.$emit("click", {
          name: this.name
        });
        this.openPage();
        this.stop && this.preventEvent(e);
      }
    }
  };
  function _sfc_render$K(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$6);
    const _component_u_line = resolveEasycom(vue.resolveDynamicComponent("u-line"), __easycom_1$5);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["u-cell", [_ctx.customClass]]),
      style: vue.normalizeStyle([_ctx.$u.addStyle(_ctx.customStyle)]),
      "hover-class": !_ctx.disabled && (_ctx.clickable || _ctx.isLink) ? "u-cell--clickable" : "",
      "hover-stay-time": 250,
      onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args))
    }, [
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass(["u-cell__body", [_ctx.center && "u-cell--center", _ctx.size === "large" && "u-cell__body--large"]])
        },
        [
          vue.createElementVNode("view", { class: "u-cell__body__content" }, [
            vue.createElementVNode("view", { class: "u-cell__left-icon-wrap" }, [
              vue.renderSlot(_ctx.$slots, "icon", {}, () => [
                _ctx.icon ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
                  key: 0,
                  name: _ctx.icon,
                  "custom-style": _ctx.iconStyle,
                  size: _ctx.size === "large" ? 22 : 18
                }, null, 8, ["name", "custom-style", "size"])) : vue.createCommentVNode("v-if", true)
              ], true)
            ]),
            vue.createElementVNode("view", { class: "u-cell__title" }, [
              vue.renderSlot(_ctx.$slots, "title", {}, () => [
                _ctx.title ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    class: vue.normalizeClass(["u-cell__title-text", [_ctx.disabled && "u-cell--disabled", _ctx.size === "large" && "u-cell__title-text--large"]]),
                    style: vue.normalizeStyle([$options.titleTextStyle])
                  },
                  vue.toDisplayString(_ctx.title),
                  7
                  /* TEXT, CLASS, STYLE */
                )) : vue.createCommentVNode("v-if", true)
              ], true),
              vue.renderSlot(_ctx.$slots, "label", {}, () => [
                _ctx.label ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    class: vue.normalizeClass(["u-cell__label", [_ctx.disabled && "u-cell--disabled", _ctx.size === "large" && "u-cell__label--large"]])
                  },
                  vue.toDisplayString(_ctx.label),
                  3
                  /* TEXT, CLASS */
                )) : vue.createCommentVNode("v-if", true)
              ], true)
            ])
          ]),
          vue.renderSlot(_ctx.$slots, "value", {}, () => [
            !_ctx.$u.test.empty(_ctx.value) ? (vue.openBlock(), vue.createElementBlock(
              "text",
              {
                key: 0,
                class: vue.normalizeClass(["u-cell__value", [_ctx.disabled && "u-cell--disabled", _ctx.size === "large" && "u-cell__value--large"]])
              },
              vue.toDisplayString(_ctx.value),
              3
              /* TEXT, CLASS */
            )) : vue.createCommentVNode("v-if", true)
          ], true),
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["u-cell__right-icon-wrap", [`u-cell__right-icon-wrap--${_ctx.arrowDirection}`]])
            },
            [
              vue.renderSlot(_ctx.$slots, "right-icon", {}, () => [
                _ctx.isLink ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
                  key: 0,
                  name: _ctx.rightIcon,
                  "custom-style": _ctx.rightIconStyle,
                  color: _ctx.disabled ? "#c8c9cc" : "info",
                  size: _ctx.size === "large" ? 18 : 16
                }, null, 8, ["name", "custom-style", "color", "size"])) : vue.createCommentVNode("v-if", true)
              ], true)
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      ),
      _ctx.border ? (vue.openBlock(), vue.createBlock(_component_u_line, { key: 0 })) : vue.createCommentVNode("v-if", true)
    ], 14, ["hover-class"]);
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["render", _sfc_render$K], ["__scopeId", "data-v-3fd6feca"], ["__file", "D:/study/实训/intelligent_community_app_owner/uni_modules/uview-plus/components/u-cell/u-cell.vue"]]);
  const props$c = {
    props: {
      // 分组标题
      title: {
        type: String,
        default: props$x.cellGroup.title
      },
      // 是否显示外边框
      border: {
        type: Boolean,
        default: props$x.cellGroup.border
      }
    }
  };
  const _sfc_main$K = {
    name: "u-cell-group",
    mixins: [mpMixin, mixin, props$c]
  };
  function _sfc_render$J(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_line = resolveEasycom(vue.resolveDynamicComponent("u-line"), __easycom_1$5);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        style: vue.normalizeStyle([_ctx.$u.addStyle(_ctx.customStyle)]),
        class: vue.normalizeClass([[_ctx.customClass], "u-cell-group"])
      },
      [
        _ctx.title ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "u-cell-group__title"
        }, [
          vue.renderSlot(_ctx.$slots, "title", {}, () => [
            vue.createElementVNode(
              "text",
              { class: "u-cell-group__title__text" },
              vue.toDisplayString(_ctx.title),
              1
              /* TEXT */
            )
          ], true)
        ])) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", { class: "u-cell-group__wrapper" }, [
          _ctx.border ? (vue.openBlock(), vue.createBlock(_component_u_line, { key: 0 })) : vue.createCommentVNode("v-if", true),
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_1$4 = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["render", _sfc_render$J], ["__scopeId", "data-v-014d39dc"], ["__file", "D:/study/实训/intelligent_community_app_owner/uni_modules/uview-plus/components/u-cell-group/u-cell-group.vue"]]);
  const _imports_0$4 = "/static/img/me/house.png";
  const _imports_1$3 = "/static/img/me/park.png";
  const _imports_2$1 = "/static/img/me/car.png";
  const _imports_3$1 = "/static/img/me/bill.png";
  const _sfc_main$J = {
    data() {
      return {
        statusBarHeight: "",
        owner: {
          name: "",
          avatar: ""
        },
        type: 0
        //0未登录 1游客 2 业主
      };
    },
    methods: {
      login() {
        uni.navigateTo({
          url: "/pages/login/login"
        });
      },
      toHome() {
        uni.navigateTo({
          url: "/pages/home/home"
        });
      },
      toPayHistory() {
        uni.navigateTo({
          url: "/pages/pay/pay"
        });
      },
      toMyCar() {
        uni.navigateTo({
          url: "/pages/park/my-car"
        });
      },
      toPark() {
        uni.navigateTo({
          url: "/pages/park/park"
        });
      },
      noServer() {
        this.$refs.uToast.show({
          message: "该功能尚未开放",
          type: "warning",
          position: "top",
          duration: "500"
        });
      }
    },
    onPullDownRefresh() {
      uni.stopPullDownRefresh();
    },
    onShow() {
      this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight + "px";
      this.type = 0;
      const token = uni.getStorageSync("token");
      if (token) {
        this.type = 1;
        const owner = uni.getStorageSync("owner");
        formatAppLog("log", "at pages/tarbar/me/me.vue:126", owner);
        if (owner) {
          this.type = 2;
          this.owner.name = owner.username;
          this.owner.type = owner.avatar;
        }
      }
    },
    mounted() {
    }
  };
  function _sfc_render$I(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_avatar = resolveEasycom(vue.resolveDynamicComponent("u-avatar"), __easycom_0$3);
    const _component_u_col = resolveEasycom(vue.resolveDynamicComponent("u-col"), __easycom_5$1);
    const _component_u_row = resolveEasycom(vue.resolveDynamicComponent("u-row"), __easycom_6);
    const _component_u_cell = resolveEasycom(vue.resolveDynamicComponent("u-cell"), __easycom_0$2);
    const _component_u_cell_group = resolveEasycom(vue.resolveDynamicComponent("u-cell-group"), __easycom_1$4);
    const _component_u_toast = resolveEasycom(vue.resolveDynamicComponent("u-toast"), __easycom_4);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode(
          "view",
          {
            class: "top",
            style: vue.normalizeStyle({ height: $data.statusBarHeight })
          },
          null,
          4
          /* STYLE */
        ),
        vue.createElementVNode("view", { class: "container" }, [
          vue.createElementVNode("view", { class: "blue_circle" }),
          vue.createElementVNode("view", { class: "info_card" }, [
            vue.createVNode(_component_u_avatar, {
              src: $data.owner.avatar,
              size: "120"
            }, null, 8, ["src"]),
            $data.type == 0 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "name",
              onClick: _cache[0] || (_cache[0] = (...args) => $options.login && $options.login(...args))
            }, " 登录/注册 ")) : $data.type == 1 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "name"
            }, " 游客 ")) : (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 2,
                class: "name"
              },
              vue.toDisplayString($data.owner.name),
              1
              /* TEXT */
            )),
            vue.createVNode(_component_u_row, { justify: "around" }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_u_col, {
                  span: "2",
                  align: "center",
                  onClick: $options.toHome
                }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("image", {
                      src: _imports_0$4,
                      mode: ""
                    }),
                    vue.createElementVNode("view", null, " 我的房屋 ")
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["onClick"]),
                vue.createVNode(_component_u_col, {
                  span: "2",
                  align: "center",
                  onClick: $options.toPark
                }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("image", {
                      src: _imports_1$3,
                      mode: ""
                    }),
                    vue.createElementVNode("view", null, " 我的车位 ")
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["onClick"]),
                vue.createVNode(_component_u_col, {
                  span: "2",
                  align: "center",
                  onClick: $options.toMyCar
                }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("image", {
                      src: _imports_2$1,
                      mode: ""
                    }),
                    vue.createElementVNode("view", null, " 我的车辆 ")
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["onClick"]),
                vue.createVNode(_component_u_col, {
                  span: "2",
                  align: "center",
                  onClick: $options.toPayHistory
                }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("image", {
                      src: _imports_3$1,
                      mode: ""
                    }),
                    vue.createElementVNode("view", null, " 我的账单 ")
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["onClick"])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          vue.createVNode(_component_u_cell_group, null, {
            default: vue.withCtx(() => [
              vue.createElementVNode("text", { class: "title" }, "服务工具"),
              vue.createVNode(_component_u_cell, {
                icon: "",
                title: "家庭成员",
                isLink: true,
                url: "/pages/family/family"
              }),
              vue.createVNode(_component_u_cell, {
                icon: "",
                title: "我的访客",
                isLink: true,
                url: "/pages/invitor/myInvitor"
              }),
              vue.createVNode(_component_u_cell, {
                icon: "",
                title: "我的报修",
                isLink: true,
                url: "/pages/fix/fix"
              }),
              vue.createVNode(_component_u_cell, {
                icon: "",
                title: "我的投诉",
                isLink: true,
                onClick: $options.noServer
              }, null, 8, ["onClick"]),
              vue.createVNode(_component_u_cell, {
                icon: "",
                title: "设置",
                isLink: true,
                url: "/pages/setting/setting"
              })
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(
            _component_u_toast,
            { ref: "uToast" },
            null,
            512
            /* NEED_PATCH */
          )
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesTarbarMeMe = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["render", _sfc_render$I], ["__scopeId", "data-v-ed2a0e76"], ["__file", "D:/study/实训/intelligent_community_app_owner/pages/tarbar/me/me.vue"]]);
  const props$b = {
    props: {
      // 绑定的值
      modelValue: {
        type: [String, Number],
        default: props$x.input.value
      },
      // number-数字输入键盘，app-vue下可以输入浮点数，app-nvue和小程序平台下只能输入整数
      // idcard-身份证输入键盘，微信、支付宝、百度、QQ小程序
      // digit-带小数点的数字键盘，App的nvue页面、微信、支付宝、百度、头条、QQ小程序
      // text-文本输入键盘
      type: {
        type: String,
        default: props$x.input.type
      },
      // 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true，
      // 兼容性：微信小程序、百度小程序、字节跳动小程序、QQ小程序
      fixed: {
        type: Boolean,
        default: props$x.input.fixed
      },
      // 是否禁用输入框
      disabled: {
        type: Boolean,
        default: props$x.input.disabled
      },
      // 禁用状态时的背景色
      disabledColor: {
        type: String,
        default: props$x.input.disabledColor
      },
      // 是否显示清除控件
      clearable: {
        type: Boolean,
        default: props$x.input.clearable
      },
      // 是否密码类型
      password: {
        type: Boolean,
        default: props$x.input.password
      },
      // 最大输入长度，设置为 -1 的时候不限制最大长度
      maxlength: {
        type: [String, Number],
        default: props$x.input.maxlength
      },
      // 	输入框为空时的占位符
      placeholder: {
        type: String,
        default: props$x.input.placeholder
      },
      // 指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/
      placeholderClass: {
        type: String,
        default: props$x.input.placeholderClass
      },
      // 指定placeholder的样式
      placeholderStyle: {
        type: [String, Object],
        default: props$x.input.placeholderStyle
      },
      // 是否显示输入字数统计，只在 type ="text"或type ="textarea"时有效
      showWordLimit: {
        type: Boolean,
        default: props$x.input.showWordLimit
      },
      // 设置右下角按钮的文字，有效值：send|search|next|go|done，兼容性详见uni-app文档
      // https://uniapp.dcloud.io/component/input
      // https://uniapp.dcloud.io/component/textarea
      confirmType: {
        type: String,
        default: props$x.input.confirmType
      },
      // 点击键盘右下角按钮时是否保持键盘不收起，H5无效
      confirmHold: {
        type: Boolean,
        default: props$x.input.confirmHold
      },
      // focus时，点击页面的时候不收起键盘，微信小程序有效
      holdKeyboard: {
        type: Boolean,
        default: props$x.input.holdKeyboard
      },
      // 自动获取焦点
      // 在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用组件的 focus()、blur() 方法控制焦点
      focus: {
        type: Boolean,
        default: props$x.input.focus
      },
      // 键盘收起时，是否自动失去焦点，目前仅App3.0.0+有效
      autoBlur: {
        type: Boolean,
        default: props$x.input.autoBlur
      },
      // 是否去掉 iOS 下的默认内边距，仅微信小程序，且type=textarea时有效
      disableDefaultPadding: {
        type: Boolean,
        default: props$x.input.disableDefaultPadding
      },
      // 指定focus时光标的位置
      cursor: {
        type: [String, Number],
        default: props$x.input.cursor
      },
      // 输入框聚焦时底部与键盘的距离
      cursorSpacing: {
        type: [String, Number],
        default: props$x.input.cursorSpacing
      },
      // 光标起始位置，自动聚集时有效，需与selection-end搭配使用
      selectionStart: {
        type: [String, Number],
        default: props$x.input.selectionStart
      },
      // 光标结束位置，自动聚集时有效，需与selection-start搭配使用
      selectionEnd: {
        type: [String, Number],
        default: props$x.input.selectionEnd
      },
      // 键盘弹起时，是否自动上推页面
      adjustPosition: {
        type: Boolean,
        default: props$x.input.adjustPosition
      },
      // 输入框内容对齐方式，可选值为：left|center|right
      inputAlign: {
        type: String,
        default: props$x.input.inputAlign
      },
      // 输入框字体的大小
      fontSize: {
        type: [String, Number],
        default: props$x.input.fontSize
      },
      // 输入框字体颜色
      color: {
        type: String,
        default: props$x.input.color
      },
      // 输入框前置图标
      prefixIcon: {
        type: String,
        default: props$x.input.prefixIcon
      },
      // 前置图标样式，对象或字符串
      prefixIconStyle: {
        type: [String, Object],
        default: props$x.input.prefixIconStyle
      },
      // 输入框后置图标
      suffixIcon: {
        type: String,
        default: props$x.input.suffixIcon
      },
      // 后置图标样式，对象或字符串
      suffixIconStyle: {
        type: [String, Object],
        default: props$x.input.suffixIconStyle
      },
      // 边框类型，surround-四周边框，bottom-底部边框，none-无边框
      border: {
        type: String,
        default: props$x.input.border
      },
      // 是否只读，与disabled不同之处在于disabled会置灰组件，而readonly则不会
      readonly: {
        type: Boolean,
        default: props$x.input.readonly
      },
      // 输入框形状，circle-圆形，square-方形
      shape: {
        type: String,
        default: props$x.input.shape
      },
      // 用于处理或者过滤输入框内容的方法
      formatter: {
        type: [Function, null],
        default: props$x.input.formatter
      },
      // 是否忽略组件内对文本合成系统事件的处理
      ignoreCompositionEvent: {
        type: Boolean,
        default: true
      }
    }
  };
  const _sfc_main$I = {
    name: "u-input",
    mixins: [mpMixin, mixin, props$b],
    data() {
      return {
        // 输入框的值
        innerValue: "",
        // 是否处于获得焦点状态
        focused: false,
        // value是否第一次变化，在watch中，由于加入immediate属性，会在第一次触发，此时不应该认为value发生了变化
        firstChange: true,
        // value绑定值的变化是由内部还是外部引起的
        changeFromInner: false,
        // 过滤处理方法
        innerFormatter: (value2) => value2
      };
    },
    watch: {
      modelValue: {
        immediate: true,
        handler(newVal, oldVal) {
          this.innerValue = newVal;
          this.firstChange = false;
          this.changeFromInner = false;
        }
      }
    },
    computed: {
      // 是否显示清除控件
      isShowClear() {
        const { clearable, readonly, focused, innerValue } = this;
        return !!clearable && !readonly && !!focused && innerValue !== "";
      },
      // 组件的类名
      inputClass() {
        let classes = [], { border, disabled, shape } = this;
        border === "surround" && (classes = classes.concat(["u-border", "u-input--radius"]));
        classes.push(`u-input--${shape}`);
        border === "bottom" && (classes = classes.concat([
          "u-border-bottom",
          "u-input--no-radius"
        ]));
        return classes.join(" ");
      },
      // 组件的样式
      wrapperStyle() {
        const style = {};
        if (this.disabled) {
          style.backgroundColor = this.disabledColor;
        }
        if (this.border === "none") {
          style.padding = "0";
        } else {
          style.paddingTop = "6px";
          style.paddingBottom = "6px";
          style.paddingLeft = "9px";
          style.paddingRight = "9px";
        }
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      },
      // 输入框的样式
      inputStyle() {
        const style = {
          color: this.color,
          fontSize: uni.$u.addUnit(this.fontSize),
          textAlign: this.inputAlign
        };
        return style;
      }
    },
    emits: ["update:modelValue", "focus", "blur", "change", "confirm", "clear", "keyboardheightchange"],
    methods: {
      // 在微信小程序中，不支持将函数当做props参数，故只能通过ref形式调用
      setFormatter(e) {
        this.innerFormatter = e;
      },
      // 当键盘输入时，触发input事件
      onInput(e) {
        let { value: value2 = "" } = e.detail || {};
        const formatter = this.formatter || this.innerFormatter;
        const formatValue = formatter(value2);
        this.innerValue = value2;
        this.$nextTick(() => {
          this.innerValue = formatValue;
          this.valueChange();
        });
      },
      // 输入框失去焦点时触发
      onBlur(event) {
        this.$emit("blur", event.detail.value);
        uni.$u.sleep(50).then(() => {
          this.focused = false;
        });
        uni.$u.formValidate(this, "blur");
      },
      // 输入框聚焦时触发
      onFocus(event) {
        this.focused = true;
        this.$emit("focus");
      },
      // 点击完成按钮时触发
      onConfirm(event) {
        this.$emit("confirm", this.innerValue);
      },
      // 键盘高度发生变化的时候触发此事件
      // 兼容性：微信小程序2.7.0+、App 3.1.0+
      onkeyboardheightchange() {
        this.$emit("keyboardheightchange");
      },
      // 内容发生变化，进行处理
      valueChange() {
        const value2 = this.innerValue;
        this.$nextTick(() => {
          this.$emit("update:modelValue", value2);
          this.changeFromInner = true;
          this.$emit("change", value2);
          uni.$u.formValidate(this, "change");
        });
      },
      // 点击清除控件
      onClear() {
        this.innerValue = "";
        this.$nextTick(() => {
          this.valueChange();
          this.$emit("clear");
        });
      },
      /**
       * 在安卓nvue上，事件无法冒泡
       * 在某些时间，我们希望监听u-from-item的点击事件，此时会导致点击u-form-item内的u-input后
       * 无法触发u-form-item的点击事件，这里通过手动调用u-form-item的方法进行触发
       */
      clickHandler() {
      }
    }
  };
  function _sfc_render$H(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$6);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-input", $options.inputClass]),
        style: vue.normalizeStyle([$options.wrapperStyle])
      },
      [
        vue.createElementVNode("view", { class: "u-input__content" }, [
          _ctx.prefixIcon || _ctx.$slots.prefix ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "u-input__content__prefix-icon"
          }, [
            vue.renderSlot(_ctx.$slots, "prefix", {}, () => [
              vue.createVNode(_component_u_icon, {
                name: _ctx.prefixIcon,
                size: "18",
                customStyle: _ctx.prefixIconStyle
              }, null, 8, ["name", "customStyle"])
            ], true)
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("view", {
            class: "u-input__content__field-wrapper",
            onClick: _cache[5] || (_cache[5] = (...args) => $options.clickHandler && $options.clickHandler(...args))
          }, [
            vue.createCommentVNode(" 根据uni-app的input组件文档，H5和APP中只要声明了password参数(无论true还是false)，type均失效，此时\r\n					为了防止type=number时，又存在password属性，type无效，此时需要设置password为undefined\r\n				 "),
            vue.createElementVNode("input", {
              class: "u-input__content__field-wrapper__field",
              style: vue.normalizeStyle([$options.inputStyle]),
              type: _ctx.type,
              focus: _ctx.focus,
              cursor: _ctx.cursor,
              value: $data.innerValue,
              "auto-blur": _ctx.autoBlur,
              disabled: _ctx.disabled || _ctx.readonly,
              maxlength: _ctx.maxlength,
              placeholder: _ctx.placeholder,
              "placeholder-style": _ctx.placeholderStyle,
              "placeholder-class": _ctx.placeholderClass,
              "confirm-type": _ctx.confirmType,
              "confirm-hold": _ctx.confirmHold,
              "hold-keyboard": _ctx.holdKeyboard,
              "cursor-spacing": _ctx.cursorSpacing,
              "adjust-position": _ctx.adjustPosition,
              "selection-end": _ctx.selectionEnd,
              "selection-start": _ctx.selectionStart,
              password: _ctx.password || _ctx.type === "password" || void 0,
              ignoreCompositionEvent: _ctx.ignoreCompositionEvent,
              onInput: _cache[0] || (_cache[0] = (...args) => $options.onInput && $options.onInput(...args)),
              onBlur: _cache[1] || (_cache[1] = (...args) => $options.onBlur && $options.onBlur(...args)),
              onFocus: _cache[2] || (_cache[2] = (...args) => $options.onFocus && $options.onFocus(...args)),
              onConfirm: _cache[3] || (_cache[3] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
              onKeyboardheightchange: _cache[4] || (_cache[4] = (...args) => $options.onkeyboardheightchange && $options.onkeyboardheightchange(...args))
            }, null, 44, ["type", "focus", "cursor", "value", "auto-blur", "disabled", "maxlength", "placeholder", "placeholder-style", "placeholder-class", "confirm-type", "confirm-hold", "hold-keyboard", "cursor-spacing", "adjust-position", "selection-end", "selection-start", "password", "ignoreCompositionEvent"])
          ]),
          $options.isShowClear ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "u-input__content__clear",
            onClick: _cache[6] || (_cache[6] = (...args) => $options.onClear && $options.onClear(...args))
          }, [
            vue.createVNode(_component_u_icon, {
              name: "close",
              size: "11",
              color: "#ffffff",
              customStyle: "line-height: 12px"
            })
          ])) : vue.createCommentVNode("v-if", true),
          _ctx.suffixIcon || _ctx.$slots.suffix ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
            class: "u-input__content__subfix-icon"
          }, [
            vue.renderSlot(_ctx.$slots, "suffix", {}, () => [
              vue.createVNode(_component_u_icon, {
                name: _ctx.suffixIcon,
                size: "18",
                customStyle: _ctx.suffixIconStyle
              }, null, 8, ["name", "customStyle"])
            ], true)
          ])) : vue.createCommentVNode("v-if", true)
        ])
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["render", _sfc_render$H], ["__scopeId", "data-v-df79975b"], ["__file", "D:/study/实训/intelligent_community_app_owner/uni_modules/uview-plus/components/u-input/u-input.vue"]]);
  const props$a = {
    props: {
      // input的label提示语
      label: {
        type: String,
        default: props$x.formItem.label
      },
      // 绑定的值
      prop: {
        type: String,
        default: props$x.formItem.prop
      },
      // 是否显示表单域的下划线边框
      borderBottom: {
        type: [String, Boolean],
        default: props$x.formItem.borderBottom
      },
      // label的宽度，单位px
      labelWidth: {
        type: [String, Number],
        default: props$x.formItem.labelWidth
      },
      // 右侧图标
      rightIcon: {
        type: String,
        default: props$x.formItem.rightIcon
      },
      // 左侧图标
      leftIcon: {
        type: String,
        default: props$x.formItem.leftIcon
      },
      // 是否显示左边的必填星号，只作显示用，具体校验必填的逻辑，请在rules中配置
      required: {
        type: Boolean,
        default: props$x.formItem.required
      },
      leftIconStyle: {
        type: [String, Object],
        default: props$x.formItem.leftIconStyle
      }
    }
  };
  const _sfc_main$H = {
    name: "u-form-item",
    mixins: [mpMixin, mixin, props$a],
    data() {
      return {
        // 错误提示语
        message: "",
        parentData: {
          // 提示文本的位置
          labelPosition: "left",
          // 提示文本对齐方式
          labelAlign: "left",
          // 提示文本的样式
          labelStyle: {},
          // 提示文本的宽度
          labelWidth: 45,
          // 错误提示方式
          errorType: "message"
        }
      };
    },
    // 组件创建完成时，将当前实例保存到u-form中
    computed: {
      propsLine() {
        return uni.$u.props.line;
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        this.updateParentData();
        if (!this.parent) {
          uni.$u.error("u-form-item需要结合u-form组件使用");
        }
      },
      // 获取父组件的参数
      updateParentData() {
        this.getParentData("u-form");
      },
      // 移除u-form-item的校验结果
      clearValidate() {
        this.message = null;
      },
      // 清空当前的组件的校验结果，并重置为初始值
      resetField() {
        const value2 = uni.$u.getProperty(this.parent.originalModel, this.prop);
        uni.$u.setProperty(this.parent.model, this.prop, value2);
        this.message = null;
      },
      // 点击组件
      clickHandler() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$G(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$6);
    const _component_u_line = resolveEasycom(vue.resolveDynamicComponent("u-line"), __easycom_1$5);
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-form-item" }, [
      vue.createElementVNode(
        "view",
        {
          class: "u-form-item__body",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args)),
          style: vue.normalizeStyle([_ctx.$u.addStyle(_ctx.customStyle), {
            flexDirection: $data.parentData.labelPosition === "left" ? "row" : "column"
          }])
        },
        [
          vue.createCommentVNode(' 微信小程序中，将一个参数设置空字符串，结果会变成字符串"true" '),
          vue.renderSlot(_ctx.$slots, "label", {}, () => [
            vue.createCommentVNode(" {{required}} "),
            _ctx.required || _ctx.leftIcon || _ctx.label ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 0,
                class: "u-form-item__body__left",
                style: vue.normalizeStyle({
                  width: _ctx.$u.addUnit(_ctx.labelWidth || $data.parentData.labelWidth),
                  marginBottom: $data.parentData.labelPosition === "left" ? 0 : "5px"
                })
              },
              [
                vue.createCommentVNode(" 为了块对齐 "),
                vue.createElementVNode("view", { class: "u-form-item__body__left__content" }, [
                  vue.createCommentVNode(" nvue不支持伪元素before "),
                  _ctx.required ? (vue.openBlock(), vue.createElementBlock("text", {
                    key: 0,
                    class: "u-form-item__body__left__content__required"
                  }, "*")) : vue.createCommentVNode("v-if", true),
                  _ctx.leftIcon ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 1,
                    class: "u-form-item__body__left__content__icon"
                  }, [
                    vue.createVNode(_component_u_icon, {
                      name: _ctx.leftIcon,
                      "custom-style": _ctx.leftIconStyle
                    }, null, 8, ["name", "custom-style"])
                  ])) : vue.createCommentVNode("v-if", true),
                  vue.createElementVNode(
                    "text",
                    {
                      class: "u-form-item__body__left__content__label",
                      style: vue.normalizeStyle([$data.parentData.labelStyle, {
                        justifyContent: $data.parentData.labelAlign === "left" ? "flex-start" : $data.parentData.labelAlign === "center" ? "center" : "flex-end"
                      }])
                    },
                    vue.toDisplayString(_ctx.label),
                    5
                    /* TEXT, STYLE */
                  )
                ])
              ],
              4
              /* STYLE */
            )) : vue.createCommentVNode("v-if", true)
          ], true),
          vue.createElementVNode("view", { class: "u-form-item__body__right" }, [
            vue.createElementVNode("view", { class: "u-form-item__body__right__content" }, [
              vue.createElementVNode("view", { class: "u-form-item__body__right__content__slot" }, [
                vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ]),
              _ctx.$slots.right ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "item__body__right__content__icon"
              }, [
                vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
              ])) : vue.createCommentVNode("v-if", true)
            ])
          ])
        ],
        4
        /* STYLE */
      ),
      vue.renderSlot(_ctx.$slots, "error", {}, () => [
        !!$data.message && $data.parentData.errorType === "message" ? (vue.openBlock(), vue.createElementBlock(
          "text",
          {
            key: 0,
            class: "u-form-item__body__right__message",
            style: vue.normalizeStyle({
              marginLeft: _ctx.$u.addUnit($data.parentData.labelPosition === "top" ? 0 : _ctx.labelWidth || $data.parentData.labelWidth)
            })
          },
          vue.toDisplayString($data.message),
          5
          /* TEXT, STYLE */
        )) : vue.createCommentVNode("v-if", true)
      ], true),
      _ctx.borderBottom ? (vue.openBlock(), vue.createBlock(_component_u_line, {
        key: 0,
        color: $data.message && $data.parentData.errorType === "border-bottom" ? _ctx.$u.color.error : $options.propsLine.color,
        customStyle: `margin-top: ${$data.message && $data.parentData.errorType === "message" ? "5px" : 0}`
      }, null, 8, ["color", "customStyle"])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_2$3 = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["render", _sfc_render$G], ["__scopeId", "data-v-42bac3de"], ["__file", "D:/study/实训/intelligent_community_app_owner/uni_modules/uview-plus/components/u-form-item/u-form-item.vue"]]);
  const props$9 = {
    props: {
      // 当前form的需要验证字段的集合
      model: {
        type: Object,
        default: props$x.form.model
      },
      // 验证规则
      rules: {
        type: [Object, Function, Array],
        default: props$x.form.rules
      },
      // 有错误时的提示方式，message-提示信息，toast-进行toast提示
      // border-bottom-下边框呈现红色，none-无提示
      errorType: {
        type: String,
        default: props$x.form.errorType
      },
      // 是否显示表单域的下划线边框
      borderBottom: {
        type: Boolean,
        default: props$x.form.borderBottom
      },
      // label的位置，left-左边，top-上边
      labelPosition: {
        type: String,
        default: props$x.form.labelPosition
      },
      // label的宽度，单位px
      labelWidth: {
        type: [String, Number],
        default: props$x.form.labelWidth
      },
      // lable字体的对齐方式
      labelAlign: {
        type: String,
        default: props$x.form.labelAlign
      },
      // lable的样式，对象形式
      labelStyle: {
        type: Object,
        default: props$x.form.labelStyle
      }
    }
  };
  const formatRegExp = /%[sdj%]/g;
  let warning = function warning2() {
  };
  if (typeof process !== "undefined" && process.env && true && typeof window !== "undefined" && typeof document !== "undefined") {
    warning = function warning2(type2, errors) {
      if (typeof console !== "undefined" && console.warn) {
        if (errors.every((e) => typeof e === "string")) {
          formatAppLog("warn", "at uni_modules/uview-plus/libs/util/async-validator.js:28", type2, errors);
        }
      }
    };
  }
  function convertFieldsError(errors) {
    if (!errors || !errors.length)
      return null;
    const fields = {};
    errors.forEach((error2) => {
      const { field } = error2;
      fields[field] = fields[field] || [];
      fields[field].push(error2);
    });
    return fields;
  }
  function format() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    let i2 = 1;
    const f = args[0];
    const len = args.length;
    if (typeof f === "function") {
      return f.apply(null, args.slice(1));
    }
    if (typeof f === "string") {
      let str = String(f).replace(formatRegExp, (x) => {
        if (x === "%%") {
          return "%";
        }
        if (i2 >= len) {
          return x;
        }
        switch (x) {
          case "%s":
            return String(args[i2++]);
          case "%d":
            return Number(args[i2++]);
          case "%j":
            try {
              return JSON.stringify(args[i2++]);
            } catch (_) {
              return "[Circular]";
            }
            break;
          default:
            return x;
        }
      });
      for (let arg = args[i2]; i2 < len; arg = args[++i2]) {
        str += ` ${arg}`;
      }
      return str;
    }
    return f;
  }
  function isNativeStringType(type2) {
    return type2 === "string" || type2 === "url" || type2 === "hex" || type2 === "email" || type2 === "pattern";
  }
  function isEmptyValue(value2, type2) {
    if (value2 === void 0 || value2 === null) {
      return true;
    }
    if (type2 === "array" && Array.isArray(value2) && !value2.length) {
      return true;
    }
    if (isNativeStringType(type2) && typeof value2 === "string" && !value2) {
      return true;
    }
    return false;
  }
  function asyncParallelArray(arr, func2, callback) {
    const results = [];
    let total = 0;
    const arrLength = arr.length;
    function count(errors) {
      results.push.apply(results, errors);
      total++;
      if (total === arrLength) {
        callback(results);
      }
    }
    arr.forEach((a) => {
      func2(a, count);
    });
  }
  function asyncSerialArray(arr, func2, callback) {
    let index2 = 0;
    const arrLength = arr.length;
    function next(errors) {
      if (errors && errors.length) {
        callback(errors);
        return;
      }
      const original = index2;
      index2 += 1;
      if (original < arrLength) {
        func2(arr[original], next);
      } else {
        callback([]);
      }
    }
    next([]);
  }
  function flattenObjArr(objArr) {
    const ret = [];
    Object.keys(objArr).forEach((k) => {
      ret.push.apply(ret, objArr[k]);
    });
    return ret;
  }
  function asyncMap(objArr, option, func2, callback) {
    if (option.first) {
      const _pending = new Promise((resolve, reject) => {
        const next = function next2(errors) {
          callback(errors);
          return errors.length ? reject({
            errors,
            fields: convertFieldsError(errors)
          }) : resolve();
        };
        const flattenArr = flattenObjArr(objArr);
        asyncSerialArray(flattenArr, func2, next);
      });
      _pending.catch((e) => e);
      return _pending;
    }
    let firstFields = option.firstFields || [];
    if (firstFields === true) {
      firstFields = Object.keys(objArr);
    }
    const objArrKeys = Object.keys(objArr);
    const objArrLength = objArrKeys.length;
    let total = 0;
    const results = [];
    const pending = new Promise((resolve, reject) => {
      const next = function next2(errors) {
        results.push.apply(results, errors);
        total++;
        if (total === objArrLength) {
          callback(results);
          return results.length ? reject({
            errors: results,
            fields: convertFieldsError(results)
          }) : resolve();
        }
      };
      if (!objArrKeys.length) {
        callback(results);
        resolve();
      }
      objArrKeys.forEach((key) => {
        const arr = objArr[key];
        if (firstFields.indexOf(key) !== -1) {
          asyncSerialArray(arr, func2, next);
        } else {
          asyncParallelArray(arr, func2, next);
        }
      });
    });
    pending.catch((e) => e);
    return pending;
  }
  function complementError(rule) {
    return function(oe) {
      if (oe && oe.message) {
        oe.field = oe.field || rule.fullField;
        return oe;
      }
      return {
        message: typeof oe === "function" ? oe() : oe,
        field: oe.field || rule.fullField
      };
    };
  }
  function deepMerge$2(target, source) {
    if (source) {
      for (const s in source) {
        if (source.hasOwnProperty(s)) {
          const value2 = source[s];
          if (typeof value2 === "object" && typeof target[s] === "object") {
            target[s] = { ...target[s], ...value2 };
          } else {
            target[s] = value2;
          }
        }
      }
    }
    return target;
  }
  function required(rule, value2, source, errors, options, type2) {
    if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value2, type2 || rule.type))) {
      errors.push(format(options.messages.required, rule.fullField));
    }
  }
  function whitespace(rule, value2, source, errors, options) {
    if (/^\s+$/.test(value2) || value2 === "") {
      errors.push(format(options.messages.whitespace, rule.fullField));
    }
  }
  const pattern = {
    // http://emailregex.com/
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    url: new RegExp(
      "^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",
      "i"
    ),
    hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
  };
  var types = {
    integer: function integer2(value2) {
      return /^(-)?\d+$/.test(value2);
    },
    float: function float(value2) {
      return /^(-)?\d+(\.\d+)?$/.test(value2);
    },
    array: function array2(value2) {
      return Array.isArray(value2);
    },
    regexp: function regexp2(value2) {
      if (value2 instanceof RegExp) {
        return true;
      }
      try {
        return !!new RegExp(value2);
      } catch (e) {
        return false;
      }
    },
    date: function date2(value2) {
      return typeof value2.getTime === "function" && typeof value2.getMonth === "function" && typeof value2.getYear === "function";
    },
    number: function number2(value2) {
      if (isNaN(value2)) {
        return false;
      }
      return typeof +value2 === "number";
    },
    object: function object2(value2) {
      return typeof value2 === "object" && !types.array(value2);
    },
    method: function method2(value2) {
      return typeof value2 === "function";
    },
    email: function email2(value2) {
      return typeof value2 === "string" && !!value2.match(pattern.email) && value2.length < 255;
    },
    url: function url2(value2) {
      return typeof value2 === "string" && !!value2.match(pattern.url);
    },
    hex: function hex(value2) {
      return typeof value2 === "string" && !!value2.match(pattern.hex);
    }
  };
  function type(rule, value2, source, errors, options) {
    if (rule.required && value2 === void 0) {
      required(rule, value2, source, errors, options);
      return;
    }
    const custom = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"];
    const ruleType = rule.type;
    if (custom.indexOf(ruleType) > -1) {
      if (!types[ruleType](value2)) {
        errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
      }
    } else if (ruleType && typeof value2 !== rule.type) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    }
  }
  function range$2(rule, value2, source, errors, options) {
    const len = typeof rule.len === "number";
    const min = typeof rule.min === "number";
    const max = typeof rule.max === "number";
    const spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    let val = value2;
    let key = null;
    const num = typeof value2 === "number";
    const str = typeof value2 === "string";
    const arr = Array.isArray(value2);
    if (num) {
      key = "number";
    } else if (str) {
      key = "string";
    } else if (arr) {
      key = "array";
    }
    if (!key) {
      return false;
    }
    if (arr) {
      val = value2.length;
    }
    if (str) {
      val = value2.replace(spRegexp, "_").length;
    }
    if (len) {
      if (val !== rule.len) {
        errors.push(format(options.messages[key].len, rule.fullField, rule.len));
      }
    } else if (min && !max && val < rule.min) {
      errors.push(format(options.messages[key].min, rule.fullField, rule.min));
    } else if (max && !min && val > rule.max) {
      errors.push(format(options.messages[key].max, rule.fullField, rule.max));
    } else if (min && max && (val < rule.min || val > rule.max)) {
      errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
    }
  }
  const ENUM = "enum";
  function enumerable(rule, value2, source, errors, options) {
    rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
    if (rule[ENUM].indexOf(value2) === -1) {
      errors.push(format(options.messages[ENUM], rule.fullField, rule[ENUM].join(", ")));
    }
  }
  function pattern$1(rule, value2, source, errors, options) {
    if (rule.pattern) {
      if (rule.pattern instanceof RegExp) {
        rule.pattern.lastIndex = 0;
        if (!rule.pattern.test(value2)) {
          errors.push(format(options.messages.pattern.mismatch, rule.fullField, value2, rule.pattern));
        }
      } else if (typeof rule.pattern === "string") {
        const _pattern = new RegExp(rule.pattern);
        if (!_pattern.test(value2)) {
          errors.push(format(options.messages.pattern.mismatch, rule.fullField, value2, rule.pattern));
        }
      }
    }
  }
  const rules = {
    required,
    whitespace,
    type,
    range: range$2,
    enum: enumerable,
    pattern: pattern$1
  };
  function string$1(rule, value2, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value2, "string") && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options, "string");
      if (!isEmptyValue(value2, "string")) {
        rules.type(rule, value2, source, errors, options);
        rules.range(rule, value2, source, errors, options);
        rules.pattern(rule, value2, source, errors, options);
        if (rule.whitespace === true) {
          rules.whitespace(rule, value2, source, errors, options);
        }
      }
    }
    callback(errors);
  }
  function method(rule, value2, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value2) && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options);
      if (value2 !== void 0) {
        rules.type(rule, value2, source, errors, options);
      }
    }
    callback(errors);
  }
  function number$1(rule, value2, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (value2 === "") {
        value2 = void 0;
      }
      if (isEmptyValue(value2) && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options);
      if (value2 !== void 0) {
        rules.type(rule, value2, source, errors, options);
        rules.range(rule, value2, source, errors, options);
      }
    }
    callback(errors);
  }
  function _boolean(rule, value2, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value2) && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options);
      if (value2 !== void 0) {
        rules.type(rule, value2, source, errors, options);
      }
    }
    callback(errors);
  }
  function regexp(rule, value2, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value2) && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options);
      if (!isEmptyValue(value2)) {
        rules.type(rule, value2, source, errors, options);
      }
    }
    callback(errors);
  }
  function integer(rule, value2, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value2) && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options);
      if (value2 !== void 0) {
        rules.type(rule, value2, source, errors, options);
        rules.range(rule, value2, source, errors, options);
      }
    }
    callback(errors);
  }
  function floatFn(rule, value2, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value2) && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options);
      if (value2 !== void 0) {
        rules.type(rule, value2, source, errors, options);
        rules.range(rule, value2, source, errors, options);
      }
    }
    callback(errors);
  }
  function array$1(rule, value2, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value2, "array") && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options, "array");
      if (!isEmptyValue(value2, "array")) {
        rules.type(rule, value2, source, errors, options);
        rules.range(rule, value2, source, errors, options);
      }
    }
    callback(errors);
  }
  function object$1(rule, value2, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value2) && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options);
      if (value2 !== void 0) {
        rules.type(rule, value2, source, errors, options);
      }
    }
    callback(errors);
  }
  const ENUM$1 = "enum";
  function enumerable$1(rule, value2, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value2) && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options);
      if (value2 !== void 0) {
        rules[ENUM$1](rule, value2, source, errors, options);
      }
    }
    callback(errors);
  }
  function pattern$2(rule, value2, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value2, "string") && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options);
      if (!isEmptyValue(value2, "string")) {
        rules.pattern(rule, value2, source, errors, options);
      }
    }
    callback(errors);
  }
  function date$1(rule, value2, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value2) && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options);
      if (!isEmptyValue(value2)) {
        let dateObject;
        if (typeof value2 === "number") {
          dateObject = new Date(value2);
        } else {
          dateObject = value2;
        }
        rules.type(rule, dateObject, source, errors, options);
        if (dateObject) {
          rules.range(rule, dateObject.getTime(), source, errors, options);
        }
      }
    }
    callback(errors);
  }
  function required$1(rule, value2, callback, source, options) {
    const errors = [];
    const type2 = Array.isArray(value2) ? "array" : typeof value2;
    rules.required(rule, value2, source, errors, options, type2);
    callback(errors);
  }
  function type$1(rule, value2, callback, source, options) {
    const ruleType = rule.type;
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value2, ruleType) && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options, ruleType);
      if (!isEmptyValue(value2, ruleType)) {
        rules.type(rule, value2, source, errors, options);
      }
    }
    callback(errors);
  }
  function any(rule, value2, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value2) && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options);
    }
    callback(errors);
  }
  const validators = {
    string: string$1,
    method,
    number: number$1,
    boolean: _boolean,
    regexp,
    integer,
    float: floatFn,
    array: array$1,
    object: object$1,
    enum: enumerable$1,
    pattern: pattern$2,
    date: date$1,
    url: type$1,
    hex: type$1,
    email: type$1,
    required: required$1,
    any
  };
  function newMessages() {
    return {
      default: "Validation error on field %s",
      required: "%s is required",
      enum: "%s must be one of %s",
      whitespace: "%s cannot be empty",
      date: {
        format: "%s date %s is invalid for format %s",
        parse: "%s date could not be parsed, %s is invalid ",
        invalid: "%s date %s is invalid"
      },
      types: {
        string: "%s is not a %s",
        method: "%s is not a %s (function)",
        array: "%s is not an %s",
        object: "%s is not an %s",
        number: "%s is not a %s",
        date: "%s is not a %s",
        boolean: "%s is not a %s",
        integer: "%s is not an %s",
        float: "%s is not a %s",
        regexp: "%s is not a valid %s",
        email: "%s is not a valid %s",
        url: "%s is not a valid %s",
        hex: "%s is not a valid %s"
      },
      string: {
        len: "%s must be exactly %s characters",
        min: "%s must be at least %s characters",
        max: "%s cannot be longer than %s characters",
        range: "%s must be between %s and %s characters"
      },
      number: {
        len: "%s must equal %s",
        min: "%s cannot be less than %s",
        max: "%s cannot be greater than %s",
        range: "%s must be between %s and %s"
      },
      array: {
        len: "%s must be exactly %s in length",
        min: "%s cannot be less than %s in length",
        max: "%s cannot be greater than %s in length",
        range: "%s must be between %s and %s in length"
      },
      pattern: {
        mismatch: "%s value %s does not match pattern %s"
      },
      clone: function clone2() {
        const cloned = JSON.parse(JSON.stringify(this));
        cloned.clone = this.clone;
        return cloned;
      }
    };
  }
  const messages = newMessages();
  function Schema(descriptor) {
    this.rules = null;
    this._messages = messages;
    this.define(descriptor);
  }
  Schema.prototype = {
    messages: function messages2(_messages) {
      if (_messages) {
        this._messages = deepMerge$2(newMessages(), _messages);
      }
      return this._messages;
    },
    define: function define(rules2) {
      if (!rules2) {
        throw new Error("Cannot configure a schema with no rules");
      }
      if (typeof rules2 !== "object" || Array.isArray(rules2)) {
        throw new Error("Rules must be an object");
      }
      this.rules = {};
      let z;
      let item;
      for (z in rules2) {
        if (rules2.hasOwnProperty(z)) {
          item = rules2[z];
          this.rules[z] = Array.isArray(item) ? item : [item];
        }
      }
    },
    validate: function validate(source_, o, oc) {
      const _this = this;
      if (o === void 0) {
        o = {};
      }
      if (oc === void 0) {
        oc = function oc2() {
        };
      }
      let source = source_;
      let options = o;
      let callback = oc;
      if (typeof options === "function") {
        callback = options;
        options = {};
      }
      if (!this.rules || Object.keys(this.rules).length === 0) {
        if (callback) {
          callback();
        }
        return Promise.resolve();
      }
      function complete(results) {
        let i2;
        let errors = [];
        let fields = {};
        function add(e) {
          if (Array.isArray(e)) {
            let _errors;
            errors = (_errors = errors).concat.apply(_errors, e);
          } else {
            errors.push(e);
          }
        }
        for (i2 = 0; i2 < results.length; i2++) {
          add(results[i2]);
        }
        if (!errors.length) {
          errors = null;
          fields = null;
        } else {
          fields = convertFieldsError(errors);
        }
        callback(errors, fields);
      }
      if (options.messages) {
        let messages$1 = this.messages();
        if (messages$1 === messages) {
          messages$1 = newMessages();
        }
        deepMerge$2(messages$1, options.messages);
        options.messages = messages$1;
      } else {
        options.messages = this.messages();
      }
      let arr;
      let value2;
      const series = {};
      const keys = options.keys || Object.keys(this.rules);
      keys.forEach((z) => {
        arr = _this.rules[z];
        value2 = source[z];
        arr.forEach((r) => {
          let rule = r;
          if (typeof rule.transform === "function") {
            if (source === source_) {
              source = { ...source };
            }
            value2 = source[z] = rule.transform(value2);
          }
          if (typeof rule === "function") {
            rule = {
              validator: rule
            };
          } else {
            rule = { ...rule };
          }
          rule.validator = _this.getValidationMethod(rule);
          rule.field = z;
          rule.fullField = rule.fullField || z;
          rule.type = _this.getType(rule);
          if (!rule.validator) {
            return;
          }
          series[z] = series[z] || [];
          series[z].push({
            rule,
            value: value2,
            source,
            field: z
          });
        });
      });
      const errorFields = {};
      return asyncMap(series, options, (data, doIt) => {
        const { rule } = data;
        let deep = (rule.type === "object" || rule.type === "array") && (typeof rule.fields === "object" || typeof rule.defaultField === "object");
        deep = deep && (rule.required || !rule.required && data.value);
        rule.field = data.field;
        function addFullfield(key, schema) {
          return { ...schema, fullField: `${rule.fullField}.${key}` };
        }
        function cb(e) {
          if (e === void 0) {
            e = [];
          }
          let errors = e;
          if (!Array.isArray(errors)) {
            errors = [errors];
          }
          if (!options.suppressWarning && errors.length) {
            Schema.warning("async-validator:", errors);
          }
          if (errors.length && rule.message) {
            errors = [].concat(rule.message);
          }
          errors = errors.map(complementError(rule));
          if (options.first && errors.length) {
            errorFields[rule.field] = 1;
            return doIt(errors);
          }
          if (!deep) {
            doIt(errors);
          } else {
            if (rule.required && !data.value) {
              if (rule.message) {
                errors = [].concat(rule.message).map(complementError(rule));
              } else if (options.error) {
                errors = [options.error(rule, format(options.messages.required, rule.field))];
              } else {
                errors = [];
              }
              return doIt(errors);
            }
            let fieldsSchema = {};
            if (rule.defaultField) {
              for (const k in data.value) {
                if (data.value.hasOwnProperty(k)) {
                  fieldsSchema[k] = rule.defaultField;
                }
              }
            }
            fieldsSchema = { ...fieldsSchema, ...data.rule.fields };
            for (const f in fieldsSchema) {
              if (fieldsSchema.hasOwnProperty(f)) {
                const fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
                fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
              }
            }
            const schema = new Schema(fieldsSchema);
            schema.messages(options.messages);
            if (data.rule.options) {
              data.rule.options.messages = options.messages;
              data.rule.options.error = options.error;
            }
            schema.validate(data.value, data.rule.options || options, (errs) => {
              const finalErrors = [];
              if (errors && errors.length) {
                finalErrors.push.apply(finalErrors, errors);
              }
              if (errs && errs.length) {
                finalErrors.push.apply(finalErrors, errs);
              }
              doIt(finalErrors.length ? finalErrors : null);
            });
          }
        }
        let res;
        if (rule.asyncValidator) {
          res = rule.asyncValidator(rule, data.value, cb, data.source, options);
        } else if (rule.validator) {
          res = rule.validator(rule, data.value, cb, data.source, options);
          if (res === true) {
            cb();
          } else if (res === false) {
            cb(rule.message || `${rule.field} fails`);
          } else if (res instanceof Array) {
            cb(res);
          } else if (res instanceof Error) {
            cb(res.message);
          }
        }
        if (res && res.then) {
          res.then(() => cb(), (e) => cb(e));
        }
      }, (results) => {
        complete(results);
      });
    },
    getType: function getType(rule) {
      if (rule.type === void 0 && rule.pattern instanceof RegExp) {
        rule.type = "pattern";
      }
      if (typeof rule.validator !== "function" && rule.type && !validators.hasOwnProperty(rule.type)) {
        throw new Error(format("Unknown rule type %s", rule.type));
      }
      return rule.type || "string";
    },
    getValidationMethod: function getValidationMethod(rule) {
      if (typeof rule.validator === "function") {
        return rule.validator;
      }
      const keys = Object.keys(rule);
      const messageIndex = keys.indexOf("message");
      if (messageIndex !== -1) {
        keys.splice(messageIndex, 1);
      }
      if (keys.length === 1 && keys[0] === "required") {
        return validators.required;
      }
      return validators[this.getType(rule)] || false;
    }
  };
  Schema.register = function register(type2, validator2) {
    if (typeof validator2 !== "function") {
      throw new Error("Cannot register a validator by type, validator is not a function");
    }
    validators[type2] = validator2;
  };
  Schema.warning = warning;
  Schema.messages = messages;
  Schema.warning = function() {
  };
  const _sfc_main$G = {
    name: "u-form",
    mixins: [mpMixin, mixin, props$9],
    provide() {
      return {
        uForm: this
      };
    },
    data() {
      return {
        formRules: {},
        // 规则校验器
        validator: {},
        // 原始的model快照，用于resetFields方法重置表单时使用
        originalModel: null
      };
    },
    watch: {
      // 监听规则的变化
      rules: {
        immediate: true,
        handler(n) {
          this.setRules(n);
        }
      },
      // 监听属性的变化，通知子组件u-form-item重新获取信息
      propsChange(n) {
        var _a;
        if ((_a = this.children) == null ? void 0 : _a.length) {
          this.children.map((child) => {
            typeof child.updateParentData == "function" && child.updateParentData();
          });
        }
      },
      // 监听model的初始值作为重置表单的快照
      model: {
        immediate: true,
        handler(n) {
          if (!this.originalModel) {
            this.originalModel = uni.$u.deepClone(n);
          }
        }
      }
    },
    computed: {
      propsChange() {
        return [
          this.errorType,
          this.borderBottom,
          this.labelPosition,
          this.labelWidth,
          this.labelAlign,
          this.labelStyle
        ];
      }
    },
    created() {
      this.children = [];
    },
    methods: {
      // 手动设置校验的规则，如果规则中有函数的话，微信小程序中会过滤掉，所以只能手动调用设置规则
      setRules(rules2) {
        if (Object.keys(rules2).length === 0)
          return;
        if (Object.keys(this.model).length === 0) {
          uni.$u.error("设置rules，model必须设置！如果已经设置，请刷新页面。");
          return;
        }
        this.formRules = rules2;
        this.validator = new Schema(rules2);
      },
      // 清空所有u-form-item组件的内容，本质上是调用了u-form-item组件中的resetField()方法
      resetFields() {
        this.resetModel();
      },
      // 重置model为初始值的快照
      resetModel(obj) {
        this.children.map((child) => {
          const prop = child == null ? void 0 : child.prop;
          const value2 = uni.$u.getProperty(this.originalModel, prop);
          uni.$u.setProperty(this.model, prop, value2);
        });
      },
      // 清空校验结果
      clearValidate(props2) {
        props2 = [].concat(props2);
        this.children.map((child) => {
          if (props2[0] === void 0 || props2.includes(child.prop)) {
            child.message = null;
          }
        });
      },
      // 对部分表单字段进行校验
      async validateField(value2, callback, event = null) {
        this.$nextTick(() => {
          const errorsRes = [];
          value2 = [].concat(value2);
          this.children.map((child) => {
            const childErrors = [];
            if (value2.includes(child.prop)) {
              const propertyVal = uni.$u.getProperty(
                this.model,
                child.prop
              );
              const propertyChain = child.prop.split(".");
              const propertyName = propertyChain[propertyChain.length - 1];
              const rule = this.formRules[child.prop];
              if (!rule)
                return;
              const rules2 = [].concat(rule);
              for (let i2 = 0; i2 < rules2.length; i2++) {
                const ruleItem = rules2[i2];
                const trigger = [].concat(ruleItem == null ? void 0 : ruleItem.trigger);
                if (event && !trigger.includes(event))
                  continue;
                const validator2 = new Schema({
                  [propertyName]: ruleItem
                });
                validator2.validate(
                  {
                    [propertyName]: propertyVal
                  },
                  (errors, fields) => {
                    var _a;
                    if (uni.$u.test.array(errors)) {
                      errorsRes.push(...errors);
                      childErrors.push(...errors);
                    }
                    child.message = ((_a = childErrors[0]) == null ? void 0 : _a.message) ?? null;
                  }
                );
              }
            }
          });
          typeof callback === "function" && callback(errorsRes);
        });
      },
      // 校验全部数据
      validate(callback) {
        if (Object.keys(this.formRules).length === 0) {
          uni.$u.error("未设置rules，请看文档说明！如果已经设置，请刷新页面。");
          return;
        }
        return new Promise((resolve, reject) => {
          this.$nextTick(() => {
            const formItemProps = this.children.map(
              (item) => item.prop
            );
            this.validateField(formItemProps, (errors) => {
              if (errors.length) {
                this.errorType === "toast" && uni.$u.toast(errors[0].message);
                reject(errors);
              } else {
                resolve(true);
              }
            });
          });
        });
      }
    }
  };
  function _sfc_render$F(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-form" }, [
      vue.renderSlot(_ctx.$slots, "default")
    ]);
  }
  const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["render", _sfc_render$F], ["__file", "D:/study/实训/intelligent_community_app_owner/uni_modules/uview-plus/components/u-form/u-form.vue"]]);
  function getCodeByPhone(phone) {
    return service.post("/app/getCode", { phone });
  }
  function loginByCode(phone, code2, type2 = 0) {
    return service.post("/app/login", {
      type: type2,
      phone,
      code: code2
    });
  }
  function loginByPassword(phone, password, type2 = 0) {
    return service.post("/app/login", {
      type: type2,
      phone,
      password
    });
  }
  function rePassword(form) {
    return service.post("/app/rePassword", form);
  }
  function validatePhone(phone) {
    const regExp2 = /^1[3456789]\d{9}$/;
    return regExp2.test(phone);
  }
  function formatDate(date2, fmt) {
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date2.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    let o = {
      "M+": date2.getMonth() + 1,
      "d+": date2.getDate(),
      "h+": date2.getHours(),
      "m+": date2.getMinutes(),
      "s+": date2.getSeconds()
    };
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + "";
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
      }
    }
    return fmt;
  }
  function padLeftZero(str) {
    return ("00" + str).substr(str.length);
  }
  const _sfc_main$F = {
    data() {
      return {};
    },
    setup() {
      const phone = vue.ref();
      const contract = vue.ref("<<用户服务协议>>");
      const privacy = vue.ref("<<隐私政策>>");
      const gotoContract = () => {
        uni.navigateTo({
          url: "/pages/contract/contract"
        });
      };
      const gotoPrivacy = () => {
        uni.navigateTo({
          url: "/pages/contract/privacy"
        });
      };
      return {
        phone,
        contract,
        privacy,
        gotoContract,
        gotoPrivacy
      };
    },
    methods: {
      getCode() {
        if (validatePhone(this.phone)) {
          getCodeByPhone(this.phone).then((res) => {
            uni.navigateTo({
              url: "/pages/login/enter-code?phone=" + this.phone
            });
          }).catch((err) => {
            formatAppLog("log", "at pages/login/login.vue:84", err);
          });
        } else {
          this.$refs.uToast.show({
            message: "电话号码的格式不正确",
            position: "top",
            type: "error"
          });
        }
      }
    }
  };
  function _sfc_render$E(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u__text = resolveEasycom(vue.resolveDynamicComponent("u--text"), __easycom_1$6);
    const _component_u_input = resolveEasycom(vue.resolveDynamicComponent("u-input"), __easycom_1$3);
    const _component_u_form_item = resolveEasycom(vue.resolveDynamicComponent("u-form-item"), __easycom_2$3);
    const _component_u_form = resolveEasycom(vue.resolveDynamicComponent("u-form"), __easycom_3);
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_2$4);
    const _component_u_toast = resolveEasycom(vue.resolveDynamicComponent("u-toast"), __easycom_4);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "header" }, [
          vue.createElementVNode("image", {
            src: "/static/img/login.png",
            mode: ""
          })
        ]),
        vue.createElementVNode("view", { class: "text" }, [
          vue.createElementVNode("text", { style: { "margin-left": "50upx" } }, "请验证登录,未注册的手机号会自动为您注册")
        ]),
        vue.createElementVNode("view", { class: "input" }, [
          vue.createVNode(_component_u_form, null, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_u_form_item, null, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_u_input, {
                    placeholder: "请输入电话号码",
                    border: "bottom",
                    modelValue: $setup.phone,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.phone = $event),
                    type: "number"
                  }, {
                    prefix: vue.withCtx(() => [
                      vue.createVNode(_component_u__text, {
                        text: "+86>",
                        margin: "0 3px 0 0",
                        size: "25",
                        color: "black"
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        vue.createElementVNode("view", { class: "btn" }, [
          vue.createVNode(_component_u_button, {
            type: "primary",
            shape: "circle",
            onClick: $options.getCode
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("text", { style: { "color": "white" } }, "获取验证码")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"])
        ]),
        vue.createElementVNode("view", { class: "a_text text-center pt-20" }, [
          vue.createElementVNode("navigator", { url: "/pages/login/loginByPassword" }, [
            vue.createElementVNode("text", null, "账号密码登录")
          ])
        ]),
        vue.createElementVNode("view", {
          class: "footer text-center",
          style: { "padding-top": "35%", "font-size": "14upx", "color": "#666666" }
        }, [
          vue.createTextVNode(" 登录代表同意平台的"),
          vue.createElementVNode(
            "span",
            {
              style: { "color": "#34389B" },
              onClick: _cache[1] || (_cache[1] = (...args) => $setup.gotoContract && $setup.gotoContract(...args))
            },
            vue.toDisplayString($setup.contract),
            1
            /* TEXT */
          ),
          vue.createTextVNode(" 及 "),
          vue.createElementVNode(
            "span",
            {
              style: { "color": "#34389B" },
              onClick: _cache[2] || (_cache[2] = (...args) => $setup.gotoPrivacy && $setup.gotoPrivacy(...args))
            },
            vue.toDisplayString($setup.privacy),
            1
            /* TEXT */
          )
        ]),
        vue.createVNode(
          _component_u_toast,
          { ref: "uToast" },
          null,
          512
          /* NEED_PATCH */
        )
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["render", _sfc_render$E], ["__file", "D:/study/实训/intelligent_community_app_owner/pages/login/login.vue"]]);
  const _sfc_main$E = {
    data() {
      return {
        phone: "",
        password: "",
        flag: true,
        color: "#f2f2f2"
      };
    },
    watch: {
      phone(newNum, oldNum) {
        if (this.phone != "" && this.password != "") {
          this.flag = false;
          this.color = "";
        } else {
          this.flag = true;
          this.color = "#f2f2f2";
        }
      },
      password(newNum, oldNum) {
        if (this.phone != "" && this.password != "") {
          this.flag = false;
          this.color = "";
        } else {
          this.flag = true;
          this.color = "#f2f2f2";
        }
      }
    },
    methods: {
      login() {
        if (validatePhone(this.phone)) {
          loginByPassword(this.phone, this.password).then((res) => {
            if (res.data.code === 0) {
              this.$refs.uToast.show({
                message: "登录成功",
                position: "top",
                type: "success"
              });
              if (res.data.data.token) {
                uni.setStorage({
                  key: "token",
                  data: res.data.data.token,
                  success: function() {
                    formatAppLog("log", "at pages/login/loginByPassword.vue:98", "token set success");
                  }
                });
              }
              if (res.data.data.owner) {
                uni.setStorage({
                  key: "owner",
                  data: res.data.data.owner,
                  success: function() {
                    formatAppLog("log", "at pages/login/loginByPassword.vue:108", "owner set success");
                  }
                });
              }
              if (res.data.data.property) {
                uni.setStorage({
                  key: "property",
                  data: res.data.data.property,
                  success: function() {
                    formatAppLog("log", "at pages/login/loginByPassword.vue:118", "property set success");
                  }
                });
              }
              uni.switchTab({
                url: "/pages/tarbar/index/index"
              });
            } else {
              this.$refs.uToast.show({
                message: res.data.msg,
                position: "top",
                type: "error"
              });
            }
          });
        } else {
          this.$refs.uToast.show({
            message: "电话号码的格式不正确",
            position: "top",
            type: "error"
          });
        }
      }
    }
  };
  function _sfc_render$D(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u__text = resolveEasycom(vue.resolveDynamicComponent("u--text"), __easycom_1$6);
    const _component_u_input = resolveEasycom(vue.resolveDynamicComponent("u-input"), __easycom_1$3);
    const _component_u_form_item = resolveEasycom(vue.resolveDynamicComponent("u-form-item"), __easycom_2$3);
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_2$4);
    const _component_u_form = resolveEasycom(vue.resolveDynamicComponent("u-form"), __easycom_3);
    const _component_u_toast = resolveEasycom(vue.resolveDynamicComponent("u-toast"), __easycom_4);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("h3", null, "账号密码登录"),
        vue.createVNode(_component_u_form, null, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_u_form_item, null, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_u_input, {
                  placeholder: "请输入手机号",
                  border: "bottom",
                  modelValue: $data.phone,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.phone = $event),
                  type: "number"
                }, {
                  prefix: vue.withCtx(() => [
                    vue.createVNode(_component_u__text, {
                      text: "+86>",
                      margin: "0 3px 0 0",
                      size: "25",
                      color: "black"
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createVNode(_component_u_form_item, null, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_u_input, {
                  placeholder: "请输入密码",
                  border: "bottom",
                  modelValue: $data.password,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.password = $event),
                  type: "password"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createVNode(_component_u_form_item, null, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_u_button, {
                  type: "primary",
                  text: "登录",
                  disabled: $data.flag,
                  color: $data.color,
                  shape: "circle",
                  onClick: $options.login
                }, null, 8, ["disabled", "color", "onClick"])
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createVNode(_component_u_form_item, null, {
              default: vue.withCtx(() => [
                vue.createElementVNode("navigator", { url: "/pages/login/re-password" }, [
                  vue.createElementVNode("text", { style: { "font-size": "14upx", "margin-left": "500upx" } }, "忘记密码?")
                ])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        vue.createVNode(
          _component_u_toast,
          { ref: "uToast" },
          null,
          512
          /* NEED_PATCH */
        )
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesLoginLoginByPassword = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["render", _sfc_render$D], ["__file", "D:/study/实训/intelligent_community_app_owner/pages/login/loginByPassword.vue"]]);
  const _sfc_main$D = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$C(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "container",
      style: { "background-color": "#f1f1f1" }
    }, [
      vue.createElementVNode("view", { class: "card" }, [
        vue.createElementVNode("h3", { class: "text-center pb-10 pt-20" }, "用户服务协议"),
        vue.createElementVNode("p", null, "协议版本:[1.0] ; 发布/生效日期: [2023年5月25日]"),
        vue.createElementVNode("text", { style: { "font-size": "12upx" } }, [
          vue.createTextVNode(" 智慧社区项目服务时的权利和义务。在使用我们的服务前，请您仔细阅读并理解以下协议条款： "),
          vue.createElementVNode("br"),
          vue.createTextVNode(" 一、服务条款 "),
          vue.createElementVNode("br"),
          vue.createTextVNode(" 1.1 服务内容 "),
          vue.createElementVNode("br"),
          vue.createTextVNode(" 我们向您提供智慧社区服务，包括但不限于： 提供社区信息发布功能，为社区居民提供便捷的信息查询和发布服务； 提供物业缴费、报修等服务； 提供社区活动组织、报名与参与服务。 "),
          vue.createElementVNode("br"),
          vue.createTextVNode(" 1.2 服务变更与服务费用 我们可能会基于业务发展需要，对提供的服务内容进行调整、更新或者增加新的服务。在服务变更时，我们将会在合理期限内提前告知您并尽力减少服务变更对您的影响。 对于收费服务，我们将依照公示的价格向您收取费用。我们保留因业务调整、技术变化或其他原因适时更改服务收费标准、方式的权利，将会在合理期限内通知您。 "),
          vue.createElementVNode("br"),
          vue.createTextVNode(" 二、用户账户 "),
          vue.createElementVNode("br"),
          vue.createTextVNode(" 2.1 注册账户 在使用智慧社区服务前，需要您注册并开通与您个人身份相对应的账户，完成注册即表示您已同意并遵守本协议的规定。 "),
          vue.createElementVNode("br"),
          vue.createTextVNode(" 2.2 账户安全 请您妥善保管账户及账户密码，不得将账户授权或转让给他人使用，若因密码泄露或账户授权导致的损失均由用户自行承担。 "),
          vue.createElementVNode("br"),
          vue.createTextVNode(" 2.3 账户注销 如您不需要继续使用智慧社区服务，可通过注销方式注销您的账户。账户注销后，您的账户将不可恢复。 "),
          vue.createElementVNode("br"),
          vue.createTextVNode(" 三、用户行为规范 "),
          vue.createElementVNode("br"),
          vue.createTextVNode(" 3.1 合法合规 在使用智慧社区服务过程中，您必须遵守中国相关法律法规，不得以任何形式从事任何非法活动，包括但不限于： 发布、传播违法、淫秽、妨害社会公共利益或其他不当信息； 使用智慧社区服务从事任何诈骗、恶意攻击、侵犯他人权益等行为； 破坏智慧社区服务的技术措施或正常运营。 "),
          vue.createElementVNode("br"),
          vue.createTextVNode(" 3.2 保护个人信息 在使用智慧社区服务过程中，我们将收集您的个人信息，为了保护您的隐私，您需要： 填写真实、准确、完整的个人信息； 妥善保管您的账户和密码，避免个人信息泄露； 未经他人同意，不得获取、使用、向他人提供他人的个人信息。 "),
          vue.createElementVNode("br"),
          vue.createTextVNode(" 3.3 用户内容 您可在智慧社区服务中发布、展示、传播信息、文字、图片、音频、视频等用户内容。您提交的用户内容须符合中国相关法律法规和本协议的规定，不得侵犯他人合法权益，包括但不限于： 侵犯他人著作权、商标权、专利权等知识产权； 侵犯他人姓名权、肖像权、隐私权等人格权； 包含恶意软件、病毒、广告等一切有害的信息内容。 "),
          vue.createElementVNode("br"),
          vue.createTextVNode(" 四、知识产权 "),
          vue.createElementVNode("br"),
          vue.createTextVNode(" 4.1 智慧社区知识产权 智慧社区服务中所有文字、图片、音频、视频等内容的知识产权归智慧社区所有。 "),
          vue.createElementVNode("br"),
          vue.createTextVNode(" 4.2 用户内容的知识产权 您发布、展示、传播的用户内容的知识产权归您所有。但是，您同意授予智慧社区在全球范围内、免费、不可撤销的许可使用的权利，包括但不限于： 在智慧社区服务中展示、传播您的用户内容； 以向公众展示、传播、复制、修改、出版或制作衍生作品的形式使用您的用户内容。 "),
          vue.createElementVNode("br"),
          vue.createTextVNode(" 五、免责声明 由于以下原因导致您在使用智慧社区服务过程中受到任何损失，我们将不承担任何责任： 因天灾、社会事件、互联网原因和其他不可抗力因素导致服务中断、停止； 您违反本协议规定或者因自身原因发生的任何损失。 "),
          vue.createElementVNode("br"),
          vue.createTextVNode(" 六、协议更新 我们有权基于业务发展需要随时修改本协议。修改后的协议将在智慧社区服务页面公示，您可以随时查看最新版协议内容。 "),
          vue.createElementVNode("br"),
          vue.createTextVNode(" 七、法律适用 本协议应适用中华人民共和国法律，如本协议中任何条款与中国现行法律相抵触，则该条款将按法律规定重新解释，但不影响其他条款的法律效力。 "),
          vue.createElementVNode("br"),
          vue.createTextVNode(" 八、争议解决 因本协议引起的或与本协议有关的任何争议，双方应友好协商解决。协商不成的，任何一方均可向本协议签订地有管辖权的人民法院提起诉讼。 以上为用户协议的全部内容，如您有任何疑问，请随时联系我们。 ")
        ])
      ])
    ]);
  }
  const PagesContractContract = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render$C], ["__file", "D:/study/实训/intelligent_community_app_owner/pages/contract/contract.vue"]]);
  const _sfc_main$C = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$B(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "container",
      style: { "background-color": "#f1f1f1" }
    }, [
      vue.createElementVNode("view", { class: "card" }, [
        vue.createElementVNode("h3", { class: "text-center pb-10 pt-20" }, "隐私政策"),
        vue.createElementVNode("text", { style: { "font-size": "12upx" } }, [
          vue.createTextVNode(" 感谢您使用智慧社区项目服务！我们非常重视您的隐私保护，为保障您的权益和安全，制定本隐私政策协议，阐述我们收集、使用、共享、存储您的个人信息的相关规定和措施。请您仔细阅读并理解此协议，如有疑问，请及时联系我们。 "),
          vue.createElementVNode("br"),
          vue.createTextVNode(" 一、适用范围 本隐私政策适用于您使用智慧社区项目服务过程中，我们在服务中收集、使用和存储的您的个人信息。 "),
          vue.createElementVNode("br"),
          vue.createTextVNode(" 二、所收集的信息 我们将会收集、存储的信息有： 在您使用智慧社区项目时，我们可能会收集您提供的个人信息，包括但不限于姓名、联系方式、住址等； 在您使用智慧社区项目时，我们可能会自动收集您的设备信息，包括但不限于设备型号、操作系统、浏览器类型、网络服务提供商（ISP）、IP地址等信息； 在您使用智慧社区项目时，我们可能会自动收集您在服务中的操作行为数据，包括但不限于浏览记录、交互记录等； 我们可能会收集您在使用智慧社区项目服务时提交的相关信息和建议，帮助我们完善和改进服务。 "),
          vue.createElementVNode("br"),
          vue.createTextVNode(" 三、所收集信息的用途 我们收集、存储您的个人信息，基于以下用途： 为向您提供服务所必要的功能和内容，且为了满足经济和法律义务所需，或者为了保护您的权益和财产安全； 您同意我们可能向您发送有关智慧社区项目的更新和相关信息，或者对您反馈的问题和建议进行回复； 为改进和优化我们的产品和服务质量，开发新产品和服务。 "),
          vue.createElementVNode("br"),
          vue.createTextVNode(" 四、信息的保护和共享 我们将采用安全技术和措施，保障您的个人信息。 我们不会将您的个人信息出售给第三方。我们未经您事先同意不会与未经认证的第三方共享您的个人信息。 我们可能会将您的个人信息分享给以下第三方： 我们授权的代表和服务提供商，包括但不限于为了协助我们处理支付、交付、客户服务、市场营销和数据分析等服务相关的目的，提供的技术服务及其他支持服务； 根据您的要求和授权情况下向您提供的第三方服务提供商。 我们会尽最大努力确保任何我们与之共享信息的第三方都采取适当的信息保护措施并与我们签署保密协议，同时受本政策的约束和保护。 "),
          vue.createElementVNode("br"),
          vue.createTextVNode(" 五、信息存储和管理 我们将在符合相关法律法规要求的期限内保留您的个人信息，法律法规另有规定的除外。 "),
          vue.createElementVNode("br"),
          vue.createTextVNode(" 六、更改和删除个人信息 您有权更改个人信息，包括但不限于姓名、联系方式、住址信息等。如果您需要更改您的个人信息，请与我们联系。 在符合相关法律法规要求的情况下，我们也将为您提供访问、更正、删除、限制、收回和移动数据的权利。若您认为智慧社区项目的个人信息处理行为侵犯了您的权利，您有权向我们提出异议或申诉我们的行为。 "),
          vue.createElementVNode("br"),
          vue.createTextVNode(" 七、法律适用和争议解决 本隐私政策适用中国法律。因本协议所产生的任何法律纠纷，双方应共同协商解决。协商不成的，任何一方均可向协议签订地的有管辖权的人民法院提起诉讼。 "),
          vue.createElementVNode("br"),
          vue.createTextVNode(" 八、协议的更新和通知 我们会定期公布本隐私政策，并以适当的方式及时通知您重要变更。如您继续使用我们的服务，即表示您接受修订后的隐私政策并同意按照隐私政策收集、使用和存储您的个人信息。 如果您不同意本隐私政策的任何条款，或您不愿意接受本隐私政策的更新版本，请您立即停止使用智慧社区项目的服务。 ")
        ])
      ])
    ]);
  }
  const PagesContractPrivacy = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render$B], ["__file", "D:/study/实训/intelligent_community_app_owner/pages/contract/privacy.vue"]]);
  const _sfc_main$B = {
    data() {
      return {
        code: ""
      };
    },
    setup() {
      const phone = vue.ref();
      const text = vue.ref("重新发送");
      let time = 60;
      const flag2 = vue.ref(false);
      onLoad((option) => {
        phone.value = option.phone;
        flag2.value = true;
        const clock = setInterval(() => {
          time--;
          text.value = "重新发送(" + time + "s)";
          if (time < 1) {
            flag2.value = false;
            time = 60;
            text.value = "重新发送";
            clearInterval(clock);
          }
        }, 1e3);
      });
      const resend = () => {
        getCodeByPhone(phone.value);
        flag2.value = true;
        const clock = setInterval(() => {
          time--;
          text.value = "重新发送(" + time + "s)";
          if (time < 1) {
            flag2.value = false;
            time = 60;
            text.value = "重新发送";
            clearInterval(clock);
          }
        }, 1e3);
      };
      return {
        phone,
        text,
        time,
        flag: flag2,
        onLoad,
        resend
      };
    },
    methods: {
      login() {
        loginByCode(this.phone, this.code).then((res) => {
          if (res.data.code === 0) {
            if (res.data.data.token) {
              uni.setStorage({
                key: "token",
                data: res.data.data.token,
                success: function() {
                  formatAppLog("log", "at pages/login/enter-code.vue:99", "token set success");
                }
              });
            }
            if (res.data.data.owner) {
              uni.setStorage({
                key: "owner",
                data: res.data.data.owner,
                success: function() {
                  formatAppLog("log", "at pages/login/enter-code.vue:108", "owner set success");
                }
              });
            }
            if (res.data.data.property) {
              uni.setStorage({
                key: "property",
                data: res.data.data.property,
                success: function() {
                  formatAppLog("log", "at pages/login/enter-code.vue:117", "property set success");
                }
              });
            }
            uni.switchTab({
              url: "/pages/tarbar/index/index"
            });
            this.$refs.uToast.show({
              loading: false,
              message: "登录成功",
              position: "top",
              type: "success"
            });
          } else {
            this.$refs.uToast.show({
              loading: false,
              message: "登录失败:" + res.data.msg,
              position: "top",
              type: "error"
            });
          }
        }).catch((err) => {
          formatAppLog("log", "at pages/login/enter-code.vue:139", err);
          this.$refs.uToast.show({
            loading: false,
            message: "登录失败:服务器错误",
            position: "top",
            type: "error"
          });
        });
      }
    }
  };
  function _sfc_render$A(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_2$4);
    const _component_u_input = resolveEasycom(vue.resolveDynamicComponent("u-input"), __easycom_1$3);
    const _component_u_form_item = resolveEasycom(vue.resolveDynamicComponent("u-form-item"), __easycom_2$3);
    const _component_u_form = resolveEasycom(vue.resolveDynamicComponent("u-form"), __easycom_3);
    const _component_u_toast = resolveEasycom(vue.resolveDynamicComponent("u-toast"), __easycom_4);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "card" }, [
        vue.createElementVNode("h3", null, "输入验证码"),
        vue.createElementVNode(
          "text",
          { style: { "padding-left": "50upx", "color": "black" } },
          "请输入" + vue.toDisplayString($setup.phone) + "收到的验证码",
          1
          /* TEXT */
        ),
        vue.createElementVNode("view", {
          class: "code_input",
          style: { "padding-left": "50upx", "padding-top": "100upx" }
        }, [
          vue.createVNode(_component_u_form, null, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_u_form_item, null, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_u_input, {
                    placeholder: "验证码",
                    border: "bottom",
                    modelValue: $data.code,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.code = $event),
                    type: "number"
                  }, {
                    suffix: vue.withCtx(() => [
                      vue.createVNode(_component_u_button, {
                        type: "primary",
                        color: "#666666",
                        plain: true,
                        hairline: true,
                        disabled: $setup.flag,
                        onClick: $setup.resend
                      }, {
                        default: vue.withCtx(() => [
                          vue.createTextVNode(
                            vue.toDisplayString($setup.text),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      }, 8, ["disabled", "onClick"])
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        vue.createElementVNode("view", { class: "btn" }, [
          vue.createVNode(_component_u_button, {
            type: "primary",
            size: "large",
            shape: "circle",
            color: "#14acff",
            onClick: $options.login
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("登录")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"])
        ])
      ]),
      vue.createVNode(
        _component_u_toast,
        { ref: "uToast" },
        null,
        512
        /* NEED_PATCH */
      )
    ]);
  }
  const PagesLoginEnterCode = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["render", _sfc_render$A], ["__file", "D:/study/实训/intelligent_community_app_owner/pages/login/enter-code.vue"]]);
  const _sfc_main$A = {
    data() {
      return {
        form: {
          phone: "",
          code: "",
          password: "",
          rePassword: ""
        },
        flag: true,
        color: "#f2f2f2",
        text: "获取验证码",
        codeFlag: false
      };
    },
    methods: {
      send() {
        if (validatePhone(this.form.phone)) {
          let time = 61;
          getCodeByPhone(this.form.phone);
          this.codeFlag = true;
          const clock = setInterval(() => {
            time--;
            this.text = "重新发送(" + time + ")";
            if (time < 1) {
              this.codeFlag = false;
              time = 60;
              this.text = "获取验证码";
              clearInterval(clock);
            }
          }, 1e3);
        } else {
          this.$refs.uToast.show({
            message: "手机号格式不正确",
            position: "top",
            type: "error"
          });
        }
      },
      changePassword() {
        if (this.form.password == this.form.rePassword) {
          rePassword(this.form).then((res) => {
            if (res.data.code === 0) {
              this.$refs.uToast.show({
                message: "修改成功",
                position: "top",
                type: "success"
              });
              uni.navigateTo({
                url: "/pages/login/loginByPassword"
              });
            } else {
              this.$refs.uToast.show({
                message: res.data.msg,
                position: "top",
                type: "error"
              });
            }
          }).catch((err) => {
            this.$refs.uToast.show({
              message: "服务器错误",
              position: "top",
              type: "error"
            });
          });
        } else {
          this.$refs.uToast.show({
            message: "两次输入的验证码必须相同",
            position: "top",
            type: "error"
          });
        }
      }
    },
    watch: {
      form: {
        handler(newVal) {
          if (this.form.phone != "" && this.form.password != "" && this.form.code != "" && this.form.rePassword != "") {
            this.flag = false;
            this.color = "";
          } else {
            this.flag = true;
            this.color = "#f2f2f2";
          }
        },
        deep: true
      }
    }
  };
  function _sfc_render$z(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u__text = resolveEasycom(vue.resolveDynamicComponent("u--text"), __easycom_1$6);
    const _component_u_input = resolveEasycom(vue.resolveDynamicComponent("u-input"), __easycom_1$3);
    const _component_u_form_item = resolveEasycom(vue.resolveDynamicComponent("u-form-item"), __easycom_2$3);
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_2$4);
    const _component_u_toast = resolveEasycom(vue.resolveDynamicComponent("u-toast"), __easycom_4);
    const _component_u_form = resolveEasycom(vue.resolveDynamicComponent("u-form"), __easycom_3);
    return vue.openBlock(), vue.createBlock(_component_u_form, { model: $data.form }, {
      default: vue.withCtx(() => [
        vue.createVNode(_component_u_form_item, null, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_u_input, {
              placeholder: "请输入手机号",
              border: "bottom",
              modelValue: $data.form.phone,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.form.phone = $event),
              type: "number"
            }, {
              prefix: vue.withCtx(() => [
                vue.createVNode(_component_u__text, {
                  text: "+86>",
                  margin: "0 3px 0 0",
                  size: "25",
                  color: "black"
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        }),
        vue.createVNode(_component_u_form_item, null, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_u_input, {
              placeholder: "验证码",
              border: "bottom",
              modelValue: $data.form.code,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.form.code = $event),
              type: "number"
            }, {
              suffix: vue.withCtx(() => [
                vue.createVNode(_component_u_button, {
                  type: "primary",
                  color: "#666666",
                  size: "small",
                  shape: "circle",
                  plain: true,
                  hairline: true,
                  disabled: $data.codeFlag,
                  onClick: $options.send
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(
                      vue.toDisplayString($data.text),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["disabled", "onClick"])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        }),
        vue.createVNode(_component_u_form_item, null, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_u_input, {
              placeholder: "请输入密码",
              border: "bottom",
              modelValue: $data.form.password,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.form.password = $event),
              type: "text"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        }),
        vue.createVNode(_component_u_form_item, null, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_u_input, {
              placeholder: "请确认密码",
              border: "bottom",
              modelValue: $data.form.rePassword,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.form.rePassword = $event),
              type: "password"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        }),
        vue.createVNode(_component_u_form_item, null, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_u_button, {
              type: "primary",
              text: "完成",
              disabled: $data.flag,
              color: $data.color,
              shape: "circle",
              onClick: $options.changePassword
            }, null, 8, ["disabled", "color", "onClick"])
          ]),
          _: 1
          /* STABLE */
        }),
        vue.createVNode(
          _component_u_toast,
          { ref: "uToast" },
          null,
          512
          /* NEED_PATCH */
        )
      ]),
      _: 1
      /* STABLE */
    }, 8, ["model"]);
  }
  const PagesLoginRePassword = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", _sfc_render$z], ["__file", "D:/study/实训/intelligent_community_app_owner/pages/login/re-password.vue"]]);
  function HouseList(owner_id, type2) {
    return service.get("/app/HouseList?owner_id=" + owner_id + "&type=" + type2);
  }
  function AddHouse(require) {
    return service.post("/app/AddHouse", require);
  }
  function removeHouse(house_id, owner_id) {
    return service.delete("/app/house/" + house_id + "/" + owner_id);
  }
  function getOwnerPhone(room_id) {
    return service.get("/app/getOwnerPhone?roomId=" + room_id);
  }
  const _sfc_main$z = {
    data() {
      return {
        houseList: [],
        isOwner: -1
      };
    },
    methods: {
      remove(house_id) {
        const owner_id = uni.getStorageSync("owner").id;
        removeHouse(house_id, owner_id).then((res) => {
          if (res.data.code === 0) {
            this.$refs.uToast.show({
              message: "删除成功",
              position: "top",
              type: "success"
            });
            this.getList();
          } else {
            this.$refs.uToast.show({
              message: "删除失败",
              position: "top",
              type: "error"
            });
          }
        });
      },
      add_owner() {
        if (this.isOwner == 0) {
          this.$refs.uToast.show({
            message: "住户无法添加房屋",
            position: "top",
            type: "warning"
          });
        } else {
          uni.navigateTo({
            url: "/pages/home/owner-add-house"
          });
        }
      },
      add_user() {
        if (this.isOwner == 1) {
          this.$refs.uToast.show({
            message: "业主无法加入房屋",
            position: "top",
            type: "warning"
          });
        } else {
          uni.navigateTo({
            url: "/pages/home/user-add-house"
          });
        }
      },
      getList() {
        const owner_id = uni.getStorageSync("owner").id;
        const isOwner = uni.getStorageSync("owner").isOwner;
        const rooms_no = [];
        const rooms_id = [];
        this.houseList = [];
        HouseList(owner_id, 2).then((res) => {
          formatAppLog("log", "at pages/home/home.vue:109", res);
          const buildings = res.data.data.buildings;
          for (let i2 = 0; i2 < buildings.length; i2++) {
            let rooms = buildings[i2].rooms;
            for (let j = 0; j < rooms.length; j++) {
              let room_no = buildings[i2].buildingName + rooms[j].roomName;
              rooms_no.push(room_no);
              rooms_id.push(rooms[j].roomId);
            }
          }
          for (let i2 = 0; i2 < rooms_no.length; i2++) {
            this.houseList.push({
              room_no: rooms_no[i2],
              community_name: res.data.data.communityName,
              id: rooms_id[i2],
              user_type: isOwner == 1 ? "业主" : "住户"
            });
          }
          formatAppLog("log", "at pages/home/home.vue:129", this.houseList);
        });
      }
    },
    onShow() {
      this.isOwner = -1;
      this.getList();
      this.isOwner = uni.getStorageSync("owner").isOwner;
    }
  };
  function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_col = resolveEasycom(vue.resolveDynamicComponent("u-col"), __easycom_5$1);
    const _component_u_row = resolveEasycom(vue.resolveDynamicComponent("u-row"), __easycom_6);
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_2$4);
    const _component_u_toast = resolveEasycom(vue.resolveDynamicComponent("u-toast"), __easycom_4);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "top" }),
      $data.houseList.length > 0 ? (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        { key: 0 },
        vue.renderList($data.houseList, (item, index2) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            key: item.id,
            class: "house"
          }, [
            vue.createElementVNode(
              "view",
              { class: "community" },
              vue.toDisplayString(item.community_name),
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", { class: "house_info" }, [
              vue.createVNode(
                _component_u_row,
                { style: { "padding-bottom": "0" } },
                {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_u_col, { span: "6" }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode("楼栋房号")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    vue.createVNode(
                      _component_u_col,
                      {
                        span: "6",
                        style: { "text-align": "right" }
                      },
                      {
                        default: vue.withCtx(() => [
                          vue.createTextVNode(
                            vue.toDisplayString(item.room_no),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                },
                1024
                /* DYNAMIC_SLOTS */
              ),
              vue.createVNode(
                _component_u_row,
                { style: { "padding-bottom": "40upx" } },
                {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_u_col, { span: "6" }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode("住户类型")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    vue.createVNode(
                      _component_u_col,
                      {
                        span: "6",
                        style: { "text-align": "right" }
                      },
                      {
                        default: vue.withCtx(() => [
                          vue.createTextVNode(
                            vue.toDisplayString(item.user_type),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                },
                1024
                /* DYNAMIC_SLOTS */
              )
            ]),
            vue.createElementVNode("view", { class: "delete_btn" }, [
              vue.createVNode(
                _component_u_row,
                null,
                {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_u_col, { span: "9" }),
                    vue.createVNode(
                      _component_u_col,
                      { span: "3" },
                      {
                        default: vue.withCtx(() => [
                          vue.createVNode(_component_u_button, {
                            type: "primary",
                            shape: "circle",
                            plain: "",
                            onClick: ($event) => $options.remove(item.id)
                          }, {
                            default: vue.withCtx(() => [
                              vue.createElementVNode("text", { style: { "color": "#4fa6ff" } }, "删除")
                            ]),
                            _: 2
                            /* DYNAMIC */
                          }, 1032, ["onClick"])
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                },
                1024
                /* DYNAMIC_SLOTS */
              )
            ])
          ]);
        }),
        128
        /* KEYED_FRAGMENT */
      )) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", { class: "btn_group" }, [
        vue.createVNode(_component_u_row, { justify: "between" }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_u_col, { span: "5.5" }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_u_button, {
                  type: "primary",
                  shape: "circle",
                  onClick: $options.add_owner
                }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("text", { style: { "color": "#ffffff" } }, "我是业主,添加房屋")
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["onClick"])
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createVNode(_component_u_col, { span: "5.5" }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_u_button, {
                  type: "primary",
                  shape: "circle",
                  color: "#A1A1A1",
                  plain: "true",
                  onClick: $options.add_user
                }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("text", null, "我是住户,入住房屋")
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["onClick"])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      vue.createVNode(
        _component_u_toast,
        { ref: "uToast" },
        null,
        512
        /* NEED_PATCH */
      )
    ]);
  }
  const PagesHomeHome = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$y], ["__scopeId", "data-v-07e72d3c"], ["__file", "D:/study/实训/intelligent_community_app_owner/pages/home/home.vue"]]);
  const _imports_0$3 = "/static/img/open/msg_card.png";
  const _imports_1$2 = "/static/img/open/2d.png";
  const _imports_2 = "/static/img/open/wechat.png";
  const _imports_3 = "/static/img/open/copy.png";
  const _sfc_main$y = {
    data() {
      return {
        equip_list: [],
        btn_group: [
          {
            name: "1小时",
            time: 36e5
          },
          {
            name: "3小时",
            time: 108e5
          },
          {
            name: "6小时",
            time: 216e5
          },
          {
            name: "12小时",
            time: 432e5
          },
          {
            name: "1天",
            time: 864e5
          },
          {
            name: "2天",
            time: 1728e5
          },
          {
            name: "3天",
            time: 2592e5
          },
          {
            name: "4天",
            time: 3456e5
          }
        ],
        show: false,
        selected_equip: [],
        time: [],
        community_name: "西楚庄园"
      };
    },
    methods: {
      selected(idx) {
        this.btn_group.forEach((item) => item.selected = false);
        this.btn_group[idx].selected = true;
      },
      share() {
        this.show = false;
        this.selected_equip = this.equip_list.filter((item) => item.selected == true);
        this.time = this.btn_group.filter((item) => item.selected == true);
        if (this.selected_equip.length < 1) {
          this.$refs.uToast.show({
            message: "请选择设备",
            position: "top",
            type: "warning",
            duration: "1000"
          });
        }
        if (this.time.length < 1) {
          this.$refs.uToast.show({
            message: "请选择时间",
            position: "top",
            type: "warning",
            duration: "1000"
          });
        }
        if (this.selected_equip.length > 0 && this.time.length > 0) {
          this.show = true;
          const owner_id = uni.getStorageSync("owner").id;
          vister(owner_id, this.selected_equip, this.time[0].time).then((res) => {
            if (res.data.code === 0) {
              formatAppLog("log", "at pages/invitor/invitor.vue:164", "记录成功");
            } else {
              formatAppLog("log", "at pages/invitor/invitor.vue:166", "记录失败");
            }
          });
        }
      },
      copy() {
        this.show = false;
        this.$refs.uToast.show({
          message: "复制成功",
          position: "top",
          type: "success"
        });
      }
    },
    onShow() {
      const owner_id = uni.getStorageSync("owner").id;
      this.equip_list = [];
      if (owner_id) {
        getDoorsById(owner_id).then((res) => {
          formatAppLog("log", "at pages/invitor/invitor.vue:187", res);
          if (res.data.code === 0) {
            if (res.data.data.length > 0) {
              this.equip_list = res.data.data;
            }
          } else {
            this.$refs.uToast.show({
              message: res.data.msg,
              type: "error",
              position: "top"
            });
          }
        }).catch((err) => {
          formatAppLog("log", "at pages/invitor/invitor.vue:200", "获取设备列表失败" + err);
        });
      }
    }
  };
  function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_2$4);
    const _component_u_toast = resolveEasycom(vue.resolveDynamicComponent("u-toast"), __easycom_4);
    const _component_u_popup = resolveEasycom(vue.resolveDynamicComponent("u-popup"), __easycom_2$6);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "top" }),
      vue.createElementVNode("view", { class: "card" }, [
        vue.createElementVNode("view", { class: "info" }, [
          vue.createElementVNode("view", { style: { "font-size": "40upx", "padding": "20upx", "padding-bottom": "0upx", "padding-top": "40upx" } }, "访客通行"),
          vue.createElementVNode("view", { style: { "display": "flex", "justify-content": "space-between", "align-items": "center" } }, [
            vue.createElementVNode("text", { style: { "padding": "10upx", "font-size": "30upx", "color": "#A1A1A1" } }, [
              vue.createTextVNode("在这里你可以把您所在小区下单元的开"),
              vue.createElementVNode("br"),
              vue.createTextVNode("门权限分享给好友,好友即可一键开"),
              vue.createElementVNode("br"),
              vue.createTextVNode("门,方便快捷!")
            ]),
            vue.createElementVNode("image", {
              src: _imports_0$3,
              style: { "width": "200upx", "height": "200upx", "margin-bottom": "20upx" },
              mode: ""
            })
          ])
        ]),
        vue.createElementVNode("view", {
          class: "equip",
          style: { "padding-top": "20upx" }
        }, [
          vue.createElementVNode("view", {
            class: "title",
            style: { "padding": "10upx" }
          }, " 开门授权 "),
          $data.equip_list.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "equip_list"
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.equip_list, (item, index2) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index2,
                  class: vue.normalizeClass(item.selected == true ? "selected_card" : "equip_card"),
                  onClick: ($event) => item.selected = !item.selected
                }, [
                  vue.createElementVNode("image", {
                    src: item.img,
                    mode: ""
                  }, null, 8, ["src"]),
                  vue.createElementVNode(
                    "view",
                    null,
                    vue.toDisplayString(item.equipName),
                    1
                    /* TEXT */
                  )
                ], 10, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])) : vue.createCommentVNode("v-if", true)
        ]),
        vue.createElementVNode("view", { class: "time" }, [
          vue.createElementVNode("view", {
            class: "title",
            style: { "padding": "10upx" }
          }, " 钥匙分享时长 "),
          vue.createElementVNode("view", { class: "btns" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.btn_group, (item, index2) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: vue.normalizeClass(["btn", item.selected == true ? "btn_selected" : "btn"]),
                  onClick: ($event) => $options.selected(index2)
                }, vue.toDisplayString(item.name), 11, ["onClick"]);
              }),
              256
              /* UNKEYED_FRAGMENT */
            ))
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "share_btn" }, [
        vue.createVNode(_component_u_button, {
          type: "primary",
          shape: "circle",
          onClick: $options.share
        }, {
          default: vue.withCtx(() => [
            vue.createTextVNode("分享给访客开门")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"])
      ]),
      vue.createVNode(
        _component_u_toast,
        { ref: "uToast" },
        null,
        512
        /* NEED_PATCH */
      ),
      vue.createVNode(_component_u_popup, {
        show: $data.show,
        onClose: _ctx.close,
        onOpen: _ctx.open,
        mode: "center",
        round: "20"
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "center_popup" }, [
            vue.createElementVNode(
              "view",
              { class: "title" },
              vue.toDisplayString($data.community_name),
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", { class: "code" }, [
              vue.createElementVNode("image", {
                src: _imports_1$2,
                mode: ""
              }),
              vue.createElementVNode("view", { class: "text" }, " 请把二维码放置门禁摄像头前扫描 ")
            ]),
            vue.createElementVNode("view", { class: "equip_card" }, [
              vue.createElementVNode("view", { class: "equip_title" }, " 开门授权: "),
              vue.createElementVNode("view", { class: "equips" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.selected_equip, (item, index2) => {
                    return vue.openBlock(), vue.createElementBlock(
                      "view",
                      {
                        class: "equip",
                        style: { "width": "fit-content" }
                      },
                      vue.toDisplayString(item.equipName),
                      1
                      /* TEXT */
                    );
                  }),
                  256
                  /* UNKEYED_FRAGMENT */
                ))
              ])
            ]),
            vue.createElementVNode("view", { class: "tips" }, [
              vue.createTextVNode(" 此钥匙二维码有效时长  "),
              vue.createElementVNode(
                "b",
                null,
                vue.toDisplayString($data.time[0].name),
                1
                /* TEXT */
              )
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["show", "onClose", "onOpen"]),
      vue.createVNode(_component_u_popup, {
        show: $data.show,
        onClose: _ctx.close,
        onOpen: _ctx.open,
        mode: "bottom"
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "bottom_popup" }, [
            vue.createElementVNode("view", { class: "icons" }, [
              vue.createElementVNode("view", { class: "icon" }, [
                vue.createElementVNode("image", {
                  src: _imports_2,
                  mode: ""
                }),
                vue.createElementVNode("view", { class: "text" }, "微信好友")
              ]),
              vue.createElementVNode("view", {
                class: "icon",
                onClick: _cache[0] || (_cache[0] = (...args) => $options.copy && $options.copy(...args))
              }, [
                vue.createElementVNode("image", {
                  src: _imports_3,
                  mode: ""
                }),
                vue.createElementVNode("view", { class: "text" }, "复制链接")
              ])
            ]),
            vue.createElementVNode("view", {
              class: "cancel",
              onClick: _cache[1] || (_cache[1] = ($event) => $data.show = false)
            }, " 取消 ")
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["show", "onClose", "onOpen"])
    ]);
  }
  const PagesInvitorInvitor = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$x], ["__scopeId", "data-v-4dd0b017"], ["__file", "D:/study/实训/intelligent_community_app_owner/pages/invitor/invitor.vue"]]);
  function getBills(owner_id) {
    return service.get("/app/getBills?owner_id=" + owner_id);
  }
  function getBill(owner_id, bill_id) {
    return service.get("/app/getBills?owner_id=" + owner_id + "&bill_id=" + bill_id);
  }
  function updateBill(id) {
    return service.post("/app/updateBill", { id });
  }
  function getRecord(owner_id) {
    return service.get("/app/listByYear?owner_id=" + owner_id);
  }
  const _sfc_main$x = {
    data() {
      return {
        payList: [],
        statusBarHeight: ""
      };
    },
    methods: {
      back() {
        formatAppLog("log", "at pages/pay/pay.vue:50", getCurrentPages());
        if (getCurrentPages().length == 1) {
          uni.switchTab({
            url: "/pages/tarbar/me/me"
          });
        } else {
          uni.navigateBack({
            delta: 1
          });
        }
      },
      payBill(id) {
        uni.navigateTo({
          url: "/pages/pay/bill-detail?id=" + id
        });
      },
      addZero: function(number2) {
        const arr = number2.toString().split(".");
        if (arr.length === 1) {
          return `${number2}.00`;
        } else if (arr.length === 2 && arr[1].length === 1) {
          return `${number2}0`;
        } else {
          return number2;
        }
      }
    },
    onShow() {
      this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight + "px";
      const owner_id = uni.getStorageSync("owner").id;
      this.payList = [];
      getBills(owner_id).then((res) => {
        formatAppLog("log", "at pages/pay/pay.vue:85", res);
        if (res.data.code === 0) {
          this.payList = res.data.data;
          this.payList = this.payList.filter((item) => {
            return "undefined" == typeof item.paidTime;
          });
          this.payList.forEach((item) => {
            item.total = this.addZero(item.total);
          });
        }
      });
    }
  };
  function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$6);
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_2$4);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode(
        "view",
        {
          style: vue.normalizeStyle({ height: $data.statusBarHeight })
        },
        null,
        4
        /* STYLE */
      ),
      vue.createElementVNode("view", {
        class: "u-navbar",
        style: { "background-color": "#ffffff" }
      }, [
        vue.createVNode(_component_u_icon, {
          name: "arrow-left",
          onClick: $options.back,
          size: "40",
          color: "#000000"
        }, null, 8, ["onClick"]),
        vue.createElementVNode("view", null, " 生活缴费 "),
        vue.createElementVNode("navigator", { url: "/pages/pay/pay-history" }, "缴费记录")
      ]),
      vue.createElementVNode("view", {
        class: "top",
        style: { "height": "20upx", "background-color": "#f5f5f5" }
      }),
      $data.payList.length > 0 ? (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        { key: 0 },
        vue.renderList($data.payList, (item, index2) => {
          return vue.openBlock(), vue.createElementBlock("view", { class: "payment" }, [
            vue.createElementVNode("view", { class: "type" }, [
              vue.createElementVNode("image", {
                src: item.icon,
                mode: ""
              }, null, 8, ["src"]),
              vue.createTextVNode(
                " " + vue.toDisplayString(item.projectName) + "账单 ",
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("image", {
              src: "/static/line.png",
              class: "line",
              mode: ""
            }),
            vue.createElementVNode("view", {
              class: "room_no",
              style: { "display": "flex", "justify-content": "space-between", "padding": "20upx" }
            }, [
              vue.createElementVNode("text", null, "小区房屋"),
              vue.createTextVNode(
                vue.toDisplayString(item.house),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", {
              class: "room_no",
              style: { "display": "flex", "justify-content": "space-between", "padding": "20upx" }
            }, [
              vue.createElementVNode("text", null, "账单日期"),
              vue.createTextVNode(
                vue.toDisplayString(item.startTime + " - " + item.endTime),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", {
              class: "money",
              style: { "color": "#409eff", "padding": "20upx", "padding-bottom": "0", "display": "flex", "align-items": "center", "justify-content": "center" }
            }, [
              vue.createElementVNode(
                "text",
                { style: { "color": "#409eff", "font-size": "50upx", "font-weight": "700", "padding": "20upx" } },
                vue.toDisplayString(item.total),
                1
                /* TEXT */
              ),
              vue.createTextVNode("元 ")
            ]),
            vue.createElementVNode("view", {
              class: "pad_btn",
              style: { "width": "45%", "margin": "0 auto", "border-radius": "10upx", "padding": "20upx", "padding-top": "0" }
            }, [
              vue.createVNode(_component_u_button, {
                type: "primary",
                size: "small",
                onClick: ($event) => $options.payBill(item.billId)
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("text", { style: { "color": "#ffffff" } }, "去付款")
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["onClick"])
            ])
          ]);
        }),
        256
        /* UNKEYED_FRAGMENT */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesPayPay = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$w], ["__scopeId", "data-v-3a7adb9e"], ["__file", "D:/study/实训/intelligent_community_app_owner/pages/pay/pay.vue"]]);
  function getCarList(owner_id) {
    return service.get("/app/getCar?owner_id=" + owner_id);
  }
  function addCar(data) {
    return service.post("/app/addCar", data);
  }
  function deleteCar(ownerId, carId) {
    return service.post("/app/deleteCar", { ownerId, carId });
  }
  function getPark(owner_id) {
    return service.get("/app/getPark?owner_id=" + owner_id);
  }
  function getCar(owner_id, car_no) {
    return service.get("/app/getCar?owner_id=" + owner_id + "&number=" + car_no);
  }
  function unBind(park_id) {
    return service.post("/app/unbindPark/" + park_id);
  }
  function bind(park_id, car_id) {
    return service.post("/app/bindPark/" + park_id + "/" + car_id);
  }
  function getParkByCommunity(community_id) {
    return service.get("/app/getParkByCommunity?community_id=" + community_id);
  }
  function addPark(ownerId, id) {
    return service.post("/app/addPark", { ownerId, id });
  }
  const _sfc_main$w = {
    data() {
      return {
        park_list: [],
        i: 0
      };
    },
    methods: {
      left() {
        this.i++;
        if (this.i = this.park_list.length) {
          this.i = this.park_list.length - 1;
        }
      },
      right() {
        this.i--;
        if (this.i < -1) {
          this.i = 0;
        }
      },
      toAddPark() {
        uni.navigateTo({
          url: "/pages/park/add-park"
        });
      },
      toBindCar(id) {
        uni.navigateTo({
          url: "/pages/park/bind-car?id=" + id
        });
      },
      unBind(id) {
        unBind(id).then((res) => {
          formatAppLog("log", "at pages/park/park.vue:37", res);
          if (res.data.code == 0) {
            this.$refs.uToast.show({
              message: "解绑成功",
              type: "success",
              position: "top"
            });
            this.getPark();
          } else {
            this.$refs.uToast.show({
              message: "解绑失败:" + res.data.msg,
              type: "error",
              position: "top"
            });
            this.getPark();
          }
        });
      },
      getPark() {
        const owner_id = uni.getStorageSync("owner").id;
        getPark(owner_id).then((res) => {
          formatAppLog("log", "at pages/park/park.vue:58", res);
          this.park_list = res.data.data;
        });
      }
    },
    onShow() {
      this.getPark();
    }
  };
  function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_toast = resolveEasycom(vue.resolveDynamicComponent("u-toast"), __easycom_4);
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_2$4);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createVNode(
        _component_u_toast,
        { ref: "uToast" },
        null,
        512
        /* NEED_PATCH */
      ),
      $data.i >= 0 && $data.i < $data.park_list.length ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          ref: "park",
          class: "card"
        },
        [
          vue.createElementVNode("view", { class: "top" }, [
            vue.createElementVNode("view", {
              class: "between",
              onClick: _cache[0] || (_cache[0] = (...args) => $options.left && $options.left(...args))
            }, [
              vue.createElementVNode("view", {
                class: "title",
                style: { "height": "100upx", "background-color": "#1c89ff", "color": "#ffffff", "font-parkingArea": "40upx" }
              }),
              vue.createElementVNode("view", { class: "card_body" })
            ]),
            vue.createElementVNode("view", { class: "main" }, [
              vue.createElementVNode(
                "view",
                {
                  class: "title",
                  style: { "height": "100upx", "background-color": "#1c89ff", "color": "#ffffff", "font-parkingArea": "40upx" }
                },
                vue.toDisplayString($data.park_list[$data.i].parkNo),
                1
                /* TEXT */
              ),
              vue.createElementVNode("view", {
                class: "card_body",
                style: { "display": "flex", "align-items": "center", "flex-wrap": "wrap", "flex-direction": "column" }
              }, [
                $data.park_list[$data.i].hasCar == 1 ? (vue.openBlock(), vue.createElementBlock("image", {
                  key: 0,
                  style: { "height": "320upx", "width": "90%", "margin": "20upx" },
                  src: "/static/img/park/park.png",
                  mode: ""
                })) : (vue.openBlock(), vue.createElementBlock("image", {
                  key: 1,
                  style: { "height": "320upx", "width": "90%", "margin": "20upx" },
                  src: "/static/img/park/parknocar.png",
                  mode: ""
                })),
                $data.park_list[$data.i].hasCar == 1 ? (vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    key: 2,
                    style: { "height": "80upx", "width": "fit-content", "background-color": "#1c89ff", "pading": "1upx", "padding-top": "20upx", "padding-bottom": "20upx", "color": "#ffffff", "border": "1px solid black" }
                  },
                  vue.toDisplayString($data.park_list[$data.i].car.number),
                  1
                  /* TEXT */
                )) : (vue.openBlock(), vue.createElementBlock("view", { key: 3 }, [
                  vue.createVNode(_component_u_button, {
                    type: "primary",
                    parkingArea: "small",
                    shape: "circle",
                    onClick: _cache[1] || (_cache[1] = ($event) => $options.toBindCar($data.park_list[$data.i].parkId))
                  }, {
                    default: vue.withCtx(() => [
                      vue.createElementVNode("text", { style: { "color": "#ffffff", "padding": "10upx" } }, "+绑定车辆")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]))
              ])
            ]),
            vue.createElementVNode("view", {
              class: "between",
              onClick: _cache[2] || (_cache[2] = (...args) => $options.right && $options.right(...args))
            }, [
              vue.createElementVNode("view", {
                class: "title",
                style: { "height": "100upx", "background-color": "#1c89ff", "color": "#ffffff", "font-parkingArea": "40upx" }
              }),
              vue.createElementVNode("view", { class: "card_body" })
            ])
          ]),
          vue.createElementVNode("view", { class: "info" }, [
            vue.createElementVNode("view", { style: { "display": "flex", "justify-content": "space-between", "padding": "20upx", "padding-bottom": "0" } }, [
              vue.createElementVNode("text", null, "车位信息"),
              vue.createElementVNode("view", { class: "btn" }, [
                $data.park_list[$data.i].hasCar ? (vue.openBlock(), vue.createBlock(_component_u_button, {
                  key: 0,
                  type: "primary",
                  shape: "circle",
                  parkingArea: "small",
                  plain: "true",
                  onClick: _cache[3] || (_cache[3] = ($event) => $options.unBind($data.park_list[$data.i].parkId))
                }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("text", { style: { "color": "#1c89ff" } }, "解除绑定")
                  ]),
                  _: 1
                  /* STABLE */
                })) : (vue.openBlock(), vue.createBlock(_component_u_button, {
                  key: 1,
                  type: "primary",
                  shape: "circle",
                  parkingArea: "small",
                  plain: "true"
                }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("text", { style: { "color": "#1c89ff" } }, "审核中")
                  ]),
                  _: 1
                  /* STABLE */
                }))
              ])
            ]),
            vue.createElementVNode("image", {
              src: "/static/line.png",
              style: { "height": "10upx", "width": "100%" },
              mode: ""
            }),
            vue.createElementVNode("view", { style: { "display": "flex", "justify-content": "space-between", "padding": "20upx", "padding-top": "0" } }, [
              vue.createElementVNode("text", null, "车位位置"),
              vue.createTextVNode(
                " " + vue.toDisplayString($data.park_list[$data.i].garageArea),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", { style: { "display": "flex", "justify-content": "space-between", "padding": "20upx", "padding-top": "0" } }, [
              vue.createElementVNode("text", null, "车位号"),
              vue.createTextVNode(
                " " + vue.toDisplayString($data.park_list[$data.i].parkNo),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", { style: { "display": "flex", "justify-content": "space-between", "padding": "20upx", "padding-top": "0" } }, [
              vue.createElementVNode("text", null, "车位类型"),
              vue.createTextVNode(
                " " + vue.toDisplayString($data.park_list[$data.i].parkType),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", { style: { "display": "flex", "justify-content": "space-between", "padding": "20upx", "padding-top": "0" } }, [
              vue.createElementVNode("text", null, "车位尺寸"),
              vue.createTextVNode(
                " " + vue.toDisplayString($data.park_list[$data.i].parkSize),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", { style: { "display": "flex", "justify-content": "space-between", "padding": "20upx", "padding-top": "0" } }, [
              vue.createElementVNode("text", null, "绑定车辆"),
              $data.park_list[$data.i].hasCar ? (vue.openBlock(), vue.createElementBlock(
                "span",
                { key: 0 },
                vue.toDisplayString($data.park_list[$data.i].car.number),
                1
                /* TEXT */
              )) : (vue.openBlock(), vue.createElementBlock("span", { key: 1 }, "-"))
            ])
          ])
        ],
        512
        /* NEED_PATCH */
      )) : vue.createCommentVNode("v-if", true),
      $data.i == -1 ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 1,
          ref: "addPark",
          class: "card"
        },
        [
          vue.createElementVNode("view", { class: "top" }, [
            vue.createElementVNode("view", {
              class: "between",
              onClick: _cache[4] || (_cache[4] = (...args) => $options.left && $options.left(...args))
            }, [
              vue.createElementVNode("view", {
                class: "title",
                style: { "height": "100upx", "background-color": "#1c89ff", "color": "#ffffff", "font-parkingArea": "40upx" }
              }),
              vue.createElementVNode("view", { class: "card_body" })
            ]),
            vue.createElementVNode("view", { class: "main" }, [
              vue.createElementVNode("view", {
                class: "title",
                style: { "height": "100upx", "background-color": "#1c89ff", "color": "#ffffff", "font-parkingArea": "40upx" }
              }, " 车位编号 "),
              vue.createElementVNode("view", {
                class: "card_body",
                style: { "display": "flex", "align-items": "center", "flex-wrap": "wrap", "flex-direction": "column" }
              }, [
                vue.createElementVNode("image", {
                  style: { "height": "320upx", "width": "90%", "margin": "20upx" },
                  src: "/static/img/park/addpark.png",
                  mode: ""
                }),
                vue.createElementVNode("view", { style: {} }, [
                  vue.createVNode(_component_u_button, {
                    type: "primary",
                    parkingArea: "small",
                    shape: "circle",
                    onClick: $options.toAddPark
                  }, {
                    default: vue.withCtx(() => [
                      vue.createElementVNode("text", { style: { "color": "#ffffff", "padding": "10upx" } }, "+添加车位")
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["onClick"])
                ])
              ])
            ]),
            vue.createElementVNode("view", {
              class: "between",
              onClick: _cache[5] || (_cache[5] = (...args) => $options.right && $options.right(...args))
            }, [
              vue.createElementVNode("view", {
                class: "title",
                style: { "height": "100upx", "background-color": "#1c89ff", "color": "#ffffff", "font-parkingArea": "40upx" }
              }),
              vue.createElementVNode("view", { class: "card_body" })
            ])
          ]),
          vue.createElementVNode("view", { class: "info" }, [
            vue.createElementVNode("view", { style: { "display": "flex", "justify-content": "space-between", "padding": "20upx", "padding-bottom": "0" } }, [
              vue.createElementVNode("text", null, "车位信息")
            ]),
            vue.createElementVNode("image", {
              src: "/static/line.png",
              style: { "height": "10upx", "width": "100%" },
              mode: ""
            }),
            vue.createElementVNode("view", { style: { "display": "flex", "justify-content": "space-between", "padding": "20upx", "padding-top": "0" } }, [
              vue.createElementVNode("text", null, "车位位置"),
              vue.createTextVNode(" - ")
            ]),
            vue.createElementVNode("view", { style: { "display": "flex", "justify-content": "space-between", "padding": "20upx", "padding-top": "0" } }, [
              vue.createElementVNode("text", null, "车位号"),
              vue.createTextVNode(" - ")
            ]),
            vue.createElementVNode("view", { style: { "display": "flex", "justify-content": "space-between", "padding": "20upx", "padding-top": "0" } }, [
              vue.createElementVNode("text", null, "车位类型"),
              vue.createTextVNode(" - ")
            ]),
            vue.createElementVNode("view", { style: { "display": "flex", "justify-content": "space-between", "padding": "20upx", "padding-top": "0" } }, [
              vue.createElementVNode("text", null, "车位尺寸"),
              vue.createTextVNode(" - ")
            ]),
            vue.createElementVNode("view", { style: { "display": "flex", "justify-content": "space-between", "padding": "20upx", "padding-top": "0" } }, [
              vue.createElementVNode("text", null, "绑定车辆"),
              vue.createTextVNode(" - ")
            ])
          ])
        ],
        512
        /* NEED_PATCH */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesParkPark = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$v], ["__scopeId", "data-v-aa7fa1e5"], ["__file", "D:/study/实训/intelligent_community_app_owner/pages/park/park.vue"]]);
  const _imports_0$2 = "/static/img/fix/person.png";
  const _imports_1$1 = "/static/img/fix/public.png";
  const _sfc_main$v = {
    data() {
      return {
        fix_list: [
          {
            title: "幸福苑小区道路路灯不亮了",
            fixed: false,
            tag: ["公共报修", "路灯"],
            dec: "幸福苑小区道路路灯不亮了,并且亮度不够,请物业公司及时更换,防止发生意外事故。",
            imgs: [
              "https://pic.imgdb.cn/item/647c397bf024cca1738af4b5.png",
              "https://pic.imgdb.cn/item/647c397bf024cca1738af475.png",
              "https://pic.imgdb.cn/item/647c397bf024cca1738af4e0.png"
            ],
            date: "2021/05/31 10:01:45"
          },
          {
            title: "我门家室内漏水了,赶快来吧",
            fixed: true,
            tag: ["个人报修", "路灯"],
            dec: "我门家室内漏水了,赶快来吧,并且亮度不够,请物业公司及时更换,防止发生意外事故。",
            imgs: [
              "https://pic.imgdb.cn/item/647c4118f024cca1739fa676.png",
              "https://pic.imgdb.cn/item/647c4118f024cca1739fa667.png",
              "https://pic.imgdb.cn/item/647c4118f024cca1739fa612.png"
            ],
            date: "2021/05/31 10:01:45"
          }
        ]
      };
    },
    methods: {
      toPublicFix() {
        uni.navigateTo({
          url: "/pages/fix/fix-form?type=1"
        });
      },
      toPersonalFix() {
        uni.navigateTo({
          url: "/pages/fix/fix-form?type=2"
        });
      }
    }
  };
  function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_2$4);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "top" }),
      vue.createElementVNode("view", { class: "main" }, [
        vue.createElementVNode("view", { class: "fix_type" }, [
          vue.createElementVNode("view", {
            class: "public",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.toPublicFix && $options.toPublicFix(...args))
          }, [
            vue.createElementVNode("image", {
              src: _imports_0$2,
              mode: ""
            }),
            vue.createTextVNode(" 公共报修 ")
          ]),
          vue.createElementVNode("view", {
            class: "person",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.toPersonalFix && $options.toPersonalFix(...args))
          }, [
            vue.createElementVNode("image", {
              src: _imports_1$1,
              mode: ""
            }),
            vue.createTextVNode(" 个人报修 ")
          ])
        ]),
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.fix_list, (item) => {
            return vue.openBlock(), vue.createElementBlock("view", { class: "fix_card" }, [
              vue.createElementVNode("view", {
                class: "title",
                style: { "display": "flex", "justify-content": "space-between", "align-items": "center", "padding": "10upx", "padding-left": "30upx", "padding-right": "30upx", "border-bottom": "1px solid #ddd" }
              }, [
                vue.createTextVNode(
                  vue.toDisplayString(item.title) + " ",
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", {
                  class: "btn_group",
                  style: { "width": "25%" }
                }, [
                  item.fixed == false ? (vue.openBlock(), vue.createBlock(_component_u_button, {
                    key: 0,
                    color: "#ff3b31",
                    size: "small",
                    shape: "circle"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createElementVNode("text", { style: { "color": "#ffffff" } }, "未处理")
                    ]),
                    _: 1
                    /* STABLE */
                  })) : (vue.openBlock(), vue.createBlock(_component_u_button, {
                    key: 1,
                    color: "#409eff",
                    size: "small",
                    shape: "circle"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createElementVNode("text", { style: { "color": "#ffffff" } }, "已完成")
                    ]),
                    _: 1
                    /* STABLE */
                  }))
                ])
              ]),
              vue.createElementVNode("view", {
                class: "tags",
                style: { "display": "flex", "justify-content": "left" }
              }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(item.tag, (i2) => {
                    return vue.openBlock(), vue.createElementBlock(
                      "view",
                      { style: { "padding": "20upx", "min-width": "200upx", "border": "1px solid #409eff", "border-radius": "10upx", "color": "#409eff", "text-align": "center", "line-height": "20upx", "margin": "20upx", "margin-right": "0" } },
                      vue.toDisplayString(i2),
                      1
                      /* TEXT */
                    );
                  }),
                  256
                  /* UNKEYED_FRAGMENT */
                ))
              ]),
              vue.createElementVNode(
                "view",
                {
                  class: "dec",
                  style: { "margin": "20upx", "margin-top": "0", "background-color": "#f2f6fb", "padding": "20upx", "border-radius": "10upx" }
                },
                "     " + vue.toDisplayString(item.dec),
                1
                /* TEXT */
              ),
              vue.createElementVNode("view", { class: "pics" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(item.imgs, (img) => {
                    return vue.openBlock(), vue.createElementBlock("image", { src: img }, null, 8, ["src"]);
                  }),
                  256
                  /* UNKEYED_FRAGMENT */
                ))
              ]),
              vue.createElementVNode("view", {
                class: "date",
                style: { "display": "flex", "justify-content": "space-between", "padding": "20upx", "padding-top": "0" }
              }, [
                vue.createElementVNode(
                  "text",
                  { style: { "color": "#A1A1A1" } },
                  vue.toDisplayString(item.date),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("navigator", {
                  url: "/pages/fix/fix-detail",
                  style: { "color": "#409eff" }
                }, "报修详情")
              ])
            ]);
          }),
          256
          /* UNKEYED_FRAGMENT */
        )),
        vue.createElementVNode("view", {
          class: "end",
          style: { "text-align": "center", "background-color": "#f5f5f5", "padding-top": "20upx" }
        }, [
          vue.createElementVNode("text", null, "没有更多数据了~")
        ])
      ])
    ]);
  }
  const PagesFixFix = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$u], ["__scopeId", "data-v-5e16c104"], ["__file", "D:/study/实训/intelligent_community_app_owner/pages/fix/fix.vue"]]);
  const _sfc_main$u = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, " 投诉建议 ");
  }
  const PagesAdviceAdvice = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$t], ["__file", "D:/study/实训/intelligent_community_app_owner/pages/advice/advice.vue"]]);
  const _sfc_main$t = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, " 社区消息 ");
  }
  const PagesNoticeNotice = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$s], ["__file", "D:/study/实训/intelligent_community_app_owner/pages/notice/notice.vue"]]);
  const _sfc_main$s = {
    data() {
      return {
        property_phones: [
          {
            name: "幸福苑小区物业",
            phone: "010-26584523"
          },
          {
            name: "1号楼管家电话",
            phone: "010-26584523"
          },
          {
            name: "2号楼管家电话",
            phone: "010-26584523"
          },
          {
            name: "3号楼管家电话",
            phone: "010-26584523"
          },
          {
            name: "4号楼管家电话",
            phone: "010-26584523"
          }
        ],
        express_phone: [
          {
            name: "顺丰快递",
            phone: "400-8111111"
          },
          {
            name: "园通快递",
            phone: "021-69777888"
          },
          {
            name: "中通快递",
            phone: "400-8895543"
          },
          {
            name: "韵达快递",
            phone: "021-39207888"
          },
          {
            name: "EMS快递",
            phone: "10000"
          }
        ]
      };
    },
    methods: {}
  };
  function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "top" }),
      vue.createElementVNode("view", { class: "main" }, [
        vue.createElementVNode("view", { class: "property_phones" }, [
          vue.createElementVNode("view", { style: { "padding": "20upx", "color": "#ffffff" } }, " 社区物业电话 "),
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.property_phones, (item) => {
              return vue.openBlock(), vue.createElementBlock("view", { class: "phone" }, [
                vue.createElementVNode(
                  "text",
                  null,
                  vue.toDisplayString(item.name),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "text",
                  { style: { "margin-left": "100upx" } },
                  vue.toDisplayString(item.phone),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("image", {
                  src: "/static/phone.png",
                  mode: ""
                })
              ]);
            }),
            256
            /* UNKEYED_FRAGMENT */
          ))
        ]),
        vue.createElementVNode("view", { class: "property_phones" }, [
          vue.createElementVNode("view", { style: { "padding": "20upx" } }, " 快递电话 "),
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.express_phone, (item) => {
              return vue.openBlock(), vue.createElementBlock("view", { class: "phone" }, [
                vue.createElementVNode(
                  "text",
                  null,
                  vue.toDisplayString(item.name),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "text",
                  { style: { "margin-left": "170upx" } },
                  vue.toDisplayString(item.phone),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("image", {
                  src: "/static/phone.png",
                  mode: ""
                })
              ]);
            }),
            256
            /* UNKEYED_FRAGMENT */
          ))
        ])
      ])
    ]);
  }
  const PagesPhonesPhones = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$r], ["__scopeId", "data-v-790c2573"], ["__file", "D:/study/实训/intelligent_community_app_owner/pages/phones/phones.vue"]]);
  const _sfc_main$r = {
    data() {
      return {
        family_list: [
          {
            name: "李晓旭",
            isRegister: true,
            phone: "1300****1300",
            user_type: "家属",
            time: "长期有效"
          },
          {
            name: "吴用",
            isRegister: false,
            phone: "1300****1300",
            user_type: "租户",
            time: "长期有效"
          },
          {
            name: "范闲",
            isRegister: false,
            phone: "1300****1300",
            user_type: "租户",
            time: "长期有效"
          },
          {
            name: "李晓虹",
            isRegister: false,
            phone: "1300****1300",
            user_type: "家属",
            time: "长期有效"
          }
        ],
        statusBarHeight: ""
      };
    },
    methods: {
      back() {
        formatAppLog("log", "at pages/family/family.vue:96", getCurrentPages());
        if (getCurrentPages().length == 1) {
          uni.switchTab({
            url: "/pages/tarbar/me/me"
          });
        } else {
          uni.navigateBack({
            delta: 1
          });
        }
      }
    },
    onShow() {
      this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight + "px";
      this.share_list = [];
    }
  };
  function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$6);
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_2$4);
    const _component_u_toast = resolveEasycom(vue.resolveDynamicComponent("u-toast"), __easycom_4);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode(
          "view",
          {
            style: vue.normalizeStyle({ height: $data.statusBarHeight })
          },
          null,
          4
          /* STYLE */
        ),
        vue.createElementVNode("view", { class: "u-navbar" }, [
          vue.createVNode(_component_u_icon, {
            name: "arrow-left",
            onClick: $options.back,
            size: "40",
            color: "#000000"
          }, null, 8, ["onClick"]),
          vue.createElementVNode("view", { style: { "padding-left": "100upx" } }, " 家庭成员 "),
          vue.createElementVNode("navigator", {
            url: "/pages/family/add-family",
            style: { "color": "#189eff" }
          }, "+添加家庭成员")
        ]),
        vue.createElementVNode("view", { class: "container" }, [
          vue.createElementVNode("view", { class: "top" }),
          vue.createElementVNode("view", { class: "family_list" }, [
            vue.createElementVNode("view", {
              class: "room",
              style: { "background-color": "#ffffff", "display": "flex", "color": "#189eff", "padding": "20upx", "width": "fit-content", "border-radius": "5upx", "margin-bottom": "80upx" }
            }, [
              vue.createTextVNode(" 幸福苑小区1号楼1单元1305室"),
              vue.createVNode(_component_u_icon, {
                name: "arrow-down-fill",
                color: "#189eff"
              })
            ]),
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.family_list, (item) => {
                return vue.openBlock(), vue.createElementBlock("view", { class: "family_card" }, [
                  vue.createElementVNode("view", {
                    class: "title",
                    style: { "display": "flex", "padding": "20upx", "width": "100%", "justify-content": "space-between", "align-items": "center" }
                  }, [
                    vue.createElementVNode("view", { style: { "display": "flex" } }, [
                      vue.createElementVNode(
                        "text",
                        { style: { "font-size": "40upx", "color": "#000000" } },
                        vue.toDisplayString(item.name),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode("view", {
                        class: "btn",
                        style: { "padding-left": "20upx" }
                      }, [
                        item.isRegister == true ? (vue.openBlock(), vue.createBlock(_component_u_button, {
                          key: 0,
                          type: "primary",
                          plain: "true",
                          shape: "circle",
                          size: "small"
                        }, {
                          default: vue.withCtx(() => [
                            vue.createElementVNode("text", { style: { "color": "#189eff" } }, "已注册")
                          ]),
                          _: 1
                          /* STABLE */
                        })) : (vue.openBlock(), vue.createBlock(_component_u_button, {
                          key: 1,
                          type: "primary",
                          plain: "true",
                          shape: "circle",
                          size: "small"
                        }, {
                          default: vue.withCtx(() => [
                            vue.createElementVNode("text", { style: { "color": "#189eff" } }, "未注册")
                          ]),
                          _: 1
                          /* STABLE */
                        }))
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "delete_btn" }, [
                      vue.createVNode(_component_u_button, {
                        type: "primary",
                        plain: "true",
                        color: "#A1A1A1",
                        shape: "circle",
                        size: "small"
                      }, {
                        default: vue.withCtx(() => [
                          vue.createElementVNode("text", { style: { "color": "#A1A1A1" } }, "×删除")
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ])
                  ]),
                  vue.createElementVNode("view", { style: { "padding": "20upx", "padding-top": "0" } }, [
                    vue.createElementVNode(
                      "text",
                      null,
                      vue.toDisplayString(item.phone),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("view", { style: { "display": "flex", "justify-content": "space-between", "padding": "20upx" } }, [
                    vue.createElementVNode("text", null, "住户类型"),
                    vue.createTextVNode(
                      " " + vue.toDisplayString(item.user_type),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("view", { style: { "display": "flex", "justify-content": "space-between", "padding": "20upx", "padding-top": "0", "padding-bottom": "30upx" } }, [
                    vue.createElementVNode("text", null, "有效期"),
                    vue.createTextVNode(
                      " " + vue.toDisplayString(item.time),
                      1
                      /* TEXT */
                    )
                  ])
                ]);
              }),
              256
              /* UNKEYED_FRAGMENT */
            ))
          ]),
          vue.createVNode(
            _component_u_toast,
            { ref: "uToast" },
            null,
            512
            /* NEED_PATCH */
          )
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesFamilyFamily = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$q], ["__scopeId", "data-v-775accd8"], ["__file", "D:/study/实训/intelligent_community_app_owner/pages/family/family.vue"]]);
  const _sfc_main$q = {
    data() {
      return {
        share_list: [
          {
            id: 0,
            code_name: "幸福苑小区",
            devices: ["西入口闸机", "东入口闸机", "1号楼1单元门", "1号楼2单元门"],
            effective_time: "12小时",
            failure: 1
          },
          {
            id: 0,
            code_name: "幸福苑小区",
            devices: ["西入口闸机", "东入口闸机", "1号楼1单元门", "1号楼2单元门"],
            effective_time: "12小时",
            failure: 1
          }
        ],
        statusBarHeight: ""
      };
    },
    methods: {
      back() {
        formatAppLog("log", "at pages/invitor/myInvitor.vue:86", getCurrentPages());
        if (getCurrentPages().length == 1) {
          uni.switchTab({
            url: "/pages/tarbar/me/me"
          });
        } else {
          uni.navigateBack({
            delta: 1
          });
        }
      },
      toVister() {
        uni.navigateTo({
          url: "/pages/invitor/invitor"
        });
      },
      unuse(code_id) {
        const owner_id = uni.getStorageSync("owner").id;
        updateCode(code_id).then((res) => {
          if (res.data.code === 0) {
            this.$refs.uToast.show({
              message: "已失效",
              type: "success",
              position: "top",
              duration: "1000"
            });
            getCodeList(owner_id).then((res2) => {
              formatAppLog("log", "at pages/invitor/myInvitor.vue:114", res2);
              this.share_list = res2.data.data;
            });
          } else {
            this.$refs.uToast.show({
              message: "操作失败",
              type: "error",
              position: "top",
              duration: "1000"
            });
          }
        }).catch((err) => {
          this.$refs.uToast.show({
            message: "服务器错误",
            type: "error",
            position: "top",
            duration: "1000"
          });
        });
      }
    },
    onShow() {
      this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight + "px";
      this.share_list = [];
      const owner_id = uni.getStorageSync("owner").id;
      getCodeList(owner_id).then((res) => {
        formatAppLog("log", "at pages/invitor/myInvitor.vue:140", res);
        this.share_list = res.data.data;
        this.share_list = this.share_list.reverse();
      });
    }
  };
  function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$6);
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_2$4);
    const _component_u_toast = resolveEasycom(vue.resolveDynamicComponent("u-toast"), __easycom_4);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode(
          "view",
          {
            style: vue.normalizeStyle({ height: $data.statusBarHeight })
          },
          null,
          4
          /* STYLE */
        ),
        vue.createElementVNode("view", { class: "u-navbar" }, [
          vue.createVNode(_component_u_icon, {
            name: "arrow-left",
            onClick: $options.back,
            size: "40",
            color: "#000000"
          }, null, 8, ["onClick"]),
          vue.createElementVNode("view", null, " 我的访客 "),
          vue.createElementVNode("navigator", {
            url: "/pages/invitor/openHistory",
            style: { "color": "#189eff" }
          }, "开门记录")
        ]),
        vue.createElementVNode("view", { class: "container" }, [
          vue.createElementVNode("view", { class: "top" }, [
            vue.createElementVNode("view", {
              class: "top_title",
              style: { "display": "flex", "justify-content": "space-between", "align-items": "center", "height": "90%" }
            }, [
              vue.createElementVNode("text", { style: { "color": "#ffffff", "font-size": "40upx", "padding": "30upx" } }, "访客邀请记录"),
              vue.createElementVNode("view", {
                class: "btn",
                style: { "width": "250upx", "margin-right": "30upx" }
              }, [
                vue.createVNode(_component_u_button, {
                  type: "primary",
                  color: "#ffffff",
                  shape: "circle",
                  text: "",
                  onClick: $options.toVister
                }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("text", { style: { "color": "#409eff" } }, "+访客邀请")
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["onClick"])
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "share_cards" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.share_list, (item, index2) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: item.uuid,
                  class: "share_card"
                }, [
                  vue.createElementVNode("view", { class: "name" }, [
                    vue.createElementVNode(
                      "view",
                      null,
                      vue.toDisplayString(item.codeName),
                      1
                      /* TEXT */
                    ),
                    item.failure == 1 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "failure",
                      style: { "color": "#409eff", "border-color": "#409eff" },
                      onClick: ($event) => $options.unuse(item.uuid)
                    }, "使失效", 8, ["onClick"])) : (vue.openBlock(), vue.createElementBlock("view", {
                      key: 1,
                      class: "failure",
                      style: { "color": "#A1A1A1", "border-color": "#A1A1A1" }
                    }, "已失效"))
                  ]),
                  vue.createElementVNode("hr"),
                  vue.createElementVNode("view", { class: "equips_card" }, [
                    vue.createElementVNode("view", { class: "equip_title" }, " 开门授权: "),
                    vue.createElementVNode("view", { class: "equips" }, [
                      (vue.openBlock(true), vue.createElementBlock(
                        vue.Fragment,
                        null,
                        vue.renderList(item.devices, (i2, idx) => {
                          return vue.openBlock(), vue.createElementBlock(
                            "view",
                            { class: "equip" },
                            vue.toDisplayString(i2),
                            1
                            /* TEXT */
                          );
                        }),
                        256
                        /* UNKEYED_FRAGMENT */
                      ))
                    ])
                  ]),
                  vue.createElementVNode("view", { class: "effective_time" }, [
                    vue.createElementVNode(
                      "view",
                      null,
                      " 有效期时长:   " + vue.toDisplayString(item.effectiveTime + "小时"),
                      1
                      /* TEXT */
                    ),
                    item.failure == 1 ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
                      vue.createVNode(_component_u_icon, {
                        name: "share-square",
                        label: "分享",
                        color: "#409eff",
                        "label-color": "#409eff",
                        "label-size": "20upx",
                        size: "40"
                      })
                    ])) : (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
                      vue.createVNode(_component_u_icon, {
                        name: "share-square",
                        label: "分享",
                        "label-size": "20upx",
                        size: "40"
                      })
                    ]))
                  ])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          vue.createVNode(
            _component_u_toast,
            { ref: "uToast" },
            null,
            512
            /* NEED_PATCH */
          )
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesInvitorMyInvitor = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$p], ["__scopeId", "data-v-3707edc9"], ["__file", "D:/study/实训/intelligent_community_app_owner/pages/invitor/myInvitor.vue"]]);
  const _sfc_main$p = {
    data() {
      return {};
    },
    methods: {
      logout() {
        uni.clearStorage();
        this.$refs.uToast.show({
          message: "退出成功",
          position: "top",
          type: "success"
        });
      }
    }
  };
  function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_cell = resolveEasycom(vue.resolveDynamicComponent("u-cell"), __easycom_0$2);
    const _component_u_toast = resolveEasycom(vue.resolveDynamicComponent("u-toast"), __easycom_4);
    const _component_u_cell_group = resolveEasycom(vue.resolveDynamicComponent("u-cell-group"), __easycom_1$4);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_u_cell_group, null, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_u_cell, {
            icon: "",
            title: "修改密码",
            isLink: true,
            url: "/pages/login/re-password"
          }),
          vue.createVNode(_component_u_cell, {
            icon: "",
            title: "退出登录",
            url: "/pages/setting/setting",
            onClick: $options.logout
          }, null, 8, ["onClick"]),
          vue.createVNode(
            _component_u_toast,
            { ref: "uToast" },
            null,
            512
            /* NEED_PATCH */
          )
        ]),
        _: 1
        /* STABLE */
      })
    ]);
  }
  const PagesSettingSetting = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$o], ["__file", "D:/study/实训/intelligent_community_app_owner/pages/setting/setting.vue"]]);
  const _sfc_main$o = {
    data() {
      return {
        activity: {}
      };
    },
    methods: {},
    onLoad(option) {
      formatAppLog("log", "at pages/tarbar/index/activity.vue:38", option.id);
      getActivityById(option.id).then((res) => {
        formatAppLog("log", "at pages/tarbar/index/activity.vue:40", res);
        if (res.data.data) {
          this.activity = res.data.data;
          formatAppLog("log", "at pages/tarbar/index/activity.vue:43", this.activity);
        }
      });
    }
  };
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$6);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "title" }, [
        vue.createElementVNode(
          "h3",
          null,
          vue.toDisplayString($data.activity.infoDescription),
          1
          /* TEXT */
        )
      ]),
      vue.createElementVNode("view", { class: "date" }, [
        vue.createVNode(_component_u_icon, { name: "clock" }),
        vue.createTextVNode(
          vue.toDisplayString($data.activity.startTime) + "     ",
          1
          /* TEXT */
        ),
        vue.createVNode(_component_u_icon, { name: "eye" }),
        vue.createTextVNode(" 1524 ")
      ]),
      vue.createElementVNode("hr"),
      vue.createElementVNode(
        "view",
        { class: "content" },
        vue.toDisplayString($data.activity.infoContent),
        1
        /* TEXT */
      ),
      vue.createElementVNode("view", { class: "info" }, [
        vue.createElementVNode("b", null, [
          vue.createTextVNode(" 主办单位: 幸福苑物业管理公司"),
          vue.createElementVNode("br"),
          vue.createTextVNode("                 聚力房地产有限公司"),
          vue.createElementVNode("br"),
          vue.createTextVNode(
            " 活动时间: " + vue.toDisplayString($data.activity.startTime) + " ~ " + vue.toDisplayString($data.activity.endTime),
            1
            /* TEXT */
          ),
          vue.createElementVNode("br"),
          vue.createTextVNode(" 联系电话: 010-252656988 ")
        ])
      ])
    ]);
  }
  const PagesTarbarIndexActivity = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$n], ["__scopeId", "data-v-e941d67c"], ["__file", "D:/study/实训/intelligent_community_app_owner/pages/tarbar/index/activity.vue"]]);
  const _sfc_main$n = {
    data() {
      return {
        notice: {}
      };
    },
    methods: {},
    onLoad(option) {
      getNoticeById(option.id).then((res) => {
        formatAppLog("log", "at pages/tarbar/message/msg-detail.vue:38", res);
        this.notice = res.data.data;
        this.notice.releaseTime;
      });
    }
  };
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$6);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "notice" }, [
        vue.createElementVNode("view", { class: "title" }, [
          vue.createElementVNode(
            "h3",
            null,
            vue.toDisplayString($data.notice.title),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { class: "date" }, [
          vue.createVNode(_component_u_icon, { name: "clock" }),
          vue.createTextVNode(
            "  " + vue.toDisplayString($data.notice.releaseTime) + "    ",
            1
            /* TEXT */
          ),
          vue.createVNode(_component_u_icon, { name: "eye" }),
          vue.createTextVNode(" 1524 ")
        ]),
        vue.createElementVNode("hr"),
        vue.createElementVNode(
          "view",
          { class: "content" },
          "     " + vue.toDisplayString($data.notice.content),
          1
          /* TEXT */
        ),
        vue.createElementVNode("view", { class: "info" }, [
          vue.createElementVNode(
            "view",
            null,
            vue.toDisplayString($data.notice.publisher),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "view",
            null,
            vue.toDisplayString($data.notice.releaseTime),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", null, "物业电话: 010-25358887")
        ])
      ])
    ]);
  }
  const PagesTarbarMessageMsgDetail = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$m], ["__scopeId", "data-v-9242f160"], ["__file", "D:/study/实训/intelligent_community_app_owner/pages/tarbar/message/msg-detail.vue"]]);
  const _sfc_main$m = {
    data() {
      return {
        history_list: []
      };
    },
    methods: {},
    onShow() {
      const owner_id = uni.getStorageSync("owner").id;
      getRecord$1(owner_id).then((res) => {
        formatAppLog("log", "at pages/invitor/openHistory.vue:39", res);
        this.history_list = res.data.data;
      });
    }
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "top" }, [
        vue.createElementVNode("view", {
          class: "top_title",
          style: { "display": "flex", "justify-content": "space-between", "align-items": "center", "height": "90%" }
        }, [
          vue.createElementVNode("text", { style: { "color": "#ffffff", "font-size": "40upx", "padding": "30upx" } }, "访客开门记录")
        ])
      ]),
      vue.createElementVNode("view", { class: "history_list" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.history_list, (item, index2) => {
            return vue.openBlock(), vue.createElementBlock("view", { class: "history" }, [
              vue.createElementVNode(
                "view",
                { class: "name" },
                vue.toDisplayString(item.device),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                { class: "time" },
                vue.toDisplayString(item.open_time),
                1
                /* TEXT */
              )
            ]);
          }),
          256
          /* UNKEYED_FRAGMENT */
        )),
        vue.createElementVNode("view", {
          class: "tips",
          style: { "font-size": "30upx", "text-align": "center", "background-color": "#f5f5f5", "padding-top": "50upx", "color": "#A1A1A1" }
        }, " 没有更多数据了~ ")
      ])
    ]);
  }
  const PagesInvitorOpenHistory = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l], ["__scopeId", "data-v-599e62a7"], ["__file", "D:/study/实训/intelligent_community_app_owner/pages/invitor/openHistory.vue"]]);
  function pickExclude(obj, keys) {
    if (!["[object Object]", "[object File]"].includes(Object.prototype.toString.call(obj))) {
      return {};
    }
    return Object.keys(obj).reduce((prev, key) => {
      if (!keys.includes(key)) {
        prev[key] = obj[key];
      }
      return prev;
    }, {});
  }
  function formatImage(res) {
    return res.tempFiles.map((item) => ({
      ...pickExclude(item, ["path"]),
      type: "image",
      url: item.path,
      thumb: item.path,
      size: item.size
    }));
  }
  function formatVideo(res) {
    return [
      {
        ...pickExclude(res, ["tempFilePath", "thumbTempFilePath", "errMsg"]),
        type: "video",
        url: res.tempFilePath,
        thumb: res.thumbTempFilePath,
        size: res.size
      }
    ];
  }
  function chooseFile({
    accept,
    multiple,
    capture,
    compressed,
    maxDuration,
    sizeType,
    camera,
    maxCount
  }) {
    return new Promise((resolve, reject) => {
      switch (accept) {
        case "image":
          uni.chooseImage({
            count: multiple ? Math.min(maxCount, 9) : 1,
            sourceType: capture,
            sizeType,
            success: (res) => resolve(formatImage(res)),
            fail: reject
          });
          break;
        case "video":
          uni.chooseVideo({
            sourceType: capture,
            compressed,
            maxDuration,
            camera,
            success: (res) => resolve(formatVideo(res)),
            fail: reject
          });
          break;
      }
    });
  }
  const mixinUp = {
    watch: {
      // 监听accept的变化，判断是否符合个平台要求
      // 只有微信小程序才支持选择媒体，文件类型，所以这里做一个判断提示
      accept: {
        immediate: true,
        handler(val) {
          if (val === "all" || val === "media") {
            uni.$u.error("只有微信小程序才支持把accept配置为all、media之一");
          }
          if (val === "file") {
            uni.$u.error("只有微信小程序和H5(HX2.9.9)才支持把accept配置为file");
          }
        }
      }
    }
  };
  const props$8 = {
    props: {
      // 接受的文件类型, 可选值为all media image file video
      accept: {
        type: String,
        default: props$x.upload.accept
      },
      // 	图片或视频拾取模式，当accept为image类型时设置capture可选额外camera可以直接调起摄像头
      capture: {
        type: [String, Array],
        default: props$x.upload.capture
      },
      // 当accept为video时生效，是否压缩视频，默认为true
      compressed: {
        type: Boolean,
        default: props$x.upload.compressed
      },
      // 当accept为video时生效，可选值为back或front
      camera: {
        type: String,
        default: props$x.upload.camera
      },
      // 当accept为video时生效，拍摄视频最长拍摄时间，单位秒
      maxDuration: {
        type: Number,
        default: props$x.upload.maxDuration
      },
      // 上传区域的图标，只能内置图标
      uploadIcon: {
        type: String,
        default: props$x.upload.uploadIcon
      },
      // 上传区域的图标的颜色，默认
      uploadIconColor: {
        type: String,
        default: props$x.upload.uploadIconColor
      },
      // 是否开启文件读取前事件
      useBeforeRead: {
        type: Boolean,
        default: props$x.upload.useBeforeRead
      },
      // 读取后的处理函数
      afterRead: {
        type: Function,
        default: null
      },
      // 读取前的处理函数
      beforeRead: {
        type: Function,
        default: null
      },
      // 是否显示组件自带的图片预览功能
      previewFullImage: {
        type: Boolean,
        default: props$x.upload.previewFullImage
      },
      // 最大上传数量
      maxCount: {
        type: [String, Number],
        default: props$x.upload.maxCount
      },
      // 是否启用
      disabled: {
        type: Boolean,
        default: props$x.upload.disabled
      },
      // 预览上传的图片时的裁剪模式，和image组件mode属性一致
      imageMode: {
        type: String,
        default: props$x.upload.imageMode
      },
      // 标识符，可以在回调函数的第二项参数中获取
      name: {
        type: String,
        default: props$x.upload.name
      },
      // 所选的图片的尺寸, 可选值为original compressed
      sizeType: {
        type: Array,
        default: props$x.upload.sizeType
      },
      // 是否开启图片多选，部分安卓机型不支持
      multiple: {
        type: Boolean,
        default: props$x.upload.multiple
      },
      // 是否展示删除按钮
      deletable: {
        type: Boolean,
        default: props$x.upload.deletable
      },
      // 文件大小限制，单位为byte
      maxSize: {
        type: [String, Number],
        default: props$x.upload.maxSize
      },
      // 显示已上传的文件列表
      fileList: {
        type: Array,
        default: props$x.upload.fileList
      },
      // 上传区域的提示文字
      uploadText: {
        type: String,
        default: props$x.upload.uploadText
      },
      // 内部预览图片区域和选择图片按钮的区域宽度
      width: {
        type: [String, Number],
        default: props$x.upload.width
      },
      // 内部预览图片区域和选择图片按钮的区域高度
      height: {
        type: [String, Number],
        default: props$x.upload.height
      },
      // 是否在上传完成后展示预览图
      previewImage: {
        type: Boolean,
        default: props$x.upload.previewImage
      }
    }
  };
  const _sfc_main$l = {
    name: "u-upload",
    mixins: [mpMixin, mixin, mixinUp, props$8],
    data() {
      return {
        lists: [],
        isInCount: true
      };
    },
    watch: {
      // 监听文件列表的变化，重新整理内部数据
      fileList: {
        immediate: true,
        handler() {
          this.formatFileList();
        },
        immediate: true,
        deep: true
      }
    },
    emits: ["error", "beforeRead", "oversize", "afterRead", "delete", "clickPreview"],
    methods: {
      formatFileList() {
        const {
          fileList = [],
          maxCount
        } = this;
        const lists = fileList.map(
          (item) => Object.assign(Object.assign({}, item), {
            // 如果item.url为本地选择的blob文件的话，无法判断其为video还是image，此处优先通过accept做判断处理
            isImage: this.accept === "image" || uni.$u.test.image(item.url || item.thumb),
            isVideo: this.accept === "video" || uni.$u.test.video(item.url || item.thumb),
            deletable: typeof item.deletable === "boolean" ? item.deletable : this.deletable
          })
        );
        this.lists = lists;
        this.isInCount = lists.length < maxCount;
      },
      chooseFile() {
        const {
          maxCount,
          multiple,
          lists,
          disabled
        } = this;
        if (disabled)
          return;
        let capture;
        try {
          capture = uni.$u.test.array(this.capture) ? this.capture : this.capture.split(",");
        } catch (e) {
          capture = [];
        }
        chooseFile(
          Object.assign({
            accept: this.accept,
            multiple: this.multiple,
            capture,
            compressed: this.compressed,
            maxDuration: this.maxDuration,
            sizeType: this.sizeType,
            camera: this.camera
          }, {
            maxCount: maxCount - lists.length
          })
        ).then((res) => {
          this.onBeforeRead(multiple ? res : res[0]);
        }).catch((error2) => {
          this.$emit("error", error2);
        });
      },
      // 文件读取之前
      onBeforeRead(file) {
        const {
          beforeRead,
          useBeforeRead
        } = this;
        let res = true;
        if (uni.$u.test.func(beforeRead)) {
          res = beforeRead(file, this.getDetail());
        }
        if (useBeforeRead) {
          res = new Promise((resolve, reject) => {
            this.$emit(
              "beforeRead",
              Object.assign(Object.assign({
                file
              }, this.getDetail()), {
                callback: (ok) => {
                  ok ? resolve() : reject();
                }
              })
            );
          });
        }
        if (!res) {
          return;
        }
        if (uni.$u.test.promise(res)) {
          res.then((data) => this.onAfterRead(data || file));
        } else {
          this.onAfterRead(file);
        }
      },
      getDetail(index2) {
        return {
          name: this.name,
          index: index2 == null ? this.fileList.length : index2
        };
      },
      onAfterRead(file) {
        const {
          maxSize,
          afterRead
        } = this;
        const oversize = Array.isArray(file) ? file.some((item) => item.size > maxSize) : file.size > maxSize;
        if (oversize) {
          this.$emit("oversize", Object.assign({
            file
          }, this.getDetail()));
          return;
        }
        if (typeof afterRead === "function") {
          afterRead(file, this.getDetail());
        }
        this.$emit("afterRead", Object.assign({
          file
        }, this.getDetail()));
      },
      deleteItem(index2) {
        this.$emit(
          "delete",
          Object.assign(Object.assign({}, this.getDetail(index2)), {
            file: this.fileList[index2]
          })
        );
      },
      // 预览图片
      onPreviewImage(item) {
        if (!item.isImage || !this.previewFullImage)
          return;
        uni.previewImage({
          // 先filter找出为图片的item，再返回filter结果中的图片url
          urls: this.lists.filter((item2) => this.accept === "image" || uni.$u.test.image(item2.url || item2.thumb)).map((item2) => item2.url || item2.thumb),
          current: item.url || item.thumb,
          fail() {
            uni.$u.toast("预览图片失败");
          }
        });
      },
      onPreviewVideo(event) {
        if (!this.data.previewFullImage)
          return;
        const {
          index: index2
        } = event.currentTarget.dataset;
        const {
          lists
        } = this.data;
        wx.previewMedia({
          sources: lists.filter((item) => isVideoFile(item)).map(
            (item) => Object.assign(Object.assign({}, item), {
              type: "video"
            })
          ),
          current: index2,
          fail() {
            uni.$u.toast("预览视频失败");
          }
        });
      },
      onClickPreview(event) {
        const {
          index: index2
        } = event.currentTarget.dataset;
        const item = this.data.lists[index2];
        this.$emit(
          "clickPreview",
          Object.assign(Object.assign({}, item), this.getDetail(index2))
        );
      }
    }
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$6);
    const _component_u_loading_icon = resolveEasycom(vue.resolveDynamicComponent("u-loading-icon"), __easycom_1$9);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "u-upload",
        style: vue.normalizeStyle([_ctx.$u.addStyle(_ctx.customStyle)])
      },
      [
        vue.createElementVNode("view", { class: "u-upload__wrap" }, [
          _ctx.previewImage ? (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            { key: 0 },
            vue.renderList($data.lists, (item, index2) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "u-upload__wrap__preview",
                key: index2
              }, [
                item.isImage || item.type && item.type === "image" ? (vue.openBlock(), vue.createElementBlock("image", {
                  key: 0,
                  src: item.thumb || item.url,
                  mode: _ctx.imageMode,
                  class: "u-upload__wrap__preview__image",
                  onClick: ($event) => $options.onPreviewImage(item),
                  style: vue.normalizeStyle([{
                    width: _ctx.$u.addUnit(_ctx.width),
                    height: _ctx.$u.addUnit(_ctx.height)
                  }])
                }, null, 12, ["src", "mode", "onClick"])) : (vue.openBlock(), vue.createElementBlock("view", {
                  key: 1,
                  class: "u-upload__wrap__preview__other"
                }, [
                  vue.createVNode(_component_u_icon, {
                    color: "#80CBF9",
                    size: "26",
                    name: item.isVideo || item.type && item.type === "video" ? "movie" : "folder"
                  }, null, 8, ["name"]),
                  vue.createElementVNode(
                    "text",
                    { class: "u-upload__wrap__preview__other__text" },
                    vue.toDisplayString(item.isVideo || item.type && item.type === "video" ? "视频" : "文件"),
                    1
                    /* TEXT */
                  )
                ])),
                item.status === "uploading" || item.status === "failed" ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 2,
                  class: "u-upload__status"
                }, [
                  vue.createElementVNode("view", { class: "u-upload__status__icon" }, [
                    item.status === "failed" ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
                      key: 0,
                      name: "close-circle",
                      color: "#ffffff",
                      size: "25"
                    })) : (vue.openBlock(), vue.createBlock(_component_u_loading_icon, {
                      key: 1,
                      size: "22",
                      mode: "circle",
                      color: "#ffffff"
                    }))
                  ]),
                  item.message ? (vue.openBlock(), vue.createElementBlock(
                    "text",
                    {
                      key: 0,
                      class: "u-upload__status__message"
                    },
                    vue.toDisplayString(item.message),
                    1
                    /* TEXT */
                  )) : vue.createCommentVNode("v-if", true)
                ])) : vue.createCommentVNode("v-if", true),
                item.status !== "uploading" && (_ctx.deletable || item.deletable) ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 3,
                  class: "u-upload__deletable",
                  onClick: vue.withModifiers(($event) => $options.deleteItem(index2), ["stop"])
                }, [
                  vue.createElementVNode("view", { class: "u-upload__deletable__icon" }, [
                    vue.createVNode(_component_u_icon, {
                      name: "close",
                      color: "#ffffff",
                      size: "10"
                    })
                  ])
                ], 8, ["onClick"])) : vue.createCommentVNode("v-if", true),
                item.status === "success" ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 4,
                  class: "u-upload__success"
                }, [
                  vue.createElementVNode("view", { class: "u-upload__success__icon" }, [
                    vue.createVNode(_component_u_icon, {
                      name: "checkmark",
                      color: "#ffffff",
                      size: "12"
                    })
                  ])
                ])) : vue.createCommentVNode("v-if", true)
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          )) : vue.createCommentVNode("v-if", true),
          $data.isInCount ? (vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            { key: 1 },
            [
              _ctx.$slots.default || _ctx.$slots.$default ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                onClick: _cache[0] || (_cache[0] = (...args) => $options.chooseFile && $options.chooseFile(...args))
              }, [
                vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ])) : (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: vue.normalizeClass(["u-upload__button", [_ctx.disabled && "u-upload__button--disabled"]]),
                "hover-class": !_ctx.disabled ? "u-upload__button--hover" : "",
                "hover-stay-time": "150",
                onClick: _cache[1] || (_cache[1] = (...args) => $options.chooseFile && $options.chooseFile(...args)),
                style: vue.normalizeStyle([{
                  width: _ctx.$u.addUnit(_ctx.width),
                  height: _ctx.$u.addUnit(_ctx.height)
                }])
              }, [
                vue.createVNode(_component_u_icon, {
                  name: _ctx.uploadIcon,
                  size: "26",
                  color: _ctx.uploadIconColor
                }, null, 8, ["name", "color"]),
                _ctx.uploadText ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    class: "u-upload__button__text"
                  },
                  vue.toDisplayString(_ctx.uploadText),
                  1
                  /* TEXT */
                )) : vue.createCommentVNode("v-if", true)
              ], 14, ["hover-class"]))
            ],
            64
            /* STABLE_FRAGMENT */
          )) : vue.createCommentVNode("v-if", true)
        ])
      ],
      4
      /* STYLE */
    );
  }
  const __easycom_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["__scopeId", "data-v-c8491d64"], ["__file", "D:/study/实训/intelligent_community_app_owner/uni_modules/uview-plus/components/u-upload/u-upload.vue"]]);
  const _imports_0$1 = "/static/img/home/back.png";
  const _imports_1 = "/static/img/home/main.png";
  const _sfc_main$k = {
    data() {
      return {
        formData: {
          name: "",
          phone: "",
          idCard: ""
        },
        radio_data: true,
        //true 为男,false为女
        fileList1: [],
        fileList2: [],
        //picker控制
        community_show: false,
        building_show: false,
        unit_show: false,
        room_show: false,
        //picker数据
        community_columns: [[]],
        building_columns: [[]],
        unit_columns: [["1单元", "2单元"]],
        room_columns: [[]],
        community_name: "请选择小区",
        building_name: "请选择楼栋",
        unit_name: "请选择单元",
        room_name: "请选择房间号",
        selected_building: {},
        //请求的对象数据
        require: {}
      };
    },
    methods: {
      getOwnerId() {
        return uni.getStorageSync("owner").id;
      },
      // 删除图片
      deletePic(event) {
        this[`fileList${event.name}`].splice(event.index, 1);
      },
      // 新增图片
      async afterRead(event) {
        let lists = [].concat(event.file);
        let fileListLen = this[`fileList${event.name}`].length;
        lists.map((item) => {
          this[`fileList${event.name}`].push({
            ...item,
            status: "uploading",
            message: "上传中"
          });
        });
        for (let i2 = 0; i2 < lists.length; i2++) {
          const result = await this.uploadFilePromise(lists[i2].url);
          formatAppLog("log", "at pages/home/owner-add-house.vue:186", result);
          let item = this[`fileList${event.name}`][fileListLen];
          this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
            status: "success",
            message: "上传成功",
            url: result
          }));
          fileListLen++;
        }
      },
      uploadFilePromise(url2) {
        return new Promise((resolve, reject) => {
          uni.uploadFile({
            url: "https://api.superbed.cn/upload?token=&categories=idCard&filename=" + (/* @__PURE__ */ new Date()).getMilliseconds(),
            // 仅为示例，非真实的接口地址
            filePath: url2,
            name: "file",
            formData: {},
            success: (res) => {
              setTimeout(() => {
                resolve(res.data.data);
              }, 1e3);
            }
          });
        });
      },
      changeHandler1(e) {
        this.building_name = "请选择楼栋";
        this.unit_name = "请选择单元";
        this.room_name = "请选择房间号";
        this.community_name = e.value[0].communityName;
        this.require.communityId = e.value[0].communityId;
        this.building_columns[0] = e.value[0].buildings;
        this.community_show = false;
      },
      cancel1() {
        this.community_show = false;
      },
      changeHandler2(e) {
        this.unit_name = "请选择单元";
        this.room_name = "请选择房间号";
        this.building_name = e.value[0].buildingName;
        this.require.buildingId = e.value[0].buildingId;
        this.selected_building = e.value[0];
        formatAppLog("log", "at pages/home/owner-add-house.vue:231", this.selected_building.rooms);
        this.building_show = false;
      },
      cancel2() {
        this.building_show = false;
      },
      changeHandler3(e) {
        this.room_name = "请选择房间号";
        this.unit_name = e.value[0];
        this.room_columns[0] = this.selected_building.rooms.filter((item) => e.value[0] == item.unit + "单元");
        this.require.unit = e.value[0] == "1单元" ? 1 : 2;
        this.unit_show = false;
      },
      cancel3() {
        this.unit_show = false;
      },
      changeHandler4(e) {
        this.room_name = e.value[0].roomName;
        this.require.roomNo = e.value[0].roomName;
        this.room_show = false;
      },
      cancel4() {
        this.room_show = false;
      },
      submit() {
        this.require.name = this.formData.name;
        this.require.gender = this.radio_data == true ? 0 : 1;
        this.require.phone = this.formData.phone;
        this.require.identityCard = this.formData.idCard;
        this.require.status = 0;
        this.require.ownerId = uni.getStorageSync("owner").id;
        AddHouse(this.require).then((res) => {
          formatAppLog("log", "at pages/home/owner-add-house.vue:263", res);
          if (res.data.code == 0) {
            this.$refs.uToast.show({
              message: "提交成功",
              type: "success",
              position: "top"
            });
          } else {
            this.$refs.uToast.show({
              message: "提交失败:" + res.data.msg,
              type: "error",
              position: "top"
            });
          }
        }).catch((err) => {
          this.$refs.uToast.show({
            message: "服务器错误",
            type: "error",
            position: "top"
          });
        });
      }
    },
    onShow() {
      const owner_id = this.getOwnerId();
      HouseList(owner_id, 0).then((res) => {
        if (res.data.code === 0) {
          formatAppLog("log", "at pages/home/owner-add-house.vue:291", res);
          this.community_columns[0] = res.data.data;
        }
      });
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_cell = resolveEasycom(vue.resolveDynamicComponent("u-cell"), __easycom_0$2);
    const _component_u_cell_group = resolveEasycom(vue.resolveDynamicComponent("u-cell-group"), __easycom_1$4);
    const _component_u_input = resolveEasycom(vue.resolveDynamicComponent("u-input"), __easycom_1$3);
    const _component_u_form_item = resolveEasycom(vue.resolveDynamicComponent("u-form-item"), __easycom_2$3);
    const _component_u_from_item = vue.resolveComponent("u-from-item");
    const _component_u_col = resolveEasycom(vue.resolveDynamicComponent("u-col"), __easycom_5$1);
    const _component_u_row = resolveEasycom(vue.resolveDynamicComponent("u-row"), __easycom_6);
    const _component_u_upload = resolveEasycom(vue.resolveDynamicComponent("u-upload"), __easycom_2$2);
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_2$4);
    const _component_u_form = resolveEasycom(vue.resolveDynamicComponent("u-form"), __easycom_3);
    const _component_u_picker = resolveEasycom(vue.resolveDynamicComponent("u-picker"), __easycom_3$1);
    const _component_u_toast = resolveEasycom(vue.resolveDynamicComponent("u-toast"), __easycom_4);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "house_choose" }, " 选择房屋 "),
      vue.createVNode(_component_u_cell_group, { border: "false" }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_u_cell, {
            title: "小区",
            "right-icon-style": "font-size:40upx;",
            value: $data.community_name,
            "is-link": "",
            onClick: _cache[0] || (_cache[0] = ($event) => $data.community_show = true)
          }, null, 8, ["value"]),
          vue.createVNode(_component_u_cell, {
            title: "楼栋",
            "right-icon-style": "font-size:40upx;",
            value: $data.building_name,
            "is-link": "",
            onClick: _cache[1] || (_cache[1] = ($event) => $data.building_show = true)
          }, null, 8, ["value"]),
          vue.createVNode(_component_u_cell, {
            title: "单元",
            "right-icon-style": "font-size:40upx;",
            value: $data.unit_name,
            "is-link": "",
            onClick: _cache[2] || (_cache[2] = ($event) => $data.unit_show = true)
          }, null, 8, ["value"]),
          vue.createVNode(_component_u_cell, {
            title: "房间号",
            "right-icon-style": "font-size:40upx;",
            value: $data.room_name,
            "is-link": "",
            onClick: _cache[3] || (_cache[3] = ($event) => $data.room_show = true)
          }, null, 8, ["value"])
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createElementVNode("view", { class: "house_info" }, " 住户信息 "),
      vue.createVNode(_component_u_form, { mode: $data.formData }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_u_form_item, null, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_u_input, {
                placeholder: "请输入您的姓名",
                border: "bottom",
                placeholderStyle: "color:black; text-align:right;",
                modelValue: $data.formData.name,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.formData.name = $event)
              }, {
                prefix: vue.withCtx(() => [
                  vue.createElementVNode("text", null, "您的姓名")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_u_from_item, null, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_u_input, {
                border: "bottom",
                disabled: "",
                disabledColor: "#ffffff"
              }, {
                prefix: vue.withCtx(() => [
                  vue.createElementVNode("text", null, "性别")
                ]),
                suffix: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "my_radio" }, [
                    vue.createElementVNode(
                      "view",
                      {
                        class: vue.normalizeClass(["male", $data.radio_data == true ? "checked" : ""]),
                        onClick: _cache[5] || (_cache[5] = ($event) => $data.radio_data = true)
                      },
                      " 男 ",
                      2
                      /* CLASS */
                    ),
                    vue.createElementVNode(
                      "view",
                      {
                        class: vue.normalizeClass(["female", $data.radio_data == false ? "checked" : ""]),
                        onClick: _cache[6] || (_cache[6] = ($event) => $data.radio_data = false)
                      },
                      " 女 ",
                      2
                      /* CLASS */
                    )
                  ])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_u_form_item, null, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_u_input, {
                placeholder: "请输入手机号",
                border: "bottom",
                placeholderStyle: "color:black; text-align:right;",
                modelValue: $data.formData.phone,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.formData.phone = $event)
              }, {
                prefix: vue.withCtx(() => [
                  vue.createElementVNode("text", null, "手机号")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_u_form_item, null, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_u_input, {
                placeholder: "请输入身份证号",
                border: "bottom",
                placeholderStyle: "color:black; text-align:right;",
                modelValue: $data.formData.idCard,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.formData.idCard = $event)
              }, {
                prefix: vue.withCtx(() => [
                  vue.createElementVNode("text", null, "身份证证件号")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_u_row, null, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_u_col, { span: "12" }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("text", { class: "u-demo-block__title" }, "上传证件照片")
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_u_row, { justify: "between" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_u_col, { span: "5.5" }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_u_upload, {
                    fileList: $data.fileList1,
                    onAfterRead: $options.afterRead,
                    onDelete: $options.deletePic,
                    name: "1",
                    multiple: "",
                    maxCount: 1,
                    deletable: "true",
                    imageMode: "",
                    width: "300rpx",
                    height: "200rpx",
                    previewFullImage: true
                  }, {
                    default: vue.withCtx(() => [
                      vue.createElementVNode("image", {
                        src: _imports_0$1,
                        mode: "widthFix",
                        style: { "width": "300rpx", "height": "200rpx" }
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["fileList", "onAfterRead", "onDelete"])
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_u_col, { span: "5.5" }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_u_upload, {
                    fileList: $data.fileList2,
                    onAfterRead: $options.afterRead,
                    onDelete: $options.deletePic,
                    name: "2",
                    multiple: "",
                    maxCount: 1,
                    deletable: "true",
                    imageMode: "",
                    width: "300rpx",
                    height: "200rpx",
                    previewFullImage: true
                  }, {
                    default: vue.withCtx(() => [
                      vue.createElementVNode("image", {
                        src: _imports_1,
                        mode: "widthFix",
                        style: { "width": "300rpx", "height": "200rpx" }
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["fileList", "onAfterRead", "onDelete"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_u_row, {
            justify: "center",
            style: { "margin-top": "50upx" }
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_u_col, { span: "8" }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_u_button, {
                    type: "primary",
                    shape: "circle",
                    onClick: $options.submit
                  }, {
                    default: vue.withCtx(() => [
                      vue.createElementVNode("text", { style: { "color": "#ffffff" } }, "提交审核")
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["onClick"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["mode"]),
      vue.createVNode(_component_u_picker, {
        show: $data.community_show,
        columns: $data.community_columns,
        onCancel: $options.cancel1,
        onConfirm: $options.changeHandler1,
        keyName: "communityName"
      }, null, 8, ["show", "columns", "onCancel", "onConfirm"]),
      vue.createVNode(_component_u_picker, {
        show: $data.building_show,
        columns: $data.building_columns,
        onCancel: $options.cancel2,
        onConfirm: $options.changeHandler2,
        keyName: "buildingName"
      }, null, 8, ["show", "columns", "onCancel", "onConfirm"]),
      vue.createVNode(_component_u_picker, {
        show: $data.unit_show,
        columns: $data.unit_columns,
        onCancel: $options.cancel3,
        onConfirm: $options.changeHandler3
      }, null, 8, ["show", "columns", "onCancel", "onConfirm"]),
      vue.createVNode(_component_u_picker, {
        show: $data.room_show,
        columns: $data.room_columns,
        onCancel: $options.cancel4,
        onConfirm: $options.changeHandler4,
        keyName: "roomName"
      }, null, 8, ["show", "columns", "onCancel", "onConfirm"]),
      vue.createVNode(
        _component_u_toast,
        { ref: "uToast" },
        null,
        512
        /* NEED_PATCH */
      )
    ]);
  }
  const PagesHomeOwnerAddHouse = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__scopeId", "data-v-ea1385cb"], ["__file", "D:/study/实训/intelligent_community_app_owner/pages/home/owner-add-house.vue"]]);
  const props$7 = {
    props: {
      // 键盘弹起时，是否自动上推页面
      adjustPosition: {
        type: Boolean,
        default: props$x.codeInput.adjustPosition
      },
      // 最大输入长度
      maxlength: {
        type: [String, Number],
        default: props$x.codeInput.maxlength
      },
      // 是否用圆点填充
      dot: {
        type: Boolean,
        default: props$x.codeInput.dot
      },
      // 显示模式，box-盒子模式，line-底部横线模式
      mode: {
        type: String,
        default: props$x.codeInput.mode
      },
      // 是否细边框
      hairline: {
        type: Boolean,
        default: props$x.codeInput.hairline
      },
      // 字符间的距离
      space: {
        type: [String, Number],
        default: props$x.codeInput.space
      },
      // 预置值
      value: {
        type: [String, Number],
        default: props$x.codeInput.value
      },
      // 是否自动获取焦点
      focus: {
        type: Boolean,
        default: props$x.codeInput.focus
      },
      // 字体是否加粗
      bold: {
        type: Boolean,
        default: props$x.codeInput.bold
      },
      // 字体颜色
      color: {
        type: String,
        default: props$x.codeInput.color
      },
      // 字体大小
      fontSize: {
        type: [String, Number],
        default: props$x.codeInput.fontSize
      },
      // 输入框的大小，宽等于高
      size: {
        type: [String, Number],
        default: props$x.codeInput.size
      },
      // 是否隐藏原生键盘，如果想用自定义键盘的话，需设置此参数为true
      disabledKeyboard: {
        type: Boolean,
        default: props$x.codeInput.disabledKeyboard
      },
      // 边框和线条颜色
      borderColor: {
        type: String,
        default: props$x.codeInput.borderColor
      },
      // 是否禁止输入"."符号
      disabledDot: {
        type: Boolean,
        default: props$x.codeInput.disabledDot
      }
    }
  };
  const _sfc_main$j = {
    name: "u-code-input",
    mixins: [mpMixin, mixin, props$7],
    data() {
      return {
        inputValue: "",
        isFocus: this.focus
      };
    },
    watch: {
      value: {
        immediate: true,
        handler(val) {
          this.inputValue = String(val).substring(0, this.maxlength);
        }
      }
    },
    computed: {
      // 根据长度，循环输入框的个数，因为头条小程序数值不能用于v-for
      codeLength() {
        return new Array(Number(this.maxlength));
      },
      // 循环item的样式
      itemStyle() {
        return (index2) => {
          const addUnit2 = uni.$u.addUnit;
          const style = {
            width: addUnit2(this.size),
            height: addUnit2(this.size)
          };
          if (this.mode === "box") {
            style.border = `${this.hairline ? 0.5 : 1}px solid ${this.borderColor}`;
            if (uni.$u.getPx(this.space) === 0) {
              if (index2 === 0) {
                style.borderTopLeftRadius = "3px";
                style.borderBottomLeftRadius = "3px";
              }
              if (index2 === this.codeLength.length - 1) {
                style.borderTopRightRadius = "3px";
                style.borderBottomRightRadius = "3px";
              }
              if (index2 !== this.codeLength.length - 1) {
                style.borderRight = "none";
              }
            }
          }
          if (index2 !== this.codeLength.length - 1) {
            style.marginRight = addUnit2(this.space);
          } else {
            style.marginRight = 0;
          }
          return style;
        };
      },
      // 将输入的值，转为数组，给item历遍时，根据当前的索引显示数组的元素
      codeArray() {
        return String(this.inputValue).split("");
      },
      // 下划线模式下，横线的样式
      lineStyle() {
        const style = {};
        style.height = this.hairline ? "2px" : "4px";
        style.width = uni.$u.addUnit(this.size);
        style.backgroundColor = this.borderColor;
        return style;
      }
    },
    methods: {
      // 监听输入框的值发生变化
      inputHandler(e) {
        const value2 = e.detail.value;
        this.inputValue = value2;
        if (this.disabledDot) {
          this.$nextTick(() => {
            this.inputValue = value2.replace(".", "");
          });
        }
        this.$emit("change", value2);
        this.$emit("input", value2);
        if (String(value2).length >= Number(this.maxlength)) {
          this.$emit("finish", value2);
        }
      }
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-code-input" }, [
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($options.codeLength, (item, index2) => {
          return vue.openBlock(), vue.createElementBlock(
            "view",
            {
              class: "u-code-input__item",
              style: vue.normalizeStyle([$options.itemStyle(index2)]),
              key: index2
            },
            [
              _ctx.dot && $options.codeArray.length > index2 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "u-code-input__item__dot"
              })) : (vue.openBlock(), vue.createElementBlock(
                "text",
                {
                  key: 1,
                  style: vue.normalizeStyle({
                    fontSize: _ctx.$u.addUnit(_ctx.fontSize),
                    fontWeight: _ctx.bold ? "bold" : "normal",
                    color: _ctx.color
                  })
                },
                vue.toDisplayString($options.codeArray[index2]),
                5
                /* TEXT, STYLE */
              )),
              _ctx.mode === "line" ? (vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  key: 2,
                  class: "u-code-input__item__line",
                  style: vue.normalizeStyle([$options.lineStyle])
                },
                null,
                4
                /* STYLE */
              )) : vue.createCommentVNode("v-if", true)
            ],
            4
            /* STYLE */
          );
        }),
        128
        /* KEYED_FRAGMENT */
      )),
      vue.createElementVNode("input", {
        disabled: _ctx.disabledKeyboard,
        type: "number",
        focus: _ctx.focus,
        value: $data.inputValue,
        maxlength: _ctx.maxlength,
        adjustPosition: _ctx.adjustPosition,
        class: "u-code-input__input",
        onInput: _cache[0] || (_cache[0] = (...args) => $options.inputHandler && $options.inputHandler(...args)),
        style: vue.normalizeStyle({
          height: _ctx.$u.addUnit(_ctx.size)
        }),
        onFocus: _cache[1] || (_cache[1] = ($event) => $data.isFocus = true),
        onBlur: _cache[2] || (_cache[2] = ($event) => $data.isFocus = false)
      }, null, 44, ["disabled", "focus", "value", "maxlength", "adjustPosition"])
    ]);
  }
  const __easycom_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__scopeId", "data-v-10e44dac"], ["__file", "D:/study/实训/intelligent_community_app_owner/uni_modules/uview-plus/components/u-code-input/u-code-input.vue"]]);
  const _sfc_main$i = {
    data() {
      return {
        formData: {
          name: "",
          phone: "",
          idCard: ""
        },
        gender: true,
        //true 为男,false为女
        identity: true,
        fileList1: [],
        fileList2: [],
        //picker控制
        community_show: false,
        building_show: false,
        unit_show: false,
        room_show: false,
        //picker数据
        community_columns: [[]],
        building_columns: [[]],
        unit_columns: [["1单元", "2单元"]],
        room_columns: [[]],
        community_name: "请选择小区",
        building_name: "请选择楼栋",
        unit_name: "请选择单元",
        room_name: "请选择房间号",
        selected_building: {},
        value: "",
        //请求的对象数据
        require: {},
        ownerPhone: "",
        beforePhone: "",
        disabled: true
      };
    },
    methods: {
      getOwnerId() {
        return uni.getStorageSync("owner").id;
      },
      // 删除图片
      deletePic(event) {
        this[`fileList${event.name}`].splice(event.index, 1);
      },
      // 新增图片
      async afterRead(event) {
        let lists = [].concat(event.file);
        let fileListLen = this[`fileList${event.name}`].length;
        lists.map((item) => {
          this[`fileList${event.name}`].push({
            ...item,
            status: "uploading",
            message: "上传中"
          });
        });
        for (let i2 = 0; i2 < lists.length; i2++) {
          const result = await this.uploadFilePromise(lists[i2].url);
          formatAppLog("log", "at pages/home/user-add-house.vue:219", result);
          let item = this[`fileList${event.name}`][fileListLen];
          this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
            status: "success",
            message: "上传成功",
            url: result
          }));
          fileListLen++;
        }
      },
      uploadFilePromise(url2) {
        return new Promise((resolve, reject) => {
          uni.uploadFile({
            url: "https://api.superbed.cn/upload?token=&categories=idCard&filename=" + (/* @__PURE__ */ new Date()).getMilliseconds(),
            // 仅为示例，非真实的接口地址
            filePath: url2,
            name: "file",
            formData: {},
            success: (res) => {
              setTimeout(() => {
                resolve(res.data.data);
              }, 1e3);
            }
          });
        });
      },
      changeHandler1(e) {
        this.community_name = e.value[0].communityName;
        this.require.communityId = e.value[0].communityId;
        this.building_columns[0] = e.value[0].buildings;
        this.community_show = false;
      },
      cancel1() {
        this.community_show = false;
      },
      changeHandler2(e) {
        this.building_name = e.value[0].buildingName;
        this.require.buildingId = e.value[0].buildingId;
        this.selected_building = e.value[0];
        this.building_show = false;
      },
      cancel2() {
        this.building_show = false;
      },
      changeHandler3(e) {
        this.unit_name = e.value[0];
        this.room_columns[0] = this.selected_building.rooms.filter((item) => {
          return item.unit + "单元" == e.value[0];
        });
        this.require.unit = e.value[0] == "1单元" ? 1 : 2;
        this.unit_show = false;
      },
      cancel3() {
        this.unit_show = false;
      },
      changeHandler4(e) {
        this.ownerPhone = "";
        this.room_name = e.value[0].roomName;
        this.require.roomNo = e.value[0].roomName;
        getOwnerPhone(e.value[0].roomId).then((res) => {
          this.ownerPhone = res.data.data;
          this.beforePhone = this.ownerPhone.toString().substr(0, 7);
        });
        this.room_show = false;
      },
      cancel4() {
        this.room_show = false;
      },
      submit() {
        this.require.name = this.formData.name;
        this.require.gender = this.gender == true ? 0 : 1;
        this.require.phone = this.formData.phone;
        this.require.identityCard = this.formData.idCard;
        this.require.status = 1;
        this.require.type = this.identity == true ? 0 : 1;
        this.require.ownerId = uni.getStorageSync("owner").id;
        AddHouse(this.require).then((res) => {
          if (res.data.code == 0) {
            this.$refs.uToast.show({
              message: "提交成功",
              type: "success",
              position: "top"
            });
          } else {
            this.$refs.uToast.show({
              message: "提交失败:" + res.data.msg,
              type: "error",
              position: "top"
            });
          }
        }).catch((err) => {
          this.$refs.uToast.show({
            message: "服务器错误",
            type: "error",
            position: "top"
          });
        });
      },
      finish(e) {
        this.disabled = true;
        if (this.beforePhone + e == this.ownerPhone) {
          this.disabled = false;
          this.$refs.uToast.show({
            message: "号码正确",
            position: "top",
            type: "success",
            duration: "500"
          });
        } else {
          this.disabled = true;
          this.$refs.uToast.show({
            message: "号码错误",
            position: "top",
            type: "error",
            duration: "500"
          });
        }
      }
    },
    onShow() {
      const owner_id = this.getOwnerId();
      HouseList(owner_id, 1).then((res) => {
        if (res.data.code === 0) {
          formatAppLog("log", "at pages/home/user-add-house.vue:344", res);
          this.community_columns[0] = res.data.data;
        }
      });
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_cell = resolveEasycom(vue.resolveDynamicComponent("u-cell"), __easycom_0$2);
    const _component_u_cell_group = resolveEasycom(vue.resolveDynamicComponent("u-cell-group"), __easycom_1$4);
    const _component_u_code_input = resolveEasycom(vue.resolveDynamicComponent("u-code-input"), __easycom_2$1);
    const _component_u_input = resolveEasycom(vue.resolveDynamicComponent("u-input"), __easycom_1$3);
    const _component_u_from_item = vue.resolveComponent("u-from-item");
    const _component_u_form_item = resolveEasycom(vue.resolveDynamicComponent("u-form-item"), __easycom_2$3);
    const _component_u_col = resolveEasycom(vue.resolveDynamicComponent("u-col"), __easycom_5$1);
    const _component_u_row = resolveEasycom(vue.resolveDynamicComponent("u-row"), __easycom_6);
    const _component_u_upload = resolveEasycom(vue.resolveDynamicComponent("u-upload"), __easycom_2$2);
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_2$4);
    const _component_u_form = resolveEasycom(vue.resolveDynamicComponent("u-form"), __easycom_3);
    const _component_u_picker = resolveEasycom(vue.resolveDynamicComponent("u-picker"), __easycom_3$1);
    const _component_u_toast = resolveEasycom(vue.resolveDynamicComponent("u-toast"), __easycom_4);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "house_choose" }, " 选择房屋 "),
      vue.createVNode(_component_u_cell_group, { border: "false" }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_u_cell, {
            title: "小区",
            "right-icon-style": "font-size:40upx;",
            value: $data.community_name,
            "is-link": "",
            onClick: _cache[0] || (_cache[0] = ($event) => $data.community_show = true)
          }, null, 8, ["value"]),
          vue.createVNode(_component_u_cell, {
            title: "楼栋",
            "right-icon-style": "font-size:40upx;",
            value: $data.building_name,
            "is-link": "",
            onClick: _cache[1] || (_cache[1] = ($event) => $data.building_show = true)
          }, null, 8, ["value"]),
          vue.createVNode(_component_u_cell, {
            title: "单元",
            "right-icon-style": "font-size:40upx;",
            value: $data.unit_name,
            "is-link": "",
            onClick: _cache[2] || (_cache[2] = ($event) => $data.unit_show = true)
          }, null, 8, ["value"]),
          vue.createVNode(_component_u_cell, {
            title: "房间号",
            "right-icon-style": "font-size:40upx;",
            value: $data.room_name,
            "is-link": "",
            onClick: _cache[3] || (_cache[3] = ($event) => $data.room_show = true)
          }, null, 8, ["value"])
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createElementVNode("view", {
        class: "owner_phone",
        style: { "font-size": "30upx", "background-color": "#ffffff", "margin-top": "20upx", "padding": "20upx" }
      }, [
        vue.createTextVNode(" 请输入业主手机号后四位: "),
        vue.createElementVNode("text", { style: { "font-size": "20upx" } }, "如不知业主手机号,请联系业主"),
        vue.createElementVNode("view", { style: { "font-size": "50upx", "display": "flex", "align-items": "center", "justify-content": "center", "padding": "40upx" } }, [
          vue.createTextVNode(
            vue.toDisplayString($data.beforePhone) + "  ",
            1
            /* TEXT */
          ),
          vue.createVNode(_component_u_code_input, {
            modelValue: $data.value,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.value = $event),
            mode: "line",
            maxlength: "4",
            hairline: "",
            size: "50",
            fontSize: "50",
            color: "black",
            space: "20",
            onFinish: $options.finish
          }, null, 8, ["modelValue", "onFinish"])
        ])
      ]),
      vue.createElementVNode("view", { class: "house_info" }, " 住户信息 "),
      vue.createVNode(_component_u_form, { mode: $data.formData }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_u_from_item, null, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_u_input, {
                border: "bottom",
                disabled: "",
                disabledColor: "#ffffff"
              }, {
                prefix: vue.withCtx(() => [
                  vue.createElementVNode("text", null, "性别")
                ]),
                suffix: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "my_radio" }, [
                    vue.createElementVNode(
                      "view",
                      {
                        class: vue.normalizeClass(["male", $data.identity == true ? "checked" : ""]),
                        onClick: _cache[5] || (_cache[5] = ($event) => $data.identity = true)
                      },
                      " 家属 ",
                      2
                      /* CLASS */
                    ),
                    vue.createElementVNode(
                      "view",
                      {
                        class: vue.normalizeClass(["female", $data.identity == false ? "checked" : ""]),
                        onClick: _cache[6] || (_cache[6] = ($event) => $data.identity = false)
                      },
                      " 租户 ",
                      2
                      /* CLASS */
                    )
                  ])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_u_form_item, null, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_u_input, {
                placeholder: "请输入您的姓名",
                border: "bottom",
                placeholderStyle: "color:black; text-align:right;",
                modelValue: $data.formData.name,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.formData.name = $event)
              }, {
                prefix: vue.withCtx(() => [
                  vue.createElementVNode("text", null, "您的姓名")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_u_from_item, null, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_u_input, {
                border: "bottom",
                disabled: "",
                disabledColor: "#ffffff"
              }, {
                prefix: vue.withCtx(() => [
                  vue.createElementVNode("text", null, "性别")
                ]),
                suffix: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "my_radio" }, [
                    vue.createElementVNode(
                      "view",
                      {
                        class: vue.normalizeClass(["male", $data.gender == true ? "checked" : ""]),
                        onClick: _cache[8] || (_cache[8] = ($event) => $data.gender = true)
                      },
                      " 男 ",
                      2
                      /* CLASS */
                    ),
                    vue.createElementVNode(
                      "view",
                      {
                        class: vue.normalizeClass(["female", $data.gender == false ? "checked" : ""]),
                        onClick: _cache[9] || (_cache[9] = ($event) => $data.gender = false)
                      },
                      " 女 ",
                      2
                      /* CLASS */
                    )
                  ])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_u_form_item, null, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_u_input, {
                placeholder: "请输入手机号",
                border: "bottom",
                placeholderStyle: "color:black; text-align:right;",
                modelValue: $data.formData.phone,
                "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $data.formData.phone = $event)
              }, {
                prefix: vue.withCtx(() => [
                  vue.createElementVNode("text", null, "手机号")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_u_form_item, null, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_u_input, {
                placeholder: "请输入身份证号",
                border: "bottom",
                placeholderStyle: "color:black; text-align:right;",
                modelValue: $data.formData.idCard,
                "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $data.formData.idCard = $event)
              }, {
                prefix: vue.withCtx(() => [
                  vue.createElementVNode("text", null, "身份证证件号")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_u_row, null, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_u_col, { span: "12" }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("text", { class: "u-demo-block__title" }, "上传证件照片")
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_u_row, { justify: "between" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_u_col, { span: "5.5" }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_u_upload, {
                    fileList: $data.fileList1,
                    onAfterRead: $options.afterRead,
                    onDelete: $options.deletePic,
                    name: "1",
                    multiple: "",
                    maxCount: 1,
                    deletable: "true",
                    imageMode: "",
                    width: "300rpx",
                    height: "200rpx",
                    previewFullImage: true
                  }, {
                    default: vue.withCtx(() => [
                      vue.createElementVNode("image", {
                        src: _imports_0$1,
                        mode: "widthFix",
                        style: { "width": "300rpx", "height": "200rpx" }
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["fileList", "onAfterRead", "onDelete"])
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_u_col, { span: "5.5" }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_u_upload, {
                    fileList: $data.fileList2,
                    onAfterRead: $options.afterRead,
                    onDelete: $options.deletePic,
                    name: "2",
                    multiple: "",
                    maxCount: 1,
                    deletable: "true",
                    imageMode: "",
                    width: "300rpx",
                    height: "200rpx",
                    previewFullImage: true
                  }, {
                    default: vue.withCtx(() => [
                      vue.createElementVNode("image", {
                        src: _imports_1,
                        mode: "widthFix",
                        style: { "width": "300rpx", "height": "200rpx" }
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["fileList", "onAfterRead", "onDelete"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_u_row, {
            justify: "center",
            style: { "margin-top": "50upx" }
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_u_col, { span: "8" }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_u_button, {
                    type: "primary",
                    shape: "circle",
                    onClick: $options.submit,
                    disabled: $data.disabled
                  }, {
                    default: vue.withCtx(() => [
                      vue.createElementVNode("text", { style: { "color": "#ffffff" } }, "提交审核")
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["onClick", "disabled"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["mode"]),
      vue.createVNode(_component_u_picker, {
        show: $data.community_show,
        columns: $data.community_columns,
        onCancel: $options.cancel1,
        onConfirm: $options.changeHandler1,
        keyName: "communityName"
      }, null, 8, ["show", "columns", "onCancel", "onConfirm"]),
      vue.createVNode(_component_u_picker, {
        show: $data.building_show,
        columns: $data.building_columns,
        onCancel: $options.cancel2,
        onConfirm: $options.changeHandler2,
        keyName: "buildingName"
      }, null, 8, ["show", "columns", "onCancel", "onConfirm"]),
      vue.createVNode(_component_u_picker, {
        show: $data.unit_show,
        columns: $data.unit_columns,
        onCancel: $options.cancel3,
        onConfirm: $options.changeHandler3
      }, null, 8, ["show", "columns", "onCancel", "onConfirm"]),
      vue.createVNode(_component_u_picker, {
        show: $data.room_show,
        columns: $data.room_columns,
        onCancel: $options.cancel4,
        onConfirm: $options.changeHandler4,
        keyName: "roomName"
      }, null, 8, ["show", "columns", "onCancel", "onConfirm"]),
      vue.createVNode(
        _component_u_toast,
        { ref: "uToast" },
        null,
        512
        /* NEED_PATCH */
      )
    ]);
  }
  const PagesHomeUserAddHouse = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-25b1bfd4"], ["__file", "D:/study/实训/intelligent_community_app_owner/pages/home/user-add-house.vue"]]);
  const _sfc_main$h = {
    data() {
      return {
        bill: {
          id: 1,
          type: "物业费",
          icon: "https://pic.imgdb.cn/item/6476a18af024cca17333b40c.png",
          room_no: "幸福苑小区1号楼1单元-203",
          start_time: "2021年04月01号",
          end_time: "2021年05月01号",
          money: "360.00",
          date: "2021年5月",
          area: "110m²",
          price: "1.5元/平米/每月"
        },
        bill_id: ""
      };
    },
    methods: {
      payBill() {
        updateBill(this.bill_id).then((res) => {
          if (res.data.code === 0) {
            this.$refs.uToast.show({
              message: "支付成功",
              position: "top",
              type: "success"
            });
          } else {
            this.$refs.uToast.show({
              message: "支付失败",
              position: "top",
              type: "error"
            });
          }
        }).catch((err) => {
          this.$refs.uToast.show({
            message: "服务器错误",
            position: "top",
            type: "error"
          });
        });
      },
      addZero: function(number2) {
        const arr = number2.toString().split(".");
        if (arr.length === 1) {
          return `${number2}.00`;
        } else if (arr.length === 2 && arr[1].length === 1) {
          return `${number2}0`;
        } else {
          return number2;
        }
      },
      getBill() {
        const owner_id = uni.getStorageSync("owner").id;
        getBill(owner_id, this.bill_id).then((res) => {
          formatAppLog("log", "at pages/pay/bill-detail.vue:58", res);
          this.bill = res.data.data;
          this.bill.date = this.bill.endTime.toString().substr(0, 8);
          this.bill.total = this.addZero(this.bill.total);
        });
      }
    },
    onLoad(option) {
      this.bill_id = option.id;
    },
    onShow() {
      this.getBill();
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_2$4);
    const _component_u_toast = resolveEasycom(vue.resolveDynamicComponent("u-toast"), __easycom_4);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", {
        class: "bar",
        style: { "height": "3upx" }
      }),
      vue.createElementVNode("view", {
        class: "top",
        style: { "height": "200upx", "background-color": "#409eff", "margin": "3upx", "margin-top": "0" }
      }),
      vue.createElementVNode("view", { class: "bill_card" }, [
        vue.createElementVNode("view", { class: "bill_title" }, [
          vue.createElementVNode("view", { style: { "display": "flex", "justify-content": "space-between", "padding": "20upx", "align-items": "center" } }, [
            vue.createElementVNode(
              "text",
              { style: { "font-size": "50upx", "color": "black" } },
              vue.toDisplayString($data.bill.projectName) + "账单",
              1
              /* TEXT */
            ),
            vue.createTextVNode(
              " " + vue.toDisplayString($data.bill.date),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { style: { "display": "flex", "color": "#409eff", "align-items": "center", "justify-content": "center" } }, [
            vue.createElementVNode(
              "text",
              { style: { "color": "#409eff", "font-size": "50upx", "font-weight": "700", "padding": "20upx", "padding-bottom": "40upx" } },
              vue.toDisplayString($data.bill.total),
              1
              /* TEXT */
            ),
            vue.createTextVNode("元 ")
          ])
        ]),
        vue.createElementVNode("view", { class: "bill_info" }, [
          vue.createElementVNode("view", { style: { "padding": "20upx", "padding-bottom": "0", "display": "flex", "align-items": "center" } }, "账单详情"),
          vue.createElementVNode("image", {
            src: "/static/虚线.png",
            mode: "",
            style: { "height": "10upx", "width": "100%" }
          }),
          vue.createElementVNode("view", { style: { "padding": "20upx", "padding-top": "0", "display": "flex", "justify-content": "space-between", "align-items": "center" } }, [
            vue.createElementVNode("text", null, "小区房屋"),
            vue.createTextVNode(
              " " + vue.toDisplayString($data.bill.house),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { style: { "padding": "20upx", "display": "flex", "justify-content": "space-between", "align-items": "center" } }, [
            vue.createElementVNode("text", null, "房屋面积"),
            vue.createTextVNode(
              " " + vue.toDisplayString($data.bill.houseArea),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { style: { "padding": "20upx", "display": "flex", "justify-content": "space-between", "align-items": "center" } }, [
            vue.createElementVNode("text", null, "单位金额"),
            vue.createTextVNode(
              " " + vue.toDisplayString($data.bill.price),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { style: { "padding": "20upx", "display": "flex", "justify-content": "space-between", "align-items": "center" } }, [
            vue.createElementVNode("text", null, "账单日期"),
            vue.createTextVNode(
              " " + vue.toDisplayString($data.bill.startTime + " - " + $data.bill.endTime),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { style: { "padding": "20upx", "display": "flex", "justify-content": "space-between", "align-items": "center" } }, [
            vue.createElementVNode("text", null, "账单金额"),
            vue.createTextVNode(
              " ￥" + vue.toDisplayString($data.bill.total) + "元 ",
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { style: { "padding": "20upx", "display": "flex", "justify-content": "space-between", "align-items": "center" } }, [
            vue.createElementVNode("text", null, "减免金额"),
            vue.createTextVNode(" ￥0.00元 ")
          ]),
          vue.createElementVNode("view", { style: { "padding": "20upx", "display": "flex", "justify-content": "space-between", "align-items": "center" } }, [
            vue.createElementVNode("text", null, "营收金额"),
            vue.createTextVNode(" ￥0.00元 ")
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "foot" }, [
        vue.createElementVNode("view", {
          class: "btn",
          style: { "width": "40%" }
        }, [
          vue.createVNode(_component_u_button, {
            type: "primary",
            size: "small",
            onClick: $options.payBill
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("text", { style: { "color": "#ffffff" } }, "立即支付")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"])
        ])
      ]),
      vue.createVNode(
        _component_u_toast,
        { ref: "uToast" },
        null,
        512
        /* NEED_PATCH */
      )
    ]);
  }
  const PagesPayBillDetail = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-a2327461"], ["__file", "D:/study/实训/intelligent_community_app_owner/pages/pay/bill-detail.vue"]]);
  const _sfc_main$g = {
    data() {
      return {
        listByYear: []
      };
    },
    methods: {
      toDetail(id) {
        uni.navigateTo({
          url: "/pages/pay/pay-detail?id=" + id
        });
      }
    },
    onShow() {
      const owner_id = uni.getStorageSync("owner").id;
      getRecord(owner_id).then((res) => {
        formatAppLog("log", "at pages/pay/pay-history.vue:54", res);
        this.listByYear = res.data.data;
      });
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($data.listByYear, (item, index2) => {
          return vue.openBlock(), vue.createElementBlock("view", { class: "year" }, [
            vue.createElementVNode(
              "view",
              { style: { "padding": "20upx", "text-align": "center", "color": "#A1A1A1" } },
              vue.toDisplayString(item.year) + "年缴费纪录 ",
              1
              /* TEXT */
            ),
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(item.payList, (i2, index3) => {
                return vue.openBlock(), vue.createElementBlock("view", { class: "payment" }, [
                  vue.createElementVNode("view", { class: "type" }, [
                    vue.createElementVNode("image", {
                      src: i2.icon,
                      mode: ""
                    }, null, 8, ["src"]),
                    vue.createTextVNode(
                      " " + vue.toDisplayString(i2.projectName) + "账单 ",
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("image", {
                    src: "/static/line.png",
                    class: "line",
                    mode: ""
                  }),
                  vue.createElementVNode("view", {
                    class: "room_no",
                    style: { "display": "flex", "justify-content": "space-between", "padding": "20upx" }
                  }, [
                    vue.createElementVNode("text", null, "小区房屋"),
                    vue.createTextVNode(
                      vue.toDisplayString(i2.house),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("view", {
                    class: "room_no",
                    style: { "display": "flex", "justify-content": "space-between", "padding": "20upx" }
                  }, [
                    vue.createElementVNode("text", null, "账单日期"),
                    vue.createTextVNode(
                      vue.toDisplayString(i2.startTime + " - " + i2.endTime),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("view", {
                    class: "room_no",
                    style: { "display": "flex", "justify-content": "space-between", "padding": "20upx" }
                  }, [
                    vue.createElementVNode("text", null, "账单金额"),
                    vue.createTextVNode(
                      vue.toDisplayString(i2.total),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("view", {
                    class: "room_no",
                    style: { "display": "flex", "justify-content": "space-between", "padding": "20upx", "padding-bottom": "0" }
                  }, [
                    vue.createElementVNode("text", null, "缴费时间"),
                    vue.createTextVNode(
                      vue.toDisplayString(i2.paidTime),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("image", {
                    src: "/static/line.png",
                    mode: "",
                    class: "line"
                  }),
                  vue.createElementVNode("view", {
                    style: { "color": "#409eff", "text-align": "right", "padding": "15upx", "padding-top": "0" },
                    onClick: ($event) => $options.toDetail(i2.billId)
                  }, " 查看详情 ", 8, ["onClick"])
                ]);
              }),
              256
              /* UNKEYED_FRAGMENT */
            ))
          ]);
        }),
        256
        /* UNKEYED_FRAGMENT */
      ))
    ]);
  }
  const PagesPayPayHistory = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__scopeId", "data-v-96609865"], ["__file", "D:/study/实训/intelligent_community_app_owner/pages/pay/pay-history.vue"]]);
  const _sfc_main$f = {
    data() {
      return {
        bill: {},
        bill_id: ""
      };
    },
    methods: {
      getBill() {
        const owner_id = uni.getStorageSync("owner").id;
        getBill(owner_id, this.bill_id).then((res) => {
          formatAppLog("log", "at pages/pay/pay-detail.vue:15", res);
          this.bill = res.data.data;
          this.bill.date = this.bill.endTime.toString().substr(0, 8);
          this.bill.total = this.addZero(this.bill.total);
        });
      },
      addZero: function(number2) {
        const arr = number2.toString().split(".");
        if (arr.length === 1) {
          return `${number2}.00`;
        } else if (arr.length === 2 && arr[1].length === 1) {
          return `${number2}0`;
        } else {
          return number2;
        }
      }
    },
    onLoad(option) {
      this.bill_id = option.id;
    },
    onShow() {
      this.getBill();
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_toast = resolveEasycom(vue.resolveDynamicComponent("u-toast"), __easycom_4);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", {
        class: "bar",
        style: { "height": "3upx" }
      }),
      vue.createElementVNode("view", {
        class: "top",
        style: { "height": "200upx", "background-color": "#409eff", "margin": "3upx", "margin-top": "0" }
      }),
      vue.createElementVNode("view", { class: "bill_card" }, [
        vue.createElementVNode("view", { class: "bill_title" }, [
          vue.createElementVNode("view", { style: { "display": "flex", "justify-content": "space-between", "padding": "20upx", "align-items": "center" } }, [
            vue.createElementVNode(
              "text",
              { style: { "font-size": "50upx", "color": "black" } },
              vue.toDisplayString($data.bill.projectName) + "账单",
              1
              /* TEXT */
            ),
            vue.createTextVNode(
              " " + vue.toDisplayString($data.bill.date),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { style: { "display": "flex", "color": "#409eff", "align-items": "center", "justify-content": "center" } }, [
            vue.createElementVNode(
              "text",
              { style: { "color": "#409eff", "font-size": "50upx", "font-weight": "700", "padding": "20upx", "padding-bottom": "40upx" } },
              vue.toDisplayString($data.bill.total),
              1
              /* TEXT */
            ),
            vue.createTextVNode("元 ")
          ])
        ]),
        vue.createElementVNode("view", { class: "bill_info" }, [
          vue.createElementVNode("view", { style: { "padding": "20upx", "padding-bottom": "0", "display": "flex", "align-items": "center" } }, "账单详情"),
          vue.createElementVNode("image", {
            src: "/static/虚线.png",
            mode: "",
            style: { "height": "10upx", "width": "100%" }
          }),
          vue.createElementVNode("view", { style: { "padding": "20upx", "padding-top": "0", "display": "flex", "justify-content": "space-between", "align-items": "center" } }, [
            vue.createElementVNode("text", null, "小区房屋"),
            vue.createTextVNode(
              " " + vue.toDisplayString($data.bill.house),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { style: { "padding": "20upx", "display": "flex", "justify-content": "space-between", "align-items": "center" } }, [
            vue.createElementVNode("text", null, "房屋面积"),
            vue.createTextVNode(
              " " + vue.toDisplayString($data.bill.houseArea),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { style: { "padding": "20upx", "display": "flex", "justify-content": "space-between", "align-items": "center" } }, [
            vue.createElementVNode("text", null, "单位金额"),
            vue.createTextVNode(
              " " + vue.toDisplayString($data.bill.price),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { style: { "padding": "20upx", "display": "flex", "justify-content": "space-between", "align-items": "center" } }, [
            vue.createElementVNode("text", null, "账单日期"),
            vue.createTextVNode(
              " " + vue.toDisplayString($data.bill.startTime + " - " + $data.bill.endTime),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { style: { "padding": "20upx", "display": "flex", "justify-content": "space-between", "align-items": "center" } }, [
            vue.createElementVNode("text", null, "账单金额"),
            vue.createTextVNode(
              " ￥" + vue.toDisplayString($data.bill.total) + "元 ",
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { style: { "padding": "20upx", "display": "flex", "justify-content": "space-between", "align-items": "center" } }, [
            vue.createElementVNode("text", null, "减免金额"),
            vue.createTextVNode(" ￥0.00元 ")
          ]),
          vue.createElementVNode("view", { style: { "padding": "20upx", "display": "flex", "justify-content": "space-between", "align-items": "center" } }, [
            vue.createElementVNode("text", null, "营收金额"),
            vue.createTextVNode(" ￥0.00元 ")
          ])
        ]),
        vue.createElementVNode("view", { class: "payment" }, [
          vue.createElementVNode("view", { style: { "padding": "20upx", "padding-bottom": "0", "display": "flex", "align-items": "center" } }, "支付信息"),
          vue.createElementVNode("image", {
            src: "/static/虚线.png",
            mode: "",
            style: { "height": "10upx", "width": "100%" }
          }),
          vue.createElementVNode("view", { style: { "padding": "20upx", "display": "flex", "justify-content": "space-between", "align-items": "center" } }, [
            vue.createElementVNode("text", null, "支付单号"),
            vue.createTextVNode(" 256565493246523556 ")
          ]),
          vue.createElementVNode("view", { style: { "padding": "20upx", "display": "flex", "justify-content": "space-between", "align-items": "center" } }, [
            vue.createElementVNode("text", null, "支付方式"),
            vue.createTextVNode(" 手机支付 ")
          ]),
          vue.createElementVNode("view", { style: { "padding": "20upx", "display": "flex", "justify-content": "space-between", "align-items": "center" } }, [
            vue.createElementVNode("text", null, "支付时间"),
            vue.createTextVNode(
              " " + vue.toDisplayString($data.bill.endTime),
              1
              /* TEXT */
            )
          ])
        ])
      ]),
      vue.createVNode(
        _component_u_toast,
        { ref: "uToast" },
        null,
        512
        /* NEED_PATCH */
      )
    ]);
  }
  const PagesPayPayDetail = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__scopeId", "data-v-516ee8c6"], ["__file", "D:/study/实训/intelligent_community_app_owner/pages/pay/pay-detail.vue"]]);
  const _sfc_main$e = {
    data() {
      return {
        car_list: []
      };
    },
    methods: {
      toAddCar() {
        uni.navigateTo({
          url: "/pages/park/add-car"
        });
      },
      deleteCar(id) {
        const owner_id = uni.getStorageSync("owner").id;
        deleteCar(owner_id, id).then((res) => {
          formatAppLog("log", "at pages/park/my-car.vue:69", res);
          if (res.data.code === 0) {
            this.$refs.uToast.show({
              message: "删除成功",
              position: "top",
              type: "success"
            });
            const owner_id2 = uni.getStorageSync("owner").id;
            getCarList(owner_id2).then((res2) => {
              formatAppLog("log", "at pages/park/my-car.vue:78", res2);
              this.car_list = res2.data.data;
            });
          } else {
            this.$refs.uToast.show({
              message: "删除失败:" + res.data.error,
              position: "top",
              type: "error"
            });
          }
        }).catch((err) => {
          this.$refs.uToast.show({
            message: "服务器错误",
            position: "top",
            type: "error"
          });
        });
      }
    },
    onShow() {
      const owner_id = uni.getStorageSync("owner").id;
      getCarList(owner_id).then((res) => {
        formatAppLog("log", "at pages/park/my-car.vue:100", res);
        this.car_list = res.data.data;
      });
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_2$4);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$6);
    const _component_u_toast = resolveEasycom(vue.resolveDynamicComponent("u-toast"), __easycom_4);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", {
        class: "top",
        style: { "display": "flex", "justify-content": "center", "align-items": "center" }
      }, [
        vue.createElementVNode("view", {
          class: "btn",
          style: { "width": "40%", "margin-bottom": "150upx" }
        }, [
          vue.createVNode(_component_u_button, {
            color: "#8cc5ff",
            shape: "circle",
            onClick: $options.toAddCar
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("text", { style: { "color": "#ffffff" } }, "+添加车辆")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"])
        ])
      ]),
      vue.createElementVNode("view", { class: "car_list" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.car_list, (item, index2) => {
            return vue.openBlock(), vue.createElementBlock("view", { class: "car" }, [
              vue.createElementVNode("view", {
                class: "delete_btn",
                style: { "display": "flex", "justify-content": "right", "padding": "10upx" },
                onClick: ($event) => $options.deleteCar(item.id)
              }, [
                vue.createVNode(_component_u_icon, {
                  name: "close",
                  color: "#666666",
                  size: "35",
                  bold: ""
                })
              ], 8, ["onClick"]),
              vue.createElementVNode("view", {
                class: "title",
                style: { "display": "flex" }
              }, [
                vue.createElementVNode("image", {
                  src: item.icon,
                  mode: ""
                }, null, 8, ["src"]),
                vue.createElementVNode(
                  "text",
                  null,
                  vue.toDisplayString(item.number),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "tag" }, [
                vue.createElementVNode(
                  "view",
                  { class: "brand" },
                  vue.toDisplayString(item.brand),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "view",
                  { class: "type" },
                  vue.toDisplayString(item.type),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "view",
                  { class: "color" },
                  vue.toDisplayString(item.color),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "date" }, [
                vue.createElementVNode("view", {
                  class: "save",
                  style: { "display": "flex", "justify-content": "space-between", "padding": "20upx" }
                }, [
                  vue.createElementVNode("text", { style: { "padding-left": "100upx", "padding-right": "100upx" } }, "汽车保险"),
                  vue.createTextVNode(
                    " " + vue.toDisplayString(item.deadline),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", {
                  class: "year",
                  style: { "display": "flex", "justify-content": "space-between", "padding": "20upx" }
                }, [
                  vue.createElementVNode("text", { style: { "padding-left": "100upx", "padding-right": "100upx" } }, "年审保险"),
                  vue.createTextVNode(
                    " " + vue.toDisplayString(item.examineTime),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ]);
          }),
          256
          /* UNKEYED_FRAGMENT */
        ))
      ]),
      vue.createVNode(
        _component_u_toast,
        { ref: "uToast" },
        null,
        512
        /* NEED_PATCH */
      )
    ]);
  }
  const PagesParkMyCar = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__scopeId", "data-v-dddc9106"], ["__file", "D:/study/实训/intelligent_community_app_owner/pages/park/my-car.vue"]]);
  const props$6 = {
    props: {
      // 键盘的类型，number-数字键盘，card-身份证键盘
      mode: {
        type: String,
        default: props$x.numberKeyboard.value
      },
      // 是否显示键盘的"."符号
      dotDisabled: {
        type: Boolean,
        default: props$x.numberKeyboard.dotDisabled
      },
      // 是否打乱键盘按键的顺序
      random: {
        type: Boolean,
        default: props$x.numberKeyboard.random
      }
    }
  };
  const _sfc_main$d = {
    mixins: [mpMixin, mixin, props$6],
    data() {
      return {
        backspace: "backspace",
        // 退格键内容
        dot: ".",
        // 点
        timer: null,
        // 长按多次删除的事件监听
        cardX: "X"
        // 身份证的X符号
      };
    },
    computed: {
      // 键盘需要显示的内容
      numList() {
        if (this.dotDisabled && this.mode == "number") {
          if (!this.random) {
            return [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
          } else {
            return uni.$u.randomArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
          }
        } else if (!this.dotDisabled && this.mode == "number") {
          if (!this.random) {
            return [1, 2, 3, 4, 5, 6, 7, 8, 9, this.dot, 0];
          } else {
            return uni.$u.randomArray([1, 2, 3, 4, 5, 6, 7, 8, 9, this.dot, 0]);
          }
        } else if (this.mode == "card") {
          if (!this.random) {
            return [1, 2, 3, 4, 5, 6, 7, 8, 9, this.cardX, 0];
          } else {
            return uni.$u.randomArray([1, 2, 3, 4, 5, 6, 7, 8, 9, this.cardX, 0]);
          }
        }
      },
      // 按键的样式，在非乱序&&数字键盘&&不显示点按钮时，index为9时，按键占位两个空间
      itemStyle() {
        return (index2) => {
          let style = {};
          if (this.mode == "number" && this.dotDisabled && index2 == 9)
            style.width = "464rpx";
          return style;
        };
      },
      // 是否让按键显示灰色，只在非乱序&&数字键盘&&且允许点按键的时候
      btnBgGray() {
        return (index2) => {
          if (!this.random && index2 == 9 && (this.mode != "number" || this.mode == "number" && !this.dotDisabled))
            return true;
          else
            return false;
        };
      }
    },
    created() {
    },
    methods: {
      // 点击退格键
      backspaceClick() {
        this.$emit("backspace");
        clearInterval(this.timer);
        this.timer = null;
        this.timer = setInterval(() => {
          this.$emit("backspace");
        }, 250);
      },
      clearTimer() {
        clearInterval(this.timer);
        this.timer = null;
      },
      // 获取键盘显示的内容
      keyboardClick(val) {
        if (!this.dotDisabled && val != this.dot && val != this.cardX)
          val = Number(val);
        this.$emit("change", val);
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$6);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "u-keyboard",
        onTouchmove: _cache[2] || (_cache[2] = vue.withModifiers((...args) => _ctx.noop && _ctx.noop(...args), ["stop", "prevent"]))
      },
      [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($options.numList, (item, index2) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "u-keyboard__button-wrapper",
              key: index2
            }, [
              vue.createElementVNode("view", {
                class: "u-keyboard__button-wrapper__button",
                style: vue.normalizeStyle([$options.itemStyle(index2)]),
                onClick: ($event) => $options.keyboardClick(item),
                "hover-class": "u-hover-class",
                "hover-stay-time": 200
              }, [
                vue.createElementVNode(
                  "text",
                  { class: "u-keyboard__button-wrapper__button__text" },
                  vue.toDisplayString(item),
                  1
                  /* TEXT */
                )
              ], 12, ["onClick"])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        )),
        vue.createElementVNode("view", { class: "u-keyboard__button-wrapper" }, [
          vue.createElementVNode(
            "view",
            {
              class: "u-keyboard__button-wrapper__button u-keyboard__button-wrapper__button--gray",
              "hover-class": "u-hover-class",
              "hover-stay-time": 200,
              onTouchstart: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.backspaceClick && $options.backspaceClick(...args), ["stop"])),
              onTouchend: _cache[1] || (_cache[1] = (...args) => $options.clearTimer && $options.clearTimer(...args))
            },
            [
              vue.createVNode(_component_u_icon, {
                name: "backspace",
                color: "#303133",
                size: "28"
              })
            ],
            32
            /* HYDRATE_EVENTS */
          )
        ])
      ],
      32
      /* HYDRATE_EVENTS */
    );
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-d73731be"], ["__file", "D:/study/实训/intelligent_community_app_owner/uni_modules/uview-plus/components/u-number-keyboard/u-number-keyboard.vue"]]);
  const props$5 = {
    props: {
      // 是否打乱键盘按键的顺序
      random: {
        type: Boolean,
        default: false
      },
      // 输入一个中文后，是否自动切换到英文
      autoChange: {
        type: Boolean,
        default: false
      }
    }
  };
  const _sfc_main$c = {
    name: "u-keyboard",
    mixins: [mpMixin, mixin, props$5],
    data() {
      return {
        // 车牌输入时，abc=true为输入车牌号码，bac=false为输入省份中文简称
        abc: false
      };
    },
    computed: {
      areaList() {
        let data = [
          "京",
          "沪",
          "粤",
          "津",
          "冀",
          "豫",
          "云",
          "辽",
          "黑",
          "湘",
          "皖",
          "鲁",
          "苏",
          "浙",
          "赣",
          "鄂",
          "桂",
          "甘",
          "晋",
          "陕",
          "蒙",
          "吉",
          "闽",
          "贵",
          "渝",
          "川",
          "青",
          "琼",
          "宁",
          "挂",
          "藏",
          "港",
          "澳",
          "新",
          "使",
          "学"
        ];
        let tmp = [];
        if (this.random)
          data = uni.$u.randomArray(data);
        tmp[0] = data.slice(0, 10);
        tmp[1] = data.slice(10, 20);
        tmp[2] = data.slice(20, 30);
        tmp[3] = data.slice(30, 36);
        return tmp;
      },
      engKeyBoardList() {
        let data = [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          "Q",
          "W",
          "E",
          "R",
          "T",
          "Y",
          "U",
          "I",
          "O",
          "P",
          "A",
          "S",
          "D",
          "F",
          "G",
          "H",
          "J",
          "K",
          "L",
          "Z",
          "X",
          "C",
          "V",
          "B",
          "N",
          "M"
        ];
        let tmp = [];
        if (this.random)
          data = uni.$u.randomArray(data);
        tmp[0] = data.slice(0, 10);
        tmp[1] = data.slice(10, 20);
        tmp[2] = data.slice(20, 30);
        tmp[3] = data.slice(30, 36);
        return tmp;
      }
    },
    methods: {
      // 点击键盘按钮
      carInputClick(i2, j) {
        let value2 = "";
        if (this.abc)
          value2 = this.engKeyBoardList[i2][j];
        else
          value2 = this.areaList[i2][j];
        if (!this.abc && this.autoChange)
          uni.$u.sleep(200).then(() => this.abc = true);
        this.$emit("change", value2);
      },
      // 修改汽车牌键盘的输入模式，中文|英文
      changeCarInputMode() {
        this.abc = !this.abc;
      },
      // 点击退格键
      backspaceClick() {
        this.$emit("backspace");
        clearInterval(this.timer);
        this.timer = null;
        this.timer = setInterval(() => {
          this.$emit("backspace");
        }, 250);
      },
      clearTimer() {
        clearInterval(this.timer);
        this.timer = null;
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$6);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "u-keyboard",
        onTouchmove: _cache[3] || (_cache[3] = vue.withModifiers((...args) => _ctx.noop && _ctx.noop(...args), ["stop", "prevent"]))
      },
      [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.abc ? $options.engKeyBoardList : $options.areaList, (group, i2) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: i2,
              class: vue.normalizeClass(["u-keyboard__button", [i2 + 1 === 4 && "u-keyboard__button--center"]]),
              index: i2
            }, [
              i2 === 3 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "u-keyboard__button__inner-wrapper"
              }, [
                vue.createElementVNode("view", {
                  class: "u-keyboard__button__inner-wrapper__left",
                  "hover-class": "u-hover-class",
                  "hover-stay-time": 200,
                  onClick: _cache[0] || (_cache[0] = (...args) => $options.changeCarInputMode && $options.changeCarInputMode(...args))
                }, [
                  vue.createElementVNode(
                    "text",
                    {
                      class: vue.normalizeClass(["u-keyboard__button__inner-wrapper__left__lang", [!$data.abc && "u-keyboard__button__inner-wrapper__left__lang--active"]])
                    },
                    "中",
                    2
                    /* CLASS */
                  ),
                  vue.createElementVNode("text", { class: "u-keyboard__button__inner-wrapper__left__line" }, "/"),
                  vue.createElementVNode(
                    "text",
                    {
                      class: vue.normalizeClass(["u-keyboard__button__inner-wrapper__left__lang", [$data.abc && "u-keyboard__button__inner-wrapper__left__lang--active"]])
                    },
                    "英",
                    2
                    /* CLASS */
                  )
                ])
              ])) : vue.createCommentVNode("v-if", true),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(group, (item, j) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "u-keyboard__button__inner-wrapper",
                    key: j
                  }, [
                    vue.createElementVNode("view", {
                      class: "u-keyboard__button__inner-wrapper__inner",
                      "hover-stay-time": 200,
                      onClick: ($event) => $options.carInputClick(i2, j),
                      "hover-class": "u-hover-class"
                    }, [
                      vue.createElementVNode(
                        "text",
                        { class: "u-keyboard__button__inner-wrapper__inner__text" },
                        vue.toDisplayString(item),
                        1
                        /* TEXT */
                      )
                    ], 8, ["onClick"])
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              )),
              i2 === 3 ? (vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  key: 1,
                  onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.backspaceClick && $options.backspaceClick(...args)),
                  onTouchend: _cache[2] || (_cache[2] = (...args) => $options.clearTimer && $options.clearTimer(...args)),
                  class: "u-keyboard__button__inner-wrapper"
                },
                [
                  vue.createElementVNode("view", {
                    class: "u-keyboard__button__inner-wrapper__right",
                    "hover-class": "u-hover-class",
                    "hover-stay-time": 200
                  }, [
                    vue.createVNode(_component_u_icon, {
                      size: "28",
                      name: "backspace",
                      color: "#303133"
                    })
                  ])
                ],
                32
                /* HYDRATE_EVENTS */
              )) : vue.createCommentVNode("v-if", true)
            ], 10, ["index"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ],
      32
      /* HYDRATE_EVENTS */
    );
  }
  const __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-e3990159"], ["__file", "D:/study/实训/intelligent_community_app_owner/uni_modules/uview-plus/components/u-car-keyboard/u-car-keyboard.vue"]]);
  const props$4 = {
    props: {
      // 键盘的类型，number-数字键盘，card-身份证键盘，car-车牌号键盘
      mode: {
        type: String,
        default: props$x.keyboard.mode
      },
      // 是否显示键盘的"."符号
      dotDisabled: {
        type: Boolean,
        default: props$x.keyboard.dotDisabled
      },
      // 是否显示顶部工具条
      tooltip: {
        type: Boolean,
        default: props$x.keyboard.tooltip
      },
      // 是否显示工具条中间的提示
      showTips: {
        type: Boolean,
        default: props$x.keyboard.showTips
      },
      // 工具条中间的提示文字
      tips: {
        type: String,
        default: props$x.keyboard.tips
      },
      // 是否显示工具条左边的"取消"按钮
      showCancel: {
        type: Boolean,
        default: props$x.keyboard.showCancel
      },
      // 是否显示工具条右边的"完成"按钮
      showConfirm: {
        type: Boolean,
        default: props$x.keyboard.showConfirm
      },
      // 是否打乱键盘按键的顺序
      random: {
        type: Boolean,
        default: props$x.keyboard.random
      },
      // 是否开启底部安全区适配，开启的话，会在iPhoneX机型底部添加一定的内边距
      safeAreaInsetBottom: {
        type: Boolean,
        default: props$x.keyboard.safeAreaInsetBottom
      },
      // 是否允许通过点击遮罩关闭键盘
      closeOnClickOverlay: {
        type: Boolean,
        default: props$x.keyboard.closeOnClickOverlay
      },
      // 控制键盘的弹出与收起
      show: {
        type: Boolean,
        default: props$x.keyboard.show
      },
      // 是否显示遮罩，某些时候数字键盘时，用户希望看到自己的数值，所以可能不想要遮罩
      overlay: {
        type: Boolean,
        default: props$x.keyboard.overlay
      },
      // z-index值
      zIndex: {
        type: [String, Number],
        default: props$x.keyboard.zIndex
      },
      // 取消按钮的文字
      cancelText: {
        type: String,
        default: props$x.keyboard.cancelText
      },
      // 确认按钮的文字
      confirmText: {
        type: String,
        default: props$x.keyboard.confirmText
      },
      // 输入一个中文后，是否自动切换到英文
      autoChange: {
        type: Boolean,
        default: props$x.keyboard.autoChange
      }
    }
  };
  const _sfc_main$b = {
    name: "u-keyboard",
    data() {
      return {};
    },
    mixins: [mpMixin, mixin, props$4],
    methods: {
      change(e) {
        this.$emit("change", e);
      },
      // 键盘关闭
      popupClose() {
        this.$emit("close");
      },
      // 输入完成
      onConfirm() {
        this.$emit("confirm");
      },
      // 取消输入
      onCancel() {
        this.$emit("cancel");
      },
      // 退格键
      backspace() {
        this.$emit("backspace");
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_number_keyboard = resolveEasycom(vue.resolveDynamicComponent("u-number-keyboard"), __easycom_0$1);
    const _component_u_car_keyboard = resolveEasycom(vue.resolveDynamicComponent("u-car-keyboard"), __easycom_1$2);
    const _component_u_popup = resolveEasycom(vue.resolveDynamicComponent("u-popup"), __easycom_2$6);
    return vue.openBlock(), vue.createBlock(_component_u_popup, {
      overlay: _ctx.overlay,
      closeOnClickOverlay: _ctx.closeOnClickOverlay,
      mode: "bottom",
      popup: false,
      show: _ctx.show,
      safeAreaInsetBottom: _ctx.safeAreaInsetBottom,
      onClose: $options.popupClose,
      zIndex: _ctx.zIndex,
      customStyle: {
        backgroundColor: "rgb(214, 218, 220)"
      }
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "u-keyboard" }, [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
          _ctx.tooltip ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "u-keyboard__tooltip"
          }, [
            vue.createElementVNode("view", {
              "hover-class": "u-hover-class",
              "hover-stay-time": 100
            }, [
              _ctx.showCancel ? (vue.openBlock(), vue.createElementBlock(
                "text",
                {
                  key: 0,
                  class: "u-keyboard__tooltip__item u-keyboard__tooltip__cancel",
                  onClick: _cache[0] || (_cache[0] = (...args) => $options.onCancel && $options.onCancel(...args))
                },
                vue.toDisplayString(_ctx.showCancel && _ctx.cancelText),
                1
                /* TEXT */
              )) : vue.createCommentVNode("v-if", true)
            ]),
            vue.createElementVNode("view", null, [
              _ctx.showTips ? (vue.openBlock(), vue.createElementBlock(
                "text",
                {
                  key: 0,
                  class: "u-keyboard__tooltip__item u-keyboard__tooltip__tips"
                },
                vue.toDisplayString(_ctx.tips ? _ctx.tips : _ctx.mode == "number" ? "数字键盘" : _ctx.mode == "card" ? "身份证键盘" : "车牌号键盘"),
                1
                /* TEXT */
              )) : vue.createCommentVNode("v-if", true)
            ]),
            vue.createElementVNode("view", {
              "hover-class": "u-hover-class",
              "hover-stay-time": 100
            }, [
              _ctx.showConfirm ? (vue.openBlock(), vue.createElementBlock(
                "text",
                {
                  key: 0,
                  onClick: _cache[1] || (_cache[1] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
                  class: "u-keyboard__tooltip__item u-keyboard__tooltip__submit",
                  "hover-class": "u-hover-class"
                },
                vue.toDisplayString(_ctx.showConfirm && _ctx.confirmText),
                1
                /* TEXT */
              )) : vue.createCommentVNode("v-if", true)
            ])
          ])) : vue.createCommentVNode("v-if", true),
          _ctx.mode == "number" || _ctx.mode == "card" ? (vue.openBlock(), vue.createBlock(_component_u_number_keyboard, {
            key: 1,
            random: _ctx.random,
            onBackspace: $options.backspace,
            onChange: $options.change,
            mode: _ctx.mode,
            dotDisabled: _ctx.dotDisabled
          }, null, 8, ["random", "onBackspace", "onChange", "mode", "dotDisabled"])) : (vue.openBlock(), vue.createBlock(_component_u_car_keyboard, {
            key: 2,
            random: _ctx.random,
            autoChange: _ctx.autoChange,
            onBackspace: $options.backspace,
            onChange: $options.change
          }, null, 8, ["random", "autoChange", "onBackspace", "onChange"]))
        ])
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["overlay", "closeOnClickOverlay", "show", "safeAreaInsetBottom", "onClose", "zIndex", "customStyle"]);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-5c3a4793"], ["__file", "D:/study/实训/intelligent_community_app_owner/uni_modules/uview-plus/components/u-keyboard/u-keyboard.vue"]]);
  const props$3 = {
    props: {
      // 是否打开组件
      show: {
        type: Boolean,
        default: props$x.datetimePicker.show
      },
      // 是否展示顶部的操作栏
      showToolbar: {
        type: Boolean,
        default: props$x.datetimePicker.showToolbar
      },
      // 绑定值
      modelValue: {
        type: [String, Number],
        default: props$x.datetimePicker.value
      },
      // 顶部标题
      title: {
        type: String,
        default: props$x.datetimePicker.title
      },
      // 展示格式，mode=date为日期选择，mode=time为时间选择，mode=year-month为年月选择，mode=datetime为日期时间选择
      mode: {
        type: String,
        default: props$x.datetimePicker.mode
      },
      // 可选的最大时间
      maxDate: {
        type: Number,
        // 最大默认值为后10年
        default: props$x.datetimePicker.maxDate
      },
      // 可选的最小时间
      minDate: {
        type: Number,
        // 最小默认值为前10年
        default: props$x.datetimePicker.minDate
      },
      // 可选的最小小时，仅mode=time有效
      minHour: {
        type: Number,
        default: props$x.datetimePicker.minHour
      },
      // 可选的最大小时，仅mode=time有效
      maxHour: {
        type: Number,
        default: props$x.datetimePicker.maxHour
      },
      // 可选的最小分钟，仅mode=time有效
      minMinute: {
        type: Number,
        default: props$x.datetimePicker.minMinute
      },
      // 可选的最大分钟，仅mode=time有效
      maxMinute: {
        type: Number,
        default: props$x.datetimePicker.maxMinute
      },
      // 选项过滤函数
      filter: {
        type: [Function, null],
        default: props$x.datetimePicker.filter
      },
      // 选项格式化函数
      formatter: {
        type: [Function, null],
        default: props$x.datetimePicker.formatter
      },
      // 是否显示加载中状态
      loading: {
        type: Boolean,
        default: props$x.datetimePicker.loading
      },
      // 各列中，单个选项的高度
      itemHeight: {
        type: [String, Number],
        default: props$x.datetimePicker.itemHeight
      },
      // 取消按钮的文字
      cancelText: {
        type: String,
        default: props$x.datetimePicker.cancelText
      },
      // 确认按钮的文字
      confirmText: {
        type: String,
        default: props$x.datetimePicker.confirmText
      },
      // 取消按钮的颜色
      cancelColor: {
        type: String,
        default: props$x.datetimePicker.cancelColor
      },
      // 确认按钮的颜色
      confirmColor: {
        type: String,
        default: props$x.datetimePicker.confirmColor
      },
      // 每列中可见选项的数量
      visibleItemCount: {
        type: [String, Number],
        default: props$x.datetimePicker.visibleItemCount
      },
      // 是否允许点击遮罩关闭选择器
      closeOnClickOverlay: {
        type: Boolean,
        default: props$x.datetimePicker.closeOnClickOverlay
      },
      // 各列的默认索引
      defaultIndex: {
        type: Array,
        default: props$x.datetimePicker.defaultIndex
      }
    }
  };
  var dayjs_minExports = {};
  var dayjs_min = {
    get exports() {
      return dayjs_minExports;
    },
    set exports(v) {
      dayjs_minExports = v;
    }
  };
  (function(module, exports) {
    !function(t, e) {
      module.exports = e();
    }(commonjsGlobal, function() {
      var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i2 = "second", s = "minute", u = "hour", a = "day", o = "week", f = "month", h = "quarter", c = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
        var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
        return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
      } }, m = function(t2, e2, n2) {
        var r2 = String(t2);
        return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
      }, v = { s: m, z: function(t2) {
        var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i3 = n2 % 60;
        return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i3, 2, "0");
      }, m: function t2(e2, n2) {
        if (e2.date() < n2.date())
          return -t2(n2, e2);
        var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i3 = e2.clone().add(r2, f), s2 = n2 - i3 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), f);
        return +(-(r2 + (n2 - i3) / (s2 ? i3 - u2 : u2 - i3)) || 0);
      }, a: function(t2) {
        return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
      }, p: function(t2) {
        return { M: f, y: c, w: o, d: a, D: d, h: u, m: s, s: i2, ms: r, Q: h }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t2) {
        return void 0 === t2;
      } }, g = "en", D = {};
      D[g] = M;
      var p = function(t2) {
        return t2 instanceof _;
      }, S = function t2(e2, n2, r2) {
        var i3;
        if (!e2)
          return g;
        if ("string" == typeof e2) {
          var s2 = e2.toLowerCase();
          D[s2] && (i3 = s2), n2 && (D[s2] = n2, i3 = s2);
          var u2 = e2.split("-");
          if (!i3 && u2.length > 1)
            return t2(u2[0]);
        } else {
          var a2 = e2.name;
          D[a2] = e2, i3 = a2;
        }
        return !r2 && i3 && (g = i3), i3 || !r2 && g;
      }, w = function(t2, e2) {
        if (p(t2))
          return t2.clone();
        var n2 = "object" == typeof e2 ? e2 : {};
        return n2.date = t2, n2.args = arguments, new _(n2);
      }, O = v;
      O.l = S, O.i = p, O.w = function(t2, e2) {
        return w(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
      };
      var _ = function() {
        function M2(t2) {
          this.$L = S(t2.locale, null, true), this.parse(t2);
        }
        var m2 = M2.prototype;
        return m2.parse = function(t2) {
          this.$d = function(t3) {
            var e2 = t3.date, n2 = t3.utc;
            if (null === e2)
              return /* @__PURE__ */ new Date(NaN);
            if (O.u(e2))
              return /* @__PURE__ */ new Date();
            if (e2 instanceof Date)
              return new Date(e2);
            if ("string" == typeof e2 && !/Z$/i.test(e2)) {
              var r2 = e2.match($);
              if (r2) {
                var i3 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                return n2 ? new Date(Date.UTC(r2[1], i3, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i3, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
              }
            }
            return new Date(e2);
          }(t2), this.$x = t2.x || {}, this.init();
        }, m2.init = function() {
          var t2 = this.$d;
          this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
        }, m2.$utils = function() {
          return O;
        }, m2.isValid = function() {
          return !(this.$d.toString() === l);
        }, m2.isSame = function(t2, e2) {
          var n2 = w(t2);
          return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
        }, m2.isAfter = function(t2, e2) {
          return w(t2) < this.startOf(e2);
        }, m2.isBefore = function(t2, e2) {
          return this.endOf(e2) < w(t2);
        }, m2.$g = function(t2, e2, n2) {
          return O.u(t2) ? this[e2] : this.set(n2, t2);
        }, m2.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m2.valueOf = function() {
          return this.$d.getTime();
        }, m2.startOf = function(t2, e2) {
          var n2 = this, r2 = !!O.u(e2) || e2, h2 = O.p(t2), l2 = function(t3, e3) {
            var i3 = O.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
            return r2 ? i3 : i3.endOf(a);
          }, $2 = function(t3, e3) {
            return O.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
          }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
          switch (h2) {
            case c:
              return r2 ? l2(1, 0) : l2(31, 11);
            case f:
              return r2 ? l2(1, M3) : l2(0, M3 + 1);
            case o:
              var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
              return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
            case a:
            case d:
              return $2(v2 + "Hours", 0);
            case u:
              return $2(v2 + "Minutes", 1);
            case s:
              return $2(v2 + "Seconds", 2);
            case i2:
              return $2(v2 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m2.endOf = function(t2) {
          return this.startOf(t2, false);
        }, m2.$set = function(t2, e2) {
          var n2, o2 = O.p(t2), h2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = h2 + "Date", n2[d] = h2 + "Date", n2[f] = h2 + "Month", n2[c] = h2 + "FullYear", n2[u] = h2 + "Hours", n2[s] = h2 + "Minutes", n2[i2] = h2 + "Seconds", n2[r] = h2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
          if (o2 === f || o2 === c) {
            var y2 = this.clone().set(d, 1);
            y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
          } else
            l2 && this.$d[l2]($2);
          return this.init(), this;
        }, m2.set = function(t2, e2) {
          return this.clone().$set(t2, e2);
        }, m2.get = function(t2) {
          return this[O.p(t2)]();
        }, m2.add = function(r2, h2) {
          var d2, l2 = this;
          r2 = Number(r2);
          var $2 = O.p(h2), y2 = function(t2) {
            var e2 = w(l2);
            return O.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
          };
          if ($2 === f)
            return this.set(f, this.$M + r2);
          if ($2 === c)
            return this.set(c, this.$y + r2);
          if ($2 === a)
            return y2(1);
          if ($2 === o)
            return y2(7);
          var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i2] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
          return O.w(m3, this);
        }, m2.subtract = function(t2, e2) {
          return this.add(-1 * t2, e2);
        }, m2.format = function(t2) {
          var e2 = this, n2 = this.$locale();
          if (!this.isValid())
            return n2.invalidDate || l;
          var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i3 = O.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, f2 = n2.months, h2 = function(t3, n3, i4, s3) {
            return t3 && (t3[n3] || t3(e2, r2)) || i4[n3].slice(0, s3);
          }, c2 = function(t3) {
            return O.s(s2 % 12 || 12, t3, "0");
          }, d2 = n2.meridiem || function(t3, e3, n3) {
            var r3 = t3 < 12 ? "AM" : "PM";
            return n3 ? r3.toLowerCase() : r3;
          }, $2 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a2 + 1, MM: O.s(a2 + 1, 2, "0"), MMM: h2(n2.monthsShort, a2, f2, 3), MMMM: h2(f2, a2), D: this.$D, DD: O.s(this.$D, 2, "0"), d: String(this.$W), dd: h2(n2.weekdaysMin, this.$W, o2, 2), ddd: h2(n2.weekdaysShort, this.$W, o2, 3), dddd: o2[this.$W], H: String(s2), HH: O.s(s2, 2, "0"), h: c2(1), hh: c2(2), a: d2(s2, u2, true), A: d2(s2, u2, false), m: String(u2), mm: O.s(u2, 2, "0"), s: String(this.$s), ss: O.s(this.$s, 2, "0"), SSS: O.s(this.$ms, 3, "0"), Z: i3 };
          return r2.replace(y, function(t3, e3) {
            return e3 || $2[t3] || i3.replace(":", "");
          });
        }, m2.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m2.diff = function(r2, d2, l2) {
          var $2, y2 = O.p(d2), M3 = w(r2), m3 = (M3.utcOffset() - this.utcOffset()) * e, v2 = this - M3, g2 = O.m(this, M3);
          return g2 = ($2 = {}, $2[c] = g2 / 12, $2[f] = g2, $2[h] = g2 / 3, $2[o] = (v2 - m3) / 6048e5, $2[a] = (v2 - m3) / 864e5, $2[u] = v2 / n, $2[s] = v2 / e, $2[i2] = v2 / t, $2)[y2] || v2, l2 ? g2 : O.a(g2);
        }, m2.daysInMonth = function() {
          return this.endOf(f).$D;
        }, m2.$locale = function() {
          return D[this.$L];
        }, m2.locale = function(t2, e2) {
          if (!t2)
            return this.$L;
          var n2 = this.clone(), r2 = S(t2, e2, true);
          return r2 && (n2.$L = r2), n2;
        }, m2.clone = function() {
          return O.w(this.$d, this);
        }, m2.toDate = function() {
          return new Date(this.valueOf());
        }, m2.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m2.toISOString = function() {
          return this.$d.toISOString();
        }, m2.toString = function() {
          return this.$d.toUTCString();
        }, M2;
      }(), T = _.prototype;
      return w.prototype = T, [["$ms", r], ["$s", i2], ["$m", s], ["$H", u], ["$W", a], ["$M", f], ["$y", c], ["$D", d]].forEach(function(t2) {
        T[t2[1]] = function(e2) {
          return this.$g(e2, t2[0], t2[1]);
        };
      }), w.extend = function(t2, e2) {
        return t2.$i || (t2(e2, _, w), t2.$i = true), w;
      }, w.locale = S, w.isDayjs = p, w.unix = function(t2) {
        return w(1e3 * t2);
      }, w.en = D[g], w.Ls = D, w.p = {}, w;
    });
  })(dayjs_min);
  const dayjs = dayjs_minExports;
  function times$1(n, iteratee) {
    let index2 = -1;
    const result = Array(n < 0 ? 0 : n);
    while (++index2 < n) {
      result[index2] = iteratee(index2);
    }
    return result;
  }
  const _sfc_main$a = {
    name: "datetime-picker",
    mixins: [mpMixin, mixin, props$3],
    data() {
      return {
        columns: [],
        innerDefaultIndex: [],
        innerFormatter: (type2, value2) => value2
      };
    },
    watch: {
      show(newValue, oldValue) {
        if (newValue) {
          this.updateColumnValue(this.innerValue);
        }
      },
      propsChange() {
        this.init();
      }
    },
    computed: {
      // 如果以下这些变量发生了变化，意味着需要重新初始化各列的值
      propsChange() {
        return [this.mode, this.maxDate, this.minDate, this.minHour, this.maxHour, this.minMinute, this.maxMinute, this.filter];
      }
    },
    mounted() {
      this.init();
    },
    emits: ["close", "cancel", "confirm", "change", "update:modelValue"],
    methods: {
      init() {
        this.innerValue = this.correctValue(this.modelValue);
        this.updateColumnValue(this.innerValue);
      },
      // 在微信小程序中，不支持将函数当做props参数，故只能通过ref形式调用
      setFormatter(e) {
        this.innerFormatter = e;
      },
      // 关闭选择器
      close() {
        if (this.closeOnClickOverlay) {
          this.$emit("close");
        }
      },
      // 点击工具栏的取消按钮
      cancel() {
        this.$emit("cancel");
      },
      // 点击工具栏的确定按钮
      confirm() {
        this.$emit("confirm", {
          value: this.innerValue,
          mode: this.mode
        });
        this.$emit("update:modelValue", this.innerValue);
      },
      //用正则截取输出值,当出现多组数字时,抛出错误
      intercept(e, type2) {
        let judge = e.match(/\d+/g);
        if (judge.length > 1) {
          uni.$u.error("请勿在过滤或格式化函数时添加数字");
          return 0;
        } else if (type2 && judge[0].length == 4) {
          return judge[0];
        } else if (judge[0].length > 2) {
          uni.$u.error("请勿在过滤或格式化函数时添加数字");
          return 0;
        } else {
          return judge[0];
        }
      },
      // 列发生变化时触发
      change(e) {
        const { indexs, values } = e;
        let selectValue = "";
        if (this.mode === "time") {
          selectValue = `${this.intercept(values[0][indexs[0]])}:${this.intercept(values[1][indexs[1]])}`;
        } else {
          const year = parseInt(this.intercept(values[0][indexs[0]], "year"));
          const month = parseInt(this.intercept(values[1][indexs[1]]));
          let date2 = parseInt(values[2] ? this.intercept(values[2][indexs[2]]) : 1);
          let hour = 0, minute = 0;
          const maxDate = dayjs(`${year}-${month}`).daysInMonth();
          if (this.mode === "year-month") {
            date2 = 1;
          }
          date2 = Math.min(maxDate, date2);
          if (this.mode === "datetime") {
            hour = parseInt(this.intercept(values[3][indexs[3]]));
            minute = parseInt(this.intercept(values[4][indexs[4]]));
          }
          selectValue = Number(new Date(year, month - 1, date2, hour, minute));
        }
        selectValue = this.correctValue(selectValue);
        this.innerValue = selectValue;
        this.updateColumnValue(selectValue);
        this.$emit("change", {
          value: selectValue,
          // 微信小程序不能传递this实例，会因为循环引用而报错
          picker: this.$refs.picker,
          mode: this.mode
        });
      },
      // 更新各列的值，进行补0、格式化等操作
      updateColumnValue(value2) {
        this.innerValue = value2;
        this.updateColumns();
        this.updateIndexs(value2);
      },
      // 更新索引
      updateIndexs(value2) {
        let values = [];
        const formatter = this.formatter || this.innerFormatter;
        const padZero2 = uni.$u.padZero;
        if (this.mode === "time") {
          const timeArr = value2.split(":");
          values = [formatter("hour", timeArr[0]), formatter("minute", timeArr[1])];
        } else {
          values = [
            formatter("year", `${dayjs(value2).year()}`),
            // 月份补0
            formatter("month", padZero2(dayjs(value2).month() + 1))
          ];
          if (this.mode === "date") {
            values.push(formatter("day", padZero2(dayjs(value2).date())));
          }
          if (this.mode === "datetime") {
            values.push(formatter("day", padZero2(dayjs(value2).date())), formatter("hour", padZero2(dayjs(value2).hour())), formatter("minute", padZero2(dayjs(value2).minute())));
          }
        }
        const indexs = this.columns.map((column, index2) => {
          return Math.max(0, column.findIndex((item) => item === values[index2]));
        });
        this.innerDefaultIndex = indexs;
      },
      // 更新各列的值
      updateColumns() {
        const formatter = this.formatter || this.innerFormatter;
        const results = this.getOriginColumns().map((column) => column.values.map((value2) => formatter(column.type, value2)));
        this.columns = results;
      },
      getOriginColumns() {
        const results = this.getRanges().map(({ type: type2, range: range2 }) => {
          let values = times$1(range2[1] - range2[0] + 1, (index2) => {
            let value2 = range2[0] + index2;
            value2 = type2 === "year" ? `${value2}` : uni.$u.padZero(value2);
            return value2;
          });
          if (this.filter) {
            values = this.filter(type2, values);
          }
          return { type: type2, values };
        });
        return results;
      },
      // 通过最大值和最小值生成数组
      generateArray(start, end) {
        return Array.from(new Array(end + 1).keys()).slice(start);
      },
      // 得出合法的时间
      correctValue(value2) {
        const isDateMode = this.mode !== "time";
        if (isDateMode && !uni.$u.test.date(value2)) {
          value2 = this.minDate;
        } else if (!isDateMode && !value2) {
          value2 = `${uni.$u.padZero(this.minHour)}:${uni.$u.padZero(this.minMinute)}`;
        }
        if (!isDateMode) {
          if (String(value2).indexOf(":") === -1)
            return uni.$u.error("时间错误，请传递如12:24的格式");
          let [hour, minute] = value2.split(":");
          hour = uni.$u.padZero(uni.$u.range(this.minHour, this.maxHour, Number(hour)));
          minute = uni.$u.padZero(uni.$u.range(this.minMinute, this.maxMinute, Number(minute)));
          return `${hour}:${minute}`;
        } else {
          value2 = dayjs(value2).isBefore(dayjs(this.minDate)) ? this.minDate : value2;
          value2 = dayjs(value2).isAfter(dayjs(this.maxDate)) ? this.maxDate : value2;
          return value2;
        }
      },
      // 获取每列的最大和最小值
      getRanges() {
        if (this.mode === "time") {
          return [
            {
              type: "hour",
              range: [this.minHour, this.maxHour]
            },
            {
              type: "minute",
              range: [this.minMinute, this.maxMinute]
            }
          ];
        }
        const { maxYear, maxDate, maxMonth, maxHour, maxMinute } = this.getBoundary("max", this.innerValue);
        const { minYear, minDate, minMonth, minHour, minMinute } = this.getBoundary("min", this.innerValue);
        const result = [
          {
            type: "year",
            range: [minYear, maxYear]
          },
          {
            type: "month",
            range: [minMonth, maxMonth]
          },
          {
            type: "day",
            range: [minDate, maxDate]
          },
          {
            type: "hour",
            range: [minHour, maxHour]
          },
          {
            type: "minute",
            range: [minMinute, maxMinute]
          }
        ];
        if (this.mode === "date")
          result.splice(3, 2);
        if (this.mode === "year-month")
          result.splice(2, 3);
        return result;
      },
      // 根据minDate、maxDate、minHour、maxHour等边界值，判断各列的开始和结束边界值
      getBoundary(type2, innerValue) {
        const value2 = new Date(innerValue);
        const boundary = new Date(this[`${type2}Date`]);
        const year = dayjs(boundary).year();
        let month = 1;
        let date2 = 1;
        let hour = 0;
        let minute = 0;
        if (type2 === "max") {
          month = 12;
          date2 = dayjs(value2).daysInMonth();
          hour = 23;
          minute = 59;
        }
        if (dayjs(value2).year() === year) {
          month = dayjs(boundary).month() + 1;
          if (dayjs(value2).month() + 1 === month) {
            date2 = dayjs(boundary).date();
            if (dayjs(value2).date() === date2) {
              hour = dayjs(boundary).hour();
              if (dayjs(value2).hour() === hour) {
                minute = dayjs(boundary).minute();
              }
            }
          }
        }
        return {
          [`${type2}Year`]: year,
          [`${type2}Month`]: month,
          [`${type2}Date`]: date2,
          [`${type2}Hour`]: hour,
          [`${type2}Minute`]: minute
        };
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_picker = resolveEasycom(vue.resolveDynamicComponent("u-picker"), __easycom_3$1);
    return vue.openBlock(), vue.createBlock(_component_u_picker, {
      ref: "picker",
      show: _ctx.show,
      closeOnClickOverlay: _ctx.closeOnClickOverlay,
      columns: $data.columns,
      title: _ctx.title,
      itemHeight: _ctx.itemHeight,
      showToolbar: _ctx.showToolbar,
      visibleItemCount: _ctx.visibleItemCount,
      defaultIndex: $data.innerDefaultIndex,
      cancelText: _ctx.cancelText,
      confirmText: _ctx.confirmText,
      cancelColor: _ctx.cancelColor,
      confirmColor: _ctx.confirmColor,
      onClose: $options.close,
      onCancel: $options.cancel,
      onConfirm: $options.confirm,
      onChange: $options.change
    }, null, 8, ["show", "closeOnClickOverlay", "columns", "title", "itemHeight", "showToolbar", "visibleItemCount", "defaultIndex", "cancelText", "confirmText", "cancelColor", "confirmColor", "onClose", "onCancel", "onConfirm", "onChange"]);
  }
  const __easycom_5 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-e7a0f1eb"], ["__file", "D:/study/实训/intelligent_community_app_owner/uni_modules/uview-plus/components/u-datetime-picker/u-datetime-picker.vue"]]);
  const _sfc_main$9 = {
    data() {
      return {
        keyboard_show: false,
        number: "",
        number_array: [],
        i: -1,
        show1: false,
        show2: false,
        formData: {
          owner_id: "",
          number: "",
          brand: "",
          type: "",
          color: "",
          deadline: "0000 年 00 月 00 日",
          examineTime: "0000 年 00 月 00 日"
        }
      };
    },
    methods: {
      //车牌键盘相关方法
      keyboard_change(val) {
        this.i++;
        this.number_array[this.i] = val;
        if (this.i > 7) {
          this.i = 7;
        }
      },
      keyboard_confirm() {
        for (let i2 = 0; i2 < this.number_array.length; i2++) {
          this.formData.number += this.number_array[i2];
        }
        this.keyboard_show = false;
        formatAppLog("log", "at pages/park/add-car.vue:157", this.number);
      },
      backspace() {
        this.number_array[this.i] = "";
        this.i--;
        for (let i2 = 0; i2 < this.number_array.length; i2++) {
          this.formData.number += this.number_array[i2];
        }
        if (this.i < -1) {
          this.i = -1;
        }
      },
      //日期选择方法
      confirm1(e) {
        const data = new Date(e.value);
        this.formData.deadline = formatDate(data, "yyyy年MM月dd日");
        this.show1 = false;
      },
      confirm2(e) {
        const data = new Date(e.value);
        this.formData.examineTime = formatDate(data, "yyyy年MM月dd日");
        this.show2 = false;
      },
      //提交信息
      submit() {
        const owner_id = uni.getStorageSync("owner").id;
        this.formData.ownerId = owner_id;
        if (this.formData.number != "") {
          addCar(this.formData).then((res) => {
            formatAppLog("log", "at pages/park/add-car.vue:190", res);
            if (res.data.code === 0) {
              this.$refs.uToast.show({
                message: "添加成功",
                position: "top",
                type: "success"
              });
            } else {
              this.$refs.uToast.show({
                message: "添加失败:" + res.msg,
                position: "top",
                type: "error"
              });
            }
          });
        } else {
          this.$refs.uToast.show({
            message: "车牌号不能为空",
            position: "top",
            type: "warning"
          });
        }
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_keyboard = resolveEasycom(vue.resolveDynamicComponent("u-keyboard"), __easycom_0);
    const _component_u_input = resolveEasycom(vue.resolveDynamicComponent("u-input"), __easycom_1$3);
    const _component_u_form_item = resolveEasycom(vue.resolveDynamicComponent("u-form-item"), __easycom_2$3);
    const _component_u_form = resolveEasycom(vue.resolveDynamicComponent("u-form"), __easycom_3);
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_2$4);
    const _component_u_datetime_picker = resolveEasycom(vue.resolveDynamicComponent("u-datetime-picker"), __easycom_5);
    const _component_u_toast = resolveEasycom(vue.resolveDynamicComponent("u-toast"), __easycom_4);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "container" }, [
          vue.createElementVNode("view", {
            class: "top",
            style: { "height": "20upx", "background-color": "#f5f5f5" }
          }),
          vue.createElementVNode("view", { class: "number" }, [
            vue.createElementVNode("view", {
              class: "title",
              style: { "color": "#ffffff", "font-size": "40upx", "font-weight": "700", "text-align": "center", "padding": "20upx" }
            }, " 请输入真实有效的车牌号 "),
            vue.createElementVNode("view", {
              class: "no_input",
              style: { "display": "flex", "justify-content": "center" },
              onClick: _cache[0] || (_cache[0] = ($event) => $data.keyboard_show = true)
            }, [
              vue.createElementVNode(
                "view",
                null,
                vue.toDisplayString($data.number_array[0]),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                null,
                vue.toDisplayString($data.number_array[1]),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                null,
                vue.toDisplayString($data.number_array[2]),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                null,
                vue.toDisplayString($data.number_array[3]),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                null,
                vue.toDisplayString($data.number_array[4]),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                null,
                vue.toDisplayString($data.number_array[5]),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                null,
                vue.toDisplayString($data.number_array[6]),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                null,
                vue.toDisplayString($data.number_array[7]),
                1
                /* TEXT */
              )
            ]),
            vue.createVNode(_component_u_keyboard, {
              ref: "uKeyboard",
              mode: "car",
              show: $data.keyboard_show,
              overlay: "false",
              onCancel: _cache[1] || (_cache[1] = ($event) => $data.keyboard_show = false),
              onChange: $options.keyboard_change,
              onConfirm: $options.keyboard_confirm,
              onBackspace: $options.backspace
            }, null, 8, ["show", "onChange", "onConfirm", "onBackspace"])
          ]),
          vue.createElementVNode("view", {
            class: "car_info",
            style: { "padding": "20upx" }
          }, [
            vue.createVNode(_component_u_form, { model: $data.formData }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_u_form_item, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_u_input, {
                      placeholder: "车辆品牌",
                      border: "bottom",
                      placeholderStyle: "color:black; text-align:right;",
                      modelValue: $data.formData.brand,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.formData.brand = $event)
                    }, {
                      prefix: vue.withCtx(() => [
                        vue.createElementVNode("text", null, "车辆品牌")
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                vue.createVNode(_component_u_form_item, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_u_input, {
                      placeholder: "请输入车辆型号",
                      border: "bottom",
                      placeholderStyle: "color:black; text-align:right;",
                      modelValue: $data.formData.type,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.formData.type = $event)
                    }, {
                      prefix: vue.withCtx(() => [
                        vue.createElementVNode("text", null, "车辆型号")
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                vue.createVNode(_component_u_form_item, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_u_input, {
                      placeholder: "请输入车辆颜色",
                      border: "bottom",
                      placeholderStyle: "color:black; text-align:right;",
                      modelValue: $data.formData.color,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.formData.color = $event)
                    }, {
                      prefix: vue.withCtx(() => [
                        vue.createElementVNode("text", null, "车辆颜色")
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                vue.createVNode(_component_u_form_item, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_u_input, {
                      placeholder: $data.formData.deadline,
                      border: "bottom",
                      placeholderStyle: "color:black; text-align:right;",
                      disabledColor: "#ffffff",
                      disabled: "",
                      onClick: _cache[5] || (_cache[5] = ($event) => $data.show1 = true)
                    }, {
                      prefix: vue.withCtx(() => [
                        vue.createElementVNode("text", null, "车辆保险截止日期")
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["placeholder"])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                vue.createVNode(_component_u_form_item, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_u_input, {
                      placeholder: $data.formData.examineTime,
                      border: "bottom",
                      placeholderStyle: "color:black; text-align:right;",
                      disabledColor: "#ffffff",
                      disabled: "",
                      onClick: _cache[6] || (_cache[6] = ($event) => $data.show2 = true)
                    }, {
                      prefix: vue.withCtx(() => [
                        vue.createElementVNode("text", null, "年审日期")
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["placeholder"])
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["model"])
          ]),
          vue.createElementVNode("view", { style: { "display": "flex", "justify-content": "center", "background-color": "#f5f5f5", "margin-top": "50upx" } }, [
            vue.createElementVNode("view", {
              class: "submit",
              style: { "width": "50%" }
            }, [
              vue.createVNode(_component_u_button, {
                type: "primary",
                shape: "circle",
                color: "#14acff",
                onClick: $options.submit
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("text", { style: { "color": "#ffffff" } }, "提交审核")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["onClick"])
            ])
          ]),
          vue.createVNode(_component_u_datetime_picker, {
            show: $data.show1,
            onConfirm: $options.confirm1,
            mode: "date",
            onCancel: _cache[7] || (_cache[7] = ($event) => $data.show1 = false)
          }, null, 8, ["show", "onConfirm"]),
          vue.createVNode(_component_u_datetime_picker, {
            show: $data.show2,
            onConfirm: $options.confirm2,
            mode: "date",
            onCancel: _cache[8] || (_cache[8] = ($event) => $data.show2 = false)
          }, null, 8, ["show", "onConfirm"])
        ]),
        vue.createVNode(
          _component_u_toast,
          { ref: "uToast" },
          null,
          512
          /* NEED_PATCH */
        )
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesParkAddCar = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-9a6eeb74"], ["__file", "D:/study/实训/intelligent_community_app_owner/pages/park/add-car.vue"]]);
  const _sfc_main$8 = {
    data() {
      return {
        type: true,
        //type为true为私有,false为租聘
        show1: false,
        show2: false,
        show3: false,
        value1: "请选择小区",
        value2: "请选择区域",
        value3: "请选择车位号",
        columns1: [[]],
        columns2: [["A区域", "B区域"]],
        columns3: [[]],
        community_id: "",
        garage_area: "",
        park_id: ""
      };
    },
    methods: {
      confirm1(e) {
        this.value2 = "请选择区域";
        this.value3 = "请选择车位号";
        formatAppLog("log", "at pages/park/add-park.vue:79", e);
        this.value1 = e.value[0].name;
        this.community_id = e.value[0].id;
        this.show1 = false;
      },
      confirm2(e) {
        this.value3 = "请选择车位号";
        this.value2 = e.value[0];
        this.garage_area = e.value[0];
        getParkByCommunity(this.community_id).then((res) => {
          formatAppLog("log", "at pages/park/add-park.vue:89", res);
          this.columns3[0] = res.data.data;
        });
        this.show2 = false;
      },
      confirm3(e) {
        this.value3 = e.value[0].parkNo;
        this.park_id = e.value[0].id;
        this.show3 = false;
      },
      submit() {
        const owner_id = uni.getStorageSync("owner").id;
        addPark(owner_id, this.park_id).then((res) => {
          if (res.data.code == 0) {
            this.$refs.uToast.show({
              message: "添加成功",
              position: "top",
              type: "success",
              duration: "1000"
            });
          } else {
            this.$refs.uToast.show({
              message: "添加失败:" + res.data.msg,
              position: "top",
              type: "error",
              duration: "1000"
            });
          }
        }).catch((err) => {
          formatAppLog("log", "at pages/park/add-park.vue:118", err);
          this.$refs.uToast.show({
            message: "服务器错误",
            position: "top",
            type: "error",
            duration: "1000"
          });
        });
      }
    },
    onShow() {
      const owner_id = uni.getStorageSync("owner").id;
      getCommunityList(owner_id).then((res) => {
        this.columns1[0] = res.data.data.community_list;
      });
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_cell = resolveEasycom(vue.resolveDynamicComponent("u-cell"), __easycom_0$2);
    const _component_u_input = resolveEasycom(vue.resolveDynamicComponent("u-input"), __easycom_1$3);
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_2$4);
    const _component_u_picker = resolveEasycom(vue.resolveDynamicComponent("u-picker"), __easycom_3$1);
    const _component_u_toast = resolveEasycom(vue.resolveDynamicComponent("u-toast"), __easycom_4);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "choose_park" }, [
        vue.createElementVNode("view", { style: { "padding": "20upx", "padding-left": "35upx" } }, [
          vue.createElementVNode("text", null, "选择车位")
        ]),
        vue.createVNode(_component_u_cell, {
          title: "小区",
          "is-link": "",
          value: $data.value1,
          rightIconStyle: "color: black; font-size:30upx;",
          onClick: _cache[0] || (_cache[0] = ($event) => $data.show1 = true)
        }, null, 8, ["value"]),
        vue.createVNode(_component_u_cell, {
          title: "区域",
          "is-link": "",
          value: $data.value2,
          rightIconStyle: "color: black; font-size:30upx;",
          onClick: _cache[1] || (_cache[1] = ($event) => $data.show2 = true)
        }, null, 8, ["value"]),
        vue.createVNode(_component_u_cell, {
          title: "车位编号",
          "is-link": "",
          value: $data.value3,
          rightIconStyle: "color: black; font-size:30upx;",
          onClick: _cache[2] || (_cache[2] = ($event) => $data.show3 = true)
        }, null, 8, ["value"]),
        vue.createVNode(_component_u_cell, { title: "车位类型" }, {
          "right-icon": vue.withCtx(() => [
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["type", $data.type == true ? "type_checked" : ""]),
                onClick: _cache[3] || (_cache[3] = ($event) => $data.type = true)
              },
              " 私有 ",
              2
              /* CLASS */
            ),
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["type", $data.type == false ? "type_checked" : ""]),
                onClick: _cache[4] || (_cache[4] = ($event) => $data.type = false)
              },
              " 租凭 ",
              2
              /* CLASS */
            )
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      vue.createElementVNode("view", { class: "user_info" }, [
        vue.createElementVNode("view", { style: { "padding": "20upx", "padding-left": "35upx", "background-color": "#f5f5f5" } }, [
          vue.createElementVNode("text", null, "住户信息")
        ]),
        vue.createVNode(_component_u_cell, { title: "您的姓名" }, {
          "right-icon": vue.withCtx(() => [
            vue.createVNode(_component_u_input, {
              border: "none",
              placeholder: "请输入姓名",
              placeholderStyle: "text-align:right;"
            })
          ]),
          _: 1
          /* STABLE */
        }),
        vue.createVNode(_component_u_cell, { title: "手机号" }, {
          "right-icon": vue.withCtx(() => [
            vue.createVNode(_component_u_input, {
              border: "none",
              placeholder: "请输入手机号",
              placeholderStyle: "text-align:right;"
            })
          ]),
          _: 1
          /* STABLE */
        }),
        vue.createElementVNode("view", {
          class: "submit",
          style: { "width": "60%", "margin": "100upx auto" }
        }, [
          vue.createVNode(_component_u_button, {
            type: "primary",
            shape: "circle",
            onClick: $options.submit
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("text", { style: { "color": "#ffffff" } }, "提交审核")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"])
        ])
      ]),
      vue.createVNode(_component_u_picker, {
        show: $data.show1,
        columns: $data.columns1,
        onCancel: _cache[5] || (_cache[5] = ($event) => $data.show1 = false),
        onConfirm: $options.confirm1,
        keyName: "name"
      }, null, 8, ["show", "columns", "onConfirm"]),
      vue.createVNode(_component_u_picker, {
        show: $data.show2,
        columns: $data.columns2,
        onCancel: _cache[6] || (_cache[6] = ($event) => $data.show2 = false),
        onConfirm: $options.confirm2
      }, null, 8, ["show", "columns", "onConfirm"]),
      vue.createVNode(_component_u_picker, {
        show: $data.show3,
        columns: $data.columns3,
        onCancel: _cache[7] || (_cache[7] = ($event) => $data.show3 = false),
        onConfirm: $options.confirm3,
        keyName: "parkNo"
      }, null, 8, ["show", "columns", "onConfirm"]),
      vue.createVNode(
        _component_u_toast,
        { ref: "uToast" },
        null,
        512
        /* NEED_PATCH */
      )
    ]);
  }
  const PagesParkAddPark = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-5c7843a8"], ["__file", "D:/study/实训/intelligent_community_app_owner/pages/park/add-park.vue"]]);
  const _sfc_main$7 = {
    data() {
      return {
        keyboard_show: false,
        number: "",
        number_array: [],
        i: -1,
        park_id: "",
        formData: {
          owner_id: "",
          number: "",
          brand: "",
          type: "",
          color: "",
          deadline: "0000 年 00 月 00 日",
          examineTime: "0000 年 00 月 00 日"
        }
      };
    },
    methods: {
      //车牌键盘相关方法
      keyboard_change(val) {
        this.i++;
        this.number_array[this.i] = val;
        if (this.i > 7) {
          this.i = 7;
        }
      },
      keyboard_confirm() {
        for (let i2 = 0; i2 < this.number_array.length; i2++) {
          this.formData.number += this.number_array[i2];
        }
        this.keyboard_show = false;
        const owner_id = uni.getStorageSync("owner").id;
        getCar(owner_id, this.formData.number).then((res) => {
          formatAppLog("log", "at pages/park/bind-car.vue:156", res);
          this.formData = res.data.data;
        });
      },
      backspace() {
        this.number_array[this.i] = "";
        this.i--;
        for (let i2 = 0; i2 < this.number_array.length; i2++) {
          this.formData.number += this.number_array[i2];
        }
        if (i < -1) {
          i = -1;
        }
      },
      //提交信息
      submit() {
        bind(this.park_id, this.formData.id).then((res) => {
          if (res.data.code == 0) {
            this.$refs.uToast.show({
              message: "绑定成功",
              type: "success",
              duration: "1000",
              position: "top"
            });
          } else {
            this.$refs.uToast.show({
              message: "绑定失败:" + res.data.msg,
              type: "error",
              duration: "1000",
              position: "top"
            });
          }
        }).catch((err) => {
          formatAppLog("log", "at pages/park/bind-car.vue:196", err);
          this.$refs.uToast.show({
            message: "服务器错误",
            type: "error",
            duration: "1000",
            position: "top"
          });
        });
      }
    },
    onShow() {
    },
    onLoad(option) {
      this.park_id = option.id;
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_keyboard = resolveEasycom(vue.resolveDynamicComponent("u-keyboard"), __easycom_0);
    const _component_u_input = resolveEasycom(vue.resolveDynamicComponent("u-input"), __easycom_1$3);
    const _component_u_form_item = resolveEasycom(vue.resolveDynamicComponent("u-form-item"), __easycom_2$3);
    const _component_u_form = resolveEasycom(vue.resolveDynamicComponent("u-form"), __easycom_3);
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_2$4);
    const _component_u_toast = resolveEasycom(vue.resolveDynamicComponent("u-toast"), __easycom_4);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "container" }, [
          vue.createElementVNode("view", {
            class: "top",
            style: { "height": "20upx", "background-color": "#f5f5f5" }
          }),
          vue.createElementVNode("view", { class: "number" }, [
            vue.createElementVNode("view", {
              class: "title",
              style: { "color": "#ffffff", "font-size": "40upx", "font-weight": "700", "text-align": "center", "padding": "20upx" }
            }, " 请输入真实有效的车牌号 "),
            vue.createElementVNode("view", {
              class: "no_input",
              style: { "display": "flex", "justify-content": "center" },
              onClick: _cache[0] || (_cache[0] = ($event) => $data.keyboard_show = true)
            }, [
              vue.createElementVNode(
                "view",
                null,
                vue.toDisplayString($data.number_array[0]),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                null,
                vue.toDisplayString($data.number_array[1]),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                null,
                vue.toDisplayString($data.number_array[2]),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                null,
                vue.toDisplayString($data.number_array[3]),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                null,
                vue.toDisplayString($data.number_array[4]),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                null,
                vue.toDisplayString($data.number_array[5]),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                null,
                vue.toDisplayString($data.number_array[6]),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                null,
                vue.toDisplayString($data.number_array[7]),
                1
                /* TEXT */
              )
            ]),
            vue.createVNode(_component_u_keyboard, {
              ref: "uKeyboard",
              mode: "car",
              show: $data.keyboard_show,
              overlay: "false",
              onCancel: _cache[1] || (_cache[1] = ($event) => $data.keyboard_show = false),
              onChange: $options.keyboard_change,
              onConfirm: $options.keyboard_confirm,
              onBackspace: $options.backspace
            }, null, 8, ["show", "onChange", "onConfirm", "onBackspace"])
          ]),
          vue.createElementVNode("view", {
            class: "car_info",
            style: { "padding": "20upx" }
          }, [
            vue.createVNode(_component_u_form, { model: $data.formData }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_u_form_item, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_u_input, {
                      inputAlign: "right",
                      placeholder: "车辆品牌",
                      border: "bottom",
                      placeholderStyle: "color:black; text-align:right;",
                      modelValue: $data.formData.brand,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.formData.brand = $event),
                      disabledColor: "#ffffff",
                      disabled: ""
                    }, {
                      prefix: vue.withCtx(() => [
                        vue.createElementVNode("text", null, "车辆品牌")
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                vue.createVNode(_component_u_form_item, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_u_input, {
                      inputAlign: "right",
                      placeholder: "车辆型号",
                      border: "bottom",
                      placeholderStyle: "color:black; text-align:right;",
                      modelValue: $data.formData.type,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.formData.type = $event),
                      disabledColor: "#ffffff",
                      disabled: ""
                    }, {
                      prefix: vue.withCtx(() => [
                        vue.createElementVNode("text", null, "车辆型号")
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                vue.createVNode(_component_u_form_item, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_u_input, {
                      inputAlign: "right",
                      placeholder: "车辆颜色",
                      border: "bottom",
                      placeholderStyle: "color:black; text-align:right;",
                      modelValue: $data.formData.color,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.formData.color = $event),
                      disabledColor: "#ffffff",
                      disabled: ""
                    }, {
                      prefix: vue.withCtx(() => [
                        vue.createElementVNode("text", null, "车辆颜色")
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                vue.createVNode(_component_u_form_item, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_u_input, {
                      placeholder: $data.formData.deadline,
                      border: "bottom",
                      placeholderStyle: "color:black; text-align:right;",
                      disabledColor: "#ffffff",
                      disabled: ""
                    }, {
                      prefix: vue.withCtx(() => [
                        vue.createElementVNode("text", null, "车辆保险截止日期")
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["placeholder"])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                vue.createVNode(_component_u_form_item, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_u_input, {
                      placeholder: $data.formData.examineTime,
                      border: "bottom",
                      placeholderStyle: "color:black; text-align:right;",
                      disabledColor: "#ffffff",
                      disabled: ""
                    }, {
                      prefix: vue.withCtx(() => [
                        vue.createElementVNode("text", null, "年审日期")
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["placeholder"])
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["model"])
          ]),
          vue.createElementVNode("view", { style: { "display": "flex", "justify-content": "center", "background-color": "#f5f5f5", "margin-top": "50upx" } }, [
            vue.createElementVNode("view", {
              class: "submit",
              style: { "width": "50%" }
            }, [
              vue.createVNode(_component_u_button, {
                type: "primary",
                shape: "circle",
                color: "#14acff",
                onClick: $options.submit
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("text", { style: { "color": "#ffffff" } }, "提交审核")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["onClick"])
            ])
          ])
        ]),
        vue.createVNode(
          _component_u_toast,
          { ref: "uToast" },
          null,
          512
          /* NEED_PATCH */
        )
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesParkBindCar = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-77ac1e30"], ["__file", "D:/study/实训/intelligent_community_app_owner/pages/park/bind-car.vue"]]);
  const props$2 = {
    props: {
      // 标题
      title: {
        type: [String, Number],
        default: props$x.stepsItem.title
      },
      // 描述文本
      desc: {
        type: [String, Number],
        default: props$x.stepsItem.desc
      },
      // 图标大小
      iconSize: {
        type: [String, Number],
        default: props$x.stepsItem.iconSize
      },
      // 当前步骤是否处于失败状态
      error: {
        type: Boolean,
        default: props$x.stepsItem.error
      }
    }
  };
  const _sfc_main$6 = {
    name: "u-steps-item",
    mixins: [mpMixin, mixin, props$2],
    data() {
      return {
        index: 0,
        childLength: 0,
        showLine: false,
        size: {
          height: 0,
          width: 0
        },
        parentData: {
          direction: "row",
          current: 0,
          activeColor: "",
          inactiveColor: "",
          activeIcon: "",
          inactiveIcon: "",
          dot: false
        }
      };
    },
    watch: {
      "parentData"(newValue, oldValue) {
      }
    },
    created() {
      this.init();
    },
    computed: {
      lineStyle() {
        var _a, _b;
        const style = {};
        if (this.parentData.direction === "row") {
          style.width = this.size.width + "px";
          style.left = this.size.width / 2 + "px";
        } else {
          style.height = this.size.height + "px";
        }
        style.backgroundColor = ((_b = (_a = this.parent.children) == null ? void 0 : _a[this.index + 1]) == null ? void 0 : _b.error) ? uni.$u.color.error : this.index < this.parentData.current ? this.parentData.activeColor : this.parentData.inactiveColor;
        return style;
      },
      statusClass() {
        const {
          index: index2,
          error: error2
        } = this;
        const {
          current
        } = this.parentData;
        if (current == index2) {
          return error2 === true ? "error" : "process";
        } else if (error2) {
          return "error";
        } else if (current > index2) {
          return "finish";
        } else {
          return "wait";
        }
      },
      statusColor() {
        let color2 = "";
        switch (this.statusClass) {
          case "finish":
            color2 = this.parentData.activeColor;
            break;
          case "error":
            color2 = uni.$u.color.error;
            break;
          case "process":
            color2 = this.parentData.dot ? this.parentData.activeColor : "transparent";
            break;
          default:
            color2 = this.parentData.inactiveColor;
            break;
        }
        return color2;
      },
      contentStyle() {
        const style = {};
        if (this.parentData.direction === "column") {
          style.marginLeft = this.parentData.dot ? "2px" : "6px";
          style.marginTop = this.parentData.dot ? "0px" : "6px";
        } else {
          style.marginTop = this.parentData.dot ? "2px" : "6px";
          style.marginLeft = this.parentData.dot ? "2px" : "6px";
        }
        return style;
      }
    },
    mounted() {
      this.parent && this.parent.updateFromChild();
      uni.$u.sleep().then(() => {
        this.getStepsItemRect();
      });
    },
    methods: {
      init() {
        this.updateParentData();
        if (!this.parent) {
          return uni.$u.error("u-steps-item必须要搭配u-steps组件使用");
        }
        this.index = this.parent.children.indexOf(this);
        this.childLength = this.parent.children.length;
      },
      updateParentData() {
        this.getParentData("u-steps");
      },
      // 父组件数据发生变化
      updateFromParent() {
        this.init();
      },
      // 获取组件的尺寸，用于设置横线的位置
      getStepsItemRect() {
        this.$uGetRect(".u-steps-item").then((size) => {
          this.size = size;
        });
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$6);
    const _component_u__text = resolveEasycom(vue.resolveDynamicComponent("u--text"), __easycom_1$6);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-steps-item", [`u-steps-item--${$data.parentData.direction}`]]),
        ref: "u-steps-item"
      },
      [
        $data.index + 1 < $data.childLength ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 0,
            class: vue.normalizeClass(["u-steps-item__line", [`u-steps-item__line--${$data.parentData.direction}`]]),
            style: vue.normalizeStyle([$options.lineStyle])
          },
          null,
          6
          /* CLASS, STYLE */
        )) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["u-steps-item__wrapper", [`u-steps-item__wrapper--${$data.parentData.direction}`, $data.parentData.dot && `u-steps-item__wrapper--${$data.parentData.direction}--dot`]])
          },
          [
            vue.renderSlot(_ctx.$slots, "icon", {}, () => [
              $data.parentData.dot ? (vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  key: 0,
                  class: "u-steps-item__wrapper__dot",
                  style: vue.normalizeStyle({
                    backgroundColor: $options.statusColor
                  })
                },
                null,
                4
                /* STYLE */
              )) : $data.parentData.activeIcon || $data.parentData.inactiveIcon ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "u-steps-item__wrapper__icon"
              }, [
                vue.createVNode(_component_u_icon, {
                  name: $data.index <= $data.parentData.current ? $data.parentData.activeIcon : $data.parentData.inactiveIcon,
                  size: _ctx.iconSize,
                  color: $data.index <= $data.parentData.current ? $data.parentData.activeColor : $data.parentData.inactiveColor
                }, null, 8, ["name", "size", "color"])
              ])) : (vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  key: 2,
                  style: vue.normalizeStyle({
                    backgroundColor: $options.statusClass === "process" ? $data.parentData.activeColor : "transparent",
                    borderColor: $options.statusColor
                  }),
                  class: "u-steps-item__wrapper__circle"
                },
                [
                  $options.statusClass === "process" || $options.statusClass === "wait" ? (vue.openBlock(), vue.createElementBlock(
                    "text",
                    {
                      key: 0,
                      class: "u-steps-item__wrapper__circle__text",
                      style: vue.normalizeStyle({
                        color: $data.index == $data.parentData.current ? "#ffffff" : $data.parentData.inactiveColor
                      })
                    },
                    vue.toDisplayString($data.index + 1),
                    5
                    /* TEXT, STYLE */
                  )) : (vue.openBlock(), vue.createBlock(_component_u_icon, {
                    key: 1,
                    color: $options.statusClass === "error" ? "error" : $data.parentData.activeColor,
                    size: "12",
                    name: $options.statusClass === "error" ? "close" : "checkmark"
                  }, null, 8, ["color", "name"]))
                ],
                4
                /* STYLE */
              ))
            ], true)
          ],
          2
          /* CLASS */
        ),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["u-steps-item__content", [`u-steps-item__content--${$data.parentData.direction}`]]),
            style: vue.normalizeStyle([$options.contentStyle])
          },
          [
            vue.createVNode(_component_u__text, {
              text: _ctx.title,
              type: $data.parentData.current == $data.index ? "main" : "content",
              lineHeight: "20px",
              size: $data.parentData.current == $data.index ? 14 : 13
            }, null, 8, ["text", "type", "size"]),
            vue.renderSlot(_ctx.$slots, "desc", {}, () => [
              vue.createVNode(_component_u__text, {
                text: _ctx.desc,
                type: "tips",
                size: "12"
              }, null, 8, ["text"])
            ], true)
          ],
          6
          /* CLASS, STYLE */
        ),
        vue.createCommentVNode(' <view\r\n		    class="u-steps-item__line"\r\n		    v-if="showLine && parentData.direction === \'column\'"\r\n			:class="[`u-steps-item__line--${parentData.direction}`]"\r\n		    :style="[lineStyle]"\r\n		></view> ')
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-3c8d19a1"], ["__file", "D:/study/实训/intelligent_community_app_owner/uni_modules/uview-plus/components/u-steps-item/u-steps-item.vue"]]);
  const props$1 = {
    props: {
      // 排列方向
      direction: {
        type: String,
        default: props$x.steps.direction
      },
      // 设置第几个步骤
      current: {
        type: [String, Number],
        default: props$x.steps.current
      },
      // 激活状态颜色
      activeColor: {
        type: String,
        default: props$x.steps.activeColor
      },
      // 未激活状态颜色
      inactiveColor: {
        type: String,
        default: props$x.steps.inactiveColor
      },
      // 激活状态的图标
      activeIcon: {
        type: String,
        default: props$x.steps.activeIcon
      },
      // 未激活状态图标
      inactiveIcon: {
        type: String,
        default: props$x.steps.inactiveIcon
      },
      // 是否显示点类型
      dot: {
        type: Boolean,
        default: props$x.steps.dot
      }
    }
  };
  const _sfc_main$5 = {
    name: "u-steps",
    mixins: [mpMixin, mixin, props$1],
    data() {
      return {};
    },
    watch: {
      children() {
        this.updateChildData();
      },
      parentData() {
        this.updateChildData();
      }
    },
    computed: {
      // 监听参数的变化，通过watch中，手动去更新子组件的数据，否则子组件不会自动变化
      parentData() {
        return [this.current, this.direction, this.activeColor, this.inactiveColor, this.activeIcon, this.inactiveIcon, this.dot];
      }
    },
    methods: {
      // 更新子组件的数据
      updateChildData() {
        this.children.map((child) => {
          uni.$u.test.func((child || {}).updateFromParent()) && child.updateFromParent();
        });
      },
      // 接受子组件的通知，去修改其他子组件的数据
      updateFromChild() {
        this.updateChildData();
      }
    },
    created() {
      this.children = [];
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-steps", [`u-steps--${_ctx.direction}`]])
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-504c0814"], ["__file", "D:/study/实训/intelligent_community_app_owner/uni_modules/uview-plus/components/u-steps/u-steps.vue"]]);
  const _sfc_main$4 = {
    data() {
      return {
        fix: {
          title: "幸福苑小区道路路灯不亮了",
          fixed: false,
          tag: ["公共报修", "路灯"],
          dec: "幸福苑小区道路路灯不亮了,并且亮度不够,请物业公司及时更换,防止发生意外事故。",
          imgs: [
            "https://pic.imgdb.cn/item/647c397bf024cca1738af4b5.png",
            "https://pic.imgdb.cn/item/647c397bf024cca1738af475.png",
            "https://pic.imgdb.cn/item/647c397bf024cca1738af4e0.png"
          ],
          date: "2021/05/31 10:01:45",
          type: "公共报修",
          item: "路灯",
          room_no: "幸福苑小区1号楼1单元2032",
          property: "李想",
          phone: "13013001300"
        }
      };
    },
    methods: {}
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_2$4);
    const _component_u_steps_item = resolveEasycom(vue.resolveDynamicComponent("u-steps-item"), __easycom_1$1);
    const _component_u_steps = resolveEasycom(vue.resolveDynamicComponent("u-steps"), __easycom_2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "top" }),
      vue.createElementVNode("view", { class: "main" }, [
        vue.createElementVNode("view", { class: "info_card" }, [
          vue.createElementVNode("view", { class: "title" }, [
            vue.createTextVNode(
              vue.toDisplayString($data.fix.title) + " ",
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", { class: "btn" }, [
              $data.fix.fixed == true ? (vue.openBlock(), vue.createBlock(_component_u_button, {
                key: 0,
                color: "#409eff",
                size: "mini",
                shape: "circle"
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("text", { style: { "color": "#ffffff" } }, "已完成")
                ]),
                _: 1
                /* STABLE */
              })) : (vue.openBlock(), vue.createBlock(_component_u_button, {
                key: 1,
                color: "red",
                size: "mini",
                shape: "circle"
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("text", { style: { "color": "#ffffff" } }, "未完成")
                ]),
                _: 1
                /* STABLE */
              }))
            ])
          ]),
          vue.createElementVNode("image", {
            src: "/static/虚线.png",
            style: { "height": "10upx", "width": "100%" },
            mode: ""
          }),
          vue.createElementVNode("view", { style: { "display": "flex", "justify-content": "space-between", "padding": "20upx", "font-size": "30upx" } }, [
            vue.createElementVNode("text", { style: { "font-size": "30upx" } }, "报修分类"),
            vue.createTextVNode(
              " " + vue.toDisplayString($data.fix.type),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { style: { "display": "flex", "justify-content": "space-between", "padding": "20upx", "font-size": "30upx" } }, [
            vue.createElementVNode("text", { style: { "font-size": "30upx" } }, "报修类型"),
            vue.createTextVNode(
              " " + vue.toDisplayString($data.fix.item),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { style: { "display": "flex", "justify-content": "space-between", "padding": "20upx", "font-size": "30upx" } }, [
            vue.createElementVNode("text", { style: { "font-size": "30upx" } }, "报修小区"),
            vue.createTextVNode(
              " " + vue.toDisplayString($data.fix.room_no),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { style: { "display": "flex", "justify-content": "space-between", "padding": "20upx", "font-size": "30upx" } }, [
            vue.createElementVNode("text", { style: { "font-size": "30upx" } }, "报修时间"),
            vue.createTextVNode(
              " " + vue.toDisplayString($data.fix.date),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { style: { "display": "flex", "justify-content": "space-between", "padding": "20upx", "font-size": "30upx" } }, [
            vue.createElementVNode("text", { style: { "font-size": "30upx" } }, "报修人"),
            vue.createTextVNode(
              " " + vue.toDisplayString($data.fix.property),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { style: { "display": "flex", "justify-content": "space-between", "padding": "20upx", "font-size": "30upx" } }, [
            vue.createElementVNode("text", { style: { "font-size": "30upx" } }, "手机号"),
            vue.createTextVNode(
              " " + vue.toDisplayString($data.fix.phone),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { style: { "padding": "20upx", "padding-bottom": "0" } }, " 报修内容 "),
          vue.createElementVNode("image", {
            src: "/static/line.png",
            style: { "height": "10upx", "width": "100%" },
            mode: ""
          }),
          vue.createElementVNode("view", { style: { "padding": "20upx", "padding-top": "0" } }, [
            vue.createTextVNode("     "),
            vue.createElementVNode(
              "text",
              null,
              vue.toDisplayString($data.fix.dec),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { class: "imgs" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.fix.imgs, (pic) => {
                return vue.openBlock(), vue.createElementBlock("image", {
                  src: pic,
                  mode: ""
                }, null, 8, ["src"]);
              }),
              256
              /* UNKEYED_FRAGMENT */
            ))
          ])
        ]),
        vue.createElementVNode("view", { class: "process" }, [
          vue.createElementVNode("view", { style: { "padding": "20upx" } }, " 报修处理 "),
          vue.createElementVNode("view", { style: { "width": "100%", "background-color": "#ffffff", "padding": "20upx", "border-radius": "10upx" } }, [
            vue.createVNode(_component_u_steps, {
              current: "0",
              direction: "column",
              inactiveIcon: "checkmark-circle",
              inactiveColor: "#3c9cff",
              "active-color": "#3c9cff",
              activeIcon: "close-circle"
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_u_steps_item, {
                  iconSize: "40",
                  title: "2021/05/31 10:01:45",
                  desc: "报修人:李想"
                }),
                vue.createVNode(_component_u_steps_item, {
                  iconSize: "40",
                  title: "2021/05/31 16:01:45",
                  desc: "处理人:李明轩"
                }),
                vue.createVNode(_component_u_steps_item, {
                  iconSize: "40",
                  title: "2021/05/31 16:01:45",
                  desc: "处理人:李明轩"
                })
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ])
    ]);
  }
  const PagesFixFixDetail = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-2ff437db"], ["__file", "D:/study/实训/intelligent_community_app_owner/pages/fix/fix-detail.vue"]]);
  const props = {
    props: {
      // 输入框的内容
      value: {
        type: [String, Number],
        default: props$x.textarea.value
      },
      // 输入框的内容
      modelValue: {
        type: [String, Number],
        default: props$x.textarea.value
      },
      // 输入框为空时占位符
      placeholder: {
        type: [String, Number],
        default: props$x.textarea.placeholder
      },
      // 指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/
      placeholderClass: {
        type: String,
        default: props$x.input.placeholderClass
      },
      // 指定placeholder的样式
      placeholderStyle: {
        type: [String, Object],
        default: props$x.input.placeholderStyle
      },
      // 输入框高度
      height: {
        type: [String, Number],
        default: props$x.textarea.height
      },
      // 设置键盘右下角按钮的文字，仅微信小程序，App-vue和H5有效
      confirmType: {
        type: String,
        default: props$x.textarea.confirmType
      },
      // 是否禁用
      disabled: {
        type: Boolean,
        default: props$x.textarea.disabled
      },
      // 是否显示统计字数
      count: {
        type: Boolean,
        default: props$x.textarea.count
      },
      // 是否自动获取焦点，nvue不支持，H5取决于浏览器的实现
      focus: {
        type: Boolean,
        default: props$x.textarea.focus
      },
      // 是否自动增加高度
      autoHeight: {
        type: Boolean,
        default: props$x.textarea.autoHeight
      },
      // 如果textarea是在一个position:fixed的区域，需要显示指定属性fixed为true
      fixed: {
        type: Boolean,
        default: props$x.textarea.fixed
      },
      // 指定光标与键盘的距离
      cursorSpacing: {
        type: Number,
        default: props$x.textarea.cursorSpacing
      },
      // 指定focus时的光标位置
      cursor: {
        type: [String, Number],
        default: props$x.textarea.cursor
      },
      // 是否显示键盘上方带有”完成“按钮那一栏，
      showConfirmBar: {
        type: Boolean,
        default: props$x.textarea.showConfirmBar
      },
      // 光标起始位置，自动聚焦时有效，需与selection-end搭配使用
      selectionStart: {
        type: Number,
        default: props$x.textarea.selectionStart
      },
      // 光标结束位置，自动聚焦时有效，需与selection-start搭配使用
      selectionEnd: {
        type: Number,
        default: props$x.textarea.selectionEnd
      },
      // 键盘弹起时，是否自动上推页面
      adjustPosition: {
        type: Boolean,
        default: props$x.textarea.adjustPosition
      },
      // 是否去掉 iOS 下的默认内边距，只微信小程序有效
      disableDefaultPadding: {
        type: Boolean,
        default: props$x.textarea.disableDefaultPadding
      },
      // focus时，点击页面的时候不收起键盘，只微信小程序有效
      holdKeyboard: {
        type: Boolean,
        default: props$x.textarea.holdKeyboard
      },
      // 最大输入长度，设置为 -1 的时候不限制最大长度
      maxlength: {
        type: [String, Number],
        default: props$x.textarea.maxlength
      },
      // 边框类型，surround-四周边框，bottom-底部边框
      border: {
        type: String,
        default: props$x.textarea.border
      },
      // 用于处理或者过滤输入框内容的方法
      formatter: {
        type: [Function, null],
        default: props$x.textarea.formatter
      },
      // 是否忽略组件内对文本合成系统事件的处理
      ignoreCompositionEvent: {
        type: Boolean,
        default: true
      }
    }
  };
  const _sfc_main$3 = {
    name: "u-textarea",
    mixins: [mpMixin, mixin, props],
    data() {
      return {
        // 输入框的值
        innerValue: "",
        // 是否处于获得焦点状态
        focused: false,
        // value是否第一次变化，在watch中，由于加入immediate属性，会在第一次触发，此时不应该认为value发生了变化
        firstChange: true,
        // value绑定值的变化是由内部还是外部引起的
        changeFromInner: false,
        // 过滤处理方法
        innerFormatter: (value2) => value2
      };
    },
    created() {
    },
    watch: {
      modelValue: {
        immediate: true,
        handler(newVal, oldVal) {
          this.innerValue = newVal;
          this.firstChange = false;
          this.changeFromInner = false;
        }
      }
    },
    computed: {
      // 组件的类名
      textareaClass() {
        let classes = [], { border, disabled } = this;
        border === "surround" && (classes = classes.concat(["u-border", "u-textarea--radius"]));
        border === "bottom" && (classes = classes.concat([
          "u-border-bottom",
          "u-textarea--no-radius"
        ]));
        disabled && classes.push("u-textarea--disabled");
        return classes.join(" ");
      },
      // 组件的样式
      textareaStyle() {
        const style = {};
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      }
    },
    emits: ["update:modelValue", "linechange", "focus", "blur", "change", "confirm", "keyboardheightchange"],
    methods: {
      // 在微信小程序中，不支持将函数当做props参数，故只能通过ref形式调用
      setFormatter(e) {
        this.innerFormatter = e;
      },
      onFocus(e) {
        this.$emit("focus", e);
      },
      onBlur(e) {
        this.$emit("blur", e);
        uni.$u.formValidate(this, "blur");
      },
      onLinechange(e) {
        this.$emit("linechange", e);
      },
      onInput(e) {
        let { value: value2 = "" } = e.detail || {};
        const formatter = this.formatter || this.innerFormatter;
        const formatValue = formatter(value2);
        this.innerValue = value2;
        this.$nextTick(() => {
          this.innerValue = formatValue;
          this.valueChange();
        });
      },
      // 内容发生变化，进行处理
      valueChange() {
        const value2 = this.innerValue;
        this.$nextTick(() => {
          this.$emit("update:modelValue", value2);
          this.changeFromInner = true;
          this.$emit("change", value2);
          uni.$u.formValidate(this, "change");
        });
      },
      onConfirm(e) {
        this.$emit("confirm", e);
      },
      onKeyboardheightchange(e) {
        this.$emit("keyboardheightchange", e);
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-textarea", $options.textareaClass]),
        style: vue.normalizeStyle([$options.textareaStyle])
      },
      [
        vue.createElementVNode("textarea", {
          class: "u-textarea__field",
          value: $data.innerValue,
          style: vue.normalizeStyle({ height: _ctx.$u.addUnit(_ctx.height) }),
          placeholder: _ctx.placeholder,
          "placeholder-style": _ctx.$u.addStyle(_ctx.placeholderStyle, "string"),
          "placeholder-class": _ctx.placeholderClass,
          disabled: _ctx.disabled,
          focus: _ctx.focus,
          autoHeight: _ctx.autoHeight,
          fixed: _ctx.fixed,
          cursorSpacing: _ctx.cursorSpacing,
          cursor: _ctx.cursor,
          showConfirmBar: _ctx.showConfirmBar,
          selectionStart: _ctx.selectionStart,
          selectionEnd: _ctx.selectionEnd,
          adjustPosition: _ctx.adjustPosition,
          disableDefaultPadding: _ctx.disableDefaultPadding,
          holdKeyboard: _ctx.holdKeyboard,
          maxlength: _ctx.maxlength,
          "confirm-type": _ctx.confirmType,
          ignoreCompositionEvent: _ctx.ignoreCompositionEvent,
          onFocus: _cache[0] || (_cache[0] = (...args) => $options.onFocus && $options.onFocus(...args)),
          onBlur: _cache[1] || (_cache[1] = (...args) => $options.onBlur && $options.onBlur(...args)),
          onLinechange: _cache[2] || (_cache[2] = (...args) => $options.onLinechange && $options.onLinechange(...args)),
          onInput: _cache[3] || (_cache[3] = (...args) => $options.onInput && $options.onInput(...args)),
          onConfirm: _cache[4] || (_cache[4] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
          onKeyboardheightchange: _cache[5] || (_cache[5] = (...args) => $options.onKeyboardheightchange && $options.onKeyboardheightchange(...args))
        }, null, 44, ["value", "placeholder", "placeholder-style", "placeholder-class", "disabled", "focus", "autoHeight", "fixed", "cursorSpacing", "cursor", "showConfirmBar", "selectionStart", "selectionEnd", "adjustPosition", "disableDefaultPadding", "holdKeyboard", "maxlength", "confirm-type", "ignoreCompositionEvent"]),
        _ctx.count ? (vue.openBlock(), vue.createElementBlock(
          "text",
          {
            key: 0,
            class: "u-textarea__count",
            style: vue.normalizeStyle({
              "background-color": _ctx.disabled ? "transparent" : "#fff"
            })
          },
          vue.toDisplayString($data.innerValue.length) + "/" + vue.toDisplayString(_ctx.maxlength),
          5
          /* TEXT, STYLE */
        )) : vue.createCommentVNode("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-b6c174a6"], ["__file", "D:/study/实训/intelligent_community_app_owner/uni_modules/uview-plus/components/u-textarea/u-textarea.vue"]]);
  const _imports_0 = "/static/img/upload.png";
  const _sfc_main$2 = {
    data() {
      return {
        type: 0,
        content: "",
        fileList1: [],
        fileList2: [],
        fileList3: []
      };
    },
    methods: {
      submit() {
        this.$refs.uToast.show({
          message: "提交成功",
          position: "top",
          type: "success"
        });
      }
    },
    onLoad(option) {
      this.type = option.type;
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_cell = resolveEasycom(vue.resolveDynamicComponent("u-cell"), __easycom_0$2);
    const _component_u_textarea = resolveEasycom(vue.resolveDynamicComponent("u-textarea"), __easycom_1);
    const _component_u_upload = resolveEasycom(vue.resolveDynamicComponent("u-upload"), __easycom_2$2);
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_2$4);
    const _component_u_toast = resolveEasycom(vue.resolveDynamicComponent("u-toast"), __easycom_4);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { style: { "padding": "20upx" } }, " 报修信息 "),
      $data.type == 1 ? (vue.openBlock(), vue.createBlock(_component_u_cell, {
        key: 0,
        "is-link": "",
        title: "报修类别",
        value: "公共报修",
        rightIconStyle: "color:#000; font-size:30upx;"
      })) : (vue.openBlock(), vue.createBlock(_component_u_cell, {
        key: 1,
        "is-link": "",
        title: "报修类别",
        value: "个人报修",
        rightIconStyle: "color:#000; font-size:30upx;"
      })),
      vue.createVNode(_component_u_cell, {
        "is-link": "",
        title: "报修类型",
        value: "路灯",
        rightIconStyle: "color:#000; font-size:30upx;"
      }),
      vue.createVNode(_component_u_cell, {
        "is-link": "",
        title: "报修小区",
        value: "幸福苑小区1号楼1单元2032",
        rightIconStyle: "color:#000; font-size:30upx;"
      }),
      vue.createElementVNode("view", { style: { "padding": "20upx" } }, " 报修内容 "),
      vue.createElementVNode("view", { style: { "background-color": "#ffffff", "padding": "20upx", "padding-bottom": "60upx" } }, [
        vue.createVNode(_component_u_textarea, {
          modelValue: $data.content,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.content = $event),
          placeholder: "请写下详细报修内容,有助于工作人员快速帮您解决问题",
          height: "300"
        }, null, 8, ["modelValue"]),
        vue.createElementVNode("view", { style: { "display": "flex", "width": "100%", "justify-content": "space-around", "margin-top": "20upx" } }, [
          vue.createVNode(_component_u_upload, {
            fileList: $data.fileList1,
            onAfterRead: _ctx.afterRead,
            onDelete: _ctx.deletePic,
            name: "1",
            multiple: "",
            maxCount: 1
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("image", {
                src: _imports_0,
                mode: "widthFix",
                style: { "width": "200upx", "height": "200upx", "border-radius": "10upx" }
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["fileList", "onAfterRead", "onDelete"]),
          vue.createVNode(_component_u_upload, {
            fileList: $data.fileList1,
            onAfterRead: _ctx.afterRead,
            onDelete: _ctx.deletePic,
            name: "1",
            multiple: "",
            maxCount: 1
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("image", {
                src: _imports_0,
                mode: "widthFix",
                style: { "width": "200upx", "height": "200upx", "border-radius": "10upx" }
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["fileList", "onAfterRead", "onDelete"]),
          vue.createVNode(_component_u_upload, {
            fileList: $data.fileList1,
            onAfterRead: _ctx.afterRead,
            onDelete: _ctx.deletePic,
            name: "1",
            multiple: "",
            maxCount: 1
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("image", {
                src: _imports_0,
                mode: "widthFix",
                style: { "width": "200upx", "height": "200upx", "border-radius": "10upx" }
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["fileList", "onAfterRead", "onDelete"])
        ])
      ]),
      vue.createElementVNode("view", { style: { "width": "60%", "margin": "40upx auto" } }, [
        vue.createVNode(_component_u_button, {
          type: "primary",
          shape: "circle",
          onClick: $options.submit
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("text", { style: { "color": "#ffffff" } }, "提交审核")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"])
      ]),
      vue.createVNode(
        _component_u_toast,
        { ref: "uToast" },
        null,
        512
        /* NEED_PATCH */
      )
    ]);
  }
  const PagesFixFixForm = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-f1ddb999"], ["__file", "D:/study/实训/intelligent_community_app_owner/pages/fix/fix-form.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {
        radio_data: true,
        sex: true
      };
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_cell = resolveEasycom(vue.resolveDynamicComponent("u-cell"), __easycom_0$2);
    const _component_u_input = resolveEasycom(vue.resolveDynamicComponent("u-input"), __easycom_1$3);
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_2$4);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "title" }, [
        vue.createElementVNode("text", null, "选择房屋")
      ]),
      vue.createVNode(_component_u_cell, {
        "is-link": "",
        border: false,
        title: "幸福苑小区1号楼1单元1204室",
        titleStyle: "color:#A1A1A1;"
      }),
      vue.createElementVNode("view", { class: "title" }, [
        vue.createElementVNode("text", null, "住户信息")
      ]),
      vue.createVNode(_component_u_input, {
        border: "bottom",
        disabled: "",
        disabledColor: "#ffffff"
      }, {
        prefix: vue.withCtx(() => [
          vue.createElementVNode("text", null, "住户类型")
        ]),
        suffix: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "my_radio" }, [
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["radio", $data.radio_data == true ? "checked" : ""]),
                onClick: _cache[0] || (_cache[0] = ($event) => $data.radio_data = true)
              },
              " 家属 ",
              2
              /* CLASS */
            ),
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["radio", $data.radio_data == false ? "checked" : ""]),
                onClick: _cache[1] || (_cache[1] = ($event) => $data.radio_data = false)
              },
              " 租户 ",
              2
              /* CLASS */
            )
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createVNode(_component_u_input, {
        placeholder: "请输入您的姓名",
        border: "bottom",
        placeholderStyle: "color:black; text-align:right;",
        "input-align": "right"
      }, {
        prefix: vue.withCtx(() => [
          vue.createElementVNode("text", null, "您的姓名")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createVNode(_component_u_input, {
        border: "bottom",
        disabled: "",
        disabledColor: "#ffffff"
      }, {
        prefix: vue.withCtx(() => [
          vue.createElementVNode("text", null, "性别")
        ]),
        suffix: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "my_radio" }, [
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["radio", $data.sex == true ? "checked" : ""]),
                onClick: _cache[2] || (_cache[2] = ($event) => $data.sex = true)
              },
              " 男 ",
              2
              /* CLASS */
            ),
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["radio", $data.sex == false ? "checked" : ""]),
                onClick: _cache[3] || (_cache[3] = ($event) => $data.sex = false)
              },
              " 女 ",
              2
              /* CLASS */
            )
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createVNode(_component_u_input, {
        placeholder: "请输入手机号",
        border: "bottom",
        placeholderStyle: "color:black; text-align:right;",
        "input-align": "right"
      }, {
        prefix: vue.withCtx(() => [
          vue.createElementVNode("text", null, "手机号")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createVNode(_component_u_input, {
        placeholder: "请输入身份证号",
        border: "bottom",
        placeholderStyle: "color:black; text-align:right;",
        "input-align": "right"
      }, {
        prefix: vue.withCtx(() => [
          vue.createElementVNode("text", null, "身份证证件号(选填)")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createElementVNode("view", { style: { "color": "#14acff", "text-align": "right", "padding": "20upx" } }, " +住户信息 "),
      vue.createElementVNode("view", {
        class: "btn",
        style: { "width": "60%", "margin": "0 auto" }
      }, [
        vue.createVNode(_component_u_button, {
          type: "primary",
          shape: "circle",
          color: "#14acff"
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("text", { style: { "color": "#ffffff" } }, "邀请住户加入")
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ]);
  }
  const PagesFamilyAddFamily = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-c5c0ca76"], ["__file", "D:/study/实训/intelligent_community_app_owner/pages/family/add-family.vue"]]);
  __definePage("pages/launch/launch-page", PagesLaunchLaunchPage);
  __definePage("pages/tarbar/index/index", PagesTarbarIndexIndex);
  __definePage("pages/tarbar/server/server", PagesTarbarServerServer);
  __definePage("pages/tarbar/open/open", PagesTarbarOpenOpen);
  __definePage("pages/tarbar/message/message", PagesTarbarMessageMessage);
  __definePage("pages/tarbar/me/me", PagesTarbarMeMe);
  __definePage("pages/login/login", PagesLoginLogin);
  __definePage("pages/login/loginByPassword", PagesLoginLoginByPassword);
  __definePage("pages/contract/contract", PagesContractContract);
  __definePage("pages/contract/privacy", PagesContractPrivacy);
  __definePage("pages/login/enter-code", PagesLoginEnterCode);
  __definePage("pages/login/re-password", PagesLoginRePassword);
  __definePage("pages/home/home", PagesHomeHome);
  __definePage("pages/invitor/invitor", PagesInvitorInvitor);
  __definePage("pages/pay/pay", PagesPayPay);
  __definePage("pages/park/park", PagesParkPark);
  __definePage("pages/fix/fix", PagesFixFix);
  __definePage("pages/advice/advice", PagesAdviceAdvice);
  __definePage("pages/notice/notice", PagesNoticeNotice);
  __definePage("pages/phones/phones", PagesPhonesPhones);
  __definePage("pages/family/family", PagesFamilyFamily);
  __definePage("pages/invitor/myInvitor", PagesInvitorMyInvitor);
  __definePage("pages/setting/setting", PagesSettingSetting);
  __definePage("pages/tarbar/index/activity", PagesTarbarIndexActivity);
  __definePage("pages/tarbar/message/msg-detail", PagesTarbarMessageMsgDetail);
  __definePage("pages/invitor/openHistory", PagesInvitorOpenHistory);
  __definePage("pages/home/owner-add-house", PagesHomeOwnerAddHouse);
  __definePage("pages/home/user-add-house", PagesHomeUserAddHouse);
  __definePage("pages/pay/bill-detail", PagesPayBillDetail);
  __definePage("pages/pay/pay-history", PagesPayPayHistory);
  __definePage("pages/pay/pay-detail", PagesPayPayDetail);
  __definePage("pages/park/my-car", PagesParkMyCar);
  __definePage("pages/park/add-car", PagesParkAddCar);
  __definePage("pages/park/add-park", PagesParkAddPark);
  __definePage("pages/park/bind-car", PagesParkBindCar);
  __definePage("pages/fix/fix-detail", PagesFixFixDetail);
  __definePage("pages/fix/fix-form", PagesFixFixForm);
  __definePage("pages/family/add-family", PagesFamilyAddFamily);
  const _sfc_main = {
    onLaunch: function() {
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:10", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:13", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/study/实训/intelligent_community_app_owner/App.vue"]]);
  const { toString } = Object.prototype;
  function isArray(val) {
    return toString.call(val) === "[object Array]";
  }
  function isObject(val) {
    return val !== null && typeof val === "object";
  }
  function isDate(val) {
    return toString.call(val) === "[object Date]";
  }
  function isURLSearchParams(val) {
    return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
  }
  function forEach(obj, fn) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray(obj)) {
      for (let i2 = 0, l = obj.length; i2 < l; i2++) {
        fn.call(null, obj[i2], i2, obj);
      }
    } else {
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }
  function isPlainObject(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
  }
  function deepMerge$1() {
    const result = {};
    function assignValue(val, key) {
      if (typeof result[key] === "object" && typeof val === "object") {
        result[key] = deepMerge$1(result[key], val);
      } else if (typeof val === "object") {
        result[key] = deepMerge$1({}, val);
      } else {
        result[key] = val;
      }
    }
    for (let i2 = 0, l = arguments.length; i2 < l; i2++) {
      forEach(arguments[i2], assignValue);
    }
    return result;
  }
  function isUndefined(val) {
    return typeof val === "undefined";
  }
  function encode(val) {
    return encodeURIComponent(val).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function buildURL(url2, params) {
    if (!params) {
      return url2;
    }
    let serializedParams;
    if (isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      const parts = [];
      forEach(params, (val, key) => {
        if (val === null || typeof val === "undefined") {
          return;
        }
        if (isArray(val)) {
          key = `${key}[]`;
        } else {
          val = [val];
        }
        forEach(val, (v) => {
          if (isDate(v)) {
            v = v.toISOString();
          } else if (isObject(v)) {
            v = JSON.stringify(v);
          }
          parts.push(`${encode(key)}=${encode(v)}`);
        });
      });
      serializedParams = parts.join("&");
    }
    if (serializedParams) {
      const hashmarkIndex = url2.indexOf("#");
      if (hashmarkIndex !== -1) {
        url2 = url2.slice(0, hashmarkIndex);
      }
      url2 += (url2.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url2;
  }
  function isAbsoluteURL(url2) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url2);
  }
  function combineURLs(baseURL, relativeURL) {
    return relativeURL ? `${baseURL.replace(/\/+$/, "")}/${relativeURL.replace(/^\/+/, "")}` : baseURL;
  }
  function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  }
  function settle(resolve, reject, response) {
    const { validateStatus } = response.config;
    const status = response.statusCode;
    if (status && (!validateStatus || validateStatus(status))) {
      resolve(response);
    } else {
      reject(response);
    }
  }
  const mergeKeys$1 = (keys, config2) => {
    const config3 = {};
    keys.forEach((prop) => {
      if (!isUndefined(config2[prop])) {
        config3[prop] = config2[prop];
      }
    });
    return config3;
  };
  const adapter = (config2) => new Promise((resolve, reject) => {
    const fullPath = buildURL(buildFullPath(config2.baseURL, config2.url), config2.params);
    const _config = {
      url: fullPath,
      header: config2.header,
      complete: (response) => {
        config2.fullPath = fullPath;
        response.config = config2;
        try {
          if (typeof response.data === "string") {
            response.data = JSON.parse(response.data);
          }
        } catch (e) {
        }
        settle(resolve, reject, response);
      }
    };
    let requestTask;
    if (config2.method === "UPLOAD") {
      delete _config.header["content-type"];
      delete _config.header["Content-Type"];
      const otherConfig = {
        filePath: config2.filePath,
        name: config2.name
      };
      const optionalKeys = [
        "files",
        "timeout",
        "formData"
      ];
      requestTask = uni.uploadFile({ ..._config, ...otherConfig, ...mergeKeys$1(optionalKeys, config2) });
    } else if (config2.method === "DOWNLOAD") {
      if (!isUndefined(config2.timeout)) {
        _config.timeout = config2.timeout;
      }
      requestTask = uni.downloadFile(_config);
    } else {
      const optionalKeys = [
        "data",
        "method",
        "timeout",
        "dataType",
        "responseType",
        "sslVerify",
        "firstIpv4"
      ];
      requestTask = uni.request({ ..._config, ...mergeKeys$1(optionalKeys, config2) });
    }
    if (config2.getTask) {
      config2.getTask(requestTask, config2);
    }
  });
  const dispatchRequest = (config2) => adapter(config2);
  function InterceptorManager() {
    this.handlers = [];
  }
  InterceptorManager.prototype.use = function use(fulfilled, rejected) {
    this.handlers.push({
      fulfilled,
      rejected
    });
    return this.handlers.length - 1;
  };
  InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  };
  InterceptorManager.prototype.forEach = function forEach2(fn) {
    this.handlers.forEach((h) => {
      if (h !== null) {
        fn(h);
      }
    });
  };
  const mergeKeys = (keys, globalsConfig, config2) => {
    const config3 = {};
    keys.forEach((prop) => {
      if (!isUndefined(config2[prop])) {
        config3[prop] = config2[prop];
      } else if (!isUndefined(globalsConfig[prop])) {
        config3[prop] = globalsConfig[prop];
      }
    });
    return config3;
  };
  const mergeConfig = (globalsConfig, config2 = {}) => {
    const method2 = config2.method || globalsConfig.method || "GET";
    let config3 = {
      baseURL: globalsConfig.baseURL || "",
      method: method2,
      url: config2.url || "",
      params: config2.params || {},
      custom: { ...globalsConfig.custom || {}, ...config2.custom || {} },
      header: deepMerge$1(globalsConfig.header || {}, config2.header || {})
    };
    const defaultToConfig2Keys = ["getTask", "validateStatus"];
    config3 = { ...config3, ...mergeKeys(defaultToConfig2Keys, globalsConfig, config2) };
    if (method2 === "DOWNLOAD") {
      if (!isUndefined(config2.timeout)) {
        config3.timeout = config2.timeout;
      } else if (!isUndefined(globalsConfig.timeout)) {
        config3.timeout = globalsConfig.timeout;
      }
    } else if (method2 === "UPLOAD") {
      delete config3.header["content-type"];
      delete config3.header["Content-Type"];
      const uploadKeys = [
        "files",
        "filePath",
        "name",
        "timeout",
        "formData"
      ];
      uploadKeys.forEach((prop) => {
        if (!isUndefined(config2[prop])) {
          config3[prop] = config2[prop];
        }
      });
      if (isUndefined(config3.timeout) && !isUndefined(globalsConfig.timeout)) {
        config3.timeout = globalsConfig.timeout;
      }
    } else {
      const defaultsKeys = [
        "data",
        "timeout",
        "dataType",
        "responseType",
        "sslVerify",
        "firstIpv4"
      ];
      config3 = { ...config3, ...mergeKeys(defaultsKeys, globalsConfig, config2) };
    }
    return config3;
  };
  const defaults = {
    baseURL: "",
    header: {},
    method: "GET",
    dataType: "json",
    responseType: "text",
    custom: {},
    timeout: 6e4,
    sslVerify: true,
    firstIpv4: false,
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    }
  };
  var clone = function() {
    function _instanceof(obj, type2) {
      return type2 != null && obj instanceof type2;
    }
    var nativeMap;
    try {
      nativeMap = Map;
    } catch (_) {
      nativeMap = function() {
      };
    }
    var nativeSet;
    try {
      nativeSet = Set;
    } catch (_) {
      nativeSet = function() {
      };
    }
    var nativePromise;
    try {
      nativePromise = Promise;
    } catch (_) {
      nativePromise = function() {
      };
    }
    function clone2(parent, circular, depth, prototype2, includeNonEnumerable) {
      if (typeof circular === "object") {
        depth = circular.depth;
        prototype2 = circular.prototype;
        includeNonEnumerable = circular.includeNonEnumerable;
        circular = circular.circular;
      }
      var allParents = [];
      var allChildren = [];
      var useBuffer = typeof Buffer != "undefined";
      if (typeof circular == "undefined")
        circular = true;
      if (typeof depth == "undefined")
        depth = Infinity;
      function _clone(parent2, depth2) {
        if (parent2 === null)
          return null;
        if (depth2 === 0)
          return parent2;
        var child;
        var proto;
        if (typeof parent2 != "object") {
          return parent2;
        }
        if (_instanceof(parent2, nativeMap)) {
          child = new nativeMap();
        } else if (_instanceof(parent2, nativeSet)) {
          child = new nativeSet();
        } else if (_instanceof(parent2, nativePromise)) {
          child = new nativePromise(function(resolve, reject) {
            parent2.then(function(value2) {
              resolve(_clone(value2, depth2 - 1));
            }, function(err) {
              reject(_clone(err, depth2 - 1));
            });
          });
        } else if (clone2.__isArray(parent2)) {
          child = [];
        } else if (clone2.__isRegExp(parent2)) {
          child = new RegExp(parent2.source, __getRegExpFlags(parent2));
          if (parent2.lastIndex)
            child.lastIndex = parent2.lastIndex;
        } else if (clone2.__isDate(parent2)) {
          child = new Date(parent2.getTime());
        } else if (useBuffer && Buffer.isBuffer(parent2)) {
          if (Buffer.from) {
            child = Buffer.from(parent2);
          } else {
            child = new Buffer(parent2.length);
            parent2.copy(child);
          }
          return child;
        } else if (_instanceof(parent2, Error)) {
          child = Object.create(parent2);
        } else {
          if (typeof prototype2 == "undefined") {
            proto = Object.getPrototypeOf(parent2);
            child = Object.create(proto);
          } else {
            child = Object.create(prototype2);
            proto = prototype2;
          }
        }
        if (circular) {
          var index2 = allParents.indexOf(parent2);
          if (index2 != -1) {
            return allChildren[index2];
          }
          allParents.push(parent2);
          allChildren.push(child);
        }
        if (_instanceof(parent2, nativeMap)) {
          parent2.forEach(function(value2, key) {
            var keyChild = _clone(key, depth2 - 1);
            var valueChild = _clone(value2, depth2 - 1);
            child.set(keyChild, valueChild);
          });
        }
        if (_instanceof(parent2, nativeSet)) {
          parent2.forEach(function(value2) {
            var entryChild = _clone(value2, depth2 - 1);
            child.add(entryChild);
          });
        }
        for (var i2 in parent2) {
          var attrs = Object.getOwnPropertyDescriptor(parent2, i2);
          if (attrs) {
            child[i2] = _clone(parent2[i2], depth2 - 1);
          }
          try {
            var objProperty = Object.getOwnPropertyDescriptor(parent2, i2);
            if (objProperty.set === "undefined") {
              continue;
            }
            child[i2] = _clone(parent2[i2], depth2 - 1);
          } catch (e) {
            if (e instanceof TypeError) {
              continue;
            } else if (e instanceof ReferenceError) {
              continue;
            }
          }
        }
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(parent2);
          for (var i2 = 0; i2 < symbols.length; i2++) {
            var symbol = symbols[i2];
            var descriptor = Object.getOwnPropertyDescriptor(parent2, symbol);
            if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
              continue;
            }
            child[symbol] = _clone(parent2[symbol], depth2 - 1);
            Object.defineProperty(child, symbol, descriptor);
          }
        }
        if (includeNonEnumerable) {
          var allPropertyNames = Object.getOwnPropertyNames(parent2);
          for (var i2 = 0; i2 < allPropertyNames.length; i2++) {
            var propertyName = allPropertyNames[i2];
            var descriptor = Object.getOwnPropertyDescriptor(parent2, propertyName);
            if (descriptor && descriptor.enumerable) {
              continue;
            }
            child[propertyName] = _clone(parent2[propertyName], depth2 - 1);
            Object.defineProperty(child, propertyName, descriptor);
          }
        }
        return child;
      }
      return _clone(parent, depth);
    }
    clone2.clonePrototype = function clonePrototype(parent) {
      if (parent === null)
        return null;
      var c = function() {
      };
      c.prototype = parent;
      return new c();
    };
    function __objToStr(o) {
      return Object.prototype.toString.call(o);
    }
    clone2.__objToStr = __objToStr;
    function __isDate(o) {
      return typeof o === "object" && __objToStr(o) === "[object Date]";
    }
    clone2.__isDate = __isDate;
    function __isArray(o) {
      return typeof o === "object" && __objToStr(o) === "[object Array]";
    }
    clone2.__isArray = __isArray;
    function __isRegExp(o) {
      return typeof o === "object" && __objToStr(o) === "[object RegExp]";
    }
    clone2.__isRegExp = __isRegExp;
    function __getRegExpFlags(re) {
      var flags = "";
      if (re.global)
        flags += "g";
      if (re.ignoreCase)
        flags += "i";
      if (re.multiline)
        flags += "m";
      return flags;
    }
    clone2.__getRegExpFlags = __getRegExpFlags;
    return clone2;
  }();
  class Request {
    /**
    * @param {Object} arg - 全局配置
    * @param {String} arg.baseURL - 全局根路径
    * @param {Object} arg.header - 全局header
    * @param {String} arg.method = [GET|POST|PUT|DELETE|CONNECT|HEAD|OPTIONS|TRACE] - 全局默认请求方式
    * @param {String} arg.dataType = [json] - 全局默认的dataType
    * @param {String} arg.responseType = [text|arraybuffer] - 全局默认的responseType。支付宝小程序不支持
    * @param {Object} arg.custom - 全局默认的自定义参数
    * @param {Number} arg.timeout - 全局默认的超时时间，单位 ms。默认60000。H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)、微信小程序（2.10.0）、支付宝小程序
    * @param {Boolean} arg.sslVerify - 全局默认的是否验证 ssl 证书。默认true.仅App安卓端支持（HBuilderX 2.3.3+）
    * @param {Boolean} arg.withCredentials - 全局默认的跨域请求时是否携带凭证（cookies）。默认false。仅H5支持（HBuilderX 2.6.15+）
    * @param {Boolean} arg.firstIpv4 - 全DNS解析时优先使用ipv4。默认false。仅 App-Android 支持 (HBuilderX 2.8.0+)
    * @param {Function(statusCode):Boolean} arg.validateStatus - 全局默认的自定义验证器。默认statusCode >= 200 && statusCode < 300
    */
    constructor(arg = {}) {
      if (!isPlainObject(arg)) {
        arg = {};
        formatAppLog("warn", "at uni_modules/uview-plus/libs/luch-request/core/Request.js:39", "设置全局参数必须接收一个Object");
      }
      this.config = clone({ ...defaults, ...arg });
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }
    /**
    * @Function
    * @param {Request~setConfigCallback} f - 设置全局默认配置
    */
    setConfig(f) {
      this.config = f(this.config);
    }
    middleware(config2) {
      config2 = mergeConfig(this.config, config2);
      const chain = [dispatchRequest, void 0];
      let promise2 = Promise.resolve(config2);
      this.interceptors.request.forEach((interceptor) => {
        chain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      this.interceptors.response.forEach((interceptor) => {
        chain.push(interceptor.fulfilled, interceptor.rejected);
      });
      while (chain.length) {
        promise2 = promise2.then(chain.shift(), chain.shift());
      }
      return promise2;
    }
    /**
    * @Function
    * @param {Object} config - 请求配置项
    * @prop {String} options.url - 请求路径
    * @prop {Object} options.data - 请求参数
    * @prop {Object} [options.responseType = config.responseType] [text|arraybuffer] - 响应的数据类型
    * @prop {Object} [options.dataType = config.dataType] - 如果设为 json，会尝试对返回的数据做一次 JSON.parse
    * @prop {Object} [options.header = config.header] - 请求header
    * @prop {Object} [options.method = config.method] - 请求方法
    * @returns {Promise<unknown>}
    */
    request(config2 = {}) {
      return this.middleware(config2);
    }
    get(url2, options = {}) {
      return this.middleware({
        url: url2,
        method: "GET",
        ...options
      });
    }
    post(url2, data, options = {}) {
      return this.middleware({
        url: url2,
        data,
        method: "POST",
        ...options
      });
    }
    put(url2, data, options = {}) {
      return this.middleware({
        url: url2,
        data,
        method: "PUT",
        ...options
      });
    }
    delete(url2, data, options = {}) {
      return this.middleware({
        url: url2,
        data,
        method: "DELETE",
        ...options
      });
    }
    options(url2, data, options = {}) {
      return this.middleware({
        url: url2,
        data,
        method: "OPTIONS",
        ...options
      });
    }
    upload(url2, config2 = {}) {
      config2.url = url2;
      config2.method = "UPLOAD";
      return this.middleware(config2);
    }
    download(url2, config2 = {}) {
      config2.url = url2;
      config2.method = "DOWNLOAD";
      return this.middleware(config2);
    }
  }
  class Router {
    constructor() {
      this.config = {
        type: "navigateTo",
        url: "",
        delta: 1,
        // navigateBack页面后退时,回退的层数
        params: {},
        // 传递的参数
        animationType: "pop-in",
        // 窗口动画,只在APP有效
        animationDuration: 300,
        // 窗口动画持续时间,单位毫秒,只在APP有效
        intercept: false
        // 是否需要拦截
      };
      this.route = this.route.bind(this);
    }
    // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
    addRootPath(url2) {
      return url2[0] === "/" ? url2 : `/${url2}`;
    }
    // 整合路由参数
    mixinParam(url2, params) {
      url2 = url2 && this.addRootPath(url2);
      let query = "";
      if (/.*\/.*\?.*=.*/.test(url2)) {
        query = uni.$u.queryParams(params, false);
        return url2 += `&${query}`;
      }
      query = uni.$u.queryParams(params);
      return url2 += query;
    }
    // 对外的方法名称
    async route(options = {}, params = {}) {
      let mergeConfig2 = {};
      if (typeof options === "string") {
        mergeConfig2.url = this.mixinParam(options, params);
        mergeConfig2.type = "navigateTo";
      } else {
        mergeConfig2 = uni.$u.deepMerge(this.config, options);
        mergeConfig2.url = this.mixinParam(options.url, options.params);
      }
      if (mergeConfig2.url === uni.$u.page())
        return;
      if (params.intercept) {
        this.config.intercept = params.intercept;
      }
      mergeConfig2.params = params;
      mergeConfig2 = uni.$u.deepMerge(this.config, mergeConfig2);
      if (typeof uni.$u.routeIntercept === "function") {
        const isNext = await new Promise((resolve, reject) => {
          uni.$u.routeIntercept(mergeConfig2, resolve);
        });
        isNext && this.openPage(mergeConfig2);
      } else {
        this.openPage(mergeConfig2);
      }
    }
    // 执行路由跳转
    openPage(config2) {
      const {
        url: url2,
        type: type2,
        delta,
        animationType,
        animationDuration
      } = config2;
      if (config2.type == "navigateTo" || config2.type == "to") {
        uni.navigateTo({
          url: url2,
          animationType,
          animationDuration
        });
      }
      if (config2.type == "redirectTo" || config2.type == "redirect") {
        uni.redirectTo({
          url: url2
        });
      }
      if (config2.type == "switchTab" || config2.type == "tab") {
        uni.switchTab({
          url: url2
        });
      }
      if (config2.type == "reLaunch" || config2.type == "launch") {
        uni.reLaunch({
          url: url2
        });
      }
      if (config2.type == "navigateBack" || config2.type == "back") {
        uni.navigateBack({
          delta
        });
      }
    }
  }
  const route = new Router().route;
  function colorGradient(startColor = "rgb(0, 0, 0)", endColor = "rgb(255, 255, 255)", step = 10) {
    const startRGB = hexToRgb(startColor, false);
    const startR = startRGB[0];
    const startG = startRGB[1];
    const startB = startRGB[2];
    const endRGB = hexToRgb(endColor, false);
    const endR = endRGB[0];
    const endG = endRGB[1];
    const endB = endRGB[2];
    const sR = (endR - startR) / step;
    const sG = (endG - startG) / step;
    const sB = (endB - startB) / step;
    const colorArr = [];
    for (let i2 = 0; i2 < step; i2++) {
      let hex = rgbToHex(`rgb(${Math.round(sR * i2 + startR)},${Math.round(sG * i2 + startG)},${Math.round(sB * i2 + startB)})`);
      if (i2 === 0)
        hex = rgbToHex(startColor);
      if (i2 === step - 1)
        hex = rgbToHex(endColor);
      colorArr.push(hex);
    }
    return colorArr;
  }
  function hexToRgb(sColor, str = true) {
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    sColor = String(sColor).toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = "#";
        for (let i2 = 1; i2 < 4; i2 += 1) {
          sColorNew += sColor.slice(i2, i2 + 1).concat(sColor.slice(i2, i2 + 1));
        }
        sColor = sColorNew;
      }
      const sColorChange = [];
      for (let i2 = 1; i2 < 7; i2 += 2) {
        sColorChange.push(parseInt(`0x${sColor.slice(i2, i2 + 2)}`));
      }
      if (!str) {
        return sColorChange;
      }
      return `rgb(${sColorChange[0]},${sColorChange[1]},${sColorChange[2]})`;
    }
    if (/^(rgb|RGB)/.test(sColor)) {
      const arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
      return arr.map((val) => Number(val));
    }
    return sColor;
  }
  function rgbToHex(rgb) {
    const _this = rgb;
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    if (/^(rgb|RGB)/.test(_this)) {
      const aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
      let strHex = "#";
      for (let i2 = 0; i2 < aColor.length; i2++) {
        let hex = Number(aColor[i2]).toString(16);
        hex = String(hex).length == 1 ? `${0}${hex}` : hex;
        if (hex === "0") {
          hex += hex;
        }
        strHex += hex;
      }
      if (strHex.length !== 7) {
        strHex = _this;
      }
      return strHex;
    }
    if (reg.test(_this)) {
      const aNum = _this.replace(/#/, "").split("");
      if (aNum.length === 6) {
        return _this;
      }
      if (aNum.length === 3) {
        let numHex = "#";
        for (let i2 = 0; i2 < aNum.length; i2 += 1) {
          numHex += aNum[i2] + aNum[i2];
        }
        return numHex;
      }
    } else {
      return _this;
    }
  }
  function colorToRgba(color2, alpha) {
    color2 = rgbToHex(color2);
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    let sColor = String(color2).toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = "#";
        for (let i2 = 1; i2 < 4; i2 += 1) {
          sColorNew += sColor.slice(i2, i2 + 1).concat(sColor.slice(i2, i2 + 1));
        }
        sColor = sColorNew;
      }
      const sColorChange = [];
      for (let i2 = 1; i2 < 7; i2 += 2) {
        sColorChange.push(parseInt(`0x${sColor.slice(i2, i2 + 2)}`));
      }
      return `rgba(${sColorChange.join(",")},${alpha})`;
    }
    return sColor;
  }
  const colorGradient$1 = {
    colorGradient,
    hexToRgb,
    rgbToHex,
    colorToRgba
  };
  function email(value2) {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value2);
  }
  function mobile(value2) {
    return /^1[23456789]\d{9}$/.test(value2);
  }
  function url(value2) {
    return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(value2);
  }
  function date(value2) {
    if (!value2)
      return false;
    if (number(value2))
      value2 = +value2;
    return !/Invalid|NaN/.test(new Date(value2).toString());
  }
  function dateISO(value2) {
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value2);
  }
  function number(value2) {
    return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value2);
  }
  function string(value2) {
    return typeof value2 === "string";
  }
  function digits(value2) {
    return /^\d+$/.test(value2);
  }
  function idCard(value2) {
    return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
      value2
    );
  }
  function carNo(value2) {
    const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
    const creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
    if (value2.length === 7) {
      return creg.test(value2);
    }
    if (value2.length === 8) {
      return xreg.test(value2);
    }
    return false;
  }
  function amount(value2) {
    return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value2);
  }
  function chinese(value2) {
    const reg = /^[\u4e00-\u9fa5]+$/gi;
    return reg.test(value2);
  }
  function letter(value2) {
    return /^[a-zA-Z]*$/.test(value2);
  }
  function enOrNum(value2) {
    const reg = /^[0-9a-zA-Z]*$/g;
    return reg.test(value2);
  }
  function contains(value2, param) {
    return value2.indexOf(param) >= 0;
  }
  function range$1(value2, param) {
    return value2 >= param[0] && value2 <= param[1];
  }
  function rangeLength(value2, param) {
    return value2.length >= param[0] && value2.length <= param[1];
  }
  function landline(value2) {
    const reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
    return reg.test(value2);
  }
  function empty(value2) {
    switch (typeof value2) {
      case "undefined":
        return true;
      case "string":
        if (value2.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length == 0)
          return true;
        break;
      case "boolean":
        if (!value2)
          return true;
        break;
      case "number":
        if (value2 === 0 || isNaN(value2))
          return true;
        break;
      case "object":
        if (value2 === null || value2.length === 0)
          return true;
        for (const i2 in value2) {
          return false;
        }
        return true;
    }
    return false;
  }
  function jsonString(value2) {
    if (typeof value2 === "string") {
      try {
        const obj = JSON.parse(value2);
        if (typeof obj === "object" && obj) {
          return true;
        }
        return false;
      } catch (e) {
        return false;
      }
    }
    return false;
  }
  function array(value2) {
    if (typeof Array.isArray === "function") {
      return Array.isArray(value2);
    }
    return Object.prototype.toString.call(value2) === "[object Array]";
  }
  function object(value2) {
    return Object.prototype.toString.call(value2) === "[object Object]";
  }
  function code(value2, len = 6) {
    return new RegExp(`^\\d{${len}}$`).test(value2);
  }
  function func(value2) {
    return typeof value2 === "function";
  }
  function promise(value2) {
    return object(value2) && func(value2.then) && func(value2.catch);
  }
  function image(value2) {
    const newValue = value2.split("?")[0];
    const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
    return IMAGE_REGEXP.test(newValue);
  }
  function video(value2) {
    const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i;
    return VIDEO_REGEXP.test(value2);
  }
  function regExp(o) {
    return o && Object.prototype.toString.call(o) === "[object RegExp]";
  }
  const test = {
    email,
    mobile,
    url,
    date,
    dateISO,
    number,
    digits,
    idCard,
    carNo,
    amount,
    chinese,
    letter,
    enOrNum,
    contains,
    range: range$1,
    rangeLength,
    empty,
    isEmpty: empty,
    jsonString,
    landline,
    object,
    array,
    code,
    func,
    promise,
    video,
    image,
    regExp,
    string
  };
  let timeout = null;
  function debounce(func2, wait = 500, immediate = false) {
    if (timeout !== null)
      clearTimeout(timeout);
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow)
        typeof func2 === "function" && func2();
    } else {
      timeout = setTimeout(() => {
        typeof func2 === "function" && func2();
      }, wait);
    }
  }
  let flag;
  function throttle(func2, wait = 500, immediate = true) {
    if (immediate) {
      if (!flag) {
        flag = true;
        typeof func2 === "function" && func2();
        setTimeout(() => {
          flag = false;
        }, wait);
      }
    } else if (!flag) {
      flag = true;
      setTimeout(() => {
        flag = false;
        typeof func2 === "function" && func2();
      }, wait);
    }
  }
  function strip(num, precision = 15) {
    return +parseFloat(Number(num).toPrecision(precision));
  }
  function digitLength(num) {
    const eSplit = num.toString().split(/[eE]/);
    const len = (eSplit[0].split(".")[1] || "").length - +(eSplit[1] || 0);
    return len > 0 ? len : 0;
  }
  function float2Fixed(num) {
    if (num.toString().indexOf("e") === -1) {
      return Number(num.toString().replace(".", ""));
    }
    const dLen = digitLength(num);
    return dLen > 0 ? strip(Number(num) * Math.pow(10, dLen)) : Number(num);
  }
  function checkBoundary(num) {
    {
      if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
        formatAppLog("warn", "at uni_modules/uview-plus/libs/function/digit.js:45", `${num} 超出了精度限制，结果可能不正确`);
      }
    }
  }
  function iteratorOperation(arr, operation) {
    const [num1, num2, ...others] = arr;
    let res = operation(num1, num2);
    others.forEach((num) => {
      res = operation(res, num);
    });
    return res;
  }
  function times(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, times);
    }
    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    const baseNum = digitLength(num1) + digitLength(num2);
    const leftValue = num1Changed * num2Changed;
    checkBoundary(leftValue);
    return leftValue / Math.pow(10, baseNum);
  }
  function divide(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, divide);
    }
    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    checkBoundary(num1Changed);
    checkBoundary(num2Changed);
    return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
  }
  function round(num, ratio) {
    const base = Math.pow(10, ratio);
    let result = divide(Math.round(Math.abs(times(num, base))), base);
    if (num < 0 && result !== 0) {
      result = times(result, -1);
    }
    return result;
  }
  function range(min = 0, max = 0, value2 = 0) {
    return Math.max(min, Math.min(max, Number(value2)));
  }
  function getPx(value2, unit = false) {
    if (test.number(value2)) {
      return unit ? `${value2}px` : Number(value2);
    }
    if (/(rpx|upx)$/.test(value2)) {
      return unit ? `${uni.upx2px(parseInt(value2))}px` : Number(uni.upx2px(parseInt(value2)));
    }
    return unit ? `${parseInt(value2)}px` : parseInt(value2);
  }
  function sleep(value2 = 30) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, value2);
    });
  }
  function os() {
    return uni.getSystemInfoSync().platform.toLowerCase();
  }
  function sys() {
    return uni.getSystemInfoSync();
  }
  function random(min, max) {
    if (min >= 0 && max > 0 && max >= min) {
      const gab = max - min + 1;
      return Math.floor(Math.random() * gab + min);
    }
    return 0;
  }
  function guid(len = 32, firstU = true, radix = null) {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    const uuid = [];
    radix = radix || chars.length;
    if (len) {
      for (let i2 = 0; i2 < len; i2++)
        uuid[i2] = chars[0 | Math.random() * radix];
    } else {
      let r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
      uuid[14] = "4";
      for (let i2 = 0; i2 < 36; i2++) {
        if (!uuid[i2]) {
          r = 0 | Math.random() * 16;
          uuid[i2] = chars[i2 == 19 ? r & 3 | 8 : r];
        }
      }
    }
    if (firstU) {
      uuid.shift();
      return `u${uuid.join("")}`;
    }
    return uuid.join("");
  }
  function $parent(name = void 0) {
    let parent = this.$parent;
    while (parent) {
      if (parent.$options && parent.$options.name !== name) {
        parent = parent.$parent;
      } else {
        return parent;
      }
    }
    return false;
  }
  function addStyle(customStyle, target = "object") {
    if (test.empty(customStyle) || typeof customStyle === "object" && target === "object" || target === "string" && typeof customStyle === "string") {
      return customStyle;
    }
    if (target === "object") {
      customStyle = trim(customStyle);
      const styleArray = customStyle.split(";");
      const style = {};
      for (let i2 = 0; i2 < styleArray.length; i2++) {
        if (styleArray[i2]) {
          const item = styleArray[i2].split(":");
          style[trim(item[0])] = trim(item[1]);
        }
      }
      return style;
    }
    let string2 = "";
    for (const i2 in customStyle) {
      const key = i2.replace(/([A-Z])/g, "-$1").toLowerCase();
      string2 += `${key}:${customStyle[i2]};`;
    }
    return trim(string2);
  }
  function addUnit(value2 = "auto", unit = "") {
    if (!unit) {
      unit = uni.$u.config.unit || "px";
    }
    value2 = String(value2);
    return test.number(value2) ? `${value2}${unit}` : value2;
  }
  function deepClone(obj) {
    if ([null, void 0, NaN, false].includes(obj))
      return obj;
    if (typeof obj !== "object" && typeof obj !== "function") {
      return obj;
    }
    const o = test.array(obj) ? [] : {};
    for (const i2 in obj) {
      if (obj.hasOwnProperty(i2)) {
        o[i2] = typeof obj[i2] === "object" ? deepClone(obj[i2]) : obj[i2];
      }
    }
    return o;
  }
  function deepMerge(target = {}, source = {}) {
    target = deepClone(target);
    if (typeof target !== "object" || typeof source !== "object")
      return false;
    for (const prop in source) {
      if (!source.hasOwnProperty(prop))
        continue;
      if (prop in target) {
        if (typeof target[prop] !== "object") {
          target[prop] = source[prop];
        } else if (typeof source[prop] !== "object") {
          target[prop] = source[prop];
        } else if (target[prop].concat && source[prop].concat) {
          target[prop] = target[prop].concat(source[prop]);
        } else {
          target[prop] = deepMerge(target[prop], source[prop]);
        }
      } else {
        target[prop] = source[prop];
      }
    }
    return target;
  }
  function error(err) {
    {
      formatAppLog("error", "at uni_modules/uview-plus/libs/function/index.js:238", `uView提示：${err}`);
    }
  }
  function randomArray(array2 = []) {
    return array2.sort(() => Math.random() - 0.5);
  }
  if (!String.prototype.padStart) {
    String.prototype.padStart = function(maxLength, fillString = " ") {
      if (Object.prototype.toString.call(fillString) !== "[object String]") {
        throw new TypeError(
          "fillString must be String"
        );
      }
      const str = this;
      if (str.length >= maxLength)
        return String(str);
      const fillLength = maxLength - str.length;
      let times2 = Math.ceil(fillLength / fillString.length);
      while (times2 >>= 1) {
        fillString += fillString;
        if (times2 === 1) {
          fillString += fillString;
        }
      }
      return fillString.slice(0, fillLength) + str;
    };
  }
  function timeFormat(dateTime = null, formatStr = "yyyy-mm-dd") {
    let date2;
    if (!dateTime) {
      date2 = /* @__PURE__ */ new Date();
    } else if (/^\d{10}$/.test(dateTime.toString().trim())) {
      date2 = new Date(dateTime * 1e3);
    } else if (typeof dateTime === "string" && /^\d+$/.test(dateTime.trim())) {
      date2 = new Date(Number(dateTime));
    } else {
      date2 = new Date(
        typeof dateTime === "string" ? dateTime.replace(/-/g, "/") : dateTime
      );
    }
    const timeSource = {
      "y": date2.getFullYear().toString(),
      // 年
      "m": (date2.getMonth() + 1).toString().padStart(2, "0"),
      // 月
      "d": date2.getDate().toString().padStart(2, "0"),
      // 日
      "h": date2.getHours().toString().padStart(2, "0"),
      // 时
      "M": date2.getMinutes().toString().padStart(2, "0"),
      // 分
      "s": date2.getSeconds().toString().padStart(2, "0")
      // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (const key in timeSource) {
      const [ret] = new RegExp(`${key}+`).exec(formatStr) || [];
      if (ret) {
        const beginIndex = key === "y" && ret.length === 2 ? 2 : 0;
        formatStr = formatStr.replace(ret, timeSource[key].slice(beginIndex));
      }
    }
    return formatStr;
  }
  function timeFrom(timestamp = null, format2 = "yyyy-mm-dd") {
    if (timestamp == null)
      timestamp = Number(/* @__PURE__ */ new Date());
    timestamp = parseInt(timestamp);
    if (timestamp.toString().length == 10)
      timestamp *= 1e3;
    let timer = (/* @__PURE__ */ new Date()).getTime() - timestamp;
    timer = parseInt(timer / 1e3);
    let tips = "";
    switch (true) {
      case timer < 300:
        tips = "刚刚";
        break;
      case (timer >= 300 && timer < 3600):
        tips = `${parseInt(timer / 60)}分钟前`;
        break;
      case (timer >= 3600 && timer < 86400):
        tips = `${parseInt(timer / 3600)}小时前`;
        break;
      case (timer >= 86400 && timer < 2592e3):
        tips = `${parseInt(timer / 86400)}天前`;
        break;
      default:
        if (format2 === false) {
          if (timer >= 2592e3 && timer < 365 * 86400) {
            tips = `${parseInt(timer / (86400 * 30))}个月前`;
          } else {
            tips = `${parseInt(timer / (86400 * 365))}年前`;
          }
        } else {
          tips = timeFormat(timestamp, format2);
        }
    }
    return tips;
  }
  function trim(str, pos = "both") {
    str = String(str);
    if (pos == "both") {
      return str.replace(/^\s+|\s+$/g, "");
    }
    if (pos == "left") {
      return str.replace(/^\s*/, "");
    }
    if (pos == "right") {
      return str.replace(/(\s*$)/g, "");
    }
    if (pos == "all") {
      return str.replace(/\s+/g, "");
    }
    return str;
  }
  function queryParams(data = {}, isPrefix = true, arrayFormat = "brackets") {
    const prefix = isPrefix ? "?" : "";
    const _result = [];
    if (["indices", "brackets", "repeat", "comma"].indexOf(arrayFormat) == -1)
      arrayFormat = "brackets";
    for (const key in data) {
      const value2 = data[key];
      if (["", void 0, null].indexOf(value2) >= 0) {
        continue;
      }
      if (value2.constructor === Array) {
        switch (arrayFormat) {
          case "indices":
            for (let i2 = 0; i2 < value2.length; i2++) {
              _result.push(`${key}[${i2}]=${value2[i2]}`);
            }
            break;
          case "brackets":
            value2.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
            break;
          case "repeat":
            value2.forEach((_value) => {
              _result.push(`${key}=${_value}`);
            });
            break;
          case "comma":
            let commaStr = "";
            value2.forEach((_value) => {
              commaStr += (commaStr ? "," : "") + _value;
            });
            _result.push(`${key}=${commaStr}`);
            break;
          default:
            value2.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
        }
      } else {
        _result.push(`${key}=${value2}`);
      }
    }
    return _result.length ? prefix + _result.join("&") : "";
  }
  function toast(title, duration = 2e3) {
    uni.showToast({
      title: String(title),
      icon: "none",
      duration
    });
  }
  function type2icon(type2 = "success", fill = false) {
    if (["primary", "info", "error", "warning", "success"].indexOf(type2) == -1)
      type2 = "success";
    let iconName = "";
    switch (type2) {
      case "primary":
        iconName = "info-circle";
        break;
      case "info":
        iconName = "info-circle";
        break;
      case "error":
        iconName = "close-circle";
        break;
      case "warning":
        iconName = "error-circle";
        break;
      case "success":
        iconName = "checkmark-circle";
        break;
      default:
        iconName = "checkmark-circle";
    }
    if (fill)
      iconName += "-fill";
    return iconName;
  }
  function priceFormat(number2, decimals = 0, decimalPoint = ".", thousandsSeparator = ",") {
    number2 = `${number2}`.replace(/[^0-9+-Ee.]/g, "");
    const n = !isFinite(+number2) ? 0 : +number2;
    const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
    const sep = typeof thousandsSeparator === "undefined" ? "," : thousandsSeparator;
    const dec = typeof decimalPoint === "undefined" ? "." : decimalPoint;
    let s = "";
    s = (prec ? round(n, prec) + "" : `${Math.round(n)}`).split(".");
    const re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
      s[0] = s[0].replace(re, `$1${sep}$2`);
    }
    if ((s[1] || "").length < prec) {
      s[1] = s[1] || "";
      s[1] += new Array(prec - s[1].length + 1).join("0");
    }
    return s.join(dec);
  }
  function getDuration(value2, unit = true) {
    const valueNum = parseInt(value2);
    if (unit) {
      if (/s$/.test(value2))
        return value2;
      return value2 > 30 ? `${value2}ms` : `${value2}s`;
    }
    if (/ms$/.test(value2))
      return valueNum;
    if (/s$/.test(value2))
      return valueNum > 30 ? valueNum : valueNum * 1e3;
    return valueNum;
  }
  function padZero(value2) {
    return `00${value2}`.slice(-2);
  }
  function formValidate(instance, event) {
    const formItem = uni.$u.$parent.call(instance, "u-form-item");
    const form = uni.$u.$parent.call(instance, "u-form");
    if (formItem && form) {
      form.validateField(formItem.prop, () => {
      }, event);
    }
  }
  function getProperty(obj, key) {
    if (!obj) {
      return;
    }
    if (typeof key !== "string" || key === "") {
      return "";
    }
    if (key.indexOf(".") !== -1) {
      const keys = key.split(".");
      let firstObj = obj[keys[0]] || {};
      for (let i2 = 1; i2 < keys.length; i2++) {
        if (firstObj) {
          firstObj = firstObj[keys[i2]];
        }
      }
      return firstObj;
    }
    return obj[key];
  }
  function setProperty(obj, key, value2) {
    if (!obj) {
      return;
    }
    const inFn = function(_obj, keys, v) {
      if (keys.length === 1) {
        _obj[keys[0]] = v;
        return;
      }
      while (keys.length > 1) {
        const k = keys[0];
        if (!_obj[k] || typeof _obj[k] !== "object") {
          _obj[k] = {};
        }
        keys.shift();
        inFn(_obj[k], keys, v);
      }
    };
    if (typeof key !== "string" || key === "")
      ;
    else if (key.indexOf(".") !== -1) {
      const keys = key.split(".");
      inFn(obj, keys, value2);
    } else {
      obj[key] = value2;
    }
  }
  function page() {
    const pages2 = getCurrentPages();
    return `/${pages2[pages2.length - 1].route || ""}`;
  }
  function pages() {
    const pages2 = getCurrentPages();
    return pages2;
  }
  function setConfig({
    props: props2 = {},
    config: config2 = {},
    color: color2 = {},
    zIndex: zIndex2 = {}
  }) {
    const {
      deepMerge: deepMerge2
    } = uni.$u;
    uni.$u.config = deepMerge2(uni.$u.config, config2);
    uni.$u.props = deepMerge2(uni.$u.props, props2);
    uni.$u.color = deepMerge2(uni.$u.color, color2);
    uni.$u.zIndex = deepMerge2(uni.$u.zIndex, zIndex2);
  }
  const index = {
    range,
    getPx,
    sleep,
    os,
    sys,
    random,
    guid,
    $parent,
    addStyle,
    addUnit,
    deepClone,
    deepMerge,
    error,
    randomArray,
    timeFormat,
    timeFrom,
    trim,
    queryParams,
    toast,
    type2icon,
    priceFormat,
    getDuration,
    padZero,
    formValidate,
    getProperty,
    setProperty,
    page,
    pages,
    setConfig
  };
  const zIndex = {
    toast: 10090,
    noNetwork: 10080,
    // popup包含popup，actionsheet，keyboard，picker的值
    popup: 10075,
    mask: 10070,
    navbar: 980,
    topTips: 975,
    sticky: 970,
    indexListSticky: 965
  };
  let platform = "none";
  platform = "vue3";
  platform = "plus";
  const platform$1 = platform;
  const $u = {
    route,
    date: index.timeFormat,
    // 另名date
    colorGradient: colorGradient$1.colorGradient,
    hexToRgb: colorGradient$1.hexToRgb,
    rgbToHex: colorGradient$1.rgbToHex,
    colorToRgba: colorGradient$1.colorToRgba,
    test,
    type: ["primary", "success", "error", "warning", "info"],
    http: new Request(),
    config,
    // uView配置信息相关，比如版本号
    zIndex,
    debounce,
    throttle,
    mixin,
    mpMixin,
    props: props$x,
    ...index,
    color,
    platform: platform$1
  };
  uni.$u = $u;
  const install = (Vue2) => {
    Vue2.config.globalProperties.$u = $u;
    Vue2.config.globalProperties.$nextTick = (cb) => {
      cb();
    };
    Vue2.mixin(mixin);
  };
  const uviewPlus = {
    install
  };
  var isVue2 = false;
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  let supported;
  let perf;
  function isPerformanceSupported() {
    var _a;
    if (supported !== void 0) {
      return supported;
    }
    if (typeof window !== "undefined" && window.performance) {
      supported = true;
      perf = window.performance;
    } else if (typeof global !== "undefined" && ((_a = global.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
      supported = true;
      perf = global.perf_hooks.performance;
    } else {
      supported = false;
    }
    return supported;
  }
  function now() {
    return isPerformanceSupported() ? perf.now() : Date.now();
  }
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = Object.assign({}, defaultSettings);
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value2) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value2));
          } catch (e) {
          }
          currentSettings = value2;
        },
        now() {
          return now();
        }
      };
      if (hook) {
        hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value2) => {
          if (pluginId === this.plugin.id) {
            this.fallbacks.setSettings(value2);
          }
        });
      }
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const descriptor = pluginDescriptor;
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor: descriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
    * pinia v2.0.33
    * (c) 2023 Eduardo San Martin Morote
    * @license MIT
    */
  const piniaSymbol = Symbol("pinia");
  var MutationType;
  (function(MutationType2) {
    MutationType2["direct"] = "direct";
    MutationType2["patchObject"] = "patch object";
    MutationType2["patchFunction"] = "patch function";
  })(MutationType || (MutationType = {}));
  const IS_CLIENT = typeof window !== "undefined";
  const USE_DEVTOOLS = IS_CLIENT;
  const _global = /* @__PURE__ */ (() => typeof window === "object" && window.window === window ? window : typeof self === "object" && self.self === self ? self : typeof global === "object" && global.global === global ? global : typeof globalThis === "object" ? globalThis : { HTMLElement: null })();
  function bom(blob, { autoBom = false } = {}) {
    if (autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
      return new Blob([String.fromCharCode(65279), blob], { type: blob.type });
    }
    return blob;
  }
  function download(url2, name, opts) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url2);
    xhr.responseType = "blob";
    xhr.onload = function() {
      saveAs(xhr.response, name, opts);
    };
    xhr.onerror = function() {
      console.error("could not download file");
    };
    xhr.send();
  }
  function corsEnabled(url2) {
    const xhr = new XMLHttpRequest();
    xhr.open("HEAD", url2, false);
    try {
      xhr.send();
    } catch (e) {
    }
    return xhr.status >= 200 && xhr.status <= 299;
  }
  function click(node) {
    try {
      node.dispatchEvent(new MouseEvent("click"));
    } catch (e) {
      const evt = document.createEvent("MouseEvents");
      evt.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
      node.dispatchEvent(evt);
    }
  }
  const _navigator = typeof navigator === "object" ? navigator : { userAgent: "" };
  const isMacOSWebView = /* @__PURE__ */ (() => /Macintosh/.test(_navigator.userAgent) && /AppleWebKit/.test(_navigator.userAgent) && !/Safari/.test(_navigator.userAgent))();
  const saveAs = !IS_CLIENT ? () => {
  } : (
    // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
    typeof HTMLAnchorElement !== "undefined" && "download" in HTMLAnchorElement.prototype && !isMacOSWebView ? downloadSaveAs : (
      // Use msSaveOrOpenBlob as a second approach
      "msSaveOrOpenBlob" in _navigator ? msSaveAs : (
        // Fallback to using FileReader and a popup
        fileSaverSaveAs
      )
    )
  );
  function downloadSaveAs(blob, name = "download", opts) {
    const a = document.createElement("a");
    a.download = name;
    a.rel = "noopener";
    if (typeof blob === "string") {
      a.href = blob;
      if (a.origin !== location.origin) {
        if (corsEnabled(a.href)) {
          download(blob, name, opts);
        } else {
          a.target = "_blank";
          click(a);
        }
      } else {
        click(a);
      }
    } else {
      a.href = URL.createObjectURL(blob);
      setTimeout(function() {
        URL.revokeObjectURL(a.href);
      }, 4e4);
      setTimeout(function() {
        click(a);
      }, 0);
    }
  }
  function msSaveAs(blob, name = "download", opts) {
    if (typeof blob === "string") {
      if (corsEnabled(blob)) {
        download(blob, name, opts);
      } else {
        const a = document.createElement("a");
        a.href = blob;
        a.target = "_blank";
        setTimeout(function() {
          click(a);
        });
      }
    } else {
      navigator.msSaveOrOpenBlob(bom(blob, opts), name);
    }
  }
  function fileSaverSaveAs(blob, name, opts, popup) {
    popup = popup || open("", "_blank");
    if (popup) {
      popup.document.title = popup.document.body.innerText = "downloading...";
    }
    if (typeof blob === "string")
      return download(blob, name, opts);
    const force = blob.type === "application/octet-stream";
    const isSafari = /constructor/i.test(String(_global.HTMLElement)) || "safari" in _global;
    const isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((isChromeIOS || force && isSafari || isMacOSWebView) && typeof FileReader !== "undefined") {
      const reader = new FileReader();
      reader.onloadend = function() {
        let url2 = reader.result;
        if (typeof url2 !== "string") {
          popup = null;
          throw new Error("Wrong reader.result type");
        }
        url2 = isChromeIOS ? url2 : url2.replace(/^data:[^;]*;/, "data:attachment/file;");
        if (popup) {
          popup.location.href = url2;
        } else {
          location.assign(url2);
        }
        popup = null;
      };
      reader.readAsDataURL(blob);
    } else {
      const url2 = URL.createObjectURL(blob);
      if (popup)
        popup.location.assign(url2);
      else
        location.href = url2;
      popup = null;
      setTimeout(function() {
        URL.revokeObjectURL(url2);
      }, 4e4);
    }
  }
  function toastMessage(message, type2) {
    const piniaMessage = "🍍 " + message;
    if (typeof __VUE_DEVTOOLS_TOAST__ === "function") {
      __VUE_DEVTOOLS_TOAST__(piniaMessage, type2);
    } else if (type2 === "error") {
      console.error(piniaMessage);
    } else if (type2 === "warn") {
      console.warn(piniaMessage);
    } else {
      console.log(piniaMessage);
    }
  }
  function isPinia(o) {
    return "_a" in o && "install" in o;
  }
  function checkClipboardAccess() {
    if (!("clipboard" in navigator)) {
      toastMessage(`Your browser doesn't support the Clipboard API`, "error");
      return true;
    }
  }
  function checkNotFocusedError(error2) {
    if (error2 instanceof Error && error2.message.toLowerCase().includes("document is not focused")) {
      toastMessage('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn");
      return true;
    }
    return false;
  }
  async function actionGlobalCopyState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      await navigator.clipboard.writeText(JSON.stringify(pinia.state.value));
      toastMessage("Global state copied to clipboard.");
    } catch (error2) {
      if (checkNotFocusedError(error2))
        return;
      toastMessage(`Failed to serialize the state. Check the console for more details.`, "error");
      console.error(error2);
    }
  }
  async function actionGlobalPasteState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      pinia.state.value = JSON.parse(await navigator.clipboard.readText());
      toastMessage("Global state pasted from clipboard.");
    } catch (error2) {
      if (checkNotFocusedError(error2))
        return;
      toastMessage(`Failed to deserialize the state from clipboard. Check the console for more details.`, "error");
      console.error(error2);
    }
  }
  async function actionGlobalSaveState(pinia) {
    try {
      saveAs(new Blob([JSON.stringify(pinia.state.value)], {
        type: "text/plain;charset=utf-8"
      }), "pinia-state.json");
    } catch (error2) {
      toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
      console.error(error2);
    }
  }
  let fileInput;
  function getFileOpener() {
    if (!fileInput) {
      fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = ".json";
    }
    function openFile() {
      return new Promise((resolve, reject) => {
        fileInput.onchange = async () => {
          const files = fileInput.files;
          if (!files)
            return resolve(null);
          const file = files.item(0);
          if (!file)
            return resolve(null);
          return resolve({ text: await file.text(), file });
        };
        fileInput.oncancel = () => resolve(null);
        fileInput.onerror = reject;
        fileInput.click();
      });
    }
    return openFile;
  }
  async function actionGlobalOpenStateFile(pinia) {
    try {
      const open2 = await getFileOpener();
      const result = await open2();
      if (!result)
        return;
      const { text, file } = result;
      pinia.state.value = JSON.parse(text);
      toastMessage(`Global state imported from "${file.name}".`);
    } catch (error2) {
      toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
      console.error(error2);
    }
  }
  function formatDisplay(display) {
    return {
      _custom: {
        display
      }
    };
  }
  const PINIA_ROOT_LABEL = "🍍 Pinia (root)";
  const PINIA_ROOT_ID = "_root";
  function formatStoreForInspectorTree(store) {
    return isPinia(store) ? {
      id: PINIA_ROOT_ID,
      label: PINIA_ROOT_LABEL
    } : {
      id: store.$id,
      label: store.$id
    };
  }
  function formatStoreForInspectorState(store) {
    if (isPinia(store)) {
      const storeNames = Array.from(store._s.keys());
      const storeMap = store._s;
      const state2 = {
        state: storeNames.map((storeId) => ({
          editable: true,
          key: storeId,
          value: store.state.value[storeId]
        })),
        getters: storeNames.filter((id) => storeMap.get(id)._getters).map((id) => {
          const store2 = storeMap.get(id);
          return {
            editable: false,
            key: id,
            value: store2._getters.reduce((getters, key) => {
              getters[key] = store2[key];
              return getters;
            }, {})
          };
        })
      };
      return state2;
    }
    const state = {
      state: Object.keys(store.$state).map((key) => ({
        editable: true,
        key,
        value: store.$state[key]
      }))
    };
    if (store._getters && store._getters.length) {
      state.getters = store._getters.map((getterName) => ({
        editable: false,
        key: getterName,
        value: store[getterName]
      }));
    }
    if (store._customProperties.size) {
      state.customProperties = Array.from(store._customProperties).map((key) => ({
        editable: true,
        key,
        value: store[key]
      }));
    }
    return state;
  }
  function formatEventData(events) {
    if (!events)
      return {};
    if (Array.isArray(events)) {
      return events.reduce((data, event) => {
        data.keys.push(event.key);
        data.operations.push(event.type);
        data.oldValue[event.key] = event.oldValue;
        data.newValue[event.key] = event.newValue;
        return data;
      }, {
        oldValue: {},
        keys: [],
        operations: [],
        newValue: {}
      });
    } else {
      return {
        operation: formatDisplay(events.type),
        key: formatDisplay(events.key),
        oldValue: events.oldValue,
        newValue: events.newValue
      };
    }
  }
  function formatMutationType(type2) {
    switch (type2) {
      case MutationType.direct:
        return "mutation";
      case MutationType.patchFunction:
        return "$patch";
      case MutationType.patchObject:
        return "$patch";
      default:
        return "unknown";
    }
  }
  let isTimelineActive = true;
  const componentStateTypes = [];
  const MUTATIONS_LAYER_ID = "pinia:mutations";
  const INSPECTOR_ID = "pinia";
  const { assign: assign$1 } = Object;
  const getStoreType = (id) => "🍍 " + id;
  function registerPiniaDevtools(app, pinia) {
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app
    }, (api) => {
      if (typeof api.now !== "function") {
        toastMessage("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
      }
      api.addTimelineLayer({
        id: MUTATIONS_LAYER_ID,
        label: `Pinia 🍍`,
        color: 15064968
      });
      api.addInspector({
        id: INSPECTOR_ID,
        label: "Pinia 🍍",
        icon: "storage",
        treeFilterPlaceholder: "Search stores",
        actions: [
          {
            icon: "content_copy",
            action: () => {
              actionGlobalCopyState(pinia);
            },
            tooltip: "Serialize and copy the state"
          },
          {
            icon: "content_paste",
            action: async () => {
              await actionGlobalPasteState(pinia);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Replace the state with the content of your clipboard"
          },
          {
            icon: "save",
            action: () => {
              actionGlobalSaveState(pinia);
            },
            tooltip: "Save the state as a JSON file"
          },
          {
            icon: "folder_open",
            action: async () => {
              await actionGlobalOpenStateFile(pinia);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Import the state from a JSON file"
          }
        ],
        nodeActions: [
          {
            icon: "restore",
            tooltip: "Reset the state (option store only)",
            action: (nodeId) => {
              const store = pinia._s.get(nodeId);
              if (!store) {
                toastMessage(`Cannot reset "${nodeId}" store because it wasn't found.`, "warn");
              } else if (!store._isOptionsAPI) {
                toastMessage(`Cannot reset "${nodeId}" store because it's a setup store.`, "warn");
              } else {
                store.$reset();
                toastMessage(`Store "${nodeId}" reset.`);
              }
            }
          }
        ]
      });
      api.on.inspectComponent((payload, ctx) => {
        const proxy = payload.componentInstance && payload.componentInstance.proxy;
        if (proxy && proxy._pStores) {
          const piniaStores = payload.componentInstance.proxy._pStores;
          Object.values(piniaStores).forEach((store) => {
            payload.instanceData.state.push({
              type: getStoreType(store.$id),
              key: "state",
              editable: true,
              value: store._isOptionsAPI ? {
                _custom: {
                  value: vue.toRaw(store.$state),
                  actions: [
                    {
                      icon: "restore",
                      tooltip: "Reset the state of this store",
                      action: () => store.$reset()
                    }
                  ]
                }
              } : (
                // NOTE: workaround to unwrap transferred refs
                Object.keys(store.$state).reduce((state, key) => {
                  state[key] = store.$state[key];
                  return state;
                }, {})
              )
            });
            if (store._getters && store._getters.length) {
              payload.instanceData.state.push({
                type: getStoreType(store.$id),
                key: "getters",
                editable: false,
                value: store._getters.reduce((getters, key) => {
                  try {
                    getters[key] = store[key];
                  } catch (error2) {
                    getters[key] = error2;
                  }
                  return getters;
                }, {})
              });
            }
          });
        }
      });
      api.on.getInspectorTree((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          let stores = [pinia];
          stores = stores.concat(Array.from(pinia._s.values()));
          payload.rootNodes = (payload.filter ? stores.filter((store) => "$id" in store ? store.$id.toLowerCase().includes(payload.filter.toLowerCase()) : PINIA_ROOT_LABEL.toLowerCase().includes(payload.filter.toLowerCase())) : stores).map(formatStoreForInspectorTree);
        }
      });
      api.on.getInspectorState((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return;
          }
          if (inspectedStore) {
            payload.state = formatStoreForInspectorState(inspectedStore);
          }
        }
      });
      api.on.editInspectorState((payload, ctx) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return toastMessage(`store "${payload.nodeId}" not found`, "error");
          }
          const { path } = payload;
          if (!isPinia(inspectedStore)) {
            if (path.length !== 1 || !inspectedStore._customProperties.has(path[0]) || path[0] in inspectedStore.$state) {
              path.unshift("$state");
            }
          } else {
            path.unshift("state");
          }
          isTimelineActive = false;
          payload.set(inspectedStore, path, payload.state.value);
          isTimelineActive = true;
        }
      });
      api.on.editComponentState((payload) => {
        if (payload.type.startsWith("🍍")) {
          const storeId = payload.type.replace(/^🍍\s*/, "");
          const store = pinia._s.get(storeId);
          if (!store) {
            return toastMessage(`store "${storeId}" not found`, "error");
          }
          const { path } = payload;
          if (path[0] !== "state") {
            return toastMessage(`Invalid path for store "${storeId}":
${path}
Only state can be modified.`);
          }
          path[0] = "$state";
          isTimelineActive = false;
          payload.set(store, path, payload.state.value);
          isTimelineActive = true;
        }
      });
    });
  }
  function addStoreToDevtools(app, store) {
    if (!componentStateTypes.includes(getStoreType(store.$id))) {
      componentStateTypes.push(getStoreType(store.$id));
    }
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app,
      settings: {
        logStoreChanges: {
          label: "Notify about new/deleted stores",
          type: "boolean",
          defaultValue: true
        }
        // useEmojis: {
        //   label: 'Use emojis in messages ⚡️',
        //   type: 'boolean',
        //   defaultValue: true,
        // },
      }
    }, (api) => {
      const now2 = typeof api.now === "function" ? api.now.bind(api) : Date.now;
      store.$onAction(({ after, onError, name, args }) => {
        const groupId = runningActionId++;
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🛫 " + name,
            subtitle: "start",
            data: {
              store: formatDisplay(store.$id),
              action: formatDisplay(name),
              args
            },
            groupId
          }
        });
        after((result) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              title: "🛬 " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                result
              },
              groupId
            }
          });
        });
        onError((error2) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              logType: "error",
              title: "💥 " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                error: error2
              },
              groupId
            }
          });
        });
      }, true);
      store._customProperties.forEach((name) => {
        vue.watch(() => vue.unref(store[name]), (newValue, oldValue) => {
          api.notifyComponentUpdate();
          api.sendInspectorState(INSPECTOR_ID);
          if (isTimelineActive) {
            api.addTimelineEvent({
              layerId: MUTATIONS_LAYER_ID,
              event: {
                time: now2(),
                title: "Change",
                subtitle: name,
                data: {
                  newValue,
                  oldValue
                },
                groupId: activeAction
              }
            });
          }
        }, { deep: true });
      });
      store.$subscribe(({ events, type: type2 }, state) => {
        api.notifyComponentUpdate();
        api.sendInspectorState(INSPECTOR_ID);
        if (!isTimelineActive)
          return;
        const eventData = {
          time: now2(),
          title: formatMutationType(type2),
          data: assign$1({ store: formatDisplay(store.$id) }, formatEventData(events)),
          groupId: activeAction
        };
        activeAction = void 0;
        if (type2 === MutationType.patchFunction) {
          eventData.subtitle = "⤵️";
        } else if (type2 === MutationType.patchObject) {
          eventData.subtitle = "🧩";
        } else if (events && !Array.isArray(events)) {
          eventData.subtitle = events.type;
        }
        if (events) {
          eventData.data["rawEvent(s)"] = {
            _custom: {
              display: "DebuggerEvent",
              type: "object",
              tooltip: "raw DebuggerEvent[]",
              value: events
            }
          };
        }
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: eventData
        });
      }, { detached: true, flush: "sync" });
      const hotUpdate = store._hotUpdate;
      store._hotUpdate = vue.markRaw((newStore) => {
        hotUpdate(newStore);
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🔥 " + store.$id,
            subtitle: "HMR update",
            data: {
              store: formatDisplay(store.$id),
              info: formatDisplay(`HMR update`)
            }
          }
        });
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
      });
      const { $dispose } = store;
      store.$dispose = () => {
        $dispose();
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
        api.getSettings().logStoreChanges && toastMessage(`Disposed "${store.$id}" store 🗑`);
      };
      api.notifyComponentUpdate();
      api.sendInspectorTree(INSPECTOR_ID);
      api.sendInspectorState(INSPECTOR_ID);
      api.getSettings().logStoreChanges && toastMessage(`"${store.$id}" store installed 🆕`);
    });
  }
  let runningActionId = 0;
  let activeAction;
  function patchActionForGrouping(store, actionNames) {
    const actions = actionNames.reduce((storeActions, actionName) => {
      storeActions[actionName] = vue.toRaw(store)[actionName];
      return storeActions;
    }, {});
    for (const actionName in actions) {
      store[actionName] = function() {
        const _actionId = runningActionId;
        const trackedStore = new Proxy(store, {
          get(...args) {
            activeAction = _actionId;
            return Reflect.get(...args);
          },
          set(...args) {
            activeAction = _actionId;
            return Reflect.set(...args);
          }
        });
        return actions[actionName].apply(trackedStore, arguments);
      };
    }
  }
  function devtoolsPlugin({ app, store, options }) {
    if (store.$id.startsWith("__hot:")) {
      return;
    }
    if (options.state) {
      store._isOptionsAPI = true;
    }
    if (typeof options.state === "function") {
      patchActionForGrouping(
        // @ts-expect-error: can cast the store...
        store,
        Object.keys(options.actions)
      );
      const originalHotUpdate = store._hotUpdate;
      vue.toRaw(store)._hotUpdate = function(newStore) {
        originalHotUpdate.apply(this, arguments);
        patchActionForGrouping(store, Object.keys(newStore._hmrPayload.actions));
      };
    }
    addStoreToDevtools(
      app,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      store
    );
  }
  function createPinia() {
    const scope = vue.effectScope(true);
    const state = scope.run(() => vue.ref({}));
    let _p = [];
    let toBeInstalled = [];
    const pinia = vue.markRaw({
      install(app) {
        {
          pinia._a = app;
          app.provide(piniaSymbol, pinia);
          app.config.globalProperties.$pinia = pinia;
          if (USE_DEVTOOLS) {
            registerPiniaDevtools(app, pinia);
          }
          toBeInstalled.forEach((plugin) => _p.push(plugin));
          toBeInstalled = [];
        }
      },
      use(plugin) {
        if (!this._a && !isVue2) {
          toBeInstalled.push(plugin);
        } else {
          _p.push(plugin);
        }
        return this;
      },
      _p,
      // it's actually undefined here
      // @ts-expect-error
      _a: null,
      _e: scope,
      _s: /* @__PURE__ */ new Map(),
      state
    });
    if (USE_DEVTOOLS && typeof Proxy !== "undefined") {
      pinia.use(devtoolsPlugin);
    }
    return pinia;
  }
  function createApp() {
    const app = vue.createVueApp(App);
    app.use(createPinia());
    app.use(uviewPlus);
    return {
      app
    };
  }
  uni.$u.config.unit = "rpx";
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);

<template>
  <view class="list">
    消息列表页面
  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import Taro from "@tarojs/taro";

import { AtButton, AtRadio, AtCheckbox, AtToast, AtIcon, AtTextarea } from "taro-ui-vue";
import "taro-ui-vue/dist/style/components/button.scss";
import "taro-ui-vue/dist/style/components/radio.scss";
import "taro-ui-vue/dist/style/components/icon.scss";
import "taro-ui-vue/dist/style/components/checkbox.scss";
import "taro-ui-vue/dist/style/components/toast.scss";
import "taro-ui-vue/dist/style/components/textarea.scss";

import "./message.scss";
export default {
  components: {
    AtButton,
    AtRadio,
    AtCheckbox,
    AtToast,
    AtIcon,
    AtTextarea
  },
  data() {
    return {
      timus: [],
      answer: {},
      msg: "",
      showMsg: false,
      loading: false,
      pageStatus: 'loading',
      numlist: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"],
      current: 0,
    };
  },
  async created() {
    const dataRes = await Taro.request({
      url: `${REQHOST}/timu`,
      method: 'GET'
    });
    this.timus = dataRes.data;
    this.pageStatus = 'normal';
  },
  methods: {
    prev() {
      this.current--;
    }
  }
};
</script>

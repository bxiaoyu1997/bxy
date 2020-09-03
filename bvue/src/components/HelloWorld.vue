<template>
  <div class="hello">
    
    <h2>{{ msg }}</h2>
    <div>{{ presentDate}}</div>
    <div>{{huanying}}</div>
    <ul>
      <li v-for="item in items" :key="item.index">
        <router-link :to=item.url>
        <img :src="item.imgSrc" alt />
        <div>{{item.name}}</div>
        <i>{{item.miniText}}</i>
        </router-link>
      </li>
    </ul>
    <br />
    <div>{{address}}</div>
    
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "椰城女性妇幼平台",
      presentDate: "1",
      huanying: "欢迎您",
      items: [
        {
          url: "/shiminjiatingfuwupingtai/",
          name: "市民家庭服务中心",
          imgSrc: "https://m.hkwomen.org.cn/Tp/Mobile/skin02/img/icon18.png",
          miniText: "最新公告 活动主题 婚姻家庭",
          helpUrl: "https://m.hkwomen.org.cn/yechengnuxingshuomingwendang/54",
        },
        {
          url: "/biz/preorder.aspx",
          name: "妇女儿童权益中心",
          imgSrc: "https://m.hkwomen.org.cn/Tp/Mobile/skin02/img/icon19.png",
          miniText: "法律咨询 心理处理 诉求处理",
          helpUrl: "https://m.hkwomen.org.cn/yechengnuxingshuomingwendang/55",
        },
        {
          url: "/develop",
          name: "妇女发展中心",
          imgSrc: "https://m.hkwomen.org.cn/Tp/Mobile/skin02/img/icon20.png",
          miniText: "法律咨询 心理处理 诉求处理",
          helpUrl: "https://m.hkwomen.org.cn/yechengnuxingshuomingwendang/56",
        },
        {
          url:
            "https://m.hkwomen.org.cn/Tp/Mobile/skin02/hkwomen_bxy/personalcenter.html",
          name: "个人中心",
          imgSrc: "https://m.hkwomen.org.cn/Tp/Mobile/skin02/img/icon11.png",
          miniText: "",
          helpUrl: "",
        },
        {
          url:
            "https://m.hkwomen.org.cn/Tp/Mobile/skin02/hkwomen_bxy/wode.html",
          name: "我的控制台",
          imgSrc: "https://m.hkwomen.org.cn/Tp/Mobile/skin02/img/icon11.png",
          miniText: "",
          helpUrl: "",
        },
      ],
      address: "海口市长滨路8号海口行政中心13号楼",
    };
  },
  created: function (e) {
    var myDate = new Date();
    var year = myDate.getFullYear(); //获取当前年
    var mon = myDate.getMonth() + 1; //获取当前月
    var date = myDate.getDate(); //获取当前日
    var week = myDate.getDay();
    var weeks = [
      "星期日",
      "星期一",
      "星期二",
      "星期三",
      "星期四",
      "星期五",
      "星期六",
    ];
    this.presentDate = year + "年" + mon + "月" + date + "日" + weeks[week];
  },
  methods: {},
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$color: red;
.hello {
  padding: 10px;
  ul {
    width: 100%;
    list-style-type: none;
    padding: 0;
    li {
      width: 100%;
      height: 30%;
      margin-top: 1rem;
      padding: 10px 0 10px 0;
      background-color: #fff;
      color: #606d67;
      box-shadow: 5px 5px 5px #ffd3ec;
    }
    img {
      width: 50px;
      height: 50px;
    }
    i {
      font-size: 10px;
      color: #78b1f2;
    }
  }
}
</style>

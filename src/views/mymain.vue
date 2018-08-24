<template>
  <div class="mymain">
      <MyHead></MyHead>
        <!-- 轮播图 -->
        <Fade></Fade>
        <div class="main">
          <div class="view">
            <!-- 最新 -->
            <div class="new">
              <ul>
                <li class="animated zoomIn hvr-float-shadow" v-for="(item,index) in newdata.slice(0,3)" :key="index">
                  <a class="post-img loading" href="">
                    <img :src="item.thumb" alt="">
                  </a>
                  <h3 class="title">
                    <a href="">
                      {{item.title}}
                    </a>
                  </h3>
                  <p class="desc">{{(item.desc).slice(0,85)+'...'}}</p>
                  <p>
                    <span class="time">
                      <i class="iconfont icon-shijian"></i> {{item.time}}
                    </span>
                    <span class="look">
                      <i class="iconfont icon-yanjing_xianshi"></i> {{item.look}}
                    </span>
                  </p>
                </li>
              </ul>
            </div>
            <section class="myslide animated jello ">
              <MySidebar></MySidebar>
            </section>
          </div>
        </div>



      <!-- <MyMask></MyMask> -->
      <ChangeTheme></ChangeTheme>
      <MyFoot></MyFoot>
  </div>
</template>

<script>
import MyHead from "@/components/myhead"
import MyFoot from "@/components/myfoot"
import Fade from "@/components/other/fade"
import MyMask from "@/components/other/mask"
import ChangeTheme from "@/components/changetheme"
import MySidebar from "@/views/sidebar"

export default {
    components:{
        MyHead,MyFoot,Fade,ChangeTheme,MyMask,MySidebar
    },
  name: 'mymain',
  data () {
    return {
      newdata:[
        {id:0,title:'我的第一篇文章！',thumb:require('../assets/img/1.jpg'),desc:'首先声明:月入8000以上请略过本文我知道看我博客的人中有蛮多对技术热爱的穷学生你们很多人也都有创业赚钱的想法我觉得吧，首先别想那么多，先把最基础的网上赚很多人也都有创业赚钱的想法我觉得吧，首先别想那么多，先把最基础的网上赚钱方式CPA尝试',like:0,look:0,share:0,time:'2017/07/07 21:00:00'},
        {id:1,title:'我的第一篇文章！',thumb:require('../assets/img/1.jpg'),desc:'首先声明:月入8000以上请略过本文我知道看我博客的人中有蛮多对技术热爱的穷学生你们很多人也都有创业赚钱的想法我觉得吧，首先别想那么多，先把最基础的网上赚很多人也都有创业赚钱的想法我觉得吧，首先别想那么多，先把最基础的网上赚钱方式CPA尝试',like:0,look:0,share:0,time:'2017/07/07 21:00:00'},
        {id:2,title:'我的第一篇文章！',thumb:require('../assets/img/1.jpg'),desc:'首先声明:月入8000以上请略过本文我知道看我博客的人中有蛮多对技术热爱的穷学生你们很多人也都有创业赚钱的想法我觉得吧，首先别想那么多，先把最基础的网上赚很多人也都有创业赚钱的想法我觉得吧，首先别想那么多，先把最基础的网上赚钱方式CPA尝试',like:0,look:0,share:0,time:'2017/07/07 21:00:00'},
        {id:3,title:'我的第一篇文章！',thumb:require('../assets/img/1.jpg'),desc:'首先声明:月入8000以上请略过本文我知道看我博客的人中有蛮多对技术热爱的穷学生你们很多人也都有创业赚钱的想法我觉得吧，首先别想那么多，先把最基础的网上赚很多人也都有创业赚钱的想法我觉得吧，首先别想那么多，先把最基础的网上赚钱方式CPA尝试',like:0,look:0,share:0,time:'2017/07/07 21:00:00'},
        {id:4,title:'我的第一篇文章！',thumb:require('../assets/img/1.jpg'),desc:'首先声明:月入8000以上请略过本文我知道看我博客的人中有蛮多对技术热爱的穷学生你们很多人也都有创业赚钱的想法我觉得吧，首先别想那么多，先把最基础的网上赚很多人也都有创业赚钱的想法我觉得吧，首先别想那么多，先把最基础的网上赚钱方式CPA尝试',like:0,look:0,share:0,time:'2017/07/07 21:00:00'},
        {id:5,title:'我的第一篇文章！',thumb:require('../assets/img/1.jpg'),desc:'首先声明:月入8000以上请略过本文我知道看我博客的人中有蛮多对技术热爱的穷学生你们很多人也都有创业赚钱的想法我觉得吧，首先别想那么多，先把最基础的网上赚很多人也都有创业赚钱的想法我觉得吧，首先别想那么多，先把最基础的网上赚钱方式CPA尝试',like:0,look:0,share:0,time:'2017/07/07 21:00:00'},
      ]
    }
  }
}
</script>

<style scoped lang="scss">
    .mymain{
      width: 100%;
      height: 100%;
      overflow:hidden;
    }
  .main{
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: auto;
  }
  .view{
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    justify-content:flex-start;
    .myslide{
      margin-top: 50px;
    }
    .new{
      padding-top: 50px;
      ul{
        li.float-shadow{
          display: inline-block;
        }
        li.float-shadow:hover{
          -webkit-transform: translateY(-5px);
          transform: translateY(-5px);
        }
        li{
          width: 760px;
          margin-bottom: 20px;
          padding: 20px;
          overflow: hidden;
          background-color: rgba(0,0,0,0.8);
          border: 1px solid #eee;
          border-radius: 2px;
          -webkit-transition: all .4s ease;
          transition: all .4s ease;
          position: relative;
          color: #eee;
          .post-img {
            min-height: 130px;
            float: left;
            margin-right: 2.82%;
            margin-left: 0;
            max-width: 330px;
            width: 30%;
            height: auto;
            position: relative;
            img{
              width: 100%;
            }
          }
          h3 {
              display: block;
              padding-bottom: 10px;
              font-size: 18px;
              font-weight: 700;
              line-height: 24px;
          }
          .desc{
            font-size: 14px;
            line-height: 24px;
            display: block;
          }
          .time,.look{
            font-size: 13px;
            color: #999;
            margin-right: 10px;
            display: inline-block
          }
          a {
            color: #eee;
              margin: 0;
              padding: 0;
              background: 0 0;
              vertical-align: baseline;
              text-decoration: none;
              font-size: 100%;
              -webkit-transition: all .3s ease;
              -o-transition: all .3s ease;
              transition: all .3s ease;
          }
        }
      }
    }
  }

    
</style>

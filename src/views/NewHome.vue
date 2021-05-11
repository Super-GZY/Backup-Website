<template>
    <div class="back">
        <div class="back_inner">
            <img src="../static/circle_right.png"  class="circle_right">
            <img src="../static/phone.png" class="phone">
            <img src="../static/circle_left.png" class="circle_left">
            <img src="../static/circle_middle.png" class="circle_middle">
            <div class="red_text_div">
                <div class="red_text_inner">
                    <img src="../static/red_text.png" class="red_text">
                </div>
            </div>
            <div class="red_text_div">
                <div class="red_text_inner">
                    <img src="../static/text.png" class="text">
                </div>
            </div>
            <div class="link_div">
                <div class="link_inner apple_img"
                @mouseover="isShowIos=true"
                @mouseout="isShowIos=false"
                >
                    <img src="../static/apple-card.png" alt="">
                    <a href="javascript:void(0)"
                     
                    >IOS</a>
                </div>
                <div class="link_inner"
                @mouseover="isShowAnd=true"
                    @mouseout="isShowAnd=false"
                >
                    <img src="../static/android-card.png" alt="">
                    <a href="http://app.stylika.online/android/Stylika.apk"
                    
                    >Android</a>
                </div>
            </div>
            <div class="show_div">
                <div class="ios_img" v-if="isShowIos">
                    <div>对不起，ios用户</div>
                    <div>暂不支持下载</div>
                </div>
                <img class="and_img" src="../static/android_download_QRCode.png" v-if="isShowAnd" alt="">
            </div>
            <div class="bottom_link">
                <div class="bottom_link_inner" v-if="false">
                    <a href="javascript:void(0)">用户协议</a>
                </div>
                <div class="bottom_link_inner" @click="$router.push('/protocol')">
                    <a href="javascript:void(0)">隐私政策</a>
                </div>
                <div class="bottom_link_inner">
                    <a href="javascript:void(0)">京ICP备20022882号</a>
                </div>
            </div>
            <div class="final_div">
                <a href="javascript:void(0)" class="final_link">Copyright © 2021 北京一大波网络科技有限公司 All rights reserved.</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isShowIos:false,
            isShowAnd:false,
            and_url:'',
            and_img:''
            //Users/mac/Documents/GitHub/Backup-Website/src/static/ma.png
            //Users/mac/Documents/GitHub/Backup-Website/src/views/NewHome.vue
        }
    },
    mounted(){
        if(window.location.hostname==''){

        }else{

        }
    },
    methods:{
        
    }
}
</script>
<style lang="scss" scoped>
.back{
    display: flex;
    max-width: 1500px;
    .back_inner{
        margin:1.87rem 0 0 0.91rem;
        .circle_left{
            position: absolute;
            top:2.93rem;
            left: 0;
            height: 1.53rem;
        }
        .circle_right{
            position: absolute;
            height: 5.53rem;
            right: 0;
            top:0.51rem;
        }
        .circle_middle{
            position: absolute;
            width: 2rem;
            height: 2rem;
            z-index: 1;
            right: 4.8rem;
            top:5.87rem;
        }
        .phone{
            width: 3.93rem;
            height: 8.51rem;
            position: absolute;
            right: 1.55rem;
            top:0.85rem;
            z-index: 5;
        }
        .red_text{
            width: 7.36rem;
        }
        .text{
            margin-top: 0.3rem;
            width: 4.11rem;
        }
        a{
            color: #606060;
            font-size: 0.14rem;
            display: inline-block;
            font-family: Arial,Helvetica,sans-serif;
        }
        a:hover {
            text-decoration: underline;
        }
        .link_div{
            display: flex;
            margin: 1.43rem 0 0.15rem;
            .apple_img{
                margin-right: 0.82rem;
            }
            .link_inner{
                display: flex;
                align-items: center;
                img{
                    width: 0.32rem;
                    height: 0.36rem;
                    margin-right: 0.12rem;
                }
                
                a{
                    color: black;
                    font-size: 0.26rem;
                    font-weight: 500;
                }
            }
        }
        .show_div{
             display: flex;
             margin-bottom: 0.53rem;
             height: 1.74rem;
            img{
                width: 1.74rem;
                height: 1.74rem;
                margin-left: 1.6rem;
            }
        }
        .bottom_link{
            display: flex;
            a{
                margin-right: 0.82rem;
            }
        }
        .final_link{
            margin: 0.19rem 0 0.3rem;
        }
        
    }
    @media screen and(max-width: 1300px){
        .back_inner{
            margin-top: 0.35rem;
            .circle_left{
            top:1.53rem;
            height: 1rem;
        }
        .circle_right{
            height: 2.5rem;
            top:0.51rem;
        }
        .circle_middle{
            width: 1rem;
            height: 1rem;
            right: 3rem;
            top:4.87rem;
        }
        .phone{
            width: 3rem;
            height: 6.5rem;
            right: 0.6rem;
            top:1rem;
        }
        }
    }
    @media screen and(max-width: 768px){
        .back_inner{
            margin: 0;
            width: 100%;
            .circle_left{
            top:2.4rem;
            height: 2rem;
        }
        .circle_right{
            height: 5.5rem;
            top:4.5rem;
        }
        .circle_middle{
            width: 2.5rem;
            height: 2.5rem;
            right: 76%;
            top:18rem;
        }
        .phone{
            width: 9rem;
            height: 19rem;
            right: 8%;
            top:5.6rem;
        }
        .red_text{
            width: 9rem;
        }
        .text{
            width: 5rem;
        }
        .red_text_div{
            display: flex;
            justify-content: center;
            .red_text_inner{
                width: 9rem;
            }
        }
        a{
            font-size: 0.28rem;
        }
            .link_div{
            margin-top:22rem;
            justify-content: center;
            .apple_img{
                margin-right: 1.5rem;
            }
            .link_inner{
                img{
                width: 0.8rem;
                height: 0.9rem;
            }
            a{
                font-size: 0.5rem;
            }
            }
            }
            .show_div{
                .ios_img{
                    margin-left: 18%;
                }
                .and_img{
                    margin-left: 58%;
                }
            }
            .bottom_link{
                display: flex;
                justify-content: space-around;
                .bottom_link_inner{
                    width: 33.333%;
                    display: flex;
                    justify-content: center;
                }
            a{
                margin: 0;
            }
            }
            .final_div{
                display: flex;
                justify-content: center;
                margin-bottom: 1rem;
            }
        }
        
    }
}

</style>
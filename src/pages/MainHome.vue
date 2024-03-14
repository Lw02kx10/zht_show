<template>
    <div class="main-root" ref="rootNode">
        <div class="top-bar">
            <div class="logo-wrapper">
                <img src="../assets/logo.png" alt="">
            </div>
            <div class="top-text-wrapper">
                <span>ZHT INNOVATION</span>
            </div>
        </div>
        <div class="products-overview">
            <div class="overview-text">
                <el-icon>
                    <Goods color="#000"/>
                </el-icon>
                <span>Our Products</span>
            </div>
            <div class="products-list">
                <div class="product-wrapper" @click="viewDetail(item.route)" v-for="(item, index) in backgroundImageList" :key="index" :style="{background: `url(${item.url}) center center`,
                                                                                                                backgroundSize: '100% 100%'}">
                    <div class="product-text">
                        <span>0{{ index + 1 }}&nbsp;&nbsp;{{ item.text }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="js" setup>
import { ref, onMounted } from 'vue';
import { ElLoading } from 'element-plus';
import { useRouter } from 'vue-router';
import { Goods } from '@element-plus/icons-vue';

let rootNode = ref();
let router = useRouter();

const getImageUrl = (name) => {
    return new URL(`../assets/background/${name}.jpg`, import.meta.url).href;
}
const loadingOptions = {
    target: rootNode.value,
    text: "loading...",
    background: 'rgba(0,0,0,0.7)',
    lock: true,
}

let backgroundImageList = [
    {
        text: "KEEL",
        url: getImageUrl("keel"),
        route: "/keel",
    },
    {
        text: "KEEL MINI",
        url: getImageUrl("keel_mini"),
        route: "/keel_mini",
    },
    {
        text: "NAGA x4",
        url: getImageUrl("x4"),
        route: "/nagax4",
    },
    {
        text: "NAGA x8",
        url: getImageUrl("x8"),
        route: "/nagax8",
    },
    {
        text: "SH06",
        url: getImageUrl("sh06"),
        route: "/sh06",
    },
    {
        text: "Gimbal ZH10",
        url: getImageUrl("zh10"),
        route: "/zh10",
    },
    {
        text: "Gimbal ZH20",
        url: getImageUrl("zh20"),
        route: "/zh20",
    },
    {
        text: "Circuit principle",
        url: getImageUrl("circuit"),
        route: "/circuit",
    }
]

const viewDetail = (route) => {
    router.push(route);
}

onMounted(() => {
    const loading = ElLoading.service(loadingOptions);
    setTimeout(() => {
        loading.close();
    }, 2000);
})
</script>

<style lang="scss" scoped>
$topBarHeight: 50px;
$green: #6c6c6c;
.main-root {
    height: 100vh;
    display: flex;
    flex-direction: column;
    .top-bar {
        display: flex;
        height: $topBarHeight;
        background-color: $green;
        .logo-wrapper {
            img {
                height: 85%;
                position: relative;
                top: 7.5%;
            }
        }
        .top-text-wrapper {
            line-height: $topBarHeight;
            color: #fff;
            font-size: 16px;
            font-weight: 600;
            text-align: center;
        }
    }
    .products-overview {
        display: flex;
        flex-direction: column;
        margin-top: 18px;
        .overview-text {
            font-size: 23px;
            font-weight: bold;
            text-align: center;
            display: flex;
            justify-content: center;
            i {
                align-self: center;
                margin-right: 5px;
            }
        }
        .products-list {
            .product-wrapper {
                display: flex;
                margin: 25px 20px;
                height: 320px;
                border-radius: 18px;
                box-shadow: 2px 2px 6px rgba($color: #000000, $alpha: 0.4);
                .product-text {
                    width: 100%;
                    line-height: 320px;
                    text-align: center;
                    color: #fff;
                    font-size: 25px;
                    font-weight: bold;
                    text-shadow: 4px 4px 6px rgba($color: #000000, $alpha: 0.4);
                }
            }
        }
    }
}
</style>
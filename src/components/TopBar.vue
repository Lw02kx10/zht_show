<template>
    <div class="topbar-root">
        <div class="go-back-btn">
            <el-icon @click="goBack">
                <Back color="#fff"/>
            </el-icon>
        </div>
        <div class="product-info">
            <span>{{ name }}</span>
        </div>
    </div>
</template>

<script lang="js" setup>
import { Back } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';
defineProps(['name']);

const router = useRouter();

const goBack = () => {
    router.go(-1);
}
</script>

<style lang="scss" scoped>
$topBarHeight: 50px;
$green: #6c6c6c;
.topbar-root {
    display: flex;
    height: $topBarHeight;
    background-color: $green;
    .go-back-btn {
        align-self: center;
        display: flex;
        margin-left: 10px;
        i {
            font-size: 30px;
        }
    }
    .product-info {
        line-height: $topBarHeight;
        color: #fff;
        font-size: 19px;
        font-weight: 600;
        margin-left: 10px;
    }
}
</style>
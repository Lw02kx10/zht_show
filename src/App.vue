<template>
    <router-view v-slot="{ Component }">
        <transition>
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
        </transition>    
    </router-view>
</template>

<script setup lang="js">

</script>

<style>
.el-image {
    overflow: unset !important;
}
</style>

<style>
* {
    margin: 0;
    padding: 0;
}
</style>

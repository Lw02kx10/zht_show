<template>
    <div class="root">
        <TopBar name="Circuit principle" />
        <div class="introduct-part">
            <div class="introduct-text">
                <div class="text-detail">
                    <div class="text-dcdc">
                        <div class="dcdc-title">
                            <span>DCDC</span>
                        </div>
                        <div class="dcdc-image">
                            <el-image :src="introList[0]" lazy/>
                        </div>
                    </div>
                    <div class="text-pandora">
                        <div class="pandora-title">
                            <span>Pandora</span>
                        </div>
                        <div class="pandora-image">
                            <el-image :src="introList[1]" lazy/>
                        </div>
                    </div>
                    <div class="text-keel">
                        <div class="keel-title">
                            <span>KEEL PDB</span>
                        </div>
                        <div class="keel-image">
                            <el-image :src="introList[2]" lazy/>
                        </div>
                    </div>
                    <div class="text-mini">
                        <div class="mini-title">
                            <span>KEEL MINI PDB</span>
                        </div>
                        <div class="mini-image">
                            <el-image :src="introList[3]" lazy/>
                            <el-image :src="introList[4]" lazy/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="js">
import TopBar from '../components/TopBar.vue';
import { ElImage } from 'element-plus';
import { getImageUrl } from '../util/getUrl';
import { ref } from 'vue';

let introList = ref([
    getImageUrl('circuit', 'dcdc', '.jpg'),
    getImageUrl('circuit', 'pandora', '.jpg'),
    getImageUrl('circuit', 'keel_pdb', '.jpg'),
    getImageUrl('circuit', 'keel_mini_pdb1', '.jpg'),
    getImageUrl('circuit', 'keel_mini_pdb2', '.jpg'),
]);

</script>

<style lang="scss" scoped>
.root {
    display: flex;
    flex-direction: column;
    overflow: auto;
    .introduct-part {
        display: flex;
        flex-direction: column;
        .introduct-text {
            display: flex;
            flex-direction: column;
            padding: 0px 30px;
            margin-top: 12px;
            .text-detail {
                margin: 4px 0px;
                font-size: 16.5px;
                line-height: 21.5px;
                .text-dcdc {
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 18px;
                    .dcdc-title {
                        font-size: 20px;
                        font-weight: bold;
                    }
                }
                .text-pandora {
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 18px;
                    .pandora-title {
                        font-size: 20px;
                        font-weight: bold;
                    }
                }
                .text-keel {
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 18px;
                    .keel-title {
                        font-size: 20px;
                        font-weight: bold;
                    }
                }
                .text-mini {
                    display: flex;
                    flex-direction: column;
                    .mini-title {
                        font-size: 20px;
                        font-weight: bold;
                    }
                }
            }
        }
    }
}
</style>
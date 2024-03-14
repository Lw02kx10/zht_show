<template>
    <div class="root">
        <TopBar name="Keel Mini"/>
        <div class="introduct-part">
            <div class="introduct-text">
                <div class="text-title">
                    <span>Product Introduction</span>
                </div>
                <div class="text-detail">
                    <ul>
                        <li>KEEL Mini is a modular four-rotor drone independently developed by ZHT AERO. Its frame, arms and propellers
are all made of high-strength carbon fiber and aviation aluminum materials, which ensures the overall strength
of the drone while lightweight. Its empty weight is only about 3.7kg (excl. battery and props), and the
symmetrical wheelbase is about 906mm. The modular design makes it easier for users to carry and transport, one person can easily operate it. Its compact size can safely take off and land in a venue with a diameter of 2
meters.</li>
                        <li>KEEL Mini is equipped with two pairs of 22-inch folding propellers, four pieces customized motors in 135KV, and
two pieces solid-state batteries in 19200mAh , which provide stronger power and longer endurance for its flight. The effective flight time is 70 minutes (no payload), the maximum load capacity is 8kg, and the maximum takeoff
weight is 16kg. Truly "small" but "strong".</li>
                        <li>KEEL Mini is equipped with professional open source flight controller & high-precision GPS, which has strong
anti-interference ability, high-precision navigation and positioning capabilities, more secure and stable real-time
data transmission. Supports automatic return to home, fixed-point cruise, inertial navigation, mission planning
and other functions.</li>
                        <li>KEEL Mini can be equipped with Pandora quick disassembly device, up to 4 pieces can be supported, suitable
for gimbal camera, LIDAR, megaphone, searchlight, air drop device and so on, while the fuselage part is reserved
for expansion installation port, convenient for users to carry out secondary development to install parachutes, altimeter radars, image transmission modules, etc. Relying on independent research and development
advantages, Keel Mini supports customized services to meet the needs of different industries, which can be
widely used in Logistics, Emergency search and rescue, Border patrol, Surveying & mapping and other fields.</li>
                    </ul>
                </div>
            </div>
            <div class="introduct-pic">
                <el-image v-for="(item, index) in introList" :key="index" :src="item" lazy/>
            </div>
        </div>
    </div>
</template>

<script setup lang="js">
import TopBar from '../components/TopBar.vue';
import { ElImage } from 'element-plus';
import { getImageUrl } from '../util/getUrl';
import { ref, onMounted } from 'vue';

let introList = ref([
    getImageUrl('introduction/keel_mini', 'introduction', '.png'),
    getImageUrl('introduction/keel_mini', 'table1', '.png'),
    getImageUrl('introduction/keel_mini', 'table2', '.png'),
]);

onMounted(() => {
    for (let i=1; i<=8; i++) {
        let url = getImageUrl('keel_mini', `2_0${i}`, '.jpg');
        introList.value.push(url);
    }
})
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
            .text-title {
                font-size: 22px;
                font-weight: bold;
                text-align: center;
            }
            .text-detail {
                margin: 4px 0px;
                font-size: 16.5px;
                line-height: 21.5px;
                ul {
                    li {
                        margin-top: 5px;
                        &::marker {
                            font-size: 26px;
                        }
                    }
                }
            }
        }
        .introduct-pic {
            margin-top: 8px;
            .el-image:first-child {
                padding: 0 30px;
                margin-bottom: 10px;
            }
        }
    }
}
</style>
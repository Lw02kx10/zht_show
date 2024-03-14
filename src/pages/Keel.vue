<template>
    <div class="root">
        <TopBar name="Keel" />
        <div class="introduct-part">
            <div class="introduct-text">
                <div class="text-title">
                    <span>KEEL INTRODUCTION</span>
                </div>
                <div class="text-detail">
                    <ul>
                        <li>KEEL is a modular four-rotor UAV independently developed by ZHT AERO. Its fuselage, arm and
propeller are made of high-strength carbon fiber and aviation aluminum materials, which ensures the
overall strength of the UAV while being lightweight. The empty weight is only 4kg (excluding batteries
and props), and the symmetrical wheelbase is about 1250mm. Its modular design is more convenient
for users to carry and operate, and one person can easily work. Its small size can safely take off and
land in a field with a diameter of 2.5 meters.</li>
                        <li>KEEL equipped with 2 pairs of 32 inch straight props, 4 pcs customized motors, 2 pcs 28000mAh
battery, for its flight to provide powerful power and ultra-long endurance, no-load effectiveflying time
of 120 minutes, the maximum take-off weight of 20kg, the maximum load of 10kg, really achieved
Proportional payload.</li>
                        <li>KEEL equipped with high-precision GPS and professional open source flight controller, anti-interference ability, high-precision navigation and positioning ability, real-time data transmission
more secure and stable. Support automatic return, fixed-point cruise, inertial navigation, mission
planning and other functions.</li>
                        <li>KEEL can be equipped with Pandora quick disassembly device, up to 4 can be supported, suitable for
pod, Megaphone , searchlight, throwing device and other expansion, while the fuselage part reserved
for expansion installation port, can be installed parachute, GPS, map transmission and other
equipment, can be widely used in logistics, agriculture, mapping, mountain rescue and other fields. Relying on independent research and development advantages, Keel supports customized services to
meet the needs of different industries.</li>
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
    getImageUrl('introduction/keel', 'introduction', '.png'),
    getImageUrl('introduction/keel', 'table1', '.png'),
    getImageUrl('introduction/keel', 'table2', '.png'),
]);

onMounted(() => {
    for (let i=1; i<=15; i++) {
        if (i >= 2 && i <= 5) continue;
        let url = getImageUrl('keel', `1 (${i})`, '.jpg');
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
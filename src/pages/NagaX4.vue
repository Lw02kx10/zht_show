<template>
    <div class="root">
        <TopBar name="NAGA x4"/>
        <div class="introduct-part">
            <div class="introduct-text">
                <div class="text-title">
                    <span>NAGA X4 INTRODUCTION</span>
                </div>
                <div class="text-detail">
                    <ul>
                        <li>NAGA X4 is a lightweight quadcopter drone developed by ZHT AERO. Its body, arms, and propellers
are made of ultra-lightweight carbon fiber material, ensuring both lightweight design and structural
rigidity. The innovative design gives it a sporty and stylish appearance with smooth lines. The upper
and lower covers of the body feature special hidden heat dissipation holes, which ensure normal
airflow for efficient heat dissipation while effectively preventing rainwater from entering the interior. The empty weight is only 2.5kg (excluding battery and propellers) with a symmetrical axis distance of
approximately 815mm. The folding and quick-release design makes it easy to carry and operate, requiring only one person.</li>
                        <li>NAGA X4 is equipped with 2 pairs of 22-inch straight propellers, 4 dedicated motors, and 1 pcs
14000mAh battery, providing powerful thrust and ultra-long endurance for flight. With a flight time of
up to 90 minutes without payload, it has a maximum takeoff weight of 8kg and a maximum payload of
3kg, achieving a perfect balance of lightness and speed.</li>
                        <li>NAGA X4 is equipped with high-precision GPS and professional open-source flight control system. It
has strong anti-interference capability, high-precision navigation and positioning, and secure and
stable real-time data transmission. It supports functions such as automatic return, waypoint cruising, inertial navigation, and mission planning.</li>
                        <li>NAGA X4 can be equipped with the Pandora quick-detach system, supporting up to 1 unit, compatible with payloads such as gimbals, loudspeakers, searchlights, and dropping device. The drone
also has expandable installation ports on the fuselage, allowing the installation of parachutes, GPS, image transmission, and other equipment. It can be widely used in fields such as logistics, agriculture, surveying and mapping, and mountain rescue. Relyingon its independent research and development
capabilities, NAGA X4 supports customized services to fully meet the diverse needs of different
industries</li>
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
    getImageUrl('introduction/x4', 'introduction', '.png'),
    getImageUrl('introduction/x4', 'table1', '.png'),
    getImageUrl('introduction/x4', 'table2', '.png'),
]);

onMounted(() => {
    for (let i=1; i<=8; i++) {
        let url = getImageUrl('naga_x4', `3_01 (${i})`, '.jpg');
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
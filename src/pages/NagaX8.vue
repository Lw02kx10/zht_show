<template>
    <div class="root">
        <TopBar name="NAGA x8"/>
        <div class="introduct-part">
            <div class="introduct-text">
                <div class="text-title">
                    <span>NAGA X8 INTRODUCTION</span>
                </div>
                <div class="text-detail">
                    <ul>
                        <li>NAGA X8 is a four-axis eight-propeller UAV independently developed by ZHTAERO. Its fuselage, arms, and propellers are made of high-strength carbon fiber and materials to ensure both lightweight and
overall strength of the drone. Even if one of the motors suddenly fails and stops operating, NAGA X8
can maintain stable flight by relying on the powerful propulsion of the other motors, ensuring flight
safety and reducing the risk of accidents. The empty weight of the drone is only 3.9kg (excluding
batteries and blades), with a symmetrical axis distance of approximately 825mm. The foldable design
makes it more convenient for users to carry and operate, and it can be operated by a single person.</li>
                        <li>NAGA X8 is equipped with 4 pairs of 22-inch carbon fiber folding props, 8 pcs dedicated motors, and
2 pcs 28800mAh batteries, providing strong power and ultra-long endurance for its flight. It has a
maximum takeoff weight of 18kg and a maximum payload of 8kg, bringing unparalleled stability and
excellent maneuverability. The drone provides an effective flight time of up to 75 minutes without
payload.</li>
                        <li>NAGA X8 is equipped with high-precision GPS and professional open-source flight control, with
strong anti-interference capabilities and high-precision navigation and positioning capabilities. Real-time data transmission is safer and more stable. It supports functions such as automatic return, waypoint cruising, inertial navigation, and mission planning.</li>
                        <li>NAGA X8 can be equipped with the Pandora quick-detach system, supporting up to 1 unit, compatible with payloads such as gimbals, loudspeakers, searchlights, and delivery devices. The drone
also has expandable installation ports on the fuselage, allowing the installation of parachutes, GPS, image transmission, and other equipment. It can be widely used in fields such as logistics, agriculture, surveying and mapping, and mountain rescue. Leveraging its independent research and development
capabilities, NAGA X8 supports customized services to fully meet the diverse needs of different
industries.</li>
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
    getImageUrl('introduction/x8', 'introduction', '.png'),
    getImageUrl('introduction/x8', 'table1', '.png'),
    getImageUrl('introduction/x8', 'table2', '.png'),
]);

onMounted(() => {
    for (let i=1; i<=8; i++) {
        let url = getImageUrl('naga_x8', `4_02 (${i})`, '.jpg');
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
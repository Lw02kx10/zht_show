<template>
    <div class="root">
        <TopBar name="Gimbal ZH10"/>
        <div class="introduct-part">
            <div class="introduct-text">
                <div class="text-title">
                    <span>ZH10 40x-4K Spherical Gimbal</span>
                </div>
                <div class="text-detail">
                    <ul>
                        <li>Carries an 8.29M pixels 40x zoom camera, which provides a video
resolution of 4K@30fps and an image resolution of 3840x2160.</li>
                        <li>Laser lighting module ensures the cameras getting a clear image
even in complete darkness.</li>
                        <li>Features auto target tracking, which can constantly track the target
selected on screen.</li>
                        <li>Low-profile spherical shape and 3-axis nonorthogonal mechanical
stabilized structure, minimize the gyration radius and the wind
resistance of the gimbal. The D-80Pro is able to spin continually
around its yaw axis.</li>
                        <li>With the GCU, the ZH10 supports network, UART and S.BUS control. The GCU supports both private protocol and MAVlink protocol.</li>
                        <li>Thanks to the Dual-IMU complementary algorithms with IMU
temperature control and carrier AHRS fusion, the D-80Pro provides a
stabilization accuracy at ±0.01°.</li>
                        <li>Can be mounted onto multiple carriers, whether downward or
upward.</li>
                        <li>With the GCU and the Dragonfly software, user can watch the image
and control the gimbal without protocol ducking.</li>
                        <li>Screen supports overlaying OSD information such as latitude, longitude and altitude. Image supports shooting point coordinate
EXIF save. </li>
                        <li>Supports ONVIF protocol.</li>
                        <li>14~53 VDC wide voltage input.</li>
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
    getImageUrl('introduction/zh10', 'table1', '.png'),
    getImageUrl('introduction/zh10', 'table2', '.png'),
]);

onMounted(() => {
    for (let i=1; i<=7; i++) {
        let url = getImageUrl('zh10', `6 (${i})`, '.jpg');
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
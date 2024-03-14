<template>
    <div class="root">
        <TopBar name="Gimbal ZH20" />
        <div class="introduct-part">
            <div class="introduct-text">
                <div class="text-title">
                    <span>ZH20L Night Vision Ranging Gimbal</span>
                </div>
                <div class="text-detail">
                    <div class="text-description">
                        <div class="description-title">
                            <span>Description</span>
                        </div>
                        <div class="description-detail">
                            <span>ZH20L is a 4K 20x optical zoom camera, a IR laser rangefinder with IRCUT filter and a IR laser
                                fill light. It supports 20x optical zoom, 75x digital zoom, 1500x hybrid zoom, with a total pixel of
                                20.35 million, which can clearly present the scene hundreds of meters away. With the laser fill lighting
                                and IRCUT night vision mode, clear images can be captured even in dark night. The maximum detection distance
                                of the laser rangefinder can reach 1800m. The pod can locate target with LRF and supply Lat/Long in DMS in
                                addition to range. The pod adopts professional three-axis mechanical stabilization technology, and the image
                                stabilization accuracy reaches ±0.01°. Support remote screen projection and docking command platform. It supports 
                                connection with unmanned aerial vehicles through the quick release interface, and can be used in many 
                                industries such as fire protection, forest public security, public security monitoring, search and rescue, 
                                and environmental protection law enforcement.
                            </span>
                        </div>
                    </div>
                    <div class="text-feature">
                        <div class="feature-title">
                            <span>Main Feature</span>
                        </div>
                        <ul>
                            <li>Integrated optical zoom camera, laser rangefinder and laser fill light.</li>
                            <li>1800m laser ranging, which can be used with unmanned aerial vehicles to locate thetarget position and height. and support Lat/Long in DMS of that target.</li>
                            <li>The optical zoom camera supports 20x optical zoom, the field angle range is 70.2° ~4, andthe optical zoom range is f: 4.1~81.6mm.</li>
                            <li>75 times digital zoom, 1500 times mixed zoom.</li>
                            <li>Video resolution 4K@25fps, photo resolution 6016*3384.</li>
                            <li>When the laser fill light is working, objects can be seen clearly in a completely darkenvironment. Laser Fill Light range at least 500M.</li>
                            <li>Integrate two independent laser illumination, The angles are 8° and 30° respectively.</li>
                            <li>The wavelength of laser fill light is 850+10nm; the safety level is 3FDA, IEC-3B.</li>
                            <li>EXIF data including LAT/LON/ALT/date/time/pod name/aperture/shutter and can displayand rec DMS format.</li>
                            <li>Support remote screen projection and docking command platform.</li>
                            <li>Mechanical three-axis image stabilization, +0.01°image stabilization accuracy.</li>
                            <li>Weight 890g.</li>
                            <li>Support Aperture and shutter manually adjusted.</li>
                        </ul>
                    </div>
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
    getImageUrl('introduction/zh20', 'table1', '.png'),
    getImageUrl('introduction/zh20', 'table2', '.png'),
]);

onMounted(() => {
    for (let i=1; i<=7; i++) {
        let url = getImageUrl('z8rc', `7 (${i})`, '.jpg');
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
                .text-description {
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 7px;
                    .description-title {
                        font-size: 20px;
                        font-weight: bold;
                    }
                }
                .text-feature {
                    display: flex;
                    flex-direction: column;
                    .feature-title {
                        font-size: 20px;
                        font-weight: bold;
                    }
                }
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
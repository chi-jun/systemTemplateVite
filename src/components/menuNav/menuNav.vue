<template>
    <el-menu :default-openeds="['1', '3']" active-text-color="#ffd04b" background-color="#545c64" default-active="/index"
        text-color="#fff" :router="true" :collapse="isCollapse">
        <template v-for="(menu, idx) in menuList" :key="idx">
            <el-sub-menu :index="menu.idx" v-if="menu.sonList.length > 0">
                <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                    <span>{{menu.name}}</span>
                </template>

                <template v-for="(son, sIdx) in menu.sonList" :key="sIdx">
                    <el-menu-item :index="son.path">{{son.name}}</el-menu-item>
                </template>
            </el-sub-menu>
            <el-menu-item :index="menu.path" v-else>
                <el-icon>
                    <location />
                </el-icon>
                <!-- <span></span> -->
                <template #title>{{menu.name}}</template>
            </el-menu-item>
            
        </template>
    </el-menu>
</template>

<script setup>
import { ref } from 'vue'
import { Menu as IconMenu, Message, Setting, Location, Document } from "@element-plus/icons-vue";

defineProps(['isCollapse'])

const menuList = [
    {idx: '1', name: '首页', icon: '', sonShow: false, sonList: [], path: '/index'},
    {idx: '2', name: '幼儿园信息', icon: '', sonShow: true, sonList: [
        {name: '幼儿园列表', path: '/login'},
        {name: '自营后台账号管理', path: ''},
        {name: '小程序代码管理', path: ''},
    ]}
]

//实例化defineEmits
// const emits = defineEmits([''])
 
 //关闭的点击事件
const handleClose = () => {
    // emits('update:modelValue', false)
}


</script>

<style lang="less" scoped>
.el-menu-item.is-active {
    background-color: grey;
}
</style>
<template>
  <el-container class="layout-container-demo" style="height: 100vh">
    <el-aside width="200px" style="background-color: #545c64;">
      <el-scrollbar>
        <menu-nav :isCollapse='isCollapse'></menu-nav>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header>
        <div class="toolbar">
          <div>
            <el-icon>
              <Fold @click="tapIsCollapse" />
            </el-icon>
          </div>
          <div style="display: flex; align-items: center;">
            <el-dropdown>
              <el-icon style="margin-right: 8px; margin-top: 1px">
                <setting />
              </el-icon>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>View</el-dropdown-item>
                  <el-dropdown-item>Add</el-dropdown-item>
                  <el-dropdown-item>Delete</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <span>Tom</span>
          </div>

        </div>
      </el-header>

      <el-main>
        <div class="home_content">
          <RouterView />
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router"
import { Menu as IconMenu, Message, Setting, Fold } from "@element-plus/icons-vue";

import MenuNav from "../src/components/menuNav/menuNav.vue";

const isCollapse = ref(false)

const tapIsCollapse = () => {
  isCollapse.value = !isCollapse.value
}

</script>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
}

.layout-container-demo .el-menu {
  border-right: none;
}

.layout-container-demo .el-main {
  padding: 10px;
  background: #ddd;
}

.layout-container-demo .toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
}

.el-menu-item.is-active {
  background-color: grey;
}

.home_content {
  border-radius: 10px;
  background: #fff;
  height: 100%;
}
</style>

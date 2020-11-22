<template>
  <div>

    <a-drawer
      title="Basic Drawer"
      placement="right"
      :closable="false"
      :visible="visible"
      @close="onClose"
    >
    <template v-slot:handle>
        <div class="handle" @click="visible = !visible">
            <a-icon :type="visible ? 'close' : 'setting'"></a-icon>
        </div>
    </template>
        <div>
            <a-radio-group  v-model="navTheme">
                <a-radio value="dark">
                黑色
                </a-radio>
                <a-radio value="lighn">
                白色
                </a-radio>

            </a-radio-group>
        </div>

    </a-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    onClose() {
      this.visible = false;
    },
  },
};
</script>
<style scoped>
    .handle {
        position: absolute;
        top:240px;
        right: 256px;
        width: 48px;
        height: 48px;
        background: #1890ff;
        color: #fff;
        font-size: 20px;
        text-align: center;
        line-height: 48px;
        border-radius: 3px 0 0 3px;


    }
</style>
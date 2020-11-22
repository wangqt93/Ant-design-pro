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
            <div class='handle' @click="visible = !visible">
                <a-icon type="setting"></a-icon>
            </div>
        </template>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
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
    afterVisibleChange(val) {
      console.log('visible', val);
    }
  },
};
</script>
<style scoped>
    /* .handle {
        position: absolute;
        top: 240px;
        right: 300px;
        width: 48px;
        height: 48px;
        background: #1890ff;
        color: #fff;
        font-size: 20px;
        text-align: center;
        line-height: 48px;
        border-radius: 3px 0 0 3px;

    } */
</style>
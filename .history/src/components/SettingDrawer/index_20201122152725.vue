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
    },
    onClose() {
      this.visible = false;
    },
  },
};
</script>

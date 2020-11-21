<template>
    <div>
        <a-layout id="components-layout-demo-side" style="min-height: 100vh">
            <a-layout-sider v-model="collapsed" collapsible>
                <div class="logo" />
                <SiderMenu/>
            </a-layout-sider>
            <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <Header/>
            </a-layout-header>
            <a-layout-content style="margin: 0 16px">
                <a-breadcrumb style="margin: 16px 0">
                <a-breadcrumb-item>User</a-breadcrumb-item>
                <a-breadcrumb-item>Bill</a-breadcrumb-item>
                </a-breadcrumb>
                <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
                Bill is a cat.
                </div>
            </a-layout-content>
            <a-layout-footer style="text-align: center">
                Ant Design ©2018 Created by Ant UED
            </a-layout-footer>
            </a-layout>
        </a-layout>
        
        
        <router-view></router-view>
        <Footer/>
    </div>
</template>
<script>
    import Header from './Header';
    import Footer from './Footer';
    import SiderMenu from './SiderMenu';
    export default {
        data() {
            return {
                collapsed: false,
            }
        },
        components: {
            Header,
            Footer,
            SiderMenu
        }
    }
</script>
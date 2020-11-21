<template>
    <div>
        <a-layout id="components-layout-demo-side" style="min-height: 100vh">
            <a-layout-sider v-model="collapsed" collapsible>
               
                <SiderMenu/>
            </a-layout-sider>
            <a-layout>
                <a-layout-header style="background: #fff; padding: 0">
                    <Header/>
                </a-layout-header>

                <a-layout-content style="margin: 0 16px">
                    <router-view></router-view>
                </a-layout-content>

                <a-layout-footer style="text-align: center">
                    <Footer/> 
                </a-layout-footer>
            </a-layout>
        </a-layout>
        
        
        
        
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
<style>
    #components-layout-demo-side .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
    }
</style>
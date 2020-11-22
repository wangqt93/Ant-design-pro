<template>
    <div :class="[`nav-theme-${navTheme}`, `nav-layout-${navLayout}`]">
        <a-layout id="components-layout-demo-side" style="min-height: 100vh">

            <a-layout-sider 
                v-if="navLayout === 'left'"
                :theme="navTheme"
                v-model="collapsed" 
                :trigger="null" 
                collapsible
                v-model="collapsed"
            >
                <div class="logo" >Ant Design Vue Pro</div>
                <SiderMenu/>
            </a-layout-sider>

            <a-layout>
                <a-layout-header style="background: #fff; padding: 0">
                    <a-icon class='trigger' :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="collapsed = !collapsed"></a-icon> <!-- 菜单栏折叠功能 -->
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
        <Drawer/>
    </div>
</template>
<script>
    import Header from './Header';
    import Footer from './Footer';
    import SiderMenu from './SiderMenu';
    import Drawer from '@/components/SettingDrawer';

    export default {
        data() {
            return {
                collapsed: false,    //菜单栏是否折叠
            }
        },
        computed: {
            navTheme() {
                return this.$route.query.navTheme || 'dark'
            },
            navLayout(){
                return this.$route.query.navLayout || 'left'
            }
        },
        components: {
            Header,
            Footer,
            SiderMenu,
            Drawer
        }
    }
</script>
<style scoped>
    #components-layout-demo-side .logo {
        height: 32px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px;
    }
    .trigger {
        padding: 0 20px;
        line-height: 64px;
        font-size: 20px;
    }
    .trigger:hover {
        
    }
</style>
<template>
    <div>
        <Header/>
        <SideMenu/>
        <router-view></router-view>
        <Footer/>
    </div>
</template>
<script>
    import Header from './Header';
    import Footer from './Footer';
    import SideMenu from './SiderMenu';

    export default {
        components: {
            Header,
            Footer,
            SideMenu
        }
    }
</script>
<template>
    <div class="sidebar-mini skin-blue wysihtml5-supported">
        <div class="wrapper">
            <header class="main-header" style="background-color: #3c8dbc;">
                <nav class="navbar navbar-static-top" role="navigation" style="display: flex; margin-left: 10px; margin-bottom: 0px;">
                    <ul class="nav navbar-nav nav-left" style="width: 70px;">
                        <li>
                            <a id="m-menu" title="Мониторинг на новой закладке"><i class="fa fa-tasks"></i><i class="fa fa-external-link"></i></a>
                        </li>
                    </ul>
                    <ul style="width: calc(100% - 245px);">
                        <li id="info" style="color: white; padding-top: 10px; padding-left: 8px; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; text-align: center; font-size: large;">
                        </li>
                    </ul>
                        <ul class="nav navbar-nav nav-right">
                            <li>
                                <a class="logo"><b>WEB-Vote</b>&nbsp;<strong style="font-size: x-small;">&quot;Демонстратор&quot;</strong></a>
                            </li>
                        </ul>
                </nav>
            </header>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "app-web-header",
        components: {
        },
        data() {
            return {
            }
        },
        created() {

        },
        mounted() {
            $(document).ready(function() {
                $(".nav-left>li:last-child").width(0).animate({"width": $(".wrapper").width()-$(".nav-left").width()-$(".nav-right").width()-10+"px"}, "slow");

                $("#m-menu").on("click", function() {
                    window.open("/floatmonitor");
                });

            });

        },
        beforeDestroy() {

        },
        computed: {

        },
        methods: {

        }
    }
</script>

<style scoped>

</style>

<template>
    <div>
        <DxDrawer
                :opened.sync="openState"
                :close-on-outside-click="false"
                opened-state-mode="shrink"
                reveal-mode="expand"
                :height="getHeight"
                :minSize="42"
                template="listMenu"
        >
            <template #listMenu>
                <div style="background-color: #1e282c;">
                    <float-menu @update="onUpdate($event)"></float-menu>
                </div>
            </template>
            <div>
                <app-web-header></app-web-header>
                <router-view name="float"></router-view>
            </div>
        </DxDrawer>
    </div>
</template>
<script>
    import DxDrawer from 'devextreme-vue/drawer';
    import DxRadioGroup from 'devextreme-vue/radio-group';
    import DxToolbar from 'devextreme-vue/toolbar';
    import FloatMenu from './menu';
    import AppWebHeader from "./header";

    export default {
        components: {
            DxDrawer,
            DxRadioGroup,
            DxToolbar,
            FloatMenu,
            AppWebHeader,
        },
        data() {
            return {
                openState: false,
                toolbarContent: [{
                    widget: 'dxButton',
                    location: 'before',
                    options: {
                        icon: 'menu',
                        onClick: () => this.openState = !this.openState
                    }
                }]
            };
        },
        computed: {
            getHeight(){
                return window.innerHeight;
            },

        },
        methods: {
            onUpdate(e) {
                //console.log(e);
                this.$router.push({name: e.name})
                //this.$emit('update', e.addeedItems[0]);
            }
        },
    }
</script>

<style scoped>
    html { overflow-x: hidden; overflow-y: hidden; }
</style>


<template>
    <div style="overflow-x: hidden !important; width: 150px; color: white;">
        <DxList
                :items="navigation"
                item-template="links"
                selection-mode="single"
                :height="getHeight"
                @selection-changed="navigate($event)"
        >
            <template #links="{ data }">
                    <li :to="{name: data.name}" :title="data.text" class="lnk" style="display: flex; padding-right: 10px; color: white;">
                                <i :class="'fa ' + data.icon"></i>
                    </li>
            </template>
        </DxList>
    </div>
</template>
<script>
    import { DxList } from 'devextreme-vue/list';

    export default {
        name: "float-menu",
        components: {
            DxList,
        },
        data() {
            return {
                navigation: [
                    { id: 2, text: 'Управление', icon: 'fa-edit', name: "float-control" },
                    { id: 3, text: 'Параметры', icon: 'fa-cogs', name: "float-config" },
                ]
            };
        },
        computed: {
            getHeight(){
                return window.innerHeight;
            },

        },
        methods: {
            navigate(e) {
                //console.log(e);
                //router.push({name: e.addeedItems[0].name})
                this.$emit('update', e.addedItems[0]);
            }
        },
    };
</script>
<style scoped>
    .sidebar-menu>li .fa {
        padding-left: 1px;
    }
    .sidebar-menu>li .fa-graduation-cap {
        padding-left: 0px;
    }
    .sidebar-menu>li .fa-info {
        padding-left: 6px;
    }

    .lnk:hover {
        border-left: solid;
        border-width: 3px;
        border-color: lime;
    }
    .router-link-active i {
        color: lime;
    }

</style>

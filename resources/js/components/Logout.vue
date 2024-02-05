<template>
</template>
<script>
    import {DxScrollView, DxTextBox, DxValidationGroup, DxButton} from "devextreme-vue";
    import {DxValidator, DxRequiredRule, DxValidationRule} from "devextreme-vue/validator";
    import serviceData from "../request";
    import router from '../routes';
    import notify from "devextreme/ui/notify";

    export default {
        components: {
            DxValidationGroup,
            DxScrollView,
            DxTextBox,
            DxValidator,
            DxValidationRule,
            DxRequiredRule,
            DxButton,
        },
        data() {
            return {
                email: null,
                password: null,
                has_error: false,
                has_error_block: false
            }
        },
        mounted() {
            //
            //this.$auth.logout();
            //router.push({ name: 'login' });
            console.log("++++++++++++++ LOGOUT +++++++++++++++++")
        },
    }
</script>
<style lang="scss">
    @import "./resources/sass/variables.base";

    .login-header {
        text-align: center;
        margin-bottom: 40px;

    }
    .title {
        color: $base-accent;
        font-weight: bold;
        font-size: 30px;
        margin: 0;
    }

    :host {
        display: flex;
        width: 100%;
        height: 100%;
    }

    .dx-card {
        width: 330px;
        margin: auto auto;
        padding: 40px;

    }

</style>


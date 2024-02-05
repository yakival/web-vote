<template>
    <div v-if="!getAuth">
            <div class="dx-card"
                 style="position: absolute; left: calc(100vw / 2 - 100px); top: calc(100vh / 2 - 150px);">

                <div class="login-header">
                    <div class="title">WEB-VOTE</div>
                </div>

                <form
                    @submit="handleSubmit"
                >
                    <DxForm
                        :form-data="this.authdata"
                        :show-validation-summary="false"
                        :show-colon-after-label="false"
                        validation-group="customerData"
                    >
                        <DxSimpleItem data-field="username" text>
                            <DxLabel text="Электронная почта" location="top"/>
                            <DxRequiredRule message="Email is required"/>
                            <DxValidationRule type="email" message="Email is invalid">
                            </DxValidationRule>
                        </DxSimpleItem>
                        <DxSimpleItem data-field="password" :editor-options="passOptions" text>
                            <DxLabel text="Пароль" location="top"/>
                            <DxRequiredRule message="Password is required"/>
                        </DxSimpleItem>
                        <DxButtonItem
                            :button-options="buttonOptions"
                            horizontal-alignment="center"
                        />
                    </DxForm>
                </form>

           </div>
    </div>
</template>
<script>
    import {DxScrollView, DxTextBox, DxValidationGroup, DxButton} from "devextreme-vue";
    import {DxValidator, DxRequiredRule, DxValidationRule} from "devextreme-vue/validator";
    import serviceData from "../request";
    import router from '../routes';
    import notify from "devextreme/ui/notify";
    import {mapState} from "vuex";
    import axios from "axios";

    import DxForm, {
        DxGroupItem,
        DxSimpleItem,
        DxItem,
        DxButtonItem,
        DxLabel,
        DxCompareRule,
        DxRangeRule,
        DxStringLengthRule,
        DxPatternRule,
        DxEmailRule,
        DxAsyncRule,
    } from 'devextreme-vue/form';
    import DxAutocomplete from 'devextreme-vue/autocomplete';
    import {DxCheckBox} from "devextreme-vue/check-box";

    export default {
        components: {
            DxValidationGroup,
            DxScrollView,
            DxTextBox,
            DxValidator,
            DxValidationRule,
            DxButton,
            DxGroupItem,
            DxSimpleItem,
            DxButtonItem,
            DxLabel,
            DxRequiredRule,
            DxCompareRule,
            DxPatternRule,
            DxRangeRule,
            DxEmailRule,
            DxStringLengthRule,
            DxForm,
            DxAutocomplete,
            DxAsyncRule,
            DxCheckBox,
            DxItem,
        },
        data() {
            return {
                authdata: {
                    username: null,
                    password: null,
                },
                has_error: null,
                buttonOptions: {
                    text: 'Войти',
                    type: 'default',
                    useSubmitBehavior: true
                },
                passOptions: {
                    mode: 'password',
                },
            }
        },
        created() {
            document.addEventListener('info', async (ev) => {
                await this.$store.dispatch('setCromeId' , ev.detail.id);
                await this.sendAuthData();
            });
        },
        computed: {
            ...mapState({
                check: state => state.check,
                user: state => state.user,
                account: state => state.account,
                creator: state => state.creator,
                token: state => state.token,
                chrome_id: state => state.chrome_id,
                redirect_from: state => state.redirect_from,
            }),
            getAuth(){
                return this.$store.state.check;
            }
        },
        methods: {
            async logout() {
                try {
                    await this.$store.dispatch('logout')
                    this.$router.push({name: 'home'})
                } catch (e) {
                    this.errors = e.data
                }
            },
            handleSubmit(e) {
                e.preventDefault();
                setTimeout(async (e) => {
                    await this.login(e);
                }, 100, this)
                return true;
            },
            async login(app) {
                app.has_error = null;
                try {
                    const ret = await app.$store.dispatch('login' , {'email' : app.authdata.username , 'password' : app.authdata.password});
                    //if (ret.block || ret.email_verified_at === null) {
                    //    await this.$store.dispatch('logout');
                    //    app.has_error = "Ошибка авторизации пользователя";
                    //    return;
                    //}
                    await app.$store.dispatch('acceptAuth');
                    //////////////////////////////////////////////////////////////////////////////
                    if(this.redirect_from == null) {
                        app.$router.push({name: 'config'});
                    }else{
                        app.$router.push({path: this.redirect_from.path});
                    }
                }
                catch (e){
                    app.has_error = "Ошибка авторизации пользователя";
                }
            },
        }
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


<template>
    <div>
        <div class="dx-card"
             style="position: absolute; left: calc(100vw / 2 - 150px); top: calc(100vh / 2 - 300px);">

            <div class="login-header">
                <div class="title">TIME-METRIC</div>
            </div>
            <app-card-title title="Регистрация пользователя"></app-card-title>
            <form @submit="handleSubmit">

                <dx-form
                    id="form"
                    :on-content-ready="validateForm"
                    :col-count="1"
                    :form-data="item"
                    :show-validation-summary="false"
                    :show-colon-after-label="true"
                    validation-group="vForm"
                >
                    <dx-item data-field="name" editor-type="dxTextBox" >
                        <dx-label text="Пользователь" />
                        <dx-required-rule message="Введите имя пользователя"/>
                    </dx-item>

                    <dx-item data-field="email" editor-type="dxTextBox" :editor-options="{ mode: 'email' }" >
                        <dx-label text="E-Mail" />
                        <dx-required-rule message="Введите адрес электронной почты"/>
                    </dx-item>

                    <dx-item data-field="password1" editor-type="dxTextBox" :editor-options="passwordOptions" >
                        <dx-label text="Пароль" />
                        <dx-required-rule message="Введите пароль"/>
                        <dx-compare-rule
                            :comparison-target="passwordComparison1"
                            type="compare"
                            :ignore-empty-value="true"
                            message="Не совпадают пароль и подтверждение"
                        />
                    </dx-item>
                    <dx-item data-field="password2" editor-type="dxTextBox" :editor-options="passwordOptions" >
                        <dx-label text="Подтверждение пароля" />
                        <dx-required-rule message="Подтвердите пароль"/>
                        <dx-compare-rule
                            :comparison-target="passwordComparison2"
                            type="compare"
                            :ignore-empty-value="true"
                            message="Не совпадают пароль и подтверждение"
                        />
                    </dx-item>

                    <dx-item>
                        <dx-button
                            id="login"
                            type="default"
                            text="Регистрация"
                            use-submit-behavior="true"
                            @keyup.enter="login"
                            width="100%"></dx-button>
                    </dx-item>

                </dx-form>
            </form>
            <div class="dx-field" style="text-align: center; display: block; padding-top: 30px;">
                <a href="this.href" @click="back">Вход в систему</a>
            </div>
        </div>
    </div>
</template>
<script>
    import {DxScrollView, DxTextBox, DxValidationGroup, DxButton} from "devextreme-vue";
    import {DxValidator, DxRequiredRule, DxValidationRule} from "devextreme-vue/validator";
    import { DxForm, DxItem, DxSimpleItem, DxGroupItem, DxLabel, DxCompareRule} from 'devextreme-vue/form';
    import serviceData from "../request";
    import router from '../routes';
    import notify from "devextreme/ui/notify";
    import {mapState} from "vuex";
    import DxToolbar from "devextreme-vue/toolbar";
    import Form from "devextreme/ui/form";
    import appCardTitle from "./core/card-title";

    export default {
        components: {
            DxValidationGroup,
            DxScrollView,
            DxTextBox,
            DxValidator,
            DxValidationRule,
            DxButton,
            DxForm,
            DxItem,
            DxSimpleItem,
            DxGroupItem,
            DxLabel,
            DxToolbar,
            DxRequiredRule,
            DxCompareRule,
            Form,
            appCardTitle,
        },
        data() {
            return {
                item: {
                    name: null,
                    email: null,
                    password1: null,
                    password2: null,
                },
                passwordOptions: {
                    mode: 'password',
                    onChange: () => this.validatePass()
                },
            }
        },
        created() {
            //
        },
        computed: {
            ...mapState({
                check: state => state.check,
                user: state => state.user,
                account: state => state.account,
                creator: state => state.creator,
                token: state => state.token,
            }),
            validate: function() {
                return this.$refs["validate"].instance;
            },
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
            async login() {
                const app = this;
                await axios.post('/api/block',
                    { action: "UserDetailView", data: {email: app.email} }
                )
                    .then(async (resp) => {
                        if (resp.data.data) {
                            if (resp.data.data.block || resp.data.data.email_verified_at === null) {
                                app.has_error_block = true
                                if(this.check) {
                                    await this.$store.dispatch('logout')
                                }
                                return;
                            }
                            try {
                                await this.$store.dispatch('login' , {'email' : app.email , 'password' : app.password});
                                //////////////////////////////////////////////////////////////////////////////
                                // ACCOUNT
                                const member = app.account.members.find(sl => sl.userprofileid === app.user.id);
                                /*
                                document.dispatchEvent(new CustomEvent('setAuthEvent', {
                                    detail: {
                                        server: window.location.origin,
                                        userinfo: {
                                            id: app.user.id,
                                            name: app.user.name,
                                            email: app.user.email,
                                            role: app.user.role,
                                            avatar: app.user.avatar,
                                            accountid: app.user.account,
                                            memberid: member.id,
                                        },
                                        token: app.token,
                                        email: app.email,
                                    }
                                }));
                                 */
                                //////////////////////////////////////////////////////////////////////////////
                                app.$router.push({name: 'home'})
                            }
                            catch (e){
                                app.has_error = true
                            }
                        }
                    });
            },
            validateForm(e){

            },
            validatePass(){
                Form.getInstance($("#form")[0]).validate();
            },
            passwordComparison1() {
                return this.item.password2;
            },
            passwordComparison2() {
                return this.item.password1;
            },
            async handleSubmit(e) {
                e.preventDefault();
                const frm = Form.getInstance($("#form").get(0));
                const res = frm.validate();
                if(!res.isValid){
                    return;
                }
                console.log("submit");

                await axios.post('/api/register', this.item)
                    .then((resp) => {
                        this.$router.push({name: 'login'})
                    })
                    .catch(function (error) {
                        console.log(error.response);
                        notify({
                            message: error.response.data.message,
                            position: {
                                my: 'center top',
                                at: 'center top'
                            }
                        }, 'error', 5000);
                    });
            },
            async back() {
                const frm = Form.getInstance($("#form").get(0));
                frm.resetValues();
                app.$router.push({name: 'login'})
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
        width: 400px;
        margin: auto auto;
        padding: 40px;

    }

</style>


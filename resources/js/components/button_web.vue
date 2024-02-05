<template>
    <button type="button" class="btn bg-purple" style="min-width: 165px; height: 165px; padding-top: 0px;" v-on:click="sendData()">
        <span style="font-size: 80px; font-weight: bolder;">{{ getLabel }}</span><br>
        <i :id="getID" class="fa fa-minus" style="font-size: 55px; color: lightgrey;" :ccolor="getColor"></i>
    </button>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "app-button",
        props: {
            pos: Number,
            data: Object,
            settings: Object,
            ro: Boolean,
        },
        data() {
            return {
            };
        },
        mounted() {
            //this.ro = false;
        },
        created() {

        },
        computed: {
            getID: function() {
                return "lamp" + this.pos;
            },
            getLabel: function () {
                if(this.settings.buttons) {
                    const btn = this.settings.buttons.split(",");
                    if (btn[this.pos - 1] !== "0") {
                        return btn[this.pos - 1];
                    } else {
                        return "";
                    }
                }else{
                    return "";
                }
            },
            getColor: function () {
                if(this.data.key) {
                    if(this.data.key === this.pos){
                        $("#lamp"+this.pos).css({ color: "greenyellow" });
                        return "greenyellow";
                    }else{
                        $("#lamp"+this.pos).css({ color: "lightgrey" });
                        return "lightgrey";
                    }
                }else{
                    $("#lamp"+this.pos).css({ color: "lightgrey" });
                    return "lightgrey";
                }
            },
            getDisable: function() {
                return this.ro;
            }
        },
        methods: {
            async sendData() {
                if(this.ro) return;
                if(this.getLabel === "") return;

                let app = this;
                this.$emit('set-disable', true);
                $("#lamp"+this.pos).css({ color: "yellow" });
                await axios.post('/api/pult/senddata.asp', { 'data': this.pos, 'fio': this.data.fio })
                    .then(function (resp) {
                        app.$emit('set-disable', false);
                    })
                    .catch(function (resp) {
                        app.$emit('set-disable', false);
                        console.log(resp);
                    });
            }
        }
    }
</script>

<style scoped>

</style>

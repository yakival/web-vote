import notify from "devextreme/ui/notify";
import store from "./store/index";
import router from "./routes";
import axios from "axios";

export default function serviceData(act, data) {
    //if(!store.state.check){
    //    store.dispatch('logout').then(r => router.push("login")).catch(e => router.push("login"));
    //}
    return new Promise(resolve => {
        axios.post('/api/data-service',
            { action: act, data: data }
        )
            .then((resp) => {
                resolve(resp.data.data);
            })
            .catch(async function (error) {
                console.log(error.response);
                if (error.response.data.message.indexOf("CSRF token mismatch") !== -1) {
                    await store.dispatch('logout').then(() => {
                        router.push({ name: 'login' });
                    });
                } else {
                    notify({
                        message: error.response.data.message,
                        position: {
                            my: 'center top',
                            at: 'center top'
                        }
                    }, 'error', 5000);
                }
                resolve(null);
            });
    });
}

Vue.component('error', {
    data() {
        return {
            textError: '',
        }
    },
    methods: {
        setError(err) {
            this.textError = err;
        },
    },
    computed: {
        showError() {
            return this.textError !== '';
        },
    },
    template: `
        <div class="json__error" v-if='showError'>
            <div class="json__error-window">
                <button class="json__error-btn" @click='setError("")'>&times;</button>
                <p>{{textError}}</p>
            </div>
        </div>`
});
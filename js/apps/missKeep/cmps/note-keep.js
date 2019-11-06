import dogPreview from  './dog-preview.cmp.js';

// Vue.component('dog-list', {
export default {
    props: ['dogs'],
    template: `
    <section class="dog-list-container">
        <ul class="dog-list">
            <dog-preview v-for="(currDog, idx) in dogs" :key="currDog.id" v-bind:dog="currDog">
            </dog-preview>
        </ul>
    </section>
    `,
    components: {
        dogPreview
    }
}



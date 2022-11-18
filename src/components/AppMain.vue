<script>
import ResultsList from './ResultsList.vue';
import { state } from '../state.js';

export default {
    name: 'AppMain',
    components: {
        ResultsList,
    },
    data() {
        return {
            state
        }
    },
}
</script>
<template>
    <main>
        <div class="container-fluid p-5">
            <ResultsList />
        </div>
    </main>
</template>

<style lang="scss" scoped>

</style>
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    redditApi: service(),

    model() {
        let result = this.redditApi.getDankMemes();
        // console.log(result);
    }
});

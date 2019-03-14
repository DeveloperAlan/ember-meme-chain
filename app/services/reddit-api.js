import Service from '@ember/service';
import { set } from '@ember/object';
import snoowrap from "snoowrap";
import config from '../config/environment';

export default Service.extend({
    init() {        
        console.log("reddit-api is currently working");
        this._super(...arguments);
    },

    async getDankMemes() {
        if (!this.snoowrap) {
            console.log(config)
            let reddit = new snoowrap({
                userAgent: config.APP.name,
                clientId: config.APP.clientId,
                clientSecret: config.APP.clientSecret,
                refreshToken: config.APP.refreshToken,
            })
            set(this, 'snoowrap', reddit);
        }
        // console.log(this.snoowrap)
        try {
            console.log(this.snoowrap)
            let result = this.snoowrap.getHot().then(console.log);
        } catch(e) {
            console.log(e)
        }
    }
});

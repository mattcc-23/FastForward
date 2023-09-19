import BypassDefinition from './BypassDefinition.js';

export default class Anonyviet extends BypassDefinition {
    constructor() {
        super()
        // custom bypass required bases can be set here
    }

    execute() {
        const urlParam = this.helpers.getQueryParam('url');
        if (urlParam) this.helpers.safelyNavigate(decodeURIComponent(urlParam));
    }
}

export const matches = ['anonyviet.com'];

import moment from 'moment'

export const DateMixin = {
    methods : {
        formatDate (str, outputFormat) {
            return moment(str).format(outputFormat)
        },

        diffForHumans (str) {
            return moment(str).startOf('hour').fromNow();
        }
    }
}


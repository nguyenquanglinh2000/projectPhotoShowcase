export default {
    state: {
        listPhoto: [
            'https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-01-min.jpg',
            'https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-02-min.jpg',
            'https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-03-min.jpg',
            'https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-04-min.jpg',
            'https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-05-min.jpg',
            'https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-06-min.jpg',
            'https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-07-min.jpg',
            'https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-08-min.jpg'
        ]
    },
    actions: {

    },
    mutations: {

    },
    getters: {
        getListPhoto: state => state.listPhoto
    }
}

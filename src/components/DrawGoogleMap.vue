<template>
    <div>
        <h2>Google Maps with 2 Marks</h2>

        <gmap-map :center="center" :zoom="10" style="width:100%;  height: 555px;">
            <gmap-marker :key="index" v-for="(gmp, index) in locations" :position="gmp" @click="center = gmp">
            </gmap-marker>
        </gmap-map>

    </div>
</template>
 
<script>
export default {
    name: "DrawGoogleMap",
    data() {
        return {
            center: {
                lat: -6.9175,
                lng: 107.6191
            },
            locations: [],
            currentLocation: null
        };
    },

    mounted() {
        this.setLocationLatLng();
    },
    //set lat and lng for 2 marks
    methods: {
        setPlace(loc) {
            this.currentLocation = loc;
        },
        setLocationLatLng: function () {
            navigator.geolocation.getCurrentPosition(geolocation => {
                this.center = {
                    lat: geolocation.coords.latitude,
                    lng: geolocation.coords.longitude
                };
            });

            this.locations = [
                {
                    lat: -6.960848,
                    lng: 107.966894,
                    label: 'Mark 1'
                },
                {
                    lat: -6.968004,
                    lng: -252.433891,
                    label: 'Mark 2'
                }
            ];

        }
    }
};
</script>
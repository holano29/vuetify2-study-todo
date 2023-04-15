<template>

<div class="ma-4">
    <h1 class="subtitle-1 grey--text">Team Page</h1>

    <v-container class="my-3 text-justify">
        <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg3 v-for="person in team" v-bind:key="person.name">
                <v-card flat class="text-center ma-3">
                    <v-responsive class="pt-4">
                        <v-avatar
                            size="100"
                            color="grey lighten-2"
                        >
                            <img v-bind:src="person.avatar" v-bind:alt="person.name">
                        </v-avatar>
                       
                        <v-card-text>
                            <div class="subheading">{{ person.name }}</div>
                            <div class="grey--text">{{ person.role }}</div>
                            <v-card-actions>
                                <v-btn text color="grey">
                                    <v-icon small left>mdi-message</v-icon>
                                    <span>Message</span>
                                </v-btn>
                            </v-card-actions>
                        </v-card-text>
                    </v-responsive>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</div>

</template>

<script>
export default {
    name: 'Team',
    data: () => ({
        team: [
            {name: 'Juan Dela Cruz', role: 'Web Developer', avatar: '/avatar-1.png'},
            {name: 'Maria Clara', role: 'Graphic Designer', avatar: '/avatar-2.png'},
            {name: 'Jose Broccoli', role: 'Web Developer', avatar: '/avatar-3.png'},
            {name: 'Pedro Potro', role: 'Social Media Maverick', avatar: '/avatar-4.png'},
            {name: 'Petra Precilda', role: 'Marketing Head', avatar: '/avatar-5.png'},
            {name: 'Mando Rugas', role: 'Back-end Developer', avatar: '/avatar-1.png'},
            {name: 'Vina Raak', role: 'Social Media Maverick', avatar: '/avatar-2.png'},
            {name: 'Manda Rambong', role: 'Database Administrator', avatar: '/avatar-3.png'},
        ]        
    }),

}
</script>

<style>

</style>

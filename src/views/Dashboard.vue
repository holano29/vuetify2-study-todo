<template>

<div class="dashboard ma-4">
  <h1 class="subtitle-1 grey--text">Dashboard</h1>

  <v-container class="my-4">

    <v-layout row wrap class="mb-3">

      <v-tooltip top>
        <template v-slot:activator="{on, attrs}">
          <v-btn small text color="grey"
                v-on:click="sortBy('title')"
                v-bind="attrs"
                v-on="on">
            <v-icon small left>mdi-folder</v-icon>
            <span class="caption text-lowercase">By project name</span>
          </v-btn>
        </template>
        <span>Sort by project name</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{on, attrs}">
          <v-btn small text color="grey"
                v-on:click="sortBy('person')"
                v-bind="attrs"
                v-on="on">
            <v-icon small left>mdi-account</v-icon>
            <span class="caption text-lowercase">By person</span>
          </v-btn>
        </template>
        <span>Sort by person</span>
      </v-tooltip>
      
    </v-layout>

    <v-card flat class="pa-3 white" v-for="project in projects" v-bind:key="project.id">
      <v-layout row wrap :class="`pa-2 project ${project.status}`">

        <v-col xs12 md6 >
          <div class="caption grey--text">Title</div>
          <div> {{ project.title }} </div>
        </v-col>  

        <v-col xs6 sm4 md2>
          <div class="caption grey--text">Person</div>
          <div> {{ project.person }} </div>
        </v-col>

        <v-col xs6 sm4 md2>
          <div class="caption grey--text">Due by</div>
          <div> {{ project.due }} </div>
        </v-col>

        <v-col xs2 sm4 md2>
          <div class="d-flex flex-row-reverse">
            <v-chip small id="chip" :class="`${project.status} white--text caption my-2`"> {{ project.status }} </v-chip>
          </div>
        </v-col>
      </v-layout>
      <v-divider></v-divider>
    </v-card>
    
  </v-container>

</div>
</template>

<script>
import db from '@/fb';
import { getDocs, collection, doc, onSnapshot, QuerySnapshot } from "firebase/firestore";

  export default {
    name: 'Dashboard',

    components: {
      
    },

    data: () => ({
      projects: [],
        // {title: 'Design a new website', person: 'Juan Dela Cruz', due: 'January 1, 2023', status: 'ongoing', content: 'Ex id aliqua ea aliquip mollit eiusmod cillum nisi quis. Adipisicing minim est do id amet esse ea Lorem pariatur. Amet deserunt laboris dolor mollit in commodo. Culpa et consequat ex reprehenderit consectetur deserunt. Sint elit eiusmod culpa duis duis mollit ipsum ex et veniam voluptate. Dolore commodo esse mollit eiusmod ullamco elit voluptate anim. Veniam nisi sunt et est laboris sint id cillum.'},
        // {title: 'Code up homepage', person: 'Maria Clara', due: 'January 10, 2023', status: 'completed', content: 'Id aliqua eu reprehenderit cillum tempor minim. Consectetur est nisi deserunt esse excepteur nostrud duis ipsum eiusmod reprehenderit. Consequat mollit sit aliquip esse adipisicing Lorem in non ipsum dolore velit proident nisi laboris.'},
        // {title: 'Design video thumbnails', person: 'Jose Broccoli', due: 'Februay 2, 2023', status: 'completed', content: 'Do consequat Lorem excepteur velit nostrud eu. Dolore et ullamco labore consectetur do laborum cillum sunt dolore. Do ea officia dolore est consectetur officia qui officia sint aute eiusmod nisi. Non aliquip excepteur officia reprehenderit velit do pariatur aliquip consectetur culpa ad labore velit quis.'},
        // {title: 'Create community forum', person: 'Pedro Potro', due: 'December 30, 2022', status: 'overdue', content: 'Sit qui ex Lorem pariatur ipsum nulla. Cillum reprehenderit qui cillum aliqua occaecat dolore. Enim officia aliqua ex velit fugiat duis cillum ipsum officia enim do mollit.'},
      //],

      ascending: true

    }),

    methods: {
      sortBy(prop){ // sort projects ascending or descending
        if(this.ascending){
          this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1);
        } else{
          this.projects.sort((a, b) => a[prop] > b[prop] ? -1 : 1);
        }
          this.ascending = !this.ascending;
      }
    }, //methods

    async created(){ //Lifecycle Hook
      const snapshot = await getDocs(collection(db, 'projects'));

      snapshot.forEach( doc => {
        this.projects.push({
          ...doc.data(), //... means restructure the each data as object
          id: doc.id
        });
      });
    }
  }//export
</script>

<style>
.project.completed {
  border-left: 4px solid #3cdac2;
}

.project.ongoing {
  border-left: 4px solid orange;
}

.project.overdue {
  border-left: 4px solid tomato;
}

#chip.completed {
  background: #3cdac2;
}

#chip.v-chip.ongoing {
  background: #ffaa22;
}

#chip.v-chip.overdue {
  background: #f83e70;
}

</style>

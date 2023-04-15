<template>

<div class="ma-4">
    <h1 class="subtitle-1 grey--text">Project Page</h1>

    <v-container class="my-3 text-justify">
       <v-expansion-panels flat>
            <v-expansion-panel
            v-for="project in myProjects"
            :key="project.id"
            >
                <v-expansion-panel-header>
                    {{ project.title }}
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                   <v-card flat>
                    <v-card-text class="px-4 grey--text">
                        <div class="font-weight-bold">Due by {{ project.due }}</div>
                        <div>{{ project.content }}</div>
                    </v-card-text>
                   </v-card>
                </v-expansion-panel-content>
                <v-divider></v-divider>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-container>
</div>
  
</template>

<script>
import db from '@/fb';
import { getDocs, collection, doc, onSnapshot, QuerySnapshot } from "firebase/firestore";

export default {
    name: 'Projects',
    data: () => ({
        projects: [],
    //         {title: 'Design a new website', person: 'Juan Dela Cruz', due: 'January 1, 2023', status: 'ongoing', content: 'Ex id aliqua ea aliquip mollit eiusmod cillum nisi quis. Adipisicing minim est do id amet esse ea Lorem pariatur. Amet deserunt laboris dolor mollit in commodo. Culpa et consequat ex reprehenderit consectetur deserunt. Sint elit eiusmod culpa duis duis mollit ipsum ex et veniam voluptate. Dolore commodo esse mollit eiusmod ullamco elit voluptate anim. Veniam nisi sunt et est laboris sint id cillum.'},
    //         {title: 'Code up homepage', person: 'Maria Clara', due: 'January 10, 2023', status: 'completed', content: 'Id aliqua eu reprehenderit cillum tempor minim. Consectetur est nisi deserunt esse excepteur nostrud duis ipsum eiusmod reprehenderit. Consequat mollit sit aliquip esse adipisicing Lorem in non ipsum dolore velit proident nisi laboris.'},
    //         {title: 'Design video thumbnails', person: 'Jose Broccoli', due: 'Februay 2, 2023', status: 'completed', content: 'Do consequat Lorem excepteur velit nostrud eu. Dolore et ullamco labore consectetur do laborum cillum sunt dolore. Do ea officia dolore est consectetur officia qui officia sint aute eiusmod nisi. Non aliquip excepteur officia reprehenderit velit do pariatur aliquip consectetur culpa ad labore velit quis.'},
    //         {title: 'Create community forum', person: 'Juan Dela Cruz', due: 'December 30, 2022', status: 'overdue', content: 'Sit qui ex Lorem pariatur ipsum nulla. Cillum reprehenderit qui cillum aliqua occaecat dolore. Enim officia aliqua ex velit fugiat duis cillum ipsum officia enim do mollit.'},
            
    //   ],
    }),
    computed: {
        myProjects(){
            return this.projects.filter(project => {
                return project.person === 'Juan Dela Cruz'
            });                    
        }
    },

    async created(){ //Lifecycle Hook
      const snapshot = await getDocs(collection(db, 'projects'));

      snapshot.forEach( doc => {
        this.projects.push({ //we need to push object
          ...doc.data(), //... means restructure the each data as object
          id: doc.id //add id as field to each object
        });
      });
    }

}
</script>

<style>

</style>
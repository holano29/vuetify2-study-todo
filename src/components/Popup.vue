<template>
    <v-dialog
      v-model="dialog"
      width="600"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                depressed
                color="success"
                v-bind="attrs"
                v-on="on">
                Add New Project
            </v-btn>
        </template>

        <v-card>
            <v-card-title class="text-h5 grey lighten-2">
            New Project
            </v-card-title>

            <v-card-text>
                <v-form class="px-3" ref="form">
                    <v-text-field label="Title"
                                v-model="title"
                                prepend-icon="mdi-folder"
                                :rules="inputRules">
                    </v-text-field>
                    
                    <!-- Date Picker -->
                    <v-menu
                        v-model="menuDate"
                        :close-on-content-click="true"
                        max-width="290"
                        offset-y
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field :value="computedDateFormattedDate"
                                clearable
                                label="Date"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                                @click:clear="date = ''"
                                prepend-icon="mdi-calendar"
                                :rules="inputRules">
                            </v-text-field>
                        </template>
                        <v-date-picker
                            v-model="date"
                            @change="menu1 = false"
                        ></v-date-picker>
                    </v-menu>


                    <v-textarea label="Information"
                        v-model="content"
                        prepend-icon="mdi-pencil"
                        :rules="inputRules">
                    </v-textarea>

                </v-form>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn small depressed color="red" class="white--text" v-on:click="dialog = false">
                Cancel
            </v-btn>
            <v-btn small depressed color="info" class="white--text" v-on:click="resetForm">Reset</v-btn>
            <v-btn small depressed color="success"
                v-on:click="addNewProject"
                v-bind:loading="loading"
                >Add Project</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { format, parseISO } from 'date-fns';
import db from '@/fb';
import { doc, setDoc, collection, addDoc } from "firebase/firestore"; 

export default {
    data: () => ({
        dialog: false,
        menuDate: false,
        // title, content and date can be turned into object
        // this will be helpful if you're gonna pass this to other components
        title: '', 
        content: '',
        date: format(parseISO(new Date().toISOString()), 'yyyy-MM-dd'),
        inputRules : [
            v => v.length >= 3 || 'Minimum length is three characters.',

        ],
        loading: false
    }),

    computed: {
        computedDateFormattedDate() {
            return this.date ? format(parseISO(this.date), 'EEEE, MMMM do yyyy') : '';
        },
    },

    methods: {
        async addNewProject(){
            if(this.$refs.form.validate()){
                this.loading = true;

                const project = {
                    title: this.title,
                    content: this.content,
                    due: format(parseISO(this.date), 'EEEE, MMMM do yyyy'),
                    person: 'Juan Dela Cruz',
                    status: 'ongoing'
                };

                await addDoc(collection(db, 'projects'), project)
                .then(() => {
                    this.$emit('project_added');
                    console.log('Added to the Database.');
                })
                .catch((error) => {
                    console.error("Error writing document.", error);
                });

                this.resetForm();
            }
        },
        resetForm(){
            this.title = '';
            this.content = '';
            this.date = '';
            this.loading = false;
        }
    }
}
</script>
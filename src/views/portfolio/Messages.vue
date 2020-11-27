<template>
  <div>
    <Navbar />
    <v-card max-width="500" class="mx-auto">
      <v-toolbar color="pink" dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Inbox</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-checkbox-marked-circle</v-icon>
        </v-btn>
      </v-toolbar>

      <v-list two-line>
        <v-list-item-group
          v-model="selected"
          multiple
          active-class="pink--text"
        >
          <template >
            <v-list-item v-for="messages in getMessages" :key="messages.id">
              <template v-slot:default="{ active }">
                <!-- toggle -->
                <v-list-item-content>
                  <v-list-item-title v-text="messages.name"></v-list-item-title>
                  <v-list-item-subtitle
                    class="text--primary"
                    v-text="messages.subject"
                  ></v-list-item-subtitle>
                  <v-list-item-subtitle
                    v-text="messages.message"
                  ></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-list-item-action-text
                    v-text="messages.timestamp"
                  ></v-list-item-action-text>
                  <v-icon v-if="!active" color="grey lighten-1">
                    star_border
                  </v-icon>

                  <v-icon v-else color="yellow"> star </v-icon>
                </v-list-item-action>
              </template>
              <v-divider></v-divider>
            </v-list-item>

            <!-- <v-divider v-if="index + 1 < items.length" :key="index"></v-divider> -->
          </template>
          <div v-if="isAdminUser">
          <li v-for="message in getMessages" :key="message.id" >
            Name: {{ message.name }} |
            Subject: {{ message.subject }}|
            Email: {{ message.email }} |  
            Message: {{ message.message }}|
            </li></div>
            <div v-else>
              <li>
                You do not have permission to perform this action.
              </li>
            </div>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
// import { getAPI } from "@/api/axiosConfig"; //axiosBase
import { mapGetters } from "vuex"
export default {
  data: () => ({
    selected: [2],
    items: [
      {
        action: "15 min",
        headline: "Brunch this weekend?",
        title: "Ali Connors",
        subtitle:
          "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
      },
    ],
    errors: [],
    token: null
  }),
  components: {
    Navbar,
  },
  mounted() {
    this.fetchingMessages();
    console.log("messages mounted");
  },
  computed: {
  ...mapGetters(["getMessages", "isAdminUser"]),    
  },
  methods: {
    fetchingMessages() {
      // this.getMessages  
      // let token = localStorage.getItem('token')
      console.log(this.token)
      this.$store.dispatch('fetchMessages')
        .then(() => {
          // console.log(res.data);
          console.log("success")
        })
        .catch((error) => {
          console.error(error);
          let error_data = error.response.data
          console.log(error_data)
          for(const field_error in error_data){
            this.errors.push(error_data[field_error][0])
          }
        });
    },
  },
};
</script>
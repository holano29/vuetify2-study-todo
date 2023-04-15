<template>

<nav>

	<v-snackbar
		v-model="snackbartoggle"
		top
		color="success">
		<span>You successfully added new project.</span>
		<v-btn text
			@click.native="snackbartoggle = false">
			CLOSE
		</v-btn>
	</v-snackbar>

	<v-app-bar flat app>
		<v-app-bar-nav-icon class="grey--text" v-on:click="drawerShown = !drawerShown">
		</v-app-bar-nav-icon>

		<v-toolbar-title class="text-uppercase grey--text">
			<span class="font-weight-light">Todo </span>
			<span>Application</span>
		</v-toolbar-title>

		<v-spacer></v-spacer>

		<div class="text-center">
			<v-menu offset-y>
				<template v-slot:activator="{ on, attrs }">
					<v-btn text color="grey" v-bind="attrs" v-on="on" >
						<v-icon left>mdi-chevron-down</v-icon>
						<span>Menu</span>
					</v-btn>
				</template>

				<v-list>
					<v-list-item
					v-for="link in links"
					:key="link.text"
					router
					:to="link.route"
					>
						<v-list-item-title>{{ link.text }}</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>
		</div>

		<v-btn text color="grey">
			<span>Sign Out</span>
			<v-icon right>mdi-exit-to-app</v-icon>
		</v-btn>

	</v-app-bar>

	<v-navigation-drawer app class="primary" v-model="drawerShown">

		<v-layout column align-center>
			<v-flex class="mt-5">
				<v-avatar
					size="100"
					color="success"
				>
					<img src="/avatar-5.png" alt="profile">
				</v-avatar>
				<p class="white--text subheading mt-5">Juan Dela Cruz</p>
			</v-flex>

			<v-flex class="mt-4 mb-3">
				<Popup @project_added="snackbartoggle = true"/> <!-- Popup.vue -->
			</v-flex>

		</v-layout>		
		<v-list>
			<v-list-item v-for="link in links" v-bind:key="link.text" router v-bind:to="link.route">
				<v-list-item-icon>
					<v-icon class="white--text">{{ link.icon }}</v-icon>
				</v-list-item-icon>
				<v-list-item-title class="white--text"> {{link.text}} </v-list-item-title>
			</v-list-item>
		</v-list>


		<template v-slot:append>
			<div class="pa-0 text-center">
				<p class="white--text"> &copy; {{ new Date().getFullYear() }}</p>
			</div>
		</template>

	</v-navigation-drawer>



</nav>

</template>

<script>
import Popup from './Popup.vue'

export default {

name: 'NavBar',
// Need to register the imported components
components: { Popup, },

data: () => ({ // no need for return keyword if following this syntax
    drawerShown: true,
	snackbartoggle: false,
	links: [
		{icon: "mdi-view-dashboard", text: "Dashboard", route:"/"},
		{icon: "mdi-folder", text: "My Projects", route:"/projects"},
		{icon: "mdi-account-group", text: "Team", route:"/team"},
		{icon: "mdi-information", text: "About", route:"/about"},
	],
}),

};

</script>
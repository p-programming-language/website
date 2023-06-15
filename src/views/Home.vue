<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import HTTPServerExample from "@/components/code-examples/HTTPServerExample.vue"
import HTTPRequestExample from "@/components/code-examples/HTTPRequestExample.vue"
</script>

<script lang="ts">
export default {
  data() {
    return {
      latestRelease: "..."
    };
  },
  created() {
    this.fetchLatestRelease();
  },
  methods: {
    async fetchLatestRelease(): Promise<void> {
      fetch("https://api.github.com/repos/cosmo-lang/cosmo/releases/latest")
        .then(response => response.json())
        .then(data => this.latestRelease = data.tag_name);
    }
  }
};
</script>

<template>
	<h1 class="bright title">Cosmo</h1>
	<h3>A statically-typed interpreted programming language written in pure Crystal.</h3>
	<h3>It aims to be extensible, readable, and easy to use.</h3>

	<div id="main-button-list">
		<ul>
			<router-link to="/install">
				<button class="main-button">Install</button>
			</router-link>
			<a href="https://discord.gg/WHyHh39dwh" target="_blank">
				<button class="main-button">Try It</button>
			</a>
			<a href="https://github.com/cosmo-lang" target="_blank">
				<button class="main-button">GitHub</button>
			</a>
		</ul>
	</div>

	<h1 class="bright push-down-much">Latest release: <p style="font-weight: 700; display: inline;">{{ latestRelease }}</p></h1>

	<HTTPServerExample class="push-down"/>
	<HTTPRequestExample class="push-down"/>
</template>
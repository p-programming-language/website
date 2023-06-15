<!-- eslint-disable vue/multi-word-component-names -->
<!-- TODO: latest release header -->

<script setup lang="ts">
import HTTPServerExample from "@/components/HTTPServerExample.vue"
</script>

<template>
	<h1 class="title">Cosmo</h1>
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

	<HTTPServerExample/>
</template>
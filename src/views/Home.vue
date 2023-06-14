<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">

</script>

<template>
	<h1 id="title">Cosmo</h1>
	<br/>
	<h3>A statically-typed interpreted programming language written in pure Crystal.</h3>
	<br/>
	<h3>It aims to be extensible, readable, and easy to use.</h3>
	<br/>

	<div id="main-button-list">
		<ul>
			<router-link to="/install">
				<button class="main-button">Install</button>
			</router-link>
			<a href="https://discord.gg/WHyHh39dwh" target="_blank">
				<button class="main-button">Try It</button>
			</a>
		</ul>
	</div>

	<div id="http-example">
		<code class="cosmo-codeblock">
## A very basic HTTP server<br/>
use Server from "http"<br/>
<br/>
puts("Listening @ http://localhost:8080")<br/>
Server.listen(8080, &void (string->any res, string->any req): {<br/>
	res->send("Hello world, got %{req::path}!")<br/>
})<br/>
		</code>
	</div>
</template>
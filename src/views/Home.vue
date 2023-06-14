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

	<pre id="http-example"><code class="cosmo-codeblock"><span class="cch-com">## A very basic HTTP server</span>
<span class="cch-kw">use</span> <span class="cch-class">Server</span> <span class="cch-kw">from</span> <span class="cch-str">"http"</span>

<span class="cch-fn">puts</span><span class="cch-b1">(</span><span class="cch-str">"Listening @ <u>http://localhost:8080</u>"</span><span class="cch-b1">)</span>
<span class="cch-class">Server</span><span class="cch-op">.</span><span class="cch-fn">listen</span><span class="cch-b1">(</span><span class="cch-num">8080</span>, <span class="cch-op">&</span><span class="cch-kw">void</span> <span class="cch-b2">(</span><span class="cch-kw">string</span><span class="cch-op">-></span><span class="cch-kw">any</span> <span class="cch-id">res</span>, <span class="cch-kw">string</span><span class="cch-op">-></span><span class="cch-kw">any</span> <span class="cch-id">req</span><span class="cch-b2">)</span><span class="cch-op">:</span> <span class="cch-b3">{</span>
&ThickSpace;<span class="cch-id">res</span><span class="cch-op">-></span><span class="cch-fn">send</span><span class="cch-b1">(</span><span class="cch-str">"Hello world, got <span class="cch-op">%</span><span class="cch-op">{</span></span><span class="cch-id">req</span><span class="cch-op">::</span><span class="cch-id">path</span><span class="cch-str"><span class="cch-op">}</span>!"</span><span class="cch-b1">)</span>
<span class="cch-b3">}</span><span class="cch-b1">)</span></code></pre>
</template>
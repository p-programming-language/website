<template>
  <pre><code class="cosmo-codeblock"><span class="cch-com">## A basic HTTP request</span>
<span class="cch-kw">use</span> <span class="cch-fn">request</span> <span class="cch-kw">from</span> <span class="cch-str"><span class="cch-op">"</span>http<span class="cch-op">"</span></span>

<span class="cch-kw">any</span> <span class="cch-id">data</span> <span class="cch-op">=</span> <span class="cch-fn">request</span><span class="cch-b1">(</span><span class="cch-str"><span class="cch-op">"</span>https://api.sampleapis.com/coffee/hot<span class="cch-op">"</span></span><span class="cch-op">,</span> <span class="cch-op">&</span><span class="cch-kw">void</span> <span class="cch-b2">(</span><span class="cch-kw">string</span><span class="cch-op">-></span><span class="cch-kw">any</span> <span class="cch-id">res</span><span class="cch-b2">)</span><span class="cch-op">:</span> <span class="cch-b3">{</span>
&ThickSpace;<span class="cch-id">res</span><span class="cch-op">-></span><span class="cch-id">body</span><span class="cch-op">-></span><span class="cch-fn">json</span>
<span class="cch-b3">}</span><span class="cch-b1">)</span>

<span class="cch-fn">puts</span><span class="cch-b1">(</span><span class="cch-id">data</span><span class="cch-b1">)</span></code></pre>
</template>
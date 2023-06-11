<script lang="ts">
	import '/src/lib/css/markdown.css'

	import { onMount, afterUpdate } from 'svelte';

	import MarkdownIt from 'markdown-it';
	import hljs from 'highlight.js';

	export let post;

	const content = post.content;

	let source = `Loading...`;

	function addContent(content: string) {
		const md = new MarkdownIt();
		var result = md.render(content);
		source = result;
		return ''; // So it doesn't print "undefined" on the page
	}

	afterUpdate(() => {
		addContent(post.content);
	});
</script>

<svelte:head>
	<!-- <link rel="stylesheet" href="/src/lib/css/markdown.css" /> -->
</svelte:head>

{addContent(content)}

<article class="markdown-body">
	{@html source}
</article>

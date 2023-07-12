<script lang="ts">
	import type { PageData } from './$types';
	import Post from './Post.svelte';
	import PageMetaData from '/src/components/PageData.svelte';

	export let data: PageData;

	$: post = data.post.attributes;
</script>

<PageMetaData
	title="{post.title}"
	description="{post.description}"
	route="docs/{post.slug}"
/>

<article class="">
	<header class="">
		<p class="text-base font-medium text-primary-500">{post.category}</p>

		<h1 class="text-3xl font-bold tracking-tight text-slate-900">{post.title}</h1>
	</header>
	<!-- Description -->
	<p class="mt-2 text-xl text-slate-600">
		{post.description}
	</p>
	<!-- Video Embed 
			{#if post.video}
				<div style="position:relative;padding-top:56.25%;">
					<iframe
						src={post.video}
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
						style="position:absolute;top:0;left:0;width:100%;height:100%;"
					/>
				</div>
			{/if} -->

	<!-- Body of Article -->
	<article class="mt-4">
		<Post post={post} />
	</article>
</article>

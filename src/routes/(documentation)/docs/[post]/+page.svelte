<script lang="ts">
	import type { PageData } from './$types';
	import Post from './Post.svelte';

	export let data: PageData;

	$: post = data.post.attributes;
</script>

<title>{post.title}</title>
<!-- Related Articles -- <link rel="canonical" href="" /> -->
<!-- Embed Data -->
<meta name="title" content={post.title} />
<meta name="description" content={post.description} />
<meta name="keywords" content={post.tags} />
<!-- Open Graph -->
<meta name="og:title" content={post.title} />
<meta name="og:description" content={post.description} />
<meta name="og:url" content="https://anchored.host/docs/{post.slug}" />
<meta name="theme-color" data-react-helmet="true" content="#50C878" />
<!-- Robots -->
<meta name="robots" content="index, follow" />
<!-- /Embed Data -->

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

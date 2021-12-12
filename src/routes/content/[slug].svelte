<script context="module">
  export async function load({page, fetch}) {
    const url = "/api/docs";
    const res = await fetch(url);
    const data = await res.json();
    //console.log(data);

    console.log(page.params.slug);
    return {
      props: {
        data,
      }
    };
  };
</script>

<script>
  export let data;
</script>

<p>Hello</p>

{#each data as item}
{item.fullPath}<br/>
{/each}

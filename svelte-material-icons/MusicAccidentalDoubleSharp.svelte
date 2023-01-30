<script>
  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
  export let ariaLabel = undefined;
  export let ariaHidden = false;
  export let title = null;
  export let desc = null;

  let className = undefined;
  export { className as class }
</script>

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M15.41 10H17V7H14V8.59L12 10.59L10 8.59V7H7V10H8.59L10.59 12L8.59 14H7V17H10V15.41L12 13.41L14 15.41V17H17V14H15.41L13.41 12L15.41 10Z" fill="{color}"/></svg>
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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M4 2H14V7H16V13H13.5L10 17H8L4.5 13H2V7H4V2M23 14.5L21.6 16.7L23 18.9L21 22L19.2 21.1L20.7 18.9L19.2 16.7L21.2 13.6L23 14.5M18.7 14.5L17.2 16.7L18.7 18.9L16.7 22L14.9 21.1L16.3 18.9L14.9 16.7L16.9 13.6L18.7 14.5" fill="{color}"/></svg>
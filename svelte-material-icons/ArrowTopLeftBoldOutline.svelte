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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M14.12,8.46L19.78,14.12L14.12,19.78L8.46,14.12L4.22,18.36V4.22H18.36L14.12,8.46M6.34,13.41L8.46,11.29L14.12,16.95L16.95,14.12L11.29,8.47L13.41,6.34H6.34V13.41Z" fill="{color}"/></svg>
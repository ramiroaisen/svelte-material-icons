<script>
  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
  export let ariaLabel = void 0;
  export let ariaHidden = void 0;
  export let title = void 0;
  export let desc = void 0;

  let className = void 0;
  export { className as class }
</script>

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M5.64,4.22H19.78V18.36L15.54,14.12L9.88,19.78L4.22,14.12L9.88,8.46L5.64,4.22M17.66,6.34H10.59L12.71,8.46L7.05,14.12L9.88,16.95L15.54,11.29L17.66,13.41V6.34H17.66Z" fill="{color}"/></svg>
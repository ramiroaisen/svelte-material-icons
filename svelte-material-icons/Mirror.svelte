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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M12 1C16.69 1 20.5 5.93 20.5 12C20.5 18.08 16.69 23 12 23C7.31 23 3.5 18.08 3.5 12C3.5 5.93 7.31 1 12 1M12 3C8.41 3 5.5 7.03 5.5 12C5.5 16.97 8.41 21 12 21C15.59 21 18.5 16.97 18.5 12C18.5 7.03 15.59 3 12 3M8.29 10.28L11.53 7.03L12.59 8.09L9.35 11.34L8.29 10.28M8.7 14.61L14.36 8.95L15.42 10L9.76 15.67L8.7 14.61Z" fill="{color}"/></svg>